<template>
  <div>
      <!-- 轮播 -->
      <img-scale v-if="showImg" @clickIt="viewImg" :imgSrc="imgSrc"></img-scale>
      <div class="carousel">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <li v-for='(image,index) in product.imgs' :key='index' v-show='index===mark' @mouseenter='stop' @mouseleave="_begin">
                <a><img :src="image"  @click="clickImg($event)"></a>
            </li>
        </transition-group>
        <div class="bullet">
            <span v-for='(item,index) in product.imgs.length' :key="index" :class="{'active':index===mark}" @click='change(index)'></span>
        </div>
    </div>

    <div class="chaoji">
      <img src="../../assets/contentimg/chao.jpg" alt="" srcset="">

    </div>
      
    <article class="prop_detail ">
    <div class="price_info">
      ￥<strong class="cur_price">{{product.nowPrice}}</strong>
      <span class="right">
        <span class="cost_price price-line"> <del> ￥{{product.oldPrice}} </del></span>
        <span class="buyNum">{{product.buyNum}}人已购买</span>
      </span>
    </div>
    <div class="count_down">
      <div class="left">距结束仅剩</div>
      <span>{{hour}}</span>时
      <span>{{min}}</span>分
      <span>{{sec}}</span>秒
    </div>
  </article>
  
    <div class="title">

        <span class="ziyin"> 自营</span>
   {{product.detail}}

    </div>

    

  </div>
  
</template>

<script>
import ImgScale from './imgScale.vue'
export default {
  data() {
    return {
      mark: 0,
      timer: null,
      hour: 10,
      min: 30,
      sec: 60,
     showImg: false,
      imgSrc: ''
    };
  },
  computed: {
    product() {
      return this.$store.state.productInfo;
    }
  },
  methods: {
     clickImg (e) {
      // 获得当前点击的图片地址 
      this.showImg = true
      this.imgSrc = e.currentTarget.src //获得当前的点击项目 e.currentTarget
    },
    viewImg () {
      this.showImg = false
    },

    stop(){
        clearInterval(this.timer)
        this.timer = null
    },
    _begin(){
       this.timer = setInterval(this.autoPlay, 3000);
    },
    change(i) {
      this.mark = i;
    },
    autoPlay() {
      this.mark++;
      if (this.mark === this.product.imgs.length) {
        this.mark = 0;
        return;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 3000);
    }
  },
  mounted() {
    this.play();
     this.interval = setInterval(() => {
      if(this.sec > 0) {
        let newSec = Math.round((this.sec - 0.1)*10)/10 + ''
        // math round 四舍五入 先扩大一倍 在除去自身
        // console.log((newSec + '').split('.')[1] ==  undefined)
        if(newSec.split('.')[0].length == 1) {
          newSec = '0' + newSec
        }
        if((newSec).split('.')[1] ==  undefined){
          this.sec = newSec + '.0'
        } else {
          this.sec = newSec
        }
      } else {
        this.sec = 60
        if(this.min > 0) {
            this.min--
        } else {
          this.min = 60
          this.hour--
        }
      }
      if(this.hour == 0 && this.min == 0 && this.sec == 0)
      clearInterval(this.interval)
    }, 100)
  },
   components: {
    'img-scale': ImgScale
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  height: 600px;
}

li {
  position: absolute;
}

img {
  width: 100%;
  height: 600px;
}

.bullet {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
}

.bullet span {
  width: 10px;
  height: 10px;
  background: #ccc;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
}

.active {
  background: rgb(243, 14, 14) !important;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
.chaoji {
  width: 100%;
  height: 100px;
}
.chaoji img {
  width: 100%;
  height: 100px;
}
.prop_detail {
  width: 100%;
  height: 120px;
  background: #fe4070;
  color: #fff;
  display: flex;

  align-items: center;
  padding: 10px 30px;
}
.price_info {
  font-size: numFont;
  position: relative;
  flex: 1;
}
.cur_price {
  font-size: 88px;
}

.right .cost_price {
  position: absolute;
  margin-left: 10px;
  top: 10px;
  border: 0;
}
.buyNum {
  position: absolute;
  margin-left: 15px;
  top: 60px;
}

.count_down {
  font-size: 30px;
  padding-right: 10px;
  flex: 0.8;
}
.left {
  display: block;
  margin-left: 60px;
  padding-bottom: 20px;
}

.count_down span {
  background: #fff;
  color: #000;
  display: inline-block;
  padding: 5px 5px 5px 5px ;
  font-size:5px;
  margin-right:5px; 
  border-radius: 20%;
  text-align: center;
}
.title{
  width: 100%;
  height: 190px;
  padding: 10px;
  font-size: 25px;
    line-height: 40px;
}
.ziyin{
  background: #fe4070;
  color: #fff;
  padding: 5px 0;
  text-align: center;

}
</style>
