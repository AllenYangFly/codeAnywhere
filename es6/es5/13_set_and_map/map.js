'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 对象其实就是键与键值的集合，但是对象的键必须是字符串的形式
// map的引入解决了这个痛点

// 1.创建Map
{
    var m = new Map();
    var o = { name: 'allen' };
    m.set(o, 'content');
    console.log(m.get(o));
    console.log(m.has(o));
    console.log(m.size);
    console.log(m.delete(o));
    console.log(m.has(o));
}

console.log('-----------------');
// 2.属性:size
//   方法:get(),set(),has(),delete(),clear()


// 3.keys(),values(),entries(),forEach()
//  keys()    键
//  values()  键值
//  entries() 键值对
//  forEach() 遍历每个项

{
    var _m = new Map();
    _m.set('name', 'allen');
    _m.set('age', 20);
    console.log(_m);
}

console.log('----------------');
// 4.转化

// 1).Map转数组
{
    var _m2 = new Map().set(true, 7).set(false, 5);
    console.log([].concat(_toConsumableArray(_m2)) instanceof Array);
}

// 2).数组转Map
{
    new Map([[true, 7], [{ foo: 3 }, ['abc']]]);
}

// 3).Map转为对象
{
    var map2Object = function map2Object(map) {
        var obj = new Object.create(null);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2);

                var k = _step$value[0];
                var v = _step$value[1];

                obj[k] = v;
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

        return obj;
    };
}

// 4).对象转Map
{
    var object2Map = function object2Map(obj) {
        var map = new Map();
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var k = _step2.value;

                map.set(k, obj[k]);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return map;
    };
}

// 5).Map转json  map->obj->json
{
    var map2json = function map2json(map) {
        return JSON.Stringify([].concat(_toConsumableArray(map)));
    };
}

// 5.WeakMap
// 1).WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），
// 2).不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。

{}