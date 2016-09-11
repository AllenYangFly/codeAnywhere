## 安装

    npm install jade

## 编译

    jade -P -w name.jade
    -P 代表不压缩
    -w 为watch

## 语法

标签

    div

class

    div.item

id

    div#header

多个混个

    div#header.item.cout

默认生成嵌套

    #header
    .top

多行文字换行输出

    p
        |I'm allen
        |a frond-end developer
        |keep clam,keep code.
 
与数据结合

    #user #{name} &lt;#{email}&gt;
    格式#{}
    如果输出#{}
    则使用转译字符\#{}
    遇到html变量，则使用!{html}

以“.”来开始一段文本块

注释

    //   输出注释
    //-  不输出注释w



