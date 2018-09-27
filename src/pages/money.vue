<template>
  <div>
    <!--标题-->
    <div class="money_current">
      <div style="display:flex;align-items:center;flex:1;">
        <span style="font-size:15px;color:#000000;">可提现余额</span>
        <span style="font-size:22px;color:#ed6f00;padding-left:10px;">￥ 1477.28 元</span>
      </div>
      <div style="border-left:1px solid #e6e6e6;margin:5px 0;padding-left:30px;">
        <el-button v-dbClick style="font-size:12px;padding:5px 20px;background-color:#ed6f00;color:#ffffff;border-radius:40px;">提现</el-button>
      </div>
    </div>
    <!--账户流水-->
    <div class="money_user">
      <div class="money_user_right">
        <div class="money_user_right_title">账户流水</div>
        <el-table
          class="money_table"
          :header-cell-style="{background:'#494949'}"
          :data="moneyData"
          tooltip-effect="dark"
          style="width: 100%">
          <el-table-column
            align="center"
            label="时间"
            width='380'>
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.date}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作类型">
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.money}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="提现金额">
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.money}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="账户余额">
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.status}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="money_pages">
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
    <!--账户经营分析-->
    <div class="money_user">
      <div class="money_user_right">
        <div class="money_user_right_title">经营分析</div>
        <el-table
          class="money_table"
          :header-cell-style="{background:'#494949'}"
          :data="moneyData"
          tooltip-effect="dark"
          style="width: 100%">
          <el-table-column
            align="center"
            label="时间"
            width='380'>
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.date}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="账单金额">
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.money}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template slot-scope="scope">
              <div class="money_operate">
                <span style="color:#fff;background-color:#ed6f00" @click="seeMoney">查看</span>
                <span style="color:#ed6f00;margin-left:20px;" @click="exportEchart">下载</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="账单信息">
            <template slot-scope="scope">
              <span style="color:#B0AFAF">{{scope.row.status}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="money_pages">
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
    <!--弹出框-->
    <el-dialog
      title="查看账单"
      :visible.sync="seeMoneyBox"
      width="50%"
      class="money_refund_box"
      center>
      <el-table
        :data="moneyList">
        <el-table-column
          prop="date"
          label="时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="orderNub"
          label="订单号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align="center">
        </el-table-column>
        <el-table-column
          prop="money"
          label="金额"
          align="center">
        </el-table-column>
      </el-table>
      <div class="money_box">
        <span style="padding-left:6%;">总额: 2012313.22元</span>
        <el-pagination
          layout="prev, pager, next"
          :total="1000"
          @current-change="adjustPage">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data () {
      return {
        moneyList:[{
          date:'2018-08-30 11:20',
          orderNub:'208923278328323',
          type:"自提",
          money:'23.9'
        },{
          date:'2018-08-30 11:20',
          orderNub:'208923278328323',
          type:"自提",
          money:'23.9'
        },{
          date:'2018-08-30 11:20',
          orderNub:'208923278328323',
          type:"自提",
          money:'23.9'
        },{
          date:'2018-08-30 11:20',
          orderNub:'208923278328323',
          type:"自提",
          money:'23.9'
        },{
          date:'2018-08-30 11:20',
          orderNub:'208923278328323',
          type:"自提",
          money:'23.9'
        }],
        seeMoneyBox:false,
        moneyData:[{
          date:'2018-08-01 星期五',
          money:'15045.30元',
          status:'已于2018-07-31   07:00:56到账',
        },{
          date:'2018-08-01 星期五',
          money:'15045.30元',
          status:'已于2018-07-31   07:00:56到账',
        },{
          date:'2018-08-01 星期五',
          money:'15045.30元',
          status:'已于2018-07-31   07:00:56到账',
        },{
          date:'2018-08-01 星期五',
          money:'15045.30元',
          status:'已于2018-07-31   07:00:56到账',
        },{
          date:'2018-08-01 星期五',
          money:'15045.30元',
          status:'已于2018-07-31   07:00:56到账',
        }]
      }
    },
    methods:{
      //查看订单
      seeMoney(){
        this.seeMoneyBox = true
      },
      //下载导出
      exportEchart(){
        const that = this
        axios.post('/api/v1/manager/excel/get',{
            storeId: that.$store.getters.getStoreName.storeId,
            createTime:that.$store.state.historyorder.createTime,
            taskTime:that.$store.state.historyorder.taskTime
        },{responseType: 'arraybuffer'}).then((res) => {
            let fileName = res.headers['content-disposition'].split('=')[1].split('.')[0]
            let blob = new Blob([res.data], {type: "application/vnd.ms-excel"}); 
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            window.URL.revokeObjectURL(link.href);
　　　　    }).catch(function (res) {
            this.$message.error('请稍后重试!')
          })
      },
      //改变页数
      adjustPage(val){
        console.log(val)
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
  .money_current{
    width:100%;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    padding:0 15px;
    align-items:center;
    background-color:#ffffff;
    border-radius:5px;
  }
  .money_user{
    width:99%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-top:20px;
  }
  .money_user_right{
    flex:1;
    border:1px solid #e6e6e6; 
  }
  .money_user_right_title{
    width:100%;
    box-sizing:border-box;
    padding:10px 15px;
    font-weight:bold;
    background-color:#ed6f00;
    color:#ffffff;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .money_anaylse_title{
    line-height:70px;
    font-weight:bold;
    padding-left:10px;
  }
  .money_anaylse{
    width:100%;
    height:320px;
    box-sizing:border-box;
    border:1px solid #e6e6e6;
  }
  .money_table tbody tr td{
    border-width:0;
    border-bottom:1px solid #f1f1f1;
  }
  .money_table thead{
    color:#ffffff;
  }
  .el-table::before{
    height:0;
  }
  .money_operate{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .money_operate span{
    box-sizing:border-box;
    padding:3px 15px;
    border:1px solid #FF9800;
    border-radius:30px;
    cursor:pointer;
  }
  .money_box{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
    padding-bottom:10px;
  }
  .money_pages{
    width:100%;
    box-sizing:border-box;
    padding:5px 15px;
    text-align:right;
    background-color:#ffffff;
  }
  .money_refund_box .el-dialog__body{
    padding:0;
  }
  .money_refund_box thead tr th{
    background-color:#494949;
    color:#fff;
  }
  .money_refund_box .el-dialog__header{
    background-color:#ed6f00;
    padding:10px;
  }
  .money_refund_box .el-dialog__title{
    color:#ffffff;
  }
  .money_refund_box .el-dialog__headerbtn{
    top:14px;
  }
  .money_refund_box .el-dialog__headerbtn .el-dialog__close{
    color:#ffffff;
  }
</style>
