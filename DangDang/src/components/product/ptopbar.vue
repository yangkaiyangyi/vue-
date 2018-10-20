<template>
  <div class="middle">               
         <div class="nav-wrapper" ref="navWrapper">
         <ul>
        <li class="mid" @click="btn(index)" :class="{'active':chooseId==index}" v-for="(item,index) in arrtext" :key='index'> {{item}}  </li>
       </ul>
        </div>
   
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      arrtext: ["商品", "详情", "评论"],
      chooseId: 0
    };
  },

  methods: {
    btn(index) {
      this.chooseId = index;
      this.$store.state.navState = this.chooseId;
    }
  },
  created() {
    this.$nextTick(() => {
      this.navScroll = new BScroll(this.$refs.navWrapper, {
        click: true,
        scrollX: true,
        eventPassthrough: "vertical"
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle {
  text-align: center;
  line-height: 80px;
  font-size: 38px;
}
.mid {
  flex: 1;
  /* float: left; */
}
.nav-wrapper {
  width: 100%;

  overflow: hidden;
}
ul {
  width: 100%;
  min-width: 118%;
  white-space: nowrap;
  display: flex;
  padding-right: 50px;
}

.active {
  color: red;
  border-bottom: 1px solid red;
}
</style>
