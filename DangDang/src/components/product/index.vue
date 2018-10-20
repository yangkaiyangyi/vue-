<template>
  <div>
      <header> 
        <a  class="back" @click="back"></a>
       <topbar> </topbar>
        <a href="#" class="nav" @click="change" :class="{'active':bool}"></a>
      </header>
      

      <bottombar/>

      <footbar class="top1" v-show="bool"></footbar>
  
      
  </div>
</template>

<script>
import footbar from "../footbar/footbar.vue";
import bottombar from "./bottombar.vue";
import topbar from "./topbar.vue";
export default {
  data() {
    return {
      bool: false,
      name: "",
      arrtext: ["商品", "详情", "评论"]
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
    product() {
      return this.$store.state.productInfo;
    }
  },

  components: {
    footbar,
    bottombar,
    topbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  display: flex;
  height: 80px;
  border-bottom: 1px solid #d8d8d8;
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
  position: static !important;
  background: #d8d8d8;
}
</style>
