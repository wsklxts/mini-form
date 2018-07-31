<template>
    <div class="login">
      <div>
        <section class="logo">
          <img src="../../../static/login/logo.png" alt="">
        </section>

        <section class="userInput">
          <group class="inputItem">
            <x-input title="" placeholder="请输入用户名" required ref="inp" v-model="userInput.usercode">
              <img slot="label" src="../../../static/login/1.png" alt="">
            </x-input>
          </group>

          <group class="inputItem">
            <form action="">
            <x-input title="" type="password" required  placeholder="请输入密码" ref="inp2" v-model="userInput.password">
              <img slot="label" src="../../../static/login/2.png" alt="">
            </x-input>
            </form>
          </group>
        </section>

        <section class="btn">
          <XButton type="default" @click.native="login()">登录</XButton>
        </section>

        <loading :show="loginIn" text="登录中"></loading>
        <toast v-model="showToast" type="warn" width="5rem" position="middle">{{toastText}}</toast>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">
  import qs from 'qs'

  console.log(qs);

  import { XInput,Group,XButton,Toast,Loading   } from 'vux'

  export default {
    components: {
      XInput,Group,XButton,Toast,Loading
    },
    data(){
      return{
        userInput:{
          compcode: "", usertype: "", usercode: "", password: ""
        },
        showToast:false,
        loginIn:false,
        toastText:"网络超时或账号密码错误！"
      }
    },
    mounted(){
      this.$refs.inp.$refs.input.focus()
    },
    methods:{
      login(){
        if(this.userInput.usercode=="" || this.userInput.password==""){
          this.toastText="请输入账号密码"
          this.showToast=true
          if(this.userInput.usercode==""){
            this.$refs.inp.$refs.input.focus()
            return
          }
          if(this.userInput.password==""){
            this.$refs.inp2.$refs.input.focus()
            return
          }
          return
        }


        this.loginIn=true
        let  _this=this


        this.axios({
          method:"post",
          data: qs.stringify(this.userInput),
          url:"LoginAutoMobileJSON.aspx"
        }).then(function(data){
          _this.loginIn=false
          if(data.data.data[1]["isAutoLogin"]==1){
            _this.$store.commit("isAutoLogin","1")
            console.log(_this.$route);
            if(_this.$route.query.redirect){
              _this.$router.push({path:_this.$route.query.redirect})
            }else{
              _this.$router.push({path:"/personTask/taskWait"})
            }
          }else{
            _this.showToast=true;
            _this.toastText="账号密码错误"
          }
        }).catch(function(err){
          console.log(err);
          _this.loginIn=false
          _this.toastText="网络超时"
          _this.showToast=true;
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
