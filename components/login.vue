<template>
<div id="app">
  <h1 style="padding-top:40px">欢迎登录销售管理系统</h1>
  <el-form model="loginForm" class="form">
    <el-form-item>
      <el-input v-model="loginForm.username" placeholder="请输入用户名" class="form-input"><template slot="prepend"><i class="el-icon-user"></i></template></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginForm.password" placeholder="密码" show-password class="form-input"><template slot="prepend"><i class="el-icon-lock"></i></template></el-input>
    </el-form-item>
    <el-button type="primary" plain @click="submit" id="btn">登录</el-button>
    <br /><span class="info">温馨提示：请使用默认的用户名和密码登录</span>
  </el-form>
</div>
</template>

<style scoped>
#app{
  margin-top:-60px;
  width: 100%;
  height: 625px;
  background-color: rgba(0,0,0,0.4);
}
.form{
  position: relative;
  top: 30px;
  left: 36%;
  width: 350px;
  height: 250px;
  padding-top: 40px;
  padding-left: 80px;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.form-input{
  float: left;
  width: 250px;
  height: auto;
}
#btn{
  float: left;
  width: 250px;
  border-radius: 5px;
  background-color: #20a0ff;
  color: white;
  letter-spacing: 1em;
  outline: none;
}
#btn:hover{
  color: white;
}
.info{
  display: block;
  margin-top: 60px;
  margin-left: -80px;
  color: red;
  font-size: 12px;
}
</style>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    submit () {
      if (this.loginForm.username === 'admin' && this.loginForm.password === '123456') {
        let url = 'http://localhost:8080/main.html#/main'
        location.href = url
        this.$message({type: 'success', message: '登录成功'})
      } else {
        this.$message({type: 'error', message: '用户名或密码错误'})
      }
    }
  }
}
</script>
