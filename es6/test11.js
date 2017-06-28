/**
 * pormise 
 * then() 两个参数，第一个参数是resolve，第二个参数为reject
 * catch() 只传递reject的handler
 */

var promise = new Pormie((val) => {
    if(val > 5) {
        resolve(val);
    } else {
        reject(val)
    }
})

promise.then()