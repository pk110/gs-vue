<template>
  <div class="notice_index">
    <el-badge is-dot class="item">
      <img style="width:35px;height:35px;" @click="clickNotice" src="./../assets/notice.png" />
    </el-badge>
    <transition name="el-zoom-in-left"  mode="out-in">
      <div class="notice_container" v-if="showNotice == false">
        <router-link to="/manager/orders">
          <div class="notice">
            <i class="el-icon-warning" style="padding-right:10px;font-size:16px;"></i>
            <span>您有3个催单需要处理，请注意备货并配送，点击查看</span>
          </div>
        </router-link>
        <i class="el-icon-circle-close-outline" @click="close"></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    data () {
      return {
        
      }
    },
    methods:{
      close(){
        this.$store.state.showNotice = !this.$store.state.showNotice
      },
      clickNotice(){
        this.$store.state.showNotice = !this.$store.state.showNotice
      }
    },
    computed: {
      showNotice(){
        return this.$store.state.showNotice
      }
    },
    components: {
      
    },
    created(){
      
    }
}
</script>

<style>
  .notice_index{
    position:fixed;
    bottom:30vh;
    left:80px;
    z-index: 2000;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
  }
  .notice_container{
    position: sticky;
    top: 0px;
    z-index: 10;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    background-color:#ff3b21;
    box-sizing:border-box;
    padding:5px 15px;
    cursor:pointer;
    border-radius:5px;
  }
  .notice_container a{
    display:inline-block;
    flex:1;
  }
  .notice{
    color:#fff;
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
  .notice_container i{    
    font-size: 18px;
    padding-left: 5px;
  }
  .notice_container i:hover{
    transform:scale(1.1,1.1)
  }
</style>
