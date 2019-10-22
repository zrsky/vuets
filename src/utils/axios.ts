/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:32:58
 * @LastEditTime: 2019-09-25 13:43:24
 * @LastEditors: Please set LastEditors
 */
// /*
//  * @Description: In User Settings Edit
//  * @Author: your name
//  * @Date: 2019-08-23 09:32:58
//  * @LastEditTime: 2019-09-25 13:36:28
//  * @LastEditors: Please set LastEditors
//  */
// import Axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
// import qs from 'qs';

// Axios.defaults.withCredentials = true
// Axios.defaults.headers = {
//   'Content-Type': 'application/json; charset=utf-8',
//   'Accept':'application/json'
// }

// class HttpRequest {
//   private baseUrl: string
//   constructor (baseUrl: string) {
//     this.baseUrl = baseUrl
//   }
//   getInsideConfig () {
//     const config = {
//       baseURL: this.baseUrl
//     }
//     return config
//   }
//   interceptors(instance: AxiosInstance, url: string) {
//     // 请求拦截
//     instance.interceptors.request.use((config) => {
//       // 添加全局的loading...
//       config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//       if (config.method === 'post') { 
//         config.data = qs.stringify({
//           ...config.data
//         })
//       }

//       if (config.method === 'get') { // 2019/4/10  by zzzq
//         config.params = {
//           ...config.params
//         }
//       }

//       return config
//     }, (error) => {
//       return Promise.reject(error)
//     })
//     // 响应拦截
//     instance.interceptors.response.use((res) => {
//       let msg: string = res.data.message
//       if(msg && msg.includes("oauth2/authorize")) {
//         // window.location.href = msg
//         // const _s_i: number = msg.indexOf('FredirectFrontURI')
//         // const _e_i: number = msg.indexOf('&response_type')
//         // const _s: string = msg.substring(0, _s_i + 20)
//         // const _e: string = msg.substring(_e_i, msg.length)
//         // let url: string = `${_s}${encodeURIComponent(window.location.href)}${_e}`
//         // console.log(url, 'url')
//         // window.location.href = url
//       }else {
//         let { data } = res
//         return data
//       }
//     }, (error) => {
//       return Promise.reject(error)
//     })
//   }
//   request (options: any) {
//     const instance = Axios.create()
//     options = Object.assign(this.getInsideConfig(), options)
//     this.interceptors(instance, options.url)
//     console.log(options)
//     return instance(options)
//   }
// }
// export default HttpRequest




import axios from 'axios'
import qs from 'qs' // 序列化post

// 创建实列， 创建不同实列处理(如果有多个请求地址，并且它们的请求和响应不同)
const instance = axios.create({
    baseURL: process.env.VUE_APP_API, // 自动加在 url之前
    timeout: 1000, // 超时请求时间
    headers: {'X-Requested-With': 'XMLHttpRequest'} // 自定义请求头部
})
instance.defaults.timeout = 5000 // 优先级高于实列初始值

// requets拦截(在请求响应then,或者catch前拦截它们) 根据返回情况统一弹出信息处理
instance.interceptors.request.use((config) => {
    config.data = JSON.stringify(config.data)
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
// response拦截
instance.interceptors.response.use((response) => {
　　　// 成功处理, example: 返回信息添加msg
    if (response.status === 200) {
        // response.msg = '请求成功'
    }
    return response
}, (error) => {
    // 失败处理 example: 页面404
    if(error.response.status === 404) {
　　 console.log('页面404')
}
    return Promise.reject(error)
})

/**
 * 封装get方法
 */
export function get(url:string, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
/**
 * 封装post请求
 */
 export function post(url:string, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, qs.stringify(data))
            .then(response => {
            resolve(response.data)
            }, err => {
            reject(err)
        })
    })
}