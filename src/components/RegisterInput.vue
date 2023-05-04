<script setup lang="ts">
import { ref, watch } from 'vue'

const data = ref('')
const emit = defineEmits(['sendData'])

watch(data, () => {
  emit('sendData', data.value)
})
defineProps({
  text: String
})
</script>
<template>
  <div>
    <div class="h-20 w-56">
      <label for="number" class="text-lg">
        {{ text }}
        <input type="number" name="number" placeholder="------------" v-model="data"
          class="h-full rounded-xl flex justify-center items-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-black" />
      </label>
    </div>
  </div>
</template>
