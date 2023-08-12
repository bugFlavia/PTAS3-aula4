const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.post('/user', userController.createUser);
routes.get('/user', userController.searchUsers);

routes.post(/user/authenticated, userController.authenticatedUser)
modules.exports = routes;