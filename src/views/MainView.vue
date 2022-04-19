<template>
  <h3>My name is {{ name }}</h3>
  <h3>Age: {{ age }}</h3>
  <h3>Balance: {{ balance }}</h3>
  <h3>Current job: {{ jobTitle }}</h3>

  <button @click="lifeStore.advanceYear">Advance year</button>

  <br>

  <router-link to="/jobs">
    Search for a job
  </router-link>

  <br>

  <router-link to="/new">
    New life
  </router-link>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLifeStore } from '@/store/life';

const lifeStore = useLifeStore();
const { name, age, balance, jobTitle } = storeToRefs(lifeStore);
</script>
