'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ref, _ref2, _ref3, _ref3$, _ref3$2, _ref3$3, _name$age, _node, _allen, _allen2, _allen3;

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

var arr = (_ref = [1, 2, 3], a = _ref[0], b = _ref[1], c = _ref[2], _ref);
console.log(arr);
// 结构不成功，返回undefined

var arr2 = (_ref2 = [1, 2, 3, 4, 5], a = _ref2[0], b = _ref2[1], c = _ref2.slice(2), _ref2);
console.log(arr2[3]);

// 默认值,当解构的值不全等于undefined的时候才会使用默认值

var arr3 = (_ref3 = ['a', 'b', 'c'], _ref3$ = _ref3[0], a = _ref3$ === undefined ? 1 : _ref3$, _ref3$2 = _ref3[1], b = _ref3$2 === undefined ? 2 : _ref3$2, _ref3$3 = _ref3[2], c = _ref3$3 === undefined ? 3 : _ref3$3, _ref3);
console.log(arr3);

// 对象的解构
var allen = (_name$age = { name: "allen", age: 22 }, name = _name$age.name, age = _name$age.age, _name$age);
console.log(allen.valueOf());

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

var str = (_node = node, line = _node.loc.start.line, _node);

console.log(str);

// 字符串解构
// 像数组一样赋值
var p = (_allen = "allen", _allen2 = _slicedToArray(_allen, 5), a = _allen2[0], b = _allen2[1], c = _allen2[2], d = _allen2[3], e = _allen2[4], _allen);
console.log(p[0]);

// length属性,赋值给其他变量
var p2 = (_allen3 = "allen", len = _allen3.length, _allen3);
console.log(len);

// 数值和布尔值的解构赋值
// 解构的时候如果等号右边是数字或者布尔值，则会先转化为对象
var _ = 123;
var s = _.toString;

console.log(s === Number.prototype.toString);

// 函数参数的解构赋值问题
function add(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2);

    var x = _ref5[0];
    var y = _ref5[1];

    return x + y;
}
console.log(add([1, 2]));

// Map遍历
var map = new Map();
map.set("first", "hello");
map.set("last", "world");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        console.log(key + ":" + value);
    }
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