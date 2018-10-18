<template>
  <div>
    <div class="bar1">
    <a class="bar_1" href="#" v-for="(img,index) in imgArr" :key="index"><img :src="img" alt=""></a>
    </div>
     <div class="bar2">
     <a class="bar2_1" href="#">  <img src="../../assets/contentimg/cxkx.png" alt="" srcset=""></a>
     <a class="bar2_2" href="#" ><span ><span ><i>hot</i>
     <em>hot</em></span></span><span >19周年，VIP会员感恩回馈</span>
     </a>
     <a class="bar2_3" href="#">更多</a>
     </div>
     <div class="kb"></div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      imgArr:[require('../../assets/contentimg/c1.png'),
              require('../../assets/contentimg/c2.png'),
              require('../../assets/contentimg/c3.png'),
              require('../../assets/contentimg/c4.png'),
              require('../../assets/contentimg/c5.png'),
              ]
    }
  }
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar1{
  width: 100%;
  height: 160px;
  display: flex;
  border: 1px solid rgb(235, 233, 233);
}
.bar_1{
  flex: 1;
  height: 100%;
}
.bar_1 img{
  width: 100%;
  height: 100%;
}
.bar2{
  width: 100%;
  height: 80px;
  box-sizing:border-box; 
  
}
.bar2 a{
  display: block;
  float: left;
  text-align: center;
  line-height: 100%;
  text-decoration: none;
  box-sizing:border-box;
}
.bar2_1{
  
  width: 30%;
  height: 100%;
}
.bar2_1 img{
  width: 100%;
  height: 100%;
}
.bar2_2{
  width: 60%;
  height: 100%;
  padding: 30px 0px;
}
.bar2_2 span{
  color: red;
  font-size:25px; 
  
}
.bar2_2 i{
  border: 1px solid red;
  font-size: 25px;
}
.bar2_3{
  width: 10%;
  height: 100%;
  font-size: 25px;
  padding: 30px 0;
  color: #9e9a9a;
  box-sizing: border-box;
}
.kb{
  width: 100%;
  height: 20px;
  background: rgba(208, 240, 219, 0.445);
}
</style>
