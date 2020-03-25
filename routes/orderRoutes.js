const _ = require('lodash');
const {Path} = require('path-parser');
const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin.js');

const Order = mongoose.model('orders')

module.exports = (app) => {

    app.get('/api/orders', 
        requireLogin,
        async (req, res) => {
            const orders = await Order
                .find({_user: req.user.id});
            res.send(orders);
        }
    );

    app.get('/api/allorders', 
        requireLogin,
        async (req, res) => {
            const orders = await Order
                .find();
            res.send(orders);
        }
    );

    app.post(
        '/api/orders',
        requireLogin,
        async (req, res) => {
            const {name, email, _id, ...items} = req.body;
            const order = new Order({
                name, email, items,
                _user: _id,
                dateOrdered: Date.now()
            })
            await order.save();
            res.send('boom');
        }
    )

    // app.post(
    //     '/api/surveys',
    //     requireLogin,
    //     requireCredits,
    //     async (req, res) => {
    //         const {title, subject, body, recipients} = req.body;
    //         const survey = new Survey({
    //             title, subject, body,
    //             recipients: recipients.split(',').map(email => ({email:email.trim()})),
    //             _user: req.user.id,
    //             dateSent: Date.now()
    //         })
    //         const mailer = new Mailer(survey, surveyTemplate(survey));
    //         try {
    //             await mailer.send();
    //             await survey.save();
    //             req.user.credits -= 1;
    //             const user = await req.user.save();
    //             res.send(user);
    //         } catch (e) {
    //             res.status(422).send(e);
    //         }
    //     }
    // )

}