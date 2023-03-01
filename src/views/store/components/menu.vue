<template>
  <van-tree-select style="margin-bottom:50px;" height="100%" v-model:active-id="activeId" v-model:main-active-index="activeIndex" :items="items" >
    <template #content>
      <section v-for='(item,index) in items' :key='item.text'>
        <template  v-if="activeIndex==index">
          <menuList :vdata="dataList"></menuList>
        </template>
      </section>
    </template>
  </van-tree-select>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" dot />
    <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.total" />
    <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
    <!-- <van-action-bar-button type="warning" text="加入购物车" /> -->
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script>
import { ref } from 'vue';
import menuList from './menuList.vue'
import {cartStore} from '@/store/cart.js'
export default {
  components:{
    menuList
  },
  setup() {
    const activeId = ref(1);
    const activeIndex = ref(0);
    const items = [{text: '老板推荐'},{text: '主食'},{text: '肉类'},{text: '清单'},{text: '甜品'},];
    const dataList = [];
    const store = cartStore(); 


    // 初始化菜单列表
    const initData = ()=>{
      for (let i = 0; i < 18; i++) {
        dataList.push({
          id:1000 + i,
          title:'标题' + i,
          tip:'口味不错,香辣特选',
          money: (Math.random()*50+10).toFixed(0),
          score:(Math.random()*5+1).toFixed(1),
          num:0
        })
      }
    }
    initData()
    
    return {
      items,
      activeId,
      activeIndex,
      dataList,
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