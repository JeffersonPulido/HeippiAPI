var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usersSchema = new Schema({
    idNumber: Number,
    email: String,
    phone: Number,
    password: String
})

var Users =  mongoose.model('Users', usersSchema)
module.exports = Users