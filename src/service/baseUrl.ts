//接口基本地址
let baseURL = 'http://47.110.13.17:3000'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://47.110.13.17:3000'
}else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://47.110.13.17:3000'
}else{
  baseURL = 'http://47.110.13.17:3000'
}

export default baseURL