<script lang="ts" setup>
import TitlePage from './TitlePage.vue';
import ReserveInput from './ReserveInput.vue';
import ReserveButton from './ReserveButton.vue';
import { ref } from 'vue';

const inputs = ref(["Cliente", "# Mesa"])
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <TitlePage text="Eliminar reserva" />
    <div class="grid grid-cols-3 mt-5 justify-between items-center gap-x-10 gap-y-3 h-full">
      <ReserveInput v-for="input in inputs" :text="input" />
      <ReserveButton class="self-end justify-self-center mt-20 col-start-3" text="Eliminar"/>
    </div>
  </div>
</template>