<script setup lang="ts">
defineProps({
  label: String 
})
</script>
<template>
  <div>
    <div class="h-20 w-56">
      <h3 class="text-lg">{{ label }}:</h3>
      <div class="bg-red-400 h-full rounded-xl flex justify-center items-center">-------------</div>
    </div>
  </div>
</template>

