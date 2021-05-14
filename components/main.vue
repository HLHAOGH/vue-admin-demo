<template>
<div id="app">
  <el-header class="header">
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :on-success="handleSuccess" :before-upload="beforeUpload"><img v-if="imageUrl" :src="imageUrl"><i v-else class="el-icon-user el-avatar"></i></el-upload>
    <span class="Htitle">欢迎来到{{name}}的销售管理系统</span>
    <el-link href="#/" target="_self" :underline="false" icon="el-icon-mouse" class="sign-out">退出系统</el-link>
  </el-header>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1"><a href="#/main"><i class="el-icon-menu"></i>&nbsp;&nbsp;首&nbsp;&nbsp;页</a></el-menu-item>
        <el-menu-item index="2"><a href="#/main/admin"><i class="el-icon-user"></i>销员信息</a></el-menu-item>
        <el-menu-item index="3"><a href="#/main/goodsList"><i class="el-icon-goods"></i>商品列表</a></el-menu-item>
        <el-submenu index="4">
            <template slot="title"><i class="el-icon-shopping-cart-2"></i>销售管理</template>
            <el-menu-item index="4-2"><a href="#/main/orderList">销量列表</a></el-menu-item>
            <el-menu-item index="4-1"><a href="#/main/orderTable">销量统计</a></el-menu-item>
        </el-submenu>
        <el-menu-item index="5"><a href="#/main/jurisdiction"><i class="el-icon-position"></i>权限管理</a></el-menu-item>
        <el-submenu index="6">
            <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
            <el-menu-item index="6-1"><a href="#/main/about">关于系统</a></el-menu-item>
            <el-menu-item index="6-2"><a href="#/">退出</a></el-menu-item>
        </el-submenu>
    </el-menu>
</div>
</template>

<style scoped>
.header{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 80px;
   background-color: #545c64;
}
.avatar-uploader{
   position: absolute;
   top: 0;
   left: 20px;
   width: 60px;
   height: 60px;
   border: 1px solid lightgray;
   border-radius: 3px;
}
.el-avatar{
  width: 60px;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  background-color: lightgray;
}
.Htitle{
  position: absolute;
  top: 35%;
  left: 100px;
  color: white;
}
.sign-out{
  float: right;
  margin-right: 20px;
  margin-top: 20px;
  color: white;
}
.sign-out:hover{
  color: gray;
}
.el-menu-demo{
  width:200px;
  height:500px;
  padding-top: 20px;
  border:1px solid lightgray;
}
a{
  color:white;
  text-decoration:none;
}
.active,.active>i{
    color: #ffd04b;
}
</style>

<script>
export default {
  data () {
	  return {
      activeIndex: '1',
      imageUrl: '',
      name: 'lihao'
    }
  },
  methods: {
    handleSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
