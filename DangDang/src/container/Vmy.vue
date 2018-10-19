<template>
  <div>
    <topbar/>
    <log/>
  </div>
</template>

<script>
 import topbar from '../components/topbar.vue'
 import log from '../components/login/log.vue'
export default {
  data () {
    return {
      
    }
  },
  components:{
    topbar,
    log
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
