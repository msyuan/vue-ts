import { Vue, Watch, Prop, Component } from 'vue-property-decorator'
import { userLogin } from '@/service/users'
import style from './style/login.module.less'

@Component
export default class Login extends Vue {
  @Prop({ default: () => [], type: Array }) value

  get userData () {
    return ''
  }

  @Watch('value', { deep: true })
  onValue(val) {
    console.log('v', val)
  }

  created() {
    console.log('登录页面')
    this.login()
  }

  // 登录
  login () {
    const param = {
      phone: 13111111111,
      password: '111111'
    }
    userLogin(param).then(resp => {
      console.log(resp)
      this.$store.dispatch('login', resp)
    })
  }

  render () {
    return (
      <div class={style.loginBox}>
				  我是登陆页面啊{this.$store.state.user.msg}
      </div>
    )
  }
}
