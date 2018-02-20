'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
    return res.status(200).json({
        docker: 'rocks!'
    })
})

module.exports = router;