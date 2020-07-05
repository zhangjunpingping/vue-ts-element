import Cookies from 'js-cookie'

export const getToken = tokenKey => Cookies.get(tokenKey) // 获取token
export const setToken = (value, tokenKey: string) =>
  Cookies.set(tokenKey, value) // 设置token
export const removeToken = tokenKey => Cookies.remove(tokenKey) // 移除token
