<template>
  <nav class="flex b-b" v-for="(item, index) in props.vdata" :key="index">
    <van-image width="60" height="60" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
    <aside class="flex-fit j-flex-flow ml-20">
      <h3 class="font16 font600 j-flex">
        {{ item.title }}
        <span style="color: #f33;">￥{{item.money}}</span>
      </h3>
      <p class="j-flex">
        <span class="text-money">辣</span>
        <van-stepper :min="0" theme="round" button-size="22" v-model="item.num" @plus='handleCart(item,"plus")' @minus='handleCart(item,"reduce")' />
      </p>
    </aside>
  </nav>

</template>

<script setup>
import {cartStore} from '@/store/cart.js'
import { computed, ref } from 'vue';
const props = defineProps(['vdata'])

const store = cartStore();

// 因为vdata 并没有进行双向绑定 所以  子组件操作父组件传过来的数据,并没有什么问题
const handleCart= (data,type)=>{
  // 添加
  store.$patch((state)=>{
    state.good[data.id] = data;
    state.total= state.total + (type=='plus'?1:-1);
    console.log('state',state.good,state.total);
  })
}

</script>
<style lang='less' scoped>
nav{
  padding: 10px 15px;
}

</style>