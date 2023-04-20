<template>
  <div class="bg-red-400 h-full flex flex-col w-[30%] justify-around rounded-e-[40px] min-w-[320px]">
    <div class="flex justify-center">
      <img src="http://via.placeholder.com/640x360" class="rounded-full w-[150px] h-[150px] mt-2" />
    </div>
    <div class="flex items-center justify-center flex-col">
      <MenuButton text="Registrar/Editar mesas" route="register" />
      <MenuButton text="Listado de mesas" route="list" />
      <MenuButton text="Crear/Cancelar reserva" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuButton from './MenuButton.vue';
</script>