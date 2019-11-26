<template>
 <div >
     <Header />
     <Swiper1 :arrItem='IndexData1'/>
	 <!-- 学校简介 -->
 <div class="product-container">
	<div class="product-tab-bar">
		<h3 class="bt">
			<strong>六大学校</strong>
		</h3>
		<div class="tab-nav">
			<span class="=on" @click="handletu1">学校主题</span>
			<span class="=on" @click="handletu2">学校排名</span>
		</div>
	</div>
  <Thumbnails1 :msg="istu"  :thumbsData='IndexData2' />
	<!-- 留言板 -->
	    	<h3 class="liuyan">
			<strong>学校新闻</strong>
		</h3>

	 <!-- 留言板end -->
</div>
 <!-- 学校简介end -->

<!-- backTop 回顶部的方法 -->
   <div class="runtop">
       <Gotop />
   </div>
          <keep-alive>
            <router-view/>
         </keep-alive>
   </div>
</template>
<script >
import Header from '@/components/Header';
import Location from '@/components/Location';
import Swiper1 from '@/components/Swiper1';
import Comments from '@/components/Comments';
import Gotop from '@/components/Gotop';
import Thumbnails1 from '@/components/Thumbnails1';
export default{
name:'common',
data(){
    return{
     istu:true,
	 btnFlag:false,
	 IndexData1:[''],
	 IndexData2:[''],
	 tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          city: '上海',
          school: '普陀区',
          message: '上海市普陀区金沙江路 1518 弄'
        }
        ],
	  tableData1: [
		  {
          rank: '1',
          name: '广西科技大学',
		  charge: '广西壮族自治区教育厅',
		  level:'本科',
		  remark:''
		},
		  {
          rank: '2',
          name: '广西科技大学鹿山学院',
		  charge: '广西壮族自治区教育厅',
		  level:'本科',
		  remark:'民办'
		},
		{
          rank: '3',
          name: '柳州职业技术学院',
		  charge: '广西壮族自治区教育厅',
		  level:'专科',
		  remark:''
		},
		{
          rank: '4',
          name: '广西生态工程职业技术学院',
		  charge: '广西壮族自治区教育厅',
		  level:'专科',
		  remark:''
		},
		{
          rank: '5',
          name: '柳州铁道职业技术学院',
		  charge: '广西壮族自治区教育厅',
		  level:'专科',
		  remark:''
		},
		{
          rank: '6',
          name: '柳州城市职业学院',
		  charge: '广西壮族自治区教育厅',
		  level:'专科',
		  remark:''
		}
	  ],
	tableData3:[
			{
				rank: '1',
				name: '广西科技大学',
				area:'主校区部分上床下桌，新校区全都是上床下桌'
			},
			{
				rank: '2',
				name: '广西科技大学',
				area:'主校区部分上床下桌，新校区全都是上床下桌'
			},{
				rank: '3',
				name: '广西科技大学',
				area:'主校区部分上床下桌，新校区全都是上床下桌'
			},
			{
				rank: '4',
				name: '广西科技大学',
				area:'主校区部分上床下桌，新校区全都是上床下桌'
			},
			{
				rank: '5',
				name: '广西科技大学',
				area:'主校区部分上床下桌，新校区全都是上床下桌'
			},{
				rank: '6',
				name: '广西科技大学',
				area:'主校区部分上床下桌，新校区全都是上床下桌'
			}

		],
			tableData2:[
			{
				rank: '1',
				name: '广西科技大学',
				accommodation:'主校区部分上床下桌，新校区全都是上床下桌'
			},
			{
				rank: '2',
				name: '广西科技大学',
				accommodation:'主校区部分上床下桌，新校区全都是上床下桌'
			},{
				rank: '3',
				name: '广西科技大学',
				accommodation:'主校区部分上床下桌，新校区全都是上床下桌'
			},
			{
				rank: '4',
				name: '广西科技大学',
				accommodation:'主校区部分上床下桌，新校区全都是上床下桌'
			},
			{
				rank: '5',
				name: '广西科技大学',
				accommodation:'主校区部分上床下桌，新校区全都是上床下桌'
			},{
				rank: '6',
				name: '广西科技大学',
				accommodation:'主校区部分上床下桌，新校区全都是上床下桌'
			}

		]
	}
},
created(){
		this.axios.get('/web1/queryIndex.action').then((res)=>{
		console.log(res)
		var arr1=res.data.big;
		var arr2=res.data.midlle;
		this.IndexData1=arr1;
		this.IndexData2=arr2;
		})
		.catch(err => {
        console.log("查询失败")
        reject(err);
      });
},
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
methods:{
handletu1(){
    this.istu=true
},
handletu2(){
    this.istu=false
}
  },
components:{
    Header,
    Location,
    Swiper1,
	Comments,
	Gotop,
	Thumbnails1

}
}
</script>
<style>

#myTabContent{max-width: 1000px;max-height:700px;}
#myTab{padding-left: 20%}
.product-container {
	padding-left: 2%;
    width: 92%;
    float: left;
}

.product-tab-bar {
	text-align: center
}

.product-tab-bar .bt strong {
	display: inline-block;
	padding: 0 10px 20px;
	border-bottom: 1px solid #d2d2d2;
	font-size: 22px;
}

.product-tab-bar .tab-nav {
	margin-top: 30px;
	font-size: 0
}

.product-tab-bar .tab-nav span,
.product-tab-bar .tab-nav .more-link {
	color: #666;
	display: inline-block;
	height: 26px;
	line-height: 26px;
	padding: 0 15px;
	margin: 0 6px;
	cursor: pointer;
	font-size: 14px
}

.product-tab-bar .tab-nav span.on {
	color: #fff;
	background: #6d93e8
}

.product-tab-wrap {
	padding-top: 27px
}

.product-tab-wrap {
	width: 80%;
	margin-left: 10%;
}

.thumbnail {
	cursor: pointer;
	width: 100%;
	overflow: hidden;
}

.thumbnail img {
	top: 0;
	left: 0;
	-webkit-transition: -webkit-transform 0.3s;
	-moz-transition: -moz-transform 0.3s;
	-o-transition: -o-transform 0.3s;
	transition: transform 0.3s;
}

.thumbnail img:hover {
	-webkit-transform: scale(1.3);
	-moz-transform: scale(1.3);
	-ms-transform: scale(1.3);
	-o-transform: scale(1.3);
	transform: scale(1.3);
}

.el-tabs--border-card>.el-tabs__header {
    background-color: #e8e9da40;
    border-bottom: 1px solid #303c554f;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #89ae1bc7;
    background-color: #dfe7de;
}
.mytabs{
	width: 70%;
	margin: 2% 5% 2% 18%;
}
.liuyan{
   text-align: center;
    padding: 8px;
    color: #fff;
    text-shadow: 0 0 5px #CCCCCC, 0 0 10px #CCCCCC, 0 0 15px #CCCCCC, 0 0 20px #a3eda5, 0 0 25px #c6e762, 0 0 30px #49590a, 0 0 50px #095816, 0 0 80px #095816, 0 0 100px #095816, 0 0 150px #8fa155;
}
.runtop{
  max-width: 1200px;
  margin: 0px 100px;
}
</style>