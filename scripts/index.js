'use strict';

var http = require('http');
var app = require('./app');
var port = process.env.PORT || 5000;
var server = http.createServer(app);

server.listen(port, function() {
  console.log('server is listening on port', port)
});