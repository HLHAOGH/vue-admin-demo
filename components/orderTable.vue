<template>
  <div class="view">
    <span class="info"><i class="el-icon-location"></i>订单数量图表分析</span>
    <div id="main" style="margin-top:10px;float:left;width:610px;height:500px"></div>
    <div id="pieArea" style="margin-top:10px;float:right;width:520px;height:500px"></div>
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
.info{
  margin-left: -1020px;
  color: green;
  font-size: 16px;
}
</style>

<script>
import orderList from '@/components/orderList.vue'
export default {
    props: ['saleData'],
    components: { orderList },
	methods: {
	  drawTable() {
	    let myChart=this.$echarts.init(document.getElementById('main'))
	    myChart.setOption({
	      title: {
	        text: '',
	        textStyle: {
	          fontSize: '20px',
	        }
	      },
	      tooltip: {},
	      xAxis: {
            name: '订单类别',
            data: ['洗衣粉','牙膏','康师傅面','怡宝矿泉水']
	      },
	      yAxis: {},
	      series: [{
            name: '订单',
            type: 'bar',
            data: [22,35,14,40]
	      }]      
	    })
	  },
	  drawPie () {
	    let myChart1=this.$echarts.init(document.getElementById('pieArea'))
	    myChart1.setOption({
	      title: {
	        text: ''
	      },
	      tooltip: {},
	      series: [{
	        name: '订单比例',
	        type: 'pie',
	        data: [
	          {name: '洗衣粉', value: '22'},
	          {name: '牙膏', value: '35'},
	          {name: '康师傅面', value: '14'},
	          {name: '怡宝矿泉水', value: '40'}
	          ]
	      }]      
	    })
	  }
    },
	mounted() {
      this.drawTable()
      this.drawPie()
	}
}
</script>
