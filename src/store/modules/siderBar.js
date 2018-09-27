const siderBar = {
	state: {
    list: [{
      "muid":1,
      "path":"/manager/index",
      "component":"",
      "mulevel":1,
      "name":"首页",
      "ischild":"false",
      "child":[]},{
      "muid":2,
      "path":"/manager/stores",
      "component":"",
      "mulevel":1,
      "name":"店铺管理",
      "ischild":"false",
      "child":[]},
      {
      "muid":3,
      "path":"/manager/dishes",
      "component":"",
      "mulevel":1,
      "name":"商品管理",
      "ischild":"false",
      "child":[]},
      {
      "muid":4,
      "path":"",
      "component":"",
      "mulevel":1,
      "name":"订单管理",
      "ischild":"true",
      "child":[
      {
      "muid":12,
      "path":"/manager/orders",
      "component":"",
      "mulevel":2,
      "name":"订单处理",
      "ischild":"false",
      "fatheriId":4,
      "child":[
      ]
      },
      {
      "muid":13,
      "path":"/manager/orderSearch",
      "component":"",
      "mulevel":2,
      "name":"订单查询",
      "ischild":"false",
      "fatheriId":4,
      "child":[]}
      ]},
      {
      "muid":5,
      "path":"/manager/comment",
      "component":"",
      "mulevel":1,
      "name":"评价管理",
      "ischild":"false",
      "child":[]},
      {
      "muid":6,
      "path":"/manager/flux",
      "component":"",
      "mulevel":1,
      "name":"流量分析",
      "ischild":"false",
      "child":[]},
      {
      "muid":7,
      "path":"/manager/money",
      "component":"",
      "mulevel":1,
      "name":"资金状况",
      "ischild":"false",
      "child":[]},
      {
      "muid":8,
      "path":"/manager/actives",
      "component":"",
      "mulevel":1,
      "name":"营销活动",
      "ischild":"false",
      "child":[]}
      ]
	},
	mutations: {
    
	},
	actions: {
    
	},
	getters: {

	}
}
export default siderBar