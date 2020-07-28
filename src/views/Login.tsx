import { Vue, Watch, Prop } from 'vue-property-decorator'
import { userLogin } from '@/service/users'


export default class Login extends Vue{
  @Prop ({ default: () => [], type: Array }) value


  @Watch ('value', { deep: true})
  onValue(val){
    console.log("v", val)
	}

	created() {
		console.log("登录页面")
		this.login()
	}
	login () {
		let param = {
			phone: 13148454252,
			password: 111111
		}
		userLogin(param).then(resp => {
			console.log(resp)
		})
	}

	render () {
		return (
			<div>
				  我是登陆页面
			</div>
		)
	}
}