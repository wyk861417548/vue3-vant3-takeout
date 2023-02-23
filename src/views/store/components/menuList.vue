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
        <van-stepper v-model="num" />
      </p>
    </aside>
  </nav>

</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['vdata'])
const num = ref(1);
</script>
<style lang='less' scoped>
nav{
  padding: 10px 15px;
}

</style>