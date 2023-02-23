<template>
  <div class="footer">
    <nav class="nav" :class="{active:item.com === curCom}" v-for="(item,index) in nav" :key="index" @click="changeCom(item.com)">
      <p>{{ item.title }}</p>
      <van-icon :name="item.icon" size="20" />
    </nav>
  </div>

</template>

<script setup>
import {reactive,ref} from 'vue'
const emits = defineEmits(['change'])
let curCom = ref('home')
const nav = reactive([
  {title:'首页',com:'home',icon:'home-o'},
  {title:'购物车',com:'cart',icon:'cart-o'},
  {title:'订单',com:'order',icon:'search'},
  {title:'我的',com:'mine',icon:'friends-o'},
])

const changeCom = (com)=>{
  curCom.value = com
  emits('change',com)
}
</script>
<style lang="less" scoped>
.footer{
  display: flex;
  justify-content:space-between;
  text-align: center;
  box-shadow: 0 0 1px #DADADA;
  .nav{
    color: #333;
    width: 25%;
    padding: 10px;
    p{
      margin-bottom: 5px;
    }
    &.active{
      color: #f99;
    }
  }
}
</style>