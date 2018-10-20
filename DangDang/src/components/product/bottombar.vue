<template>
  <div>
      <div class="bottom">
          <div class="b1">
              <a > <span></span> <i>店铺</i> </a>
               <a > <span></span> <i>收藏</i> </a>
              <a > <span></span> <i>购物车</i> </a>
          </div>
            <div class="b2">立即购买 </div>
            <div class="b3"> 加入购物车</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
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

</style>