const _ = require('lodash');
const {Path} = require('path-parser');
const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin.js');

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

}