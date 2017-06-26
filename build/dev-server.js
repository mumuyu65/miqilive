// 引入检查版本js模块
require('./check-versions')()
// 引入配置文件信息模块
var config = require('../config')
// 判断开发环境
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
// 可以指定打开指定的url使用指定的浏览器或者应用，详情可以去看一下github https://github.com/sindresorhus/opn
var opn = require('opn')
// 引入nodejs的path模块，进行一些路径的操作，详情可以查看node官方的api
var path = require('path')
// 引入nodejs的一个框架express,可以帮助我们快速搭建一个node服务 github https://github.com/expressjs/express
var express = require('express')
// 引入node为webpack提供的一个模块服务 github https://github.com/webpack/webpack
var webpack = require('webpack')
// 一个可以设置帮助我们进行服务器转发代理的中间件 https://github.com/chimurai/http-proxy-middleware
var proxyMiddleware = require('http-proxy-middleware')
// 根据当前启动环境选择加载相应的配置文件，webpack.prod.conf与webpack.dev.conf文件的说明后面也有
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// 端口号的设置
var port = process.env.PORT || config.dev.port
// 设置自动打开浏览器的操作，如果没设置，默认为false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// 获取需要代理的服务api
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable
// 启动一个express服务
var app = express()
// 加载webpack配置
var compiler = webpack(webpackConfig)
// webpack的开发中间件，专门为webpack提供的一个简单的中间件，可以让文件都加载内存中，不去读写硬盘，并且当文件被改动的时候，不会刷新页面就会部署成功
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

// 一个为webpack提供的热部署中间件。https://github.com/glenjamin/webpack-hot-middleware
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// 当html被改变的时候，让html被强制部署，使用这个中间件html-webpack-plugin，
//  https://github.com/ampedandwired/html-webpack-plugin
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// 遍历代理的配置信息,并且使用中间件加载进去
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// 当访问找不到的页面的时候，该中间件指定了一个默认的页面返回
// https://github.com/bripkens/connect-history-api-fallback
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 使用中间件
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// 热部署
app.use(hotMiddleware)

// serve pure static assets
// 根据配置信息拼接一个目录路径，然后将该路径下的文件交给express的静态目录管理
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

// 导出的对象
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
