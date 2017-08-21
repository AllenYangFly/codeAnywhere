q1：“请进行自我介绍，并且说说你所经历的项目，及在项目里你觉得比较难的点”

这个地方虽然我一直在bb，不过在面试官看来可能都是小打小闹吧。以及这种问题我相信每个人面试都会被问到，那么答案也就因人而异咯。我一直在bb的其实是我这篇文章基于react的影院购票应用里面的选座组件，有兴趣的童鞋欢迎交流。我知道很low，但是能力有限=。=

q2：“css实现一个三列布局，要求左右固定200px，中间部分自适应”

<!DOCTYPE html>  
<html>  
    <head>  
        <meta charset="UTF-8">  
        <title>layout_box</title>  
        <link rel="stylesheet" type="text/css" href="../css/layout_box.css">  
    </head>  
    <style>
      html,body{ margin: 0px;width: 100%; }  
      #left,#right{
        width: 200px;
        height: 200px; 
        background-color: #ffe6b8;
        position: absolute;
      }
      #left{left:0px;}  
      #right{right: 0px;}  
      #center{margin:2px 210px ;background-color: #eee;height: 200px; }  
    </style>
    <body>  
        <div id = "left">我是左边</div>  
        <div id = "right">我是右边</div>  
        <div id = "center">我是中间</div>  
    </body>  
</html>
这是当时我给出的，使用绝对布局的方式来达到效果。同样采用float也可以，只不过那样要改变三个div的顺序，如果保证顺序的话，即3个节点依次为左中右。采用float应该不太行。同样如果不涉及兼容低版本的情况下，flex是最方便的，有兴趣可以去看阮一峰老师的一篇文章:Flex 布局教程：语法篇。

q3：“实现一个函数输入123456789，输出123，456，789”

//这是我按照当时的思路，重新完善了一下能实现的版本。当时太紧张了了=。=，并不能保证那个代码一定跑起来了
function cal(str) {
    let target = '',
    arrStore = []
    target = typeof str === 'number' ? str.toString() : str
    target = target.split('').reverse()
    for(let i = 0; i < target.length; i++) {
        arrStore.unshift(target[i])
        if((i + 1) % 3 === 0) {
           if(i+1 !== target.length) arrStore.unshift(',')   
        }
    }
  return arrStore.join('')
}
cal(123456789) //"123,456,789"
不管效率如何也算是实现了这个功能..主要思路就是先将字符串反转，并且变为数组。之后遍历数组，将数字插入到新数组的最前面。同时每到3的倍数时候在数组前插入逗号，最后调用join方法将数组合并为字符串。

q4：“var a = new Klass('world'); 令a.hello() //输出world”

function Klass(name) {
  this.name = name
}
Klass.prototype.hello = function() {
  return this.name
}
var a = new Klass('world')
a.hello() // 'world'
这个问题我猜是考察一下this的指向问题？在原型链中的this是指向new出来的实例的。故this.name === a.name，即world

q5：“函数与构造函数的区别”

个人认为这个问题可以归结为，函数为普通函数调用和用作构造器调用时的区别。而最大的区别就是在普通函数调用时其内部this指向了全局对象。如果是浏览器中运行那么这个对象就是window。如果用作构造器调用，如var a = new A()，此时A中的this会指向通过new调用出来的实例化对象。简单来说就是下面这个例子：

function A(name, id) {
  this.name = name
  this.id = id
}
function B(name, id) {
  this.name = name
  this.id = id
}
var a = new A(1,2)
var b = B(1,2)
console.log(a) // {id: 2,name: 1}, this === a
console.log(b) // undefined
console.log(window.name) // '1'
console.log(window.id) // 2
由此就可以引发关于javaScript中this的指向问题。其实this的指向大概可分为以下四种情况：

作为对象的方法调用
作为普通函数调用
构造器调用
call&apply&bind调用
其中作为普通函数和构造器调用的情况作者已经做了简要说明，下面再简单介绍下另外两种情况。掌握这四种情况之后，在之后的开发中再碰到关于this的bug就可以有一个大概的排查方向了

作为对象的方法调用

var obj = {
  a: 1,
  getA: function() {
    console.log(this === obj)
    console.log(this.a)
  }
}
obj.getA()
call&apply&bind调用

这三者的异同在此暂不赘述，你只要知道这三个方法的第一个传入的参数，将会是调用这个方法中的this的新指向。

var obj = {
  a: 1,
  getA: function() {
    console.log(this)
    console.log(this.a)
  }
}
var obj2 = {
  a: 2
}
obj.getA.call(obj2) // this === obj2, a===2
看到了么，调用call之后，其第一个参数也就是obj2成为了调用者obj中this的新指向。另外对于bind的一些用法和模拟bind可以看下我的这篇文章Javascript之bind

有关this的文章有兴趣的同学可以去读一读《你不知道的Javascript》，里面对于this有着详细的介绍。

q6：“谈谈对cookie的理解”

首先我们先来看看cookie是什么？

Cookie 是在 HTTP 协议下，服务器或脚本可以维护客户工作站上信息的一种方式。Cookie 是由 Web 服务器保存在用户浏览器（客户端）上的小文本文件，它可以包含有关用户的信息。无论何时用户链接到服务器，Web 站点都可以访问 Cookie 信息。

这是在控制台中看到cookie

image.png
image.png

简单来说cookie的存在就是为了短时间存储一定信息的存在。这个信息可以用来进行登陆验证，来判断当前用户是否进行过登陆等等的身份验证以致服务器返回不同的数据等等。至于为什么说是短时间的，是因为这种将信息存储在浏览器本地的方式本身就有安全性问题。所以设置过期时间会令其在一段时间后自动消失。由上图可以看到Expires/Max-Age就是过期时间字段。这里面涉及了有关服务器缓存相关的内容。有兴趣的童鞋可以参考下我这篇文章基于node的微小服务——细说缓存与304。
说了这么多我觉得脱离这个问题，我们怎么实现一个cookie？以下代码参考了朴灵大大的《深入浅出NodeJs》，同时这份代码地址
//通过cookie来验证用户登录
const http = require('http')
const url = require('url')
let server = http.createServer((req, res) => {
  req.cookie = cookieParse(req.headers.cookie) //解析请求头中的cookie
  isLogin(req, res)
}).listen(9090)

let isLogin = (req, res)=> {
  if(req.cookie.isLogin) { //判断cookie中是否有isLogin字段
    res.writeHead(200)
    res.end('hello world again')
  } else { //没有该字段，证明没有登陆或cookie过期
    let option = {
      'Path': '/',
      'Max-Age': 3,
    }
    res.setHeader('Set-Cookie', setCookie('isLogin', true, option))
    res.writeHead(200)
    res.end('hello world first')
  }
}
let cookieParse = (cookie) => { //解析cookie
  let cookieResult = {}
  if(!cookie) return cookieResult
  let cookieList = cookie.split(';')
  cookieList.forEach((item) => {
    let keyValue = item.split('=')
    let key = keyValue[0]
    cookieResult[key] = keyValue[1]
  })
  return cookieResult
}
let setCookie = (name, value, option) => { //设置cookie
  option = option || {}
  let cookieValue = [name + '=' + value]
  Object.keys(option).forEach((item) => {
    cookieValue.push(item + '=' + option[item])
  })
  return cookieValue.join(';')
}
实现的核心思路为：没有特殊设置时，浏览器发起请求时在请求头中会带入指向这个domain的cookie，此时就可以判断这个cookie中是否有你需要的字段来判断你的需求。

