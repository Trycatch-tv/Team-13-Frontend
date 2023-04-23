<script setup lang="ts">
import TitlePage from '@/components/TitlePage.vue';
import { ref } from 'vue';

const tables = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
</script>
<template>
  <div class="h-screen flex flex-col justify-around items-center">
    <TitlePage text="Listado de mesas"/>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 bg-gray-50 border-2 border-black">
          <tr>
            <th scope="col" class="px-6 py-3">
              # Mesa
            </th>
            <th scope="col" class="px-6 py-3 border-2 border-black">
              Estado
            </th>
            <th scope="col" class="px-6 py-3">
              Disponibles
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-2 border-black" v-for="table in tables" :key="table">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            </th>
            <td class="px-6 py-4 border-black border-2">
            </td>
            <td class="px-6 py-4">
            </td>
          </tr>
          <tr class="bg-white border-b">

          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

