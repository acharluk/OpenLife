<template>
  <h3>My name is {{ name }}</h3>

  <router-link to="/new">
    New life
  </router-link>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLifeStore } from '@/store/life';
import { onMounted } from 'vue';
import { router } from '@/router';

const lifeStore = useLifeStore();
const { name } = storeToRefs(lifeStore);

onMounted(() => {
  if (!lifeStore.name) {
    router.push('/new');
  }
});
</script>
