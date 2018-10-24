<template>
  <div>
    <hsearchtwo/>
    <test/>
      <footbar/>
  </div>
</template>

<script>
 import hsearchtwo from "../components/header/hsearchtwo.vue";
 import footbar from "../components/footbar/footbar.vue";
   import test from "./Vtest.vue";
export default {
  data () {
    return {
      
    }
  },
  components:{
    footbar,
    hsearchtwo,
    test
  },
  mounted(){
    scrollTo(0,0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
