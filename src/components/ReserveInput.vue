<script lang="ts" setup>
import { ref, watch } from 'vue';

const data = ref();
const emit = defineEmits(['sendData'])

watch(data, () => {
  emit('sendData', data.value)
})
const props = defineProps({
  text: String
})
</script>

<template>
  <div>
    <div class="h-11">
      <label for="number" class="text-lg">
        {{ props.text }}:
        <input type="text" name="number" v-model="data"
          class="h-full w-full rounded-xl flex justify-center items-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-black self-start" />
      </label>
    </div>
  </div>
</template>
