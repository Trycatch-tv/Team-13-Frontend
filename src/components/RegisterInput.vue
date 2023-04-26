<script setup lang="ts">
defineProps({
  text: String
})
</script>
<template>
  <div>
    <div class="h-20 w-56">
      <label for="number" class="text-lg">
        {{ text }}
        <input type="number" name="number" placeholder="---------"
          class="h-full rounded-xl flex justify-center items-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-black" />
      </label>
    </div>
  </div>
</template>
