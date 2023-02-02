import request from '@/utils/request'

import store from '@/store'

// export function saveData(data) {
//   const url = '/api/xxx/yyy'
//   return request({
//     url: url,
//     method: 'post',
//     data
//   })
// }

// 获取偏好设置
export function getPreference() {
  if (localStorage.getItem('preference')) {
    return JSON.parse(localStorage.getItem('preference'));
  }
  return store.state.preference;
}

// 保存偏好设置
export function setPreference(preference) {
  localStorage.setItem('preference', JSON.stringify(preference))
}
