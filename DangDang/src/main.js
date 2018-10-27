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

// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
        next();
      }
      else {    //如果没有权限,重定向到登录页,进行登录
        next({
          path: '/denlu',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else { //不需要权限 直接跳转
      next();
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    eventHub: new Vue() // 使用集中的事件处理器,一劳永逸的在任何组件调用事件发射、接受的方法
  }
})
