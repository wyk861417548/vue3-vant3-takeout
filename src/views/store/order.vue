<template>
  <van-card
    v-for="good in store.good"
    :key="good.id"
    :num="good.num"
    :price="good.money"
    :desc="good.tip"
    :title="good.title"
    :thumb="good.img"
  />

</template>

<script setup>
import { ref,reactive } from 'vue';
import {cartStore} from '@/store/store.js'
const store = cartStore();
</script>
<style lang='less' scoped>
</style>