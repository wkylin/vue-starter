/**
 * Created by Administrator on 2017/3/22.
 */
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let webpack = require('webpack');
// 引入基本配置
let config = require('./webpack.config');

/*config.vue = {
  loaders: {
    css: ExtractTextPlugin.extract("css")
  }
};*/
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  // 压缩代码
/*  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),*/
  new webpack.optimize.OccurrenceOrderPlugin(),
  // 提取css为单文件
  new ExtractTextPlugin("../[name].[contenthash].css"),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: path.resolve(__dirname, '../app/index.html'),
    inject: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    filename: 'vendors.js'
  })
];

module.exports = config;