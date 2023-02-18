import axios, { type AxiosRequestHeaders, type AxiosResponse } from 'axios'
import NProgress from 'nprogress'
import { ElMessage } from 'element-plus'
import 'nprogress/nprogress.css'
// 定义response对象的data接口，约束response.data的类型
interface ResponseData<T> {
  msg: string,
  result: T
}
const instance = axios.create({
  baseURL: '/api',
  timeout: 20000
})
instance.interceptors.request.use(config => {
  NProgress.start()
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse<ResponseData<any>, any>) => {
  NProgress.done()
  return response.data.result;
}, error => {
  NProgress.done()
  // 对响应错误做点什么
  // if (error.message.indexOf('timeout') != -1) {
  //   ElMessage.error('网络超时');
  // } else if (error.message == 'Network Error') {
  //   ElMessage.error('网络连接错误');
  // } else {
  //   if (error.response.data) ElMessage.error(error.response.statusText);
  //   else ElMessage.error('接口路径找不到');
  // }
  return Promise.reject(error);
});
export default instance