var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pubRouter = require('./routes/pub');
var authRouter = require('./routes/auth');

// json校验
var expressJwt = require('express-jwt');
const fs = require('fs')
var privateKey = fs.readFileSync('./utils/private.key');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//  token 校验
var expressJwt = require('express-jwt');
app.use(expressJwt({ 
  secret: privateKey,
  algorithms:['HS256'],
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
  // 排除Token校验的路径
}).unless({path: ['/auth/login','/auth/register']}));

app.use(function (err, req, res, next) {
  console.log(err.name)
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({code:100,msg:'token校验失败'});
  }
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pub', pubRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
