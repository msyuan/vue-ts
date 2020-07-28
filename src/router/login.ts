/*
 * @Description: 登陆注册相关的路由
 * @Author: your name
 * @Date: 2020-06-07 21:01:13
 * @LastEditTime: 2020-07-29 00:11:47
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\src\router\login.ts
 */ 

const Login = () => import ( /*webpackChunkName: "login" */ '@/views/Login')


export default [
	{
		path: '/login',
		name: Login,
		component: Login
	}
]