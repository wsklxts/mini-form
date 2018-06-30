<template>
  <div id="app">
    <router-view/>
    <tabs></tabs>
  </div>
</template>

<script>

import tabs from "./components/tabs.vue"

export default {
  name: 'App',
  components:{
    tabs
  }
}

</script>

<style>


</style>
