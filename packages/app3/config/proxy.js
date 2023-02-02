// const API_DEV = 'http://192.168.20.34:8090/' // 线上测试接口
// const API_DEV = 'http://192.168.0.160:8090/' // 线上测试接口
const API_DEV = 'http://192.168.20.217:7402/' // 本地测试接口-梁林海
// const API_DEV = 'https://sdbop.leyaoyao.com/' // 线上测试接口
// const API_DEV = 'https://flya.kedlink.com/' // 线上接口
// const API_DEV = 'http://192.168.10.47:8092/' // 杰毅
// const API_DEV = 'https://eip.leyaoyao.com/' // 线上测试接口
// const API_DEV = 'http://192.168.0.161:8092/' // 小场地

module.exports = {
  proxy: {
    '/admin': {
      target: API_DEV,
      changeOrigin: true,
      pathRewrite: { '^/admin': '/admin' }
    }
  }
}
