<template>

      <el-form label-position="right" label-width="80px" status-icon :rules="rules" :model="ruleForm" ref="ruleForm" class="myloginform"> 
    <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name">{{oncename}}</el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
       <a class="zhucetext" @click="accept()" >
        还没注册？点击这里
        </a> 
  </el-form-item>
</el-form>
</template>
<script>
export default {
    name:'login',
    data(){
         var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
        return{
            oncename:'',
            ruleForm:{
              name:'',
              pass:'',
              checkPass:'',
              email:''
            },
          rules: {
         name: [
            { required: true, message: '请输入用户昵称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
          }
    }},
    mounted(){
     this.oncename=this.$store.state.login.username;
    },
   methods: {
      submitForm(formName) {
        var _this=this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post('/web1/login.action', this.$qs.stringify({
          username:this.ruleForm.name,
          pass:this.ruleForm.pass
         })).then((res)=>{
       console.log(res)
        if(res.data.isOk==='success'){
          // 跳转到首页
                 localStorage.clear()
                 this.$store.dispatch("login/addToken",res.data.token)
                 this.$store.dispatch("login/addName", res.data.username)  
                 this.$store.dispatch("login/changeVip", "true")  
                
                         console.log(_this.$store.state.login.username)
                 this.$router.go(-1); 
        }else{
          console.log('error submit!!');
        this.$message.error('登录失败，用户名或密码错误');
            return false;
        }
       }).catch(err => {
        console.log("查询失败")
        reject(err);
      }); 
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      accept(){
         this.$emit('accept')
      }
   }
}
</script>
<style scoped>
.el-form-item__label{
    color: #f1d64ed4;
}

.el-button--primary{
 margin-left: 60px;
    background-color: transparent;
     color: #dce1e7;
}
.zhucetext{
  padding-left: 20px;
      border: none;
      color: #fff;
      background-color: transparent;
      font-size: 19px;
}
</style>>
