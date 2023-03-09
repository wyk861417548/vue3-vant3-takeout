<template>
  <main>
    <section class="custom-box flex" v-for="(item,index) in goods" :key="index" @click="$skip('/order/detail',{id:index})">
      <van-image width="60" height="60" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
      <aside class="j-flex-flow ml-20 flex-fit">
        <h2 class="j-flex">
          <span class="font600 text-333">{{item.title}}</span>
          <time class="font14 text-999">{{item.orderTime}}</time>
        </h2>
        
        <p class="text-666">{{item.orderNo}}</p>
      </aside>
    </section>
  </main>
</template>

<script setup>
const goods = localStorage.__GOOD__?JSON.parse(localStorage.__GOOD__):[];

</script>
<style lang='less' scoped>
main{
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  overflow: auto;
  background-color:rgba(200,200,200,.1);
  .custom-box{
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    &+.custom-box{
      margin-top: 15px;
    }
  }
}
</style>