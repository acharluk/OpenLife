<template>
  <ul class="flex items-center justify-between flex-wrap bg-teal-600 p-6 text-white">
    <li class="mr-6">😊 {{ name }}</li>
    <li class="mr-6">Age: {{ age }}</li>
    <li class="mr-6">Balance: {{ balance }}</li>
    <li class="mr-6">Current job: {{ jobTitle }}</li>
  </ul>

  <div class="eventList">
    <p
      v-for="event of events"
      :key="event"
    >
      {{ event }}
    </p>
  </div>

  <div class="flex justify-between my-3">
    <button
      class="flex-1 mr-2 inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
      @click="lifeStore.advanceYear"
    >
      Advance year
    </button>

    <br>

    <router-link
      :to="{ name: 'job-list' }"
      class="flex-1 mr-2 inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white text-center"
    >
      Search for a job
    </router-link>

    <br>
  </div>

  <router-link
    :to="{ name: 'new-game' }"
    class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 my-10 px-3"
  >
    New life
  </router-link>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLifeStore } from '@/store/life';

const lifeStore = useLifeStore();
const { name, age, balance, jobTitle, events } = storeToRefs(lifeStore);
</script>

<style>
.eventList {
  height: 400px;
  border: 1px solid gray;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  scroll-snap-type: y proximity;
}
.eventList>p:last-child {
  scroll-snap-align: end;
}
.eventList>p:nth-child(2n) {
  background: lightgray;
}
.eventList>p {
  margin: 0;
  padding: 5px;
}
</style>
