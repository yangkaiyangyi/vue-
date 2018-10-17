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
}
</style>
