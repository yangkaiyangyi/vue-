<template>
  <div>
      <div class="bottom">
          <div class="b1">
              <a > <span></span> <i>店铺</i> </a>
               <a > <span></span> <i>收藏</i> </a>
              <a > <span></span> <i>购物车</i> </a>
          </div>
            <div class="b2"   @click="change">立即购买 </div>
            <a class="b3" > 加入购物车</a>
            
      </div>
    
      <div class="carchoice"  >
           <div class="box1">
             <div class="product_imgs" >
              <img :src="product.cartImg" alt="">
            </div>
        <h2 class="product_price">￥{{product.nowPrice}}</h2>
         <div class="select_val">
                <strong class="selected_title">{{chooseTitle}}</strong>
                <strong class="selected_val">{{chooseType}}</strong>
          </div>

          <i class="close"  @click="change"></i>
                </div>
           <div class="select_option_wrap">
            <div class="item_content border-1px">
              <div class="property_title">分类</div>
               <ul class="property_name">
                 <li class="property_item" v-for="(type, index) in product.types" :key="index"
                    @click="chooseTitle='已选',chooseType=type, chooseClick(index)" :class="isChoose==index?'isChoose':''">
                   {{type}}
                 </li>
               </ul>
            </div>
            </div>

               <div class="buy-num">
              <span class="num_name">购买数量</span>
              <div class="num_content">
                <span class="shopping shop_reduce"  @click="reduce">
                  <img src="../../assets/contentimg/reductIcon1.png" alt="">
                </span>
                <span class="input">{{buyNum}}</span>
                <span class="shopping shop_add"  @click="add">
                  <img src="../../assets/contentimg/addIcon.png" alt="">
                </span>
              </div>
            </div>
             <div class="submit">
            <a class="add1 add2" @click="addCartAtOnce">加入到购物车</a>
            <a class="add1 add3" @click="carfull" href="#/cart"  >立即购买</a>
          </div>
      
          </div>
         
      
  </div>
</template>

<script>

export default {
  data() {
    return {
      chooseType: '分类',
      chooseTitle: '请选择',
      isChoose: -1,
      buyNum: 1,
      reduceIcon: 'static/icon/reductIcon1.png',
      cartCar: '购物车',
      clickTime: false,
    };
  },
   computed: {
    product() {
      return this.$store.state.productInfo;
    }
  },
  methods:{
      reduce(){
          if(this.buyNum>1){
               this.buyNum--
          }  
      },
      add(){
          this.buyNum++
      },
     change() {
      if ($(".carchoice").css("display") == "block") {
       
        $(".carchoice").slideUp();
      } else {
        $(".carchoice").slideDown();
       
      }
    }
      ,
      carfull(){
          this.$store.state.carfull = false;
        //   this.$store.state.goodsList.push(this.$store.state.productInfo)
          console.log(this.$store.state.goodsList)
      },
      // 真正的添加到购物车
    addCartAtOnce () {
      //  添加  商品信息到购物车
      this.$store.state.carfull = false;
      let productInfo = {
        id: this.product.id,
        img: this.product.cartImg,
        title: this.product.title,
        type: this.chooseType,
        quantity: this.buyNum,
        price: this.product.nowPrice,
        inventory: this.product.inventory
      }
      
      let flag = true;
        // console.log(this.$store.state.goodsList)
         this.$store.state.goodsList.forEach(element => {
              console.log(999);
             if(productInfo.id===element.id){
                flag = false;
                
                 
             }
         });
       if(flag){
            this.$store.state.goodsList.push(productInfo)
               console.log(this.$store.state.goodsList)
              console.log("添加到购物车成功!")
       
       }else{
           alert("购物车已经有了，客客")
       }
         
       
    },
    goCartPage () {
      this.$router.replace('/Vcart')
    
    },
    chooseClick (index) {
      this.isChoose = index
    }
  },
  
  
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    display: flex;
    z-index: 101;
    background: #fff;
}
.b1{
    flex: 40%;
    height: 100%;
    display: flex;
}
.b1 a{
    flex: 1;
    
}
.b1 a span {
    display: block;
    width: 100%;
    height: 50%;
    background: url('../../assets/contentimg/icon2.png') no-repeat center center;
    background-size: 40% 60%;
}
.b1  a i{
    display: block;
    text-align: center;
    color: grey;
}
.b2{
    flex: 30%;
    height: 100%;
    color: #fff;
    background: rgb(124, 124, 9);
     text-align: center;
    line-height: 100px;
    font-size: 30px;
}
.b3{
    flex: 30%;
    height: 100%;
    color: #fff;
    background: red;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
}
.carchoice{
    display: none;
    position: fixed;
    width: 100%;
    height: 800px;
    z-index: 300;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;

}

.box1{
    width: 100%;
    height: 300px;
}
.close{
    display: block;
    width: 50px;
    height: 50px;
    background: url('../../assets/contentimg/111.png') no-repeat center center;
    float: right;
}
.product_imgs {
    width: 300px;
    height: 300px;
    float: left;
}
.product_imgs img{
    width: 100%;
    height: 100%;
}
.product_price {
   float: left;
    font-size: 50px;
    color: red;
    height: 100%;
   width: 160px;
   padding: 30px 0;
}
.select_val{
    float: left;
 width: 200px;
 height: 100%;
 padding: 50px 0;
 text-align: center;
 color: rgb(42, 40, 150);
 font-size: 30px;
}
.select_option_wrap{
    width: 100%;
    height: 200px;
}
.select_option_wrap ul li{
    float: left;
    width: 200px;
    height: 40px;
}
.isChoose{
    background: red;
}
.num_content{
    width: 300px;
    height: 90px;
}
 .num_content .input{
     display: inline-block;
 }
.shop_reduce{
    display: inline-block;
    width: 80px;
    height: 80px;
}
.shop_reduce img{
    width: 100%;
    height: 100%;
}
.shop_add{
    display: inline-block;
    width: 80px;
    height: 80px;
}
.shop_add img{
    width: 100%;
    height: 100%;
}
.submit{
    width: 100%;
    height: 140px;
    display: flex;

}
.submit .add1{
    display: block;
flex: 1;
text-align: center;
line-height: 140px;
font-size: 30px;
}
.add2{
    background: #fff;
    color: red;
}
.add3{
    background: red;
    color: #fff;
}
</style>