<script setup lang="ts">
defineProps({
  label: String||Number,
  content: {
    default: "---------------"
  }
})
</script>
<template>
  <div>
    <div class="h-20 w-56">
      <h3 class="text-lg">{{ label }}:</h3>
      <div class="bg-red-400 h-full rounded-xl flex justify-center items-center">{{ content }}</div>
    </div>
  </div>
</template>

