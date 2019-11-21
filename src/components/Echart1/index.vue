<template>
<div class="echarts" >
  <div id="chartpart1" ref="chart1" ></div>
</div>
</template>

<script>
export default {
name:'echart1',
 mounted(){
      // 确保要echart时被页面元素已挂载
      this.getEchartDatal()
    },
    methods:{
     getEchartDatal(){
       const chart1 = this.$refs.chart1;
        if (chart1) {
        const myChart = this.$echarts.init(
        document.getElementById("chartpart1")
        );

        const option =this.option;
        myChart.setOption(option);
        window.addEventListener("resize", function() {
        myChart.resize();
        });
        }
     }
    },
    data(){
        return{
          option:{
        title: { text: '过去6年在xx的录取线' },
        tooltip: {},
        xAxis: {
            data: ["2014","2015","2016","2017","2018","2019"]
        },
        yAxis: {
            
        },
        series: [{
            name: '分数',
            type: 'bar',
            data: [30, 20, 36, 10, 10, 20]
        }],
        grid:{
              x:35,
              y:45,
              x2:10,
              y2:20,
              borderWidth:1     
        }
          }
        }
    }
}
</script>

<style scoped>
.echarts{float: right;width:650px;height: 180px;}
#chartpart1{ width:100%;height: 100%;}
</style>