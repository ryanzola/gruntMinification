'use strict';

var express = require('express');
var path = require('path')
var port = 3000;
var app = express();

app.get('/message', function(req, res) {
  res.status(200).json({
    message: 'hej tho'
  })
});

app.listen(port, function() {
  console.log('server is listening on port', port);
});
