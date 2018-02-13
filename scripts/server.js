'use strict';

var express = require('express');
var port = 3000;
var app = express();

app.get('/', function(req, res) {
  res.status(200).json({
    message: 'hej'
  });
});

app.listen(port, function() {
  console.log('server is listening on port', port);
});
