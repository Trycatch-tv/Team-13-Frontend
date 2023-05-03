<script setup lang="ts">
import CreateReserve from '@/components/CreateReserve.vue';
import DeleteReserve from '@/components/DeleteReserve.vue';

</script>
<template>
  <div class="flex flex-col h-screen justify-center items-center gap-5">
    <div class="w-full">
      <CreateReserve />
    </div>
    <div class="w-full">
      <DeleteReserve class="border-t-2 border-black pt-3"/>
    </div>
  </div>
</template>
