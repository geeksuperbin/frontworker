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


// 开始任务
export function startToDoTask(uuid){
  return request({
    url:'/todo/start/'+uuid,
    method: 'get'
  })
}

// 删除任务
export function deleteToDoTask(uuid){
  return request({
    url:'/todo/'+uuid,
    method: 'delete'
  })
}


// 修改任务名称
export function editToDoTask(data,uuid){
  return request({
    url:'/todo/'+uuid,
    method: 'put',
    data
  })
}

// 完成任务Done
export function doneToDoTask(uuid){
  return request({
    url:'/todo/done/'+uuid,
    method: 'get'
  })
}

// 挂起任务
export function breakToDoTask(data,uuid){
  return request({
    url:'/todo/break/'+uuid,
    method: 'put',
    data
  })
}

// 继续任务
export function continueToDoTask(uuid){
  return request({
    url:'/todo/continue/'+uuid,
    method: 'get'
  })
}



