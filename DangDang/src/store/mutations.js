import * as types from './mutation-types.js'
export default {
  // 加1 这里操作要大写
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    if(state.count>1){
      state.count -= 1;
    }
    
  },
  [types.ADDACTIVITY](state, value) {
    state.activityList = value
  },
  [types.ADDGOODS](state, value) {
    state.goodsList = value
  },
  [types.PRODUCTINFO](state, value) {
    state.productInfo = value
  },

}
