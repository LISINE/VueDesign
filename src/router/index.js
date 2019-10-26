import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRouter from './common'
import mineRouter from './mine'  
import searchRouter from './search'
Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    commonRouter,
    mineRouter,
    searchRouter,
    {
      path : '/*',
      redirect : '/common'
    }
  ]
})


