import request from '@/utils/request'

// 通过tickey获取用户token
export function doLoginByTicket(data) {
  return request({
    url: '/sso/doLoginByTicket',
    method: 'get',
    params: data
  })
}

// 获取单点登录地址
export function getLoginUrl(data) {
  return request({
    url: '/sso/getLoginUrl',
    method: 'get',
    data
  })
}

// 退出登录
export function ssoLogout(data) {
  return request({
    url: '/api/uses/logout',
    method: 'post',
    data: data
  })
}
