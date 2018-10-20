<template>
  <div>
      <header> 
        <a  class="back" @click="back"></a>
       <topbar> </topbar>
        <a href="#" class="nav" @click="change" :class="{'active':bool}"></a>
      </header>
      
<footbar class="top1" v-show="bool"></footbar>
    <v-touch >
      <transition >
        <keep-alive>
          <router-view ></router-view>
        </keep-alive>
       </transition>
    </v-touch>

      <bottombar/>

      
  
      
  </div>
</template>

<script>
import footbar from "../footbar/footbar.vue";
import bottombar from "./bottombar.vue";
import topbar from "./ptopbar.vue";
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
    getNavState() {
      return this.$store.state.navState;
    },
    product() {
      return this.$store.state.productInfo;
      console.log(this.productInfo)
    }
  },
  watch: {
    getNavState(value) {
      switch (value) {
        case 0:
          this.$router.push("/index/goods"),console.log(1) ;
          break;
        case 1:
          this.$router.push("/index/detail"),console.log(2);
          break;
        case 2:
          this.$router.push("/index/comment"),console.log(3);
          break;
        default:
          this.$router.push("/index/goods");
      }
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
