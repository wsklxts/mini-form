<template>
    <div class="login">
      <div>
        <section class="logo">
          <img src="../../../static/login/logo.png" alt="">
        </section>

        <section class="userInput">
          <group>
            <x-input title="" placeholder="请输入用户名" focus>
              <img slot="label" src="../../../static/login/1.png" alt="">
            </x-input>
          </group>

          <group>
            <x-input title="" type="password" placeholder="请输入密码">
              <img slot="label" src="../../../static/login/2.png" alt="">
            </x-input>
          </group>
        </section>

        <section class="btn">
          <XButton type="default" @click.native="login()">登录</XButton>
        </section>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">

  import { XInput,Group,XButton  } from 'vux'

  export default {
    components: {
      XInput,Group,XButton
    },
    methods:{
      login(){
        alert(1);
      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>

  .logo{
    padding: 1.2rem 2rem;
  }
  .vux-x-input .weui-cell__hd img{
    width: 0.48rem;
    height: 0.48rem;

  }
  .userInput{
    padding:0 0.58rem;
  }
  .weui-cell__hd img{
    padding-right:0.36rem !important;
    vertical-align: middle;
  }
  .btn{
    padding:0.58rem;
  }
</style>
