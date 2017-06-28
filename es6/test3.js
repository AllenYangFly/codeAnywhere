/**
 * 函数的扩展
 */

// 1.默认值

// es5
function makeRequest(url, data) {
    var url = url || 'ww.baidu.com';
    var data = data || {};
}

//es6默认值
function makeRequest(url='www.baidu.com', data={a:3}) {
    console.log(data);
}


// 函数默认值
function add() {
    return 5;
}

function sum(len, bot = add()) {
    return len + bot;
}


console.log(sum(1,1));
console.log(sum(1));

makeRequest(url='jd.com');


// 新添加name属性
console.log(makeRequest.name)


// Rest Parameters
function pick(object, ...rest) {
    let result = Object.create(null);

    for(let i=0; i<rest.length; i++) {
        result[rest[i]] = object[rest[i]];
    }

    return result;
}

// arrow function
//没有 this，super，arguments 和 new.target 绑定 - this，super，arguments 和 new.target 的值由最近的不包含箭头函数的作用域决定。（super 会在第四章讲解）
//不能被 new 调用 - 箭头函数内部没有 [[Construct]] 方法，因此不能当作构造函数使用。使用 new 调用箭头函数会抛出错误。
//没有 prototype - 既然你不能使用 new 调用箭头函数，那么 prototype 就没有存在的理由。箭头函数没有 prototype 属性。
//不能更改 this - this 的值在函数内部不能被修改。在函数的整个生命周期内 this 的值是永恒不变的。
//没有 arguments 对象 - 既然箭头函数没有 arguments 绑定，你必须依赖于命名或者剩余参数来访问该函数的参数。
//不允许重复的命名参数 - 不论是在严格模式还是非严格模式下，箭头函数都不允许重复的命名参数存在，相比传统的函数，它们只有在严格模式下才禁止该种行为。


