# 如何启动项目
npm i
npm run dev
# 项目描述
这是一个基于vue技术的单页SPA项目，模仿的是当当网移动端项目，基本功能已经实现，还存在一些bug后续改善
通过模块化，组件化，工程化创建对象，
# 技术选型
1. vue-cli -- vue脚手架
2. vuex -- 管理状态类似于redux
3. vue-router -- vue的路由
4. axios -- 向后台发送数据
5. mockjs -- 前台模拟后台数据
6. better-scroll -- 必须超过容器大小才可以滑动
7. swiper -- 轮播插件
8. lib-flexible
9. px2rem-loader


# use
1. 阿里字体图标

# 实现的功能
1. 适配 lib-flexible自适应，px2rem-loader适配
1. 点击跳转路由
3. 前台登录验证

# 未实现的功能
1. 注册功能，未实现短信注册功能



# 遇到的问题
1. 二维数组
2. better-scroll使用过程中的问题
  1. 移动端时手指滑动,设置左右滑动的时候，上下滑动不了
    * 解决 设置添加属性

3. 点击按钮到页面顶部
  * 
4. 过渡动画
  * 过渡动画要么自己触发，要么设置定时器
5. 文本两行，然后省略号
6. 某个子组件有的组件使用某个不使用
  * 在需要使用这个组组件的路由设置中，添加meta配置属性
  * 在子组件的最外层包裹器上添加 v-show判断 $route.meta.xx
7. 每次切换路由都到路由顶部
  * 在目标组件中设置，methods:{resetTo(){window.scrollTo(0,0)}}
    ·  created(){this.resetTo()}
14. 倒计时
  * 当点击重新发送时候,背景颜色转换为禁止点击状态延迟，后期选用vue插件vue-countdown

# 遗留的问题
1. 倒计时处理

2. 登录注册没有设置后台服务器
  
# 前台正则验证
1. 验证手机号码
  * (/^1[1|3|4|5|7|8][0-9]{9}$/).test(phone)

# 优化项目
1. 刚开始图片没收到显示loading图-（待完成）
  * 下载 vue-lazyloader
  * main.js 中引入
  * 然后引入需要的loading
  * 注册 --全局有了v-lazy标签
  * 那个图片需要懒加载就将src标签换成v-lazy标签
  * 注册使用 vueLazyload
     Vue.use(VueLazyload,{
       loading
     })  全局组件 有了v-lazy指令
2. 路由懒加载（其他方法，下次用这个）
  * 在index.js中
  * const FirstPage = () => import('../components/FirstPage/FirstPage')

3. 设置浏览器title旁边的图标
  * build -> webpack.dev.conf.js
    new HtmlWebpackPlugin（{
    filename: '目标页面'
    template: ‘目标页面’
    inject: true
    favicon: 'icon address'
    }
  * static 放需要的图标
4. npm run build -report
  * 可视化图，查看项目打包情况各插件所占体积
  * 从而优化，换小体积库
5. 保存数据的方法
  * 给router-link添加标签 keep-alive
  * sessionStorage 缓存路由组件对象 -- 不需要重新获取数据
6. * IconSvg图标组件

7. * 钩子函数beforeEach()对路由进行判断
8. * 随机验证码


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
