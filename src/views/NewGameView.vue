<template>
  <form @submit.prevent="beginGame()">
    <label for="playerName">Name</label>
    <input
      id="playerName"
      v-model="playerName"
      type="text"
      name="playerName"
    >

    <input
      type="submit"
      value="Start a new life!"
    >
  </form>
</template>

<script setup lang="ts">
import { router } from '@/router';
import { useLifeStore } from '@/store/life';

const lifeStore = useLifeStore();
let playerName = '';

function beginGame() {
  lifeStore.beginGame(this.playerName);
  router.push('/');
}
</script>
