<template>
  <div>
      <topbar/>
      <div class="box">
          <div class="box1">
              <div class="denlu1 telephone">
                  <span class="peo1"> <icon-svg icon-class="ren-copy" class="icon2" /> </span>
                  <span class="peo2 den1"><input type="text" placeholder="手机号/邮箱/昵称" @input="oninput"></span>
                  <span class="clear_icon"  @click="clear1"> 1111</span>
                  <span class="peo3"></span>
              </div>

              <div class="kb"></div>

                <div class="denlu1 password">
                  <span class="peo1"> <icon-svg icon-class="cloud-lock" class="icon2" /> </span>
                  <span class="peo2 den2"><input type="text" placeholder="密码" @input="oninput2"></span>
                   <span class="clear_icon2" @click="clear2"> 1111</span>
                  <span class="peo3 lock"></span>
              </div>

              <a class="btn" >登录</a>

              <div class="register">
                  <a href="#">找回密码</a>
                  <a href="#/zuce" class="reg2">注册 —></a>
     
              </div>
          </div>
      </div>

      <div class="box">
            <div class="box1">
          <p class='inf'>
             为保障账户安全，请您不要设置与邮箱密码相同的账户登录密码或支付密码，<a class="inf1">谨防诈骗</a><span>！</span>
          </p>
          <p class='inf3'> 第三方账号登陆</p>

          <div class="inf4">
          <a href="#"><em class="em1"></em> <i>腾讯qq</i>  </a> 
          <a href="#"><em class="em2"></em> <i>支付宝</i> </a> 
          <a href="#"><em class="em3"></em> <i>支付宝</i> </a> 
           </div>
                        <ul>
		<li><i></i>7天无理由退货</li>
		<li><i></i>支持货到付款</li>
		<li><i></i>100%正品</li>
	</ul>
            </div>
      </div>
  </div>
</template>

<script>
import topbar from '../topbar.vue'
export default {
  data () {
    return {
      
    }
  },
  methods:{
      oninput(){
          if($(".den1 input").val()!=''){
            $(".clear_icon").css("opacity","1");  
          }else{
              $(".clear_icon").css("opacity","0"); 
          }
      },
        oninput2(){
          if($(".den2 input").val()!=''){
            $(".clear_icon2").css("opacity","1");  
          }else{
              $(".clear_icon2").css("opacity","0"); 
          }
      },
      clear1(){
          $(".den1 input").val("");
          $(".clear_icon").css("opacity","0");
          console.log(8888)
      },
      clear2(){
           $(".den2 input").val("");
          $(".clear_ico2").css("opacity","0");
          console.log(6666)
      }
  },
  components:{
      topbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 100%;
    height: 500px;
    padding-top:60px; 
}

.box1{
    width: 80%;
    height: 100%;
    margin: 0 auto;
}
.denlu1{
    width: 100%;
    height: 90px;
    background: #fafafa;
    display: flex;
}
 .peo1{
     
    flex: 10%;
    text-align: center;
    line-height: 100px;
 }
 .peo3{
    flex: 10%;
}
.peo2{
flex: 80%;
display: block;
height: 100%;
}
.peo2 input{
    display: block;
    width: 100%;
    height: 100%;
    border: 0 none ;
    background: #fafafa;
    color: #323232;
    font-size: 32px;
    outline: none;
}
.kb{
    width: 100%;
    height: 30px;
}
.lock{
    background: url('../../assets/contentimg/pws.png') no-repeat center center;
    background-size: 80% 39%;
}

 .btn {
    
    background-color: #b9b9b9;
    color: white;
    font-size: 40px;
    text-align: center;
    display: block;
    width: 100%;
    border-radius: 10px;
    margin-top: 60px;
    height: 90px;
    line-height: 90px;

}
.register{
    width: 100%;
    height: 30px;
    margin-top: 30px;
}
.register a{
    color: #000;
    font-size: 15px;
}
.reg2{
    float: right;
}
.inf{
 color: #b9b9b9;
}
.inf1{
    color: red;
}
.inf3{
    margin-top: 60px;
    color: #b9b9b9;
    text-align: center;
}
.inf4{
    margin-top: 60px;
    display: flex;
    height: 160px;
}
.inf4 a{
    flex: 1;
}
.em1{
    display: block;
    width: 100%;
    height: 60%;
    background: url('../../assets/contentimg/qq.png') no-repeat center center;
    background-size: 48% 92%;
}
.em2{
    display: block;
    width: 100%;
    height: 60%;
    background: url('../../assets/contentimg/alipay.png') no-repeat center center;
    background-size: 48% 92%;
}
.em3{
    display: block;
    width: 100%;
    height: 60%;
    background: url('../../assets/contentimg/sina.png') no-repeat center center;
    background-size: 48% 92%;
}
.inf4 i{
    width: 100%;
    height: 40%;
}
.inf4 a{
    color: #000;
    text-align: center
}
.box1 ul {
    width: 100%;
}
.box1 li {   
    height: 100%;
    margin-left: 20px;
    display: inline-block; 
    font-size: 14px;
    text-align: center;
    line-height: 10px;
    color: #969696;
   
}
li i{
    display: inline-block;
    width: 30px;
    height: 30px;
 background: url('../../assets/contentimg/check.png') no-repeat left center;
    background-size: 86% 76%;
}
.clear_icon{
    /* display: none; */
    opacity: 0;
    color: #fff;
    /* display: inline; */
    background: url('../../assets/contentimg/clear_icon.png') no-repeat center center;
    background-size:70%,100%; 
}
.clear_icon2{
    opacity: 0;
    color: #fff;
    /* display: inline; */
    background: url('../../assets/contentimg/clear_icon.png') no-repeat center center;
    background-size:70%,100%; 
}
</style>
