<template>
  <div>
    <!--店铺基本信息-->
    <div class="index_storeMessage">
      <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
      <span style="padding:0 26px;">摇滚米粒(关谷一店)</span>
      <el-rate
        class="index_value"
        v-model="storeComment"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}分">
      </el-rate>
    </div>
    <!--店铺信息栏-->
    <div class="index_storeNub">
      <ul style="display:flex;">
        <li>
          <div class="index_storeNub_title" style="background-color:#ed6f00;">今日营业额</div>
          <span style="font-size:20px;color:#ed6f00;">￥ 1477.28 元</span>
          <div class="index_storeNub_bottom">昨日 1219.10元
            <span style="margin-left:15px;color:#8BC34A!important"><i style="font-size:23px;padding-right:10px;" class="el-icon-upload2"></i>
            214.10元</span>
          </div>
        </li>
        <li>
          <div class="index_storeNub_title" style="background-color:#9076ff;">今日订单量</div>
          <span style="font-size:20px;color:#9076ff;">122 单</span>
          <div class="index_storeNub_bottom">昨日 131单
            <span style="margin-left:15px;color:#8BC34A!important"><i style="font-size:23px;padding-right:10px;" class="el-icon-upload2"></i>
            9单</span>
          </div>
        </li>
        <li>
          <div class="index_storeNub_title" style="background-color:#ffc600;">今日访客数</div>
          <span style="font-size:20px;color:#ffc600;">1 个</span>
          <div class="index_storeNub_bottom">昨日访客数 1000个
            <span style="margin-left:15px;color:#E51C23!important"><i style="font-size:23px" class="el-icon-download"></i>
            9个</span>
          </div>
        </li>
        <li>
          <div class="index_storeNub_title" style="background-color:#494949;">代办事项</div>
          <div class="index_switch">
            <div>
              <span style="font-size:20px;color:#000;">外卖</span>
              <el-switch
                class="index_switch_small"
                v-model="goHome"
                active-color="#ed6f00"
                inactive-color="#a5a5a5">
              </el-switch>
            </div>
            <div>
              <span style="font-size:20px;color:#000;">自提</span>
              <el-switch
                class="index_switch_small"
                v-model="goStore"
                active-color="#ed6f00"
                inactive-color="#a5a5a5">
              </el-switch>
            </div>
          </div>
          <div class="index_moedth index_storeNub_bottom">
            <span>待接单 1单</span>
            <span>待自提 1单</span>
          </div>
        </li>
      </ul>
    </div>
    <!--店铺总营业额分布-->
    <div class="index_totalPrice">
      <div class="index_totalPrice_left">
        <div class="index_storeNub_title" style="background-color:#494949;">总营业额分布</div>
        <el-radio-group v-model="totalPriceChoose" style="margin-top:10px;" class="totalPriceChoose">
          <el-radio-button label="0">昨日</el-radio-button>
          <el-radio-button label="1">7日</el-radio-button>
          <el-radio-button label="2">30日</el-radio-button>
        </el-radio-group>    
        <el-date-picker
          v-model="totalPriceDate"
          class="indexTime"
          type="daterange"
          align="right"
          size="mini"
          style="width:226px;margin-top:10px;height:32px"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="dateRange"
          @change="totalPriceChange">
        </el-date-picker>
        <div id="myPiePrice" class="myPie"></div>
        <div class="index_totalPrice_bottom">
          <div>
            <i style="background-color:#ed6f00;"></i>
            <span style="color:#696969">自提</span>
          </div>
          <div>
            <i style="background-color:#c64f00;"></i>
            <span style="color:#696969">外卖</span>
          </div>
        </div>
      </div>
      <div class="index_totalPrice_right">
        <div class="index_storeNub_title" style="background-color:#a5a5a5;">自有平台营业额</div>
        <div class="index_time">
          <el-radio-group v-model="totalPriceChooseLine" class="totalPriceChoose" style="margin-right:26px;">
            <el-radio-button label="0">7日</el-radio-button>
            <el-radio-button label="1">30日</el-radio-button>
            <el-radio-button label="2">90日</el-radio-button>
          </el-radio-group>
          <el-date-picker
            size="small"
            class="indexTime"
            v-model="dateTimePrice"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div id="myLinePrice" class="myLine"></div>
        <div class="index_totalPrice_line_bottom">
          <span style="color:#696969" class="index_totalPrice_line_bottom_inline"><i style="background-color:#ed6f00"></i>全部</span>
          <span style="color:#696969" class="index_totalPrice_line_bottom_inline"><i style="background-color:#9076ff"></i>自提</span>
          <span style="color:#696969" class="index_totalPrice_line_bottom_inline"><i style="background-color:#ffc600"></i>外卖</span>
        </div>
      </div>
    </div>
    <!--店铺总订单量分布-->
    <div class="index_totalPrice">
      <div class="index_totalPrice_left">
        <div class="index_storeNub_title" style="background-color:#494949;">总订单量分布</div>
        <el-radio-group v-model="totalNubChoose" class="totalPriceChoose" style="margin-top:10px">
          <el-radio-button label="0">昨日</el-radio-button>
          <el-radio-button label="1">7日</el-radio-button>
          <el-radio-button label="2">30日</el-radio-button>
        </el-radio-group>
        <el-date-picker
          v-model="totalNubDate"
          class="indexTime"
          type="daterange"
          align="right"
          size="mini"
          style="width:226px;margin-top:10px;height:32px"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="dateRange"
          @change="totalNubChange">
        </el-date-picker>
        <div id="myPieNub" class="myPie"></div>
        <div class="index_totalPrice_bottom">
          <div>
            <i style="background-color:#9076ff;"></i>
            <span style="color:#696969">自提</span>
          </div>
          <div>
            <i style="background-color:#5f4bb2;"></i>
            <span style="color:#696969">外卖</span>
          </div>
        </div>
      </div>
      <div class="index_totalPrice_right">
        <div class="index_storeNub_title" style="background-color:#a5a5a5;">自有平台订单量</div>
        <div class="index_time">
          <el-radio-group v-model="totalNubChooseLine" class="totalPriceChoose" style="margin-right:26px;">
            <el-radio-button label="0">7日</el-radio-button>
            <el-radio-button label="1">30日</el-radio-button>
            <el-radio-button label="2">90日</el-radio-button>
          </el-radio-group>
          <el-date-picker
            size="small"
            class="indexTime"
            v-model="dateTimeNub"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div id="myLineNub" class="myLine"></div>
        <div class="index_totalPrice_line_bottom">
          <span style="color:#696969" class="index_totalPrice_line_bottom_inline"><i style="background-color:#ed6f00"></i>全部</span>
          <span style="color:#696969" class="index_totalPrice_line_bottom_inline"><i style="background-color:#9076ff"></i>自提</span>
          <span style="color:#696969" class="index_totalPrice_line_bottom_inline"><i style="background-color:#ffc600"></i>外卖</span>
        </div>
      </div>
    </div>
    <!--店铺复购率及用户反馈-->
    <div class="index_totalPrice">
      <div class="index_totalPrice_left">
        <div class="index_storeNub_title" style="background-color:#494949;">复购率: 60%</div>
        <el-radio-group v-model="totalPeopleChoose" class="totalPriceChoose" style="margin-top:10px;">
          <el-radio-button label="0">昨日</el-radio-button>
          <el-radio-button label="1">7日</el-radio-button>
          <el-radio-button label="2">30日</el-radio-button>
        </el-radio-group>
        <el-date-picker
          v-model="drawPieDate"
          class="indexTime"
          type="daterange"
          align="right"
          size="mini"
          style="width:226px;margin-top:10px;height:32px"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="dateRange"
          @change="drawPieChange">
        </el-date-picker>
        <div id="myPiePeople" class="myPie"></div>
        <div class="index_totalPrice_bottom">
          <div>
            <i style="background-color:#ffc600;"></i>
            <span style="color:#696969">新客</span>
          </div>
          <div>
            <i style="background-color:#d28500;"></i>
            <span style="color:#696969">老客</span>
          </div>
        </div>
      </div>
      <div class="index_totalPrice_right">
        <div class="index_storeNub_title" style="background-color:#a5a5a5;">自有平台负面反馈</div>
        <div class="index_time" style="margin-top: 15px;">
          <el-radio-group v-model="totalPeopleChooseLine" class="totalPriceChoose" style="margin-right:26px;">
            <el-radio-button label="0">昨日</el-radio-button>
            <el-radio-button label="1">7日</el-radio-button>
            <el-radio-button label="2">30日</el-radio-button>
          </el-radio-group>
          <el-date-picker
            size="small"
            class="indexTime"
            v-model="dateTimePeople"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div id="myLinePeople" class="myBar"></div>
      </div>
    </div>
    <!--各种情况的几率-->
    <div class="index_allBottom">
      <span>差评率: <i style="color:#60c101">6%</i></span>
      <span>拒单率: <i style="color:#ecb700">6%</i></span>
      <span>少餐送错率: <i style="color:#ff3b21">6%</i></span>
      <span>配送延迟率: <i style="color:#60c101">6%</i></span>
      <span>超时取消率: <i style="color:#60c101">6%</i></span>
      <span>取消不告知率: <i style="color:#ecb700">6%</i></span>
    </div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入线状图组件
import 'echarts/lib/chart/line'
// 引入柱状图组件
import 'echarts/lib/chart/bar'
// 引入饼图。
import 'echarts/lib/chart/pie';
// 引入提示框和title组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
    data () {
      return {
        dateRange: {
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
        storeComment:4.7,  //店铺打分
        goHome:true,      //是否开启外卖
        goStore:false,    //是否开启自提
        totalPriceChoose:0,   //总营业额时间选择
        totalPriceDate:'',    //总营业额时间段选择
        totalNubChoose:0,     //总订单量时间选择
        totalNubDate:'',      //总订单量时间段选择
        totalPeopleChoose:0,  //总复购率时间选择
        drawPieDate:'',       //总复购率时间段选择
        totalPriceChooseLine:0,   //线型图总营业额时间选择
        totalNubChooseLine:0,     //线型图总订单量时间选择
        totalPeopleChooseLine:0,  //线型图反馈情况时间选择
        listTotal:[],  //饼图数据  
        listSeven:[],  
        dateTimePrice:'',   //总营业额时间段选择
        dateTimeNub:'',     //总订单量时间段选择
        dateTimePeople:''   //总反馈情况时间段选择
      }
    },
    mounted(){
            this.listTotal = [
{
"appType":1,
"orderCount":120
},
{
"appType":3,
"orderCount":12
}
]
this.listSeven = [
{
"orderPriceSum":38.94,
"orderCount":1,
"orderDate":"08-15"
},
{
"orderPriceSum":56.29,
"orderCount":3,
"orderDate":"08-16"
},
{
"orderPriceSum":59.61,
"orderCount":3,
"orderDate":"08-17"
},
{
"orderPriceSum":49.45,
"orderCount":2,
"orderDate":"08-18"
},
{
"orderPriceSum":0.00,
"orderCount":0,
"orderDate":"08-19"
},
{
"orderPriceSum":55.01,
"orderCount":3,
"orderDate":"08-20"
},
{
"orderPriceSum":0.00,
"orderCount":0,
"orderDate":"08-21"
}
]
      // 绘制饼图
      this.drawPiePrice();  
      this.drawPieNub(); 
      this.drawPiePeople(); 
      // 绘制柱状图
      this.drawLinePrice();
      this.drawLineNub();
      this.drawLinePeople();
    },
    methods:{
      //总营业额饼形
      drawPiePrice() {
        let list = []
        for(let i =0;i<this.listTotal.length;i++){
          if(this.listTotal[i].appType == 1){
            list.push({
              value:this.listTotal[i].orderCount,
              name:'',
              // selected:true,
              label:{
                normal:{
                  formatter: '{title|{c}元}',
                  position: 'inner',
                  rich:{
                    title:{
                      color:'#fff',
                      align: 'center'
                    }
                  }
                }
              },
              itemStyle:{
                color:'#ed6f00'
              }
            })
          }else if(this.listTotal[i].appType == 3){
            list.push({
              value:this.listTotal[i].orderCount,
              name:'',
              label:{
                normal:{
                  formatter: '{title|{c}元}',
                  position: 'inner',
                  rich:{
                    title:{
                      color:'#fff',
                      align: 'center'
                    }
                  }
                }
              },
              itemStyle:{
                color:'#c64f00'
              }
            })
          }
        }
        echarts.init(document.getElementById('myPiePrice')).setOption({
          baseOption: {
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '50%'],
                      // roseType: 'radius',
                      // label: {
                      //     normal: {
                      //         show: true,
                      //         // formatter: '{b}: {c}({d}%)'
                      //         formatter: '{c}元',
                      //         position: 'inner'
                      //     }
                      // },
                      // color:['#8BC34A','#FF9800'],
                      backgroundColor:'#101010',
                      data:list,
                      itemStyle:{
                        normal: {
                            color: '#101010'
                        }
                      }
                  }
              ]
          },
          media: [

          ]
        })
      },
      //总营业额选择时间段
      totalPriceChange(val){
        this.$stamp(null,val)
      },
      //总营业额条形
      drawLinePrice(){
        let date = []
        for(let i = 0;i<this.listSeven.length;i++){
          date.push(this.listSeven[i].orderDate)
        }
        let moneyTotal = []
        for(let i = 0;i<this.listSeven.length;i++){
          moneyTotal.push(this.listSeven[i].orderPriceSum)
        }
        let orderTotal = []
        for(let i = 0;i<this.listSeven.length;i++){
          orderTotal.push(this.listSeven[i].orderCount)
        }
        this.$stamp(null,date)
        this.$stamp(null,moneyTotal)
        this.$stamp(null,orderTotal)

        echarts.init(document.getElementById('myLinePrice')).setOption({
          baseOption: {
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data:['总金额','总订单']
              },
              toolbox: {
                  show: true,
                  feature: {
                      magicType: {show: true, type: ['stack', 'tiled']},
                      saveAsImage: {show: true}
                  }
              },
              xAxis: {
                  name:'过去七天',
                  type: 'category',
                  boundaryGap: false,
                  data: date
              },
              yAxis: {
                  name:'营业额',
                  type: 'value'
              },
              series: [{
                  name: '全部',
                  type: 'line',
                  smooth: true,
                  color:'#ed6f00',
                  data: moneyTotal
              },
              {
                  name: '自提',
                  type: 'line',
                  smooth: true,
                  color:'#9076ff',
                  data: orderTotal
              },
              {
                  name: '外卖',
                  type: 'line',
                  smooth: true,
                  color:'#ffc600',
                  data: orderTotal
              }]
          },
          media: [ 
            {
                query: {maxWidth: 1150, minWidth: 1100},
                option: {
                    legend: {
                        orient: 'horizontal',
                        left: 200,
                        itemGap: 5
                    },
                    grid: {
                        left: '10%',
                        top: 80,
                        right: 250,
                        bottom: 100
                    },
                    xAxis: {
                        nameLocation: 'end',
                        nameGap: 10,
                        splitNumber: 5,
                        splitLine: {
                            show: true
                        }
                    },
                    timeline: {
                        orient: 'horizontal',
                        inverse: false,
                        left: '20%',
                        right: '20%',
                        bottom: 10,
                        height: 40
                    },
                    series: [
                        { center: ['50%', '50%']}
                    ]
                }
            }
          ]
        })
      },
      //总订单量饼形
      drawPieNub() {
        let list = []
        for(let i =0;i<this.listTotal.length;i++){
          if(this.listTotal[i].appType == 1){
            list.push({
              value:this.listTotal[i].orderCount,
              name:'微信',
              // selected:true,
              label:{
                normal:{
                  formatter: '{title|{c}元}',
                  position: 'inner',
                  rich:{
                    title:{
                      color:'#fff',
                      align: 'center'
                    }
                  }
                }
              },
              itemStyle:{
                color:'#9076ff'
              }
            })
          }else if(this.listTotal[i].appType == 3){
            list.push({
              value:this.listTotal[i].orderCount,
              name:'小程序',
              label:{
                normal:{
                  formatter: '{title|{c}元}',
                  position: 'inner',
                  rich:{
                    title:{
                      color:'#fff',
                      align: 'center'
                    }
                  }
                }
              },
              itemStyle:{
                color:'#5f4bb2'
              }
            })
          }
        }
        echarts.init(document.getElementById('myPieNub')).setOption({
          baseOption: {
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '50%'],
                      // roseType: 'radius',
                      // label: {
                      //     normal: {
                      //         show: true,
                      //         // formatter: '{b}: {c}({d}%)'
                      //         formatter: '{c}元',
                      //         position: 'inner'
                      //     }
                      // },
                      // color:['#8BC34A','#FF9800'],
                      backgroundColor:'#101010',
                      data:list,
                      itemStyle:{
                        normal: {
                            color: '#101010'
                        }
                      }
                  }
              ]
          },
          media: [

          ]
        })
      },
      //总订单量选择时间段
      totalNubChange(val){
        this.$stamp(null,val)
      },
      //总订单量条形
      drawLineNub(){
        let date = []
        for(let i = 0;i<this.listSeven.length;i++){
          date.push(this.listSeven[i].orderDate)
        }
        let moneyTotal = []
        for(let i = 0;i<this.listSeven.length;i++){
          moneyTotal.push(this.listSeven[i].orderPriceSum)
        }
        let orderTotal = []
        for(let i = 0;i<this.listSeven.length;i++){
          orderTotal.push(this.listSeven[i].orderCount)
        }
        this.$stamp(null,date)
        this.$stamp(null,moneyTotal)
        this.$stamp(null,orderTotal)

        echarts.init(document.getElementById('myLineNub')).setOption({
          baseOption: {
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data:['总金额','总订单']
              },
              toolbox: {
                  show: true,
                  feature: {
                      magicType: {show: true, type: ['stack', 'tiled']},
                      saveAsImage: {show: true}
                  }
              },
              xAxis: {
                  name:'过去七天',
                  type: 'category',
                  boundaryGap: false,
                  data: date
              },
              yAxis: {
                  name:'订单量',
                  type: 'value'
              },
              series: [{
                  name: '全部',
                  type: 'line',
                  smooth: true,
                  color:'#ed6f00',
                  data: moneyTotal
              },
              {
                  name: '自提',
                  type: 'line',
                  smooth: true,
                  color:'#9076ff',
                  data: orderTotal
              },
              {
                  name: '外卖',
                  type: 'line',
                  smooth: true,
                  color:'#ffc600',
                  data: orderTotal
              }]
          },
          media: [ 
            {
                query: {maxWidth: 1150, minWidth: 1100},
                option: {
                    legend: {
                        orient: 'horizontal',
                        left: 200,
                        itemGap: 5
                    },
                    grid: {
                        left: '10%',
                        top: 80,
                        right: 250,
                        bottom: 100
                    },
                    xAxis: {
                        nameLocation: 'end',
                        nameGap: 10,
                        splitNumber: 5,
                        splitLine: {
                            show: true
                        }
                    },
                    timeline: {
                        orient: 'horizontal',
                        inverse: false,
                        left: '20%',
                        right: '20%',
                        bottom: 10,
                        height: 40
                    },
                    series: [
                        { center: ['50%', '50%']}
                    ]
                }
            }
          ]
        })
      },
      //复购率饼形
      drawPiePeople() {
        let list = []
        for(let i =0;i<this.listTotal.length;i++){
          if(this.listTotal[i].appType == 1){
            list.push({
              value:this.listTotal[i].orderCount,
              name:'新客',
              // selected:true,
              label:{
                normal:{
                  formatter: '{title|{c}人}',
                  position: 'inner',
                  rich:{
                    title:{
                      color:'#fff',
                      align: 'center'
                    }
                  }
                }
              },
              itemStyle:{
                color:'#ffc600'
              }
            })
          }else if(this.listTotal[i].appType == 3){
            list.push({
              value:this.listTotal[i].orderCount,
              name:'老客',
              label:{
                normal:{
                  formatter: '{title|{c}人}',
                  position: 'inner',
                  rich:{
                    title:{
                      color:'#fff',
                      align: 'center'
                    }
                  }
                }
              },
              itemStyle:{
                color:'#d28500'
              }
            })
          }
        }
        echarts.init(document.getElementById('myPiePeople')).setOption({
          baseOption: {
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '50%'],
                      // roseType: 'radius',
                      // label: {
                      //     normal: {
                      //         show: true,
                      //         // formatter: '{b}: {c}({d}%)'
                      //         formatter: '{c}元',
                      //         position: 'inner'
                      //     }
                      // },
                      // color:['#8BC34A','#FF9800'],
                      backgroundColor:'#101010',
                      data:list,
                      itemStyle:{
                        normal: {
                            color: '#101010'
                        }
                      }
                  }
              ]
          },
          media: [

          ]
        })
      },
      //总复购率选择时间段
      drawPieChange(val){
        this.$stamp(null,val)
      },
      //负面反馈条形
      drawLinePeople(){
        let date = ['分量偏少','起送价过高','食材不新鲜','送错菜','漏送菜','菜没熟','太慢']
        let moneyTotal = []
        for(let i = 0;i<this.listSeven.length;i++){
          moneyTotal.push(this.listSeven[i].orderPriceSum)
        }
        this.$stamp(null,date)
        this.$stamp(null,moneyTotal)

        echarts.init(document.getElementById('myLinePeople')).setOption({
          baseOption: {
              color: ['#FF4081'],
              tooltip: {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              xAxis: {
                  type: 'category',
                  data: date,
                  axisTick: {
                      alignWithLabel: true
                  }
              },
              yAxis: {
                  name:'人数',
                  type: 'value'
              },
              series: [{
                data: moneyTotal,
                barWidth: 40,
                color:'#ffc600',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                }
              }]
          }
        })
      }
    },
    computed: {
      
    },
    components: {
      
    },
    created(){
      // this.$api.index.index('', {        
      //     storeId: ''      
      // }).then(res=> {
      //     // 执行某些操作  
      //     console.log(res)    
      // }).catch((error) => {
      //   this.$message.error(error)
      // })
    }
}
</script>

<style>
  .index_storeMessage{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:15px;
    background-color:#ffffff;
    border-radius:5px;
    box-sizing:border-box;
    padding:5px 15px;
  }
  .index_storeMessage img{
    width:28px;
    height:28px;
    border:1px solid #cccccc;
    border-radius:100%;
    margin-left:5px;
  }
  .index_storeNub ul li{
    width:297px;
    height:170px;
    border:1px solid #cccccc;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    color:#B0AFAF;
    margin-right:15px;
    background-color:#ffffff;
  }
  .index_switch{
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .index_switch_small span{
    width:36px;
    height:22px;
  }
  .index_switch_small .el-switch__core:after{
    height:18px;
  }
  .index_moedth{
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .index_totalPrice{
    margin-top:19px;
    color:#B0AFAF;
    display:flex;
    justify-content:flex-start;
  }
  .index_totalPrice_left{
    width:288px;
    /*height:320px;*/
    border:1px solid #cccccc;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-color:#ffffff;
  }
  .totalPriceChoose .el-radio-button__inner{
    padding:8px 24px;
    border-color:#000000;
  }
  .totalPriceChoose .el-radio-button:first-child .el-radio-button__inner{
    border-top-left-radius:40px;
    border-bottom-left-radius:40px;
    border-left-color:#000000;
  }
  .totalPriceChoose .el-radio-button:last-child .el-radio-button__inner{
    border-top-right-radius:40px;
    border-bottom-right-radius:40px;
  }
  .totalPriceChoose .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    padding:8px 24px;
    background-color:#000000;
    color:#fff;
    border-color:#000000;
    box-shadow: -1px 0 0 0 #dcdfe6;
  }
  .index_totalPrice_bottom{
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding-bottom:10px;
  }
  .index_totalPrice_bottom i{
    display:inline-block;
    width:20px;
    height:12px;
    border-radius:5px;
    margin-right:5px;
  }
  .index_totalPrice_bottom div{
    display:flex;
    align-items:center;
  }
  .myPie{
    width:180px;
    height:180px;
  }
  .index_totalPrice_right{
    width:889px;
    height:336px;
    border:1px solid #cccccc;
    border-radius:5px;
    margin-left:18px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-color:#ffffff;
  }
  .myLine{
    width:880px;
    height:200px;
  }
  .index_time{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    margin-left:26px;
    margin-top:9px;
  }
  .index_totalPrice_line_bottom{
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-left:26px;
    margin-bottom:10px;
  }
  .index_totalPrice_line_bottom_inline{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-right:20px;
  }
  .index_totalPrice_line_bottom span i{
    width:15px;
    height:15px;
    display:inline-block;
    border-radius:100%;
    margin-right:10px;
  }
  .index_allBottom{
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:1px solid #cccccc;
    height:56px;
    font-size:14px;
    margin-top:19px;
    width:1233px;
    background-color:#ffffff;
  }
  .myBar{
    width:880px;
    height:240px;
  }
  .index_value .el-rate__text{
    color:#ff3b21!important;
  }
  .index_storeNub_title{
    width:100%;
    text-align:center;
    padding:10px 0;
    box-sizing:border-box;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    color:#ffffff;
  }
  .index_storeNub_bottom{
    padding:10px 0;
    box-sizing:border-box;

  }
  .indexTime{
    background-color:#fff!important;
    border-color:#000000;
    border-radius:30px;
  }
  .indexTime i,.indexTime .el-range-input,.indexTime input::-webkit-input-placeholder{
    color:#000000!important;
  }
  .indexTime .el-range-separator{
    line-height:24px;
  }
</style>
