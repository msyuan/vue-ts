import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Category extends Vue {
  render () {
    return (
      <div class="ui-box">
        <h1>我是分类</h1>
      </div>
    )
  }
}
