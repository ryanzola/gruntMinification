'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'hej tho'
    })
})

module.exports = router;