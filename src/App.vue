<template>
  <div id="app">
    <info-up-bar></info-up-bar>
    <headers></headers>
    <router-view></router-view>
  </div>
</template>

<script>
import style from './assets/sass/style.scss'
import infoUpBar from "@/components/infoUpBar";
import headers from "@/components/headers";
export default {
  components:{
    headers,
    infoUpBar
  },
  mounted() {
    this.$store.dispatch('loadCatalog');
    this.$store.dispatch('loadCart');
    this.$store.dispatch('loadCatalog_v2')
  }
}
</script>

<style lang="scss">



</style>
