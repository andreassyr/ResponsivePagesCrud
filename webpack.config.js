var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules:
                [
                    {
                        test: /\.css$/,
                        use: [
                            {loader: "style-loader"},
                            {loader: "css-loader"}
                        ]
                    },
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]?[hash]'
                        }
                    },
                    {
                        test: /\.(svg|eot|ttf|woff|woff2)$/,
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]?[hash]'
                        }
                    }
                ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        noInfo: true,
        proxy: {
            "/api/**": {
                target: "http://pagesmanagement.azurewebsites.net",
                changeOrigin: true
            }
        }
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
}