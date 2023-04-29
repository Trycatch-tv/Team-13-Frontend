<script lang="ts" setup>
import DescriptionInfo from '@/components/DescriptionInfo.vue'
import TitlePage from '@/components/TitlePage.vue';
import { useRoute } from 'vue-router';
import { useTableStore } from '@/stores/tables';
import { onMounted, ref, watchEffect, type Ref } from 'vue';
import type ITable from '@/interfaces/ITable';
import type { IReserve } from '@/interfaces/IReserve';
import { useReserveStore } from '@/stores/reserves';

const store = useTableStore();
const reserveStore = useReserveStore();
const table: Ref<ITable> = ref('');
const reserve: Ref<IReserve> = ref('');
const route = useRoute();

watchEffect(() => {
  table.value = store.findTable;
  reserveStore.findReserveForTable(table.value.id)
  reserve.value = reserveStore.findReserve;
})

onMounted(() => {
  store.findByNumber(route.params.id);
})
</script>
<template>
  <div class="flex flex-col justify-evenly items-center h-screen">
    <TitlePage :text="`Mesa #${ $route.params.id}`"/>
    <div>
      <div class="grid grid-cols-2 gap-20">
        <DescriptionInfo label="Capacidad" :content="table.capacity"/>
        <DescriptionInfo label="Estado" :content="reserve.status"/>
        <DescriptionInfo label="Ubicacion" :content="table.location"/>
        <DescriptionInfo label="Fecha y hora reserva" :content="reserve.createdAt"/>
      </div>
    </div>
  </div>
</template>
