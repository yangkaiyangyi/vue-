<template>
  <div>
      <header class="header"> 
        <a  class="back" @click="back"></a>
       <topbar> </topbar>
        <a  class="nav" @click="change" :class="{'active':bool}"></a>
      </header>
      
<footbar class="top1" v-show="bool"></footbar>
   <swiper/>

      <bottombar/>

      
  
      
  </div>
</template>

<script>
import footbar from "../footbar/footbar.vue";
import bottombar from "./bottombar.vue";
import topbar from "./ptopbar.vue";
 import swiper from './swiper.vue';
import Swiper from '../../../static/swiper.min';
import '../../../static/swiper.min.css';
export default {
  data() {
    return {
      bool: false
    };
  },
  methods: {
    change() {
      if ($(".top1").css("display") == "none") {
        $(".top1").slideDown();
        
      } else {
        $(".top1").slideUp();
      
      }
    },
    back() {
      this.$router.back(-1); //返回上一层
    }
  },
  computed: {
    // nowIndex() {
    //   return this.$store.state.nowIndex;
    // },
    product() {
      return this.$store.state.productInfo;
      console.log(this.productInfo)
    }
  },
  // watch: {
  //   nowIndex(value) {
  //     switch (value) {
  //       case 0:
  //         this.$router.push("/index/goods"),console.log(1) ;
  //         break;
  //       case 1:
  //         this.$router.push("/index/detail"),console.log(2);
  //         break;
  //       case 2:
  //         this.$router.push("/index/comment"),console.log(3);
  //         break;
  //       default:
  //         this.$router.push("/index/goods");
  //     }
  //   }
  // },
 
  components: {
    footbar,
    bottombar,
    topbar,
    swiper
  },
  // mounted(){
  //   document.body.scrollTop = 0
  //           document.documentElement.scrollTop = 0
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  display: flex;
  height: 80px;
  border-bottom: 1px solid #d8d8d8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  background: #ffffff;
}
.back {
  flex: 20%;
  background: url("../../assets/contentimg/back.png") no-repeat center center;
  background-size: 25% 40%;
}

.middle {
  flex: 60%;
  text-align: center;
  line-height: 80px;
  font-size: 38px;
}
.nav {
  flex: 20%;
  background: url("../../assets/contentimg/menu.png") no-repeat center center;
  background-size: 38% 24%;
}
.nav.active {
  background: url("../../assets/contentimg/menu-active.png") no-repeat center
    center;
  background-size: 26% 38%;
}
.top1 {
 position:fixed ;top:80px !important;
  background: #d8d8d8;
  height: 100px;



}
</style>
