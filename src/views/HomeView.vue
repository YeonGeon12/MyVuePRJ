<template>
  <div>
    <h1>홈페이지</h1>
    <p v-if="user">환영합니다, {{ user.name }}!</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import  { computed } from 'vue';

const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>


