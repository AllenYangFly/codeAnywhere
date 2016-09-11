## 什么是DTD

    DTD是文档的定义类型,一种约束规则，一个规范，规定了一个文档中有哪些元素，一个元素中有哪些属性以及元素之间的使用规则。

## 用法

一个DTD文档包含元素的定义规则、元素间关系的定义规则、元素可使用的属性、可使用的实体和符号规则。

DTD要通过<!DOCTYPE>标签来申明， <!DOCTYPE>位于文档中的最前面的位置，处于 <html> 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。
   
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

在上面的声明中，声明了文档的根元素是 html，它在公共标识符被定义为 “-//W3C//DTD XHTML 1.0 Strict//EN” 的 DTD 中进行了定义。浏览器将明白如何寻找匹配此公共标识符的 DTD。如果找不到，浏览器将使用公共标识符后面的 URL 作为寻找 DTD 的位置。

## DTD的类型
    
    strict（严格）、
    transitional（过度）、
    frameset（框架）
    

### strict（严格）

严格类型的DTD包含了大部分的html元素和属性，但一些过时的元素已经不再支持（font\u\s\iframe等）；

### transitional（过度）

过度的包含了所有的html元素和属性，过时的一些元素也支持；

### frameset（框架）

框架的DTD是为需要使用框架时所用到的DTD，如无框架，不会用到。


