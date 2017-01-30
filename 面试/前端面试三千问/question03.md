## Display
#### Display中inline和inline-block的区别，常见块状，内联标签
常见的块级元素有 DIV, FORM, TABLE, P, PRE, H1~H6, DL, OL, UL 等
常见的内联元素有 SPAN, A, STRONG, EM, LABEL, INPUT, SELECT, TEXTAREA, IMG, BR 等。

block
block元素会独占一行，多个block元素会各自新起一行。block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。block元素可以设置margin和padding属性。

Inline
inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。inline元素设置width,height属性无效。inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。

inline-block
简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性

#### Display还有其他那些属性，区别和联系
none：此元素不会被显示；block：此元素将显示为块级元素；inline：此元素会被显示为内联元素；inline-block：行内块元素；flex：弹性布局，定义一个flex容器，将对象作为弹性伸缩盒显示；inline-flex：弹性布局，定义一个flex容器，将对象作为内联块级弹性伸缩盒显示；list-item：指定对象为列表项目。inline-block：指定对象为内联块元素。table：指定对象作为块元素级的表格。类同于html标签<table>；inline-table：指定对象作为内联元素级的表格。类同于html标签<table>；table-caption：指定对象作为表格标题。类同于html标签<caption>；table-cell：指定对象作为表格单元格。类同于html标签<td>；table-row：指定对象作为表格行。类同于html标签<tr>；table-row-group：指定对象作为表格行组。类同于html标签<tbody>；table-column：指定对象作为表格列。类同于html标签<col>；table-column-group：指定对象作为表格列组显示。类同于html标签<colgroup>；table-header-group：指定对象作为表格标题组。类同于html标签<thead>；table-footer-group：指定对象作为表格脚注组。类同于html标签<tfoot>；run-in：根据上下文决定对象是内联对象还是块级对象。

## 清理浮动
1.  Css浮动的概念，常见的清浮动的方法
浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
清浮动的方法：
1.  父级div定义 height。
原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。
优点：简单，代码少，容易掌握
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题
建议：不推荐使用，只建议高度固定的布局时使用
2. 使用空标签清除浮动。 
这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。 
3. 使用overflow。 
给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。
4．父级div定义 overflow:hidden
原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度
优点：简单，代码少，浏览器支持好
缺点：不能和position配合使用，因为超出的尺寸的会被隐藏。
建议：只推荐没有使用position或对overflow:hidden理解比较深的朋友使用。
5. 使用after伪对象清除浮动。 
该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素； 
6．父级div 也一起浮动

## localStorage和sessionStorage的区别和联系

## Http协议的概念，http请求的方式

## Http请求报结构是什么样的?

## HTML5的新标签有哪些?

## 如何进行css优化，从几方面回答后问道一些细节比如为什么用link等

## 如何进行网站优化，同上个问题问道为什么把script放在页面尾部等

## 简单介绍下js事件流

## 问了简历上的项目，简单介绍问道项目中遇到最大的困难，如何自己解决

## MVC框架的结构

## 了解MVVM框架么，简单介绍几个和特性

## Css3实现动画的方式有哪些

## Transition的属性有哪些

## Transform的使用方式

## 如何在项目中新加一些动画，比如在入场动画后紧接着抖动或者翻转

## 说一说canvas画图的基本步骤

## 介绍下js适配各种屏幕的方法

## 事件绑定和事件委托

## Js如何实现浏览器适配

## Js的闭包

## Js的匿名函数

## Css中line-height的用法

## 如何居中一个div元素

## 知道BFC么，介绍下BFC

## 如何实现css响应式

## 对css优先级的理解

## Js数组去重

## 介绍一下你所知道的CSS选择器

## 谈谈对元素应用样式优先级的了解（浏览器默认样式、继承样式、选择      器特殊性、标签内联样式、!important样式）

## CSS选择器书写优化

## 函数作用域

## 函数作用域链

## 闭包

## 函数柯里化

## Ajax如何传输文件

## 什么是Promise，带来了什么编程体验

## 如何预加载图片

## 如何懒加载图片

## 函数节流?如何进行节流

## 前端模块化解决的哪些前端问题

## cmd/amd/commonJS规范

## HTTP状态码及其含义

## css3animation

## js实现项目效果衍生

## canvas曲线效果

## js实现tab和背景联动效果

## ajax的实现过程

## ajax的get和post方法传参的不同

## js事件的机制，什么是冒泡

## js的事件委托

## 如何判断js事件冒泡后事件作用在那个子元素上

## 写一个数组去重

####################################################
# html && css

## xhtml和html有什么区别?

## Doctype? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?

## 行内元素有哪些?块级元素有哪些?CSS的盒模型

## CSS引入的方式有哪些? link和@import的区别是?

## CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?

## 前端页面有哪三层构成，分别是什么?作用是什么?

## css的基本语句构成是?

## 你做的页面在哪些流览器测试过?这些浏览器的内核分别是什么?

## 说出几种IE6 BUG的解决方法

## img标签上title与alt属性的区别是什么?

## 描述css reset的作用和用途。

## 解释css sprites，如何使用，他的优点是什么？

## 浏览器标准模式和怪异模式之间的区别是什么?

## 你如何对网站的文件和资源进行优化?期待的解决方案包括：

## 什么是语义化的HTML?

## 清除浮动的几种方式，各自的优缺点

## css hack

## 超链接访问过后hover样式就不出现的问题?

## IE6的双倍边距BUG

## 为什么FF下文本无法撑开容器的高度?

## 为什么web标准中IE无法设置滚动条颜色了?

## 为什么无法定义1px左右高度的容器?

## 怎么样才能让层显示在FLASH之上呢?

## 怎样使一个层垂直居中于浏览器中?

## firefox嵌套div标签的居中问题的解决方法

## 网页制作中有哪几种样式设置方法？各有何特点？

## 用户自定义的类和ID在定义和使用时有什么区别?

## float元素的父元素不能指定clear属性

## 是否重设了默认的样式?

## 简述一下src与href的区别。

## 知道的网页制作会用到的图片格式有哪些？

## 每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？

## 行内元素有哪些?块级元素有哪些?CSS的盒模型?

## css层叠是什么？介绍一下

## position值都有哪些，css3都有哪些新内容…

################################
# HTML5+CSS3常见面试题目

## SGML（标准通用标记语言）和HTML（超文本标记语言），XML（可扩展标记语言）和HTML的之间有什么关系？

## 什么是HTML5？

## 为什么HTML5里面我们不需要DTD（Document Type Definition文档类型定义）？如果我不放入<! DOCTYPE html>标签，HTML5还会工作么？

## 哪些浏览器支持HTML5？

##  HTML5的页面结构同HTML4或者更前的HTML有什么区别？

## HTML5中的datalist是什么？

## HTML5中哪些是不同的新的表单元素类型？

## HTML5中什么是输出元素?

## 什么是SVG（Scalable Vector Graphics可缩放矢量图形）？

## 我们能看到使用HTML5的SVG的简单例子么？

## HTML5中canvas是什么？

## 我们如何使用Canvas来画一条简单的线？

## Canvas和SVG图形之间的区别是什么？

## 如何使用Canvas和HTML5中的SVG去画一个矩形？

## CSS（cascading style sheets级联样式表）中的选择器是什么？

## 如何使用ID值来应用一个CSS样式？

## CSS中使用列布局是什么？

## 你能解释一下CSS的盒子模型么？

## 你能解释一些CSS3中的文本效果么？

## 什么是Web Workers？为什么我们需要他们？

## Web Worker线程的限制是什么？

## 我们如何在JavaScript中创建一个worker线程？

## 如何中止Web Worker?

## 为什么我们需要HTML5的服务发送事件？

##  HTML5中的本地存储概念是什么？

## 我们如何从本地存储中添加和移除数据？

## 本地存储的生命周期是什么？

## 本地存储和cookies（储存在用户本地终端上的数据）之间的区别是什么？

## 什么是事务存储？我们如何创建一个事务存储？

## 本地存储和事务存储之间的区别是什么？

## 什么是WebSQL？

## WebSQL 是HTML5的一个规范吗？

## 我们如何使用WebSQL？

## HTML5中的应用缓存是什么？

## 我们如何刷新浏览器的应用缓存？

## 应用缓存中的回退是什么？

## 应用缓存中的网络是什么？

## 如何在 HTML5 页面中嵌入音频? 

## 响应式布局用什么实现？

## 如何在 HTML5 页面中嵌入视频？

## HTML5 有哪些不同类型的存储？

## HTML5 引入什么新的表单属性？

## HTML5 标准提供了哪些新的 API？  

## HTML5的页面结构 

## HTML5的页面结构同HTML4或者更前的HTML有什么区别？

## 浏览器本地存储

## web storage和cookie的区别

## CSS中 link 和@import 的区别是？

## CSS3有哪些新特性？

## HTML5中什么是输出元素？