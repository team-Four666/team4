import axios from 'axios'
import Store from '../store/store'
import ActionCretor from '../store/actionCreator' 
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('请求拦截器',config)
    let {method} = config
    let token = localStorage.getItem('token')
    // if(method  === 'post'){
    //   config.url+=`&token=${token}`
    // }
    if(method === 'post'){
      config.data += `&token=${token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status === 200){
            console.log(response.data.err)
          if(response.data.err === -998){
          Store.dispatch(ActionCretor.changeModelState())
          }
      return response.data
    }else{
      return Promise.reject('请求出错');//也是在链式调用的catch处理
    }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default axios