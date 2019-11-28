import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex' //引入状态管理


//这样就可以用this.axios在其他文件中随意使用axios
import axios from 'axios'  
import qs from 'qs'
Vue.prototype.$qs = qs
Vue.prototype.axios = axios
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入swiper组件
import Swiper from 'swiper'
import "swiper/dist/css/swiper.min.css"
Vue.prototype.Swiper = Swiper
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,Vuex)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
