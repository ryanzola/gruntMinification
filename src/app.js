var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var morgan = require('morgan');

var app = express();
var upload = multer({ dest: '../uploads ' });

// routes
var dockerRoutes = require('../api/routes/docker');
var eventRoutes = require('../api/routes/event');
var healthRoutes = require('../api/routes/health');
var messageRoutes = require('../api/routes/message');
var userRoutes = require('../api/routes/user');

mongoose.connect(
  'mongodb://ryanzola:fkOH8oBQkHfFGtRb@cluster0-shard-00-00-ta2bv.mongodb.net:27017,cluster0-shard-00-01-ta2bv.mongodb.net:27017,cluster0-shard-00-02-ta2bv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
	);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

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

app.use('/docker', dockerRoutes);
app.use('/event', eventRoutes);
app.use('/health', healthRoutes);
app.use('/message', messageRoutes);
app.use('/user', userRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;

  next(error);
});


// error handling

// development error handler
// will print stack trace
if (app.get('env') === 'development') {
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send();
  })
}

// production error handler
// no stack traces leaked to user
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send();
});


module.exports = app;
