<template>
  <div>
      <topbar/>
      <div class="box" v-show="!yzdx">
          <div class="box1">
              <div class="denlu1 telephone">
                  <span class="peo1"> <icon-svg icon-class="ren-copy" class="icon2" /> </span>
                  <span class="peo2 "><input type="text" placeholder="请输入您的手机号" @input="oninput" v-model="telnum"></span>
                   <span class="clear_icon"  @click="clear1"> 1111</span>
                  <span class="peo3"></span>
              </div>

              <div class="kb"></div>

                <div class="denlu1 code " v-show="bool">
                 
                  <span class="peo2"><input type="text" placeholder="请输入图形验证码" @input="oninput2" v-model="wcode"></span>
                   <span class="clear_icon2"  @click="clear2"> 1111</span>
                  
                  <div class="peo3 verify-box" @click="refreshCode">
                      <Sidentify :identifyCode="identifyCode">  </Sidentify>
                  </div>
                  <span class="peo1 rescode " @click="refreshCode"></span>
              </div>

              <a class="btn" @click="btncode" >下一步</a>


                <div class="error" >    
                    <div class="middle">
                        <p> 
                        <span>{{errorText}}</span>       
                        </p>
                    </div>
                </div>
 
              <div class="register">
                 <p class="tips">注册即表示您同意《<a >当当交易条款</a>》和《<a >当当社区条款</a>》</p>
              </div>
          </div>
      </div>

       <!-- 验证短信 -->
         <div class="yzdx" v-show="yzdx">
                <p class="yzdx1">已发送验证码到 <span> {{jmtelnum}} </span>  </p>
                        
                <span class="yzdx2"><input type="text" placeholder="请输入验证码"  @input="oninput3" v-model="telyz" >
                 <span class="clear_icon3" @click="clear3"> 1111</span>
               <button @click="send" class="btnspan" >
                        <span v-if="!sendMsgDisabled" class="btnspan2">{{ '重新获取'+time}}</span>
                        <span v-if="sendMsgDisabled" class="btnspan1">获取验证码</span>
                </button>
                   
                   </span> 
  
                   
                   <a class="yzdx3" href="#/denlu"  >下一步</a>
            
         </div>

      <div class="box">
            <div class="box1">
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
import Sidentify from './identify.vue'
export default {
  data () {
    return {
        time: 60, // 发送验证码倒计时
        sendMsgDisabled: false,
         bool:false,
         wcode:'',
         telnum:'',
         jmtelnum:'',
         telyz:'',
         yzdx:false,
         errorText:'',
         identifyCodes: "1234567890abcdefghijklmsn",
         identifyCode: ""
    }
  },
   mounted() {
    this.identifyCode = "";
    this.refreshCode();
    
  
  },
  methods:{
      //短信验证倒计时
      send() {
       console.log(999) 
      
        let me = this;
            me.sendMsgDisabled = false;
                let interval = window.setInterval(function() {
                if ((me.time--) <= 0) {
                me.time = 60;
                me.sendMsgDisabled = true;
                window.clearInterval(interval);
                 $('.btnspan').removeAttr('disabled');//解除禁用
                }else{
                 $('.btnspan').attr('disabled',true).css('cursor','not-allowed'); //在倒计时禁用
                }
             
                }, 1000);
      },
       oninput3(){
          if($(".yzdx2 input").val()!=''){
            $(".clear_icon3").css("opacity","1"); 
            $(".yzdx3").css("background-color","red")
           
          }else{
              $(".clear_icon3").css("opacity","0"); 
              $(".yzdx3").css("background-color","#b9b9b9")
             
          }
      },
           clear3(){
        this.telyz=''
        $(".clear_icon3").css("opacity","0");
         $('.yzdx2 input').css("border","none")
           $(".yzdx3").css("background-color","#b9b9b9")
              console.log(8888)
       },
       oninput2(){
          if($(".code input").val()!=''){
            $(".clear_icon2").css("opacity","1"); 
           
          }else{
              $(".clear_icon2").css("opacity","0"); 
               $('.code input').css("border","none")
          }
      },
          clear2(){
        this.wcode=''
        $(".clear_icon2").css("opacity","0");
         $('.code input').css("border","none")
              console.log(8888)
     },
       oninput(){
          if(this.telnum!=''){
            $(".clear_icon").css("opacity","1"); 
             $(".btn").css("background-color","red")
          }else{
              $(".clear_icon").css("opacity","0"); 
               $(".btn").css("background-color","#b9b9b9")
                 $('.telephone').css("border","none")
          }
      },
        clear1(){
        this.telnum='';
        $(".clear_icon").css("opacity","0");
        $(".btn").css("background-color","#b9b9b9")
         $('.telephone').css("border","none")
        console.log(8888)
    },
        btncode(){
            if($(".telephone input").val()!=''){
                 this.bool = true;
            }
             if(this.wcode!=this.identifyCode && this.wcode!=''){
                 this.errorText="验证码输入错误"
                $ ('.error').show ().delay (1000).fadeOut ();
                $('.code input').css("border","1px solid red")
               console.log(188)
           }else{
               if(!this.testPhone(this.telnum)&&this.telnum!=''&&this.wcode!=''){
              this.errorText="手机格式不正确，请重新输入"
                $ ('.error').show ().delay (1000).fadeOut ();
                 $('.telephone').css("border","1px solid red")
               }else if(this.telnum!=''&&this.wcode!=''){
                   console.log('ok')
                    this.yzdx = true;
                    this.send();//短信验证倒计时开始
                    // 手机号中间4位加*号
                    this.jmtelnum =  this.telnum.substring(0,3)+"****"+ this.telnum.substring(7); 
               }
           }
        },
     testPhone (phone) {
      return (/^1[1|3|4|5|7|8][0-9]{9}$/).test(phone)
     },
      //随机验证码
      randomNum(min,max){
          return Math.floor(Math.random()*(max-min)+min);
      },
      refreshCode(){
          this.identifyCode = "";
          this.markCode(this.identifyCodes,4);
          console.log(this.identifyCode);
           this.clear2();
          
      },
      markCode(o,l){
          for(let i=0;i<l;i++){
              this.identifyCode += this.identifyCodes[
                  this.randomNum(0,this.identifyCodes.length)
              ]
          }
      }
  }
  ,
  components:{
      topbar,
      Sidentify
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

.box1 ul {
    width: 100%;
    margin-top:130px;
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
.rescode{
    background: url('../../assets/contentimg/refresh_icon.png') no-repeat center center;
    background-size:80%,80%; 
   
}
.clear_icon{
    opacity: 0;
    color: #fff;
    background: url('../../assets/contentimg/clear_icon.png') no-repeat center center;
    background-size:70%,100%; 
}
.clear_icon2{
    opacity: 0;
    color: #fff;
    background: url('../../assets/contentimg/clear_icon.png') no-repeat center center;
    background-size:70%,100%; 
}
.error{
     position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
    display: none;
}
 .error .middle{
     display: table;
    color: white;
    font-size: 30px;
    width: 100%;
    height: 100%;
}
.error .middle p{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
   
}
.error .middle p span{
    background: #000;
    padding:20px 20px;
    border-radius:5%; 
}
/* .loading {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/contentimg/loading2.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 25% 15%;
    z-index: 999;
    display: none;
    } */
.yzdx1{
    height: 120px;
    line-height: 80px;
    font-size: 30px;
    padding-left:60px;
    padding-top: 20px; 
}

.yzdx2 input{
    display: block;
    width: 50%;
    height: 100%;
    border: 0 none ;
    background: #fafafa;
    color: #323232;
    font-size: 32px;
    outline: none;
    float: left;

}
.yzdx2{
    display: block;
    height: 80px;
    padding-left: 40px;
    margin-left: 40px;
}
.yzdx2 button{
    float: left;
    width: 28%;
    height: 100%;
    border: none;
    outline: none;
}
.yzdx2 span{
    display: block;
    width: 10%;
    float: left;
    height: 100%;
}
.yzdx3{
     
    background-color: #b9b9b9;
    color: white;
    font-size: 40px;
    text-align: center;
    display: block;
    width: 80%;
    border-radius: 10px;
    margin-top: 60px;
    height: 90px;
    line-height: 90px;
   margin: 60px 40px 0 80px;
}
.btnspan span{
    width: 100%;
    height: 100%;
    display: block;
    line-height: 90px;
}
.btnspan1{
    background: red;
    color: #fff;
    line-height: 90px;
}
.clear_icon3{
    opacity: 0;
    color: #fff;
    background: url('../../assets/contentimg/clear_icon.png') no-repeat center center;
    background-size:60%,100%; 
}
</style>
