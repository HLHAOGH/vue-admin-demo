<template>
  <div class="view">
    <span class="el-icon-location el-icon--left">销售列表</span>
    <el-table :data="saleData" border class="salelist">
      <el-table-column prop="id" label="编号" width="100px"></el-table-column>
      <el-table-column prop="sname" label="名称" width="100px"></el-table-column>
      <el-table-column prop="snum" label="销量" width="100px"></el-table-column>
      <el-table-column prop="sprice" label="单价(元)" width="100px"></el-table-column>
      <el-table-column prop="soperation" label="操作" width="100px">
      <template slot-scope="scope">
      <el-button type="danger" size="small" icon="el-icon-delete" style="color:white" @click="handleDelete(scope.$index,saleData)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.view{
  position: absolute;
  top: 80px;
  left: 200px;
  width: 83.5%;
  height: 500px;
}
.el-icon--left{
  float: left;
  margin-left: 20px;
  color: lightgray;
  font-size: 14px;
}
.salelist{
  width:500px;
  margin-left: 150px;
  margin-top: 80px;
}
</style>

<script>
export default {
  data () {
    return {
      saleData: [{
        id: '1011',
        sname: '洗衣粉',
        snum: '22袋',
        sprice: '￥21.8',
      },
      {
        id: '1023',
        sname: '牙膏',
        snum: '35盒',
        sprice: '￥16.8'
      },
      {
        id: '1025',
        sname: '康师傅面',
        snum: '14桶',
        sprice: '￥4.5'
      },
      {
        id: '1010',
        sname: '怡宝矿泉水',
        snum: '40箱',
        sprice: '￥9.0'
      }]
    }
  },
  methods: {
    handleDelete (index, rows) {
      this.$alert("确定删除该项吗？","提示",{confirmButtonText: "确定",type: 'warnning'}).then(() => {this.$message({type: 'success',message: '删除成功'});rows.splice(index, 1)}).catch(() => {this.$message({type: 'info',message: '已取消'})})
    }
  },
}
</script>
