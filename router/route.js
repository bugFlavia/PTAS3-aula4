const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.post('/user', userController.createUser);
routes.get('/user', userController.searchUsers);
routes.delete('user', userController.deleteUser);
routes.put('/user', userController.updateUser);
routes.post('/user/authenticated', userController.authenticatedUser);

module.exports = routes;