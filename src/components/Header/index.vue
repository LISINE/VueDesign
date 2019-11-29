<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img alt="Brand" src="@/assets/logo.jpg">
      </a>
	 <a class="navbar-brand title" href="#">{{title}}</a>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li>
		<router-link class="myli"  tag="a" to="/common" >
          主页
        </router-link>
		  </li>
         <li >
		   <router-link class="myli" tag="a" to="/leisure" >
          娱乐
        </router-link> 
		  </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search School in Liuzhou">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
         <li>
        <router-link class="myli" tag="a" to="/common/location" >
		    柳州
        <i class="el-icon-caret-bottom"></i>
		</router-link>
          </li>
          <li>
     <router-link v-if='$store.state.login.isVip' class="myli" tag="a" to="/mine" >
	   	您好，{{$store.state.login.username}}
		</router-link>
     <i class="el-icon-delete myli" v-if='$store.state.login.isVip' @click="logout()">注销</i>
      <router-link  v-else class="myli" tag="a" to="/vip">
		   我要登录
		</router-link>
          </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

</template>

<script>
export default {
name:"header",
props : {
        title : {
            type : String,
            default : '柳州高校网'
        }
    },
  methods:{
    logout(){
       this.$store.dispatch("login/logout", this.$store.state.login.username)  
    }
  }
}
</script>

<style scoped>
.navbar-default{background-color: #79a4ba5e}
.navbar-brand img{width: 80px;height: 50px;margin-top: -14px;}
.router-link-active{background-color: #c4a56063;height: 100%;}
.myli{float: left;min-width:100px;line-height: 114%;font-size: 15px;text-align: center;}
.el-icon-delete{padding: 8%;}
</style>