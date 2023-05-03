<template>
  <div class="h-screen flex flex-col gap-14 ">
    <div class="flex flex-col gap-10 ml-10 mt-5">
      <RegisterInput text="Numero de mesa" v-model="tableNumber" @sendData="receiveNumber"/>
      <RegisterInput text="Capacidad" v-model="capacity" @sendData="receiveCapacity"/>
      <RegisterInput text="Ubicacion" v-model="location" @sendData="receiveLocation"/>
      <RegisterInput text="# de mesa a editar" v-model="edit" @sendData="receiveEdit"/>
  </div>
    <div class="flex justify-end gap-5 items-center mr-5">
      <button class="h-16 w-40 bg-red-400 flex justify-center items-center border-2 border-black rounded-xl cursor-default" @click="createTable">
        Actualizar
      </button>
      <button class="h-16 w-40 bg-red-400 flex justify-center items-center border-2 border-black rounded-xl cursor-default" @click="editTable">
        Editar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterInput from '@/components/RegisterInput.vue';
import { ref, watchEffect, type Ref } from 'vue';
import type { ITable } from '@/interfaces/ITable';
import { useRouter } from 'vue-router';
import { useTableStore } from '@/stores/tables';

const tableNumber = ref();
const capacity = ref();
const location = ref();
const edit = ref();
const table: Ref<ITable> = ref({
  number_table: tableNumber.value,
  capacity: capacity.value,
  location: location.value,
});
const router = useRouter();
const store = useTableStore();


function receiveNumber(data: string) {
  tableNumber.value = data;
}
function receiveCapacity(data: string) {
  capacity.value = data;
}
function receiveLocation(data: string) {
  location.value = data;
}
function receiveEdit(data: string) {
  edit.value = data;
}

watchEffect(() => {
  table.value = {
    number_table: tableNumber.value,
    capacity: capacity.value,
    location: location.value,
  }
})

function createTable() {
  store.createTable(table.value)
  router.push("/")
}

function editTable() {
  router.push("/")
}
</script>
