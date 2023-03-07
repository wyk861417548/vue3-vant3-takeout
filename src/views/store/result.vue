<template>
  <main class="j-vh">
    <van-icon name="underway" size="100" color="#108ee9"/>
    <p class="font16 mt-10 mb-30">下单成功</p>
    <van-button type="primary"  block @click="router.back()">返回</van-button>
    <p class="mt-20"></p>
    <van-button type="danger"  block @click="handleBack">查看订单</van-button>
  </main>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();

const handleBack = ()=>{
  sessionStorage.__PAGECOM__ = 'order'
  router.replace('/')
}

</script>
<style lang='less' scoped>
.j-vh{
  padding: 40px 20px 0;
  text-align: center;
}
</style>