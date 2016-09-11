// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的
// 数组的成员值不等于undefined，则默认值不会生效

/*
解构的作用
1.交换变量的值[x,y] = [y,x];
2.从函数返回多个值
     function example() { return [1,2,3];} var [a,b,c] = example;
3.定义一组参数
     function add([x,y,z]) {}   add([1,2,3]);
     function add({a,b,c}) {}   add({a:1,b:2,c:4});
4.提取json数据
    let jsonDate = {
        id: 42,
        name: "allen",
        stu: 20144472 
    };

    let {id,name,stu} = jsonDate;
5. 函数的默认参数
6. 遍历Map结构
    var map = new Map();
    map.set("first","hello");
    map.set("last","world");
    for(let [key,value] of  map) {
        console.log(key+":"+value);
    }
    
*/


// 数组的解构赋值

let arr = [a,b,c] = [1,2,3];
console.log(arr);
// 结构不成功，返回undefined

let arr2 = [a,b,...c] = [1,2,3,4,5];
console.log(arr2[3]);

// 默认值,当解构的值不全等于undefined的时候才会使用默认值

let arr3 = [a=1, b=2, c=3] = ['a', 'b', 'c'];
console.log(arr3);


// 对象的解构
let allen = {name, age} = {name:"allen", age: 22};
console.log(allen.valueOf());

var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let str = { loc: { start: { line }} } = node;

console.log(str);


// 字符串解构
// 像数组一样赋值
const p = [a,b,c,d,e] = "allen";
console.log(p[0]);

// length属性,赋值给其他变量
let p2 = {length:len} = "allen";
console.log(len);



// 数值和布尔值的解构赋值
// 解构的时候如果等号右边是数字或者布尔值，则会先转化为对象
let {toString: s} = 123;
console.log(s === Number.prototype.toString);



// 函数参数的解构赋值问题
function add([x,y]) {
    return x+y;
}
console.log(add([1,2]));



// Map遍历
var map = new Map();
map.set("first","hello");
map.set("last","world");

for(let [key,value] of map) {
    console.log(key + ":" + value);
}
