'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1.创建类
//  p.constructor === person.prototype.constructor
{
    var person = function () {
        function person(name, age) {
            _classCallCheck(this, person);

            this.name = name;
            this.age = age;
            this.id = '20144472';
        }

        _createClass(person, [{
            key: 'toString',
            value: function toString() {
                return this.name + ':' + this.age;
            }
        }]);

        return person;
    }();

    var _p = new person('allen', 20);
    console.log(_p.toString());
    _p.id = '2015';
    var p2 = new person('allen', 21);
    console.log(p2.toString());
}

// 2.constructor方法
// constructor的构造方法,实例化后是在实例上的
// 其他方法是在原型链上的
// 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上

{
    // 每个类都有一个person方法
    var _person = function () {
        function _person(age, name) {
            _classCallCheck(this, _person);

            this.age = age;
            this.name = name;
        }

        _createClass(_person, [{
            key: 'toString',
            value: function toString() {
                return '(' + this.name + ':' + this.age + ')';
            }
        }]);

        return _person;
    }();

    var _p2 = new _person(21, 'allen');
    console.log(_p2.hasOwnProperty('age'));
    console.log(_p2.hasOwnProperty('name'));
    console.log(_p2.hasOwnProperty('toString'));
}

// 3.不存在变量提升
{
    // new person;  //error
    var _person2 = function _person2() {
        _classCallCheck(this, _person2);
    };
}

// 4.类表达式
// person才是类名，me是类的别名
{
    var _person3 = function me() {
        _classCallCheck(this, me);
    };
}

// 5.Class的继承
// super获取到父类构造器
{
    var sup = function sup(name) {
        _classCallCheck(this, sup);

        this.name = name;
    };

    var sub = function (_sup) {
        _inherits(sub, _sup);

        function sub(name, age) {
            _classCallCheck(this, sub);

            // 子类只有在super之后才能使用this关键字
            var _this = _possibleConstructorReturn(this, (sub.__proto__ || Object.getPrototypeOf(sub)).call(this, name));
            // this.age = agess; errors


            _this.age = age;
            return _this;
        }

        return sub;
    }(sup);

    var s = new sub('allen', 20);
    console.log(s);
}

// 6.Object.getPrototypeOf()  返回父类
// 判断是否继承   
{
    var fu = function fu() {
        _classCallCheck(this, fu);
    };

    var zi = function (_fu) {
        _inherits(zi, _fu);

        function zi() {
            _classCallCheck(this, zi);

            return _possibleConstructorReturn(this, (zi.__proto__ || Object.getPrototypeOf(zi)).apply(this, arguments));
        }

        return zi;
    }(fu);

    console.log(Object.getPrototypeOf(zi) === fu);
}

console.log('------------');
// 7.static方法
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承
{
    var _person4 = function () {
        function _person4() {
            _classCallCheck(this, _person4);
        }

        _createClass(_person4, null, [{
            key: 'showName',
            value: function showName(name) {
                return name;
            }
        }]);

        return _person4;
    }();

    var p = new _person4();
    // console.log(p.showName('allen'));   error
    console.log(_person4.showName('allen'));
}