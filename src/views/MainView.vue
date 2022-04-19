<template>
  <h3>My name is {{ name }}</h3>
  <h3>Age: {{ age }}</h3>
  <h3>Balance: {{ balance }}</h3>
  <h3>Current job: {{ jobTitle }}</h3>

  <button @click="lifeStore.advanceYear">Advance year</button>

  <br>

  <router-link :to="{ name: 'job-list' }">
    Search for a job
  </router-link>

  <br>

  <router-link :to="{ name: 'new-game' }">
    New life
  </router-link>

  <div class="eventList">
    <p
      v-for="event of events"
      :key="event"
    >
      {{ event }}
    </p>
  </div>
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
