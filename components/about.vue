<template>
  <div class="view">
    <span class="el-icon-location el-icon--left">关于系统</span>
    <div class="description">
      <p>系统名称：在线销售后台管理系统</p>
      <p>系统描述：此系统服务于商业化电商运营，采用信息化技术对日常运营产生的大数据进行分析整合，便于直观的进行企业发展决策</p>
      <p>系统版权：最终解释权归开发者个人所有，任何人不得侵权！</p>
      <p>联系方式：邮箱 {{email}}</p>
    </div>
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
.description{
  position: absolute;
  top: 50px;
  left: 50px;
}
p{
  text-align: left;
}
</style>

<script>
export default {
  data () {
    return {
      email: '2579068228@qq.com'
    }
  }
}
</script>
