const express = require('express')
const UserController = require('../controllers/UserController')

const Router = express.Router();

Router.get('/', UserController.index)
      .post('/', UserController.create)    
      .get('/:key/:value', UserController.find, UserController.show)
      .put('/:key/:value', UserController.find, UserController.update)
      .delete('/:key/:value', UserController.find, UserController.remove);

module.exports = Router;