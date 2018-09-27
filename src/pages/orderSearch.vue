<template>
  <div>
    <!--底部查询-->
    <div class="orderSearch_choose">
      <div>
        <b>收货方式</b>
        <el-radio-group @change="deliveryMethod" v-model="delivery">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">外卖</el-radio>
          <el-radio :label="3">自提</el-radio>
        </el-radio-group>
      </div>
      <div>
        <b>订单状态</b>
        <el-radio-group @change="statusMethod" v-model="status">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">外卖</el-radio>
          <el-radio :label="3">自提</el-radio>
        </el-radio-group>
      </div>
      <div>
        <b>时间查询</b>
        <el-date-picker
          class="orderSearchTime"
          @change="timeOrderSearch"
          v-model="orderSearchTime"
          type="daterange"
          align="right"
          size="small"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
    </div>
    <!--底部列表-->
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
              <!--<img src="./../assets/user.png" />-->
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
              <!--<router-link :to="{ name: 'map', params:{ data: [121.5273285, 31.21515044] }}">
                <el-button style="background-color:#ed6f00;color:#fff;height: 35px;margin-top: 21px;line-height: 10px;">查看地图</el-button>
              </router-link>-->
            </div>
            <el-collapse class="orders_collapse">
              <el-collapse-item>
                <template slot="title">
                  <div class="orders_collapse_title">
                    <i class="el-icon-goods" style="font-size:23px;font-weight:bold"></i>
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
                      <span style="padding-left:0;"><i style="padding-right:10px;font-size:23px;font-weight:bold" class="el-icon-sold-out"></i>顾客实付</span>
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
              <!--<img src="./../assets/user.png" />-->
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
                    <i class="el-icon-goods" style="font-size:23px;font-weight:bold"></i>
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
                      <span style="padding-left:0;"><i style="padding-right:10px;font-size:23px;font-weight:bold" class="el-icon-sold-out"></i>顾客实付</span>
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
  </div>
</template>

<script>
export default {
    data () {
      return {
        delivery:1,
        status:1,
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        orderSearchTime:''
      }
    },
    methods:{
      //收货方式筛选
      deliveryMethod(){
        this.$stamp(null,this.delivery)
      },
      // 订单状态筛选
      statusMethod(){
        this.$stamp(null,this.status)
      },
      //时间查询
      timeOrderSearch(){
        this.$stamp(null,this.orderSearchTime)
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
  .orderSearch_choose{
    border-bottom:1px solid #e6e6e6;
    background-color:#ffffff;
    box-sizing:border-box;
    padding:5px 15px;
    border-radius:5px;
  }
  .orderSearch_choose div{
    margin:10px 0;
  }
  .orderSearch_choose div b{
    padding-right:10px;
  }
  .orderSearch_choose .el-radio__input.is-checked .el-radio__inner{
    border-color: #000000;
    background: #000000;
  }
  .orderSearch_choose .el-radio__input.is-checked+.el-radio__label{
    color:#000000;
  }
  .orderSearchTime{
    background-color: #fff!important;
    border-color:#000000;
  }
  .orderSearchTime i,.orderSearchTime .el-range-input,.orderSearchTime input::-webkit-input-placeholder{
    color:#000000!important;
  }
</style>
