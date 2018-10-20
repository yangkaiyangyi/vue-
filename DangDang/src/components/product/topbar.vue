<template>
  <div class="middle">               
         <div class="nav-wrapper" ref="navWrapper">
             <ul>
        <li class="mid"  v-for="(item,index) in arrtext" :key='index'> {{item}}  </li>
       </ul>
        </div>
   
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      bool: false,
      name: "",
      arrtext: ["商品", "详情", "评论"]
    };
  },
   created () {
    this.$nextTick(() => {
      this.navScroll = new BScroll(this.$refs.navWrapper, {
        click: true,
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.middle {
  
  text-align: center;
  line-height: 80px;
  font-size: 38px;

}
.mid{
    
    flex: 1;
    /* float: left; */
}
.nav-wrapper{
    width: 100%;
    
    overflow :hidden;
}
ul{
    width: 100%;
     min-width :118%;
    white-space :nowrap;
    display: flex;
    padding-right:50px;
}


</style>
