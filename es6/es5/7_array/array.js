'use strict';

// 1.Array.from()   
// 类数组对象（拥有一个 length 属性和若干索引属性的任意对象）
// 可遍历对象（你可以从它身上迭代出若干个元素的对象，比如有 Map 和 Set 等）

var person = {
    '0': "a",
    '1': "b",
    '2': "c"
};

var arr = [].slice.call(person);
console.log(arr);

// let arr = Array.from(person); 不能转，因为这是一个不可遍历的对象，并且没有length属性
// console.log(arr.length);

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);

// 第二个参数
// 类似于数组的map方法,处理函数项并且返回
// Array.from(arr,function(x) {return x++;});


// 2.Array.of()
// 弥补Array构造函数的不足
var arrOf1 = Array.of(3); // [3]
var arrOf2 = new Array(3); // [ , , ]
console.log(arrOf1);

// 3.copyWithin()
// 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员，改变原数组
// Array.prototype.copyWithin(target, start = 0, end = this.length)
// target（必需）：从该位置开始替换数据。
// start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

var arrWithin = [1, 2, 3, 4, 5, 6, 7];
console.log(arrWithin.copyWithin(0, 4, 6));
console.log(arrWithin); // 改变原数组


// 4.find()和findIndex()根据某种规则返回数组项中的第一个满足条件的
var result = arrWithin.find(function (value, index, arr) {
    return value > 6;
});
result = arrWithin.findIndex(function (value, index, arr) {
    return value > 3;
});
console.log(result);

// 5.fill() 填充,改变原数组
// 数组有值会被抹除
// 没有值会自动添加

console.log(arrWithin.fill(1));
console.log(arrWithin);

// 6.数组遍历entries()，keys()和values()

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arrWithin.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        console.log(index);
    }

    // for(let elem of arrWithin.values()) {
    //     console.log(elem);
    // }


    // 7.includes() 是否包含参数项 ES7标准
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log(arrWithin.includes(2));

// 8.数组的空位明确未undefined
// es6默认所有的空位都为undefined，不可忽略。但是在ES5中，数组方法遍历的时候，会忽略掉空位。