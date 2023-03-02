var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var users = new Schema({
    idNumber: Number,
    email: String,
    phone: Number,
    password: String
})

module.exports = mongoose.model('Users', users)