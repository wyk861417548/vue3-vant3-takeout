<template>
  <van-tree-select height="100%" v-model:active-id="activeId" v-model:main-active-index="activeIndex" :items="items" >
    <template #content>
      <section v-for='(item,index) in items' :key='item.text'>
        <template  v-if="activeIndex==index">
          <menuList :vdata="dataList"></menuList>
        </template>
      </section>
    </template>
  </van-tree-select>
</template>

<script>
import { ref } from 'vue';
import menuList from './menuList.vue'
export default {
  components:{
    menuList
  },
  setup() {
    const activeId = ref(1);
    const activeIndex = ref(0);
    const items = [{text: '老板推荐'},{text: '主食'},{text: '肉类'},{text: '清单'},{text: '甜品'},];
    const dataList = [];
    const initData = ()=>{
      for (let i = 0; i < 8; i++) {
        dataList.push({
          title:'标题' + i,
          tip:'口味不错,香辣特选',
          money: (Math.random()*50+10).toFixed(0),
          score:(Math.random()*5+1).toFixed(1)
        })
      }
    }
    initData()
    
    return {
      items,
      activeId,
      activeIndex,
      dataList
    };
  },
}

</script>
<style lang='less' scoped>
  header{}

  main{}

  footer{}

</style>