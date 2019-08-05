import axios from 'axios'
import example from './example'
import xswap from './xswap'
// 接口模块

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL: 'http://10.226.116.181:1442',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 请求拦截器
ajaxinstance
  .interceptors
  .request
  .use((config) => {
    return config
  }, (error) => {
    Promise.reject(error)
  })

// 响应拦截器
ajaxinstance
  .interceptors
  .response
  .use((response) => {
    return response.data
  }, (error) => {
    return Promise.reject(error)
  })

/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
  // ...example
  ...xswap
}
export const ajax = ajaxinstance
export default API
