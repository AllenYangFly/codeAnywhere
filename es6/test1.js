/**
 * 本笔记是拜读Nicholas C. Zakas写的教程所记录的，下面是地址
 * https://www.gitbook.com/book/oshotokill/understandinges6-simplified-chinese/details
 */


/**
 * 为什么要有let和const？
 * let和const的出现就是为了解决块级作用域的问题
 */

/**
 * 没有变量提升
 * let与var的区别就是有没有块级作用域和是否变量提升
 * const与let的区别就是是否是常量
 */

{
    // error
    // console.log(a);
    let a = 1;



    // 所有const变量都要在声明的时候初始化，不然会报错
    const b =5;
    console.log(b);



    // const定义的对象
    const obj = {name: 'allen'};
    obj.name = 'suyuhe';
    obj.age = 11;

    //指针指向的地址不变就不会报错
    // obj = {name: 'allen'}
    console.log(obj);
}


