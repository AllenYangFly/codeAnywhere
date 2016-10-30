## 1.webpack的安装

    npm init
    sudo npm install -g webpack
    sudo npm install --save-dev webpack

## 2.使用

    如果没有全局安装webpack
    node_modules/.bin/webpack src/main.js  dist/bundle.js

## 3.webpack细则

### entry
    webpack打包入口文件，webpack会根据这个文件，来查找所有的依赖文件，打包成JS文件
    __dirname  node默认全局变量，指向当前脚本运行时所在的目录

### output
    打包的结果文件，
    path     指定打包后的文件的存放目录
    filename 指定打包文件的文件名    

### module.loaders
    设置各种文件的处理方式

    安装babel
    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

    loader
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',//在webpack的module部分的loaders里进行配置即可
    query: {
      presets: ['es2015','react']
    }

### devtool
    文件打包后调试非常不方便，设置devtool之后可以更加清楚的看到出错的源代码位置
    devtool的sourcemap会在bunld.js里面显示


## 4.如何使用快捷的打包方式？

    1.修改package.json，将script的键值内部加上
    "start": "node_module/.bin/webpack"

    启动: npm start

    2.使用webpack热加载,启动一个webpack插件自带的本地服务亲
    ~npm install webpack-dev-server
    ~修改script
         "dev": "webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./src",
    ~使用npm run dev




