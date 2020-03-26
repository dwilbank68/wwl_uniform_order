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
            res.send('new order posted');
        }
    )
    
    app.patch(
        '/api/orders/:orderId',
        requireLogin,
        async (req, res) => {
            const filter = {_id:req.params.orderId};
            let order = await Order.findOne(filter)
            await order.updateOne({processed:!order.processed, dateProcessed: Date.now()})
            await order.save();
            res.send('order processed');
        }
    )

}