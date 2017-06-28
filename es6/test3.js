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


// 

