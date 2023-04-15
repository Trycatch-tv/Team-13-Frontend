<template>
  <RouterLink to="about" class="bg-red-400 rounded-3xl w-[110px] h-[110px] flex justify-center items-center text-2xl border-black border-2">
    Mesa #{{ number }}
  </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  number: Number
})

</script>