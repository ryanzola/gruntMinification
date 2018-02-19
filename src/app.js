var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var morgan = require('morgan');

var app = express();
var upload = multer({ dest: '../uploads ' });

var userRoutes = require('../api/routes/user');

mongoose.connect(
  'mongodb://' +
    process.env.MONGO_ATLAS_USER +
    ':' +
    process.env.MONGO_ATLAS_PW +
		'@cluster0-shard-00-00-ta2bv.mongodb.net:27017,cluster0-shard-00-01-ta2bv.mongodb.net:27017,cluster0-shard-00-02-ta2bv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
	);
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Accept, Authorization, Content-Type'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/user', userRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;

  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// move these to their respective controllers
app.get('/message', function(req, res) {
  res.status(200).json({
    message: 'hej tho'
	});
	console.log('hej tho happened');
});

app.post('/event', function(req, res) {
  console.log('body', req.body.hello);
});

module.exports = app;
