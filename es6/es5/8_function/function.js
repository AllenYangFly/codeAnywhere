"use strict";

// 1.参数默认值
{
    var add = function add() {
        var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
        var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        console.log(a + b);
    };

    add(4, 5);
}

// 2.函数的length属性,显示函数所需的参数个数
// 如果设置默认值，则length属性将不再计数
{
    var _add = function _add(a, b) {
        return a + b;
    };

    console.log(_add.length);
}

// 3.rest参数,相当于更加灵活的arguments
{
    var _add2 = function _add2() {
        var sum = 0;

        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                sum += i;
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

        return sum;
    };

    console.log(_add2(1, 2, 3, 4, 5));
}

// 4.扩展运算符


// 5.name属性
{
    var _add3 = function _add3() {};

    console.log(_add3.name);
}

// 6.箭头函数
{
    // f1与f2等同
    var f1 = function f1(v) {
        return v;
    };
    var f2 = function f2(v) {
        return v;
    };
    // 箭头函数的this不是指向调用该函数的运行环境，而是指向定义时的运行环境
    console.log(f1(3));
}

// 注意:
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。