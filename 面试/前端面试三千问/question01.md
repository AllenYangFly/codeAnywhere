## 前端面试三千问(一)

《前端面试三千问》是博主为了准备即将来到的春招所做的一个面试专题博客，旨在于收集前端各个方面的面试题，巩固基础知识。切记，刷面试题只是锦上添花，基础才是前端之本，切勿本末倒置。

winter大大总结:

### 基础知识: 

HTML&CSS: 对Web标准的理解，浏览器内核的差异，兼容性，hack；
CSS基本功:布局，盒子模型，选择器优先级；

    HTML5，CSS3，Flexbox；

JavaScript:数据类型，运行，对象，Function，继承，闭包，作用域，原型链，事件，RegExp，JSON，Ajax，DOM，BOM，内存泄漏，跨域，异步装载，模板引撃，前端MVC，路由，模块化，Canvas，ECMAScript6，Node.js;

其他：移动端，响应式，自动化构建，HTTP，离线存储，WEB安全，优化，重构，团队协作，可维护，易用性，SEO，UED，架构，职业生涯，快速学习；

#### 无论工作年头长短都应该掌握的知识点

* DOM结构 —— 两个节点之间存在哪些关系以及如何在节点之间任意移动；
* DOM操作 —— 如何添加，移除，移动，复制，创建和查找节点等；
* 事件 —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别；
* XMLHttpRequset —— 这是什么，怎么完整地执行一次GET请求，怎么检测错误
* 盒模型 —— 外边距，内边距和边框之间的关系，以及IE8以下版本的浏览器中的盒模型；
* 块级元素与行内元素 —— 怎么使用CSS控制它们，以及如何合理使用它们；
* 浮动元素 —— 怎么使用它们，它们有什么问题以及怎么解决这些问题；
* HTML与XHTML —— 二者有什么区别，你觉得应该使用哪一个并说出理由；
* JSON —— 作用，用途，设计结构；

# HTML


### 介绍一下你对浏览器内核引撃的理解?

主要分成两部分：渲染引撃和JS引撃；

渲染引撃：负责取得网页的内容-html，xml，图像等，整理讯息-加入css等，以及计算网页的显示方式，然后会输出至显示器或打印机；浏览器的内核的不同对于网页的语法解析会有不同，所以渲染的效果也不相同；所有网页浏览器，地址邮件客户端以及其他需要编辑，显示网络内容的应用程序都需要内核；

JS引撃：解析和执行javascript来实现网页的动态效果；

最开始渲染引撃和JS引撃并没有区分的很明确，后来JS引撃越来越独立，内核就倾向于只只渲染引撃；



### H5的特性

h5现在已经不是SGML的子集，主要是关于图像，位置存储，多任务等功能的增加：

绘画canvas；

用于媒介访问的video和audio元素；

本地独立离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

sessionStorage的数据在浏览器关闭后自动删除；

语义化更好的内容元素，如artcle,footer,header,nav ,section;

表单控件，calendar,date time email,url,search;

新的技术webworker,websocket,Geolocation;

移除的元素：

存表现的元素：basefont,big,center,font,s,strike,tt,u;

对可用性产生负面影响的元素:frame,frameset,noframes;

支持H5新标签：

IE8~IE6支持通过document,createElement方法产生的标签，可用利用这一特性让浏览器支持H5新标签，浏览器支持新标签后，还需要添加标签的默认样式；

也可以直接使用成熟的框架，如html5shim;

    <!--[if lt ie 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
如何区分H5

新增的结构元素\功能元素；


### 简述一下你对HTML语义化的理解

用正确地标签做正确的事情，语义化让页面的内容结构化，结构更清晰，便于浏览器，搜索引撃解析；

即时在没有CSS样式清除下，也以一种文档格式显示，并且容易阅读；

搜索引撃的爬虫也依赖html标记来确定上下文和关键字的权重，利于seo；

使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解；




### iframe有哪些缺点？

1.iframe会阻塞主页面的onload时间；搜索引撃的检索程序无法解读这种页面，不利于SEO；
2.iframe和主页面共享连接池，而浏览器对相同域的链接有限制，所以会影响页面的并行加载；

使用iframe之前需要考虑着两个缺点，如果使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开问题；


### 如何实现浏览器内多个标签页之间的通信

WebSocket,SharedWorker,也可以调用localstorge,cookies等本地存储方式；

localstorge另一个浏览器上下文里被添加，修改，删除时，它会触发一个事件，通过监听事件，控制它的值来进行页面信息通信；

PS:quirks:Safari在无痕模式下设置localstorge值时会抛出QuotaExceededError的异常；

### WebSocket如何兼容低浏览器

Adobe Flash Socket,ActiveX HTMLFile(ie),基于multipart编码发送XHR，基于长轮询的XHR；

### 页面可见性（Page Visibility API）可以有哪些用途

通过visibilityState的值检测页面当前是否可见，以及打开网页的时间等；
在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；

### 如何在页面上实现一个圆形的可点击区域

1.map+area或SVG；

2.border-radius;

3.纯js实现需要求一个点在不在圆上简单算法，获取鼠标坐标等；

### 实现不使用border画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果

    <div style="height:1px;overflow:hidden;background:red"></div>

### 网页验证码是干嘛的，为了解决什么安全问题

区分用户是计算机还是人的公共全自动程序，可以防止恶意破解密码，刷票，灌水；

有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登录尝试；

### title与h1的区别，b与strong的区别，i与em的区别

title属性没有明确意义，只表示是个标题，h1则表示层次明确地标题，对页面信息的抓取也有很大的影响

strong是标明重点内容，有预期加强的含义，使用阅读器阅读时候，<strong>会重读，而<b>是展示强调内容；

i是内容展示位斜体，em表示强调的文本；

自然样式标签--physical style elements     b,i,u,s,pre
语义样式标签--semantic style elements     strong,em,ins,del,code

应该准确使用语义样式标签，但不能滥用，如果不能确定，首选使用自然样式标签；

# CSS
### position的值relative和absolute定位原点是

absolute：绝对定位，相对于值不为static的第一个父级元素进行定位；
fixed：绝对定位，相对于浏览器窗口进行定位；
relative：生成相对定位，相对于自己正常位置进行定位；
static：默认值，没有定位，出现在正常的流中；
inherit：规定从父级元素继承position属性的值；


### CSS3有哪些新特性

新增加各种CSS选择器 //详情自己去了解；

圆角属性 border-radius;
多列布局 mulit-colum layout;
阴影和反射 Shadow\Reflect;
文字特效 text-shadow;
文字渲染 text-decoration;
线性渐变 gradient；
旋转 transform;
增加旋转，缩放，定位，动画，多背景； 
transform: \ scale(0.85,0.9) \ translate(0px,-30px) \ skew(-9deg,0deg) \ Animation:


### CSS3的Flexbox(弹性盒布局模式),以及适用场景

    自己去查

### 用css创建一个三角形的原理是什么？

原理：把上，左，右三条边隐藏掉(颜色transparent)

    width:0;
    height:0;
    border-widht:20px;
    border-style:solid;
    border-color:transparent transparent red transparent;

### 一个满屏的品字如何设计

简单方式： 上面一个div宽度100%； 下面两个div分别宽50%； 然后用float或者inline使其不换行即可；



### li与li之间有看不见的空白间隔是什么原因引起的，解决方案

行框的排列会受到中间空白-回车\空格等的影响，因为空格也属于，这些空白也会被应用样式，占据空间，所以会有间隔

解决方案：1，把font-size/line-height设为0,子元素重新设置,就没有空格了; 2.源代码特殊写法; 3.使用模板

### 怎么初始化代码块

    body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
    body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
    h1, h2, h3, h4, h5, h6{ font-size:100%; }
    address, cite, dfn, em, var { font-style:normal; }
    code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
    small{ font-size:12px; }
    ul, ol { list-style:none; }
    a { text-decoration:none; }
    a:hover { text-decoration:underline; }
    sup { vertical-align:text-top; }
    sub{ vertical-align:text-bottom; }
    legend { color:#000; }
    fieldset, img { border:0; }
    button, input, select, textarea { font-size:100%; }
    table { border-collapse:collapse; border-spacing:0; }


### absolute的containing block(容器块)计算方式跟正常流有什么不同

无论哪一种，都要先找到其祖先元素中最近的position值部位static元素，然后再判断

1.若此元素为inline元素，则containing block为能够包含这个元素生成的第一个和最后一个inline box 的padding box-除margin,border外的区域，的最小矩形；
2.否则，则由这个祖先元素的padding box 构成，如果找不到，则为initial containing block;

补充:

1.static(默认)\relative：简单说就是它的父元素的内容框(即去掉padding的部分)
2.absolute：向上找最近的定位为absolute/relative的元素；
3.fixed：它的containing block一律为根元素(html/body)，根源上也是initial containing block

### 如果需要手写动画，最小时间间隔是多久，为什么

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms=16.7ms;

### 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度

考虑兼容问题就使用js，window.resize()获取两个盒子高度；
不考虑兼容问题，就使用calc();

    div1{
        width:100%;
        height:100px;
    }
    div2{
        widtt:100%;
        height:calc(100%-100px);
    }

### 什么是CSS预处理器/后处理器

-预处理：LESS，Sass，stylus，用来预编译Sass或less，增强了css代码的复用性；还有层级，mixin，变量，循环，函数等，具有很方便地ui组件模块化开发能力极大提高工作效率

-后处理器，如PostCSS,通常被视为在完成的样式表中根据css规范处理css，让其更有效，目前最常做的是给css属性添加浏览器私有前缀，实现跨浏览器兼容性的问题；

