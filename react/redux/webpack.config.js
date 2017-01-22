module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname +"/dist",
        filename: "build.js"
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.jsx$|\.js$/,
        //         loader: 'eslint-loader',
        //         include: `${__dirname}/src`,
        //         exclude: /bundle\.js$/
        //     }
        // ],
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css?modules!postcss",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test:　/\.json$/,
                exclude: /node_modules/,
                loader: "json"
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: []
};


// entry     入口文件
// outout    出口文件
// resolve   定义解析模块路径，通常设置extensions,可以在导入模块的时候不用写后缀名
// plugins   定义需要使用的插件,
// module.loaders  定义文件加载器

