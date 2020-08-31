/*
 * @Description:
 * @Author: your name
 * @Date: 2020-07-28 23:44:02
 * @LastEditTime: 2020-08-28 18:33:59
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\src\service\users.ts
 */
import { POST } from './request'
import API from './api'

// 登陆
export const userLogin = (param) => {
  return POST(API.yuan_users_login, param)
}