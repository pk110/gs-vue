/** 
 * api接口的统一出口
 */
// 首页模块接口
import index from './../api/index';
// 登录模块的接口
import login from './../api/login';

// 导出接口
export default {    
  index,
  login
}