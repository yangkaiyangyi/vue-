import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action.js'
import mutations from './mutations.js'
import getter from './getter.js'


Vue.use(Vuex)

// 存放着组件中信息的状态
const state = {
  // nowIndex: 0,  //获取详情页导航条的状态
  activityList: [],
  productInfo: {},
 
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getter,

})
