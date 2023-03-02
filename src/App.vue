<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component v-if="route.meta.keepAlive" :is="Component" />
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive"/>
  </router-view>

</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log('route',route);
</script>