var http = require('http');
var express = require('express')
var path = require('path');
var app = express();
var port = 5000;

app.use(express.static('./'))

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + './build/index.html'))
})

var server = http.createServer(app);

server.listen(port, function() {
  console.log('server is listening on port', port);
})