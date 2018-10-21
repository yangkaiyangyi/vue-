<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import one from './goods.vue';
  import two from './detail.vue';
 import three from './comment.vue';
  import Swiper from '../../../static/swiper.min';
  import '../../../static/swiper.min.css';

  export default {
    components: {
      one,
      two,
      three  
    },
    data() {
      return {
        list: [
          {path: '/one', component: one},
          {path: '/two', component: two},
          {path: '/three', component: three}
        
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/index/one' ? 0 : this.$route.path === '/index/two' ? 1 : this.$route.path === '/index/three' ? 2: 0
      });
      mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
        // 左右滑动时将当前slide的索引发送到nav组件
        this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
      });
      // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
      this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
        mySwiper.slideTo(index, 0, false);
      });
      console.log(mySwiper);
    }
  }
</script>

<style scoped>

</style>
