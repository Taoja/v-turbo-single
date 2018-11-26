const path = require('path')
function resolve (e) {
  return path.resolve(__dirname, e)
}
const config = {
  dir: __dirname,
  default: {
    output: 'dist',
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': resolve('src'),
        '@s': resolve('src/common/scss'),
        '@j': resolve('src/common/js'),
        '@a': resolve('src/assets'),
        '@c': resolve('src/components'),
      },
    },
    externals: {
      'vue': 'window.Vue',
      'vuex': 'window.Vuex',
      'vue-router': 'window.VueRouter'
    },
    env: {
      sit: {
        mpaas_domainName: 'cn-hangzhou-mdsweb.cloud.alipay.com',
        mpaas_appId_workspaceId: '98F6BCD302124_sit',
      },
      uat: {
        mpaas_domainName: '112.72.12.31:80',
        mpaas_appId_workspaceId: '98F6BCD302124_uat',
      }
    },
    packageID: {
      static: 20180000,
      base: 20180101,
      main: 20180102
    },
    global: {
      host: 'http://cn-hangzhou-mdsweb.cloud.alipay.com'
    }
  },
  dev: {
    port: 8081,
    host: '0.0.0.0',
    devtool: 'eval'
  },
  build: {
    devtool: false
  }
}

module.exports = config