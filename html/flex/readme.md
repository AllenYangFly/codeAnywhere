## flex

Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。




## flex的兼容性

flex的兼容性不是太好,

[查看兼容性](http://caniuse.com/#search=flex)

IE系列基本全军覆没


老式的写法

    .box{
    display: -moz-box; /*Firefox*/
    display: -webkit-box; /*Safari,Opera,Chrome*/
    display: box;
    }

新式写法

    .box{
    display: -webkit-flex; /*webkit*/
    display: flex;
    }


最佳的解决方案,混合方案(display:没有被加入W3C提案)

    .box{
        display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box; /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox; /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex; /* 新版本语法: Opera 12.1, Firefox 22+ */
    }

设置flex之后，子元素的float,clear,vertical-align 失效

水平方向的起始位置是main start,结束位置是main end
竖直方向的起始位置是cross start,结束位置是cross end

单个项目占据的水平空间叫做main size,垂直空间叫做cross end

容器->项目(容器中包含多个项目)

## 键盘就是我手中的武器，我们一起浪迹天涯




## 容器上定义的属性

flex-direction

    .box {
        flex-direction: row | row-reverse | clumn | clumn-reverse 
                    水平排列 |  水平反转排列 | 竖直排列| 竖直反转排列
                    起点在左 |  起点在右    | 起点在上 | 起点在下
    }


flex-wrap

    .box {
        flex-wrap: nowrap | wrap | wrap-reverse
                   不换行  | 换行  | 反转换行
    } 

    默认为nowrap:  但是如果本行超过了，就会自动把个个项目缩小
           wrap:  不改变每个项目的大小,正常换行,起始位置是左上
    wrap-reverse: 不改变项目大小,正常位置，起始位置为左下

flex-flow

    .box {
        flex-flow: flex-direction  || flex-wrap;
    }
    flex-flow是flex-direction和flex-wrap的简写形式

justify-content

    justify-content定义了 项目 在主轴上的对齐方式（横向）
    .box {
        justify-content: flex-start | flex-end | center | space-between | space-around;
    }
    
    flex-start: 左对齐(竖直方向，上对齐)
    flex-end: 右对齐
    center: 居中
    space-between: 两端对齐,项目之间的间隔相等
    space-around:  每个项目两侧的间隔相等,所以项目之间的间隔比项目与容器边框的间隔大一倍

align-items
    
    align-items定义在交叉轴上如何对齐
    .box {
        align-items: flex-start | flex-end | center | baseline | stretch;
    }
    flex-start 上起始位置对齐
    flex-end   下起始位置对齐
    center     上下中间对齐
    baseline   项目第一行的基线对齐
    stretch    如果没有设置高度，高度将充满整个容器 

align-content

    align-content定义多根轴线的对齐方式。如果项目只有一条轴线，则该属性不起作用
    .box {
        align-item: flex-start | flex-end  | center | spacebetween | space-around | stretch
    }





##  项目的属性

order
flex-grow
flex-shrink
flex-basis
flex
align-self


order 默认是0,数字越小，排名越靠前
    
    .item {
        order: 0;    /default 0/
    }


flex-grow 默认是0，如果有剩余空间也不放大。但是如果都为1，则将等分剩余空间。

    .item {
        flex-grow: num;   /default 1/
    }


flex-shrink 默认是1.定义项目的缩小比例。当宽度不够的时候，按照比例缩放。

    .item {
        flex-shrink: num;   /default  1/ 
    }   


flex-basis 默认值是auto.在分配多与空间之前，项目占主轴的空间。浏览器根据这个值计算出主轴是否有多与空间
    
    .item {
        flex-basis: <length> | auto  /default auto/
    }

flex 属性是flex-grow,flex-shrink,flex-basis的简写

    .item {
        flex: flex-grow flex-shrink flex-basis;
    }
    有两个值auto (1 1 auto),none (0 0 auto)


align-self 允许单个项目与其他项目不一样的对齐方式。可以覆盖掉父级别的属性。
    
    .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
    默认是auto,继承父容器属性，如果没有默认是stretch

