<template>
  <div class="custom-loading j-full-curbox">
    <van-loading class="j-full-center" color="#1989fa" />
  </div>
</template>

<script setup>
import { Loading } from 'vant';
</script>
<style lang='less' scoped>
.custom-loading{
  background-color:rgba(0,0,0,.1);
  text-align: center;
}
</style>