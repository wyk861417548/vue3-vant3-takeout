<template>
  <div class="j-vh">
    <van-card
      v-for="good in store.good"
      :key="good.id"
      :num="good.num"
      :price="(good.money*good.num).toFixed(2)"
      :desc="good.tip"
      :title="good.title"
      :thumb="require('@/assets/images/home/1.png')"
    />
    <section style="height:50px;"></section>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script setup>
import { ref,reactive,getCurrentInstance } from 'vue';
import {cartStore} from '@/store/store.js'
import { Dialog} from 'vant';
import $request from '@/api/store.js'
import { useRouter } from 'vue-router';

const store = cartStore();
const router = useRouter();

// 获取全局
const {proxy}  = getCurrentInstance();

console.log('proxy',proxy,proxy.$config);
let Storage = localStorage.__GOOD__?JSON.parse(localStorage.__GOOD__):[];

const onSubmit=()=>{
  Dialog.confirm({
    title:'是否确定下单',
    beforeClose:(action)=>new Promise((resolve) => {
      if(action === 'confirm'){
        setTimeout(()=>{
          resolve(true)
          $request.add().then((res) => {
            handleSetGood();
            store.$patch((state)=>{
              state.good = {},
              state.total = 0;
              state.reset = true;
            });
            
            router.replace('/store/result')
          })
        },1000)
      }else{
        resolve(true)
      }
    })
  });
}


const handleSetGood = ()=>{
  Storage.push({
    orderTime:new Date().format('yyyy-MM-dd hh-mm'),
    list:store.good,
    orderNo:proxy.$config.randomWord(8)
  })
  localStorage.__GOOD__ = JSON.stringify(Storage)
}
</script>
<style lang='less' scoped>
.j-vh{
  background-color: #f1f1f1;
  padding: 15px;
  .van-card{
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>