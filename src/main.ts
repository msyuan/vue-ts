/*
 * @Description: 
 * @Author: your name
 * @Date: 2020-06-05 10:58:22
 * @LastEditTime: 2020-08-04 23:41:37
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\src\main.ts
 */ 

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
