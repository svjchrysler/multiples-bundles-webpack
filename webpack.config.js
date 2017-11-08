var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
    entry: {
        'page1': './src/index.js',
        'page2': './src_mobile/index.js'
    },
    output: {
        filename: "[name]/build/bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ScriptExtHtmlWebpackPlugin({
            sync: 'bundle.js',
            defaultAttribute: 'async'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['page1'],
            filename: 'page1/build/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['page2'],
            filename: 'page2/build/index.html'
        }),
        
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
}