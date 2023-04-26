<script setup lang="ts">
defineProps({
  text: String
})
</script>
<template>
  <div class="border-black border-2 rounded-xl text-xl text-center px-6 py-2 bg-red-400 cursor-default">
    <h1>{{ text }}</h1>
  </div>
</template>