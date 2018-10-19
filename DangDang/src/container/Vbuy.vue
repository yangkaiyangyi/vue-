<template>
  <div>
    <topbar/>
    <footbar/>
  </div>
</template>

<script>
 import topbar from '../components/topbar.vue'
 import footbar from "../components/footbar/footbar.vue";
export default {
  data () {
    return {
      
    }
  },
  components:{
    topbar,
    footbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
