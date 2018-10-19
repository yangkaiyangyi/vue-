<template>



  <div class="footer">
    
  <a href="#"  v-for ='( img, index) in imgArr' @click="torute(index)" :key="index" > <img :src="img"   alt="" srcset="" :class ="{'active':$route.path===roueArr[index]}"> </a> 
</div>
  
</template>

<script>
export default {
  data() {
    return {
      roueArr:[
        '/',
        '/category',
        '/buy',
        '/cart',
        '/my',

      ],
      imgArr: [
        require("../../assets/iconfontimg/fangzi1.png"),
        require("../../assets/iconfontimg/fenlei1.png"),
        require("../../assets/iconfontimg/zdm1.png"),
        require("../../assets/iconfontimg/shopingcar1.png"),
        require("../../assets/iconfontimg/people1.png"),
        
      ]
    };
  },
  methods:{
    torute(index){
      switch(index){
        case 0:
        this.$router.push('/');
        break;
         case 1:
        this.$router.push('/category');
        break;
         case 2:
        //  this.imgArr[2] =require("../../assets/contentimg/iconsuo.png"),
        this.$router.push('/buy')
        
        ;
        break;
         case 3:
        this.$router.push('/cart');
        break;
         case 4:
        this.$router.push('/my');
        break;
      }
    }
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
  background: #fff;
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
.active{
  /* background: grey; */
  border-radius: 30px;
  background:#ccc;
}
</style>