import * as types from './mutation-types.js'
export default {
  // increment({commit}){
  //       commit("INCREMENT")
  //   },
  addActivity ({commit}, value) {
    commit(types.ADDACTIVITY, value)
  },
  addGoods ({commit}, value) {
    commit(types.ADDGOODS, value)
  },

  productInfo ({commit}, value) {
    commit(types.PRODUCTINFO, value)
  },
 
  


}
