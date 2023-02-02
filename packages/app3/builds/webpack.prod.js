/*
 * @Description: 乐摇摇组件库
 * @Version: 1.0
 * @Autor: 陈伟健
 * @Date: 2021-09-13 17:06:56
 * @LastEditors: 陈伟健
 * @LastEditTime: 2021-09-13 17:06:56
 */
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { distPath, rootPath } = require('./utils')
const webpackCommon = require('./webpack.base')
const { getMulitHtmlPlugins } = require('./utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = require('./env')
const TerserPlugin = require('terser-webpack-plugin')
const timestamp = new Date().getTime()
console.log('💗💗时间戳：', timestamp)
console.log('💗💗模式:', process.env.LOWCODE_ENV)
// const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const config = merge(webpackCommon, {
  mode: 'production',
  entry: path.join(__dirname, '../', 'src/main.js'),
  output: {
    filename: '[name].[contenthash:8].js',
    path: distPath
  },

  cache: {
    type: 'filesystem'
  },

  optimization: {
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.postcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'postcss-loader',
          // {
          //     loader: "thread-loader",
          //     options: {
          //         workerParallelJobs: 2,
          //     },
          // },
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass')
              //   sassOptions: {
              //     fiber: require('fibers')
              //   }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'postcss-loader',
          // {
          //     loader: "thread-loader",
          //     options: {
          //         workerParallelJobs: 2,
          //     },
          // },
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass')
              //   sassOptions: {
              //     fiber: require('fibers')
              //   }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: rootPath('index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': env[process.env.LOWCODE_ENV]
    }),
    // 抽离css文件
    new MiniCssExtractPlugin({
      filename: `lyyStatic2/css/[name].[contenthash:8].css`,
      chunkFilename: `lyyStatic2/css/[id].[contenthash:8].css`
    })
  ]
})
module.exports = config
