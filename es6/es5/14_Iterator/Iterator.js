'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 一个数据结构只要具有Symbol.iterator属性
// ES6中有类数据结构，原生具有Itertor接口。数组，类数组对象，Set与Map

// 1.数组的Iterator,通过数组实例的Symbol.iterator属性
{
  var arr = ['a', 'b', 'c'];
  var iter = arr[Symbol.iterator]();
  console.log(iter.next());
}

// 2.自定义对象,部署iterator
{
  var value;

  (function () {
    var range = function range(start, stop) {
      return new RangeIterator(start, stop);
    };

    var RangeIterator = function () {
      function RangeIterator(start, stop) {
        _classCallCheck(this, RangeIterator);

        this.value = start;
        this.stop = stop;
      }

      _createClass(RangeIterator, [{
        key: Symbol.iterator,
        value: function value() {
          return this;
        }
      }, {
        key: 'next',
        value: function next() {
          var value = this.value;
          if (value < this.stop) {
            this.value++;
            return { done: false, value: value };
          } else {
            return { done: true, value: undefined };
          }
        }
      }]);

      return RangeIterator;
    }();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {

      for (var _iterator = range(0, 3)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        value = _step.value;

        console.log(value);
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
  })();
}

// 3.调用Iterator接口的场合
{}
// for...of
// Array.from()
// Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
// Promise.all()
// Promise.race()


// 4.字符串的Iterator
{
  var str = "allen";
  var _arr = [].concat(_toConsumableArray(str));
  // 调用Symbol.iterator方法返回一个遍历器对象，在这个遍历器上可以调用next方法，实现对于字符串的遍历
  var arr2 = str[Symbol.iterator]();
  console.log(_arr);
  console.log(arr2.next());
}

// 5.for..of
// 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。

// 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
// 某些情况下，for...in循环会以任意顺序遍历键名。