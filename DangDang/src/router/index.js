import Vue from 'vue'
import Router from 'vue-router'
//五大主页
import home from '../container/Vhome'
import category from '../container/Vcategory'
import buy from '../container/Vbuy'
import cart from '../container/Vcart'
import my from '../container/Vmy'
//登陆注册
import denlu from '../components/login/denlu'
import zuce from '../components/login/zuce'

//商品prodcut
import index from '../components/product/index'
import goods from '../components/product/goods'
import detail from '../components/product/detail'
import comment from '../components/product/comment'
//懒加载
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: {
        requireAuth: true //  添加该字段，表示进入这个路由是需要登录才能进入的
      }
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/denlu',
      name: 'denlu',
      component: denlu
    },
    {
      path: '/zuce',
      name: 'zuce',
      component: zuce
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/index/one', 
      children: [
        {
          path: 'one',
          name: 'goods',
          component: goods
        },
        {
          path: 'two',
          name: 'detail',
          component: detail,
        },
        {
          path: 'three',
          name: 'comment',
          component: comment,
        }
      ]
    },

  ]
})
  
export default router