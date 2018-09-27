<template>
  <div style="background-color:#dfdfdf">
    <!--门店信息-->
    <div class="storeDetail_message" style="margin-top:5px;background-color:#fff;">
      <div class="storeDetail_message_head">门店信息</div>
      <div class="storeDetail_message_body">
        <div class="storeDetail_message_body_left">
          <span style="color:#000000;font-size:18px;">摇滚米粒炒饭(光谷店）</span>
          <span>地址：东湖新技术开发区纺织路10号金地格林东郡一期商业1栋1层商3-3号</span>
          <span>店长：魏朋 180717245260</span>
        </div>
        <div class="storeDetail_message_body_right">
          <span style="color:#000000;">自提二维码</span>
          <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
        </div>
      </div>
    </div>
    <!--门店设置-->
    <div class="storeDetail_set" style="background-color:#fff;">
      <div class="storeDetail_message_head">营业设置</div>
      <div class="storeDetail_container">
        <div class="storeDetail_set_imgs">
          <div class="storeDetail_set_imgs_left">
            <span style="color:#000000;">店铺logo</span>
            <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
          </div>
          <div class="storeDetail_set_imgs_right">
            <span style="color:#000000;">店铺banner</span>
            <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
          </div>
        </div>
        <div class="storeDetail_set_brands">
          <div style="color:#000000;">品牌介绍:</div>
          <p>从品牌创立初期，就立志打造独一无二的披萨品牌，独创千层芝心披萨，层次丰富，口感绝佳，厚薄皆宜。 从品牌创立初期，就立志打造独一无二的披萨品牌，独创千层芝心披萨，层次丰富，口感绝佳，厚薄皆宜。</p>
        </div>
        <div class="storeDetail_set_time">
          <p style="color:#000000;">营业时间:</p>
          <div>
            <ul>
              <li>
                <div style="background-color:#494949;border-top-left-radius:5px;border-top-right-radius:5px;">
                  <span>开始时间</span>
                  <span>结束时间</span>
                </div>
                <div style="background-color:#a5a5a5;border-bottom-left-radius:5px;border-bottom-right-radius:5px;">
                  <span>10：00</span>
                  <span>14：00</span>
                </div>
              </li>
              <li>
                <div style="background-color:#494949;border-top-left-radius:5px;border-top-right-radius:5px;">
                  <span>开始时间</span>
                  <span>结束时间</span>
                </div>
                <div style="background-color:#a5a5a5;border-bottom-left-radius:5px;border-bottom-right-radius:5px;">
                  <span>10：00</span>
                  <span>14：00</span>
                </div>
              </li>
              <li>
                <div>
                  <span>开始时间</span>
                  <span>结束时间</span>
                </div>
                <div>
                  <span>10：00</span>
                  <span>14：00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="storeDetail_set_money">
          <p><i style="color:#000000;">预订单时间范围：</i>当天</p>
          <p><i style="color:#000000;">预订单提醒时间：</i>提前60分钟</p>
          <p><i style="color:#000000;">是否提供发票：</i>提供</p>
          <p><i style="color:#000000;">发票最低限额：</i>    100元（以实际支付为准）</p>
        </div>
        <div class="storeDetail_set_method">
          <i style="color:#000000;">本店配送方式：</i>美团
        </div>
      </div>
    </div>
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
      this.$stamp(null,this.$route.params.data)
    }
}
</script>

<style>
  .storeDetail_message{
    border:1px solid #e6e6e6;
    border-top-left-radius:7px;
    border-top-right-radius:7px;
  }
  .storeDetail_message_head{
    box-sizing:border-box;
    padding:10px 20px;
    background-color:#ed6f00;
    border-bottom:1px solid #e6e6e6;
    border-top-left-radius:7px;
    border-top-right-radius:7px;
    color:#fff;
  }
  .storeDetail_message_body{
    width:100%;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    padding:20px;
  }
  .storeDetail_message_body_left{
    display:flex;
    flex-direction:column;
    padding-right:40px;
    color:#696969;
  }
  .storeDetail_message_body_left span{
    padding:10px 0;
  }
  .storeDetail_message_body_right{
    display:flex;
    border-left:1px solid #e6e6e6;
    box-sizing:border-box;
    padding:0 20px;
    color:#B0AFAF;
  }
  .storeDetail_message_body_right span{
    padding-right:20px;
  }
  .storeDetail_message_body_right img{
    width:95px;
    height:95px;
  }
  .storeDetail_container{
    box-sizing:border-box;
    padding:0 20px;
  }
  .storeDetail_set{
    border:1px solid #e6e6e6;
    margin-top:40px;
  }
  .storeDetail_set_imgs{
    width:100%;
    display:flex;
    box-sizing:border-box;
    padding:20px 0;
    color:#B0AFAF;
    border-bottom:1px solid #e6e6e6;
  }
  .storeDetail_set_imgs_right{
    border-left:1px solid #e6e6e6;
  }
  .storeDetail_set_imgs_right img{
    width:406px;
    height:200px;
    margin:0 40px;
  }
  .storeDetail_set_imgs_left img{
    width:110px;
    height:110px;
    margin:0 200px 0 40px;
  }
  .storeDetail_set_imgs_right span{
    padding-left:40px;
  }
  .storeDetail_set_brands{
    color:#696969;
    border-bottom:1px solid #e6e6e6;
    box-sizing:border-box;
    padding:20px 0;
  }
  .storeDetail_set_brands p{
    text-indent:50px;
    padding-top:10px;
  }
  .storeDetail_set_time{
    color:#B0AFAF;
    border-bottom:1px solid #e6e6e6;
    box-sizing:border-box;
    padding:20px 0;
  }
  .storeDetail_set_time div ul{
    display:flex;
    align-items:center;
  }
  .storeDetail_set_time div ul li{
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#000;
    margin:20px 40px 0;
  }
  .storeDetail_set_time div ul li div{
    /*border:1px solid #e6e6e6;*/
    display:flex;
    align-items:center;
    color:#fff;
  }
  .storeDetail_set_time div ul li div:nth-child(2n){
    box-sizing:border-box;
    padding:0 11px;
  }
  .storeDetail_set_time div ul li div span{
    box-sizing:border-box;
    padding:4px 15px;
  }
  .storeDetail_set_time div ul li div span:nth-child(2n){
    border-left:1px solid #e6e6e6;
  }
  .storeDetail_set_money{
    color:#696969;
    border-bottom:1px solid #e6e6e6;
    box-sizing:border-box;
    padding:20px 0;
  }
  .storeDetail_set_money p:nth-child(1){
    padding-top:0;
  }
  .storeDetail_set_money p{
    padding-top:20px;
  }
  .storeDetail_set_method{
    color:#696969;
    box-sizing:border-box;
    padding:20px 0;
  }
</style>
