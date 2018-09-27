<template>
  <div >
    <!--我的店铺列表-->
    <div class="stores">
      <div class="store_list_title">我的所有门店</div>
      <div class="store_list">
        <ul>
          <li>
            <!--<div class="store_head">
              <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
              <div class="store_head_right">
                <div class="store_head_right_top">
                  <span style="font-size:20px">摇滚米粒炒饭(关谷店)</span>
                  <router-link :to="{ name: 'storesDetail', params:{ data: '1' }}">
                    <el-button size="small" style="color:#fff;background-color:#FF9800">查看</el-button>
                  </router-link>
                </div>
                <p class="store_head_right_top_p">东湖新技术开发区纺织路10号金地格林东郡一期商业1栋1层商3-3号</p>
              </div>
            </div>-->
            <router-link to="/manager/storesDetail">
              <div class="store_title">
                <span>摇滚米粒炒饭(关谷店)</span>
                <span>点击查看</span>
              </div>
            </router-link>
            <div class="store_body">
              <span style="color:#696969">东湖新技术开发区纺织路10号金地格林东郡一期商业1栋1层商3-3号</span>
            </div>
            <div class="store_body" style="border-bottom-width:0;">
              <span style="color:#696969">昨日 1219.10元</span>
              <div class="store_price">
                <i style="font-size:23px;padding-right:10px;" class="el-icon-upload2" />
                <span>214.10元</span>
              </div>
            </div>
            <div class="store_body">
              <span style="color:#696969">昨日 131单</span>
              <div class="store_price" style="color:#E51C23">
                <i style="font-size:23px;" class="el-icon-download" />
                <span>9单</span>
              </div>
            </div>
            <div class="store_body">
              <span style="color:#696969">待回复差评</span>
              <div class="store_price" style="color:#B0AFAF">
                <span>131条</span>
              </div>
            </div>
            <div class="store_body">
              <span style="color:#000000">外卖</span>
              <div class="store_price" style="color:#B0AFAF">
                <el-switch
                  class="index_switch_small"
                  v-model="goHome"
                  active-color="#ed6f00"
                  inactive-color="#a5a5a5">
                </el-switch>
              </div>
            </div>
            <div class="store_body">
              <span style="color:#000000">自提</span>
              <div class="store_price" style="color:#B0AFAF">
                <el-switch
                  class="index_switch_small"
                  v-model="goHome"
                  active-color="#ed6f00"
                  inactive-color="#a5a5a5">
                </el-switch>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        goHome:true
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

<style scoped>
  .stores{
    width:100%;
    box-sizing:border-box;
    padding:0 15px 15px 15px;
  }
  .store_list_title{
    with:100%;
    box-sizing:border-box;
    padding: 10px 15px;
    font-size:16px;
    background-color:#ffffff;
    border-radius:10px;
  }
  .store_list{
    width:100%;
    box-sizing:border-box;
    padding:19px 0;
  }
  .store_list ul li{
    width:496px;
    /*height:262px;
    border:1px solid #cccccc;*/
    border-radius:10px;
    float:left;
    margin-bottom:58px;
    background-color:#ffffff;
  }
  .store_list ul li:nth-child(2n+1){
    margin-right:74px;
  }
  .store_title{
    margin:0 auto;    
    box-sizing: border-box;
    padding: 8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #f1f1f1;
    background-color:#ed6f00;
    color:#fff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
  .store_head{
    display:flex;
    align-items:center;
  }
  .store_head img{
    width:51px;
    height:51px;
    border-radius:100%;
    border:1px solid #cccccc;
  }
  .store_head_right{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding-left:10px;
  }
  .store_head_right_top{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .store_head_right_top_p{
    width:385px;
    color:#B0AFAF; 
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .store_body{
    /*width:220px;*/
    margin:0 auto;    
    padding: 8px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #f1f1f1;
    box-sizing:border-box;
    margin:0 16px;
  }
  .store_price{
    color:#8BC34A;
    display:flex;
    align-items:center;
  }
</style>
