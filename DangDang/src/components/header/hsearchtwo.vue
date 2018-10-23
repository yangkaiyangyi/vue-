<template>
  <div>
      <header> 
        <a  class="back" @click="back"></a>
        <div class="middle">
         <div class="text_box ">
     <span><icon-svg icon-class="fangdajing " class="icon1"/></span>
    <input id="search" name="search" type="text" placeholder="搜索商品/店铺/种类">
       </div>
       </div>
        <a  class="nav" @click="change" :class="{'active':bool}"></a>
      </header>
      
      <footbar class="top1" v-show="bool"></footbar>
  
      
  </div>
</template>

<script>
import footbar from "../footbar/footbar.vue";
export default {
  data() {
    return {
      bool: false
    
    };
  },
  methods: {
    change() {
      // this.bool= !this.bool;
      if ($(".top1").css("display") == "none") {
        // this.bool= true;
        $(".top1").slideDown();
      } else {
        
        $(".top1").slideUp();
        // this.bool= false;
      }
    
    },
    back() {
      this.$router.back(-1); //返回上一层
    },
  },
  components: {
    footbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  display: flex;
  height: 100px;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px 0 16px 0;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 101;
}
.back {
  flex: 20%;
  background: url("../../assets/contentimg/back.png") no-repeat center center;
  background-size: 25% 40%;
}

.middle {
  flex: 80%;
  text-align: center;
  line-height: 80px;
  font-size: 38px;
}
.nav {
  flex: 20%;
  background: url("../../assets/contentimg/menu.png") no-repeat center center;
  background-size: 38% 24%;
}
.active {
  background: url("../../assets/contentimg/menu-active.png") no-repeat center
    center;
  background-size: 26% 38%;
}
.top1 {
  position:fixed ;top:100px !important;
  background: #d8d8d8;
  height: 100px;
}
.text_box{
  width:100%;
  border-radius: 1.4rem;
  text-align: center;
  line-height: 1rem;
  background: #e8ecf0;
  /* vertical-align: middle; */
 position: relative;
 
  
}
.text_box input{
  background: #e8ecf0;
  border:0px;outline:none;
  height: 73%;
  width: 80%;
  color: #b5bec5;
  font-size: 0.34rem;
  /* line-height: 1rem; */
  position: absolute;
  top: 0.1rem;
  left: 1.1rem;
  /* padding:  0rem  0rem 0rem 0rem; */
}
.icon1{
  width: 1.3em;
  height: 1.3em;
  color: #b5bec5;
  margin-right:400px; 
  
}
</style>
