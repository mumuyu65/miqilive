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


}
export default API;