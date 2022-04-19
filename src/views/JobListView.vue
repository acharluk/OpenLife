<template>
  <ul>
    <li
      v-for="job of jobs"
      :key="job.id"
    >
      <p>{{ job.title }}, Salary: {{ job.salary }}</p>
      <router-link :to="{ name: 'job-detail', params: { id: job.id } }">
        More details
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import jobs from '@/game/jobs/allJobs';
</script>
