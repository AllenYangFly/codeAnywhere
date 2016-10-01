'use strict';

// 严格模式

/* 	严格模式可以直接在js文件中开头加上'use strict',也可以在函数中加上 function() { 'use strict'} 
 *	好处:1。明确错误	JavaScript总是默认错误,比如'abc'.length = 5;,
 *         length为只读属性，但是修改length，JavaScript并不会报错
 *		2. 在严格模式下，不作为方法的函数中的this是undefine
 *			function fn() { 'use strict' return this; } alert( fn() == undefine );
 *         在非严格模式下，函数中的this作为被称作全局变量
 *			function fn2() { return this; }  alert( fn2  == window );
 *		3. 不会自动创建全局变量
 *			非严格模式下
 *				function fn3() { foo = 5; }   fn3(); alert( foo );  // 5
 *			在非严格模式下
 *				function f3() { foo = 5;}   fn3();  //报错
*/

console.log("*************************************");

// const变量声明后不能改变，所以声明的时候要直接初始化
// 同样存在暂时性死区，同样不能重复声明，同样不能先使用后定义
var PI = 3.1415;

// PI = 5; // error
console.log(PI);

console.log("*************************************");
// 对于复合型的变量，const只保证变量的所指向的地址不变

var arr = [];
arr.push("hello world"); // 正常

// arr = [1,2,3];  // error 


// 属性冻结，Object.freeze
var foo = Object.freeze({});
// foo.color = "red";			//error

console.log(foo.color);

// es5共5种定义方法   var function
// es6共6种定义方法   var function let const import class

// se5中 var、function定义的全局变量属于window属性
// es6中 let、const、import、class定义的全局变量不属于window对象的属性