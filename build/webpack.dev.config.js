/**
 * Created by Administrator on 2017/3/21.
 */
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');
// 引入基本配置
let config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'app/index.html',
    template: path.resolve(__dirname, '../app/index.html'),
    inject: true
  })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
let devClient = 'webpack-hot-middleware/client';
Object.keys(config.entry).forEach(function (name) {
  let extras = [devClient];
  config.entry[name] = extras.concat(config.entry[name]);
});

module.exports = config;