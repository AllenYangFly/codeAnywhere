'use strict';

// Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大
// 简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果
// Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）

/*
相比与回调函数与事件驱动
1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、
Resolved（已完成，又称Fulfilled）和Rejected（已失败）。
只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，
只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，
状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，
也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
*/

// 1. 创建promise对象

// promise对象接受一个函数，resolve,reject由语言自动部署
// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

// Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。

{
    var promise = new Promise(function (resolve, reject) {
        // ... some code

        if (true) {
            resolve(value);
        } else {
            reject(error);
        }
    });
}

{
    var timeout = function timeout(ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve(function () {
                return 'allen';
            }()), ms, 'settimeout done');
        });
    };

    timeout(1000).then(function (value) {
        console.log(value);
    });
}

{
    var time = new Promise(function (resolve, reject) {
        console.log('hello 1');
        resolve('yang');
    });

    time.then(function (value) {
        console.log(value);
    });
}

// 2.异步加载图片
// {
//     function loadImageAsync(url) {
//       return new Promise(function(resolve, reject) {
//         var image = new Image();

//         image.onload = function() {
//           resolve(image);
//         };

//         image.onerror = function() {
//           reject(new Error('Could not load image at ' + url));
//         };

//         image.src = url;
//     });
// }


// 3.使用promise编写Ajax
{}
// var getJSON = function(url) {
//   var promise = new Promise(function(resolve, reject){
//     var client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//   });

//   return promise;
// };

// getJSON("../package.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });


// 4.Promise.prototype.then()
// 它的作用是为Promise实例添加状态改变时的回调函数。then方法的第一个参数是Resolved状态的回调函数,
// 第二个是reject的回调函数
{}

// 5.Promise.prototype.catch()
// Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
{}

// getJSON("/posts.json").then(function(posts) {
//   // ...
// }).catch(function(error) {
//   // 处理 getJSON 和 前一个回调函数运行时发生的错误
//   console.log('发生错误！', error);
// });

// 不用在写then的第二个参数了


// 6.Promise.all()
// Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
// 1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled。
// 2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
{}

// 7.Promise.race() 
// Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。

{}
// var p = Promise.race([
//   fetch('/resource-that-may-take-a-while'),
//   new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('request timeout')), 5000)
//   })
// ])
// p.then(response => console.log(response))
// p.catch(error => console.log(error))


// 8.Promise.resolve()
// 有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。
{}

// 9.done()方法 finally()方法
// done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误
{}
//     asyncFunc()
//       .then(f1)
//       .catch(r1)
//       .then(f2)
//       .done();


// finally方法用于指定不管Promise对象最后状态如何,都会执行的方法
{}
// server.listen(0)
//   .then(function () {
//     // run test
//   })
//   .finally(server.stop);

// 加载图片
{
    var preloadImage = function preloadImage(path) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.src = path;
        });
    };
}