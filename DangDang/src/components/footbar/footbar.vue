<template>



  <div class="footer">
    
  <a href="#" v-for ='( img, index) in imgArr' :key="index"> <img :src="img" alt="" srcset=""> </a> 
</div>
  
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        require("../../assets/iconfontimg/fangzi2.png"),
        require("../../assets/iconfontimg/fenlei1.png"),
        require("../../assets/iconfontimg/zdm1.png"),
        require("../../assets/iconfontimg/shopingcar1.png"),
        require("../../assets/iconfontimg/people1.png"),
        
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
  /* flex: 10%; */
  display:flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  /* left:0; */
  z-index: 101;
  opacity: 66;
  padding: 10px 0;
  border-top: 1px solid #ccc;
}
.footer a {
  display: block;
  flex: 1;
}
.footer a img {
  display: block;
  width: 71px;
  height: 66px;
  margin: 0 auto;
}
</style>