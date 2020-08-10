<template>
  <div class="about">
    <h1>我是关于的页面啊</h1>
    <ul>
      <li 
        v-for="(item, index) in list" 
        :key='index'
        :class="{move:candelete.id==item.id}"
        @touchstart="touchStart(item)"
        @touchend="touchEnd(item)"
      >
        {{item.text}}{{item.id}}
        <div class="del" @click="deleteItem(index)">删除</div>
      </li>
    </ul>
    <div class="time-box">
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          title="选择完整时间"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPicker: false,
      minDate: new Date(2020,1,1),
      maxDate: new Date(2120,1,1),
      currentDate: new Date(),
      // 数据
      list: [{
        id: 1,
        text: '请左滑动删除我吧'
      },{
        id: 2,
        text: '请左滑动删除我吧'
      },{
        id: 3,
        text: '请左滑动删除我吧'
      },{
        id: 4,
        text: '请左滑动删除我吧'
      },{
        id: 5,
        text: '请左滑动删除我吧'
      },{
        id: 6,
        text: '请左滑动删除我吧'
      }],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {}, // 滑动的item
    }
  },
  methods: {
    onConfirm (val) {
      console.log("1111", val)
    },
    deleteItem(index){
      this.list.splice(index, 1)
      // splice方法是删除数组某条数据，或者向某个位置添加数据
    },
    touchStart(item) {
      let touchs = event.changedTouches[0];
      // 记录开始滑动的鼠标位置
      this.clientNum.x1 = touchs.pageX;
      this.candelete = {};
    },
    touchEnd(item) {
      let touchs = event.changedTouches[0];
      // 记录结束滑动的鼠标位置
      this.clientNum.x2 = touchs.pageX;
      this.candelete = {};
      // 判断滑动距离大于50，判定为滑动成功，否则失败
      if (
        this.clientNum.x2 < this.clientNum.x1 &&
        Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
      ) {
        event.preventDefault();
        this.candelete = item;
      } else if (
        this.clientNum.x2 > this.clientNum.x1 &&
        Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
      ) {
        event.preventDefault();
        this.candelete = {};
      }
    }
  }
}
</script>
<style lang="less" scoped>
.time-box{
  margin-bottom: 100px;
}
*{
  margin:0;
  padding: 0;
}
 li{
  background: #fdfdfd;
  border: 1px solid #e1e1e1;
  line-height: 120px;
  position: relative;
  transform: translateX(0);
  transition: all .25s ease-in-out; /*滑动效果更生动*/
  padding-left: 10px;
  list-style: none;
  border-radius: 10px;
  box-shadow: 0 0 4px #f5f5f5;
  margin-bottom: 15px;
  z-index: 10;
}
ul{
  overflow-x: hidden; /*隐藏ul x轴的滚动条*/
}
li.move {
  transform: translateX(-100px); /*滑动后x轴位移-60px,使其可见*/
}
.del {
  position: absolute;
  top: 0;
  right: -1px;
  z-index: 3;
  width: 100px;
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: #ff5b45;
  transform: translateX(100px); /*默认x轴位移60px，使其隐藏*/
  border-radius: 10px;
}

li.move {
  .del{
    z-index: -1;
    right: 10px;
  }
}

</style>