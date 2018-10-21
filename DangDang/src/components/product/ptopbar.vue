<template>
  <div class="middle">               
         <div class="nav-wrapper" ref="navWrapper">
         <ul>
        <li class="mid" @click="tabClick(index)" :class="{'active':nowIndex==index}" v-for="(item,index) in arrtext" :key='index'> {{item}}  </li>
       </ul>
        </div>
   
  </div>
</template>

<script>
import BScroll from "better-scroll";
import VueRouter from 'vue-router';
export default {
  data() {
    return {
      arrtext: ["商品", "详情", "评论"],
      nowIndex: 0
    };
  },
 mounted() {
      this.$nextTick(() => {
        // 初始化，保证刷新页面后内容区和导航键一致
        this.initPage();
      });
      // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      this.$root.eventHub.$on('slideTab', this.slideTab);
    },
  methods: {
      initPage() {
        this.nowIndex = this.$route.path === '/index/one' ? 0 : this.$route.path === '/index/two' ? 1 : this.$route.path === '/index/three' ? 2 : 0;
      },
      tabClick(index) {
        this.nowIndex = index;
        // 点击导航按钮时向swiper组件发射index
        this.$root.eventHub.$emit('changeTab', index);
      },
      slideTab(index) {
        this.nowIndex = index;
        let router = new VueRouter();
        let href = index === 0 ? '/index/one' : index === 1 ? '/index/two' : index === 2 ? '/index/three' :  '/one';
        // 利用路由的push方法更新路径地址
        router.push(href);
      }
  },
  created() {
    this.$nextTick(() => {
      this.navScroll = new BScroll(this.$refs.navWrapper, {
        click: true,
        scrollX: true,
        eventPassthrough: "vertical"
      });
    });
  }
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle {
  text-align: center;
  line-height: 80px;
  font-size: 38px;
}
.mid {
  flex: 1;
  /* float: left; */
}
.nav-wrapper {
  width: 100%;

  overflow: hidden;
}
ul {
  width: 100%;
  min-width: 118%;
  white-space: nowrap;
  display: flex;
  padding-right: 50px;
}

.active {
  color: red;
  border-bottom: 1px solid red;
}
</style>
