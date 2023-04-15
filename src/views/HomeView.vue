<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import TableButton from '@/components/TableButton.vue';
import { ref } from 'vue';

const tables = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
</script>

<template>
  <div class="h-screen flex">
    <div>
      <SideMenu />
    </div>
    <div class="flex justify-center items-center w-full">
      <div class="grid grid-cols-3 gap-32">
        <TableButton v-for="table in tables" :key="table" :number="table" />
      </div>
    </div>
  </div>
</template>
