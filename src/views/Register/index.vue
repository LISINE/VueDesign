<template>
<el-form label-position="right" label-width="80px" status-icon :rules="rules" :model="ruleForm" ref="ruleForm" class="myregisterform"> 
    <el-form-item label="用户名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
     <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
   <router-link class="zhucetext" tag="a" to="/login" >
        已有账号？点击登录
        </router-link> 
  </el-form-item>
</el-form>
</template>
<script>

export default {
    name:'register',
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return{
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
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
        }
        }
    },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          this.axios.post('/web1/register.action', this.$qs.stringify({
          username:this.ruleForm.name,
          pass:this.ruleForm.pass,
          email:this.ruleForm.email
         })).then((res)=>{
       console.log(res)
        if(res.data==='success'){
             this.$router.push({
             name:'login',
              params:{
              username:this.ruleForm.name
          }
      })
        }else{
          console.log('error submit!!');
            return false;
        }
       }).catch(err => {
        console.log("查询失败")
        console.log(err);
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
.myregisterform{
  width:60%;
  padding-left: 30%;
  padding-top:10%;
  }
</style>>
