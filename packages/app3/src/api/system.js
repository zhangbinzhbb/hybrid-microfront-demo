import myAxios from '@/utils/proxyRequest'

import { praseStrEmpty } from '@/utils/system'
const request = myAxios
// 查询用户列表
export function listUser(data) {
  return request({
    url: '/api/system/user/list',
    method: 'post',
    data: data
  })
}

// 查询用户详细
export function getUser(userId) {
  return request({
    url: '/api/system/user/' + praseStrEmpty(userId),
    method: 'get'
  })
}

// 新增用户
export function addUser(data) {
  return request({
    url: '/api/system/user/add',
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUser(data) {
  return request({
    url: '/api/system/user/edit',
    method: 'post',
    data: data
  })
}

// 删除用户
export function delUser(userId) {
  return request({
    url: '/api/system/user/delete/' + userId,
    method: 'post',
    data: {}
  })
}

// 用户密码重置
export function resetUserPwd(userId, newPwd) {
  const data = {
    userId,
    newPwd
  }
  return request({
    url: '/api/system/user/editPwd',
    method: 'post',
    data: data
  })
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status
  }
  return request({
    url: '/system/user/changeStatus',
    method: 'put',
    data: data
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/system/user/profile',
    method: 'put',
    data: data
  })
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    params: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return request({
    url: '/system/user/profile/avatar',
    method: 'post',
    data: data
  })
}
// 获取系统用户的角色列表
export function userRoleList(data) {
  return request({
    url: '/api/system/user/roleList',
    method: 'post',
    data: data
  })
}
// 获取系统用户的角色列表
export function userSaveRole(data) {
  return request({
    url: '/api/system/user/saveRole',
    method: 'post',
    data: data
  })
}

// ===================================================================================

// 查询菜单下拉树结构
export function treeselectMenu(data) {
  return request({
    url: '/api/system/resource/tree',
    method: 'post',
    data: data
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: '/system/menu/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/api/system/resource/add',
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: '/api/system/resource/edit',
    method: 'post',
    data: data
  })
}

// 删除菜单
export function delMenu(menuId) {
  return request({
    url: '/api/system/resource/delete/' + menuId,
    method: 'post',
    data: {}
  })
}

// =====================================================================================

// 查询角色列表
export function listRole(data) {
  return request({
    url: '/api/system/role/list',
    method: 'post',
    data: data
  })
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/api/system/role/add',
    method: 'post',
    data: data
  })
}

// 修改角色
export function updateRole(data) {
  return request({
    url: '/api/system/role/edit',
    method: 'post',
    data: data
  })
}

// 保存角色数据权限
export function dataScope(data) {
  return request({
    url: '/api/system/role/saveDataScope',
    method: 'post',
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/system/role/changeStatus',
    method: 'put',
    data: data
  })
}

// 删除角色
export function delRole(roleId) {
  return request({
    url: '/api/system/role/delete/' + roleId,
    method: 'post'
  })
}

// 获取角色部门树(标识部门是否已分配)
export function roleDeptTree(data) {
  return request({
    url: '/api/system/role/deptTree?roleId=' + data.roleId,
    method: 'post',
    data: data
  })
}

// 获取角色菜单树(标识资源是否已分配)
export function roleResourceTree(data) {
  return request({
    url: '/api/system/role/resourceTree?roleId=' + data.roleId,
    method: 'post',
    data: data
  })
}

// =====================================================================================

// 查询部门下拉树结构
export function treeselectDept(data) {
  return request({
    url: '/api/system/dept/tree',
    method: 'post',
    data: data
  })
}

// 新增部门
export function addDept(data) {
  return request({
    url: '/api/system/dept/add',
    method: 'post',
    data: data
  })
}

// 修改部门
export function updateDept(data) {
  return request({
    url: '/api/system/dept/edit',
    method: 'post',
    data: data
  })
}

// 删除部门
export function delDept(id) {
  return request({
    url: '/api/system/dept/delete/' + id,
    method: 'post'
  })
}

// ===============================================================================

// 查询岗位列表
export function listPost(query) {
  return request({
    url: '/system/post/list',
    method: 'get',
    params: query
  })
}

// 查询岗位详细
export function getPost(postId) {
  return request({
    url: '/system/post/' + postId,
    method: 'get'
  })
}

// 新增岗位
export function addPost(data) {
  return request({
    url: '/system/post',
    method: 'post',
    data: data
  })
}

// 修改岗位
export function updatePost(data) {
  return request({
    url: '/system/post',
    method: 'post',
    data: data
  })
}

// 删除岗位
export function delPost(postId) {
  return request({
    url: '/system/post/' + postId,
    method: 'post'
  })
}

// ==================================导入模板配置=============================================
// 删除导入模版
export function delOnlImport(data) {
  return request({
    url: '/api/onl_import/delete',
    method: 'post',
    data
  })
}

// 编辑保存导入模版
export function editOnlImport(data) {
  return request({
    url: '/api/onl_import/edit',
    method: 'post',
    data
  })
}

// 导入模版详情信息
export function getTemplateDetails(data) {
  return request({
    url: '/api/onl_import/getTemplateDetails',
    method: 'post',
    data
  })
}

// 导入模版详情信息
export function queryTemplate(data) {
  return request({
    url: '/api/onl_import/queryTemplate',
    method: 'post',
    data
  })
}
// 导入
export function queryImport(data) {
  return request({
    url: '/api/onl_import/import',
    method: 'post',
    data
  })
}
