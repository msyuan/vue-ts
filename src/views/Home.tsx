import { Vue, Component } from 'vue-property-decorator'
import TabBar from '../components/TabBar.vue'
// const TabBar = () =>  import('../components/TabBar.vue')

@Component ({
  components: {
    TabBar
  }
})
export default class Home extends Vue {

 
  render () {
    return <tabBar></tabBar>
  }
}
