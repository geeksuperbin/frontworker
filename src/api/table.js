import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/todo',
    method: 'get',
    params
  })
}


export function getList2(params) {
  return request({
    url: 'todo',
    method: 'get',
    params
  })
}


// 添加一条任务
export function addTaskIndo(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/todo',
    method: 'post',
    data
  })
}

