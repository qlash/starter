const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
    },
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true,
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ]
});