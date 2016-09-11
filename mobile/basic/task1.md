参考 [w3cplus](http://www.w3cplus.com/mobile/basic-knowledge-of-mobile.html)

## 移动端起步

### viewport

参考 什么是[viewport](http://www.cnblogs.com/2050/p/3877280.html)

viewport 就是设备上的屏幕能用来显示我们网页的那部分,viewport可能比设备的可视区大或者小，但是一般默认viewport要大于设备的可视区。

常见的设备viewport大小

![](http://images.cnitblog.com/blog/130623/201407/300958475557219.png)

布局viewport
layout viewport   获取  document.documentElement.clientWidth

浏览器可视区viewport
visual viewport   获取  window.innerWidth 

![](http://images.cnitblog.com/blog/130623/201407/300958521655944.png)
![](http://images.cnitblog.com/blog/130623/201407/300958547434256.png)

理想viewport
ideal viewport

ideal viewport是最适合移动设备的viewport，ideal viewport的宽度等于移动设备的屏幕宽度，只要在css中把某一元素的宽度设为ideal viewport的宽度(单位用px)，那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果。ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport 而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">


width=device-width  layout viewport的宽度等于visaul viewport的宽度
initial-scale       设置页面的初始缩放值
minimum-scale       允许用户缩放的最小缩放值
maximum-scale       允许用户缩放的最大缩放值
user-scalable       是否允许被缩放

width=device-width 

所有浏览器都能把当前的viewport宽度变成ideal viewport的宽度，但要注意的是，在iphone和ipad上，无论是竖屏还是横屏，宽度都是竖屏时ideal viewport的宽度。

initial-scale=1.0

可以把当前的的viewport变为 ideal viewport。
windows phone 上的IE 无论是竖屏还是横屏都把宽度设为竖屏时ideal viewport的宽度。但这点小瑕疵已经无关紧要了。

完美解决方案两个都写，浏览器会取其中较大的那个

    <meta name="viewport" content="width=device-width, initial-scale=1">

如果apple-mobile-web-app-capable设置为yes了，那么在iPhone,iPad,iTouch的safari上可以使用添加到主屏按钮将网站添加到主屏幕上

    <meta name="apple-mobile-web-app-capable" content="yes" />

设置APP图片,以下是针对ox不同设备，选择一个最优icon。默认iphone的大小为60px，ipad为76px，retina屏乘以2倍。

    <link rel="apple-touch-icon" href="touch-icon-iphone.png">
    <link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
    <link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
    <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">

设置启动画面

    <link rel="apple-touch-startup-image" href="/startup.png">

隐藏地址栏
    
    <meta name="browsermode" content="application">
    <meta name="x5-page-mode" content="app">


#### 为何浏览器不设置width＝device-width，也不出现横向滚动条?

有些浏览器不设置成ideal viewport ，会自动计算inital-scale，来缩放layout-viewport，从而不会出现横向滚动条

#### css像素与设备的物理像素

一般而言PC端的浏览器css像素等于设备的物理像素，但是css其实只是一个抽象的单位，在不同的设备下，css像素所代表的物理像素可能不同。


### 单位

#### 百分比

百分比的计算是根据父元素的大小,padding,margin.width



#### display:table

通过利用表格实现想要达到的效果

#### rem

rem 是根据根元素html的font-size来确定大小，所以关键在于如何设置根元素的font-size

手淘团队的解决方案:

    document.addEventListener("DOMContentLoaded", function(event) {
        document.documentElement.style.fontSize = window.innerWidth/10 + "px";
    });

#### vw，vh，vmin，vmax

vw    --- 视窗宽度
vh    --- 视窗高度
vmin  --- 视窗宽高中的最小值
vmax  --- 视窗宽高中的最大值



### 比较

如果不考虑andriod 4.3- 的话vw是最好的选择；如果考虑兼容的问题，rem的方案是最好的选择。而其余的flex，%或是table都不是最简单省事的，在单纯的宽度处理方面还能胜任，但如果涉及到高度随宽度同时变化，即宽高遵守某个比例（如图片或视频的变化），就需要借用padding技术撑开了。所以，如果是单纯的宽度布局就随便用了，而如果要实现某些宽高比，vm和rem才是最优的。

字体用固定px
图片根据场景使用 px或者 %或者 vw



### flex布局


### 事件

touchstart ： 当手指触摸到屏幕会触发；

touchmove : 当手指在屏幕上移动时，会触发；

touchend : 当手指离开屏幕时，会触发；

