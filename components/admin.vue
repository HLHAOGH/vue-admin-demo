<template>
<div class="view">
  <span class="el-icon-location el-icon--left">销员信息</span>
  <el-link href="#/main/admin/dialog"  icon="el-icon-plus" class="add">新增</el-link>
  <el-row style="margin-left:100px">
  <el-col :span="5">
  <el-input v-model="value" placeholder="请输入编号或姓名查找" size="small" class="searchInput" prefix-icon="el-icon-search"></el-input>
  </el-col>
  </el-row>
  <el-table :data="dataTable.filter(data => !value || data.id.toLowerCase().includes(value.toLowerCase()) || data.name.toLowerCase().includes(value.toLowerCase()))"  class="adminTable" max-height="350" stripe>
    <el-table-column prop="id" label="编号" width="100px"></el-table-column>
    <el-table-column prop="name" label="姓名" :fixed="true" width="100px"></el-table-column>
    <el-table-column prop="sex" label="性别" width="100px"></el-table-column>
    <el-table-column prop="birthday" label="出生年月" width="100px"></el-table-column>
    <el-table-column prop="address" label="地址" width="280px"></el-table-column>
    <el-table-column prop="level" label="等级" width="100px"></el-table-column>
    <el-table-column prop="telphone" label="联系电话" width="120px"></el-table-column>
    <el-table-column width="70px">
      <template slot-scope="scope">
        <el-link href="#/main/admin/update" class="update" underline='false'><i class="el-icon-edit"></i>修改</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="description" label="性格" width="100px"></el-table-column>
    <el-table-column prop="other" label="其他" width="100px"></el-table-column>
    <el-table-column prop="date" label="创建日期" width="100px"></el-table-column>
    <el-table-column prop="operation" label="操作" width="100px">
      <template slot-scope="scope">
      <el-button type="danger" size="small" icon="el-icon-delete" style="color:white" @click="handleDelete(scope.$index,dataTable)">删除</el-button>
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
.add{
  display: block;
  text-decoration: none;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #24b8da;
  color: white;
  border: 1px solid #24b8da;
  outline: none;
  border-radius: 3px;
  float: left;
  margin-top: 30px;
  margin-left: -80px;
  font-size: 14px;
}
.add:hover{
  background-color: #24b8da;
  color: white;
  text-decoration: none;
}
.adminTable{
  width:1000px;
  margin-left: 30px;
  margin-top: 40px;
  overflow: auto;
}
.update,.update:hover{
  color: #24b8da;
  text-decoration: none;
}
</style>

<script>
export default {
  data () {
    return {
      value: '',
      dataTable: [{
        id: '1002',
        name: '李浩',
        sex: '男',
        birthday: '1996-08',
        address: '陕西省西安市雁塔区长安南路563号',
        level: '一级销售员',
        telphone: '18729870356',
        description: '坚毅，果敢',
        other: '且行且珍惜',
        date: '2019-05-12'
      },{
        id: '1023',
        name: '王华',
        sex: '男',
        birthday: '1998-02',
        address: '山西省太原市中城区建湖一路432号',
        level: '一级销售员',
        telphone: '15827369257',
        description: '机智，幽默',
        other: '',
        date: '2019-05-16'
      },{
          id: '1005',
          name: '李丹',
          sex: '女',
          birthday: '1993-04',
          address: '甘肃省武威市邺城区锦业路102号',
          level: '二级销售员',
          telphone: '13928367931',
          description: '娇小率真',
          other: '',
          date: '2019-05-17'
      },{
          id: '1010',
          name: '王如',
          sex: '女',
          birthday: '1995-05',
          address: '湖南省株洲市白湖区园湖路43号',
          level: '三级销售员',
          telphone: '13527839457',
          description: '大方漂亮',
          other: '笑口常开',
          date: '2019-05-17'
      },{
          id: '1015',
          name: '崔丽',
          sex: '女',
          birthday: '1996-03',
          address: '河南省郑州市中原区科学大道100号',
          level: '二级销售员',
          telphone: '15869962439',
          description: '火辣开朗',
          other: '有方向就有坚持',
          date: '2019-05-17'
      }],
    }
  },
  methods: {
    handleDelete (index, rows) {
      this.$alert("确定删除该项吗？","提示",{confirmButtonText: "确定",type: 'warnning'}).then(() => {this.$message({type: 'success',message: '删除成功'});rows.splice(index, 1)}).catch(() => {this.$message({type: 'info',message: '已取消'})})
    }
  }
}
</script>
