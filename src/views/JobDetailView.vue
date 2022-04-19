<template>
  <p>Position: {{ currentJob.title }}</p>

  <button @click="startJob">Start this job</button>
</template>

<script setup lang="ts">
import jobs from '@/game/jobs';
import { useLifeStore } from '@/store/life';
import { useRouter } from 'vue-router';

const router = useRouter();
const jobId = useRouter().currentRoute.value.params.id as string;
const lifeStore = useLifeStore()

const currentJob = jobs[jobId];

function startJob() {
  lifeStore.job = currentJob;
  lifeStore.addEvent(`You started a new position as ${currentJob.title}!`);
  router.push({ name: 'main' });
}
</script>
