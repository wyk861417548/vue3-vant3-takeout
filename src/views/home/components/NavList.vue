<template>
  <nav class="j-flex b-b" v-for="(item, index) in dataList" :key="index" @click="router.push({path:'/store',query:{...item,index}})">
    <van-image width="60" height="60" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
    <aside class="flex-fit ml-20">
      <h3 class="font16 font600 j-flex">
        {{ item.title }}
        <span class="text-warning font20 font800">{{ item.score}}</span>
      </h3>
      <p class="mt-10 mb-5 text-666">{{props.title}}</p>
      <p class="j-flex text-999">
        <span>{{item.tip}}</span>
        <span style="color: #f33;">￥{{item.money}}</span>
      </p>
    </aside>
  </nav>

</template>

<script setup>
import $request from '@/api/store.js'
import { reactive,onMounted  } from 'vue';
import { useRouter } from 'vue-router';

let dataList = reactive([])
const props = defineProps(['title'])
const router = useRouter();

onMounted(() => {
  getStoreList()
})

// 获取商店列表
const getStoreList = ()=>{
  $request.list().then(({data})=>{
    // 不要直接dataList = data; 不会触发双向绑定了 这是因为reactive数据被重新赋值后，原来数据的代理函数和最新的代理函数不是同一个
    dataList.push(...data);
  })
}
</script>

<style lang="less" scoped>
nav{
  padding: 10px 15px;
}

</style>