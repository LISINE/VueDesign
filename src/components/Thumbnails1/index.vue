<template>
    <div>
        <div v-if="msg" class="product-tab-wrap">
		<div class="row">			
			<div class="theme col-sm-6 col-md-4"  @click="gotodetail(el.school)" v-for="(el,index) in thumbsData.slice(0,3)" :key=index>
				<div class="thumbnail" >
					<img  :src="el.imgUrl" :alt="el.name">
					<div class="caption">
						<h3 id="thumbnail_label">{{el.name}}</h3>
					</div>
				</div>
			</div>
		</div>
       	<div class="row">			
			<div class="theme col-sm-6 col-md-4"  @click="gotodetail(el.school)" v-for="(el,index) in thumbsData.slice(3,6)" :key=index>
				<div class="thumbnail" >
					<img  :src="el.imgUrl" :alt="el.name">
					<div class="caption">
						<h3 id="thumbnail_label">{{el.name}}</h3>
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
    </div>
</template>
<script>
export default {
    name:'thumbnails1',
    props:['msg','thumbsData'],
    methods:{
      gotodetail(school){
        console.log("跳转"+school)
	    this.$router.push({
        name:'schooldetail',
        query:{
          school:school
        }
      })
}
    }
}

</script>
<style scoped>

</style>