/**
 * webpack 配置
 * @author shan-er
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vendorConfig = require('../release/dll/vendorConfig.json');
const vendorManifest = require('../release/dll/vendor-manifest.json');
const extractSass = new ExtractTextPlugin({
    filename: 'assets/css/common-[hash].css',
    disable: process.env.NODE_ENV === "develop"
});

var config = {
    entry: {
        index: path.resolve(__dirname, "../src/index.js")
    },
    output: {
        path: path.resolve(__dirname, '../release'),
        publicPath: '/release/',
        filename: 'js/[name]-[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, "../node_modules")
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }, {
            test: /\.css/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpe?g|gif)$/,
            use: 'file-loader?name=[name].[ext]&outputPath=assets/imgs/'
        }, {
            test: /\.(woff|eot|svg|ttf)(\?(\w|#)+)?$/,
            loader: 'file-loader?limit=20480&name=[name].[ext]&outputPath=assets/fonts/'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        }
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            bundleName: process.env.NODE_ENV == 'production' ? 'dll/' + vendorConfig.vendor.js : '/release/dll/' + vendorConfig.vendor.js
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: vendorManifest
        })
    ]

};

module.exports = config;