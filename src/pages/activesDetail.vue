<template>
  <div>
    <div class="activesDetail_title">已参加活动</div>
    <div class="activesDetail">
      <el-table
        class="activesDetail_table"
        :header-cell-style="{background:'#494949',color:'#ffffff'}"
        :data="activesDetailData"
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
          align="center"
          label="活动名称"
          width='380'>
          <template slot-scope="scope">
            <span style="color:#B0AFAF">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="活动状态">
          <template slot-scope="scope">
            {{scope.row.status}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="起止时间">
          <template slot-scope="scope">
            {{scope.row.date}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="起止时间点">
          <template slot-scope="scope">
            {{scope.row.lastDate}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="活动内容">
          <template slot-scope="scope">
            {{scope.row.content}}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <router-link to="/manager/actives">
      <div class="activesDetail_bottom">返回列表</div>
    </router-link>
  </div>
</template>

<script>
export default {
    data () {
      return {
        activesDetailData:[{
          name:'减配送费',
          status:'剩余29天',
          content:'减去2元配送费',
          date:'2017-12-10至2019-09-10',
          lastDate:'2017-12-10至2019-09-10'
        },{
          name:'减配送费',
          status:'剩余29天',
          content:'减去2元配送费',
          date:'2017-12-10至2019-09-10',
          lastDate:'2017-12-10至2019-09-10'
        }]
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
  .activesDetail_title{
    line-height:40px;
    font-weight:bold;
    width:100%;	
    color:#ffffff;
    padding-left:15px;
    box-sizing:border-box;
    background-color: #ed6f00;
	  border-radius: 5px 5px 0px 0px;
  }
  .activesDetail_bottom{
    padding:5px 15px;
    box-sizing:border-box;
    background-color: #ed6f00;
	  border-radius: 30px;
    width:100px;
    margin:15px auto;
    color:#ffffff;
    text-align:center;
    cursor:pointer;
  }
</style>
