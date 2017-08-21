1.行内元素和块级元素?img算什么?行内元素怎么转化为块级元素?

行内元素：和有他元素都在一行上，高度、行高及外边距和内边距都不可改变，文字图片的宽度不可改变，只能容纳文本或者其他行内元素；其中img是行元素
块级元素：总是在新行上开始，高度、行高及外边距和内边距都可控制，可以容纳内敛元素和其他元素；
行元素转换为块级元素方式：display：block；
2.将多个元素设置为同一行?清除浮动有几种方式?

将多个元素设置为同一行：float，inline-block
清除浮动的方式：方法一：添加新的元素 、应用 clear：both；
方法二：父级div定义 overflow: hidden；
方法三：利用:after和:before来在元素内部插入两个元素块，从面达到清除浮动的效果。
.clear{zoom:1;}
.clear:after{content:””;clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}
3.怪异盒模型box-sizing？弹性盒模型|盒布局?

在标准模式下的盒模型：盒子总宽度/高度=width/height+padding+border+margin
在怪异模式下的盒模型下，盒子的总宽度和高度是包含内边距padding和边框border宽度在内的，盒子总宽度/高度=width/height + margin = 内容区宽度/高度 + padding + border + margin;
box-sizing有两个值一个是content-box，另一个是border-box。
当设置为box-sizing:content-box时，将采用标准模式解析计算；
当设置为box-sizing:border-box时，将采用怪异模式解析计算。
4.简述几个css hack?

(1) 图片间隙 
在div中插入图片，图片会将div下方撑大3px。hack1：将<div>与<img>写在同一行。hack2：给<img>添加display：block；
dt li 中的图片间隙。hack：给<img>添加display：block；
(2) 默认高度，IE6以下版本中，部分块元素，拥有默认高度（低于18px）
hack1：给元素添加：font-size：0；
hack2：声明：overflow：hidden；
表单行高不一致
hack1：给表单添加声明：float：left；height： ；border： 0；
鼠标指针
hack：若统一某一元素鼠标指针为手型：cursor：pointer；
当li内的a转化块元素时，给a设置float，IE里面会出现阶梯状
hack1：给a加display：inline-block；
hack2：给li加float：left；
5.href和src区别? title和alt

href (Hypertext Reference)指定网络资源的位置（超文本引用），从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系，在 link和a 等元素上使用。
src (Source)属性仅仅嵌入当前资源到当前文档元素定义的位置，是页面必不可少的一部分，是引入。在 img、script、iframe 等元素上使用。
title：既是html标签，又是html属性，title作为属性时，用来为元素提供额外说明信息.
alt：alt是html标签的属性，alt属性则是用来指定替换文字，只能用在img、area和input元素中（包括applet元素），用于网页中图片无法正常显示时给用户提供文字说明使其了解图像信息.
6.transform？animation？区别?animation-duration

Transform:它和width、left一样，定义了元素很多静态样式实现变形、旋转、缩放、移位及透视等功能，通过一系列功能的组合我们可以实现很炫酷的静态效果（非动画)。 
Animation:作用于元素本身而不是样式属性,属于关键帧动画的范畴，它本身被用来替代一些纯粹表现的javascript代码而实现动画,可以通过keyframe显式控制当前帧的属性值.
animation-duration：规定完成动画所花费的时间，以秒或毫秒计。
7.nth-of-type | nth-child?

举例说明： 
<ul> <p>111</p> <span>222</span> <li>1</li> <li>2</li> <li>3</li> </ul> 
li:nth-of-type(2):表示ul下的第二个li元素 
li:nth-child(2)：表示既是li元素又是在ul下的第二个元素（找不到）。 
建议一般使用nth-of-type，不容易出问题。
8. :before 和 ::before 区别?

单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。 对于CSS2之前已有的伪元素，比如:before，单冒号和双冒号的写法::before作用是一样的。
9.如何让一个div 上下左右居中?

答：有三种方法。

方法1： .div1{ width:400px;  height:400px;  border:#CCC 1px solid;   background:#99f;  position:absolute;  left:50%;   top:50%;   transform: translate(-50%,-50%); }   <div class="div1"></div> 
方法2： .div2{ width:400px;  height:400px;  border:#CCC 1px solid;  background:#99f;  position: absolute;  left:0;  top: 0;  bottom: 0;  right: 0;  margin: auto; }  <div class="div2"></div> 
方法3： .div3{ width:400px;  height:400px;  border:#CCC 1px solid;  background:#9f9;  position: absolute;  left: 50%;  top:50%;  margin-left:-200px;  margin-top: -200px;  }   <div class="div3"></div> 
10.css2.0 和css3.0

答：css3加强了css2的功能，增加了新的属性和新的标签，并且删除了一些冗余的标签，在布局方面减少了代码量。以前比较复杂的布局现在一个属性就搞定了（columns之类的属性）。在效果方面加入了更多的效果(圆角，动画之类的)，还有在盒子模型和列表模块都进行了改进。不过CSS3兼容性不好，只有一些高级版本的浏览器支持。
11.弹性盒子模型?flex|box区别?

(1) 引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的条目进行排列、对齐和分配空白空间。

即便容器中条目的尺寸未知或是动态变化的，弹性盒布局模型也能正常的工作。在该布局模型中，容器会根据布局的需要，调整其中包含的条目的尺寸和顺序来最好地填充所有可用的空间。

当容器的尺寸由于屏幕大小或窗口尺寸发生变化时，其中包含的条目也会被动态地调整。比如当容器尺寸变大时，其中包含的条目会被拉伸以占满多余的空白空间；当容器尺寸变小时，条目会被缩小以防止超出容器的范围。弹性盒布局是与方向无关的。

在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；
而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。 

(2) flex和box的区别: display：box 是老规范，要兼顾古董机子就加上它； 父级元素有display:box;属性之后。他的子元素里面加上box-flex属性。可以让子元素按照父元素的宽度进行一定比例的分占空间。 flex是最新的，董机老机子不支持的；

父元素设置display:flex后，子元素宽度会随父元素宽度的改变而改变，而display:box不会。 Android UC浏览器只支持display: box语法；而iOS UC浏览器则支持两种方式。
12.viewport 所有属性 ？

(1)width :设置layout viewport的宽度，为一个正整数，或字符串'device-width';
(2)initial-scale:设置页面的初始缩放值，为一个数字，可以带小数。
(3)minimum-scale:允许用户的最小缩放值，为一个数字，可以带小数。
(4)maximum-scale:允许用户的最大缩放值，为一个数字，可以带小数。
(5)height:设置layout viewport的高度，这个属性对我们并不重要，很少使用
(6)user-scalable:是否允许用户进行缩放，值为‘no’或者‘yes’。
安卓中还支持：target-densitydpi，表示目标设备的密度等级，作用是决定css中的1px 代表多少物理像素
(7)target-densitydpi:值可以为一个数值或者 high-dpi 、 medium-dpi、 low-dpi、 device-dpi 这几个字符串中的一个
13.如何理解HTML结构的语义化？

所谓标签语义化，就是指标签的含义。语义化的主要目的就是让大家直观的认识标签(markup)和属性(attribute)的用途和作用，对搜索引擎友好，有了良好的结构和语义我们的网页内容便自然容易被搜索引擎抓取，这种符合搜索引擎收索规则的做法，网站的推广便可以省下不少的功夫，而且可维护性更高，因为结构清晰,十分易于阅读。这也是搜索引擎优化SEO重要的一步。
14.伪类选择器和伪元素？c3中引入的伪类选择器有？c3中伪元素有?

伪类用一个冒号来表示，而伪元素则用两个冒号来表示。

伪类选择器：
由于状态是动态变化的，所以一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式。

伪元素选择器：
并不是针对真正的元素使用的选择器，而是针对CSS中已经定义好的伪元素使用的选择器；

c3中引入的伪类选择器：
:root()选择器，根选择器，匹配元素E所在文档的根元素。在HTML文档中，根元素始终是<html>。:root选择器等同于<html>元素。

:not()选择器称为否定选择器，和jQuery中的:not选择器一模一样，可以选择除某个元素之外的所有元素。

:empty()选择器表示的就是空。用来选择没有任何内容的元素，这里没有内容指的是一点内容都没有，哪怕是一个空格。

:target()选择器来对页面某个target元素(该元素的id被当做页面中的超链接来使用)指定样式，该样式只在用户点击了页面中的超链接，并且跳转到target元素后起作用。

:first-child()选择器表示的是选择父元素的第一个子元素的元素E。简单点理解就是选择元素中的第一个子元素，记住是子元素，而不是后代元素。

:nth-child()选择某个元素的一个或多个特定的子元素。

:nth-last-child()从某父元素的最后一个子元素开始计算，来选择特定的元素

:nth-of-type(n)选择器和:nth-child(n)选择器非常类似，不同的是它只计算父元素中指定的某种类型的子元素。

:only-child表示的是一个元素是它的父元素的唯一一个子元素。

:first-line为某个元素的第一行文字使用样式。

:first-letter 为某个元素中的文字的首字母或第一个字使用样式。

:before 在某个元素之前插入一些内容。

:after 在某个元素之后插入一些内容。 

c3中伪元素：
::first-line选择元素的第一行，比如说改变每个段落的第一行文本的样式
::before和::after这两个主要用来给元素的前面或后面插入内容，这两个常用"content"配合使用，见过最多的就是清除浮动
::selection用来改变浏览网页选中文的默认效果
15.html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

* HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。 
* 拖拽释放(Drag and drop) API 语义化更好的内容标签(header,nav,footer,aside,article,section) 音频、视频API(audio,video) 画布(Canvas) API 地理(Geolocation) API 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失； 
sessionStorage 的数据在浏览器关闭后自动删除 表单控件，calendar、date、time、email、url、search 新的技术webworker, websocket, Geolocation 
* 移除的元素 纯表现的元素：basefont，big，center，font, s，strike，tt，u； 
对可用性产生负面影响的元素：frame，frameset，noframes；
支持HTML5新标签： 
* IE8/IE7/IE6支持通过document.createElement方法产生的标签， 可以利用这一特性让这些浏览器支持HTML5新标签， 浏览器支持新标签后，还需要添加标签默认的样式： 
* 当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架 <!--[if lt IE 9]> <script> src="html5shim.googlecode.com/svn/trunk/h…"</script> <![endif]--> 
* 如何区分： DOCTYPE声明\新增的结构元素\功能元素
16.placeholder?如何在ie8上兼容placeholder这个效果

方法一：
首先判断浏览器是否支持placeholder属性，如果不支持的话，就遍历所有input输入框，获取placeholder属性的值填充进输入框作为提示信息，同时字体设置成灰色。

当输入框获得焦点( focus )同时输入框内文字等于设置的提示信息时，就把输入框内清空；

当输入框失去焦点( blur )同时输入框内文字为空时，再把获取的placeholder属性的值填充
进输入框作为提示信息，同时字体设置成灰色；

当输入框内有输入( keydown )时，此时输入框内的提示信息已经由focus事件清除，此时只需要把字体再恢复成黑色即可

此方法的缺点是，不适用于加载完DOM时即获得焦点的输入框，因为在用户的角度，加载完页面时看到的获得焦点的那个输入框，它的提示文字是看不到的。
HTML：
<input type="text" id="uname" name="uname" placeholder="请输入用户名"/>

CSS：
.phcolor{ color:#999;}

JS
$(function(){  
  //判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
  placeholder=function(input){
    var text = input.attr('placeholder'),
    defaultValue = input.defaultValue;
    if(!defaultValue){
      input.val(text).addClass("phcolor");
    }
    input.focus(function(){
      if(input.val() == text){
        $(this).val("");
      }
    });
    input.blur(function(){
      if(input.val() == ""){
        $(this).val(text).addClass("phcolor");
      }
    });
    //输入的字符不为灰色
    input.keydown(function(){
      $(this).removeClass("phcolor");
    });
  };
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
    $('input').each(function(){
      text = $(this).attr("placeholder");
      if($(this).attr("type") == "text"){
        placeholder($(this));
      }
    });
  }
});
方法二：
此方法的思路是做一张含有提示文字的图片作为input输入框的背景图，初始时获得焦点同时加载背景图；
当输入框不为空时，去掉背景图；
当输入框为空时，加载背景图；
当用户键盘按键且输入框不为空( 输入字符 )时，去掉背景图；
当用户键盘按键且输入框为空( 删除字符 )时，加载背景图。
此方法的缺点是：需要为每一个提示文字不同的input制作背景图片，并且设置input的样式。
CSS：
.phbg{ background:url(img/bg.jpg) 0 0 no-repeat;}

JS
$(function(){  
   //判断浏览器是否支持placeholder属性
   supportPlaceholder='placeholder' in document.createElement('input');
   if(!supportPlaceholder){
     //初始状态添加背景图片
     $("#uname").attr("class","phbg");
     //初始状态获得焦点
     $("#uname").focus;
     function destyle(){
      if($("#uname").val() != ""){
        $("#uname").removeClass("phbg");
      }else{
        $("#uname").attr("class","phbg");
       }
     }
     //当输入框为空时，添加背景图片；有值时去掉背景图片
     destyle();
     $("#uname").keyup(function(){
      //当输入框有按键输入同时输入框不为空时，去掉背景图片；有按键输入同时为空时（删除字符），添加背景图片
      destyle();
     });
     $("#uname").keydown(function(){
      //keydown事件可以在按键按下的第一时间去掉背景图片
      $("#uname").removeClass("phbg");
     });
   }
});
方法三：
使用插件：Placeholders.js
17.常见兼容性问题？

* png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理。

* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

* 浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。） #box{ float:left; width:10px; margin:0 0 0 100px;} 这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

* 渐进识别的方式，从总体中逐渐排除局部。 首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。 
css// .bb{ background-color:#f1ee18; .background-color:#00deff\9; +background-color:#a200ff; _background-color:#1e0bd1; } 

* IE下,可以使用获取常规属性的方法来获取自定义属性, 也可以使用getAttribute()获取自定义属性; Firefox下,只能使用getAttribute()获取自定义属性. 解决方法:统一通过getAttribute()获取自定义属性。

* IE下,event对象有x,y属性,但是没有pageX,pageY属性; Firefox下,event对象有pageX,pageY属性,但是没有x,y属性. * 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

* Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。

* 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序: L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}

* 怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在可以使用[html5]( www.w3.org/TR/html5/si…)推荐的写法：`<doctype html>`

* 上下margin重合问题
ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

* ie6对png图片格式支持不好(引用一段脚本处理)
18.简述前端优化的方式 旧的雅虎34条|h5新添加的方式

1、尽量减少HTTP请求次数
2、减少DNS查找次数
3、避免跳转
4、可缓存的AJAX
5、推迟加载内容
6、预加载
7、减少DOM元素数量
8、根据域名划分页面内容
9、使iframe的数量最小
10、不要出现404错误
11、使用内容分发网络
12、为文件头指定Expires或Cache-Control 13、Gzip压缩文件内容
14、配置ETag
15、尽早刷新输出缓冲
16、使用GET来完成AJAX请求
17、把样式表置于顶部
18、避免使用CSS表达式（Expression）
19、使用外部JavaScript和CSS
20、削减JavaScript和CSS
21、用<link>代替@import
22、避免使用滤镜
23、把脚本置于页面底部
24、剔除重复脚本
19.jquery版本?1.11兼容?

Query 2.x系列和 jQuery 1.x拥有同样的API，但是不再支持IE6、7、8。
推荐使用 1.x version，除非你确定IE6、7、8用户不再访问网站。
jquery1.11属于1.x 版本，其兼容IE6、7、8，所以也支持IE9.
20.块级？行内？空元素?

行内元素：和有他元素都在一行上，高度、行高及外边距和内边距都不可改变，文字图片的宽度不可改变，只能容纳文本或者其他行内元素
块级元素：总是在新行上开始，高度、行高及外边距和内边距都可控制，可以容纳内敛元素和其他元素；
空元素：在HTML元素中，没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。<br> 就是没有关闭标签的空元素。
21.media属性？screen？All？max-width?min-width?

media 属性规定被链接文档将显示在什么设备上。media 属性用于为不同的媒介类型规定不同的样式。Screen计算机默认屏幕，all适用于所有设备，max-width超过最大宽度就不执行，min-width必须大于最小宽度才执行。
22.meta标签的name属性值？

name 属性主要用于描述网页，与之对应的属性值为content，content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。
meta标签的name属性语法格式是：＜meta name="参数" content="具体的参数值"＞。
其中name属性主要有以下几种参数：
A 、Keywords(关键字)说明：keywords用来告诉搜索引擎你网页的关键字是什么。
B 、description(网站内容描述) 说明：description用来告诉搜索引擎你的网站主要内容.
C 、robots(机器人向导)说明：robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
content的参数有all,none,index,noindex,follow,nofollow,默认是all。
举例：＜meta name="robots" content="none"＞D 、author(作者)
23.一般做手机页面切图有几种方式?

响应式布局，弹性布局display：flex，利用js编写设定比例，给根元素设定像素，使用rem为单位。
24.px/em/rem有什么区别？ 为什么通常给font-size 设置的字体为62.5%

相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
1、em的值并不是固定的；
2、em会继承父级元素的字体大小。使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
rem是相对于浏览器进行缩放的。1rem默认是16px，在响应式布局中，一个个除来转换成rem，太麻烦，所以重置rem
body{font-size=62.5% } 此时1rem = 10px;若是12px则是1.2rem.
25.sass和scss有什么区别?sass一般怎么样编译的

文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名；语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。
26.如果对css进行优化如何处理？

压缩打包，图片整合，避免使用Hack，解决兼容问题，使用简写，让CSS能保证日后的维护。
27.如何对css文件进行压缩合并? gulp ?

使用gulp, 首页全局安装gulp。
1、npm install --global gulp 
2、其次局部安装gulp。npm install gulp --save-dev
3、在项目根目录下创建一个名为 gulpfile.js 的文件
var gulp = require('gulp');
gulp.task('default', function() {
// 将你的默认的任务代码放在这});
4、运行gulp。（默认的名为 default 的任务（task）将会被运行，想要单独执行特定的任务（task），请输入 gulp <task> <othertask>）
gulp
合并和压缩JS、CSS文件
压缩JS，CSS文件需要引用如下组件：
gulp-minify-css: 压缩css
28.组件? 模块化编程？

组件化编程: 将js css html包装一起提供方法和效果；
模块化化: 将相同的功能抽取出来 存放在一个位置进行编程
29.图片和文字在同一行显示?

1 在css中给div添加上“vertical-align:middle”属性。 
2 分别把图片和文字放入不同的div中，然后用“margin”属性进行定位，就可以使他们显示在同一行。
3 把图片设置为背景图片。
30.禁止事件冒泡

event.stopPropagation()
31.禁止默认事件

event.preventDefault()
32.a标签中 active hover link visited 正确的设置顺序是什么?

a标签的link、visited、hover、active是有一定顺序的
a:link 
a:visited 
a:hover 
a:active
33.a标签中 如何禁用href 跳转页面 或 定位链接

e.preventDefault();
href="javascript:void(0);
34.手机端上 图片长时间点击会选中图片，如何处理?

onselect=function() {
return false
}
35.video标签的几个个属性方法

src：视频的URL poster：视频封面，没有播放时显示的图片 preload：预加载 autoplay：自动播放 loop：循环播放 controls：浏览器自带的控制条 width：视频宽度 height：视频高度
36.常见的视频编码格式有几种?视频格式有几种?

视频格式：MPEG-1、MPEG-2和MPEG4 、AVI 、RM、ASF和WMV格式 
视频编码格式：H.264、MPEG-4、MPEG-2、WMA-HD以及VC-1
37.canvas在标签上设置宽高 和在style中设置宽高有什么区别？

canvas标签的width和height是画布实际宽度和高度，绘制的图形都是在这个上面。而style的width和height是canvas在浏览器中被渲染的高度和宽度。如果canvas的width和height没指定或值不正确，就被设置成默认值 。
38.border-image？box-sizing?

Border-image : 图形化边框
Box-sizing : 属性允许您以特定的方式定义匹配某个区域的特定元素。
语法 ：box-sizing：content-box | border-box
Content-box : padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding) 此属性表现为标准模式下的盒模型 .
Border-box : padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width ) 此属性表现为怪异模式下的盒模型。
39.渐进增强和优雅降级

渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。
降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。
“优雅降级”观点
“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。
在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。你可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。
“渐进增强”观点
“渐进增强”观点则认为应关注于内容本身。
内容是我们建立网站的诱因。有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo! 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。
那么问题来了。现在产品经理看到IE6,7,8网页效果相对高版本现代浏览器少了很多圆角，阴影（CSS3），要求兼容（使用图片背景，放弃CSS3），你会如何说服他？
40.解释在ie低版本下的怪异盒模型和c3的怪异盒模型 和 弹性盒模型?

IE当padding+border的值小于width或者height: 
盒模型的宽度=margin(左右)+width（width已经包含了padding和border的值） 
盒模型的高度=margin(上下)+height（height已经包含了padding和border的值） 
当padding+border的值大于width或者height: 
盒模型的宽度=margin(左右)+padding(左右)+border(左右) 
盒模型的高度=margin(上下)+padding(上下)+border(上下)+19px （加一个默认行高 19px） 所以相当于是padding+border和width或者height比大小，谁大取谁。 
以上几种DOCTYPE都是标准的文档类型，无论使用哪种模式完整定义DOCTYPE，都会触发标准模式，而如果DOCTYPE缺失则在ie6，ie7，ie8下将会触发怪异模式（quirks 模式） CSS3box-sizing有两个值一个是content-box，另一个是border-box。 
当设置为box-sizing:content-box时，将采用标准模式解析计算，也是默认模式； 
当设置为box-sizing:border-box时，将采用怪异模式解析计算； 
Css3弹性盒模型引入了新的盒子模型—弹性盒模型，该模型决定一个盒子在其他盒子中的分布方式以及如何处理可用的空间。使用该模型，可以很轻松的创建自适应浏览器窗口的流动布局或自适应字体大小的弹性布局。
41.animation对应的属性

写法：animation: name duration timing-function delay iteration-count direction; 
下面是对应的属性的介绍 
animation-name 规定需要绑定到选择器的 keyframe 名称。
animation-duration 规定完成动画所花费的时间，以秒或毫秒计。 
animation-timing-function 规定动画的速度曲线。 
animation-delay 规定在动画开始之前的延迟。 
animation-iteration-count 规定动画应该播放的次数。 
animation-direction 规定是否应该轮流反向播放动画。
42.transition?

css的transition允许css的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值 注意区别transform，transform是进行2D转换的 如移动，比例化，反过来，旋转，和拉伸元素。
43.h5新特性？

1、绘画的 canvas 元素 
2、用于媒介回放的 video 和 audio 元素 
3、对本地离线存储的更好的支持 
4、新的特殊内容元素，比如 article、footer、header、nav、section 5、新的表单控件，比如 calendar、date、time、email、url、search
44.canvas 如何绘制一个三角形|正方形

moveto 是移动到某个坐标， lineto 是从当前坐标连线到某个坐标。
这两个函数加起来就是画一条直线。 画线要用“笔”，那么MoveTo()把笔要画的起始位置固定了（x,y）然后要固定终止位置要用到LineTo函数确定终止位置（xend,yend）,这样一条线就画出来了。 每次与前面一个坐标相连 。 
stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
<!DOCTYPE HTML5>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>画布</title>
  </head> 
<body>
     <canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
     Your browser does not support the canvas element.
     </canvas>
     <script type="text/javascript">
         var c=document.getElementById("myCanvas");
//三角形
         var cxt=c.getContext("2d");
         cxt.moveTo(10,10);
         cxt.lineTo(50,50);
         cxt.lineTo(10,50);
         cxt.lineTo(10,10);
         cxt.stroke();
//正方形
         var cxt2=c.getContext("2d");
         cxt2.moveTo(60,10);
         cxt2.lineTo(100,10);
         cxt2.lineTo(100,50);
         cxt2.lineTo(60,50);
         cxt2.lineTo(60,10);
         cxt2.stroke(); 
     </script>
</body>
</html>
45.所用bootstap版本？

3.0
46.css清除浮动的几种方式？

1、父级div定义 height 
2、结尾处加空div标签 clear:both 
3、父级div定义 伪类:after 和 zoom 
4、父级div定义 overflow:hidden 
5、父级div定义 overflow:auto 
6、父级div 也一起浮动 
7、父级div定义 display:table
47.为什么要初始化CSS样式。

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
48.CSS3有哪些新特性？

CSS3实现圆角（border-radius），阴影（box-shadow），
对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);
//旋转,缩放,定位,倾斜增加了更多的CSS选择器 多背景 rgba 在CSS3中唯一引入的伪元素是::selection.媒体查询，多栏布局 border-image
49.解释下 CSS sprites，以及你要如何在页面或网站中使用它。

CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。
50.什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

FOUC - Flash Of Unstyled Content 文档样式闪烁
<style type="text/css" media="all">@import "../fouc.css";</style> 
而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。
解决方法：只要在<head>之间加入一个<link>或者<script>元素就可以了。
51.a点击出现框，解决方法:

a,a:hover,a:active,a:visited,a:link,a:focus{ 
 -webkit-tap-highlight-color:rgba(0,0,0,0);
 -webkit-tap-highlight-color: transparent;
 outline:none;background: none;
 text-decoration: none;border:none;
 -webkit-appearance: none; }