//   学习JS文件

/**
 * Promise函数 new Promise
 * reject、 resolve
 * then、catch
 */

function timeOut(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })
}

timeOut(100).then((value) => {
    // console.log(value);
})
/**
 * 异步Ajax
 *
var promise = new Promise(function(resolve, reject) {
    $.ajax({}, callback(function() {
        if(rep.code == 200)        {
            resolve()
        }else {
            reject()
        }
    }))
})


promise.then(function() {
    console.log('resolve')
})
*/



/**
 * generater函数
 */

function * gen() {
    yield 'hello';
    yield 'world';
    return 'end'
}

var generter = new gen();
generter.next();


