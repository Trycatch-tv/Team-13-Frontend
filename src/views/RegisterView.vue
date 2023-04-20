<template>
  <div class="h-screen flex flex-col gap-14 ">
    <div class="flex flex-col gap-10 ml-10 mt-5">
      <RegisterInput v-for="table in tables" />
    </div>
    <div class="flex justify-end gap-5 items-center mr-5">
      <div class="h-16 w-40 bg-red-400 flex justify-center items-center border-2 border-black rounded-xl cursor-default">
        Actualizar
      </div>
      <div class="h-16 w-40 bg-red-400 flex justify-center items-center border-2 border-black rounded-xl cursor-default">
        Editar
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterInput from '@/components/RegisterInput.vue';
import { ref } from 'vue';

const tables = ref([1, 2, 3, 4])
</script>