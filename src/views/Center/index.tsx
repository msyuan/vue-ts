import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Center extends Vue {
  render () {
    return (
      <div class="ui-box">
        <h1>我是个人中心页面</h1>
      </div>
    )
  }
}
