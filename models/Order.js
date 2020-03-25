const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    name: String,
    email: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    items: Object,
    dateOrdered: Date,
})

mongoose.model('orders', orderSchema)