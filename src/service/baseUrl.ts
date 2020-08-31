// 接口基本地址
let baseURL = 'http://192.168.2.102:3000'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://192.168.2.102:3000'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = ''
} else {
  baseURL = ''
}

export default baseURL
