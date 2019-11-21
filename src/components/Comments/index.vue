<template>
<div class="mycomment">
<el-row :gutter="12">
  <el-col :span="24">
    <el-card shadow="hover"  class="box-card">
  <div slot="header" class="clearfix">
    <span >评论</span>
  </div>
  <div class="itemarea">
  <div v-for="el in tableData" :key="el.index" class="text item">
        <span>{{el.name}}</span>
    <el-divider content-position="left">{{el.school}}</el-divider>
        <span>{{el.message}}</span>
  </div>
   </div>
    </el-card>
  </el-col>
</el-row>
</div>
</template>
<script>
  export default {
      name:'commentbox',
      props:['tableData']
    }
  
</script>
<style scoped>
.mycomment{
    width:100%;
   margin-bottom: 20px;
   margin-bottom: 0px;
    border-radius:25px;
    -moz-box-shadow:4px 1px 10px #a1a19a; -webkit-box-shadow:4px 1px 10px #a1a19a; box-shadow:4px 1px 10px #a1a19a;
}
.itemarea{
   max-height:230px;
    overflow-y: scroll;
}
.item{
  padding-bottom: 20px;
}

</style>