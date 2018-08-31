const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].js'
    },
    mode: 'production',
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {
                    drop_console: true
                }
            }
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    }
});