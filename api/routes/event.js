'use strict';

const router = require('express').Router();

router.post('/', (req, res, next) => {
    console.log('body', req.body.hello);
})