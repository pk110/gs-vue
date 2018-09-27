<template>
  <div id="app" style="max-width:1920px;min-width:1440px;">  
    <router-view />
  </div>
</template>

<script>
export default {
    data () {
      return {
        
      }
    },
    methods:{

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
  /*css初始化*/
  body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,input,textarea,p,hr,thead,tbody,tfoot,th,td{margin:0;padding:0;}
  ul,ol{list-style:none;}
  a{text-decoration:none;}
  html{-ms-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none; height: 100%;}
  body{line-height:1.5; font-size:14px; height: 100%;}
  body,button,input,select,textarea{font-family:'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif;}
  b,strong{font-weight:bold;}
  i,em{font-style:normal;}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0 none;width:auto\9;max-width:100%;vertical-align:top; height:auto;}
  button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline;}
  button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}
  button[disabled],input[disabled]{cursor:default;}
  input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}
  input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}
  input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}
  input:focus{outline:none;}
  select[size],select[multiple],select[size][multiple]{border:1px solid #AAA;padding:0;}
  article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}
  audio,canvas,video,progress{display:inline-block;}
  body{background:#fff;}
  input::-webkit-input-speech-button {display: none}
  button,input,textarea{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  /*公共css*/
  /*去除点击输入框高亮成蓝色框
  .el-select .el-input.is-focus .el-input__inner:focus,.el-select .el-input__inner:focus,.el-input__inner:focus{
    border-color:#cccccc;
  }*/
  /*去除按钮点击高亮成蓝色
  .el-button:active,{
    border-color:#000;
  }*/

  /*选取时间样式*/
</style>
