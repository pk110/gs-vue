import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from './../utils/utils'
import store from './../store/store'

Vue.use(Router)

// 懒加载组件
const router = new Router({
  mode:"history",
  routes: [
    {
      // +++++++++++++++++++++ 首页
      path: '/',
      redirect: '/manager/login'
    },
    {
      // +++++++++++++++++++++ 登录
      path: '/manager/index',
      name:'siderBar',
      component:  resolve => require(['@/pages/siderBar'], resolve),
      children:[{
        // +++++++++++++++++++++ 首页
        path: '/manager/index',
        name:'index',
        component:  resolve => require(['@/pages/index'], resolve)
      },{
        // +++++++++++++++++++++ 店铺管理
        path: '/manager/stores',
        name:'stores',
        component:  resolve => require(['@/pages/stores'], resolve)
      },{
        // +++++++++++++++++++++ 店铺详情页
        path: '/manager/storesDetail',
        name:'storesDetail',
        component:  resolve => require(['@/pages/storesDetail'], resolve)
      },{
        // +++++++++++++++++++++ 菜品管理
        path: '/manager/dishes',
        name:'dishes',
        component:  resolve => require(['@/pages/dishes'], resolve)
      },{
        // +++++++++++++++++++++ 订单管理
        path: '/manager/orders',
        name:'order',
        component:  resolve => require(['@/pages/order'], resolve)
      },{
        // +++++++++++++++++++++ 查看地图
        path: '/manager/map',
        name:'map',
        component:  resolve => require(['@/pages/map'], resolve)
      },{
        // +++++++++++++++++++++ 订单查询管理
        path: '/manager/orderSearch',
        name:'orderSearch',
        component:  resolve => require(['@/pages/orderSearch'], resolve)
      },{
        // +++++++++++++++++++++ 评价管理
        path: '/manager/comment',
        name:'comment',
        component:  resolve => require(['@/pages/comment'], resolve)
      },{
        // +++++++++++++++++++++ 流量管理
        path: '/manager/flux',
        name:'flux',
        component:  resolve => require(['@/pages/flux'], resolve)
      },{
        // +++++++++++++++++++++ 资金管理
        path: '/manager/money',
        name:'money',
        component:  resolve => require(['@/pages/money'], resolve)
      },{
        // +++++++++++++++++++++ 活动管理
        path: '/manager/actives',
        name:'actives',
        component:  resolve => require(['@/pages/actives'], resolve)
      },{
        // +++++++++++++++++++++ 活动管理
        path: '/manager/activesDetail',
        name:'activesDetail',
        component:  resolve => require(['@/pages/activesDetail'], resolve)
      },{
        // +++++++++++++++++++++ 刷新页面
        path: '/manager/refresh',
        name:'refresh',
        component:  resolve => require(['@/pages/refresh'], resolve)
      }]
    },{
      // +++++++++++++++++++++ 登录
      path: '/manager/login',
      name:'login',
      component:  resolve => require(['@/pages/login'], resolve)
    },{
      // +++++++++++++++++++++ 申请权限
      path: '/manager/applyPower',
      name:'applyPower',
      component:  resolve => require(['@/pages/applyPower'], resolve)
    },{
      // +++++++++++++++++++++ 错误
      path: '/manager/error',
      name:'error',
      component:  resolve => require(['@/pages/error'], resolve)
    }
  ]
})

// 全局路由守卫
let routeList = [];
router.beforeEach((to, from, next) => {
  //判断浏览器版本
  if(!window.localStorage){
    alert("浏览器版本过低,请换一个浏览器或者升级该浏览器");
    return false;
  }else{
    store.state.loading = true
    //读取cookie，需要注意的是cookie是不能存中文的，如果需要存中文，解决方法是后端先进行编码encode()，前端取出来之后用decodeURI('string')解码。（安卓可以取中文cookie，IOS不行）
    if(localStorage.getItem('token')){
      // localStorage.setItem("c",3);
      console.info('表示用户已经是登陆状态，不需要刷新页面跑到登陆页面') 
      // to: Route: 即将要进入的目标 路由对象
      // from: Route: 当前导航正要离开的路由
      // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
      store.state.loading = false
      next();
    }else{
      console.info('表示用户未登陆状态，第一次需要到登陆页面')
      if(to.fullPath == '/manager/login'){
        store.state.loading = false 
        next()
      }else{
        console.info('在未登陆时都是进入登陆的页面')
        store.state.loading = false 
        next('/manager/login');
      }
    }
  }
})

// router.afterEach((to) => {
  // store.state.loading = false
// })

export default router;



