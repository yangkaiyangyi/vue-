<template>
  <div>
      <topbar/>
      <div class="box">
          <div class="box1">
              <div class="denlu1 telephone">
                  <span class="peo1"> <icon-svg icon-class="ren-copy" class="icon2" /> </span>
                  <span class="peo2"><input type="text" placeholder="手机号/邮箱/昵称" v-model="telephone"></span>
                  <span class="peo3"></span>
              </div>

              <div class="kb"></div>

                <div class="denlu1 password">
                  <span class="peo1"> <icon-svg icon-class="cloud-lock" class="icon2" /> </span>
                  <span class="peo2"><input type="password" placeholder="请输入6-20位密码"></span>
                  <span class="peo3 lock"></span>
              </div>
            <div class="kb"></div>
               <div class="denlu1 telephone">
                  <span class="peo1"> <icon-svg icon-class="cloud-lock" class="icon2" /></span>
                  <span class="peo2"><input type="password" placeholder="确认密码"></span>
                  <span class="peo3"></span>
              </div>


              <a class="btn" >注册</a>

              <div class="register">
                 <p class="tips">注册即表示您同意《<a >当当交易条款</a>》和《<a >当当社区条款</a>》</p>
              </div>
          </div>
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
export default {
  data () {
    return {
      
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
</style>
