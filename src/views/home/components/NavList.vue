<template>
  <nav class="j-flex b-b" v-for="(item, index) in 20" :key="index" >
    <van-image width="60" height="60" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
    <aside class="flex-fit ml-20">
      <h3 class="font16 font600 j-flex">
        标题
        <span class="text-warning font20 font800">{{ (Math.random()*5+1).toFixed(1)}}</span>
      </h3>
      <p class="mt-10 mb-5 text-666">{{props.title}}</p>
      <p class="j-flex text-999">
        <span>口味不错,香辣特选</span>
        <span style="color: #f33;">￥{{ (Math.random()*50+10).toFixed(0)}}</span>
      </p>
    </aside>
  </nav>

</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(['title'])

</script>

<style lang="less" scoped>
nav{
  padding: 10px 15px;
}

</style>