var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connectMongo = require('connect-mongo'); // or connect-redis
var session = require('express-session');

var app = express();

// view engine setup
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const MongoStore = connectMongo(session);
app.use(session({
    name: 'SID',
    secret: 'SID',
    resave: true,
    saveUninitialized: false,
    cookie: {
			httpOnly: false,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
	},
    //缓存session
    store: new MongoStore({
        url: 'mongodb://localhost:27017/brackets'
    })
}))
require('./routes/routes.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = '系统出现故障，商务合作请电话联系!'
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
