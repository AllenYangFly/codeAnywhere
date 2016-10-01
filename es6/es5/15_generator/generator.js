'use strict';

// Generator函数是ES6提供的一种异步编程解决方案

// Generator函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）。


// 1.定义Generator函数
{
    var helloGenerator = regeneratorRuntime.mark(function helloGenerator() {
        return regeneratorRuntime.wrap(function helloGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'hello';

                    case 2:
                        _context.next = 4;
                        return 'word';

                    case 4:
                        return _context.abrupt('return', 'world');

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, helloGenerator, this);
    });

    var hl = helloGenerator();
    // 调用generator函数不会执行，而是会返回一个遍历器对象
    // yield相当于暂停，return相当于结束
    // 使用next()方法，可以让他恢复继续执行
    console.log(hl.next());
    console.log(hl.next());
    console.log(hl.next());
}

// 2.yield语句
// （1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
// （3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

{}

// 3.for...of语句
// 必须具有Iterator接口才能使用

{}

// 4.Generator.prototype.throw()
// 可以在函数体外抛出错误，然后在Generator函数体内捕获。
{
    console.log('-------------------');
    var g = regeneratorRuntime.mark(function g() {
        return regeneratorRuntime.wrap(function g$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        console.log('正常执行');
                        _context2.next = 4;
                        return;

                    case 4:
                        _context2.next = 9;
                        break;

                    case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2['catch'](0);

                        console.log('内部捕获' + _context2.t0);

                    case 9:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, g, this, [[0, 6]]);
    });

    var i = g();
    i.next();

    try {
        i.throw('a');
        i.throw('b');
    } catch (e) {
        console.log('外部捕获' + e);
    }

    // 1.执行generator函数，执行try语句
    // 2.第一次调用throw()抛出异常，在generator函数内部捕获,执行catch代码块
    // 3.第二次调用throw()抛出异常，由generator函数的捕获已经执行了,所以不会再进行捕获，所以在外部代码块捕获
}

// 5.Generator.prototype.return()
// 可以结束Generator函数
{
    var _g = regeneratorRuntime.mark(function _g() {
        return regeneratorRuntime.wrap(function _g$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return 1;

                    case 2:
                        _context3.next = 4;
                        return 2;

                    case 4:
                        _context3.next = 6;
                        return 3;

                    case 6:
                        _context3.next = 8;
                        return 4;

                    case 8:
                        return _context3.abrupt('return', 5);

                    case 9:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _g, this);
    });

    console.log('-------------');


    var i = _g();
    console.log(i.next());
    console.log(i.next());
    console.log(i.return('a'));
    console.log(i.next());
}

// 6.yield* 语句
// 如果在Generater函数内部，调用另一个Generator函数，默认情况下是没有效果的。
// 借助yield*语句可以达到效果

{
    var g;

    (function () {
        var sup = regeneratorRuntime.mark(function sup() {
            return regeneratorRuntime.wrap(function sup$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return 'a';

                        case 2:
                            _context4.next = 4;
                            return 'b';

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, sup, this);
        });
        var sub = regeneratorRuntime.mark(function sub() {
            return regeneratorRuntime.wrap(function sub$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return 1;

                        case 2:
                            return _context5.delegateYield(sup(), 't0', 3);

                        case 3:
                            _context5.next = 5;
                            return 2;

                        case 5:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, sub, this);
        });

        console.log('-----------');
        g = sub();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = g[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _i = _step.value;

                console.log(_i);
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

// 7. this
// generator函数执行返回的是该函数的遍历器
{
    console.log('-------------');
    // this指向，遍历器实例不能访问
    {
        var a = regeneratorRuntime.mark(function a() {
            return regeneratorRuntime.wrap(function a$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            this.name = 'allen';

                        case 1:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, a, this);
        });

        var _f = a();
        _f.next();
        console.log(_f.name);
    }

    //  解决的方案
    {
        var _a = regeneratorRuntime.mark(function _a() {
            return regeneratorRuntime.wrap(function _a$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            this.name = 'allen';

                        case 1:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _a, this);
        });

        var _f2 = _a.call(_a.prototype);
        _f2.next();
        console.log(_f2.name);
    }

    // new 
    {
        var f;

        (function () {
            var a = regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(function a$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                this.name = 'allen';

                            case 1:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, a, this);
            });

            var F = function F() {
                return a.call(a.prototype);
            };

            f = new F();


            f.next();
            console.log(f.name);
        })();
    }
}

// 8.状态机,状态锁
{
    console.log('-------');
    // 1.es5
    {
        var clock = function clock() {
            if (ticking) {
                console.log(true);
            } else {
                console.log(false);
            }
            ticking = !ticking;
        };

        var ticking = true;


        clock();
        clock();
    }

    // 2.generator
    {
        var _clock = regeneratorRuntime.mark(function _clock() {
            return regeneratorRuntime.wrap(function _clock$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            if (!true) {
                                _context9.next = 9;
                                break;
                            }

                            console.log(true);
                            _context9.next = 4;
                            return;

                        case 4:
                            console.log(false);
                            _context9.next = 7;
                            return;

                        case 7:
                            _context9.next = 0;
                            break;

                        case 9:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _clock, this);
        });

        var i = _clock();
        i.next();
        i.next();
    }
}

//