<template>
  <div class="j-full-curbox j-flex-col">
    <div  class="flex-fit" style="overflow: auto;">     
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>
