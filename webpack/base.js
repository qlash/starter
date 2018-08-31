const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: {
        main: '@/js', 
        // polyfill: '@/polyfill'
    },
    output: {
        path: path.resolve( __dirname + '/../dist/' ),
    },
    plugins: [
        new CleanWebpackPlugin([__dirname + '/../dist'], { 
            root: __dirname + '/../',
            verbose: true
        }),
        // new CopyWebpackPlugin(['src/assets/static']),
        // new ManifestPlugin({
        //     fileName: 'filenames.json',
        //     filter: r => new RegExp('.js|.css').test(r.path)
        // }),
        new HtmlWebpackPlugin({
            template: 'src/assets/layout.html'
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: 2000,
                    name: 'assets/[hash:8].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 2000,
                    name: 'images/[name]_[hash:8].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/[hash:8].[ext]",
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue'],
        alias: {
            '@': __dirname + '/../src',
            '@assets': '@/assets',
            '@components': '@/js/components',
            '@helpers': '@/js/helpers',
            '@mixins': '@/js/mixins',
            '@plugins': '@/js/plugins',
            '@scss': '@/scss',
        }
    },
}