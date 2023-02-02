import request from '@/utils/request';
// 进入报表编辑页面请求接口
export function reportIndex(data) {
  return request({
    url: '/api/report/index',
    method: 'get',
    params: data
  })
}
// 打印模板保存
export function reportSave(data) {
  return request({
    url: '/api/report/save',
    method: 'post',
    data
  })
}
// 打印模板预览
export function reportPreview(data) {
  return request({
    url: '/api/report/preview',
    method: 'post',
    data,
    responseType: 'blob'
  })
}
// 打印模板初始化
export function reportInit(data) {
  return request({
    url: '/api/report/init',
    method: 'get',
    params: data
  })
}
// 打印模板导入
export function reportImport(data) {
  return request({
    url: '/api/report/import',
    method: 'post',
    data
  })
}

// 打印模板上传背景
export function reportUpload(data) {
  return request({
    url: '/api/upload',
    method: 'post',
    data
  })
}

