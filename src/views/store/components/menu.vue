<template>
  <van-tree-select style="margin-bottom:50px;" height="100%" v-model:active-id="activeId" v-model:main-active-index="activeIndex" :items="goods" >
    <template #content>
      <section v-for='(item,index) in goods' :key='item.text'>
        <template  v-if="activeIndex==index">
          <menuList :vdata="item.children"></menuList>
        </template>
      </section>
    </template>
  </van-tree-select>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" dot />
    <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.total" />
    <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
    <van-action-bar-button type="warning" text="加入购物车" @click="handleWaitOrder" />
    <van-action-bar-button type="danger" text="立即购买" @click="handleWaitOrder"/>
  </van-action-bar>
</template>

<script>
import $request from '@/api/store.js'
import { ref,onMounted, reactive,toRefs } from 'vue';
import menuList from './menuList.vue'
import {useRouter} from 'vue-router'
import {cartStore} from '@/store/store.js'
export default {
  components:{
    menuList
  },
  setup(){
    const router = useRouter();

    const state = reactive({
      goods:[],
      activeId:1,
      activeIndex:0
    })
    
    const store = cartStore(); 

    onMounted(() => {
      getGoods();
    })

    const getGoods = ()=>{
      $request.goods().then(({data}) => {
        state.goods = data;
      })
    }

    // 将当前商铺购物车信息加入订单
    const handleWaitOrder = ()=>{
      router.push({path:'/store/order',query:{}})
    }
    
    return {
      ...toRefs(state),
      handleWaitOrder,
      store
    };
  },
}

</script>
<style lang='less' scoped>
  header{}

  main{}

  footer{}

</style>