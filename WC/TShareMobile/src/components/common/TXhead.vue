<template>
    <div class="TXhead">
        <XHeader :left-options="{showBack: false}">{{titleText}}</XHeader>
    </div>
</template>

<script>
    import { XHeader } from 'vux'

    export default {
      data(){
        return{
        }
      },
      components: {
        XHeader
      },
      props:["titleText"]
    }
</script>

<style scoped>



</style>
