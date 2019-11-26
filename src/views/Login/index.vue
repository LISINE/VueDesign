<template>
<el-form :label-position="right" label-width="80px" status-icon :rules="rules" :model="ruleForm" ref="ruleForm" class="myloginform"> 
    <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name">{{oncename}}</el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <router-link   tag="a" to="/register" >
		还没注册？快去注册
	</router-link>
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
        }
    },
    mounted(){
     this.oncename=this.$route.params.username;
    },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post('/web1/login.action',{params:{
          username:this.ruleForm.name,
          pass:this.ruleForm.pass
         }}).then((res)=>{
       console.log(res)
        if(res.data==='success'){
          // 跳转到首页
                setTimeout(function(){
                    that.$router.push({name:'common'})
                },1000)
                localStorage.setItem('token',res.data.token)
                // 将登录名使用vuex传递到Home页面
                this.$store.commit('handleUserName',res.data.username);
        }else{
          console.log('error submit!!');
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
      }
    }
}
</script>
<style scoped>
.myloginform{
  width:70%;
  padding-left: 30%;
  padding-top:10%;
  }
</style>>
