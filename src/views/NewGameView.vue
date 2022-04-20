<template>
  <div class="flex flex-col items-center justify-center bg-gray-900 min-h-screen">
    <h3 class="text-5xl font-bold text-center text-orange-100">OpenLife</h3>
    <form
      class="flex flex-col p-10 my-3"
      @submit.prevent="beginGame()"
    >
      <label
        class="text-center text-slate-50 text-2xl my-2"
        for="playerName"
      >
        Name
      </label>

      <input
        id="playerName"
        v-model="playerName"
        class="rounded-lg"
        type="text"
        name="playerName"
      >

      <input
        class="mt-10 cursor-pointer
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="submit"
        value="Start a new life!"
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { router } from '@/router';
import { useLifeStore } from '@/store/life';
import { ref } from 'vue';

const lifeStore = useLifeStore();
let playerName = ref('');

function beginGame() {
  lifeStore.beginGame(playerName.value);
  router.push({ name: 'main' });
}
</script>
