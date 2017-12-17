const path = require('path');
// const resolve = require('path').resolve;
const url = require('url');

// const webpack = require('webpack');

// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '';

module.exports = (options = {}) => ({
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                // {
                //     loader: 'css-loader',
                //     options: {
                //         importLoaders: 1
                //     }
                // },
                'postcss-loader'
            ]
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         'postcss-loader'
            //     ]
            // })
        },
        {
            test: /\.less$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /(\.jsx|\.js)$/,
            use: [
                'babel-loader',
                'eslint-loader'
            ],
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            title: 'DircleFeed',
            template: 'src/index.html'
        })
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8010,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/static/' : publicPath).pathname
        }
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map'
});