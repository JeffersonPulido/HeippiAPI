const express = require('express')

const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('login', {
        message: req.flash('loginMessage')
    })
});

Router.post('/login', (req, res) => {

});

module.exports = Router;