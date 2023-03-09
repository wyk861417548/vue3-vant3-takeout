<template>
  <div class="j-full-curbox j-flex-col">
    <div  class="flex-fit" style="overflow: auto;">   
      <component :is="curCom"></component>
    </div>
    <Footer @change="change" @submit="change" :defaultCom='curCom'></Footer>
  </div>

</template>


<script>
import Footer from '@/components/Footer/index.vue';
import home from './home/index.vue';
import mine from './mine/index.vue';
import order from './order/index.vue';
import { useRoute } from 'vue-router';
import { ref,onActivated } from 'vue';

export default {
  components:{
    Footer,
    home,
    mine,
    order
  },

  setup(props,ctx){
    const com = useRoute().query.com;
    let curCom = ref('home')

    const change = (com)=>{
      curCom.value = com;
    }

    onActivated(()=>{
      if(sessionStorage.__PAGECOM__){
        curCom.value = sessionStorage.__PAGECOM__;
        setTimeout(()=>{
          sessionStorage.__PAGECOM__ = '';
        },500)
      }
    })

    return{
      curCom,
      change,
    }
  }
}
</script>