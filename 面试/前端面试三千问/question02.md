# JavaScript(JS秘密花园)

### 基本数据类型?
    Undefined,Null,Boolean,Number,String

### 介绍js有哪些内置对象?
    Object 是JavaScript中所有对象的父对象；
    数据封装类对象，Object,Array,Boolean,Number String;
    其他对象，Function,Arguments,Math,Date,RegExp,Error;

### JS原型，原型链?

每个对象都会在其内部初始化一个属性，就是原型我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么她就会去prototype里找这个属性，这个prototype又会有自己的prototype，于是就这样一直找下去，也就是我们的原型链的概念；

关系：instance.constructor.prototype=instance.proto;

特点：JS对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之相关的对象也会继承这一改变；

当我们需要一个属性的时，JS引撃会先看当前对象中是否有这个属性，如果没有，就会查找他的prototype对象是否有这个属性，传递下去，一直检索到object内建对象；

    function func(){}
        func.prototype.name="nameF";
        
        func.prototype.getInfo=function(){
        
        return this.name;
    }
    var person = new func();
    console.log(person.getInfo());
    console.log(func.prototype);


### JS有几种类型的值，能划一下它们的内存图吗？

栈：原始数据类型-undefined,null,boolean,number,string;

堆：引用数据类型-对象，数组，函数；

两种数据类型的区别，存储位置不同；

原始数据类型直接存储在栈中的简单数据段，占据空间小，大小固定，属于被频繁使用数据，所以放入栈中存储；

引用数据类型存储在堆中的对象，占据空间大，大小不固定，如果存储在栈中，将影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后重堆中获得实体；

### 创建函数的N种方式及其优缺点?
### 创建对象的N种方式及其优缺点?

1.对象字面量的方式；

    person={firstname:"mark",lestname:"yun",age:25,eyecolor:"blakc"};
2.用function来模拟无参的构造函数

    function person(){
        var person=new Person();
        
        person.name="mark"
        
        parson.name=function(){
        
        alert(person.name+...);
        
        }
    }
person.work();
3.用function来模拟构造函数实现-用this关键字定义构建的上下文属性

    function pet(name,age,hobby){
        this.name=name;
        
        this.age=age;
        
        this.hobby=hobby;
        
        this.eat=function(){
        
            alert(this.name);
            
        }
    }
4.用工厂方式来创建(内置对象)

    var wcDog= new Object();
    wcDog.name="wangcai"
    wcDog.age=3;
5.用原型方式创建

    function Dog(){
    }
    Dog.prototype.name='wwangcai';
6.用混合方式创建

    function car(name,price){
        this.name=name;
        this.price=price;
    }
    car.prototype.sell=fuction(){
        alert(...);
    }
    var camry = new Car();
### JS 继承的N种方式及其优缺点？
1.构造继承；

2.原型继承；

3.实例继承；

4.拷贝继承；

原型prototype机制或apply和call方法实现较简单，建议使用构造函数与原型混合方式；

    function parent(){
        this.name="wang";
        }
    function child(){
        this.age=28;
        }
        child.prototype = new parent();
        var demo=new child();

### JS的作用域链?
全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节；当需要从局部函数查找某一属性或方法，如果当前作用域没有找到，就会上溯到上层作用域查找，直至全局函数，这种组织形式就是作用域；


### call,apply,bind

### 谈谈this对象的理解

this总是指向函数的直接调用者(而非间接调用者)；

如果用new关键字，this指向new出来的按个对象；

在事件中，this指向触发这个事件的对象，特殊的是，ie中的attachEvent中的this总是指向全局对象window;

### eval是做什么的

它的功能是对应的字符串解析成js代码并运行；

应该避免使用eval，不安全，非常耗性能(2次，一次解析成js语句，一次执行)；

由json字符串换成json对象的时候可以用eval,var obj =eval('('+str+')');

### null,undefined的区别

null 表示一个对象被定义了，值为空值；
undefined 表示不存在这个值；
typeof undefined
一个表示“无”的原始值或者表示“缺少值”，就是此处应该由一个值，但还没定义，当尝试读取时会返回undeifined；
typeof null
一个对象(空对象，没有任何属性和方法)；

### 事件是？ie与火狐的事件机制有什么区别？如何阻止冒泡
    1.事件：我们在网页的某个操作，有的操作对应多个事件；
    2.事件处理机制，ie是事件冒泡，ff同时指出两种事件模型，即捕获事件和冒泡事件；
    3.ev.stopPropagation();-旧的ie方法：ev.cancelBubble=true;

### 什么是闭包-closure，为什么要用它？

闭包是指有权访问另一个函数作用域中变量的函数；

创建闭包常见方式，就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部；

闭包的特性：
1.函数内嵌套函数；
2.内部函数可以应用外层的参数和变量；
3.参数和变量不会被垃圾回收机制回收；


### 如何判断一个对象是否处于某个类；

    if(a instanceof Person){
        alert('yes');
    }

### js中有一个函数，执行对象查找，永远不会去查找原型，这个函数是？

hasOwnProperty

js中hasOwnProperty函数方法返回一个布尔值，指出一个对象是否具有指定名称的属性；-----此方法无法操作该对象的原型链中是否具有该属性；
使用方法：
object.hasOwnProperty(proName)
其中object一个对象的实例，proName一个属性名称；
如果具有该名称属性，返回trun，否则false；


### new操作符，具体干了什么

1.创建一个空对象，并且this变量引用该对象，同时还继承该对象的原型；

2.属性和方法被加入到this引用的对象中；

3.新创建的对象由this所引用，并且最后隐藏；

### JSON的了解

JSON(javaScript Object Notation)是一种轻量级的数据交换格式，基于JavaScript的一个子集，数据格式简单，易于读写，占用带宽小；

例：{"age":"12","name":"back"}
JSON字符串转换为JSON对象：

    var obj=eval('('+str+')');
    var obj=str.parseJSON();
    var obj=JSON.parse(str);
JSON对象转换为JSON字符串：

    var last=obj.toJSONString();
    var last=JSON.striingify(obj);


### js延迟加载的方式有哪些

defer和async,动态创建DOM方式-最常用，按需异步载入js；


### ajax是什么，如何创建一个ajax? + 跨域 + fetch

ajax全称:Asynchronous Javascript And XML;

异步传输+js+xml；

所谓异步，即想服务器发送请求时候，不必等待结果，而是可以同时做其他事情，等到有了结果它会根据设定进行后续操作，与此同时，页面时不会发生整页刷新，提高了用户体验；

1.创建XMLHttpRequest对象，即创建一个异步调用对象；
2.创建一个新的HTTP请求，并指定该HTTP请求的方法，url及验证信息；
3.设置响应HTTP请求状态变化的函数；
4.发送HTTP请求；
5.获取异步调用返回的数据；
6.使用JavaScript和DOM实现局部刷新；

### 同步和异步的区别

同步：浏览器访问服务器请求，用户看到页面刷新，重新发送请求，等待请求，页面刷新，新内容出现，用户看到新内容，进行下一步操作；

异步：浏览器访问服务器请求，用户正在操作，浏览器后端进行请求，等请求完，页面不刷新，新内容也会出现，用户看到新内容；

同步强调的是顺序性，谁先谁有，异步不存在这种顺序性；

### 模块化开发怎么做

立即执行函数，不暴露私有成员；

### documen.write和innerHTML的区别

document.write只能重绘整个页面；
innerHTML可以重绘页面的一部分；

### DOM操作，添加，移除，复制，创建，查找节点；

1.创建新节点；

    createDocumentFragment()    //创建一个DOM片段；
    createElement()     //创建一个具体的元素；
    createTextNode()    //创建一个文本节点；
2.添加，移除，替换，插入；

    appendChild();
    removeChild();
    replaceChild();
    insertBefore();
3.查找

    getElementsByTagName();
    getElementsByName();
    getElementById();
    querySelector();
    querySelectorAll();

### Object .is()与原来的比较操作符' === ' , ' == '的区别

两等号判断，会在比较时进行类型转换；

三等号判断(判断严格)，比较时不进行隐私类型转换-类型不同则会返回false;

Object.is在三等号判断的基础上特别处理了NaN，-0和+0，保证-0和+0不再相同，但Object .is(NaN,NaN)会返回true;

Object.is应被认为有其特殊的用途，而不能用它认为它比其他的相等对比更宽松或严格；

### 页面重构怎么操作

页面重构：在不改变外部行为的前提下，简化结构，添加可读性，而在网站前端保持一致的行为；也就说在不改变UI的情况下，对网站进行优化，而扩展的同事保持一致的UI；

对于传统的网站来说通常是：

表格布局改为DIV+CSS；使网站前端兼容于现代浏览器-针对不可规范的CSS，如对IE有效；对于移动平台的优化；针对SEO进行优化；深层次的网站重构应该考虑的方面；

减少代码间的耦合；让代码保持弹性；严格按规范编写代码；设计可扩展的API，代替旧有的框架，语言；增强用户体验；通常来说对速度的优化也包含在重构中；

压缩JS，CSS，image等前端资源-通常由服务端来解决；

程序性能优化-如数据读写，采用cdn来加速资源加载，对于js DOM的优化，http服务器的文件缓存；

### 列举ie与其他浏览器不一样的特性

事件不同之处

触发事件的元素被认为是目标(target)，而在ie中，目标包含在event对象的srcElement属性；

获取字符代码，如果按键代表一个字符，ie的keyCode会返回字符代码，DOM中按键的代码和字符是分离的，要获取字符代码，需要使用charCode属性；

阻止某个时间的默认行为，ie中阻止某个时间的默认行为，必将returnValue属性设置为false，需要调用preventDefault()方法；

停止事件冒泡，ie中阻止事件进一步冒泡，需要设置cancelBubble为true，Mozzilla中，需要调用stopPropagation();

### 什么叫优雅降级和渐进增强

优雅降级
web站点在所有新式浏览器中都能正常工作，如果用户使用的旧式浏览器，则代码会针对旧浏览器的ie进行降级处理，使之在旧浏览器上以某种形式降级体验，却不至于完全不能用；

渐进增强
从被所有浏览器支持的基本功能开始，逐步地添加哪些只有心斑斑浏览器才支持的功能，想页面增加不影响浏览器的额外样式和功能，当浏览器支持时候，它们会自动地呈现出来并发挥作用；


### 对Node的优点和缺点提出自己的看法

优点
因为node是基于事件驱动和无阻赛的，所以非常适合处理并发请求，因此构建在node上的代理服务器相比较其他技术实现的服务器表现要好得多；此外，与node代理服务器交互的客户端代码是由javascript语言编写的，因此客户端和服务端都用同一种语言编写，是件比较好的时期

缺点
node是一个相对新的开源项目，所以不太稳定，总是在变，而且缺少足够多额第三方库支持，看起来像当年的rudy/rails的样子；

### 哪些前端优化的方法

1.减少http请求次数：css sprites，js，css源码压缩，图片大小控制合适，网页Gzip,cdn托管，data缓存，图片服务器；
2.前端模板js+数据，减少由于html标签导师的带宽浪费，前端用变量变成ajax请求结果，每次操作本地变量，不用请求，减少请求次数；
3.用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能；
4.当需要设置的样式很多时，设置className而不是直接操作style;
5.少用全局变量，缓存dom节点查找的结果，减少io读取操作；
6.避免使用CSS Expression(css表达式) 又称Dynamic properties(动态属性)；
7.图片预加载，将样式表放在顶部，将脚本放在底部，加上时间戳；
8.避免在页面的主体布局中使用table,table要等其中的内容完全下载下来之后才会显示出来，显示比div+css布局慢；

对普通的网站有一个统一的思路，就是尽量向前端优化，减少数据库操作，减少磁盘io；

向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的，不要在服务端执行，能在缓存服务器上直接返回的，不要到应用服务器，程序能直接取得的结果，不要到外部取得，本机内能取得的数据，不要远程取，内存能取得的，不要磁盘取，缓存中有的不要去数据库查询；

减少数据库操作，减少更新次数，缓存结果减少查询次数，将数据库执行的操作尽可能的让你的程序完成，减少磁盘io尽量不要使用文件系统缓存，减少读写文件次数

### 一个页面从输入url到页面加载显示完成，这个过程中都发生了什么

简洁版：

浏览器根据请求的url交给DNS域名解析，找到真实IP，向服务器发起请求；

服务器交给后台处理完成后返回数据，浏览器接受文件(html，js，css，图像)；

浏览器对加载到的资源(html,js,css等)进行语法解析，建立相应的内部数据结构；

载入解析的资源文件，渲染页面，完成；
程序优化永远要优化慢的部分，换语言是无法优化的；