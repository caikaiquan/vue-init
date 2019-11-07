import axios from './axios';

// 根据不同环境配置不同的baseURL
let mode = process.env.VUE_APP_CURRENTMODE;
if (mode === 'dev') {
    //console.log(`这里是开发环境 mode = ${mode}`);
    axios.defaults.baseURL = '/api'
} else if (mode === 'beta') {
    //console.log(`这里是测试环境 mode = ${mode}`);
    axios.defaults.baseURL = ''
} else {
    //console.log(`这里是生产环境 mode = ${mode}`);
}

// 只封装了两种常用的请求方式  get/post
const request = (method, url, data) => {
    method = method.toLocaleLowerCase();
    if (method === 'get') {
        return axios.get(url, { params: data })
    } else if (method === 'post') {
        return axios.post(url, data)
    }
}

export default request;