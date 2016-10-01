"use strict";

// 1.二于八进制数, 0b或者0B，0o或者0O为前缀
console.log(503 === 503); // TRUE


// 2.ES6重新定义了两个方法
// Number.isFinite()
// Number.isNaN()
// ES5中两个方法都会先调用Number()方法，将不是Number类型的转换成Number类型
// ES6中两个方法，如果参数不是Number类型，会直接返回false


// 3.parseInt,parseFloat完全移植到Number对象上
// Number.parseInt();
// Number.parseFloat();


// 4.Number.isInteger()  判断是不是整数
console.log(Number.isInteger(8.1)); // false


// 5.Number.EPSILON 一个极小数的常量
// 由于Javascript所有Number类型采用IEE754的标准来存储,所以平时的计算并不准确
// 如果两个差值不大于Number.EPSILON,就表明两个是相同的


// 6.安全数
// 方法 isSafeInteger()
// 常量 Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER
// Math.isSafeInteger()    检测是否是在安全范围内的数
// Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER    安全范围内的最大值和最小值 


// 7.Math对象的方法

// Math.trunc  去除小数部分,对于非数值类型，会先调用Number()方法转换类型
// Math.sign   判断是正数，负数还是零.正数返回1，负数返回-1，0返回0,会先调用Number()方法转换类型
// Math.cbrt   计算立方根,会先调用Number()方法转换类型
// Math.clz32  返回一个数的32位无符号整数形式有多少个前导0
// Math.imul   返回两个数以32位带符号整数形式相乘的结果
// Math.fround 返回一个数的单精度浮点数形式
// Math.hypot  返回所有参数的平方和的平方根


// 8.指数运算符 **  (ES7,目前还不支持)
// console.log(2**3);