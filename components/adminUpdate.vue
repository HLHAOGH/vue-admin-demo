<template>
  <el-dialog :visible.sync="dialogTable"  center="false" :show-close="true">
    <span class="adminAdd">修改密码</span>
    <el-form :model="form">
      <el-form-item label="重置密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="修改日期" :label-width="formLabelWidth">
        <el-date-picker v-model="form.date" type="date" style="width:250px"></el-date-picker>
      </el-form-item>
    </el-form>
    <span slot="footer" style="margin-left:-150px">
      <el-button type="primary" @click="handleClose">取消</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </span>
</el-dialog>
</template>

<style scoped>
.adminAdd{
  float:left;
  margin-top: -40px;
  font-size: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      dialogTable: true,
      form: {
        password: '',
        date: ''
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    handleClose () {
      this.dialogTable = false
      const url = 'http://localhost:8080/main.html#/main/admin'
      location.href = url
    },
    save () {
      this.$message({type: 'success', message: '修改成功'})
      const url = 'http://localhost:8080/main.html#/main/admin'
      location.href = url
   }
  }
}
</script>
