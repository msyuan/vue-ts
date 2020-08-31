declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// 解决less文件报错问题
declare module '*.less'{
	const less: any
	export default less
}
