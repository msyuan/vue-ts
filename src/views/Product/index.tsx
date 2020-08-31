import { Vue, Component, Prop } from 'vue-property-decorator'
import { categoryList} from './model'
import { getHomeProduct } from '../../service/product'
import './style.less'

// 放在全局变量，因为报错You may have an infinite update loop in a component render function
let pageNumber = 1
@Component
export default class Product extends Vue {

  @Prop() readonly msg!: string
  @Prop({default: 'yuan'}) name: string
  
  get fullPrice(): string {
    return ''
  }

  refreshing: boolean = false  // 下拉刷新数据
  loading: boolean = false   // 加载状态
  finished: boolean = false    // 是否加载完成
  isCheck: boolean = false   // 是否在初始化时立即执行滚动位置检查
  // pageNumber: number = 1     //分页页码 1-第一页
  pageSize: number = 10      //每页条数
  productList = []   // productList

  created () {
    this.getProduct()
  }

  // 搜索函数
  gotoSearch () {
    // this.$router.push({path:'/search'})
  }

  /**
   * 获取商品数据
   * @hasMore  控制分页是否是上垃加载
   */
  getProduct (hasMore = false) {
    var params = {
      pageNumber: pageNumber,
      pageSize: this.pageSize,
    }
    getHomeProduct(params).then(res => {
      var data = res.data
      console.log("返回的数据", data.list)
      //全部数据加载完成
      if(data && data.list.length === 0){
        this.finished = true
      }
      if(hasMore){
        this.productList = this.productList.concat(data.list)
      }else{
        this.productList = data.list
      }
      console.log("this.productList", this.productList)
      this.loading = false
      this.refreshing = false
    })
  }

  // 下拉刷新数据
  onPullRefresh () {
    this.loading = false
    this.finished = false
    pageNumber = 1
    console.log("下拉加载", pageNumber)
    this.getProduct()
  }

  // 加载更多数据
  onLoadMore () {
    pageNumber++
    console.log("上拉加载", pageNumber)
    this.getProduct(true)
  }

  // 搜索模块
  renderSearch () {
    return (
      <div class="search-box">
        <div class="ui-search">
          <input type="text" class="ui-input" placeholder="搜索商品" ocClick={this.gotoSearch} />
        </div>
      </div>
    )
  }
  
  // 分类模块
  renderCategory () {
    return (
      <ul class="category-list">
        { categoryList.map((item, index) => {
          return <li class={'item '+'item' + index} key={item.categoryId}>{item.categoryName}</li>
        })} 
      </ul>
    )
  }

  // 商品模块
  renderProduct () {
    return (
      <div class="product-box">
        <van-pull-refresh v-model={this.refreshing} on-refresh={this.onPullRefresh}>
          <van-list
            v-model={this.loading}
            finished={this.finished}
            immediate-check={this.isCheck}
            finished-text="没有更多了"
            on-load={this.onLoadMore}
          >
            <ul class="product-list van-clearfix">
              {
                this.productList.map(item => {
                  return (
                    <li class="item" key={item.productId}>
                      <img v-lazy={item.img} ref={item.img} alt={item.title} />
                      <div class="info">
                        <p class="title">{item.title}</p>
                        <p class="price">¥{item.price}元</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </van-list>
        </van-pull-refresh>
      </div>
    )
  }

  render () {
    return (
      <div class="home-box">
        { this.renderSearch() }
        { this.renderCategory() }
        { this.renderProduct() }
      </div>
    )
  }
}
