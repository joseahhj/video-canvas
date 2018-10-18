/**
 * webpack 配置
 * @author shan-er
 */
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry:{
        vendor: ['vue', 'vue-router'],
        // verticaleffect:[
        //     path.resolve(__dirname,'../')+'/src/untils/image_zoom_inout.js',
        //     path.resolve(__dirname,'../')+'/src/untils/image_vertical_zoom_inout.js'
            
        // ]
    },
    output: {
        path:path.resolve(__dirname,'../release/dll'),
        filename: "[name].[hash].js",
        library:"[name]_[hash]"
    },
    resolve:{
        alias: {
            'vue$':'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['release/dll'],{
            root: path.resolve(__dirname,'../'),
            verbose: true,
            dry: false
        }),
        new AssetsPlugin({
            filename:'vendorConfig.json',
            path:path.resolve(__dirname,'../release/dll')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            }
        }),
        new webpack.DllPlugin({
            context: __dirname,
            path:path.join(__dirname,'../release/dll','[name]-manifest.json'),
            name:'[name]_[hash]'
        })
    ]
}

