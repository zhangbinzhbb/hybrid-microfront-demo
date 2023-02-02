import request from '@/utils/request';

// 处理工单任务
export function dealTask(data) {
  return request({
    url: '/api/tc-ticket/dealTask',
    method: 'post',
    data,
  });
}
