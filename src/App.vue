<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="route.meta.keepAlive" :key="route.path" />
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive" :key="route.path" />
  </router-view>
  <!-- <Loading></Loading> -->
</template>

<script setup>
import Loading from '@/components/loading/index.vue'
import { useRoute } from "vue-router";
const route = useRoute();
</script>