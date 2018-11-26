const options = require('./options')
const config = require('../webpack.config')
const webpack = require('webpack')
const rl = require('./rl')
const env = require('./env')
const packageList = require('./ps')
const webpackDevServer = require('webpack-dev-server')
const { packages, pages } = require('./fs.js')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
var args = process.argv
var isDev = args.includes('development')

const configEnv = {}
const configGlobal = {}
for (key in config.default.global) {
  configGlobal[key] = JSON.stringify(config.default.global[key])
}
for (key in config.default.env) {
  configEnv[key] = JSON.stringify(config.default.env[key])
}

function resolve (e) {
  return path.resolve(config.dir, e)
}

env().then((env) => {
  rl(packages).then(function (md) {
    resetOptions(md, env)
    startWebpack()
  })
})

function startWebpack () {

  if (isDev) {
    webpackDevServer.addDevServerEntrypoints(options, options.devServer)
    options.mode = 'development'
  } else {
    options.mode = 'production'
  }

  const compiler = webpack(options)
  
  if (isDev) {
    var server = new webpackDevServer(compiler, options.devServer)
    server.listen(options.devServer.port, options.devServer.host)
  } else {
    compiler.run()
  }
}

function resetOptions (md, env) {
  var pl = packageList(md)
  options.entry = pl
  options.externals.pages = JSON.stringify(pages)
  options.externals.components = 'window.__components'
  options.externals.stores = 'window.__stores'
  options.externals.routes = 'window.__routes'
  options.plugins.push(
    new CopyWebpackPlugin([
      { 
        from: resolve('static'), 
        to: resolve(`dist/static`)
      },
      { 
        from: resolve('index.html'), 
        to: resolve(`dist`)
      }
    ])
  )
  options.plugins.push(
    new webpack.DefinePlugin({
      'Global': configGlobal,
      'ENV': configEnv[env]
    })
  )
  if (isDev) {
    options.plugins.push(
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`应用已启动，请访问：http://${options.devServer.host}:${options.devServer.port}`]
        }
      })
    )
  }
}