<template>
  <div class="view">
    <span class="el-icon-location el-icon--left">商品列表</span>
    <el-table :data="goodsData.slice((currentPage-1) * pagesize, currentPage * pagesize)" border class="gooslist">
      <el-table-column prop="id" label="编号" width="70px" fixed></el-table-column>
      <el-table-column prop="gname" label="名称" width="100px"></el-table-column>
      <el-table-column prop="gnum" label="数量" width="70px"></el-table-column>
      <el-table-column prop="gprice" label="价格" width="70px"></el-table-column>
      <el-table-column prop="gstore" label="存储仓库" width="100px"></el-table-column>
      <el-table-column prop="gdate" label="登记日期" width="100px"></el-table-column>
      <el-table-column prop="gadmin" label="登记人" width="70px"></el-table-column>
      <el-table-column prop="goperation" label="操作" width="200px">
      <template slot-scope="scope">
      <el-button type="danger" size="small" icon="el-icon-delete" style="color:white" @click="handleDelete(scope.$index,goodsData)">删除</el-button>
      <el-button type="success" size="small" icon="el-icon-refresh" style="color:white"><el-link href="#/main/goodslist/update"  underline='false' style="color:white;" @click="handleUpdate(scope.row.id,scope.row.gname)">修改</el-link></el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-pagination style="margin-left:120px" layout="total,sizes,prev,pager,next,jumper" :total="total"  :page-sizes="[6,4,3]" :page-size="pagesize" background @current-change="current_change" @size-change="size_change"></el-pagination>
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
.gooslist{
  width:780px;
  margin-left: 100px;
  margin-top: 40px;
  overflow: auto;
}
</style>

<script>
export default {
  data () {
    return {
      total: 12,
      currentPage: 1,
      pagesize: 6,
      goodsData: [{
        id: '1001',
        gname: '洗衣粉',
        gnum: '120袋',
        gprice: '￥21.8',
        gstore: '1号仓',
        gdate: '2019-03-25',
        gadmin: '丽芬'
      },
      {
        id: '1002',
        gname: '牙膏',
        gnum: '89盒',
        gprice: '￥16.8',
        gstore: '1号仓',
        gdate: '2019-03-25',
        gadmin: '王凯'
      },
      {
        id: '1003',
        gname: '水果刀',
        gnum: '45把',
        gprice: '￥12.0',
        gstore: '2号仓',
        gdate: '2019-03-26',
        gadmin: '李华'
      },
      {
        id: '1004',
        gname: '康师傅面',
        gnum: '110桶',
        gprice: '￥4.5',
        gstore: '2号仓',
        gdate: '2019-03-26',
        gadmin: '歌华'
      },
      {
        id: '1005',
        gname: '怡宝矿泉水',
        gnum: '50提',
        gprice: '￥1.0',
        gstore: '2号仓',
        gdate: '2019-03-26',
        gadmin: '季华'
      },
      {
        id: '1006',
        gname: '水果刀',
        gnum: '45把',
        gprice: '￥12.0',
        gstore: '2号仓',
        gdate: '2019-03-26',
        gadmin: '李华'
      },
      {
        id: '1007',
        gname: '洗洁精',
        gnum: '78瓶',
        gprice: '￥15.0',
        gstore: '1号仓',
        gdate: '2019-03-27',
        gadmin: '丽芬'
      },
      {
        id: '1008',
        gname: '洗发露',
        gnum: '89盒',
        gprice: '￥32.0',
        gstore: '1号仓',
        gdate: '2019-03-27',
        gadmin: '王凯'
      },
      {
        id: '1009',
        gname: '酱油',
        gnum: '56瓶',
        gprice: '￥18.0',
        gstore: '2号仓',
        gdate: '2019-03-27',
        gadmin: '李华'
      },
      {
        id: '1010',
        gname: '白象方便面',
        gnum: '50箱',
        gprice: '￥24.0',
        gstore: '2号仓',
        gdate: '2019-03-27',
        gadmin: '歌华'
      },
      {
        id: '1011',
        gname: '冰露矿泉水',
        gnum: '50提',
        gprice: '￥1.0',
        gstore: '2号仓',
        gdate: '2019-03-28',
        gadmin: '季华'
      },
      {
        id: '1012',
        gname: '菜刀',
        gnum: '45把',
        gprice: '￥12.0',
        gstore: '2号仓',
        gdate: '2019-03-27',
        gadmin: '李华'
      }]
    }
  },
  methods: {
    handleDelete (index, rows) {
      this.$alert('确定删除该项吗？', '提示', { confirmButtonText: '确定', type: 'warnning' }).then(() => { this.$message({ type: 'success', message: '删除成功' }); rows.splice(index, 1) }).catch(() => {this.$message({type: 'info', message: '已取消' }) })
    },
    current_change (currentPage) {
      this.currentPage = currentPage
    },
    size_change (pagesize) {
      this.pagesize = pagesize
    }
  }
}
</script>
