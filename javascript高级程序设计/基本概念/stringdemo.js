// toString
// 数值,布尔，对象，字符串都有toString方法

var num = "hello";

console.log( num.toString(8) );

// toString() 加上参数表示

var str = "world";
console.log( num.concat(str ));

console.log( str.toLocaleUpperCase() );

var arr = [1,2,3,4];

arr.length = 3;	  //第四项丢失

arr.length = 4;    

console.log(arr[3]);

 
