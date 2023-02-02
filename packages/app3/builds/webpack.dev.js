const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.base')
const path = require('path')
const { ProvidePlugin } = require('webpack')
const { distPath, rootPath } = require('./utils')
// api管理
const API_DEV = 'https://flya.kedlink.com/' // 线上接口
// const API_DEV = 'http://192.168.20.209:7400/' // 本地测试接口-梁林海

module.exports = merge(webpackCommon, {
  mode: 'development',
  entry: [path.join(__dirname, '../', 'src/main.js')],
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: distPath
  },
  // 热更新，使用模块联邦的时候，不能使用热更新
  // optimization: {
  //   minimize: true,
  //   runtimeChunk: {
  //     name: 'manifest'
  //   }
  //   // minimizer: [new TerserPlugin()]
  // },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      template: rootPath('index.html')
    }),
    new ProvidePlugin({
      process: 'process/browser'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.postcss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      // {
      //   test: /\.(js|vue)$/,
      //   use: ['eslint-loader']
      // },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'thread-loader',
            options: {
              workerParallelJobs: 2
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    compress: true, // gzip
    hot: true, // 热重载
    open: true,
    port: 8010, // 端口号
    headers: { 'Access-Control-Allow-Origin': '*' },
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    proxy: {
      '/lc': {
        target: API_DEV,
        changeOrigin: true,
        pathRewrite: { '^/lc': '/lc' }
      },
      '/sso-server': {
        target: API_DEV,
        changeOrigin: true,
        pathRewrite: { '^/sso-server': '/sso-server' }
      }
    }
  }
})
