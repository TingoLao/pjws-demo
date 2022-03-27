import axios from "axios";
import { reject } from "core-js/fn/promise";
import { url } from "inspector";
import { data } from "jquery";
import { resolve } from "path";

let Ajax = axios.create({
    baseURL: "http://127.168.0.0.1:3000",
    timeout: 5000
})

//get请求

const get = (url, params) => {
    //设置token
    Ajax.defaults.headers['token'] = localStorage.getItem('token')
    return new Promise((resolve, reject) => {
        Ajax.get(url, { params }).then(res => resolve(res.data)).catch(err => reject(err))
    })
}

// post请求

const post = (url, params) => {
    // 设置token
    Ajax.defaults.headers['token'] = localStorage.getItem('token')
    return new Promise((resolve, reject) => {
        Ajax.post(url, params).then(res => resolve(res.data)).catch(err => reject(err))
    })
}

export default { get, post }