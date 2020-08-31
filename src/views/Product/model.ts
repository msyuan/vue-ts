// 商品列表模拟数据
export const productList = []
let i = 0
const l = 10
for (i; i < l; i++) {
  productList.push({
    productId: 1000 + i,
    img: require('../../assets/images/demo/2.jpg'),
    title: i + '夏季黑色气质型外套新品',
    price: 100.88 + i
  })
}

// 分类列表模拟数据
export const categoryList = [
  {
    categoryId: 1001,
    categoryName: '女装'
  },
  {
    categoryId: 1002,
    categoryName: '上衣'
  },
  {
    categoryId: 1003,
    categoryName: '裙裤'
  },
  {
    categoryId: 1004,
    categoryName: '内衣'
  },
  {
    categoryId: 1005,
    categoryName: '套装'
  },
  {
    categoryId: 1006,
    categoryName: '美妆'
  },
  {
    categoryId: 1007,
    categoryName: '女鞋'
  },
  {
    categoryId: 1008,
    categoryName: '男装'
  },
  {
    categoryId: 1009,
    categoryName: '家具'
  },
  {
    categoryId: 10010,
    categoryName: '运动'
  }
]
