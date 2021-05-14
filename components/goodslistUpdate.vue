<template>
<el-dialog :visible.sync="dialogTable"  center="false" :show-close="false" :close-on-click-modal='false'>
    <span class="adminAdd">修改商品信息</span>
    <el-form :model="form" :rules="rules">
      <el-form-item label="编号" :label-width="formLabelWidth">
        <el-input v-model="form.id" clearable style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.gname" clearable style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="数量" prop="gnum" :label-width="formLabelWidth">
        <el-input v-model="form.gnum" clearable style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="gprice" :label-width="formLabelWidth">
        <el-input v-model="form.gprice" clearable style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="修改人" prop="gadmin" :label-width="formLabelWidth">
        <el-input v-model="form.gadmin" clearable style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="修改日期" :label-width="formLabelWidth">
        <el-date-picker v-model="form.gdate" type="date" style="width:250px"></el-date-picker>
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
import goodslist from './goodslist.vue'
export default {
  components: {goodslist},
	data (){
	  return {
      formLabelWidth: '100px',
	    dialogTable: true,
      form: {
        id: '',
        gname: '',
        gnum: '',
        gprice: '',
        gadmin: '',
        gdate: Date.now()
      },
      rules: {gnum: [{required: true, message: '请输入具体数量',trigger: 'blur'}],
              gprice: [{required: true, message: '请输入具体价格',trigger: 'blur'}],
              gadmin: [{required: true, message: '请输入修改人姓名',trigger: 'blur'}]
      },
	  }
	},
	methods: {
    handleClose () {
      this.$alert('确认取消修改吗？', '提示信息',{confirmButtonText: '确定'}).then(() => {this.dialogTable = false;const url='http://localhost:8080/main.html#/main/goodslist'
      location.href = url})
    },
    save () {
        this.$message({type: 'success', message: '修改成功'})
        const url = 'http://localhost:8080/main.html#/main/goodslist'
        location.href = url
    },
    handleUpdate (id, name) {
      this.form.id = id
      this.form.gname = name
    }
  }
}
</script>
