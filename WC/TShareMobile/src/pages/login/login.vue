<template>
    <div class="login">
      <div>
        <section class="logo">
          <img src="../../../static/login/logo.png" alt="">
        </section>

        <section class="userInput">
          <group class="inputItem">
            <x-input title="" placeholder="请输入用户名" focus v-model="userInput.usercode">
              <img slot="label" src="../../../static/login/1.png" alt="">
            </x-input>
          </group>

          <group class="inputItem">
            <form action="">
            <x-input title="" type="password" placeholder="请输入密码" v-model="userInput.password">
              <img slot="label" src="../../../static/login/2.png" alt="">
            </x-input>
            </form>
          </group>
        </section>

        <section class="btn">
          <XButton type="default" @click.native="login()">登录</XButton>
        </section>

        <toast v-model="showToast" type="text" width="5rem" position="bottom">{{toastText}}</toast>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">

  import { XInput,Group,XButton,Toast  } from 'vux'

  export default {
    components: {
      XInput,Group,XButton,Toast
    },
    data(){
      return{
        userInput:{
          compcode: "", usertype: "", usercode: "", password: ""
        },
        showToast:false,
        toastText:"网络超时或账号密码错误！"
      }
    },
    methods:{
      login(){
        console.log(this);
        var params={}
        let  _this=this
        this.axios({
          params: this.userInput,
          method:"post",
          baseURL:"api",
          url:"LoginAutoMobile.aspx"
        }).then(function(data){
          console.log(data);
          if(data.data===1){
            _this.$router.push({path:"/personTask/taskWait"})
          }else{
            _this.showToast=true;
          }
        }).catch(function(err){
          console.log(err);
        })

      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>

  .inputItem{
    margin-top:0.26rem;
  }
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
