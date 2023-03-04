const express = require('express');
const passport = require('passport');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('profile', {
        user: req.user
    })
});

module.exports = Router;