<template>
  <div class="j-flex" style="flex-wrap:wrap;">
    <nav v-for="(item, index) in props.num" :key="index" :style="{width}">
      <van-image :width="imgWidth" :height="imgHeight" :radius='radius' fit="cover" :src="require('@/assets/images/home/1.png')" />
      <p>美食</p>
    </nav>
  </div>

</template>

<script setup>
  // import { defineProps } from 'vue';
  const props = defineProps({
    'num':{
      type:Number,
      default:0
    },

    type:{
      type:String,
      default:'smalll',
    },

    radius:{
      type:String,
      default:'50%',
    },

    width:{
      type:String,
      default:'20%',
    },

    imgWidth:{
      type:String,
      default:'80%',
    },

    imgHeight:{
      type:String,
      default:'40px',
    }
  })

</script>

<style lang="less" scoped>
  nav{
    text-align: center;
    margin-bottom: 10px;
  }

</style>