<template>
  <div>
      <topbar></topbar>
      <!-- 购物车为空 -->
      <div class="goodsnull" v-show="$store.state.carfull">
        <div class="k1"></div>
        <p class="k2">您还没有购买任何商品</p>
        <div class="k3"> 
          <a href="#/"> 逛一逛 </a>
          <a>我的收藏 </a>
        </div>
      </div>
       <!-- 购物车有货 -->

       <div class="kb"></div>
       <div class="shopc">
       <div class="list" v-show="!$store.state.carfull">
      <input type="checkbox" v-model="name" />

      <a class="list_img"> <img :src="product.cartImg" alt="" srcset=""> </a> 
           <!--商品名称-->
           <div class="goodslist">
            <p class="fl">
                <a >{{product.title}}</a>
            </p>
            <!--商品价格-->
            <p class="fl">
          <span class="dangdang_price">￥{{product.nowPrice}}</span>
         <span class="orign_price"> <del>￥{{product.oldPrice}}</del> </span>
            </p>
           <section class="quantity">
          <div class="number_con">
            <span class="minus"  @click="$store.commit('reduce')">-</span>
            <div class="input"><div id="buy_num" > {{$store.state.count}}</div>
            
            </div>
            <span class="plus on"  @click="$store.commit('add')">+</span>
              </div>
    </section>
            </div>
            <div class="btn" @click="remove">删除 </div>
       </div>

       <p class="spu">       
        <span class="spu_tag">加价购</span>
        <span class="right_arrow fr">购买本商品可选加价购》 </span>
       </p>

        </div>
       <div class="jiesuan">
       <div class="j1"> <input type="checkbox" v-model="isclear" /><span>全选</span></div> 
        <p class="j2"> 合计 <span class="all"> ￥{{sum}}</span> </p>
        <a class="j3" href="#/denlu">结算 </a>

      

       </div>
      <!-- <footbar/> -->
  </div>
</template>

<script>
import topbar from "../components/topbar.vue";
import footbar from "../components/footbar/footbar.vue";
export default {
  data() {
    return {
      name:[],
      isclear:false
    };
  },
  components: {
    footbar,
    topbar
  },
   computed: {
    product() {
      return this.$store.state.productInfo;
      console.log(this.$store.state.productInfo)
    },
    sum(){
      if(this.name.length>0){
         return this.product.nowPrice * this.$store.state.count;
         this.isclear = true;
      }
       
    }
  },
  methods:{
    remove(){
      // $(".shopc").remove();
      this.$store.state.carfull = true;
     $(".all").text("￥0")
      console.log(7777)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodsnull {
  width: 100%;
  height: 660px;
  background: url("../assets/contentimg/cart_null.gif") no-repeat center center;
  background-size: 100% 100%;
  color: rgb(110, 103, 103);
}
.k1 {
  height: 400px;
}
.k2 {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
}
.k3 {
  padding: 0 60px;
}
.k3 a {
  display: inline-block;
  width: 300px;
  height: 120px;
  text-align: center;
  line-height: 120px;
  font-size: 40px;
  color: rgb(110, 103, 103);
  border: 1px solid rgb(107, 6, 6);
  border-radius: 10%;
}
.kb {
  width: 100%;
  height: 10px;
  background: #ddd;
}
.list {
  display: flex;
}
.list input {
  margin-top: 30px;
  flex: 10%;
}
.list_img {
  display: block;
  flex: 40%;
}
.list_img img {
  width: 100%;
  height: 100%;
}
.goodslist {
  display: flex;
  flex: 40%;
  height: 200px;
  line-height: 40px;
  flex-direction: column;
}
.f1 {
  flex: 1;
  margin-top: 30px;
}
.btn {
  flex: 10%;
  line-height: 200px;
  text-align: center;
  vertical-align:middle;
  color: red;
}
.dangdang_price {
  color: red;
}
.spu {
  /* border-top:1px solid #cccccc;  */
  text-align: center;
  margin-top: 50px;
}
.spu_tag {
  border: 2px solid red;
  color: red;
  border-radius: 10%;
}
.jiesuan{
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  font-size:35px; 
  z-index: 101;
}
.j1{
  flex: 40%;
  padding:15px 0; 
}
.j1 input{
  width: 30px;
  height: 30px;
}
.j2{
  flex: 40%;
  padding:15px 0; 
}
.all{
  color: red;
}
.j3{
  background: red;
  flex: 20%;
  text-align: center;
  padding:15px 0; 
}

.quantity{
  height: 70px;
  line-height: 60px;
  padding: 5px 0;
}
.quantity h4{
  width: 20%;
  height: 100%;
  text-align: center;
  float: left;
  line-height: 60px;
  font-size: 30px;
}
.number_con{
  width: 80%;
  height: 100%;
  float: left;
}
.cbuy p{
  color: red;
  font-size: 30px;
  padding-left: 30px;
}
.quantity span{
  display: inline-block;
  
}
.quantity div{
  display: inline-block;
}
.minus{
  height: 100%;
  width: 60px;
  background: #ddd;
  text-align: center;


}
.plus{
  height: 100%;
  width: 60px;
  background: #ddd;
  text-align: center;

}
.input{
  width: 60px;
  height: 100%;
}
 #buy_num{
  
  width: 100% ;
  height: 100% ;
  /* border: none; */
  text-align: center ;
  /* outline: none; */
}
</style>
