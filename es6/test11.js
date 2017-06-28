/**
 * pormise 
 * then() 两个参数，第一个参数是resolve，第二个参数为reject
 * catch() 只传递reject的handler
 */

function switchNum(val) {
    // 使用Promise构造函数创建
    return new Promise((resolve, reject) => {
        if(val > 5) {
            resolve('The value is more then: ' + val);
        } else {
            reject('The value is less then: ' + val)
        }
    })
}

let switchNumPromise = switchNum(3);
switchNumPromise.then((value) => {
    console.log(value);
}, (err) => {
    console.log(err)
}); 



// 使用已有函数创建
