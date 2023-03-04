const express = require('express');
const passport = require('passport');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('signup', {
        message: req.flash('signupMessage')
    })
});

Router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
})); 

module.exports = Router;