<template>
  <div>
    <hsearch/>
    <lunbo/>
    <conbar/>
    
    <cmiaosa/>
    <!-- <footbar/> -->
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
    footbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
