## 什么是CSS hack

CSS hack由于不同的浏览器，比如IE6,IE7,Firefox等，对CSS的解析认识不一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。 这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。

## CSS hack分类

    CSS选择器hack、
    CSS属性hack、
    IE条件注释hack

### CSS选择器hack和属性hack

主要考虑的浏览器有IE6、IE7、IE8、谷歌浏览器（chrome）、火狐（Mozilla Firefox）

 
    1. _和-         _color： 仅IE6支持
    2. +            +color： IE6、IE7支持
    3. *            *color： IE6、IE7支持
    4. \9      color:red\9： IE6,7,8,9 (区别是否为IE)
    5. \0                 ： IE8、IE9支持，opera部分支持
    6. \9\0               ： IE8部分支持、IE9支持
    7. \0\9               ： IE8、IE9支持


    #tip{ 
    background:blue;        /*Firefox背景变蓝色 所有浏览器都支持*/ 
    background:red\9;       /*IE8背景变红色 IE6、7、8、9支持覆盖上面样式*/ 
    background:orange\9\0;  /*IE9背景为橘色 IE8,IE9支持覆盖上面样式*/
    *background:black;      /*IE7背景变黑色 IE6、7支持又一次覆盖上面样式*/ 
    _background:orange;     /*IE6背景变橘色 紧IE6支持又一次覆盖上面样式*/ 
    }  


hack一览表

![](http://www.kwstu.com/Content/uploadFiles/images/ie.png)

###  IE条件注释hack(IEfucker)

格式

     <!--[if 条件(conditional)]> 开始 <![endif]-->

参数
    
    非(!) 、与(&) 、或(|)、 括号、 大于(gt)、 大于等于(gte)、 小于(le) 、 小于等于(lte)

例子
    
    <!--[if IE]>
    这段文字只在IE浏览器显示
    <![endif]-->

    只在IE8上不生效
    <!--[if ! IE 8]>
    这段文字在非IE8浏览器显示
    <![endif]-->

    只在IE6以上版本生效
    <!--[if gte IE 6]>
    这段文字只在IE6以上(包括)版本IE浏览器显示
    <![endif]-->




