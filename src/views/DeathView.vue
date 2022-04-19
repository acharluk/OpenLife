<template>
  <h1>You died :(</h1>
  <h3>{{ lifeStore.name }} died at the age of {{ lifeStore.age }}</h3>
  <h3>They earned {{ lifeStore.balance }}</h3>

  <router-link :to="{ name: 'new-game' }">Start a new life</router-link>
</template>

<script setup lang="ts">
import { useLifeStore } from '@/store/life';

const lifeStore = useLifeStore();
</script>
