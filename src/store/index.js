import Vue from 'vue'
import Vuex from 'vuex'
import location from './location'
import login from './login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    location,
    login
  }
})
