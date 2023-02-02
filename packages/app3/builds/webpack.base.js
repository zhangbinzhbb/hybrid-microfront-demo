const path = require('path')
const chalk = require('chalk')
const { ModuleFederationPlugin } = require('webpack').container
const { DefinePlugin } = require('webpack')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { srcPath, resolve, assetsPath, rootPath } = require('./utils')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const env = require('./env')
module.exports = {
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': rootPath('src'),
      crypto: false,
      stream: false,
      assert: false,
      http: false,
      https: false,
      util: false,
      path: false,
      vm: false,
      console: false,
      tty: false,
      fs: false,
      os: false,
      process: 'process/browser'
    }
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 20000,
  //     minRemainingSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 30,
  //     maxInitialRequests: 30,
  //     enforceSizeThreshold: 50000,
  //     cacheGroups: {
  //       vendors: {
  //         name: `chunk-vendors`,
  //         maxSize: 100000,
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         chunks: 'initial',
  //         reuseExistingChunk: true
  //       },
  //       default: false,
  //       defaultVendors: false
  //     }
  //   }
  // },

  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': env[process.env.LOWCODE_ENV]
    }),
    new webpack.ProvidePlugin({ process: 'process' }),
    // vue插件
    new VueLoaderPlugin(),
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
    }),
    // 模块联邦配置
    new ModuleFederationPlugin({
      name: 'other',
      filename: 'remoteEntry.js',
      remotes: {
        app1: 'app1@http://localhost:3000/remoteEntry.js'
      },
      shared: ['Vue']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        include: [srcPath('/components/superWWJ/')],
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 * 1024
          }
        },
        generator: {
          filename: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        exclude: [srcPath('/icons'), srcPath('/components/superWWJ/')],
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        },
        generator: {
          filename: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        },
        generator: {
          filename: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        },
        generator: {
          filename: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // set svg-sprite-loader
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [srcPath('/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.js$/,
        include: [rootPath('src'), rootPath('entry')],
        use: {
          loader: 'babel-loader?cacheDirectory'
        }
      },
      {
        test: /\.vue$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}
