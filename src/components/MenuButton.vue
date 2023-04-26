<template>
  <RouterLink :to="route || 'home'" class="bg-red-200 border-black border-2 rounded-md text-3xl text-center m-5 p-3 w-4/5">{{ text }}</RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  text: String,
  route: String
})
</script>