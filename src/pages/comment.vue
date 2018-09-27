<template>
  <div>
    <!--店铺评价-->
    <div class="comment_methods_right">
      <ul>
        <li>
          <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
          <span class="comment_methods_right_span" style="padding-right:10px;color:#000">摇滚米粒 (取水楼店)</span>
          <el-rate
            v-model="3.7"
            disabled
            show-score
            text-color="#ff3b21"
            score-template="{value}分">
          </el-rate>
          <span class="comment_methods_right_span">味道: 4.3</span>
          <span class="comment_methods_right_span">包装: 4.3</span>
          <span class="comment_methods_right_span">配送: 4.3</span>
        </li>
        <li>
          <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
          <span class="comment_methods_right_span" style="padding-right:10px;color:#000">摇滚米粒 (取水楼店)</span>
          <el-rate
            v-model="3.7"
            disabled
            show-score
            text-color="#ff3b21"
            score-template="{value}分">
          </el-rate>
          <span class="comment_methods_right_span">味道: 4.3</span>
          <span class="comment_methods_right_span">包装: 4.3</span>
          <span class="comment_methods_right_span">配送: 4.3</span>
        </li>
      </ul>
    </div>
    <!--列表页面-->
    <div class="commentTotal">所有评价 (132)</div>
    <!--筛选条件-->
    <div class="comment_methods">
      <div class="comment_methods_left">
        <div>
          <span>评价类型</span>
          <ul>
            <li v-for="(items,index) in comments" :key="index" @click="chooseComment(items.value)" :style="index == mycomment?dateStyle:''">{{items.name}}</li>
          </ul>
          <span>评价日期</span>
          <ul>
            <li v-for="(items,index) in date" :key="index" @click="chooseDate(items.value)" :style="index == mydate?dateStyle:''">{{items.name}}</li>
            <li style="border-width:0;">
              <el-date-picker
                class="commentTime"
                @change="timeCommentSearch"
                v-model="commentSearchTime"
                type="daterange"
                align="right"
                size="mini"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="comment_list">
      <ul>
        <li>
          <div class="comment_list_left">
            <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
            <div class="comment_list_right">
              <div>
                <span style="padding-right:10px;color:#000">匿名用户</span>
                <el-rate
                  v-model="3.7"
                  disabled
                  show-score
                  text-color="#ff3b21"
                  score-template="{value}分">
                </el-rate>
                <span class="comment_methods_right_span">味道: 4.3</span>
                <span class="comment_methods_right_span">包装: 4.3</span>
                <span class="comment_methods_right_span">配送: 4.3</span>
              </div>
              <p>购买了：农家小炒肉+米单纯（炒饭）|    <i style="color:#ed6f00">超时 4分钟  送达</i></p>
              <p style="color:#000000">很好吃，还会继续购买</p>
              <!--<span class="comment_button" style="color:#FF9800">举报</span>-->
            </div>
          </div>
          <div class="comment_list_button">
            <p style="color:#B0AFAF">评价于 2018-08-01 21:22</p>
            <span class="comment_button" style="background-color:#ed6f00;color:#fff;" @click="sendCoupon">发券</span>
          </div>
        </li>
        <li>
          <div class="comment_list_left">
            <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1" />
            <div class="comment_list_right">
              <div>
                <span style="padding-right:10px;color:#000">匿名用户</span>
                <el-rate
                  v-model="3.7"
                  disabled
                  show-score
                  text-color="#ff3b21"
                  score-template="{value}分">
                </el-rate>
                <span class="comment_methods_right_span">味道: 4.3</span>
                <span class="comment_methods_right_span">包装: 4.3</span>
                <span class="comment_methods_right_span">配送: 4.3</span>
              </div>
              <p>购买了：农家小炒肉+米单纯（炒饭）|    <i style="color:#ed6f00">超时 4分钟  送达</i></p>
              <p style="color:#000000">很好吃，还会继续购买</p>
              <!--<span class="comment_button" style="color:#FF9800">举报</span>-->
            </div>
          </div>
          <div class="comment_list_button">
            <p style="color:#B0AFAF">评价于 2018-08-01 21:22</p>
            <span class="comment_button" style="background-color:#ed6f00;color:#fff;" @click="sendCoupon">发券</span>
          </div>
        </li>
      </ul>
    </div>
    <!--弹出框-->
    <el-dialog
      title="发券"
      :visible.sync="couponBox"
      width="30%"
      class="comment_refund_box"
      center>
      <div class="comment_refund_list">
        <ul>
          <li v-for="(items,index) in commentList" :key="index">
            <el-checkbox v-model="items.checked">{{items.name}}</el-checkbox>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <!--<el-button @click="centerDialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="comfiredSend">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data () {
      return {
        couponBox:false,
        date:[{
          value:0,
          name:'近7天'
        },{
          value:1,
          name:'近30天'
        },{
          value:2,
          name:'近90天'
        }],
        mydate:0,
        comments:[{
          value:0,
          name:'全部'
        },{
          value:1,
          name:'差评(1-2星)'
        },{
          value:2,
          name:'中评(3星)'
        },{
          value:3,
          name:'好评(4-5星)'
        }],
        mycomment:0,
        dateStyle:'background-color:#000000;color:#ffffff;',
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
        commentList:[{
          name:'抵用券：鱼香肉丝',
          checked:false
        },{
          name:'赠品券：2个小龙虾赠 蒸虾1个',
          checked:false
        },{
          name:'现金券：满50减20',
          checked:false
        },{
          name:'菜品折扣券：米单纯2折',
          checked:false
        }],
        commentSearchTime:''
      }
    },
    methods:{
      //时间查询
      timeCommentSearch(){
        this.$stamp(null,this.commentSearchTime)
      },
      //切换评价日期
      chooseDate(val){
        this.$stamp(null,val)
        this.mydate = val
      },
      //切换选择评价类型
      chooseComment(val){
        this.$stamp(null,val)
        this.mycomment = val
      },
      // 发券按钮
      sendCoupon(){
        this.couponBox = true
      },
      //确认发券
      comfiredSend(){
        this.$stamp(null,this.commentList)
        this.couponBox = false
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
  .commentTotal{
    width:100%;
    box-sizing:border-box;
    padding:10px;
    color:#ffffff;
    background-color:#ed6f00;
    margin-top:10px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .comment_methods{
    display:flex;
    justify-content:flex-start;
    background-color:#ffffff;
  }
  .comment_methods_left div{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:2px 10px;
    color:#000000;
  }
  .comment_methods_left div span{
    padding-right:15px;
  }
  .comment_methods_left div ul{
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
  .comment_methods_left div ul li{
    margin-right:15px;
    cursor:pointer;
    box-sizing:border-box;
    padding:5px 10px;
    border-radius:50px;
    border:1px solid #000000;
  }
  .commentTime{
    background-color:#fff!important;
    border-color:#000000;
  }
  .commentTime i,.commentTime .el-range-input,.commentTime input::-webkit-input-placeholder{
    color:#000000!important;
  }
  .comment_methods_right ul li{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom: 15px;
    background-color:#ffffff;
    box-sizing:border-box;
    padding:5px 15px;
    border-radius:5px;
  }
  .comment_methods_right ul li img{
    width:30px;
    height:30px;
    border-radius:100%;
  }
  .comment_methods_right_span{
    padding-left:10px;
    color:#a5a5a5;
  }
  .comment_list_left{
    display:flex;
    justify-content:flex-start;
  }
  .comment_list_button{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-end;
  }
  .comment_list ul li{
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    padding:15px;
    border-top:1px solid #e6e6e6;
    background-color:#ffffff;
  }
  .comment_list ul li img{
    width:43px;
    height:43px;
    border-radius:100%;
    margin-right:10px;
  }
  .comment_list_right div{
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
  .comment_list_right p{
    line-height:30px;
    color:#696969;
  }
  .comment_button{
    padding:2px 15px;
    border-radius:40px;
    border:1px solid #ed6f00;
    /*margin-left:20px;*/
    cursor:pointer;    
    margin-top: 10px;
    display: inline-block;
  }
  .comment_refund_box .el-button--primary{
    padding:8px 20px;
    background-color: #259B24;
    border-color: #259B24;
  }
  .comment_refund_list ul li{
    width:100%;
    display:flex;
    align-items:center;
    color:#000;
    justify-content:space-around;
    margin-bottom:10px;
  }
  .comment_refund_money{
    width:100%;
    display:flex;
    align-items:center;
    color:#000;
    justify-content:center;
  }
  .comment_refund_money span{
    padding:0 20px;
  }
</style>
