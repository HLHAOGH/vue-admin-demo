<template>
<el-dialog :visible.sync="dialogTable"  center="false" :show-close="true">
    <span class="adminAdd">添加销员</span>
    <el-form :model="form">
      <el-form-item label="编号" :label-width="formLabelWidth">
        <el-input v-model="form.id" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" prefix-icon="el-icon-user" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio-group v-model="form.sex" style="width:250px">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生年月" :label-width="formLabelWidth">
        <el-date-picker v-model="form.birthday" type="date" style="width:250px"></el-date-picker>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-select v-model="form.address" filterable style="width:250px">
          <el-option v-for="item in addresses" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="等级" :label-width="formLabelWidth">
        <el-select v-model="form.level" filterable style="width:250px">
          <el-option v-for="item in levels" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系电话" :label-width="formLabelWidth">
        <el-input v-model="form.telphone" prefix-icon="el-icon-telphone" style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="性格" :label-width="formLabelWidth">
        <el-input v-model="form.description"  style="width:250px"></el-input>
      </el-form-item>
      <el-form-item label="创建日期" :label-width="formLabelWidth">
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
	data (){
	  return {
	    dialogTable: true,
      form: {
        id: '',
        name: '',
        sex: '',
        birthday: '',
        address: '',
        telphone: '',
        description: '',
        date: ''
      },
      formLabelWidth: '100px',
      addresses: [{label: '陕西省西安市', value: '1'}, {label: '山西省太原市', value: '2'}, {label: '河南省郑州市', value: '3'}, {label: '湖南省株洲市', value: '4'}, {label: '甘肃省武威市', value: '5'}, {label: '河北省石家庄', value: '6'},{label: '四川省成都市', value: '7'},{label: '湖北省武汉市', value: '8'},{label: '江苏省杭州市', value: '9'}],
      levels: [{label: '一级销售员', value: '一级'},{label: '二级销售员', value: '二级'},{label: '三级销售员', value: '三级'}]
	  }
	},
	methods: {
    handleClose () {
      this.dialogTable = false
      const url='http://localhost:8080/main.html#/main/admin'
      location.href = url
    },
    save () {
      this.$message ({type: 'success', message: '添加成功'})
      const url='http://localhost:8080/main.html#/main/admin'
      location.href = url
    }
  }
}
</script>
