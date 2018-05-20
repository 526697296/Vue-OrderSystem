<template>
  <div id="app">
    <zheader></zheader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    zheader:Header
  }
}
</script>

<style>

</style>
