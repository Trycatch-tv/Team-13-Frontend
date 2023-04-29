<script lang="ts" setup>
import DescriptionInfo from '@/components/DescriptionInfo.vue'
import TitlePage from '@/components/TitlePage.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>
<template>
  <div class="flex flex-col justify-evenly items-center h-screen">
    <TitlePage :text="`Mesa #${ $route.params.id}`"/>
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
<!--https://reservation-p19o.onrender.com/api/reservations/  -->
<!-- https://reservation-p19o.onrender.com/api/tables/ -->