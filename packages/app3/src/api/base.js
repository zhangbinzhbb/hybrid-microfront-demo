import request from '@/utils/request'
import { buildQueryString } from '@/utils/sheet-common'

// 打印模版发布
export function getBaseDeploy(uriParam, data) {
  const url = '/api/report/deploy' + buildQueryString(uriParam)
  return request({
    url: url,
    method: 'post',
    data
  })
}

// 获取系统编码
export function getIncreaseNo(data) {
  return request({
    url: '/api/common/increaseno/generate',
    method: 'post',
    data
  })
}
