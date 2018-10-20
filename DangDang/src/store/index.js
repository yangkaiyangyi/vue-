import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action.js'
import mutations from './mutations.js'
import getter from './getter.js'


Vue.use(Vuex)

// 存放着组件中信息的状态
const state = {
  
  activityList: [],
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getter,

})
