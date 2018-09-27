<template>
  <el-container style="height: 100%;">
    <!--通知栏-->
    <notice />
    <!--头部-->
    <el-header class="header">
      <div class="header_left">
        <!--<div class="header_logo">宴</div>
        <span class="header_title">商家中心</span>-->
        <img class="header_logoImg" :src="storeImg" />
        <el-select v-model="storeChoose" placeholder="全部门店" size="small" class="header_store">
          <el-option
            v-for="item in stores"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="siderBar_status">
          <el-dropdown size="small"  trigger="click">
            <span class="el-dropdown-link">
              <div v-if="storeStatus == 1" class="siderBar_storeStatus">
                <div>
                  <p style="color:#ed6f00;font-size:16px">营业中</p>
                  <p style="color:#a5a5a5;font-size:12px">营业时间:10:00-20:00,10:00-20:00</p>
                </div>
                <i class="el-icon-arrow-down"></i>
              </div>
              <div v-else class="siderBar_storeStatus">
                <div>
                  <p style="font-size:16px">已关店</p>
                  <p style="color:#a5a5a5;font-size:12px">营业时间:10:00-20:00,10:00-20:00</p>
                </div>
                <i class="el-icon-arrow-down"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown" class="siderBar_dropdown_choose">
              <div>营业时间:10:00-20:00</div>
              <el-dropdown-item>
                <el-radio v-model="storeStatus" label="1">
                  <p>恢复营业</p>
                  <p>按营业时间自动开关店</p>
                </el-radio>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-radio v-model="storeStatus" label="2">
                  <p>紧急关店</p>
                  <p>严重影响客户体验，请谨慎操作</p>
                </el-radio>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-input
          style="width:410px;margin-left:13px;"
          class="header_search"
          size="small"
          placeholder="输入取餐号、流水编号、订单号、手机号、地址"
          prefix-icon="el-icon-search"
          v-model="search">
        </el-input>
        <el-button size="small" style="margin-left:13px;color:#000;font-weight:bold">自动接单</el-button>
      </div>
      <div class="header_right">
        <el-dropdown size="small"  trigger="click"  @command="loginOut">
          <span class="el-dropdown-link">
            <div class="sider_user">
              <img class="header_user" src="./../assets/user.png" />
              <span style="padding:0 10px;">pk</span>
              <i class='el-icon-arrow-down'></i>
            </div>
          </span>
          <el-dropdown-menu slot="dropdown" class="siderBar_dropdown">
            <el-dropdown-item>pk</el-dropdown-item>
            <el-dropdown-item divided command="login">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--<el-badge is-dot class="item header_notice">
          <img src="./../assets/notice.png" />
        </el-badge>-->
      </div>
    </el-header>
    <!--底部导航栏-->
    <el-container>
      <el-aside style="width:200px;background-color: #494949;">
        <!--现配-->
        <el-menu @select="selectMenu" :active-text-color="activeTextColor" :background-color="backgroundColor" :text-color="textColor" router :unique-opened="uniqueOpen" :default-active="$route.path" class="el-menu-vertical-demo">
          <template  v-for="(item , index) in siderbarList">
      　　  <el-submenu :index="item.path"  v-if="item.ischild == 'true'">
              <template slot="title">
                <!--<img :src="imgas" :alt="item.name" class="siderbar_img" />-->
                <span>{{item.name}}</span>
              </template>
              <div v-for="(itemChild , index) in item.child" class="siderBar_child">
            　　<el-submenu v-if="itemChild.ischild == 'true'" :index="itemChild.path" :key="index">
                  <template slot="title">
                    <!--<i class="el-icon-tickets"></i>-->
                    <span>{{itemChild.name}}</span>
                  </template>
            　　</el-submenu>
            　　<el-menu-item v-else :index="itemChild.path" :key="index">
                  <!--<i class="el-icon-tickets"></i>-->
                  <div v-if="itemChild.path == '/manager/orders'">
                    <span style="padding-left: 28px;">{{itemChild.name}}</span>
                    <span class="badge">9</span>
                  </div>
                  <div v-else>
                    <span>{{itemChild.name}}</span>
                  </div>
            　　</el-menu-item>
              </div>
            </el-submenu>   
  　　　　　 <el-menu-item :index="item.path" v-else>
              <!--<img :src="imgas" :alt="item.name" class="siderbar_img" />-->
              <span>{{item.name}}</span>
      　　  </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <!--通配模块-->
      
      <transition name="fade"  mode="out-in">
        <div v-if="!network" class="network">      
            <h3>我没网了</h3>      
            <span @click="onRefresh">刷新</span>      
        </div> 
        <!--加载画面-->
        <div class="loadingGif" v-else-if="loading == true">
          <img src="./../assets/money.png" />
        </div>
        <router-view style="width:100%;padding:20px 12px;overflow-y:auto;height: 899px;box-sizing:border-box;background-color:#f1f1f1;" v-else></router-view>	
      </transition>
    </el-container>
  </el-container>
</template>

<script>
import notice from './../components/notice.vue'
export default {
  data () {
    return {
      stores:[{
        label:'店铺1',
        value:1
      },{
        label:'店铺2',
        value:2
      },{
        label:'店铺3',
        value:3
      }],
      siderbarList:[],
      uniqueOpen:true,
      backgroundColor:'#494949',
      textColor:'#ffffff',
      activeTextColor:'#fff',
      storeStatus:'1',
      storeImg:''
    }
  },
  methods:{
    // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
    onRefresh () {
      this.$store.state.network = true      
      this.$router.replace('/manager/refresh')    
    },
    //退出登陆
    loginOut(val){
      // localStorage.setItem('userinfo',JSON.stringify(user));  设置local
      // localStorage.getItem('userinfo')  获取local
      if(val == 'login'){
        localStorage.removeItem('token');
        this.$router.push('/manager/login')
      }
    },
    //网络问题重新激活导航
    selectMenu(val){
      if(this.$store.state.network == false ){
        this.$store.state.network = true
      }
    }
  },
  computed: {
    storeChoose:{
      get:function(){
        return this.$store.getters.storesMessage
      },
      set:function(val){
        this.storeImg = 'http://imgsrc.baidu.com/forum/pic/item/9c82d158ccbf6c8112eb15f4b13eb13532fa40c9.jpg'
        this.$store.state.storesMessage = val
      }
    },
    search:{
      get:function(){
        return this.$store.getters.search
      },
      set:function(){

      }
    }, 
    network(){
      return this.$store.state.network
    },
    loading(){
      return this.$store.state.loading
    }
  },
  components: {
    notice
  },
  created(){
    this.siderbarList = this.$store.state.siderBar.list
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .loadingGif{
    width: 100%;
    height: 899px;
    text-align: center;
    padding-top: 20vh;
    box-sizing: border-box;
  }
  .header{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .header_left,.header_right{
    display:flex;
    align-items:center;
    justify-content:flex-start;
  }
  .header_title{
    font-size:14px;
    padding-left:12px;
  }
  .header_store{
    width:200px;
    margin-left:13px;
  }
  .header_store input{
    border-width:0;
  }
  .header_store i{
    color:#000!important;
  }
  .header_logoImg{
    width:30px;
    height:30px;
    border-radius:100%;
  }
  .header_logo{
    border:1px solid #cccccc;
    border-radius:100%;
    font-size:18px;
    box-sizing:border-box;
    padding:10px 15px;
  }
  .header_search:focus{
    border-color:#cccccc;
  }
  .header_search .el-input__suffix,.header_search input::-webkit-input-placeholder,.header_search input{
    color:#a5a5a5;
  }
  .header_search input{
    border-radius:55px;
    background-color:#e4e4e4;
  }
  .header_user{
    width:25px;
    height:25px;
    border-radius:100%;
    cursor:pointer;
  }
  .header_notice{
    width:24px;
    height:24px;
    margin:0 30px;
    cursor:pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .el-menu{
    border-right:0;
  }
  .el-aside ul li{
    min-width: auto!important;
    /*border:1px solid #cccccc;*/
    text-align:center;
  }
  .is-opened ul li{
    color:#494949!important;
  }
  .badge{
    display:inline-block;
    box-sizing:border-box;
    padding:3px 6px;
    border-radius:100%;
    background-color:#ed6f00;
    color:#fff;
    line-height: 1;
  }
  .network{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    box-sizing:border-box;
    padding-top:20vh;
    background-color:#f1f1f1;
    height: 899px;
  }
  .network span{
    cursor:pointer;
    color:#409EFF
  }
  .siderBar_status{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-left:1px solid #e6e6e6;
    border-right:1px solid #e6e6e6;
    height:40px;
  }
  .siderBar_status p{
    color:red;
    font-size:18px;
    padding-left:20px;
  }
  .siderBar_status i{
    width:24px;
    height:24px;
    cursor:pointer;
    margin:0 20px;
  }
  .siderBar_status div{
    color:#259B24;
    font-size:14px;
  }
  /*去掉导航栏侧边的上下图标*/
  .el-aside ul li i{
    display:none;
  }
  .siderBar_child li{
    background-color:#F0F0F0!important;
  }
  .el-aside ul li .el-submenu__title{
    display:flex;
    justify-content:center;
  }
  /*导航父级与子级颜色变化*/
  .el-menu .is-active{
    background-color:#ed6f00!important;
  }
  .is-active{
    background-color:#ffffff!important;
  }
  .siderBar_child .is-active{
    color:#ed6f00!important;
    background-color:#ffffff!important;
  }

  .siderBar_dropdown li{
    text-align: center;
  }
  .siderBar_dropdown_choose{
    box-sizing:border-box;
    padding: 10px 20px;
  }
  .siderBar_dropdown_choose li{
    background-color:#e6e6e6;
    margin-top:10px;
  }
  .siderBar_dropdown_choose .el-radio__label{
    color:#000000;
  }
  .siderBar_dropdown_choose li label{
    display:flex;
    align-items:center;
    box-sizing:border-box;
    padding: 10px 0;
  }
  .siderBar_dropdown_choose li p:nth-child(2n){
    color:gray;
    padding-top:5px;
  }
  .siderBar_dropdown_choose .el-radio__input.is-checked+.el-radio__label{
    color:#000000;
  }
  .siderBar_dropdown_choose .el-radio__input.is-checked .el-radio__inner{
    border-color: #259B24;
    background: #259B24;
  }
  .sider_user{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
  }
  .siderBar_storeStatus{
    display:flex;
    cursor:pointer;
    align-items:center;
  }
  .siderBar_storeStatus i{
    padding-top:17px;
  }
</style>
