import axios from './request.js'

const http = {
  get(url, params) {
    const config = {
      method: 'get',
      url: url
    }
    if (params) config.params = params
    console.log(config)
    return axios(config)
  },
  post(url, params) {
    const config = {
      method: 'post',
      url: url
    }
    if (params) config.data = params
    return axios(config)
  },
  put(url, params) {
    const config = {
      method: 'put',
      url: url
    }
    if (params) config.params = params
    return axios(config)
  },
  delete(url, params) {
    const config = {
      method: 'delete',
      url: url
    }
    if (params) config.params = params
    return axios(config)
  }
}
export default http
