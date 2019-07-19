var createError = require('http-errors');

var express = require('express');
var path = require('path');
var sql = require('mssql');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//sqlService Connect Config
var config = {
    user: 'CSLWIN10/SA',
    password: 'sa',
    server: '192.168.14.113',
    database: 'database',
    options: {
        encrypt: true
    }
};
app.get('/api/user',(req,res) => {
    debugger
   sql.connect(config).then(() =>{
       //Query
       new sql.Request()
           .input('input_parameter',sql.Int,1002)
           .query('select * from AM_Node order by AN_ID').then((recordset)=>{
               console.dir(recordset);
               res.json(recordset);
       }).catch((err)=>{
           //error
           console.log(err);
           res.send(err);
       }).catch(()=>{
           //error
           console.log(err);
           res.send(err);
       })
    })
});
app.post('api/user',(req,res) =>{
   //
});
app.delete('api/user/:userId',()=>{
   //
});
app.listen(8888,()=>{
   console.log('启动监听');
});
module.exports = app;
