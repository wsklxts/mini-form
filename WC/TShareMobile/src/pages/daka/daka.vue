
<template>
  <div class="daka">
    {{$route.path}}
    <tabs></tabs>
  </div>
</template>



<script type="text/ecmascript-6">
  import tabs from "../../components/common/tabs.vue"
  export default {
    components:{
      tabs
    }
  }
</script>


<style lang="less" type="text/less">

</style>
