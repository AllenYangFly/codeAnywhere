JavaScript常见面试题目
1：javascript的typeof返回哪些数据类型?
typeof 运算符把数据类型信息当作字符串返回。typeof 返回值有六种可能： "number," "string," "boolean," "object," "function," 和 "undefined."
alert(typeof null); // "object" 
alert(typeof function () { return 1; }); // "function" 
alert(typeof '梦龙小站'); // "string" 
alert(typeof 1); // "number" 
alert(typeof a); // "undefined" 
alert(typeof undefined); // "undefined" 
alert(typeof []); // "object"

2：如何判断某变量是否为数组数据类型？
JavaScript中检测对象的方法：
1.instanceof操作符 --> 这个操作符和JavaScript中面向对象有点关系，了解这个就先得了解JavaScript中的面向对象。因为这个操作符是检测对象的原型链是否指向构造函数的prototype对象的。 
var arr = [1,2,3,1]; 
alert(arr instanceof Array); // true 
2.对象的constructor属性 -->除了instanceof，每个对象还有constructor的属性，利用它似乎也能进行Array的判断。
var arr = [1,2,3,1]; 
alert(arr.constructor === Array); // true
3.Array.isArray() --> ECMAScript5将Array.isArray()正式引入 JavaScript，目的就是准确地检测一个值是否为数组。IE9+、 Firefox 4+、Safari 5+、Opera 10.5+和Chrome都实现了这个方法。但是在IE8之前的版本是不支持的。
注意：typeof操作符与instanceof操作符区别
1.typeof操作符 
这种方法对于一些常用的类型来说那算是毫无压力，比如Function、String、Number、Undefined等，但是要是检测Array的对象就不起作用了。
    2.Instanceof运算符
    此运算符可以判断一个变量是否是某个对象（类）的实例，返回值是布尔类型的。

3.例举3种强制类型转换和2种隐式类型转换？

4.split() join() 的区别?
Join 函数获取一批字符串，然后用分隔符字符串将它们联接起来，从而返回一个字符串。
Split 函数获取一个字符串，然后在分隔符处将其断开，从而返回一批字符串。
主要区别： Join 可以使用任何分隔符字符串将多个字符串连接起来，而 Split 只能使用一个字符分隔符将字符串断开。如果你用split，是把一串字符（根据某个分隔符）分成若干个元素存放在一个数组里。而Join是把数组中的字符串连成一个长串，可以大体上认为是split的逆操作。

5.数组方法pop() push() unshift() shift()

6：当一个DOM节点被点击时候，我们希望能够执行一个函数，应该怎么做？

7：Javascript的事件流模型都有什么？

8.IE和DOM事件流的区别?
事件流是描述页面接收事件的顺序。
具体的有：事件冒泡，事件捕获，DOM事件流。
1、事件冒泡又叫IE的事件流，即事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。
2、事件捕获的思想是不太具体的节点应该更早的接收到事件，而最具体的节点应该在最后接收到节点。事件捕获的用意在于事件到达预定目标之前捕获它。
3、DOM2级事件流规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段和冒泡阶段。首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件作出响应。

9.IE和标准下有哪些兼容性的写法?

10.ajax请求的时候get 和post方式的区别?

11.call和apply的区别?

12.ajax请求时，如何解释json数据?

13：Ajax同步和异步的区别，如何解决跨域问题?

14.写一个获取非行间样式的函数?

15.事件委托是什么?

16.闭包是什么，有什么特性，对页面有什么影响?

17.如何阻止事件冒泡和默认事件?

18. 添加、移除、移动、复制、创建和查找节点的方法?

19.解释jsonp的原理，以及为什么不是真正的ajax?

20.javascript的本地对象，内置对象和宿主对象?

21.document load 和document ready的区别?

22.”==”和“===”的不同?

23.javascript的同源策略?

24.编写一个数组去重的方法?

26.排序算法?

27：希望获取到页面中所有的checkbox怎么做？(不使用第三方框架) ?

28：什么是Ajax和JSON，它们的优缺点?

29：有这样一个URL：http://item.taobao.com /item.htm?a=1&b=2&c=&d=xxx&e，
请写一段JS程序提取URL中的各个GET参数(参数名和 参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:’1′, b:’2′ , c:”, d:’xxx’, e:undefined}?

30：正则表达式构造函数var reg=new RegExp(“xxx”)与正则表达字面量var reg=//有什么不同？匹配邮箱的正则表达式？

31：.Javascript中callee和caller的作用？

32： 下面这个ul，如何点击每一列的时候alert其index?（闭包）？
<ul id=”test”>
<li>这是第一条</li>
<li>这是第二条</li>
<li>这是第三条</li>
</ul>

33： 给String对象添加一个方法，传入一个string类型的参数，然后将string的每个字符间价格空格返回，例如：
addSpace(“hello world”) // -> ‘h e l l o  w o r l d’

34：函数声明与函数表达式的区别？
function show(){ //声明式函数}
var show = function{  //函数表达式 }
两者的区别：
// 正常调用到函数
alert(sum(2, 6));
function sum(a, b) {
    return a + b;
}

执行了声明式函数，在预编译期声明函数及被处理了，所以即使sum( )调用函数放在声明函数前也能执行。
// 不能正常调用到函数，浏览器报错
alert(sum(2, 6));
var sum = function (a, b) {
    return a + b;
}
解析：声明式函数与函数表达式的区别在于：在JS的预编译期，声明式函数将会先被提取出来，然后才按顺序执行js代码；函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行。

35：在Javascript中什么是伪数组？如何将伪数组转化为标准数组？

36：想实现一个对页面某个节点的拖曳？如何做？（使用原生JS）?

37：var numberArray = [3,6,2,4,1,5]; （考察基础API）?
1) 实现对该数组的倒排，输出[5,1,4,2,6,3]
2) 实现对该数组的降序排列，输出[6,5,4,3,2,1]

38：.将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成10，{$name}替换成Tony （使用正则表达式）?

39：foo = foo||bar ，这行代码是什么意思？为什么要这样写？

40：为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义?

41：写一个function，清除字符串前后的空格。（兼容所有浏览器）?

42：Javascript中callee和caller的作用？

43：谈一谈你对javascript的理解，javascript能做什么?

44：在javascript中如何检测客户端的浏览器和操作系统类型?

45：Cookie在客户机上是如何存储的?

46：Prompt box是什么？它的返回值有什么用？

47：如何获取javascript所能表示的最大值和最小值？

48：Null和Undefined有和区别与联系?

49：如何理解javascript中的variable typing，试用代码说明?

50：如何理解javascript中的对象?

*HTML&CSS：
    对Web标准的理解、浏览器内核差异、兼容性、hack;
    CSS基本功：布局、盒子模型、选择器优先级及使用、HTML5、CSS3、移动端适应;

*JavaScript：
    数据类型、面向对象、继承、闭包、插件、作用域、跨域、原型链、模块化、自定义事件、
    内存泄漏、事件机制、异步装载回调、模板引擎、Nodejs、JSON、ajax等

*其他：
    HTTP、安全、正则、优化、重构、响应式、移动端、团队协作、可维护、SEO、UED、架构、职业生涯

CSS
线路1：
介绍一下你所知道的CSS选择器——》谈谈对元素应用样式优先级的了解（浏览器默认样式、继承样式、选择器特殊性、标签内联样式、!important样式）——》CSS选择器书写优化——》样式渲染树大致原理。
线路2：
大体画一下盒模型——》display有几种值，都是什么，有什么作用——》介绍一下浮动——》容器包含若干浮动元素如何清理浮动——》是否知道BFC，如何创建BFC，有什么作用——》大致行内元素具体表现（行框，行内框，行高，行内盒子顶线，基线，中线，底线，水平垂直对其介绍）——》vertical-align:middle的定义，为什么是近似居中
JS
路线1：
函数作用域——》函数作用域链——》闭包——》函数柯里化
路线2：
如何实现方法链式调用——》JS中this可能是很么，分别说一说——》如何在方法内部定义的函数中使用该方法的this——》function.bind的用法——》实现一个function.bind方法兼容老版本浏览器
路线3：
function.length和argument.length分别是什么——》什么是类数组——》如何将类数组转换成数组——》给数组写一个方法将其从多维数组扁平化
路线4：
JS有哪些方法定义一个对象——》构造函数的特点，与普通函数有什么不同——》prototype是什么，原型指针是什么，实例如何查询属性和方法的——》如何继承一个类——》如何实现组合继承，为什么要组合继承——》实现一个Object.create方法兼容老版本浏览器
路线5：
介绍一下cookie——》同源策略是什么——》介绍一下你所知道的跨域方式——》JSONP的原理——》图片ping能干什么
路线6：
Ajax是什么，它改变了什么——》XHR的readyState所有状态值，分别代表什么——》Ajax如何实现一个异步调用，得到响应修改dom——》Ajax如何跨域请求——》Ajax如何传输文件——》了解哪些异步编程——》什么是Promise，带来了什么编程体验——》Promise.then链式调用的大致原理
综合
1、  从浏览器地址栏输入url到显示页面都发生了什么 (请求、处理、响应、渲染，无限深) 
2、  HTTP request报文结构是怎样的 
3、  如何进行网站性能优化 
4、  HTTP状态码及其含义 

编码
1、有一个大数组,var a = ['1', '2', '3', ...];a的长度是100,内容填充随机整数的字符串.请先构造此数组a,然后设计一个算法将其内容去重。
2、将字符串’aa-bb-cc’驼峰化,转换成’aaBbCc’
3、将url中所有search串转化成一个对象，如：从”http://www.engineer.com? direction=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&skills=html%2Ccss%2Cjs”得到{direction:”前端工程师”,skills:”html,css,js”}
4、写一个js对象深度拷贝
6、实现一个具有简单的观察者模式的类，在类中有on,off,trigger方法。

跨域：jsonp、window.name、window.postMessage
