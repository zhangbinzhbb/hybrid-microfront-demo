import request from '@/utils/request'

export function uploadFile(data) {
  return request({
    url: '/api/upload',
    method: 'post',
    data
  })
}

export function getFileList(data) {
  return request({
    url: '/api/attachment/list',
    method: 'post',
    data
  })
}
