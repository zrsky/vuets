/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:26:22
 * @LastEditTime: 2019-09-25 13:45:35
 * @LastEditors: Please set LastEditors
 */
import {get, post} from '@/utils/axios'


// export const login = <T>(data: T) => {
//     return axios.request({
//         url: '/cms/login',
//         method: 'get',
//         data
//     })
// } 


export const login = <T>(data: T) => {
    return get('/cms/login', data);
}