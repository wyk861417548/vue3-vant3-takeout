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
import { ref,onMounted, reactive,toRefs, onActivated } from 'vue';
import menuList from './menuList.vue'
import {useRouter} from 'vue-router'
import {cartStore} from '@/store/store.js'
import { Toast } from 'vant';
export default {
  components:{
    menuList
  },
  setup(){
    const router = useRouter();
    const store = cartStore();

    const state = reactive({
      goods:[],
      activeId:1,
      activeIndex:0
    })
    
   

    onMounted(() => {
      getGoods();
    })

    onActivated(()=>{
      if(store.reset){
        getGoods();
        store.$patch((state)=>{
          state.reset = false;
        })
      }
    })

    // 获取商品
    const getGoods = ()=>{
      $request.goods().then(({data}) => {
        state.goods = data;
      })
    }

    // 前往立即购买界面
    const handleWaitOrder = ()=>{
      if(store.total < 1)return Toast.fail('请选择商品');
      router.push({path:'/store/order'})
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