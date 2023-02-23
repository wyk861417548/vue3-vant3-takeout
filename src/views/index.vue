<template>
  <div class="j-full-curbox j-flex-col">
    <div  class="flex-fit" style="overflow: auto;">   
      <component :is="curCom"></component>
    </div>
    <Footer @change="change" @submit="change"></Footer>
  </div>

</template>


<script>
import Footer from '@/components/Footer.vue';
import home from './home/index.vue';
import mine from './mine/index.vue';
import order from './order/index.vue';
import cart from './cart/index.vue';
import { ref } from 'vue';

export default {
  components:{
    Footer,
    home,
    mine,
    cart,
    order
  },

  setup(props,ctx){
    console.log('props,ctx',props,ctx);
    let curCom = ref('home')

    const change = (com)=>{
      console.log('comxxxxxxx');
      curCom.value = com;
    }

    return{
      curCom,
      change,
    }
  }
}
</script>