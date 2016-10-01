// ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。export和import；
// CommonJS和AMD模块，都只能在运行时确定这些东西。

// 变量必须声明后再使用
// 函数的参数不能有同名属性，否则报错
// 不能使用with语句
// 不能对只读属性赋值，否则报错
// 不能使用前缀0表示八进制数，否则报错
// 不能删除不可删除的属性，否则报错
// 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
// eval不会在它的外层作用域引入变量
// eval和arguments不能被重新赋值
// arguments不会自动反映函数参数的变化
// 不能使用arguments.callee
// 不能使用arguments.caller
// 禁止this指向全局对象
// 不能使用fn.caller和fn.arguments获取函数调用的堆栈
// 增加了保留字（比如protected、static和interface）

// 整体加载模块
import * as person from './profile';

{
    console.log(person.sum(5,5));
    console.log(person.fname + ':' + person.lname + ':' + person.year);
}


// ES6模块加载的实质
// CommonJS模块输出的是一个值的拷贝，
// 而ES6模块输出的是值的引用。
