<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="编号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Todo 任务">
        <template slot-scope="scope">
          {{ scope.row.list_name }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="分钟" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.spend_time }}
        </template>
      </el-table-column>
      <el-table-column label="开始" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.start_time }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="结束时间" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column> -->
      
      
      <el-table-column align="center" prop="created_at" label="操作" width="500">
        <template  slot-scope="scope"> 
          <el-button size="mini"  @click="showStop(scope.row.id)">挂起</el-button>
          <el-button size="mini"  @click="showContinue(scope.row.id)">继续</el-button>
          <el-button size="mini" @click="makeDone(scope.row.id)">Done</el-button>
          <el-button size="mini" @click="makeStart(scope.row.id)">Start</el-button>
          <el-button size="mini" @click="makeEdit(scope.row.id)">修改</el-button>
          <el-button size="mini" @click="makeDelete(scope.row.id)">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        // 1 是未开始、2表示进行中 3 表示暂停 4 表示结束
        'test': '未开始',
        2: '进行中',
        3: '暂停',
        4: ''
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null, // 表单数据对象
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => { // 后端请求数据
        this.list = response.data.items // 写入数据
        this.listLoading = false
      })
    },
    showStop(res){
      // alert(res);
      // 弹出模态框，输入任务挂起原因
      this.$prompt('请输入【'+ res +'】任务挂起原因', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '任务挂起原因: ' + value
          });

          // 服务器请求

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    },
    makeStart(){
      // 开始任务
      this.$message({
            type: 'success',
            message: '开始任务'
      });   
    },
    makeDone(){
      // 完成任务
      this.$message({
            type: 'success',
            message: '完成任务'
      }); 
    },
    showContinue(res){
        // 继续任务
        this.$message({
            type: 'success',
            message: res + '任务继续'
      }); 
    },
    makeDelete(){
      // 删除任务
    },
    makeEdit(){
      // 修改任务名称
      this.$prompt('修改任务名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '任务挂起原因: ' + value
          });

          // 服务器请求

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    }
  }
}
</script>
