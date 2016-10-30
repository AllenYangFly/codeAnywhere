module.exports = {

    devtool: 'eval-source-map',
    entry: `${__dirname}/app/components/app.js`,
    output: {
        path: `${__dirname}/app/`,
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
                test: /\.scss$/,
                loader: "style!css!sass!postcss-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                  presets: ['es2015','react']
                }
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8009,
    },
    plugins: []
};