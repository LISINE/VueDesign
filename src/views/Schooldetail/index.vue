<template>
<div class="container">
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>广西科技大学</el-breadcrumb-item>
</el-breadcrumb>
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
<!-- 历史介绍结束 -->
<!-- 宿舍图 -->
<Swiper2  :arrItem1='arrItem1' :arrItem2='arrItem2'  class="sushetu"/>
<!-- 宿舍图END -->
   <div  class="areabottom">
      <p class="pinglun">评论</p>
       <div class="addcom">
        <!-- 用户留言 -->
        <Addcomment :username='username' />
        <!-- 用户留言end-->
       </div>
          <div  class="showcomments">
       <!-- 关于学校的评论 -->
        <Comments :tableData='tableData'/>
        <!-- 关于学校的评论end -->
      </div>
   </div>
   <div class="runtop">
       <Gotop />
   </div>
	</div>
</template>
<script>
import Echart1 from'@/components/Echart1';
import Comments from'@/components/Comments';
import Gotop from '@/components/Gotop';
import Swiper2 from '@/components/Swiper2';
import Addcomment from '@/components/Addcomment';
export default {
    name:"schooldetail",
    components:{
      Echart1,
      Comments,
      Gotop,
      Swiper2,
      Addcomment
    },   
     data() {
      return {
        activeName: '1',
        username:'广西科技大学',
        tableData: [{
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },
          {
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          name: '王小虎',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        }
        ],
        	arrItem1:[
					{
							name:'swiperSlide1',
							imgUrl:'/images//gkd1.jpg'
					},
					{
							name:'swiperSlide2',
							imgUrl:'/images/gkd2.jpg'
					},
					{
							name:'swiperSlide3',
							imgUrl:'/images/gkd3.jpg'
					},
					{
							name:'swiperSlide4',
							imgUrl:'/images/gkd4.jpg'
					},
					{
							name:'swiperSlide5',
							imgUrl:'/images/gkd5.jpg'
					},
					{
							name:'swiperSlide6',
							imgUrl:'/images/gkd6.jpg'
					},
					{
							name:'swiperSlide7',
							imgUrl:'/images/gkd7.jpg'
					}
			],
        	arrItem2:[
					{
							name:'swiperSlide1',
							imgUrl:'/images//gkd1m.jpg'
					},
					{
							name:'swiperSlide2',
							imgUrl:'/images/gkd2m.jpg'
					},
					{
							name:'swiperSlide3',
							imgUrl:'/images/gkd3m.jpg'
					},
					{
							name:'swiperSlide4',
							imgUrl:'/images/gkd4m.jpg'
					},
					{
							name:'swiperSlide5',
							imgUrl:'/images/gkd5m.jpg'
					},
					{
							name:'swiperSlide6',
							imgUrl:'/images/gkd6m.jpg'
					},
					{
							name:'swiperSlide7',
							imgUrl:'/images/gkd7m.jpg'
					}
			]
    }
  }
}
</script>
<style scoped>
.table{width: 25%;margin-left: 4%;margin-top:2%; float: left;}
.td1{text-align: right;width:5%;}
.td2{text-align: left;width:5%;}
.panel-primary{margin-top: 3%;}
.sushetu{
  padding: 10px 0px;
}
.pinglun{
    font-size: 44px;
    font-weight: 800;
     text-align: center;
    padding: 20px;
    color: #fff;
    text-shadow: 0 0 5px #CCCCCC, 0 0 10px #CCCCCC, 0 0 15px #CCCCCC, 0 0 20px #a3eda5, 0 0 25px #c6e762, 0 0 30px #49590a, 0 0 50px #095816, 0 0 80px #095816, 0 0 100px #095816, 0 0 150px #8fa155;
}
.areabottom{
  height: 450px;
  border-radius: 20px;
}
.showcomments{
  padding-top: 20px;
  float: right;
  width: 50%;

}
.addcom{
  padding-top: 20px;
  float: left;
  width: 50%;
}
.runtop{
    margin: 10px -80px;
    padding-bottom: 50px;
}
</style>