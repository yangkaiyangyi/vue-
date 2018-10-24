<template>
  <div>
    <topbar/>

          <!-- swiper轮播swiper轮播和
          通过增加不同类名，module01， module02，在js中也要对应使之在同一个页面使用 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
         <img :src="item.cartImg" alt="" srcset="">
          </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>

    <div class="buychoice">
      <img :src="item" v-for="(item,index) in listimg" :key="index">
    </div>

    <div class="cuxiao">
         <h2 class="ch2">
           促销专场
           <span>
             更多》
           </span>
         </h2>

    <div class="culist">
      <a class="cua" v-for="(item,index) in listbook" :key="index">
        <h3>  {{item.title}} </h3>
        <h4> {{item.content}} </h4>
        <img :src="item.img" >
      </a>
    </div>
    </div>

      <!-- 秒杀横向滚动商品列表 -->
     <div class="miaosha">
         <h2 class="chf">          
           <span>
             更多》
           </span>
         </h2>
         <div class="shanav" ref="menuWrapper">
              <div class="shagun">
                    <a class="sha" v-for="(item,index) in imgArr" :key="index">
                    <img :src="item.cartImg" >
                    <h3 style="font-size:12px">  {{item.type}} </h3>
                      </a>
              </div>
         </div>
     </div>
   
    <loadmore/>

  <div>better-scroll插件 商品列表横向左右滚动</div>
  <div>swiper 轮播</div>
  <div>封装的上拉刷新，下拉更多组件loadfresh </div>
  <div> 生活总是美好的，积极向上吧青年</div>
   <div style="color:#FFF">0</div>
   <div style="color:#FFF">0</div>
   <div style="color:#FFF">0</div>
   <div style="color:#FFF">0</div>
    <footbar/>
   
  </div>
</template>

<script>
import BScroll from "better-scroll";
import topbar from "../components/topbar.vue";
import loadmore from "../components/loadmore.vue";
import footbar from "../components/footbar/footbar.vue";
import Swiper from "../../static/swiper.min";
import "../../static/swiper.min.css";

export default {
  data() {
    return {
      imgArr: [],
      mySwiper: null,
      listimg:[
        'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
        'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
         'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
        'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
         'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
        'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
         'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
        'https://img61.ddimg.cn/2018/8/25/2018082515383576435.png',
      ],
      listbook:[
        {title:"教辅",
          content:"每满59减10",
          img:"http://img3m8.ddimg.cn/74/0/23435948-1_b_10.jpg"
        },
         {title:"教辅",
          content:"每满59减10",
          img:"http://img3m8.ddimg.cn/74/0/23435948-1_b_10.jpg"
        },
         {title:"教辅",
          content:"每满59减10",
          img:"http://img3m8.ddimg.cn/74/0/23435948-1_b_10.jpg"
        },
         {title:"教辅",
          content:"每满59减10",
          img:"http://img3m8.ddimg.cn/74/0/23435948-1_b_10.jpg"
        },
         {title:"教辅",
          content:"每满59减10",
          img:"http://img3m8.ddimg.cn/74/0/23435948-1_b_10.jpg"
        },
         {title:"教辅",
          content:"每满59减10",
          img:"http://img3m8.ddimg.cn/74/0/23435948-1_b_10.jpg"
        }
      ]
    };
  },
  components: {
    topbar,
    footbar,
    loadmore
  },
  methods: {
    getlist() {
      var that = this;
      axios.get("/api/data").then(res => {
        that.imgArr = res.data.activityLists;
        console.log(that.imgArr);
        that.$nextTick(function() {
          that.initSwiper();
        });
      });
    },
    initSwiper: function() {
      if (this.swiper != null) return;
      var that = this;
      this.mySwiper = new Swiper(".swiper-container", {
        // direction: 'vertical',
        pagination: {
          el: ".swiper-pagination",
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },

        // spaceBetween: 0,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swipe
        paginationClickable: true,
        autoplay: {
          delay: 3000, //3秒切换一次
          disableOnInteraction: false //true为停止
        },
        speed: 500
        // scrollbar: '.swiper-scrollbar'
      });
    },
      //初始化scroll区域
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true ,//结合BScroll的接口使用,是否将click事件传递,默认被拦截了
        // wheel: false //是否监听鼠标滚轮事件
        // startX:0,
        scrollX:true, //横向滚动需要添加这个
      });
      
    },
  },
  mounted() {
     scrollTo(0,0) //回到顶部
      this.getlist();
      //  $(".shagun").css("transform","translate(15px,0px)");//在x轴15度方向固定
      this.$nextTick(() => {
      this._initScroll();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
  width: 100%;
  height: 400px;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
.buychoice{
  width: 100%;
  height: 300px;
 
}
.buychoice img{
  width: 25%;
  height: 50%;
}
.cuxiao{

  width: 100%;
  height: 500px;
  background: url('../assets/contentimg/91.png') no-repeat center center;
  background-size:100% 100%;
  padding: 0 0  30px 40px; 
  text-align: center
}
.ch2{
  width: 100%;
  height: 10%;
  color: #fff;
  text-align: center;
  padding-left: 60px; 
}
.ch2 span{
  float: right;
  display: block;
  height: 100%;
  font-size:20px;
  line-height: 50px; 
}
.culist{
  height: 90%;
}
.cua{
  display: block;
  width: 30%;
  height: 45%;
  background: #fff;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px; 
}
.cua img{
  margin-top: 10px;
  width: 80px;
  height: 100px;
}
.miaosha{
  width: 100%;
  height: 400px;
  background: url('../assets/contentimg/fbi.png') no-repeat center center;
  background-size:100% 100%; 
}
.chf{
  width: 100%;
  height: 10%;
  color: #fff;
  text-align: center;
  padding-left: 60px; 
  background: url('../assets/contentimg/ms.png') no-repeat center center;
  background-size:39% 76%; 
}
.chf span{
  float: right;
  display: block;
  height: 100%;
  font-size:20px;
  line-height: 50px; 
}
.sha{
  height: 90%;
  float: left;
  margin:0 20px;
  text-align: center;
  color: #fff;
  margin-top: 10px; 
  /* position: relative; */
  padding: 20px 0;
}
.sha img{
  height: 220px;
  width: 200px;
}
.shanav{
  width: 100%;
  overflow: hidden;
  height: 100%;
   white-space :nowrap  
}
.shagun{
  width: 1300px;
  height: 100%;
  /* margin-left: 30px; */
}
</style>
