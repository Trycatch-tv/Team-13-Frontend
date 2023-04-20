<script lang="ts" setup>
import DescriptionInfo from '@/components/DescriptionInfo.vue'
</script>
<template>
  <div class="flex flex-col justify-evenly items-center h-screen">
    <div class="flex justify-center items-center bg-red-400 h-14 w-80 rounded-xl">
      <h1>Mesa #{{ $route.params.id }}</h1>
    </div>
    <div>
      <div class="grid grid-cols-2 gap-20">
        <DescriptionInfo label="Capacidad"/>
        <DescriptionInfo label="Estado"/>
        <DescriptionInfo label="Ubicacion"/>
        <DescriptionInfo label="Fecha y hora reserva"/>
      </div>
    </div>
  </div>
</template>
