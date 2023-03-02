<template>
  <nav class="flex b-b" v-for="(item, index) in dataList" :key="index">
    <van-image width="60" height="60" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
    <aside class="flex-fit j-flex-flow ml-20">
      <h3 class="font16 font600 j-flex">
        {{ item.title }}
        <span style="color: #f33;">￥{{item.money}}</span>
      </h3>
      <p class="j-flex">
        <span class="text-money">辣</span>
        <van-stepper :min="0" :max="99"  theme="round" button-size="22" v-model="item.num" @plus='handleCart(item,"plus")' @minus='handleCart(item,"reduce")' />
      </p>
    </aside>
  </nav>

</template>

<script setup>
import {cartStore} from '@/store/store.js'
import { ref } from 'vue';

// 当数组和对象作为props传入的时候，虽然子组件无法更改props绑定，但是仍然可以更改对象或数组内部的值，但是对于vue来说禁止这样改动
// 虽然可能生效，但是性能损失大，比较得不偿失
const props = defineProps(['vdata'])
const dataList = ref(props.vdata)

const store = cartStore();

const handleCart= (data,type)=>{
  // 增删购物车
  store.$patch((state)=>{
    state.good[data.id] = data;
    state.total= state.total + (type=='plus'?1:-1);
  })
}

</script>
<style lang='less' scoped>
nav{
  padding: 10px 15px;
}

</style>