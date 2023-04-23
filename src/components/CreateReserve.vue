<script setup lang="ts">
import TitlePage from './TitlePage.vue';
import ReserveInput from './ReserveInput.vue'
import { ref } from 'vue';
import ReserveButton from './ReserveButton.vue';

const inputs = ref(["Cliente", "# Mesa", "Fecha", "Hora"])

</script>
<template>
  <div class="flex flex-col justify-center items-center h-full">
    <TitlePage text="Crear reserva" />
    <div class="grid grid-cols-3 mt-5 justify-between items-center gap-x-10 gap-y-3 h-full">
      <ReserveInput v-for="input in inputs" :text="input"/>
      <ReserveButton class="self-end justify-self-center mt-20" text="Crear"/>
    </div>
  </div>
</template>