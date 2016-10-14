// test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
// loader：loader的名称（必须）
// include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
// query：为loaders提供额外的设置选项（可选）


// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: `${__dirname}/public/index.html`,
//     filename: 'index.html',
//     inject: 'body',
// }); 


// [ { extensions: [ 'jsx' ],
//     test: /\.(jsx)(\?.*)?$/,
//     loader: 'babel-loader?stage=0' },
//   { extensions: [ 'js' ],
//     test: /\.(js)(\?.*)?$/,
//     loader: 'babel-loader?stage=0' },
//   { extensions: [ 'json' ],
//     test: /\.(json)(\?.*)?$/,
//     loader: 'file-loader?name=./json/[name].json' },
//   { extensions: [ 'png', 'jpg', 'jpeg', 'gif', 'svg' ],
//     test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
//     loader: 'url-loader?limit=10000&name=./images/[name].[ext]' },
//   { extensions: [ 'ttf', 'eot', 'woff', 'woff2', 'otf', 'svg' ],
//     test: /\.(ttf|eot|woff|woff2|otf|svg)(\?.*)?$/,
//     loader: 'file-loader?name=./font/[name].[ext]' },
//   { extensions: [ 'css' ],
//     test: /\.(css)(\?.*)?$/,
//     loader: '/Volumes/data/workspace/workin/node_modules/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true,"publicPath":"."}!style-loader!css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]' },
//   { extensions: [ 'less' ],
//     test: /\.(less)(\?.*)?$/,
//     loader: '/Volumes/data/workspace/workin/node_modules/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true,"publicPath":"."}!style-loader!css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]!less-loader' },
//   { test: /(\.js|\.jsx)$/,
//     loader: 'eslint-loader',
//     exclude: /(node_modules|\.css$|\.less$)/ } ]


module.exports = {

    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: `${__dirname}/public`,
        filename: "bundle.js" 
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015','react']
                }
            }
        ],
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: []
};



