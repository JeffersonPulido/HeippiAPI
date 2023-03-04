const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const usuarioSchema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    }
})

usuarioSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

usuarioSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('Usuario', usuarioSchema)