## 简介

函数柯里化是在演算lambda只有一个参数时才被发现的，简单来说就是将多参数变为每次只传一个参数增加函数层级的一种方案。

## demo

```
// 普通函数
function sum(x, y) {
    return x+y;
}
sum(3,4);

//  curry化函数
function sum(a) {
    return function(b) {

    }
}
sum(3)(4)
```

## 原理

柯里化就把原来的函数部分求值，把参数形成闭包暂时保存下来，返回带有剩余参数的函数。

## 应用

惰性求值
可以提前传入部分参数
redux 里面常用的thunk Meddleware
```
function createThunkMiddleware(extraArgeument) {
    return ({dispath, getState}) => next => action => {
        if(typeof action === 'function') {
            return action(dispath, getState, extraArgument);
        }

        return next(action);
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

## 态度

有些人非常推荐，认为是函数式编程的基础，而有些人则是非常反感，把他叫做业界毒瘤。
我感觉这个见仁见智，主要是要考虑场景，考虑团队的编程习惯。


## tip
高阶函数：将函数当做参数或返回值的函数