<template>
  <div>
    <div class="bar1">
    <a href="#" v-for="(img ,index) in imgArr" :key="index"><img src="img" alt=""></a>
    </div>
     <div class="bar2">
     <a href="#">  <img src="../../assets/contentimg/cxkx.png'" alt="" srcset=""></a>
     <a href="#" ><span ><span ><i>hot</i>
     <em>hot</em></span></span><span >19周年，VIP会员感恩回馈</span>
     </a>
     <a href="#">更多</a>
     </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      imgArr:[require('../../assets/contentimg/c1.png'),
              require('../../assets/contentimg/c2.png'),
              require('../../assets/contentimg/c3.png'),
              require('../../assets/contentimg/c4.png'),
              require('../../assets/contentimg/c5.png'),
              ]
    }
  }
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
