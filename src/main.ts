/*
 * @Description: 
 * @Author: your name
 * @Date: 2020-06-05 10:58:22
 * @LastEditTime: 2020-08-04 00:12:00
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\src\main.ts
 */ 

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
