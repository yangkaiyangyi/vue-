<template>
<div class="researchinf">
  <div class="researchBox1">
     <a href="#" class="a1" @click="backba"> <img src="../../assets/contentimg/back.png" alt="" srcset=""> </a>
      <div class="text_box">
     <span><icon-svg icon-class="fangdajing " class="icon1"/></span>
    <input id="search" name="search" type="text" placeholder="音乐值万金" v-model="infor">
       </div>
        <a href="#" class="a2">  搜索  </a>
    </div>

        <div class="content" style="width:100%;height:500px;line-height:500px;text-align:center">
                <ul>
                    <li v-for="(a,index) in product"  :key="index">
                        {{a.title}}
                    </li>
                </ul>
           <h2>我想，我做，我爱，我...生活依然有趣</h2>  
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        infor:''
    };
  },
  methods:{
       backba() {
      $(".homebox").show();
       $(".sousuo").hide();
      $('.researchBox').show();
    },
  },
  computed:{
      product(){
            if(this.infor!=''){
                    var newArr = this.$store.state.activityList.filter(function(a){
							return a.title.indexOf(this.infor)!=-1
							//return 
						}.bind(this))
                    console.log(newArr);
                    return newArr
            }
      
          
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.researchinf{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.researchBox1{
  width: 100%;
  display: flex;
  height: 0.8rem;
  padding-top: 0.15rem;
}
.researchBox1 span{
  display: block;
  width: 1.3em;
  height: 1.3em;
  margin-left: 0.8em;
}
.researchBox1 .a1,.a2{
  width: 20%;
  text-align: center;
  line-height: 1.8em;
  color: #000;
  /* line-height: 0.8em; */
}
.researchBox1 .text_box{
  width: 80%;
  border-radius: 1.4rem;
  text-align: center;
  line-height: 1rem;
  background: #e8ecf0;
  /* vertical-align: middle; */
 position: relative;
 
  
}
.researchBox1 .text_box input{
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
.researchBox1 .a1{
  text-align: center;
  vertical-align: middle;
    display: table-cell;
}
.researchBox1 .a1 img{
  width:33%;
  height: 68%; 
  line-height: 1rem;
}
.researchBox1 .a2{
  display: block;
  text-align: center;
  padding-top:-0.2em; 
}
.researchBox1 .icon1{
  width: 1.3em;
  height: 1.3em;
  color: #b5bec5;
  
}
.researchBox1 .icon2{
  color: #b5bec5;
}
.content{
    width: 100%;
    height: 600px;
}
.content ul li{
    height: 60px;
}
</style>
