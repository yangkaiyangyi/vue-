<template>
  <div>
    <hsearch/>
    <div class="homebox">
    <lunbo/>
    <conbar/>  
    <cmiaosa/>
    <footbar/>
    </div>
  </div>
</template>

<script>
import hsearch from "../components/header/hsearch.vue";
import conbar from "../components/contain/conbar.vue";
import cmiaosa from "../components/contain/cmiaosa.vue";
import footbar from "../components/footbar/footbar.vue";
import lunbo from "../components/banner/lunbo1.vue";

export default {
  data() {
    return {};
  },
  components: {
    hsearch,
    lunbo,
    conbar,
    cmiaosa,
    footbar,
  
  },
  mounted(){
    scrollTo(0,0);
    // if(window.location.reload()){
    //   scrollTo(0,0);
    // }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
