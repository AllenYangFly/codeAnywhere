var app = require('koa')();
var serve = require('koa-static');
var router = require('koa-router')();

// x-response-time

// //  '/'路由
// app.use(function *(ctx, next){
//   if(ctx.request.url == "/next") {
//     ctx.response.body = "index page";
//   }  else {
//     yield next;
//   }
//   console.log("yield 1");
// });

// // '/user'路由
// app.use(function *(ctx, next){
//   if(ctx.request.url == "/user") {
//     ctx.response.body = "user page"
//   } else {
//     yield next;
//   }
// })


// app.use(function *(ctx, next) {
//   if(ctx.request.url == '/about') {
//     ctx.response.body = "user page" 
//   } else {
//     yield next;
//   }
// });



router.get('/home', function *(ctx, next) {
  ctx.response.sendfile('./about.html');
  console.log("I'm router");
});

router.post('/loginInfo', function *(ctx, next) {
    this.set({
      'Access-Control-Allow-Origin': '*'
    });
    this.response.body = '{"name": "allen", "age": 21}';
    console.log("post data");
});


// router.get('/loginInfo', function *(ctx, next) {
//     this.body = "I'm allen"
// });

app.use(serve('.'));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);



//  同时监听两个端口
// http.createServer(app.callback()).listen(3000);
// http.createServer(app.callback()).listen(3001);
