import * as types from './mutation-types.js'
export default {
  // 加1 这里操作要大写
  // add(state) {
  //   state.count += 1;
  // },
  [types.CHANGE_TOKEN] (state, res) {
    state.token = res
  },
  [types.ADDACTIVITY] (state, value) {
    state.activityList = value
  },
  [types.ADDGOODS] (state, value) {
    state.goodsList = value
  },
  [types.PRODUCTINFO] (state, value) {
    state.productInfo = value
  }

}
