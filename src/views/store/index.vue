<template>
  <div class="j-vh j-flex-col">
    <header>
      <van-image width="100%" height="150" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
    </header>

    <section class="store j-flex">
      <h2 class="font24 font800">{{ info.title }}</h2>
      <van-image class="logo" width="80" height="80" radius="4" fit="cover" :src="require('@/assets/images/home/1.png')" />
    </section>

    <main>
      <section class="tabs j-full-curbox">
        <van-tabs v-model:active="curCom">
          <van-tab :title="item.title" :name="item.index" v-for='(item,index) in tabs' :key='item.title'>
            <component :is="tabs[curCom].com"></component>
          </van-tab>
        </van-tabs>
      </section>
    </main>

    <footer></footer>
  </div>

</template>

<script setup>
import { reactive,ref,shallowRef} from 'vue';
import { useRoute } from 'vue-router';

import menu from './components/menu.vue'
import evaluate from './components/evaluate.vue'
import business from './components/business.vue'

const info = useRoute().query;
let curCom = ref(0)

// 如果是语法糖 component is 上不能是字符串 必须是组件实例  shallowRef使其解除响应式
const tabs =[
  {title:'点菜',index:0,com:menu},
  {title:'评价',index:1,com:evaluate},
  {title:'商家',index:2,com:business},
]

</script>
<style lang='less' scoped>
  section.store{
    position: relative;
    padding: 20px 20px 10px;
    margin-top: -30px;
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    .logo{
      margin-top: -30px;
    }
  }
  ::v-deep main{
    position: relative;
    flex: 1;
    z-index: 10;
    section.tabs{
      .van-tabs{
        height: 100%;
        .van-tabs__wrap{
          height:44px;
        }
      }
      .van-tabs__content{
        height: calc(100% - 44px);
      }
    }
  }
</style>