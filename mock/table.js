const Mock = require('mockjs')

const data = Mock.mock({
  'items|2': [{
    id: '@id',
    title: '任务xxxxx',
    'status|1': ['进行中', 'Done', '挂起'],
    author: '@datetime', //table 表 author 字段 mock 数据更改测试
    display_time: '@datetime',
    pageviews: '@datetime',
    spendmin: '@integer(1, 100)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
