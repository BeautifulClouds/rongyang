const express = require("express")
const app = express()
//引入post请求包
const bodyParser = require('body-parser');
const path = require('path');
//连接数据库
require("./util/dbConfig/dbConfig")
//临时处理一下跨域
app.use(require("./util/cors"))
//中间件
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"))
//解析post请求
app.use(bodyParser.urlencoded({
    extended:true
}));
//加载静态资源
app.use(express.static(path.join(__dirname, 'public')));
//调用session
app.use(require("./util/session/session"))
//路由监听
app.use("/", require("./routes/index"))
//监听端口
app.listen(3000)

// var createError = require('http-errors');
// var express = require('express');
//
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var http = require('http');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
//
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
// app.listen(3000);
// module.exports = app;
