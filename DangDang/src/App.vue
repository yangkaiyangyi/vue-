<template>
  <div id="app"> 

    <router-view/>
   <!-- <footbar/> -->
  </div>
</template>

<script>
//加载组件
// import footbar from './components/footbar/footbar.vue'

export default {
   components:{
    // footbar
   },
   created(){
      //在页面加载时读取sessionStorage里的状态信息 
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
    
   },

   
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
 #app{
   height: 100%;
   /* display: flex; */
  
}
a{
  text-decoration: none;
}
ul li{
  list-style: none;
}
/*.app1{
  flex: 10%;
}
.app2{
  flex: 90%;
  position: fixed;
  bottom: 0;
  left: 0;
} */
</style>
