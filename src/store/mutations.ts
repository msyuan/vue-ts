/*
 * @Description:
 * @Author: laoyuan
 * @Date: 2020-08-10 10:51:52
 * @LastEditTime: 2020-08-10 15:53:33
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\src\store\mutations.ts
 */
const mutations = {
  SET_USER_INFO (state, resp) {
    state.user = resp
  },
  SET_CART_NUMBER (state, num) {
    state.cartsNumber = num
  }

}

export default mutations
