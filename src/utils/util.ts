import Cookies from 'js-cookie'
const userInfo = {
  userId: "10001",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNWQ2YzczMjNjOGZiYzIxOTMwMzViZTdmIn0sImV4cCI6MTU4NzM1NDMwMCwiaWF0IjoxNTg3MjY3OTAwfQ.UIT2EIa5v-bSk4WKt4xfypVsEwt312BPyEhVDoVkL0o"
}
//cookie保存的天数
var cookieExpires = 1;
export const TOKEN_KEY = 'token'
export const USER_KEY = 'userId'

//保存token
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}
//（浏览器关闭清空）
// export const setToken = (token) => {
//   window.sessionStorage.setItem(TOKEN_KEY, token)
// }

//获取token
export const getToken = () => {
  //const token = Cookies.get(TOKEN_KEY)
  const token = userInfo.token  //为了测试暂时写死
  if (token) return token
  else return false
}

//删除token
export const removeToken = ():any => {
  Cookies.remove(TOKEN_KEY);
  const token = Cookies.get(TOKEN_KEY)
  if (!token) return true
}

//保存用户id
export const setUserId = (userId) => {

  if (userId == undefined || typeof (userId) === undefined) {
    return
  }
  //sessionStorage.setItem(USER_KEY, userId);
  //window.localStorage.setItem(USER_KEY, userId);
  console.log("userId", userId);
  Cookies.set(USER_KEY, userId, { expires: cookieExpires || 1 })
}

//获取用户id
export const getUserId = () => {
  //const userId = Cookies.get(USER_KEY)
  const userId = userInfo.userId  //为了测试暂时写死
  if (userId) return userId
  else return false
}