/**
 * Created by yangyangyu on 2017/6/14.
 * 统一的api接口部分
 */

import axios from 'axios'
import config from './config'

class API {
    login(param) {
        config.data = param;
        return axios.post('/gusmrk/login', {}, config);
    }

    getVcode(param) {
        config.data = param;
        return axios.post('/gusmrk/vcode/get', {}, config);
    }

    register(param) {
        config.data = param;
        return axios.post('/gusmrk/register', {}, config);
    }

    getGift(param) {
        config.data = param;
        return axios.post('/gusmrk/gift/query', {}, config);
    }

    getZhibo(param) {
        config.data = param;
        return axios.post('/gusmrk/liveinfo', {}, config);
    }

    userLevel(param) {
        config.data = param;
        return axios.post('/gusmrk/level/query', {}, config);
    }

    getNews(param) {
        config.data = param;
        return axios.post('https://api.yddtv.cn:9002/cctv/news/query', {}, config);
    }


}
export default API;