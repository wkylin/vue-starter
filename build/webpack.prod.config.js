/**
 * Created by Administrator on 2017/3/22.
 */
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');
let webpack = require('webpack');
// 引入基本配置
let config = require('./webpack.config');

config.plugins = [
  // 压缩代码
  /*new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    },
    sourceMap:true,
    minimize:true
  }),*/
  new webpack.HotModuleReplacementPlugin(),
  new BabiliPlugin({}, {babel: require("babel-core")}),
  // 提取css为单文件
  new ExtractTextPlugin({
    filename:"../[name].[contenthash].css",
    disable:false,
    allChunks:true
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: path.resolve(__dirname, '../app/index.html'),
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    filename: 'vendors.js'
  })
];

module.exports = config;