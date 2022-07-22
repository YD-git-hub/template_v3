import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

if (process.env.NODE_ENV === 'development') {
  //本地(开发)环境
  axios.defaults.baseURL = '/api';
  // axios.defaults.baseURL = '/bpi';
} else if (process.env.NODE_ENV === 'production') {
  //线上（开发）环境
  axios.defaults.baseURL = '';
}

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    }
  },
  error => {
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        case 401:
            console.log('401');
          break;
          // 404请求不存在
        case 404:
            console.log('网络请求不存在');
          break;
          // 其他错误，直接抛出错误提示
        case 500:
            console.log('服务器出小差了');
          break;
        default:
            console.log('error.response.data.message');
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url:string, params:object) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url:string, params:object) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function Uploadpost(url:string, params:object) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data;charset=UTF-8'
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}