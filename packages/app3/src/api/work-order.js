import request from '@/utils/request'

export function getWorkList(data) {
  return request({
    url: '/api/tc-template/list',
    method: 'post',
    data
  })
}

export function getWorkProcessSave(data) {
  return request({
    url: '/api/tc-ticket/save',
    method: 'post',
    data
  })
}

// 工单模板-表单绑定流程
export function saveWorkOrder(data) {
  return request({
    url: '/api/tc-template/bind',
    method: 'post',
    data
  })
}

// 删除工单模板
export function deleteWorkOrder(data) {
  return request({
    url: '/api/tc-template/del',
    method: 'post',
    data
  })
}

// 我的发起办件
export function getMyTicket(data) {
  return request({
    url: '/api/tc-ticket/myTicket',
    method: 'post',
    data
  })
}

// 查询用户工单待办列表
export function getPend(data) {
  return request({
    url: '/api/tc-ticket/pend/page',
    method: 'post',
    data
  })
}

// 处理工单任务
export function getDealTask(data) {
  return request({
    url: '/api/tc-ticket/dealTask',
    method: 'post',
    data
  })
}

// 获取发布版本列表
export function getVersionList() {
  return request({
    url: '/api/deploy-version/list',
    method: 'post'
  })
}

// 获取部门列表
export function getDepartmentList() {
  return request({
    url: '/api/dept/list',
    method: 'post'
  })
}

// 添加发布版本
export function addVersion(data) {
  return request({
    url: '/api/deploy-version/add',
    method: 'post',
    data
  })
}

// 添加部门
export function addDept(data) {
  return request({
    url: '/api/dept/add',
    method: 'post',
    data
  })
}

// 获取数据库连接信息列表
export function getDictList() {
  return request({
    url: '/api/tc-db-dict/list',
    method: 'post'
  })
}

// 添加数据库连接信息
export function addDict(data) {
  return request({
    url: '/api/tc-db-dict/add',
    method: 'post',
    data
  })
}

// 查询我的已办列表
export function getOverList(data) {
  return request({
    url: '/api/tc-ticket/over/page',
    method: 'post',
    data
  })
}

// 查询脚本执行列表
export function getScriptList(data) {
  return request({
    url: '/api/tc-scheduling-job/query/page',
    method: 'post',
    data
  })
}

// 指标模版列表
export function getIndicatorList(data) {
  return request({
    url: '/api/indicator-template/list',
    method: 'post',
    data
  })
}

// 添加指标模版
export function addIndicator(data) {
  return request({
    url: '/api/indicator-template/add',
    method: 'post',
    data
  })
}

// 查询指标信息列表
export function getQueryIndicator(data) {
  return request({
    url: '/api/indicator/queryIndicator',
    method: 'post',
    data
  })
}

// 添加指标信息
export function addIndicatorI(data) {
  return request({
    url: '/api/indicator/add',
    method: 'post',
    data
  })
}

// 查询巡检指标结果列表
export function getQueryIndicatorResult(data) {
  return request({
    url: '/api/indicator-result/queryIndicatorResult',
    method: 'post',
    data
  })
}

// 查询表单设计器数据
export function getFormDesignList(data) {
  return request({
    url: '/api/form-design/getFormDesignList',
    method: 'post',
    data
  })
}

// 申请单#工单发起接口
export function applySave(data) {
  return request({
    url: '/api/tc-ticket/applySave',
    method: 'post',
    data
  })
}

// 获取ticket详情
export function getTicketDetails(data) {
  return request({
    url: '/api/tc-ticket/details',
    method: 'post',
    data
  })
}

// 保存ticket
export function submitTicket(data) {
  return request({
    url: '/api/tc-ticket/submit',
    method: 'post',
    data
  })
}
