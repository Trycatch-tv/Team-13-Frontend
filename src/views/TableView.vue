<script lang="ts" setup>
import DescriptionInfo from '@/components/DescriptionInfo.vue'
import TitlePage from '@/components/TitlePage.vue';
import { useRoute } from 'vue-router';
import { useTableStore } from '@/stores/tables';
import { onBeforeMount,ref, watchEffect, type Ref } from 'vue';
import type ITable from '@/interfaces/ITable';

const store = useTableStore();
const table: Ref<ITable> = ref('');
const route = useRoute();


watchEffect(() => {
  store.findByNumber(route.params.id);
  table.value = store.findTable;
})
</script>
<template>
  <div class="flex flex-col justify-evenly items-center h-screen">
    <TitlePage :text="`Mesa #${ $route.params.id}`"/>
    <div>
      <div class="grid grid-cols-2 gap-20">
        <DescriptionInfo label="Capacidad" :content="table.capacity"/>
        <DescriptionInfo label="Estado"/>
        <DescriptionInfo label="Ubicacion" :content="table.location"/>
        <DescriptionInfo label="Fecha y hora reserva"/>
      </div>
    </div>
  </div>
</template>
