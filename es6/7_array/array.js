// 1.Array.from()   
// 类数组对象（拥有一个 length 属性和若干索引属性的任意对象）
// 可遍历对象（你可以从它身上迭代出若干个元素的对象，比如有 Map 和 Set 等）

let person = {
    '0': "a",
    '1': "b",
    '2': "c"
};

let arr = [].slice.call(person);
console.log(arr);

// let arr = Array.from(person); 不能转，因为这是一个不可遍历的对象，并且没有length属性
// console.log(arr.length);

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);

// 第二个参数
// 类似于数组的map方法,处理函数项并且返回
// Array.from(arr,function(x) {return x++;});




// 2.Array.of()
// 弥补Array构造函数的不足
var arrOf1 = Array.of(3);  // [3]
var arrOf2 = new Array(3); // [ , , ]
console.log(arrOf);



// 3.copyWithin()
// 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员，改变原数组

// Array.prototype.copyWithin(target, start = 0, end = this.length)

// target（必需）：从该位置开始替换数据。
// start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。








