<template>
  <div>
       <div class="kk"></div>
       <img-scale v-if="showImg" @clickIt="viewImg" :imgSrc="imgSrc"></img-scale>
     <div>
        <ul>
        <li class="comment-item border-1px" v-for="(item, index) in comments" :key="index">
          <div class="customer-info">
            <img :src="item.avatar" alt="">
            <span class="detail">
              <p class="name">{{item.name}}</p>
              <span class="block">{{item.member}}  加入当当{{item.joinTime}}天</span>
            </span>
            <span class="buyTime">购买于 {{item.buyTime}}</span>
          </div>
          <p class="comment-detail">
            {{item.comment}}
          </p>
          <p class="comment-img">
            <img :src="img" alt="" v-for="(img,index) in item.imgs" @click="clickImg($event)" :key="index">
          </p>
          <div class="type-block">
            <span class="type">型号: {{item.type}}</span>
          </div>
        </li>
      </ul>

     </div>
      
      
  </div>
</template>

<script>
import ImgScale from "./imgScale.vue";
export default {

  data () {
    return {
      showImg: false,
      imgSrc: "",
    }
  },
  methods:{
     clickImg(e) {
      // 获得当前点击的图片地址
      this.showImg = true;
      this.imgSrc = e.currentTarget.src; //获得当前的点击项目 e.currentTarget
    },
    viewImg() {
      this.showImg = false;
    },
  },
  computed: {
    comments () {
      return this.$store.state.productInfo.comments
    }
  },
  components:{
     "img-scale": ImgScale
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kk {
  height: 80px;
}
.comment-item{
  width: 100%;
  height: 500px;
  margin-bottom:160px; 
}
.comment-item img{
  width: 200px;
  height: 200px;
}
.img-scale img{
  height: 62% !important;
}
</style>
