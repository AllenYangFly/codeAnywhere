var express = require('express');
var app = express();

app.use('/static', express.static('public'));

// alll所有请求都会执行
app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

var cb1 = function(req, res, next) {
    console.log("I'm cb1");
    next();
};

var cb2 = function(req, res, next) {
    console.log("I'm cb2");
    next();
};

var cb3 = function(req, res, next) {
    console.log("index.html");
    res.sendfile('public/layout/index.html');
    next();
};

var cb4 = function(req, res) {
    // res.redirect('static/img/banner1.jpg');
};
// 对网站首页的访问返回 "index.html页面" 字样
app.get('/', [cb1, cb2, cb3, cb4]);

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});




// res.download()   提示下载文件。
// res.end()   终结响应处理流程。
// res.json()  发送一个 JSON 格式的响应。
// res.jsonp() 发送一个支持 JSONP 的 JSON 格式的响应。
// res.redirect()  重定向请求。
// res.render()    渲染视图模板。
// res.send()  发送各种类型的响应。
// res.sendFile    以八位字节流的形式发送文件。
// res.sendStatus()    设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。


//  router，针对一个路由加强耦合
// app.route('/')
//     .get(function(req, res) {

//     })
//     .post(function(req, res) {

// })

var server = app.listen(3001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is start" + host  + port);
});