/**
 * Created by Administrator on 2017/3/21.
 */
// 引入必要的模块
let express = require('express');
let webpack = require('webpack');
let config = require('./webpack.dev.config');

// 创建一个express实例
let app = express();

// 调用webpack并把配置传递过去
let compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件
let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

// 使用 webpack-hot-middleware 中间件
let hotMiddleware = require('webpack-hot-middleware')(compiler);

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // 发布事件
    hotMiddleware.publish({action: 'reload'});
    cb();
  })
});

// 注册中间件
app.use(devMiddleware);

// 注册中间件
app.use(hotMiddleware);

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8888');
});