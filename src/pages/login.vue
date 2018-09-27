<template>
  <div class="login">
    <img class="login_left" src="./../assets/login.png" />
    <div class="login_right">
      <img class="login_logo" src="./../assets/logo.png" />
      <el-tabs stretch v-model="activeName" class="login_tabs">
        <el-tab-pane label="账号登录" name="login">
          <div class="login_form">
            <div class="login_user">
              <img src="./../assets/login_user.png" />
              <el-input v-model="phone" placeholder="点击输入手机号"></el-input>
            </div>
            <div class="login_user">
              <img src="./../assets/suo.png" />
              <el-input v-model="password" placeholder="点击输入密码"></el-input>
            </div>
            <el-button v-dbClick class="login_button" @click="submitForm">
              <i class="el-icon-loading" v-if="comfired"></i>
              <span>登录</span>
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扫描登录" name="ddLogin">
          <div id="login_dd"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
    data () {
      return {
        activeName:'ddLogin',
        phone:'',
        password:'',
        comfired:false
      }
    },
    mounted() {
      var url = encodeURIComponent('https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoacfpjp0vai0jlebkm&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=https://management.yanss.cn/manager/index')
      var obj = DDLogin({
            id:"login_dd",//这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
            goto: url,
            style: "border:none;background-color:#FFFFFF;",
            width : "365",
            height: "400"
        })
        var hanndleMessage = function (event) {
          var origin = event.origin;
          // console.log("origin", event.origin);
          if( origin == "https://login.dingtalk.com" ) { //判断是否来自ddLogin扫码事件。
              var loginTmpCode = event.data; //拿到loginTmpCode后就可以在这里构造跳转链接进行跳转了
              // console.log("loginTmpCode", loginTmpCode);
              const loginTmpCode = loginTmpCode
              window.location.href = 'https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoacfpjp0vai0jlebkm&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=https://management.yanss.cn/manager/index&loginTmpCode='+loginTmpCode
          }
        }

        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('message', hanndleMessage, false);
        } else if (typeof window.attachEvent != 'undefined') {
            window.attachEvent('onmessage', hanndleMessage);
        }  
    },
    methods:{
      // 登陆按钮
      submitForm(){
        if(this.phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) == null){
          this.$message.error('请输入正确的手机号!');
        }else if(this.password.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/) == null){
          this.$message.error('请输入6-16位数字和字母的组合密码!');
        }else{
          this.comfired = true
          this.$api.login.login({        
              userLogin: this.phone,
              userPass:md5(this.password)
          }).then(res=> {
              // 执行某些操作  
              this.$stamp(null,res)
              if(res.data.code == 200){

              }else{
                this.$message.error(res.data.msg)
              }   
          }).catch((error) => {
            this.$message.error(error)
          })
        }
      }
    },
    computed: {
      
    },
    components: {
      
    },
    created(){
      
    }
}
</script>

<style>
  .login{
    margin:0 auto;
    box-sizing:border-box;
    padding-top:10vh;
    display:flex;
    align-items:center;
  }
  .login_left{
    width:1035px;
    height:798px;
  }
  .login_right{
    width:620px;
    height: 645px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
  }
  .login_logo{
    width: 400px;
    height: 180px;
    margin-bottom:43px;
  }
  .login_form{
    width:365px;
    box-sizing:border-box;
    padding:10px 10px;
    padding-bottom:40px;
    border-bottom:1px solid #f1f1f1;
  }
  .login_user{
    position:relative;
    display:flex;
    align-items:center;
    border-bottom:1px solid #a5a5a5;
    box-sizing:border-box;
    padding:0 5px;
    margin-top:35px;
  }
  .login_user:before{
    content:'|';
    position:absolute;    
    bottom: -7px;
    left: -2px;
    color: #a5a5a5;
    transform:scale(0.5,0.5);
  }
  .login_user:after{
    content:'|';
    position:absolute;    
    bottom: -7px;
    right: -3px;
    color: #a5a5a5;
    transform:scale(0.5,0.5);
  }
  .login_user img{
    width:25px;
    height:25px;
  }
  .login_user input{
    border:0;
  }
  .login_tabs .el-tabs__item{
    font-size:17px;
  }  
  .login_tabs .el-tabs__item:hover{
    color:#ed6f00;
  }
  .login_tabs .is-active{
    color:#ed6f00;
    font-size:17px;
  }
  .login_tabs .el-tabs__active-bar{
    background-color:#ed6f00;
    height:1px;
  }
  .login_tabs .el-tabs__nav-wrap::after{
    height:1px;
  }
  .login_button{
    width:100%;
    margin-top:68px;
    box-sizing:border-box;
    background-color:#ed6f00;
    border-radius:40px;
    color:#FFFFFF;
    border:0;
  }
  .login_button:hover{
    color:#FFFFFF;
    background-color:#ed6f00;
  }
</style>
