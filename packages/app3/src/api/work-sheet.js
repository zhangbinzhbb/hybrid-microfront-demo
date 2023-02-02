import request from '@/utils/request';
import { buildQueryString } from '@/utils/sheet-common';
// 获取表单模板
export function getTemplate(data) {
  return request({
    url: '/api/form/template',
    method: 'get',
    data,
  });
}

// 表单列表数据查询
export function getFormData(data) {
  return request({
    url: '/api/form/data',
    method: 'post',
    data,
  });
}

// 表单列表数据查询
export function getFormObject(data, params) {
  const url = '/api/form/object' + buildQueryString(params);
  return request({
    url: '/api/form/object',
    method: 'post',
    data,
  });
}
