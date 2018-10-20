<template>
  <div>
      <header> 
        <a  class="back" @click="back"></a>
        <div class="middle"  v-html="name">  </div>
        <a href="#" class="nav" @click="change" :class="{'active':bool}"></a>
      </header>
      
      <footbar class="top1" v-show="bool"></footbar>
  
      
  </div>
</template>

<script>
import footbar from "./footbar/footbar.vue";
export default {
  data() {
    return {
      bool: false,
      name: "",
      roueArr: ["/", "/category", "/buy", "/cart", "/my"]
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
    changeName() {
      console.log(this.$route.path);
      // if (this.$route.path === "/buy") {
      //   this.name = "值得买";
      // }
      switch (this.$route.path) {
        case "/buy":
          this.name = "值得买";
          break;
        case "/my":
          this.name = "我的当当";
          break;
         case "/denlu":
          this.name = "登陆";
          break;
         case "/zuce":
         this.name = "注册";
          break;
      }
    }
  },
  mounted() {
    this.changeName();
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
  height: 80px;
  border-bottom: 1px solid #d8d8d8;
}
.back {
  flex: 20%;
  background: url("./../assets/contentimg/back.png") no-repeat center center;
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
  background: url("./../assets/contentimg/menu.png") no-repeat center center;
  background-size: 38% 24%;
}
.active {
  background: url("./../assets/contentimg/menu-active.png") no-repeat center
    center;
  background-size: 26% 38%;
}
.top1 {
  position: static !important;
  background: #d8d8d8;
}

</style>
