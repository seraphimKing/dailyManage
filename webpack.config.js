var Webpack = require('webpack');
var proxy = require( 'http-proxy-middleware');
var express = require('express');

/*var server = express();
server.middleware = [
    proxy('/first',
        {
            target: 'http://localhost:3000',
            changeOrigin: true,
            host: '0.0.0.0',
            port: '8080',
            pathRewrite:
            {
                 '^/first': '/first'
            }
        }),
];*/
/*const apiProxy = proxy('/first', {
    target: 'http://localhost:3000',
    changeOrigin: true,
    ws: true
});*/
/*server.use('/first',server.middleware);*/

/*const apiProxy = proxy('/first', {
    target: 'http://www.example.org',
    changeOrigin: true,
    ws: true
});*/
/*browserSync({
    server: {
        baseDir: 'src',
        middleware: [
            apiProxy
        ]
    }
})*/
module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    /*devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        ingorePath: false,
        proxy: {
            '/first/team': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true
            },
        }
    },*/
    module:{
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            },
            {
                loader: 'url-loader?limit=50000',//webpack打包字体大小限制。会对文件有所影响*/
                test: /\.(eot|svg|ttf|woff|otf)/,
                loader: 'url-loader'
             },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }

}