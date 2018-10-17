<template>
<div>
  <div class="banner">
  
  <div class="bannerImg">
    <transition-group tag="div">
      <span v-for="(v,i) in banners" 
       :key="i"   class="active" :style="{ 'background-image': 'url(' + v + ')','background-repeat':'no-repeat','background-position':'center center','background-size':'100% 100%',opacity:(i+1)==n?'1':'0' }" >
       
      </span>
    </transition-group>
  </div>
 
  <!-- <ul class="bannerBtn clear-fix">
    <li v-for=" num in 3">
      <a href="javascript:;" :style="{background:num==n?'#ff7800':''}" @click='change(num)' class='aBtn'></a>
    </li>
  </ul> -->
  <div class="bannerlast">
  
   <a href="#" > <img src="../../assets/iconfontimg/banner1.jpg" alt="" srcset=""> </a>
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      banners: [ 
        require("../../assets/iconfontimg/lunbo1.jpg"),
        require("../../assets/iconfontimg/lunbo2.jpg"),
        require("../../assets/iconfontimg/lunbo3.jpg")
        ],
      n: 1, // 图片的index。
      bFlag: true, // 锁定
      timer1: "", // 这是bFlag定时器的数据
      timer2: "", // 这是自动播放（next（））定时器的数据
      timer3: "" // 这是打开浏览器时，初始运动定时器的数
    };
  },
  methods: {
    next() {
      // 下一张
      // 为了避免连续点击。让bFlag运动结束后再变为true。
      if (this.bFlag) {
        this.bFlag = false;
        this.clearT(); // 运动之前，清除所有定时器。
        this.n = this.n + 1 == 4 ? 1 : this.n + 1; // 下一张，如果是第4张，就返回第一张。
        // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
        this.timeout();
      }
    },
    clearT() {
      // 清除所有定时器
      clearTimeout(this.timer1);
      clearTimeout(this.timer2);
      clearTimeout(this.timer3);
    },
    timeout() {
      // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
      // 运动时间是1s。
      this.timer2 = setTimeout(() => {
        this.bFlag = true;
      }, 1000);
      this.timer1 = setTimeout(() => {
        this.next();
      }, 3000);
    },
    change(num) {
      // 点击按钮，切换到对应图片，需要获取index。
      if (this.bFlag) {
        this.bFlag = false;
        this.clearT();
        this.n = num; // 将显示图片变为选中的那一张。
        this.timeout();
      }
    }
  },
  mounted() {
    this.timer3 = setTimeout(this.next, 3000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  position: relative;
}
.bannerImg {
  position: relative;
  height: 240px;
  overflow: hidden;
  margin-top:10px;
}
.bannerImg span {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.bannerImg span.active {
  transition: all 1s;
}
.bannerBtn {
  width: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  bottom: 22px;
  text-align: center;
}
.bannerBtn li {
  margin: 0 13px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  float: left;
  background: rgba(255, 255, 255, 0.4);
  list-style: none;
}
.bannerBtn li a {
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 3px;
}
.bannerBtn li a.aBtn {
  transition: all 0.6s ease;
}

.bannerlast{
    height: 300px;
    width: 100%;
    position: relative;
}
.bannerlast a{
    width: 100%;
    height: 100%;
}
.bannerlast img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
