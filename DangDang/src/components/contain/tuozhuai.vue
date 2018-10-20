<template>
  <div class="tzz">
      
     <ul class="tz">
         <li v-for='(img,index) in arr' :key='index'>
           <a href="#"> <img :src="img" alt="" srcset=""></a> 
           <div class="content">
               <p style="font-size:2px"> 深度成长：颠覆思维模式，重新定义成功</p>
               <p class="price"> $1</p>
               <p class="oldprice"> <del> $100 </del></p>
             </div>
         </li>
     </ul>
  
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      arr: [
        require("../../assets/contentimg/tz1.jpg"),
        require("../../assets/contentimg/tz2.jpg"),
        require("../../assets/contentimg/tz3.jpg"),
        require("../../assets/contentimg/tz2.jpg"),
        require("../../assets/contentimg/tz3.jpg"),
        require("../../assets/contentimg/tz1.jpg"),
        require("../../assets/contentimg/tz2.jpg"),
        require("../../assets/contentimg/tz3.jpg"),
        require("../../assets/contentimg/tz2.jpg"),
        require("../../assets/contentimg/tz3.jpg")
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tzz{
       width: 100%;
    height: 300px;
    overflow: hidden;
}
.kb{
  width: 100%;
  height: 20px;
  background: rgba(208, 240, 219, 0.445);
}
.tz{
    width: 800px;
    height: 280px;
    overflow: hidden;
    padding-top:20px; 
    white-space: nowrap; 
/* overflow-x: auto; */
    /* white-space: nowrap;overflow-x:scroll;overflow-y:hidden; */
     /* transform: translate(-649px, 0px) translateZ(0px); */
}
.tz::-webkit-scrollbar{   
width: 0;
height: 0;
display: none;
}
.tz li{
    float: left;
    height: 100%;
    width: 18%;
    margin: 0 5px;
    list-style: none;
}
.tz a{
    width: 100%;
    height: 60%;
}
.tz .content{
    height: 40%;
    width: 100%;
    font-size: 14px;
}
.content p{
    text-align: center;
    /* font-size: 5px; */
    overflow: hidden;
}
.price{color: red;}
.oldprice{
    color: #ddd;
}
img{
    width: 100%;
}

</style>
