import myAxios from '@/utils/proxyRequest'

const request = myAxios

// 获取建模列表
export function getFormModelList(data) {
  return request({
    url: '/api/form-model/queryPage',
    method: 'post',
    data
  })
}

// 获取所有表
export function getModelTables(data) {
  return request({
    url: '/api/form-model/getModelTables',
    method: 'post',
    data
  })
}

// 获取注册的自定义组件
export function getComponentInstalled(data) {
  return request({
    url: '/api/component/installed',
    method: 'post',
    data
  })
}
// 渲染自定义组件
export function componentRender(data) {
  return request({
    url: '/api/component/render',
    method: 'post',
    data
  })
}

// 自定义组件提交
export function componentSubmit(data) {
  return request({
    url: '/api/component/submit',
    method: 'post',
    data
  })
}

// 注册组件
export function componentRegister(data) {
  return request({
    url: '/api/component/register',
    method: 'post',
    data
  })
}

// 获取表字段属性
export function getModelTableFields(data) {
  return request({
    url: '/api/form-model/getModelTableFields',
    method: 'post',
    data
  })
}

// 创建建模
export function addAll(data) {
  return request({
    url: '/api/form-model/addAll',
    method: 'post',
    data
  })
}

// 获取建模详情
export function getDetails(data) {
  return request({
    url: '/api/form-model/details',
    method: 'post',
    data
  })
}

// 编辑建模
export function editAll(data) {
  return request({
    url: '/api/form-model/editAll',
    method: 'post',
    data
  })
}

// 删除建模数据, 一条或者多条 ids:[]
export function deleteModel(data) {
  return request({
    url: '/api/form-model/batchDelete',
    method: 'post',
    data
  })
}

// 查询设计表单
export function getDesignList(data) {
  return request({
    url: '/api/form-design/queryPage',
    method: 'post',
    data
  })
}

// 设计表单新增
export function addForm(data) {
  return request({
    url: '/api/form-design/add',
    method: 'post',
    data
  })
}
// 获取设计表单#ID 列表
export function getFormDesignById(data) {
  return request({
    url: '/api/form-design/getFormDesignById',
    method: 'post',
    data
  })
}
// 获取设计表单#ID 列表
export function getFormDesignByCode(data) {
  return request({
    url: '/api/form-design/getFormDesignByCode',
    method: 'post',
    data
  })
}

// 生成表单设计器数据
export function generateFormDesign(data) {
  return request({
    url: '/api/form-design/generateFormDesign',
    method: 'post',
    data
  })
}

// 嵌套表单数据
export function getAppendFormData(data, route) {
  return request({
    url: `/api/form-model/queryFormModelDataDetails/${route}`,
    method: 'post',
    data
  })
}
// =========================Online报表配置 start=====================

// 获取配置报表
export function queryReport(data) {
  return request({
    url: '/api/onl-report/queryReport',
    method: 'post',
    data
  })
}

// 添加报表
export function addReport(data) {
  return request({
    url: '/api/onl-report/add',
    method: 'post',
    data
  })
}

// 报表编辑保存
export function editReport(data) {
  return request({
    url: '/api/onl-report/edit',
    method: 'post',
    data
  })
}

// 报表编辑（dto）
export function editDtoReport(data) {
  return request({
    url: '/api/onl-report/head/edit',
    method: 'post',
    data
  })
}

// 获取微服务列表
export function getServiceList() {
  return request({
    url: '/api/microservice/findAll',
    method: 'get'
  })
}

// 获取微服务API列表
export function getServiceApiList(params) {
  return request({
    url: '/api/microservice/func/findAll',
    method: 'get',
    params
  })
}

// 获取接口分组方法树
export function getApiGroupAndMethodTree(params) {
  return request({
    url: '/api/apiGroup/getApiGroupAndMethodTree',
    method: 'get',
    params
  })
}

// 获取接口分组树
export function getApiGroupTree(params) {
  return request({
    url: '/api/apiGroup/getApiGroupTree',
    method: 'get',
    params
  })
}

// 获取分组的微服务方法详情
export function getApiById(params) {
  return request({
    url: 'api/microservice/getApiById',
    method: 'get',
    params
  })
}
// 删除微服务方法详情
export function deleteApiById(params) {
  return request({
    url: 'api/microservice/delete',
    method: 'get',
    params
  })
}

// 保存微服务方法详情
export function microserviceSave(data) {
  return request({
    url: '/api/microservice/save',
    method: 'post',
    data
  })
}

// 新增微服务方法详情
export function microserviceAdd(data) {
  return request({
    url: '/api/microservice/base/save',
    method: 'post',
    data
  })
}

// 删除接口分组
export function deleteGroup(data) {
  return request({
    url: '/api/apiGroup/delete',
    method: 'post',
    data
  })
}
// 新建或保存接口分组
export function saveGroup(data) {
  return request({
    url: '/api/apiGroup/save',
    method: 'post',
    data
  })
}

// 导入接口分组
export function importApiGroup(data) {
  return request({
    url: '/api/apiGroup/import',
    method: 'post',
    data
  })
}

// 导入接口
export function importApi(data) {
  return request({
    url: 'api/apiGroup/import/apis',
    method: 'post',
    data
  })
}

// 获取建模详情#byCode
export function getDetailsByCode(data) {
  return request({
    url: '/api/form-model/getDetailsByCode',
    method: 'post',
    data
  })
}

// 获取报表详情
export function detailsReport(data) {
  return request({
    url: '/api/onl-report/details',
    method: 'post',
    data: data
  })
}

// 获取报表配置
export function getReportConfig(data) {
  return request({
    url: '/api/onl-report/config',
    method: 'post',
    data
  })
}

// 获取主子报表配置
export function getRelateReportConfig(data) {
  return request({
    url: '/api/onl-report/master_slave/config',
    method: 'post',
    data
  })
}

// 查询报表数据
export function queryReportData(data) {
  return request({
    url: '/api/onl-report/queryReportData',
    method: 'post',
    data
  })
}

// 解析sql
export function parseSqlReport(data) {
  return request({
    url: '/api/onl-report/parseSql',
    method: 'post',
    data
  })
}

// 导入json
export function importJSON(data) {
  return request({
    url: '/api/onl-report/import/config',
    method: 'post',
    data
  })
}

// 导入json
export function exportJSON(data) {
  return request({
    url: '/api/onl-report/export/config',
    method: 'post',
    data
  })
}

// 删除报表配置
export function delReport(data) {
  return request({
    url: '/api/onl-report/delete',
    method: 'post',
    data
  })
}
// 获取子报表列表
export function getChildReportList(data) {
  return request({
    url: '/api/onl-report/getChildReportList',
    method: 'post',
    data
  })
}

// =========================Online报表配置 end=====================

// =========================Online组合报表配置 start=====================
// 获取组合报表列表
export function queryGraphReport(data) {
  return request({
    url: '/api/onl_graph_report/queryCombinationPage',
    method: 'post',
    data
  })
}

// 组合报表编辑保存
export function editGraphReport(data) {
  return request({
    url: '/api/onl_graph_report/save',
    method: 'post',
    data
  })
}

// 获取组合报表详情
export function detailsGraphReport(data) {
  return request({
    url: '/api/onl_graph_report/getReportItemDetails',
    method: 'post',
    data: data
  })
}

// 删除组合报表配置
export function delGraphReport(data) {
  return request({
    url: '/api/onl_graph_report/delete',
    method: 'post',
    data
  })
}
// =========================Online组合报表配置 end=====================

// 获取公共下拉列表数据
// params: gender_type / user_list
export function getCommonSelectorCode(value) {
  return request({
    url: '/api/common/selector',
    method: 'post',
    data: {
      value: value
    }
  })
}
