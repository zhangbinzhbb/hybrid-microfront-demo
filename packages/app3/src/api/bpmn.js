import request from '@/utils/request'

export function getProcdefInfoList(data) {
  return request({
    url: '/api/tc-process/getProcdefInfoList',
    method: 'post',
    data
  })
}

export function getRelease(data) {
  return request({
    url: '/api/tc-process/deploy-procdef',
    method: 'post',
    data
  })
}

export function deleteFlow(data) {
  return request({
    url: '/api/tc-process/delProcDef',
    method: 'post',
    data
  })
}
