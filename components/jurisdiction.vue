<template>
<div class="view" v-loading="true"  element-loading-text="正在加载数据..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(235,235,235,0.5)">
   <span class="el-icon-location el-icon--left">权限管理</span>
</div>
</template>

<style scoped>
.view{
  position: absolute;
  top: 80px;
  left: 200px;
  width: 83.5%;
  height: 500px;
  color: lightgray;
}
.el-icon--left{
  float: left;
  margin-left: 20px;
  color: gray;
  font-size: 14px;
}
</style>

<script>
</script>