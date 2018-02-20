'use strict';

const router = require('express').Router();

// check for valid tokens
const checkAuth = require('../middleware/check-auth')

// user controller
const UserController = require('../controllers/users');

// user routes
router.post('/signup', UserController.user_signup);
router.post('/login', UserController.user_login);
router.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = router;