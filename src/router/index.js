import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRouter from './common'
import mineRouter from './mine'  
import searchRouter from './search'
import schooldetail from'./schooldetail'
import leisure from './leisure'
import register from './register'
import login from './login'
Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    commonRouter,
    mineRouter,
    searchRouter,
    schooldetail,
    leisure,
    register,
    login,
    {
      path : '/*',
      redirect : '/common'
    }
  ]
})


