<template>
  <div id="app"> 

    <router-view/>
   <footbar/>
  </div>
</template>

<script>
//加载组件
import footbar from './components/footbar/footbar.vue'

export default {
   components:{
    footbar
   }
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
