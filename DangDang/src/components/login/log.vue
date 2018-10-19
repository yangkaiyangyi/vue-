<template>
  <div>
      <div class="box">
            <a href="#" class="log">登陆/注册</a>
      </div>

      <div class="box1">
          <a href="#"><em>0</em>收藏的商品</a>
          <a href="#"><em>0</em>关注的店铺</a>
          <a href="#"><em>5</em>我的足迹</a>
      </div>

      <div class="box2">
          <a href="#">
            <img src="../../assets/contentimg/wd1.png" alt="" srcset="">
          我的订单
          <em>查看全部购买商品</em>
          </a>
      </div>
      <div class="box1">
          <a  href="#" class='fu'><em>0</em>待付款</a>
          <a href="#" class='fu' ><em>0</em>代收款</a>
          <a href="#" class='fu'><em>0</em>退换货</a>
      </div>
      <div class="kb"></div>

        <div class="box2" style="height:40px;line-height:40px">
          <a href="#">
            <img src="../../assets/contentimg/wd1.png" alt="" srcset="">
          会员中心
          <em style="color:#fff;margin-top:5px">查看全部购买商品</em>
          </a>
      </div>

       <div class="kb"></div>
         <!-- 循环开始1 -->
         <div class="box2"  v-for='(item ,index) in imgArr' :key='index' style="height:40px;line-height:40px">
          <a href="#">
            <img src="../../assets/contentimg/wd1.png" alt="" srcset="">
          {{item}}
          <em style="color:#fff;margin-top:5px">查看全部购买商品</em>
          </a>
      </div>

      <div class="kb"></div>
      <!-- 循环开始2 -->
        <div class="box2"  v-for='(item ,index) in imgArr' :key='index' style="height:40px;line-height:40px">
          <a href="#">
            <img src="../../assets/contentimg/qiang7.jpg" alt="" srcset="">
          {{item}}
          <em style="color:#fff;margin-top:5px">查看全部购买商品</em>
          </a>
      </div>
      
      <!-- 客服反馈 -->
       <div class="kb"></div>
      <div class="box2" style="height:40px;line-height:40px">
          <a href="#">
            <img src="../../assets/contentimg/wd2.png" alt="" srcset="">
        客服反馈
          <em style="color:#fff;margin-top:5px">查看全部购买商品</em>
          </a>
      </div>
    


    <!-- 底部 -->

    <div class="kb" style="height:20px"><p class="con"><span class="text"><i></i><em>到底了，再拉裤子都掉啦</em></span></p></div>
   <footer class="footer new">
    <section class="status-bar">
        <div class="actions-wrap">
                            <a href="#">登录</a>
                <a href="#">注册</a>
            <a class="top" href="javascript:scrollTo(0,0);">TOP</a>     
                    </div>
       
    </section>
    <nav class="b-nav">
        <p>
            <a href="#" ontouchstart="">提建议</a>
            <a class="red" href="#" >触屏版</a>
            <a href="#" ontouchstart="">电脑版</a>
            <a href="#" ontouchstart="">帮&nbsp;&nbsp;助</a>
        </p>
    </nav>
    <section class="copyright">
        <p>Copyright ©2018 北京当当网信息技术有限公司</p>
		<p>北京市朝阳区北三环东路8号，100028</p>
    </section>
    </footer>

     <log/>
  <div class="last">我</div>
  <div class="last">爱</div>
  <div class="last">你</div>
  <div class="last">的</div>

  </div>
</template>

<script>
import log from "../contain/gotop.vue";
export default {
  data() {
    return {
      imgArr: ["我的礼券", "积分兑现", "我的电子书", "我的礼品卡", "收货地址"]
    };
  },
  components: {
    log
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: 260px;
  background: url("../../assets/contentimg/user-bg.jpg") center center;
  background-size: 100% 100%;
  display: flex;
  /* z-index: 102; */
  justify-content: center; /*水平居中*/
  align-items: center; /*垂直居*/
}
.log {
  width: 240px;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 50px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  font-size: 30px;
}
.box1 {
  width: 100%;
  height: 100px;
  display: flex;
}
.box1 a {
  flex: 1;
  color: #000;
  text-align: center;
  line-height: 50px;
}
.box1 a em {
  display: block;
  width: 100%;
}
.box2 {
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(246, 246, 246);
  border-bottom: 1px solid rgb(246, 246, 246);
}
.box2 a {
  width: 100%;
  height: 60px;
  padding: 15px 5px;
  line-height: 60px;
  color: black;
}
.box2 a img {
  height: 60%;
  width: 5%;
  vertical-align: middle;
}
.box2 a em {
  display: inline-block;
  float: right;
  padding-right: 30px;
  margin-right: 20px;
  background: url("../../assets/contentimg/rightarrow.png") no-repeat right
    center;
  background-size: 10% 38%;
  color: grey;
}
.fu {
  height: 100px;
  padding-top: 10px;
}
.fu em {
  background: url("../../assets/contentimg/fukuan7.png") no-repeat center center;
  background-size: 21% 102%;
}
.kb {
  width: 100%;
  height: 20px;
  background: #eee;
}

.kb {
  width: 100%;
  height: 20px;
  background: rgba(208, 240, 219, 0.445);
}
.ul {
  display: block;
  width: 100%;
}
.ul li {
  width: 33%;
  height: 200px;
  float: left;
  list-style: none;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 0 15px;
}
.ul li a {
  width: 100%;
  height: 100%;
  text-align: center;
  color: grey;
}
.ul li a img {
  width: 80%;
  height: 80%;
  margin-left: 8px;
}
.span1 {
  display: block;
  text-align: center;
  height: 18%;
}
.con {
  text-align: center;
  position: relative;
}

.con i {
  display: block;
  width: 60px;
  height: 40px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 160px;
  background: url(../../assets/contentimg/icon_smile.png) center center
    no-repeat;
  background-size: contain;
}
.footer .status-bar {
  background: #ffffff;
  height: 100px;
  line-height: 100px;
  overflow: hidden;
  color: #4d525d;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  font-size: 14px;
  color: #e5e5e5;
}
.actions-wrap {
  padding: 0 0px 0 30px;
}
.footer .status-bar .top {
  float: right;
  padding: 0 0.3333rem 0 0.8333rem;
  background: url(../../assets/contentimg/goto1.png) transparent 0.1667rem
    center no-repeat;
  background-size: 0.4167rem;
  font-size: 14px;
  padding-left: 0.6667rem;
}
.footer .status-bar a {
  color: #4d525d;
}
.red {
  color: red;
}
.b-nav {
  text-align: center;
}
.b-nav a {
  color: black;
}
.red {
  color: red !important;
}
.copyright {
  text-align: center;
  color: #999;
}
.last {
  color: #ffffff;
}
</style>
