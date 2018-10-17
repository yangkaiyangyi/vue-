<template>
  <div>
    <hsearch/>
    <lunbo/>
    <conbar/>
  </div>
</template>

<script>
 import hsearch from '../components/header/hsearch.vue'
 import conbar from '../components/contain/conbar.vue'
 import lunbo from '../components/banner/lunbo1.vue'
export default {
  data () {
    return {
      
    }
  },
  components:{
    hsearch,
    lunbo,
    conbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
