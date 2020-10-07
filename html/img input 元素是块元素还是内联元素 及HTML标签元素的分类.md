

* html中的标签元素大体被分为2种不同的类型： block、 inline 

* css display： block、 inline inline-block ...
*


``` 
block：
<div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
inline：
 <img> <input> <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>

```

# &lt;img&gt; &lt;input&gt; inline元素 ，有着类似于Inline-block的行为

![<img> <input> inline元素 ，有着类似于Inline-block的行为;  block、 inline inline-block表现](https://github.com/honeyhoneywell/codeAnywhere/blob/revise/html/img%20input%20%20inline%E5%85%83%E7%B4%A0%20%E6%9C%89%E7%9D%80%E7%B1%BB%E4%BC%BC%E4%BA%8EInline-block%E7%9A%84%E8%A1%8C%E4%B8%BA%20%20%20block%20inline%20%20inline-block%20%E8%A1%A8%E7%8E%B0.png " <img> <input> inline元素 ，有着类似于Inline-block的行为;  block、 inline inline-block表现")

```
<img>元素是块元素还是内联元素？
https://www.zhihu.com/question/25402556
img是inline元素，但是他同时也是replace元素，他有着特殊的表现：

1. 可以设置width/height;
2. 默认的，img元素在屏幕占据的空间与其图片的实际像素一致，除非CSS有设置或者自身的width/height HTML 属性有设置
3. 如果img标签的包裹元素为也为inline元素，则img的边界可以超出其直接父元素的边界，直到自己的宽、高达到最大或者设定值为止
，而且文档流中img的兄弟元素也不能遮盖住img。最常见的就是<a>里面包含的<img>
4. 所以从行为上看,img元素作为替换元素，有着类似于Inline-block的行为，尽管在SPEC里面，他的确是一个inline元素

Eric Meyer曾经很详细的解释过替换元素的概念，请参考他的CSS权威指南



为什么 input 元素能用 width 属性？
https://www.zhihu.com/question/20495297

明确的来说input是属于inline-block元素，但inline-block 的概念最早是由置换元素演化而来的，
和img一样属于可置换inline元素（Replaced element http://www.w3.org/TR/CSS21/conform.html#replaced-element），
可置换元素拥有内在尺寸（intrinsic dimensions）：http://www.w3.org/TR/CSS21/conform.html#intrinsic

```



[Default CSS Display Values for Different HTML Elements](https://www.impressivewebs.com/default-css-display-values-html-elements/)

[Replaced Elements](https://www.impressivewebs.com/default-css-display-values-html-elements/)
