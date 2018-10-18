<template>
  <div>
      <div class="biaoti"> 
          <img src="../../assets/contentimg/biaoti1.jpg" alt="" srcset="">
      </div>
      
      <div class="lunbo"  @mouseenter='mouseenter' @mouseleave="mouseleave"> 
          <!-- <transition-group tag="p" name="image"> -->
          <div v-show="index==mark" class="lunbo1" v-for ="(item ,index) in imgArr" :key="index">
           
           <a href="#"  v-for='(img,i) in item' :key="i"> <img :src="img" alt=""> </a>
         
           </div>
           <!-- </transition-group> -->
      </div>

      <div>
          <a href="#" class="miaox"> <img src="../../assets/contentimg/maox.jpg" alt="" srcset=""></a>
      </div>
      <daojishi/>
      <tuozhuai/>
      <ccontent/>
    
  </div>
</template>

<script>

import daojishi from './daojishi.vue';
import tuozhuai from './tuozhuai.vue';
import ccontent from './ccontent.vue';
 export default {
    components:{
      daojishi,
        tuozhuai,
        ccontent
    },
  data() {
    return {
      mark: "",
      timer: null,
      imgArr: [
        [
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png"),
          require("../../assets/contentimg/clun1.png")
        ],
        [
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png"),
          require("../../assets/contentimg/clun2.png")
        ],
        [
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png"),
          require("../../assets/contentimg/clun3.png")
        ]
      ]
    };
  },
  methods: {
    AutoPlay() {
      this.mark++;
      if (this.mark > this.imgArr.length - 1) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.AutoPlay, 3500);
    },
    change(index) {
      console.log(index);
      this.mark = index;
    },
    mouseenter() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mouseleave() {
      this.play();
    }
  },
  created() {
    this.play();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.biaoti {
  width: 100%;
  height: 80px;
}
.biaoti img {
  width: 100%;
  height: 100%;
}
.lunbo {
  width: 100%;
  height: 260px;
  overflow: hidden;
  /* position: relative; */
}
.lunbo1 {
  width: 100%;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
}
.lunbo1 a {
  display: block;
  width: 20%;
  height: 50%;
  float: left;
}
.lunbo1 a img {
  width: 100%;
  height: 100%;
}

/* .image-enter-active { 
    transform: translateX(0); 
    transition: all 1.5s ease; 
   } 
   .image-leave-active { 
    transform: translateX(-100%); 
    transition: all 1.5s ease; 
   } 
   .image-enter { 
    transform: translateX(100%); 
    
   } 
   .image-leave { 
    transform: translateX(0); 
   }  */
.miaox {
  display: block;
  width: 100%;
}
.miaox img {
  width: 100%;
  height: 100%;
}
</style>
