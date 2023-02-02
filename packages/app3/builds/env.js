/**
 * 小场地/信息化单点登录
 * **/
module.exports = {
  development: {
    VUE_APP_BASE_API: "'/lc'"
  },
  production: {
    VUE_APP_BASE_API: "'/lc'"
  },
  production_sso: {
    VUE_APP_BASE_API: "'/sso-server'"
  }
}
