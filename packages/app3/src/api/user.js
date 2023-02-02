import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/uses/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: 'api/uses/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

// 忘记密码
export function forget(data) {
  return request({
    url: '/api/uses/pass/forget',
    method: 'post',
    data
  })
}

// 获取验证码
export function verifyCode(data) {
  return request({
    url: '/api/uses/verifyCode',
    method: 'get',
    data
  })
}

export function getMenuTree() {
  return request({
    url: '/api/resources/menuTree',
    method: 'get'
  })
}
// 切换企业
export function loginClient(data) {
  return request({
    url: '/api/uses/login/client',
    method: 'post',
    data
  })
}

// 获取用户的企业
export function clientList(data) {
  return request({
    url: '/api/system/client/list',
    method: 'post',
    data
  })
}

// 获取用户偏好
export function getUserPreference(params) {
  return request({
    url: '/api/user/preference/getUserPreference',
    method: 'get',
    params
  })
}

// 保存用户偏好
export function saveUserPreference(data) {
  return request({
    url: '/api/user/preference/save',
    method: 'post',
    data
  })
}
