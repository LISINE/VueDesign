import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//这样就可以用this.axios在其他文件中随意使用axios
import axios from 'axios'  
Vue.prototype.axios = axios;
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
