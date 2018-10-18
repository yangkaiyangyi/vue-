<template>
  <div class="researchBox">
     <a href="#" class="a1"> <img src="../../assets/iconfontimg/ddlogial.png" alt="" srcset=""> </a>
      <div class="text_box">
     <span><icon-svg icon-class="fangdajing " class="icon1"/></span>
    <input id="search" name="search" type="text" placeholder="19周年感恩回馈，5折封顶">
       </div>
        <a href="#" class="a2"> <icon-svg icon-class="fenleitubiao" class="icon2" />  </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.researchBox{
  width: 100%;
  display: flex;
  height: 0.8rem;
  padding-top: 0.15rem;
}
span{
  display: block;
  width: 1.3em;
  height: 1.3em;
  margin-left: 0.8em;
}
.a1,.a2{
  width: 20%;
  text-align: center;
  /* line-height: 0.8em; */
}
.text_box{
  width: 80%;
  border-radius: 1.4rem;
  text-align: center;
  line-height: 1rem;
  background: #e8ecf0;
  /* vertical-align: middle; */
 position: relative;
 
  
}
.text_box input{
  background: #e8ecf0;
  border:0px;outline:none;
  height: 73%;
  width: 83%;
  color: #b5bec5;
  font-size: 0.34rem;
  /* line-height: 1rem; */
  position: absolute;
  top: 0.1rem;
  left: 0.9rem;
  /* padding:  0rem  0rem 0rem 0rem; */
}
.a1{
  text-align: center;
  vertical-align: middle;
    display: table-cell;
}
.a1 img{
  width: 50%;
  height: 86%; 
  line-height: 1rem;
}
.a2{
  display: block;
  text-align: center;
  padding-top:-0.2em; 
}
.icon1{
  width: 1.3em;
  height: 1.3em;
  color: #b5bec5;
  
}
.icon2{
  color: #b5bec5;
}
</style>
