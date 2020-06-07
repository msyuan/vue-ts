/*
 * @Description: 登陆注册相关的路由
 * @Author: your name
 * @Date: 2020-06-07 21:01:13
 * @LastEditTime: 2020-06-07 21:02:20
 * @LastEditors: Please set LastEditors
 * @FilePath: \vue4.0+TS-gitee\src\router\login.ts
 */ 

const Login = () => import ( /*webpackChunkName: "login" */ '@v/Login')


export default [
	{
		path: '/login',
		name: Login,
		component: Login
	}
]