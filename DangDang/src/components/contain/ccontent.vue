<template>
<div>
<div>
  <div class="kg">
      <div class="kb"></div>
      <a href="#" class="a1"> <img src="../../assets/contentimg/g0.jpg" alt="" srcset=""></a>
     <div class="kb"></div>
      <a href="#" class="a2"> <img src="../../assets/contentimg/g01.jpg" alt="" srcset=""></a>
  </div>
   <ul class="ul">
     <li v-for='(img,index) in yArr' :key='index'><a href="#">
       <span class="span1">
         <b>特卖</b>
         <i>￥66</i>
       </span>
       <img :src="img" alt="" srcset=""></a></li>
   </ul>
   
   
   
  <div style="color:red">love you</div>
  
  </div>
  <div>
  <div class="kg">
      <div class="kb"></div>
      <a href="#" class="a1"> <img src="../../assets/contentimg/s1.jpg" alt="" srcset=""></a>
     <div class="kb"></div>
      <a href="#" class="a2"> <img src="../../assets/contentimg/s2.jpg" alt="" srcset=""></a>
  </div>
   <ul class="ul">
     <li v-for='(simg,index) in sArr' :key='index'><a href="#">
       <span class="span1">
         <b>特卖</b>
         <i>￥66</i>
       </span>
       <img :src="simg" alt="" srcset=""></a></li>
   </ul>
   
   
   
  <div>loveyou</div>
 
  </div>
  <div>
  <div class="kg">
      <div class="kb"></div>
      <a href="#" class="a1"> <img src="../../assets/contentimg/ss1.jpg" alt="" srcset=""></a>
     <div class="kb"></div>
      <a href="#" class="a2"> <img src="../../assets/contentimg/ss2.jpg" alt="" srcset=""></a>
  </div>
   <ul class="ul">
     <li v-for='(simg,index) in ssArr' :key='index'><a href="#">
       <span class="span1">
         <b>特卖</b>
         <i>￥66</i>
       </span>
       <img :src="simg" alt="" srcset=""></a></li>
   </ul>
   
   
   
  <div style="color:yellow"> loveyou</div>
  
  </div>
   <div>
  <div class="kg">
      <div class="kb"></div>
      <a href="#" class="a1"> <img src="../../assets/contentimg/s6.jpg" alt="" srcset=""></a>
     <div class="kb"></div>
      <a href="#" class="a2"> <img src="../../assets/contentimg/s61.jpg" alt="" srcset=""></a>
  </div>
   <ul class="ul">
     <li v-for='(simg,index) in dArr' :key='index'><a href="#">
       <span class="span1">
         <b>特卖</b>
         <i>￥66</i>
       </span>
       <img :src="simg" alt="" srcset=""></a></li>
   </ul>
   
   <div style="color:#fff">loveyou</div>
   
  <div>
    <div class="kb" style="height:20px"><p class="con"><span class="text"><i></i><em>到底了，再拉裤子都掉啦</em></span></p></div>
   <footer class="footer new">
    <section class="status-bar">
        <div class="actions-wrap">
                            <a href="#">登录</a>
                <a href="#">注册</a>
                    </div>
        <a class="top" href="javascript:scrollTo(0,0);">TOP</a>
    </section>
    <nav class="b-nav">
        <p>
            <a href="#" ontouchstart="">提建议</a>
            <a class="red" href="#" ontouchstart="">触屏版</a>
            <a href="#" ontouchstart="">电脑版</a>
            <a href="#" ontouchstart="">帮&nbsp;&nbsp;助</a>
        </p>
    </nav>
    <section class="copyright">
        <p>Copyright ©2018 北京当当网信息技术有限公司</p>
		<p>北京市朝阳区北三环东路8号，100028</p>
    </section>
</footer>
  </div>
  <div>9</div>
  <div>9</div>
  <div>9</div>
  </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
        yArr:[require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg'),
        require('../../assets/contentimg/g2.jpg')
       
        ],
         sArr:[require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg'),
        require('../../assets/contentimg/s3.jpg')
       
        ],
        ssArr:[require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg'),
        require('../../assets/contentimg/ss3.jpg')
       
        ],
          dArr:[require('../../assets/contentimg/s62.jpg'),
        require('../../assets/contentimg/s62.jpg'),
        require('../../assets/contentimg/s62.jpg'),
        require('../../assets/contentimg/s62.jpg'),
        require('../../assets/contentimg/s62.jpg'),
        require('../../assets/contentimg/s62.jpg'),
       
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kg{
    width: 100%;
}
.a1{
   display: block;
    width: 100%;
    height: 180px;
}

.a2{
   display: block;
    width: 100%;
    height: 80px;
}
.a1 img{
  width: 100%;
  height: 100%;
}
.a2 img{
  width: 100%;
 height: 100%;
}
.kb{
  width: 100%;
  height: 20px;
  background: rgba(208, 240, 219, 0.445);
}
.ul {
  display: block;
  width: 100%;
}
.ul li{
  width:33%;
  height: 200px;
  float:left;
  list-style:none;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding:0 15px; 
}
.ul li a{
  width: 100%;
  height: 100%;
  text-align: center;
  color: grey;
}
.ul li a img{
  width: 80%;
  height: 80%;
  margin-left:8px; 
}
.span1{
  display: block;
  text-align: center;
  height: 18%;
}
.con{
  text-align: center;
}


</style>
