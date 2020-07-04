import axios from 'axios'
import * as pathToRegexp from 'path-to-regexp'

const option = {
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : undefined,
  timeout: +process.env.REQUEST_TIMEOUT || 30000 // 超时时间
}

const instance = axios.create(option)

// 发送请求前，对数据进行处理
const processRequest = config => {
  config.method = config.method || 'GET'
  return config
}

// 请求返回成功后，对返回数据进行处理
const processResponse = response => {
  return response.data
}

// 请求返回错误后，对错误进行处理
const processResponseError = error => {
  if (error && error.response && error.response.status === 401) {
    if (!error.response.config.url.includes('login')) {
      // 其他接口鉴权失败,即 token 失效
      window.location.href = '/login'
    }
  } else {
    // message.error(`请求失败，http错误码为${error.response.status}`)
    Promise.reject(error)
  }
}

// 对请求进行拦截
instance.interceptors.request.use(
  config => {
    return processRequest(config)
  },
  error => Promise.reject(error)
)

// 对返回进行拦截
instance.interceptors.response.use(
  response => {
    return processResponse(response)
  },
  error => {
    return processResponseError(error)
  }
)

/**
 * 发送请求
 * /api/v1/foo/bar/:id => request(api.xxx, data, {id: 1})
 * /api/v1/foo/bar?id=1 => request(api.xxx, {id: 1})
 * @param api 对象 {url, method}，见 api.ts
 * @param data 需要发送的数据，可以是 querystring(get) 也可以是 body(post, put, ...)
 * @param urlParams 组成 url 的变量
 * @param options 额外的配置选项，同 axios
 * @param headers http head
 */
const request = (
  api: {
    url: string
    method?: any
  },
  data?: object,
  urlParams?: object,
  options?: object,
  headers?: object
) => {
  if (urlParams) {
    api = {
      ...api,
      url: pathToRegexp.compile(api.url)(urlParams)
    }
  }

  const config: any = {
    headers: {
      ...headers
    },
    ...options,
    ...api
  }
  if (/get/i.test(api.method) || /delete/i.test(api.method)) {
    config.params = data
  } else {
    config.headers['Content-Type'] = 'application/json'
  }

  return instance(config)
}

export { request }
