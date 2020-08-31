<template>
  <div class="tab-box">
    <component :is="currentComponent"></component>
    <div class='tab-bar'>
      <div :class="[activeIndex === idx ? 'cur' : '','item']" v-for="(v, idx) in TabList" @click="switchTo(idx)" :key='v.id'>
        <span :class="[v.className]"></span>
        <span class="text">{{v.text}}</span>
        <span v-if="v.id === 3" class="cart-count">{{cartNum}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { TabList } from './model'
import Product from '../views/Product'
import Category from '../views/Category'
import Cart from '../views/Cart'
import Center from '../views/Center'

export default {
  name: 'TabBar',
  components: {
    Product,
    Category,
    Cart,
    Center
  },
  data () {
    return {
      currentComponent: 'Product',
      TabList: TabList,
      activeIndex: 0,
      cartNum: 0
    }
  },
  created () {
    this.cartNum = this.$store.state.cartsNumber
  },
  methods: {
    // 切换函数
    switchTo (i) {
      console.log("切换i",i)
      this.activeIndex = i
      switch (i) {
        case 0:
          this.currentComponent = 'Product'
          break
        case 1:
          this.currentComponent = 'Category'
          break
        case 2:
          this.currentComponent = 'Cart'
          break
        case 3:
          this.currentComponent = 'Center'
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>