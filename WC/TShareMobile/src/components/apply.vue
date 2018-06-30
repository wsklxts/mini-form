
<template>
  <div class="apply">
    {{$route.path}}
    {{a()}}
  </div>
</template>



<script type="text/ecmascript-6">
  export default {
    name:"apply",
    data(){
      return{
        msg:"msg"
      }
    },
    methods:{
      a(){
        for(var i in this){
          console.log(i,this[i]);
        }
        console.log(this);
      }
    }


  }
</script>


<style lang="less" type="text/less">

</style>
