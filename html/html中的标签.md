html4 ---> xhtml ---> html5

## 一、HTML4/XHTML元素的分类
1、块级元素
    　address、blockquote、center、dir、div、dl、dt、dd、fieldset、form、h1~h6、hr、isindex、menu、noframes、noscript、ol、p、pre、table、ul
2、内嵌元素
    a、abbr、acronym、b、bdo、big、br、cite、code、dfn、em、font、i、img、input、kbd、label、q、s、samp、select、small、span、strike、strong、sub、sup、textarea、tt、u、var

## 二、HTML5规范对元素的分类
    ![](https://www.w3.org/TR/html5/images/content-venn.png)

    Flow（流式元素）、
    Heading（标题元素）、
    Sectioning（章节元素）、
    Phrasing（段落元素）、
    Embedded（嵌入元素）、
    Interactive（交互元素）、
    Metadata（元数据元素）



### Flow（流式元素）

在应用程序和文档的主体部分中使用的大部分元素都被分类为流式元素。

    a， abbr， address， area（如果它是map元素的后裔）， article， aside， audio， b， bdi， bdo， blockquote， br， button， canvas， cite， code， command， datalist， del， details， dfn， div， dl，em， embed， fieldset， figure， footer， form， h1， h2， h3， h4， h5， h6， header， hgroup， hr， i， iframe， img， input， ins， kbd， keygen， label， map， mark， math， menu， meter，nav， noscript， object， ol， output， p， pre， progress， q， ruby， s， samp， script， section， select， small， span， strong， style（如果该元素设置了scoped属性）， sub， sup， svg， table，textarea， time， u， ul， var， video， wbr， text


### Heading（标题元素）

标题式元素定义一个区块/章节（section）（无论是明确的使用章节式内容的元素标记，或者标题式内容自身所隐含的）的标题。

    h1， h2， h3， h4， h5， h6， hgroup

### Sectioning（章节元素）

章节式元素是用于定义标题及页脚范围的元素。

    article， aside， nav， section


### Phrasing（段落元素）

段落式元素是文档中的文本、标记段落级文本的元素。

    a（如果其只包含段落式元素）， abbr， area（如果它是map元素的后裔）， audio， b， bdi， bdo， br， button， canvas， cite， code， command， datalist， del（如果其只包含段落式元素）， dfn， em， embed， i，iframe， img， input， ins（如果其只包含段落式元素）， kbd， keygen， label， map（如果其只包含段落式元素）， mark， math， meter， noscript， object， output， progress， q， ruby， s， samp， script，select， small， span， strong， sub， sup， svg， textarea， time， u， var， video， wbr， text

### Embedded（嵌入元素）

嵌入式元素是引用或插入到文档中其他资源的元素。

    audio， canvas， embed， iframe， img， math， object， svg， video

### Interactive（交互元素）

交互式元素是专门用于与用户交互的元素。

    a， audio（如果设置了controls属性）， button， details， embed， iframe， img（如果设置了usemap属性）， input（如果type属性不为hidden状态）， keygen， label， menu（如果type属性为toolbar状态），object（如果设置了usemap属性）， select， textarea， video（如果设置了controls属性）

### Metadata（元数据元素）

元数据元素是可以被用于说明其他内容的表现或行为，或者在当前文档和其他文档之间建立联系的元素

    base，command，link，meta，noscript，script，style，title

## 元素的属性

[Categories] 元素的类别
[Contexts in which this element can be used] 说明该元素能在何种场景下被使用
[Content model] 该元素可以包含的类别

    例子：<h1>~<h6>
    Categories:
        Flow content.
        Heading content.
        Palpable content.
    Contexts in which this element can be used:
        As a child of an hgroup element.
        Where flow content is expected.
    Content model:
        Phrasing content.

## 浏览器的容错机制

并不是每位同学在写完页面后去做合法性检查，因此浏览器厂商不得不让它们的浏览器以尽可能宽松的方式去处理网页，每个浏览器内核中都有相当一部分代码专门用来处理那些含糊不清的html标记及嵌套，并且会去猜测前端们到底想如何呈现网页，这是浏览器的容错机制。


