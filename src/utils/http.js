import axios from 'axios';
import {
  Message
} from 'element-ui';
import config from '@/config';
const version = 'ds/v1';
console.log('====================================');
console.log(config);
console.log('====================================');
var xhr = axios.create({
  baseURL: config.API_HOST,
  withCredentials: true,
  headers: {}
});
xhr.interceptors.response.use((res) => {
  try {
    return res.data;
  } catch (e) {
  }
}, err => {
  try {
    if (err) {
      if (err && err.response && err.response.status === 401 && err.response.data.error_code === 302) {
        return false;
      }
      const data = err.response && err.response.data;
      Message.error({
        content: (data && data.error_msg) || err.message || '抱歉，网络错误'
      });
      return Promise.reject(err);
    }
  } catch (e) {
  }
});

export default {
  get(url, params, ver = version) {
    return xhr.get(ver + url, { params: params });
  },
  del(url, params, ver = version) {
    return xhr.delete(ver + url, {data: params});
  },
  patch(url, params, ver = version) {
    return xhr.patch(ver + url, params);
  },
  put(url, params, ver = version) {
    return xhr.put(ver + url, params);
  },
  post(url, params, ver = version) {
    return xhr.post(ver + url, params);
  },
  setHeaders(obj) {
    xhr.defaults.headers = {
      ...xhr.defaults.headers,
      ...obj
    };
  },
  getXHRInstance() {
    return xhr;
  }
};
