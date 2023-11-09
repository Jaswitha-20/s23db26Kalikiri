var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var FurnitureRouter = require('./routes/furniture');
var BoardRouter = require('./routes/board');
var ChooseRouter = require('./routes/choose');
var furniture = require("./models/furniture");
var resourceRouter = require("./routes/resource");

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/furniture', FurnitureRouter);
app.use('/board', BoardRouter);
app.use('/choose', ChooseRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

async function recreateDB() {
  // Delete everything
  await furniture.deleteMany();
  let instance1 = new furniture({ Furniture: "Sofa", Design: 'modern', Cost: 50000, Brand: 'RoyalOak' });
  instance1.save().then(doc => {
    console.log("First object saved")
  }).catch(err => {
    console.error(err)
  });

  let instance2 = new furniture({ Furniture: "Recliner", Design: 'comfy', Cost: 10000, Brand: 'Pepperfry' });
  instance2.save().then(doc => {
    console.log("Second object saved")
  }).catch(err => {
    console.error(err)
  });

  let instance3 = new furniture({ Furniture: "Dining Table", Design: 'Glass', Cost: 60000, Brand: 'Ikea' });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }).catch(err => {
    console.error(err)
  });
}
let reseed1 = true;
if (reseed1) { recreateDB(); }




