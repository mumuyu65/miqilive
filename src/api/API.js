/**
 * Created by yangyangyu on 2017/6/14.
 * 统一的api接口部分
 */

import axios from 'axios'
import config from './config'

class API {
    login(param) {
        config.data = param;
        return axios.post('/cctv/login', {}, config);
    }

    economicsZhibo(param) {
        return axios.get('https://mt.china-vm.com:57077/query/newslist', {
            params: param
        }, config);
    }

    economicsNews(param) {
        return axios.get('https://mt.china-vm.com:57077/query/newslist', {
            params: param
        }, config);
    }

    economicsTeacher(param) {
        return axios.get('https://mt.china-vm.com:57077/query/newslist', {
            params: param
        }, config);
    }
}
export default API;