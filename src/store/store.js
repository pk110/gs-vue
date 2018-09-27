import Vue from 'vue'
import Vuex from 'vuex'
import siderBar from './modules/siderBar'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    role:0,  //登录进来的角色类型   
    storesMessage:'',
    search:'',
    network:true, //判读是否断网
    loading:false,  //外层加载画面控制
    showNotice:true, //提示订单催单警告
    token:''   //用户的token
  },
  getters: {
    storesMessage(state){
      return state.storesMessage
    },
    search(state){
      return state.search
    }
  },
  mutations: {
    changeNetwork:(state,data) =>{
      state.network = data
    }
  },
  actions: {
    changeNetwork:(context,data) =>{
      context.commit('changeNetwork',data)
    }
  },
  modules: {
    siderBar
  }
})

export default store