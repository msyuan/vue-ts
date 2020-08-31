import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getToken } from '@/utils/util'
// 登陆相关的路由
import Login from './login'

const Home = () => import(/* webpackChunkName: "about" */ '../views/Home')

Vue.use(VueRouter)

// @ts-ignore
const routes: Array<RouteConfig> = [
  ...Login,
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      requireAuth: true // 该字段为true-表示进入这个路由是需要验证登录
    }
  }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('savedPosition', savedPosition)
          resolve(savedPosition)
        }, 500)
      })
    } else {
      return { x: 0, y: 0 }
    }
		// return 期望滚动到哪个的位置 -让页面滚动到顶部
		// return { x: 0, y: 0 } 
	},
  routes
})

// 判断是否登录
router.beforeEach((to, from, next) => {
  let token = getToken();
  let requireAuth = to.matched.some(res => res.meta.requireAuth)
  // console.log("token", token);
  if (requireAuth) {
    // 判断缓存里面是否有token ，在登录时已经保存在cookie里。
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } //将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
});

export default router
