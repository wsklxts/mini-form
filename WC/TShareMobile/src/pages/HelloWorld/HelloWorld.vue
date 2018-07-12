<template>
  <div class="HelloWorld">
    {{$route.path}}
    HelloWorld
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


</style>
