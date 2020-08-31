/*
 * @Description:
 * @Author: your name
 * @Date: 2020-08-10 10:52:01
 * @LastEditTime: 2020-08-27 17:23:57
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\src\store\actions.ts
 */import { userLogin } from '../service/users'

const actions = {
  // 登陆
  login({ commit }, params) {
    commit('SET_USER_INFO', params)
    commit('SET_CART_NUMBER', 88)
  }
}

export default actions
