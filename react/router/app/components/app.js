const React = require('react');
const ReactDOM = require('react-dom');
const Page1 = require('./pages1/pages1.jsx');
const Page2 = require ('./pages2/pages2.jsx');
const Home =require('./home/home.jsx');

const { Router, Route, hashHistory, IndexRoute} = require('react-router');
// Router就是一个组件

// history 属性值
//   1.browserHistory   原样原样输出URL，但是需要开发服务器使用的是webpack-dev-server，加上--history-api-fallback参数就可以了
//   2.hashHistory      输出hashHistoryURL
//   3.createMemoryHistory  服务器端渲染问题

// IndexRoute 根目录默认加载组件
// Redirect   访问path路由跳转
// IndexRedirect  访问根目录默认跳转
// Link       点击跳转路由
// IndexLink 点击根目录默认跳转路由


// 几个事件
// onLeave
// onEnter 

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component="">
            <IndexRoute component={Home}/>
            <Route path="/page1" component={Page1}/ >
            <Route path="/page2" component={Page2}/>
         </Route>
    </Router>), 
    document.getElementById('wrap')
);

