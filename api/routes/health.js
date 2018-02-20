'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
    return res.status(200).json({
        healthy: true
    })
})

module.exports = router;