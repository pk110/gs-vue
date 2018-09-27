<template>
  <div>
    <!--顶部切换标签-->
    <div class="dishes_top_container">
      <el-tabs v-model="dishesStatus" @tab-click="handleClick" class="dishes_topTages">
        <el-tab-pane label="全部商品" name="0"></el-tab-pane>
        <el-tab-pane label="库存不足 (2)" name="1"></el-tab-pane>
        <el-tab-pane label="已下架 (2)" name="2"></el-tab-pane>
        <el-tab-pane label="已售完 (2)" name="3"></el-tab-pane>
        <el-tab-pane label="无标签 (2)" name="4"></el-tab-pane>
        <el-tab-pane label="无图片" name="5"></el-tab-pane>
      </el-tabs>
      <el-input
        style="width:140px;margin-left:13px;margin-right:120px;"
        class="dishes_search"
        size="small"
        placeholder="输入菜品名称"
        prefix-icon="el-icon-search"
        v-model="dishesSearch">
      </el-input>
    </div>
    <!--底部-->
    <div class="dishes_bottom">
      <!--底部左侧标签切换-->
      <div class="dishes_bottom_left">
        <ul>
          <li v-for="(items,index) in dishesType" :key="index" :style="chooseTag == index?chooseTagColor:''" @click="dishesTags(items.name,index)">
            <div>
              <i v-if="chooseTag == index" class="el-icon-sort dishes_sorts" @click.stop="sorts(index,items)"></i>
              <transition name="el-zoom-in-top">
                <div v-show="items.shown" class="dishes_sorts_box">
                  <ul>
                    <li @click.stop="moveTop(index,items)">移动至上方</li>
                    <li @click.stop="moveBottom(index,items)">移动至下方</li>
                  </ul>
                </div>
              </transition>
              <span>{{items.name}}</span>
            </div>
            <span>{{items.number}}</span>
          </li>
        </ul>
      </div>
      <!--底部右侧内容-->
      <div class="dishes_bottom_right">
        <div class="dishes_bottom_right_top">
          <el-button v-for="(items,index) in operates" :key="index" size="small" @click="chooseOperate(items,index)" :style="chooseOperateStatus == index?currentOperate:''">{{items.name}}</el-button>
        </div>
        <!--v-loading="true"-->
        <el-table
          ref="multipleTable"
          :data="dishesData"
          tooltip-effect="dark"
          style="width: 100%"
          class="dishes_table"
          @selection-change="handleSelectionChange">
          <el-table-column
            align="center"
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            align="center"
            label="商品"
            width='380'>
            <template slot-scope="scope">
              <div class="dishes_message">
                <div class="dishes_img">
                  <div v-loading="scope.row.loading">
                    <img :src='scope.row.img' />
                  </div>
                  <el-upload
                    action=''
                    :auto-upload="false"
                    class="upload-demo"
                    :limit="1"
                    :show-file-list="false"
                    :on-change="getDishesImg"
                    :file-list="fileList">
                    <i class="el-icon-edit" @click="uploadImg(scope.$index)"></i>
                  </el-upload>
                </div>
                <div class="dishes_detail">
                  <p class="dishes_detail_title">米单纯 (单纯但不简单的炒饭)...</p>
                  <p>晶莹透亮秘制醉鱼，下饭佐酒，回味悠长</p>
                  <div>
                    <span>月售：961</span>
                    |
                    <span>好评：99%</span>
                  </div>
                  <div class="dishes_tags">
                    <ul>
                      <li>主食</li>
                      <li>家常菜</li>
                      <li>甜品</li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="价格（自提/外卖）">
            <template slot-scope="scope">
            8.8/10.8
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="库存">
            <template slot-scope="scope">
              <div class="dishes_count">
                <el-input
                  v-model="scope.row.num"
                  v-focus="focusInput"
                  @blur="startReviseCount(scope.$index)"
                  v-if="!scope.row.bool">
                </el-input>
                <span style="color:#000" v-if="scope.row.bool">{{scope.row.num}}</span>
                <i class="el-icon-edit" @click="reviseCount(scope.$index,scope.row)"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="餐盒费">
            <template slot-scope="scope">
              ￥1
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template slot-scope="scope">
              <el-row class="dishes_topBottom">
                <el-button type="danger">下架</el-button>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        operates:[{
          name:'批量上架',
          val:0
        },{
          name:'批量下架',
          val:1
        },{
          name:'批量改库存',
          val:2
        },{
          name:'沽清',
          val:3
        },{
          name:'置满',
          val:4
        }],
        dishesSearch:'',
        dishesStatus:'0',
        chooseOperateStatus:999,
        currentOperate:'color:#ffffff;background-color:#000000;',
        chooseTag:'',
        chooseTagColor:'color:#000000;background-color:#ffffff;',
        dishesType:[{
          name:'全部商品',
          number:64,
          shown:false
        },{
          name:'摇滚米粒',
          number:10,
          shown:false
        },{
          name:'嗨FUN5.8',
          number:9,
          shown:false
        },{
          name:'吃鸡套餐',
          number:7,
          shown:false
        },{
          name:'下饭联盟',
          number:4,
          shown:false
        },{
          name:'吃鸡套餐',
          number:6,
          shown:false
        },{
          name:'下饭联盟',
          number:7,
          shown:false
        }],
        dishesData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num:12,
          bool:true,
          loading:true,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          num:12,
          bool:true,
          loading:false,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          num:12,
          bool:true,
          loading:false,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          num:12,
          bool:true,
          loading:false,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          num:120,
          bool:true,
          loading:false,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          num:212,
          bool:true,
          loading:false,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=229445282,848378121&fm=202&mola=new&crop=v1'
        }],
        fileList:[],
        dishesImgIndex:0,
        oldCount:0
      }
    },
    methods:{
      // 顶部标签切换状态
      handleClick(tab, event) {
        this.$stamp(null,tab.name);
      },
      // 标签移位
      sorts(index,data){
        if(data.shown == false){
          this.$set(this.dishesType,index,{name:data.name,number:data.number,shown:true})
        }else{
          this.$set(this.dishesType,index,{name:data.name,number:data.number,shown:false})
        }
      },
      // 移动至上方
      moveTop(index,data){
        if(index == 0){
          this.$message.error('不能继续上移哦!')
        }else{
          this.chooseTag = index-1
          this.$set(this.dishesType,index,{name:this.dishesType[index-1].name,number:this.dishesType[index-1].number,shown:false})
          this.$set(this.dishesType,index-1,{name:data.name,number:data.number,shown:false})
        }
      },
      // 移动至下方
      moveBottom(index,data){
        if(index+1 == this.dishesType.length){
          this.$message.error('不能继续下移哦!')
        }else{
          this.chooseTag = index+1
          this.$set(this.dishesType,index,{name:this.dishesType[index+1].name,number:this.dishesType[index+1].number,shown:false})
          this.$set(this.dishesType,index+1,{name:data.name,number:data.number,shown:false})
        }
      },
      //底部标签切换状态
      dishesTags(name,index){
        this.$stamp(null,name)
        this.$stamp(null,index)
        for(let i = 0;i<this.dishesType.length;i++){
          if(this.dishesType[i].shown == true){
            this.$set(this.dishesType,i,{name:this.dishesType[i].name,number:this.dishesType[i].number,shown:false})
          }
        }
        this.chooseTag = index
      },
      chooseOperate(data,index){
        this.$stamp(null,data)
        this.$stamp(null,index)
        this.chooseOperateStatus = index
      },
      // 多选按钮
      handleSelectionChange(val) {
        this.$stamp(null,val)
        this.multipleSelection = val;
      },
      //修改库存
      reviseCount(val,data){
        this.oldCount = data.num
        this.$set(this.dishesData,val,{
          date: data.date,
          name: data.name,
          address: data.address,
          num:data.num,
          loading:true,
          bool:false
        })     
      },
      //开始修改库存
      startReviseCount(val){
        this.$stamp(null,this.dishesData[val].num)
        if(this.oldCount == this.dishesData[val].num){
          this.$set(this.dishesData,val,{
            date: this.dishesData[val].date,
            name: this.dishesData[val].name,
            address: this.dishesData[val].address,
            num:this.dishesData[val].num,
            bool:true
          })
        }else if(!/^[+]{0,1}(\d+)$/.test(this.dishesData[val].num)){
          this.dishesData[val].num = this.oldCount
          this.$message.error('请输入大于0以上的正整数!!')
        }else{
          this.$set(this.dishesData,val,{
            date: this.dishesData[val].date,
            name: this.dishesData[val].name,
            address: this.dishesData[val].address,
            num:this.dishesData[val].num,
            bool:true
          })
        }
      },
      //拿到获取的菜品图片
      getDishesImg(val){
        this.fileList.push(val)
        this.$stamp(null,this.fileList)
        this.$stamp(null,this.dishesImgIndex)
        this.$set(this.dishesData,this.dishesImgIndex,{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          num:12,
          bool:true,
          img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1362208881,3931895225&fm=202'
        })
        this.fileList = []
      },
      // 上传菜品图片当前的索引
      uploadImg(val){
        this.dishesImgIndex = val
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
  .dishes_topTages .is-active{
    background-color:#fff!important;
    color:#FF9800!important;
  }
  .dishes_topTages .el-tabs__nav-wrap::after{
    height:0;
  }
  .dishes_topTages .el-tabs__item:hover{
    color:#FF9800;
  }
  .dishes_topTages .el-tabs__active-bar{
    /*height:0;*/
    background-color:#FF9800;
  }
  .dishes_topTages .el-tabs__header{
    margin:0 0 1px;
  }
  .dishes_topTages .el-tabs__nav{
    /*width:800px;
    display:flex;
    justify-content:space-between;*/
  }
  .dishes_search:focus{
    border-color:#cccccc;
  }
  .dishes_search .el-input__suffix,.dishes_search input::-webkit-input-placeholder,.dishes_search input{
    color:#a5a5a5;
    background-color:#e4e4e4;
  }
  .dishes_top_container{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    padding:0 20px;    
    background-color: #ffffff;
    margin-bottom:15px;
    border-radius:5px;
  }
  .dishes_bottom{
    display:flex;
  }
  .dishes_bottom_left{
    width:190px;
    margin-right: 20px;
  }
  .dishes_bottom_left ul li{
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    padding:15px;
    border-radius:5px;
    cursor:pointer;
    background-color: #a5a5a5;
    margin:5px 0;
    color:#ffffff;
  }
  .dishes_bottom_left ul li:hover{
    color:#000000;
    background-color:#ffffff;
  }
  .dishes_bottom_right{
    width:100%;
    min-width:970px;
    overflow-y:auto;
    max-height:815px;
  }
  .dishes_bottom_right_top{
    box-sizing:border-box;
    padding:5px 15px;
    margin:6px 0;
    border-radius:5px;
    background-color:#ffffff;
  }
  .dishes_bottom_right_top button{
    color:#000000;
    border-color:#000000;
    border-radius:70px;
  }
  .dishes_bottom_right_top button:hover{
    background-color:#000000;
    color:#ffffff;
  }  
  .dishes_bottom_right_top button:active{
    background-color:#000000;
    color:#ffffff;
  }
  .dishes_message{
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
  .dishes_img{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    color:#FF9800;
  }
  .dishes_img img{
    width:100px;
    height:100px;
  }
  .dishes_img i{
    margin-top:3px;
    cursor:pointer;
  }
  .dishes_img .el-loading-mask{
    z-index:0;
  }
  .dishes_tags ul{
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
  .dishes_detail{
    text-align:left;
    margin-left:7px;
    color:#696969;
  }
  .dishes_detail .dishes_detail_title{
    color:#000;
  }
  .dishes_tags ul li{
    box-sizing:border-box;
    padding:2px 5px;
    border-radius:8px;
    color:#fff;
    background-color:#009688;
    margin-right:5px;
  }
  .dishes_count{
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FF9800;
  }
  .dishes_count .el-input__inner{
    border:0;
    background-color:#fff!important;
    width:50px;
    padding:0;
    text-align:center;
  }
  .dishes_count .el-input{
    width:auto;
  }
  .dishes_count i{
    margin-left:5px;
    cursor:pointer;
  }
  .dishes_topBottom button{
    padding:7px 20px;
  }
  .dishes_table thead tr th{
    background-color:#494949;
    color:#ffffff;
  }
  .dishes_sorts{
    box-sizing:border-box;
    padding:5px;
    background-color: #ed6f00;
    color:#ffffff;
    border-radius:100%;
  }
  .dishes_sorts_box{
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .dishes_sorts_box ul li{
    box-sizing:border-box;
    padding:10px 15px;
    background-color:#ffffff;
    color:#000000;
  }
  .dishes_sorts_box ul li:hover{
    background-color:#EBEEF5;
  }
</style>
