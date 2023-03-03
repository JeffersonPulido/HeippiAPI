var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usersSchema = new Schema({
    idNumber: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: ["Hospital", "Paciente"]
    }
})

const User = mongoose.model('User', usersSchema)
module.exports = User