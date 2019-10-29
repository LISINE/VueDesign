<template>
<div class="container">
  <h2>广西科技大学</h2>
  <!-- 小介绍 -->
  <div class="media">
    <div class="media-left media-top">
      <img src="https://static.runoob.com/images/mix/img_avatar.png" class="media-object img-thumbnail" style="width:180px">
	  </div>
    <div class="media-body">
    <table class="table">
      <tbody>
        <tr class="active">
          <td class="td1">成立时间</td>
          <td class="td2">1994</td></tr>
        <tr class="success">
          <td class="td1">学校层次</td>
          <td  class="td2">本科</td></tr>
        <tr class="warning">
          <td class="td1">去年录取情况</td>
          <td class="td2">下载</td></tr>
        <tr class="danger">
          <td class="td1">学校官网</td>
          <td class="td2">http</td></tr>
      </tbody>
   </table>
  <!-- 图标展示近来几年在目标城市的招生分数 -->
<Echart1 ></Echart1>
    </div>
  </div>
  <hr>

<!-- 大面积介绍 -->
<div class="panel panel-primary">
<div class="panel panel-success">
    <div class="panel-heading">
        <h3 class="panel-title">学校历史</h3>
    </div>
    <div class="panel-body">
        这是一个基本的面板
    </div>
</div>
</div>
	</div>
</template>
<script>
import Echart1 from'@/components/Echart1'
export default {
    name:"schooldetail",
    components:{
      Echart1
    }
}
</script>
<style scoped>
.table{width: 25%;margin-left: 4%;margin-top:2%; float: left;}
.td1{text-align: right;width:5%;}
.td2{text-align: left;width:5%;}
.panel-primary{margin-top: 3%;}

</style>