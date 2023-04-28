<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import TableButton from '@/components/TableButton.vue';
import { onMounted, ref, watchEffect, type Ref } from 'vue';
import { useTableStore } from '@/stores/tables';
import type { ITable } from '@/interfaces/ITable';

const store = useTableStore()
const tables: Ref<Array<ITable>> = ref([]);

watchEffect(() => {
  store.getTables();
  tables.value = store.tables;
})
</script>

<template>
  <div class="h-screen flex">
    <div>
      <SideMenu />
    </div>
    <div class="flex justify-center items-center w-full">
      <div class="grid grid-cols-3 gap-28">
        <TableButton v-for="table in tables" :number=Number(table.number_table) />
      </div>
    </div>
  </div>
</template>
