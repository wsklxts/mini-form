<template>
  <div id="app">
    <router-view/>
    <tabs></tabs>
  </div>
</template>

<script>

import tabs from "./components/common/tabs.vue"
import TXhead from "./components/common/TXhead.vue"

export default {
  name: 'App',
  components:{
    tabs,
    TXhead
  },
  methods:{

  }
}


</script>

<style>


</style>
