// promise实现原理

var PENDING = undefine, 
    FULFILLED = 1,
    REJECTED = 2;

var Promise = function(resolver) {
    if(typeof resolver != 'function')
        throw new TypeError('所传参数必须为函数类型');
    if(!(this instanceof Promise))
        return new Promise(resolver);

    var promise = this,
    promise._value,
    promise._reason,
    promise._status = PENDING,
    promise._resolves = [],
    promise._rejects = [];

    var resolve = function(value) {
        //状态转换为FULFILLED 
        //执行then时保存到_resolves里的回调，
        //如果回调有返回值，更新当前_value
    }

    var reject = function(reason) {
        //状态转换为REJECTED
        //执行then时保存到_rejects里的回调，
        //如果回调有返回值，更新当前_rejects
    }

    resolver(resolve, reject);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
    var promise = this;

    return Promise(function(resolve, reject) {
        function callback(value) {
            var ret = isFunction(onFulfilled) && onFulfilled(value) || value;
            if(isThenable(ret)) {
                ret.then(function(valve) {
                    resolve(value);
                }, function(reason) {
                    reject(reason)
                });
            }else {
                resolve(ret);
            }
        }

        function errorback() {
            reason = isFunction(onRejected) && onRejected(reason) || reason;
            reject(reason);
        }

        if(promise._status === PENDING){
           promise._resolves.push(callback);
           promise._rejects.push(errback);
       }else if(promise._status === FULFILLED){ // 状态改变后的then操作，立刻执行
           callback(promise._value);
       }else if(promise._status === REJECTED){
           errback(promise._reason);
       }

    });
};

var isThenable = function(obj){ 
    return obj && typeof obj['then'] == 'function'; 
}