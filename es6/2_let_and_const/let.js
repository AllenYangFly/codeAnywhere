// "use strict";
// es6新增了let声明方式，声明的变量只在代码块中有效
// es6新增了const语法声明

//  相比const，let相比var的特点
//  1、块状作用域
//  2、不存在变量提升
//  3、不可以重复定义
//  4、暂时性死区
//  5、定义的全局变量不属于全局对象的属性

// 应用  1,不需要再使用立即执行的匿名函数
//      2,es5只允许在顶层作用域和函数作用域中定义函数，而ES6规定可以在块状作用域中定义函数


//  1、块状作用域
{
	let a = 1;
	var b = 2;
	console.log(a);	// 输出1
}

// console.log(a);  // 报错
console.log(b);	 // 输出2

console.log("块状作用域------------------------------");

var arr = [];
for( var i=0; i<10; i++ ) {
	arr[i] = function() {
		console.log(i);
	};
}
arr[6]();	 // 输出10
			 // 因为闭包的缘故，每次循环引用的都是同一个变量i

var arr2 = [];
for( let j=0; j<10; j++ ) {
	arr2[j] = function() {
		console.log(j);
	}; 
}
arr2[6]();	 // 输出6
			 // 以为j变量是块状变量，每次引用的并不是同意一个变量i


var arr3 = [];
for(var m=0; m<10; m++) {
	arr3[m] = function() {
		return m; 
	}();
}
console.log(arr3[6]);		// 输出6，原理为立即执行函数，函数在预编译阶段并不会解析函数，但是加上立即执行函数之后，会立即进行执行函数

console.log("不存在变量提升------------------------------");
console.log(a1);
// console.log(a2);   报错,不存在变量提升
var a1 = 1;
let a2 = 2;


console.log("暂时性死区------------------------------形成原因，由于内部let定义的变量不会存在变量提升，内部会形成一个封闭的空间");
// 暂时性死区
// 对于不存在变量提升的代码块，如果产生暂时性死区就会抱错
if(true) {
	console.log(a1);	// 不抱错，这时使用的是全局的a1变量

	// console.log(a1);		
	// let a1 = 1;			// 报错，形成暂时性死区,这时a1为let的变量，并且因为不存在变量提升，在声明之前调用，所以会出错
}


// 暂时性死区的意义，进一步规范ecmascript的书写规范，提高代码的健壮性，养成先定义，后使用的习惯
console.log("------------------------------");
// 不允许相同作用域中重复调用
// function() {
// 	var a = 1; 	// error
// 	let a = 2; 	// error
// }

// function() {
// 	let b = 1;	// error
// 	let b = 2;	// error
// }


// function fn(arg) {
// 	let arg = 5;  // error
// }

function fn(arg) {
	{
		let arg = 6;   // 不抱错，不在同一作用域中
	}
}



console.log("------------------------------");
// 块状作用域的出现使得立即执行的匿名函数没有存在的必要了
// es5只允许在全局和函数体内声明函数，而es6可以在块状作用域中声明了
// function　f(){console.log("I'm outside")}
// (function(){
// 	if( false ){
// 		function f(){console.log("I'm inside")}
// 	}
// 	f();
// })();
// 在es6中解析，if为块状作用域，会得到如下代码
// function(){
// 	if(false){}
// 	f(); 
// }

// 在es5中解析的时候，if不是块状作用域。所以会得到如下代码
// 结果为“I'm inside”
// function(){
// 	function f() {console.log("I'm inside")};
// 	if(fasle){}
// 	f();
// }



// console.log("------------------------------");
// // es6中的块状作用域只有在大括号的前提下才能实现,
// // 去掉大括号抱错，因为同一作用域下只能声明一次变量
// if (true)
// {
// 	let a = 2;
// }


// function demo() {
// 	return this;
// }

// console.log(demo());





