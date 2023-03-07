<template>
  <main class="j-vh">
    <section v-for="(item,index) in goods" :key="index">
      
    </section>
  </main>
</template>

<script setup>
import { ref,reactive } from 'vue';

const goods = localStorage.__GOOD__?JSON.parse(localStorage.__GOOD__):[];

</script>
<style lang='less' scoped>
.j-vh{
  padding: 15px;
  .custom-box{
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
  }
}

</style>