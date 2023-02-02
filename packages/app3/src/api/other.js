import request from '@/utils/request'

export function tagPrintQuery(params) {
  return request({
    url: '/api/tagPrint/query',
    method: 'get',
    params
  })
}

export function getCalculateSalary(data) {
  return request({
    url: '/api/salary/calculate',
    method: 'post',
    data
  })
}

export function getPeriodList(params) {
  return request({
    url: '/api/salary/periodList',
    method: 'get',
    params
  })
}

export function getInputSave(data) {
  return request({
    url: '/api/routing/inputSave',
    method: 'post',
    data
  })
}

export function getInputInfo(data) {
  return request({
    url: '/api/routing/inputInfo',
    method: 'post',
    data
  })
}

export function getInputCollect(data) {
  return request({
    url: '/api/routing/inputCollect',
    method: 'post',
    data
  })
}

export function getInputFinish(data) {
  return request({
    url: '/api/routing/inputFinish',
    method: 'post',
    data
  })
}

export function getInputNextClass(data) {
  return request({
    url: '/api/routing/inputNextClass',
    method: 'post',
    data
  })
}

export function getModify(data) {
  return request({
    url: '/api/uses/pass/modify',
    method: 'post',
    data
  })
}

export function getMfgOrderSearch(params) {
  return request({
    url: '/api/mfgOrder/search',
    method: 'get',
    params
  })
}

export function saveProcdef(data) {
  return request({
    url: '/api/tc-process/save-procdef',
    method: 'post',
    data
  })
}

// axios中的请求超时，设置请求时间
export function getSqlType(data, type) {
  return request({
    url: `/api/sql/${type}`,
    method: 'post',
    timeout: 6000000000000,
    data
  })
}

export function deleteFormDesign(data) {
  return request({
    url: '/api/form-design/delete',
    method: 'post',
    data
  })
}

export function getParseSqlVirtualFields(data) {
  return request({
    url: '/api/form-model/parseSqlVirtualFields',
    method: 'post',
    data
  })
}

export function saveFormModel(data) {
  return request({
    url: '/api/form-model/save',
    method: 'post',
    data
  })
}

export function importTagPrint(data) {
  return request({
    url: '/api/tagPrint/submit',
    method: 'post',
    data,
    responseType: 'blob'
  })
}
