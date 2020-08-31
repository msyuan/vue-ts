import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Cart extends Vue {
  render () {
    return (
      <div class="ui-box">
        <h1>我是购物车</h1>
      </div>
    )
  }
}
