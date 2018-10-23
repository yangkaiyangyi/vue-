<template>
  <div >

    <div class="kk"></div>
      <div class="box">
    
      <div class="IMG">
        <img :src="item" v-for="(item, index) in product.imgDetail" :key="index" class="img1">
        <p class="imglis">
          <img src="http://p0.jmstatic.com/templates/jumei/images/baoxian_pop.jpg" alt="">
          <img src="http://f0.jmstatic.com/btstatic/h5/htbsqH5.jpg" >
          <img src="http://p0.jmstatic.com/mobile/other/other/marketprice_h5.png" alt="">
        </p>
      </div>
   
       </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  computed:{
    product(){
        return this.$store.state.productInfo
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kk {
  height: 80px;
}
.box{
  display :flex;
  overflow: hidden;
   width: 100%;
}
.detail_wrapper{
  flex: 1;
}
.IMG{
  width: 100%;
}
.img1{
  width: 100%;
  height: 300px;
}
.imglis{
  width: 100%;
  height: 600px;
}
.imglis img{
  height: 200px;
  width: 100%;
}
</style>
