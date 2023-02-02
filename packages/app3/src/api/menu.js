import request from '@/utils/request';

export function getMenu() {
  return request({
    url: '/api/resources/menus/tree',
    method: 'get',
  });
}
