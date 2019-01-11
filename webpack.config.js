const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        env: 1
      },
      uat: {
        env: 2
      }
    },
    global: {
      FrameWork: {
        Github: 'https://github.com/Taoja/v-turbo-single',
        Issues: 'https://github.com/Taoja/v-turbo-single/issues',
        Document: 'https://github.com/Taoja/v-turbo-single'
      },
      Bridge: {
        Github: 'https://github.com/Taoja/v-turbo-bridge',
        Issues: 'https://github.com/Taoja/v-turbo-bridge/issues',
        Document: 'https://github.com/Taoja/v-turbo-bridge'
      },
      Turbo: {
        Homepage: 'https://github.com/Taoja/v-turbo-single',
        Desk: 'https://github.com/Taoja/v-turbo-single/issues',
        Document: 'https://github.com/Taoja/v-turbo-single'
      }
    },
    plugins: [
      new VueLoaderPlugin(), //vue加载器
    ],
    loader: [
      {
        test: /\.(jpg|png|svg|gif|jpeg|woff2|woff|eot|ttf|tof|svg)$/,
        use: [
          {
            loader: 'url-loader', //url解析器
            options: {
              limit: 10, // 是把小于500000B的文件打成Base64的格式，写入JS。
              name: 'static/assets/[name]-[hash].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/, //css解析器
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('autoprefixer')({
                  browsers: ['iOS >= 7', 'Android >= 4.1']
              })
            ]
          }
        }]
      },
      {
        test: /\.stylus$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        },{
          loader: "stylus-loader"
        }]
      },
      {
        test: /\.scss$/,//sass解析器
        loader: ['sass-loader']
      },
      {
        test: /\.vue$/, //vue解析器
        loader: ['vue-loader']
      },
      {
        test: /\.js$/, //babel
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  dev: {
    port: 8081,
    host: '0.0.0.0',
    devtool: 'source-map',
    open: '#/hello/turbo/index'
  },
  build: {
    devtool: false
  }
}

module.exports = config