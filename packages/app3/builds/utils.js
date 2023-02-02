const path = require('path')
const srcPath = (_p) => path.join(__dirname, '../src', _p)
const resolve = (_p) => path.join(__dirname, _p)
const rootPath = (_p) => path.join(__dirname, '../', _p)
const assetsPath = (_p) => path.posix.join('./lyyStatic2', _p)
const distPath = path.join(__dirname, '../dist')
module.exports = {
  srcPath,
  resolve,
  rootPath,
  distPath,
  assetsPath
}
