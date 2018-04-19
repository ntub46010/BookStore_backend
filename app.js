var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.use('/product_home', require('./routes/product_home'));
app.use('/product_detail', require('./routes/product_detail'));
app.use('/favorite', require('./routes/favorite'));
app.use('/profile_info', require('./routes/profile_info'));
app.use('/profile_shelf', require('./routes/profile_shelf'));
app.use('/mailbox', require('./routes/mailbox'));
app.use('/product_edit', require('./routes/product_edit'));
app.use('/chat_conversation', require('./routes/chat_conversation'));
app.use('/add_favorite', require('./routes/add_favorite'));
app.use('/check_favorite', require('./routes/check_favorite'));
app.use('/send_message', require('./routes/send_message'));
app.use('/post_product', require('./routes/post_product'));
app.use('/update_product', require('./routes/update_product'));
app.use('/update_profile_info', require('./routes/update_profile_info'));
app.use('/chat_product', require('./routes/chat_product'));
app.use('/evaluate_member', require('./routes/evaluate_member'));
app.use('/check_evaluation', require('./routes/check_evaluation'));
app.use('/delete_product', require('./routes/delete_product'));
app.use('/upload_images', require('./routes/upload_images'));
app.use('/upload_avatars', require('./routes/upload_avatars'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(80, function(){
 console.log('Server is running!');
});

module.exports = app;
