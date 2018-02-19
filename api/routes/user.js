'use strict';

const express = require('express');
const router = express.Router();
// auth check middleware here

// user controller
const UserController = require('../controllers/users');

// user routes
router.post('/signup', UserController.user_signup);
router.post('/login', UserController.user_login);
router.delete('/:userId', UserController.user_delete);

module.exports = router;