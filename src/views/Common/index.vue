<template>
 <div >
     <Header />
     <Swiper1 />
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
	<div v-if="istu" class="product-tab-wrap">
		<div class="row">
			<div class="theme col-sm-6 col-md-4"  @click="gotodetail">

				<div class="thumbnail">
					<img id="spot0" src="/images/jiangxuan_1.jpg" alt="广西科技大学">
					<div class="caption">
						<h3 id="description0 thumbnail_label">广西科技大学</h3>
						<p id="sometext0" >一些示例文本。一些示例文本。</p>
					</div>
				</div>

			</div>
			<div class="theme col-sm-6 col-md-4">

				<div class="thumbnail">
					<img id="spot1" src="/images/jiangxuan_2.jpg" alt="广西科技大学鹿山学院">
					<div class="caption">
						<h3 id="description1 thumbnail_label">广西科技大学鹿山学院</h3>
						<p id="sometext1" >一些示例文本。一些示例文本。</p>
					</div>
				</div>

			</div>
			<div class="theme col-sm-6 col-md-4">
				<div class="thumbnail">
					<img id="spot2" src="/images/jiangxuan_3.jpg" alt="柳州职业技术学院">
					<div class="caption">
						<h3 id="description2 thumbnail_label">柳州职业技术学院</h3>
						<p id="sometext2" >一些示例文本。一些示例文本。</p>
					</div>
				</div>
			</div>
		</div>
        <div class="row">
			<div class="theme col-sm-6 col-md-4">

				<div class="thumbnail">
					<img id="spot0" src="/images/jiangxuan_4.jpg" alt="广西生态工程职业技术学院">
					<div class="caption">
						<h3 id="description0 thumbnail_label">广西生态工程职业技术学院</h3>
						<p id="sometext0" >一些示例文本。一些示例文本。</p>
					</div>
				</div>

			</div>
			<div class="theme col-sm-6 col-md-4">

				<div class="thumbnail">
					<img id="spot1" src="/images/jiangxuan_5.jpg" alt="柳州铁道职业技术学院">
					<div class="caption">
						<h3 id="description1 thumbnail_label">柳州铁道职业技术学院</h3>
						<p id="sometext1" >一些示例文本。一些示例文本。</p>
					</div>
				</div>

			</div>
			<div class="theme col-sm-6 col-md-4">
				<div class="thumbnail">
					<img id="spot2" src="/images/jiangxuan_6.jpg" alt="柳州城市职业技术学院">
					<div class="caption">
						<h3 id="description2 thumbnail_label">柳州城市职业技术学院</h3>
						<p id="sometext2" >一些示例文本。一些示例文本。</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<el-tabs v-else type="border-card" class="mytabs">
	<el-tab-pane label="大学排名">
<template>
  <el-table
    :data="tableData1"
    stripe
    style="width: 100%">
    <el-table-column
      prop="rank"
      label="排名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="学校名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="charge"
      label="主管部门"
	  width="200">
    </el-table-column>
	  <el-table-column
      prop="level"
      label="办学层次"
	  width="180">
    </el-table-column>
	  <el-table-column
      prop="remark"
      label="备注"
	  >
    </el-table-column>
  </el-table>
</template>
	</el-tab-pane>
	<el-tab-pane label="住宿条件排名">
<template>
  <el-table
    :data="tableData2"
    stripe
    style="width: 100%">
    <el-table-column
      prop="rank"
      label="排名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="学校名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="accommodation"
      label="住宿情况"
	  >
    </el-table-column>
	  </el-table>
</template>
	</el-tab-pane>
	<el-tab-pane label="校园面积排名">
<template>
  <el-table
    :data="tableData3"
    stripe
    style="width: 100%">
    <el-table-column
      prop="rank"
      label="排名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="学校名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="area"
      label="住宿情况"
	  >
    </el-table-column>
	  </el-table>
</template>
	</el-tab-pane>
	</el-tabs>
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

export default{
name:'common',
data(){
    return{
     istu:true,
	 btnFlag:false,
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
}, 
gotodetail(){
	 this.$router.replace('/schooldetail')
}
  },
components:{
    Header,
    Location,
    Swiper1,
	Comments,
	Gotop
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