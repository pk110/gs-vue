/**
 * index模块接口列表
 */

import base from './../http/base'; // 导入接口域名列表
import axios from './../http/http'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const index = {    
    // 首页   
    index (id, params) {        
        return axios.get(`${base}/api/v1/manager/page`,{
          storeId:params.storeId   
        });    
    },    
    // 新闻详情,演示    
    articleDetail (id, params) {        
        return axios.get(`${base}/topic/${id}`, params);    
    },
    // post提交    
    login (params) {        
        // return axios.post(`${base}/accesstoken`, qs.stringify(params));
        return axios.post(`${base}/accesstoken`, params);     
    }
}

export default index;