var webpack = require('webpack');
//var CopyWebpackPlugin=require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin= require('open-browser-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {// 入口文件，单入口 app.js 文件
        //app: './src/js/tt.js'
        all: './src/area/All.js'
    },
    output: {
        path:__dirname + '/dist/',
        filename: "[name].js"
    },
    plugins: [
        //自动生成HTML
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html'
        }),
        // //自动复制HTML
        // new CopyWebpackPlugin({
        //     from: './index.html',
        //     to: './index.html'
        // }),
        //自动打开浏览器
        new OpenBrowserPlugin({
            url:'http://localhost:9000'
        }),
        //压缩打包的文件、代码混淆
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //第三方库自动注入
        new webpack.ProvidePlugin({
            'React':'react',
            'ReactDOM':'react-dom',
            '$':'jquery'
        }),
        //一个运行时的报错，详见https://github.com/facebook/react/issues/6479
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
        // 分离css
        //new ExtractTextPlugin('[name].bundle.css', {
          //  allChunks: true
        //}),
        // 抽取公共资源
        // new webpack.optimize.CommonsChunkPlugin({
        //     // 与 entry 中的 jquery 对应
        //     name: 'jquery',
        //     // 输出的公共资源名称
        //     filename: 'common.bundle.js',
        //     // 对所有entry实行这个规则
        //     minChunks: Infinity
        // }),
    ],
    //处理的代码类型
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //使用的eslint配置文件
    eslint: {
        configFile: './.eslintrc'
    },
    module:{
        //预编译器eslint代码检查
        preLoaders: [
            {
                test:/(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
        loaders:[
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(png|jpg)$/, loader: "url-loader?limit=8192"},

            //babel
            {
                test:/(\.js$|\.jsx$)/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015'],// es2015 处理 ES6 语法，react 处理 jsx 语法
                    plugins: [["antd",{ "style": "css" }]]
                }
            }
        ]
    }
}