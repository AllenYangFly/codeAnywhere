const React = require('react');
const ReactDOM = require('react-dom');
const About = require('./components/about/pages1.jsx');
const Repos = require ('./components/repos/pages2.jsx');
const Home =require('./components/home/home.jsx');
const User =require('./components/user/user.jsx');
const App = require("./components/app.jsx");

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

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/repos/:name" component={Repos} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
      </Route>
    </Router>,
    document.getElementById('wrap')
);
