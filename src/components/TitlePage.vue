<script lang="ts" setup>
defineProps({
  text: String
})
</script>
<template>
  <div class="flex justify-center items-center bg-red-400 h-14 w-80 rounded-xl border-black border-2">
    {{ text }}
  </div>
</template>