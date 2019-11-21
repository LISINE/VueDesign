<template>
    <el-form ref="form" :model="form" label-width="100px" class="formbody">
        <div>
     <el-form-item label="昵称" >
   {{username}}
  </el-form-item>
  <el-form-item label="评论的学校"  prop="school">
    <el-select  v-model="form.school" placeholder="评论的学校">
      <el-option label="广西科技大学" value="广西科技大学"></el-option>
      <el-option label="广西科技大学鹿山学院" value="广西科技大学鹿山学院"></el-option>
      <el-option label="柳州职业技术学院" value="柳州职业技术学院"></el-option>
      <el-option label="广西生态工程职业技术学院" value="广西生态工程职业技术学院"></el-option>
       <el-option label="柳州城市职业技术学院" value="柳州城市职业技术学院"></el-option>
      <el-option label="柳州铁道职业技术学院" value="柳州铁道职业技术学院"></el-option>
    </el-select>
  </el-form-item>
  </div>
  <el-form-item label="评论内容" class="textarea" prop="message">
    <el-input type="textarea" v-model="form.message" ></el-input>
  </el-form-item>
    <el-form-item label="匿名评论"  class="niming" prop="hasname">
    <el-switch v-model="form.hasname"></el-switch>
      <span class="mytime"> {{ date1 | formatDate }}</span> 
  </el-form-item>
  <el-form-item>
    <el-button type="primary"  @click="submitForm('form')">发表</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
var myDate = {
    date:new Date()
  };
  //在月份、日期、小时等小于10前面补0
  var padDate = function (value) {
    return value <10 ? '0' + value:value;
  };
export default {
    name:'addcomments',
     data() {
      return {
        form: {
        school:'',
        message: '',
        hasname: false
        },
        date1:myDate,
      }
    },
    props:['username'],
    methods: {
      submitForm(formName) {
        console.log('submit!');
      }, 
       resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    filters: {
      formatDate:function (value) {
        var date = new Date(value);
        var year = date.getFullYear();
        var month = padDate(date.getMonth()+1);
        var day = padDate(date.getDate());
        var hours = padDate(date.getHours());
        var minutes = padDate(date.getMinutes());
        var seconds = padDate(date.getSeconds());
        return year + '-' + month + '-' + day  + ' ' + hours + ':' + minutes + ':' + seconds;
      }
    },
     //el挂载到实例上后调用，一般我们的第一个业务逻辑会在这里开始
    mounted:function () {
      var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(function(){
        _this.date1 = new Date(); //修改数据date
      },1000)
    },
    //实例销毁之前调用。主要解绑一些使用addEventListener监听的事件等
    beforeDestroy:function(){
      if(this.timer){
        clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
      }
    }
}
</script>
<style scoped>
.formbody{
  padding-right: 0px;
}
.mytime{
    float: right;
}
.textarea{
    width:70%;
}
.niming{
    width: 70%;
}
</style>