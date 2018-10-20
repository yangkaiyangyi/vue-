// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex
import store from './store/index.js'
// 引入jquery
import $ from 'jquery'
window.$ = $

const Mock = require('mockjs')

global.storage = window.localStorage
// 引入axios
import axios from 'axios'
// Vue.prototype.$http = axios//在vue的原型链上添加axios
axios.defaults.withCredentials = true //允许跨域
global.axios = axios //设置为全局引用

// 引入vue-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
// 移动自适应
import 'lib-flexible'
// 引入阿里巴巴字体图标
import '@/assets/iconfont/iconfont.js'

import IconSvg from '@/components/icon-svg'
// 全局注册icon-svg
Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
