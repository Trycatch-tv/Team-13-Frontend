<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
  text: String
})
function style() {
  if (props.text === "Cliente") {
    return "col-start-1 col-end-3"
  }
}
</script>

<template>
  <div :class="style()">
    <div class="h-11">
      <label for="number" class="text-lg">
        {{ props.text }}:
        <input type="number" name="number"
          class="h-full w-full rounded-xl flex justify-center items-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-black self-start" />
      </label>
    </div>
  </div>
</template>