const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    admin: {type: Boolean, default: false},
    googleId: String,
    credits: {type:Number, default:0},
    email: String, 
    name: String,
    photo: String
})

mongoose.model('users', userSchema)