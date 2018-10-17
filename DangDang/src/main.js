// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 移动自适应
import 'lib-flexible'
// 引入阿里巴巴字体图标
import "@/assets/iconfont/iconfont.js"

import IconSvg from '@/components/icon-svg'
// 全局注册icon-svg
Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
