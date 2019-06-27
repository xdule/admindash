var createError = require('http-errors');
var express = require('express');
var cors= require('cors');
var path = require('path');
var mysql= require('mysql');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt= require('jsonwebtoken');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var testAPIRouter = require("./routes/testAPI");

var app = express();

var connection= mysql.createConnection({
host:'localhost',
user:'root',
port:'3307',
password:'password',
database:'reactdb'


});

app.use(cors());

connection.connect(err=>{
  if(err){return err;}
});

app.get('/allproducts',verifyToken, (req,res)=>{
  
  connection.query('Select * from post', (err,result)=>
  {
    if(err){
      return res.send(err)
    }else
    {
      
      return res.json({data:result})
    }

  }  )
});
/*
app.post('/api/login', (req, res) =>{

  // insert code here to actually authenticate, or fake it
  const user = { id: 3 };
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM   token for secret 
  // then return a token, secret key should be an env variable
  const token = jwt.sign({ user: user.id }, 'secret');
  res.json({
    message: 'Authenticated! Use this token in the "Authorization" header',
    token: token
  });
});
*/



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/testAPI', testAPIRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post',postsRouter);
/*app.use('/post',function(req, res, next) {
  postsRouter;
})*/


/*
port = process.env.PORT || 9000;
app.listen(port);*/
/*var routes = require('./routes/posts')(app); //importing route
routes(app);*/

function verifyToken(res,req,next)
{
    const bearerHeader = req.headers['authorization'];
    if(typeof(bearerHeader)!=='undefined')
    {
      const bearer= bearerHeader.split(' ');
      const bearerToken=bearer[1];
      res.token=bearerToken;
      next();
    }else
    {
      res.sendStatus(403);
    }

};



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
