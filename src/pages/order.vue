<template>
  <div>
    <!--底部标签切换-->
    <el-tabs v-model="ordersStatus" @tab-click="handleClick" class="orders_topTages">
      <el-tab-pane label="催单 (2)" name="1"></el-tab-pane>
      <el-tab-pane label="退单" name="2"></el-tab-pane>
      <el-tab-pane label="配送异常 (2)" name="3"></el-tab-pane>
    </el-tabs>
    <div class="orders_container">
      <div class="orders_left">
        <ul>
          <li>
            <div class="orders_title">
              <div>
                <span>NO.140</span>
                <span style="padding-left:10px;">立即送达</span>
                <span>|  建议 12:04 前送达</span>
              </div>
              <div style="font-size:18px;font-weight:bold;background-color:#000000;border-top-right-radius:5px;">
                已接单
              </div>
            </div>
            <div class="orders_user">
              <img src="./../assets/order_user.png" />
              <div style="margin:0 15px;">
                <div style="padding-bottom:10px;">
                  <span style="font-size:18px;font-weight:bold">刘洋 (先生) 13554765862</span>
                  <span style="color:#959292"> | 本店第3次下单</span>
                </div>
                <div>
                  <span>光谷·时尚城（南湖大道时尚城H2栋一单元1102）</span>
                  <span style="color:#696969"><i style="color:#ff3b21" class="el-icon-location"></i>2.4km</span>
                </div>
              </div>
              <router-link :to="{ name: 'map', params:{ data: [121.5273285, 31.21515044] }}">
                <el-button style="background-color:#ed6f00;color:#fff;height: 35px;margin-top: 21px;line-height: 10px;">查看地图</el-button>
              </router-link>
            </div>
            <el-collapse class="orders_collapse">
              <el-collapse-item>
                <template slot="title">
                  <div class="orders_collapse_title">
                    <img src="./../assets/eat.png" />
                    <div style="margin-left:10px;">
                      <span style="font-size:18px;font-weight:bold">2件商品</span>
                      <div>
                        <span style="color:#ed6f00">备注:</span>
                        <span style="color:#696969">不要辣椒！不要辣椒！不要辣椒！不要辣椒！不要辣椒！不要辣椒！不要辣椒！</span>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <span>米单纯</span>
                      <span>x1 ￥8.80</span>
                    </li>
                    <li>
                      <span>农家小炒肉+米单纯（炒饭）</span>
                      <span>x1 ￥18.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <span>餐盒费</span>
                      <span>￥8.80</span>
                    </li>
                    <li>
                      <span>配送费</span>
                      <span>￥18.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <span>小计</span>
                      <span>￥8.80</span>
                    </li>
                    <li>
                      <span>支付立减</span>
                      <span>￥18.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li style="padding-left:0">
                      <div style="padding-left:0;" class="order_custom_money">
                        <img src="./../assets/money.png" />
                        <span>顾客实付</span>
                      </div>
                      <span>已支付￥8.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <div class="orders_num">
                        <span>下单时间: 2018-08-02 14:44</span>
                        <span>单号: 1223554186145308817</span>
                      </div>
                      <div>
                        <el-button class="orders_button" @click="refund">部分退款</el-button>
                        <el-button class="orders_button">取消订单并退款</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-collapse-item>
            </el-collapse>
          </li>
          <li>
            <div class="orders_title">
              <div>
                <span>NO.140</span>
                <span style="padding-left:10px;">立即送达</span>
                <span>|  建议 12:04 前送达</span>
              </div>
              <div style="font-size:18px;font-weight:bold;background-color:#000000;border-top-right-radius:5px;">
                已接单
              </div>
            </div>
            <div class="orders_user">
              <img src="./../assets/order_user.png" />
              <div style="margin:0 15px;">
                <div style="padding-bottom:10px;">
                  <span style="font-size:18px;font-weight:bold">刘洋 (先生) 13554765862</span>
                  <span style="color:#959292"> | 本店第3次下单</span>
                </div>
                <div>
                  <span>光谷·时尚城（南湖大道时尚城H2栋一单元1102）</span>
                  <span style="color:#696969"><i style="color:#ff3b21" class="el-icon-location"></i>2.4km</span>
                </div>
              </div>
              <router-link :to="{ name: 'map', params:{ data: '1' }}">
                <el-button style="background-color:#ed6f00;color:#fff;height: 35px;margin-top: 21px;line-height: 10px;">查看地图</el-button>
              </router-link>
            </div>
            <el-collapse class="orders_collapse">
              <el-collapse-item>
                <template slot="title">
                  <div class="orders_collapse_title">
                    <img src="./../assets/eat.png" />
                    <div style="margin-left:10px;">
                      <span style="font-size:18px;font-weight:bold">2件商品</span>
                      <div>
                        <span style="color:#ed6f00">备注:</span>
                        <span style="color:#696969">不要辣椒！不要辣椒！不要辣椒！不要辣椒！不要辣椒！不要辣椒！不要辣椒！</span>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <span>米单纯</span>
                      <span>x1 ￥8.80</span>
                    </li>
                    <li>
                      <span>农家小炒肉+米单纯（炒饭）</span>
                      <span>x1 ￥18.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <span>餐盒费</span>
                      <span>￥8.80</span>
                    </li>
                    <li>
                      <span>配送费</span>
                      <span>￥18.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <span>小计</span>
                      <span>￥8.80</span>
                    </li>
                    <li>
                      <span>支付立减</span>
                      <span>￥18.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li style="padding-left:0">
                      <div style="padding-left:0;" class="order_custom_money">
                        <img src="./../assets/money.png" />
                        <span>顾客实付</span>
                      </div>
                      <span>已支付￥8.80</span>
                    </li>
                  </ul>
                </div>
                <div class="orders_dishes">
                  <ul>
                    <li>
                      <div class="orders_num">
                        <span>下单时间: 2018-08-02 14:44</span>
                        <span>单号: 1223554186145308817</span>
                      </div>
                      <div>
                        <el-button class="orders_button">部分退款</el-button>
                        <el-button class="orders_button">取消订单并退款</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-collapse-item>
            </el-collapse>
          </li>
        </ul>
      </div>
      <div class="orders_right">
        <div class="orders_right_title">今日订单概况</div>
        <div class="orders_right_li" style="border-bottom:1px solid #f1f1f1">
          <span>已接订单: </span>
          <i>137笔</i>
        </div>
        <div class="orders_right_li">
          <span>今日营业额: </span>
          <i>4203.6元</i>
        </div>
      </div>
    </div>
    <!--弹出框-->
    <el-dialog
      title="选择退款菜品"
      :visible.sync="RefundDishes"
      width="30%"
      class="orders_refund_box"
      center>
      <div class="orders_refund_list">
        <ul>
          <li v-for="(items,index) in dishesList" :key="index">
            <span>{{items.name}}</span>
            <span>x{{items.nub}}</span>
            <span>￥{{items.price}}</span>
            <el-input-number v-model="items.initNub" @change="changeNub(index,items.initNub)" size="mini" :min="0" :max="items.nub"></el-input-number>
          </li>
          <div class="orders_refund_money">
            <span>退款金额</span>
            <p>￥{{refundMoney}}</p>
            <el-checkbox v-model="allRefund" @change="clickAll">全额退款</el-checkbox>
          </div>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <!--<el-button @click="centerDialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="comfiredRefund">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data () {
      return {
        ordersStatus:'1',
        RefundDishes:false,
        allRefund:false,
        totalMoney:0,
        dishesList:[{
          name:'米单纯',
          nub:3,
          initNub:0,
          price:102
        },{
          name:'哈哈哈',
          nub:6,
          initNub:0,
          price:2
        },{
          name:'啊啊啊',
          nub:2,
          initNub:0,
          price:121
        },{
          name:'饿饿饿',
          nub:13,
          initNub:0,
          price:126
        }]
      }
    },
    methods:{
      // 顶部标签切换状态
      handleClick(tab, event) {
        console.log(tab.name);
      },
      //部分退款按钮
      refund(){
        this.RefundDishes = true
      },
      //确定退款
      comfiredRefund(){
        this.RefundDishes = false
        this.$stamp(null,this.dishesList)
      },
      //改变退款菜品数量
      changeNub(index,val){
        this.$stamp(null,index)
        this.$stamp(null,val)
        this.dishesList[index].initNub = val
        let totalMoney = 0
        for(let i = 0;i<this.dishesList.length;i++){
          totalMoney += this.dishesList[i].price*this.dishesList[i].initNub
        }
        this.totalMoney = totalMoney
        //计算总价
        let lastMoney = 0
        for(let i = 0;i<this.dishesList.length;i++){
          lastMoney += this.dishesList[i].price*this.dishesList[i].nub
        }
        // 判定是否是全额
        if(lastMoney == totalMoney){
          this.allRefund = true
        }else{
          this.allRefund = false
        }
      },
      //全额退款
      clickAll(val){
        this.$stamp(null,val)
        let totalMoney = 0
        if(val == true){
          for(let i = 0;i<this.dishesList.length;i++){
            this.dishesList[i].initNub = this.dishesList[i].nub
            totalMoney += this.dishesList[i].price*this.dishesList[i].nub
          }
          this.refundMoney = totalMoney
        }else{
          for(let i = 0;i<this.dishesList.length;i++){
            totalMoney += this.dishesList[i].price*this.dishesList[i].initNub
          }
          this.refundMoney = totalMoney
        }
      }
    },
    computed: {
      refundMoney:{
        get:function(){
          return this.totalMoney
        },
        set:function(val){
          this.$stamp(null,val)
          this.totalMoney = val
        }
      }
    },
    components: {

    },
    created(){
      
    }
}
</script>

<style>
  .orders_topTages{
    width:100%;
    border-bottom:1px solid #e6e6e6;
    padding-left:50px;
    box-sizing:border-box;
    background-color:#ffffff;
    border-radius:5px;
  }
  .orders_topTages .is-active{
    background-color:#fff!important;
    color:#ed6f00!important;
  }
  .orders_topTages .el-tabs__nav-wrap::after{
    height:0;
  }
  .orders_topTages .el-tabs__item:hover{
    color:#ed6f00;
  }
  .orders_topTages .el-tabs__active-bar{
    /*height:0;*/
    background-color:#ed6f00;
  }
  .orders_topTages .el-tabs__header{
    margin:0 0 1px;
  }
  .orders_topTages .el-tabs__nav{
    display:flex;
    justify-content:space-between;
  }
  .orders_container{
    display:flex;
    justify-content:space-between;
    margin-top:20px;
  }
  .orders_right{
    width:205px;
    height:268px;
    border:1px solid #e6e6e6;
    background-color:#ffffff;
  }
  .orders_right_title{
    width:100%;
    height:49px;
    border-bottom:1px solid #E1E0E0;
    background-color:#ed6f00;
    color:#ffffff;
    font-size:15px;
    line-height:49px;
    box-sizing:border-box;
    padding-left:20px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .orders_right_li{
    box-sizing:border-box;
    padding-left:20px;
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .orders_right_li span{
    color: #000000;
    font-size:18px;
    font-weight:bold;
    padding-bottom:10px;
  }
  .orders_right_li i{
    color: #ed6f00;
    font-size:18px;
    font-weight:bold;
    padding-bottom:10px;
  }
  .orders_left{
    flex:1;
    margin-right:20px;
  }
  .orders_left ul li{
    width:100%;
    border:1px solid #e6e6e6;
    margin-bottom:20px;
  }
  .orders_title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#ed6f00;
    border-bottom:1px solid #e6e6e6;
    color:#ffffff;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .orders_title:first-child div{
    box-sizing:border-box;
    padding:10px 15px;
  }
  .orders_user{
    box-sizing:border-box;
    padding:10px 15px;
    display:flex;
    background-color:#ffffff;
    justify-content:flex-start;
    border-bottom:1px solid #e6e6e6;
  }
  .orders_user img{
    width:27px;
    height:23px;
  }
  .orders_collapse_title img{
    width: 25px;
    height: 27px;
  }
  .order_custom_money{
    display:flex;
    align-items:center;
  }
  .order_custom_money img{
    width: 25px;
    height: 27px;
  }
  .orders_collapse{
    background-color:#ffffff;
    box-sizing:border-box;
    padding:10px 15px;
  }
  .orders_collapse .el-collapse-item__wrap,.orders_collapse .el-collapse-item__header{
    border-width:0;
    line-height: 25px;
    padding:10px 0;
  }
  .orders_collapse .is-active{
    background-color: #fff!important;
  }
  .orders_collapse_title{
    display:flex;
    justify-content:flex-start;
  }
  .orders_collapse .el-collapse-item__content{
    padding-bottom:0;
  }
  .orders_dishes ul li{
    width:100%;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    padding:4px 15px;
    border:0;
    margin:0;
  }
  .orders_dishes ul {
    border-top:1px solid  #e6e6e6;
    box-sizing:border-box;
    padding:10px 0;
  }
  .orders_dishes ul li span{
    padding-left:20px;
    color:#696969;
  }
  .orders_num{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:#959292;
  }
  .orders_button span{
    padding-left:0!important;
    color:#ed6f00!important;
  }
  .orders_button{
    border-color:#ed6f00;
    padding:8px 20px;
  }
  .orders_refund_box .el-button--primary{
    padding:8px 20px;
    background-color: #259B24;
    border-color: #259B24;
  }
  .orders_refund_list ul li{
    width:100%;
    display:flex;
    align-items:center;
    color:#000;
    justify-content:space-around;
    margin-bottom:10px;
  }
  .orders_refund_money{
    width:100%;
    display:flex;
    align-items:center;
    color:#000;
    justify-content:center;
  }
  .orders_refund_money p{
    padding:0 20px;
  }
</style>
