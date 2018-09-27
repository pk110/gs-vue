<template>
  <div>
    <div class="actives_title">已参加活动</div>
    <div class="actives">
      <el-table
        class="actives_table"
        :header-cell-style="{background:'#494949',color:'#ffffff'}"
        :data="activesData"
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
          label="活动内容">
          <template slot-scope="scope">
            {{scope.row.content}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <router-link :to="{name:'activesDetail',params:{data:scope.row}}">
              <button class="actives_operate">查看详情</button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        activesData:[{
          name:'减配送费',
          status:'剩余29天',
          content:'减去2元配送费',
          date:'2017-12-10至2019-09-10'
        },{
          name:'减配送费',
          status:'剩余29天',
          content:'减去2元配送费',
          date:'2017-12-10至2019-09-10'
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
      
    }
}
</script>

<style>
  .actives_title{
    line-height:40px;
    font-weight:bold;
    width:100%;	
    color:#ffffff;
    padding-left:15px;
    box-sizing:border-box;
    background-color: #ed6f00;
	  border-radius: 5px 5px 0px 0px;
  }
  .actives_operate{
    box-sizing:border-box;
    padding:5px 15px;
    background-color:#ed6f00;
    border-radius:30px;
    color:#fff;
    cursor:pointer;
    border:0;
  }
</style>
