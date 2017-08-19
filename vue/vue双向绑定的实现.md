http://jixianqianduan.com/frontend-javascript/2015/11/29/js-data-two-ways-binding.html

##  什么是双向绑定？

顾名思义，双向绑定就是两遍都绑定的意思。具体点来说就是将view层数据与model层数据建立联系，使model更新能自动触发view更新，view更新也能实时反馈到model。

### 为什么我们需要双向绑定?

长久以来，前端开发对的痛点就是需要操作大量的DOM来达到我们实时更新的效果，增加了前端的工作量。双向数据绑定使我们能摆脱手动更新数据的痛点，使我们能把精力放在数据的获取处理上，减轻了前端的工作量，增加了代码的可维护性。

## Vue的双向绑定是如何实现的？

数据与视图的绑定与同步，最终体现在对数据的读写处理过程中，所以VueJS 使用 ES5 提供的 Object.defineProperty定义的set和get方法，监控对数据的操作，从而可以自动触发数据同步。

具体实现:

``` javascript
function defineReactive(obj, key, value) {
    var dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            if (Dep.target) {
                dep.depend()
            }
            return value
        },
        set: function reactiveSetter(newVal) {
            if (value === newVal) {
                return
            } else {
                value = newVal
                dep.notify()
            }
        }
    })
}

```

由于vue依赖于ES5的Object.defineProperty方法，所以vue在兼容性上只能支持到IE9+,IE8不支持这个方法。

## AngularJS又是怎么实现的？

在AngularJS中双向数据局绑定监听依赖于$digest和$apply方法，每次改动触发两个事件，AngularJS都检测相关内容的并对改动做出反馈，不同的是digest只是监听当前作用域和子作用域，而apply会检测整个作用域链。



关于双向绑定的问题大致就到这里，知道原理最好还是看下源码和具体实现，才能更好的理解，下节将会介绍`MVVM`的实现方式，欢迎订阅。