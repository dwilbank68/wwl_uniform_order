const _ = require('lodash');
const {Path} = require('path-parser');
const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin.js');
const requireCredits = require('../middleware/requireCredits.js');
const Mailer = require('../services/Mailer.js');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate.js');

const Survey = mongoose.model('surveys')

module.exports = (app) => {

    app.get('/api/surveys', 
        requireLogin,
        async (req, res) => {
            const surveys = await Survey
                .find({_user: req.user.id})
                .select({recipients:false});
            res.send(surveys);
        }
    );

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post(
        '/api/surveys',
        requireLogin,
        requireCredits,
        async (req, res) => {
            const {title, subject, body, recipients} = req.body;
            const survey = new Survey({
                title, subject, body,
                recipients: recipients.split(',').map(email => ({email:email.trim()})),
                _user: req.user.id,
                dateSent: Date.now()
            })
            const mailer = new Mailer(survey, surveyTemplate(survey));
            try {
                await mailer.send();
                await survey.save();
                req.user.credits -= 1;
                const user = await req.user.save();
                res.send(user);
            } catch (e) {
                res.status(422).send(e);
            }
        }
    )

    app.post('/api/surveys/webhooks', (req,res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        _.chain(req.body)
            .map(({email, url}) => {
                const pathname = new URL(url).pathname;
                const match = (p.test(pathname));
                const {surveyId, choice} = match;
                if (match) return {email, surveyId, choice};
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({surveyId, email, choice}) => {
                const queryObj = {
                    _id: surveyId,
                    recipients: { $elemMatch: { email: email, responded: false }}
                };
                const changeObj = {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                };
                Survey.updateOne(queryObj, changeObj).exec();
            })
            .value();
        res.send({});
    })
}