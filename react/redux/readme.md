## 基础
import { createStore } from "redux";

// 通过createStore得到store，store是一个对象
const store = createStore(reducer);

// createStore第一个参数reducer,第二个是initalState,第三个是applyMiddleWare

// action是一个对象，type属性是必须的。名称规范是全部大写并且使用_连接
const action = {
    type: "ADD_TODO",
    payload: "Learn Redux"
};


// dispatch
store.dispatch({
    type: "ADD_TODO",
    payload: "Learn Redux"
});
store.dispatch(action);


// Reducer,处理action的函数叫做reducer。参数是state和action
const reducer = function(state, action) {
    return new_state;
}

// subscribe设置监听函数
store.subscribe(listener);

// 三个方法
// store.getState()
// store.dispatch()
// store.subscribe()


// combineReducers合并reducer函数
// applyMiddleware合并多个middleware

## 中间件

中间件就是在store.dispatch()的时候加强处理

15114674831
xkmnukcu
