<template>
  <div >
      <!-- 图片放大组件 -->
      <img-scale v-if="showImg" @clickIt="viewImg" :imgSrc="imgSrc"></img-scale>
      <!-- 轮播 -->
      <div class="kk"></div>
      <div class="carousel">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <li class="li" v-for='(image,index) in product.imgs' :key='index' v-show='index===mark' @mouseenter='stop' @mouseleave="_begin">
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
    <!-- 抢购倒计时 -->
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
        <div class="kb"></div>
        <div class="box2" >
          <a href="#">
            <div class="addr1"> 送至:</div>
          
           <div class="addr2">
       广东&gt;广州市&gt;其他区县<br>
  
       免运费<br></div>
          
          </a>
      </div>

      <div class="box3">
              <ul>
                <li > <i></i> 商家发货&amp;售后</li>

                <li> <i></i> 正品保障</li>

                <li > <i></i> 闪电发货</li>

                <li ><i></i>  支持礼品卡</li>

                <li ><i></i>  推荐商家</li>

                <li > <i></i>支持7日无理由退货</li>
            </ul>
      </div>
<div class="kb"></div>
      <div class="cbuy">
         <p>品名:  {{product.title}}</p> 
        <section class="quantity">
      <h4>数量：</h4>
          <div class="number_con">
            <span class="minus"  @click="$store.commit('reduce')">-</span>
            <div class="input"><div id="buy_num" > {{$store.state.count}}</div>
            
            </div>
            <span class="plus on"  @click="$store.commit('add')">+</span>
              </div>
    </section>
      </div>

      <div class="kb"></div>
 

  </div>
  
</template>

<script>
import ImgScale from "./imgScale.vue";
export default {
  data() {
    return {
      mark: 0,
      timer: null,
      hour: 10,
      min: 30,
      sec: 60,
      showImg: false,
      imgSrc: "",
      // counter:1
  
    };
  },
  computed: {
    product() {
      return this.$store.state.productInfo;
    }
  },
  methods: {
    // add: function() {
    //         this.counter = parseInt(this.counter) + 1;
    //     },
    // minus(){
    //    if(this.counter > 1){
    //             this.counter = parseInt(this.counter) - 1;
    //         }
    // }
    // ,
    clickImg(e) {
      // 获得当前点击的图片地址
      this.showImg = true;
      this.imgSrc = e.currentTarget.src; //获得当前的点击项目 e.currentTarget
    },
    viewImg() {
      this.showImg = false;
    },

    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    _begin() {
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
    
    scrollTo(0,0);
    this.play();
    this.interval = setInterval(() => {
      if (this.sec > 0) {
        let newSec = Math.round((this.sec - 0.1) * 10) / 10 + "";
        // math round 四舍五入 先扩大一倍 在除去自身
        // console.log((newSec + '').split('.')[1] ==  undefined)
        if (newSec.split(".")[0].length == 1) {
          newSec = "0" + newSec;
        }
        if (newSec.split(".")[1] == undefined) {
          this.sec = newSec + ".0";
        } else {
          this.sec = newSec;
        }
      } else {
        this.sec = 60;
        if (this.min > 0) {
          this.min--;
        } else {
          this.min = 60;
          this.hour--;
        }
      }
      if (this.hour == 0 && this.min == 0 && this.sec == 0)
        clearInterval(this.interval);
    }, 100);
  },
  components: {
    "img-scale": ImgScale
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

.li {
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
  padding: 5px 5px 5px 5px;
  font-size: 5px;
  margin-right: 5px;
  border-radius: 20%;
  text-align: center;
}
.title {
  width: 100%;
  height: 190px;
  padding: 10px;
  font-size: 25px;
  line-height: 40px;
}
.ziyin {
  background: #fe4070;
  color: #fff;
  padding: 5px 0;
  text-align: center;
}
.kk {
  height: 80px;
}
.kb {
  width: 100%;
  height: 10px;
  background: #ddd;
}
.box2 {
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(246, 246, 246);
  border-bottom: 1px solid rgb(246, 246, 246);
  border: 1px solid #f3f1f1;
}

.box2 .addr2 {
  display: block;
  height: 100%;
  float: left;
  width: 230px;
}
.box2 .addr1 {
  display: block;
  height: 100%;
  float: left;
  width: 100px;
  text-align: center;
}
.box2 a {
  display: block;
  width: 100%;
  height: 100%;

  padding-right: 30px;

  /* margin-left: 200px; */
  background: url("../../assets/contentimg/rightarrow.png") no-repeat right
    center;
  background-size: 4% 50%;
  color: grey;
}
.box3 {
  height: 76px;
}
.box3 ul {
  width: 100%;
  height: 100%;
  color: grey;
}
.box3 ul li {
  display: block;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}
.box3 i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
}
.quantity{
  height: 70px;
  line-height: 60px;
  padding: 5px 0;
}
.quantity h4{
  width: 20%;
  height: 100%;
  text-align: center;
  float: left;
  line-height: 60px;
  font-size: 30px;
}
.number_con{
  width: 80%;
  height: 100%;
  float: left;
}
.cbuy p{
  color: red;
  font-size: 30px;
  padding-left: 30px;
}
.quantity span{
  display: inline-block;
  
}
.quantity div{
  display: inline-block;
}
.minus{
  height: 100%;
  width: 60px;
  background: #ddd;
  text-align: center;


}
.plus{
  height: 100%;
  width: 60px;
  background: #ddd;
  text-align: center;

}
.input{
  width: 60px;
  height: 100%;
}
 #buy_num{
  
  width: 100% ;
  height: 100% ;
  /* border: none; */
  text-align: center ;
  /* outline: none; */
}
</style>
