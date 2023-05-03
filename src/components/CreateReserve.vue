<script setup lang="ts">
import TitlePage from './TitlePage.vue';
import ReserveInput from './ReserveInput.vue'
import { ref, type Ref } from 'vue';
import ReserveButton from './ReserveButton.vue';
import { useReserveStore } from '@/stores/reserves';
import { useTableStore } from '@/stores/tables';
import type { ITable } from '@/interfaces/ITable';
import { useRouter } from 'vue-router';

const store = useReserveStore();
const tableStore = useTableStore();
const nameCustomer = ref();
const customerPhone = ref();
const tableNumber = ref();
const numberPeople = ref();
const tableId = ref('6744d3a0-6418-424e-93b3-cf88350981bb');
const table: Ref<ITable | undefined> = ref();
const router = useRouter();

async function clickMe() {
  await tableStore.findByNumber(tableNumber.value);
  table.value = tableStore.findTable;
  await store.createReserve(numberPeople.value, tableId.value, customerPhone.value, nameCustomer.value)
  router.push("/")
}

function receiveClient(data: String) {
  nameCustomer.value = data
}

function receiveTableNumber(data: Number) {
  tableNumber.value = data
}

function receivePhone(data: Number) {
  customerPhone.value = data
}

function receiveNumberPeople(data: Number) {
  numberPeople.value = data
}

</script>
<template>
  <div class="flex flex-col justify-center items-center h-full">
    <TitlePage text="Crear reserva" />
    <div class="grid grid-cols-3 mt-5 justify-between items-center gap-x-10 gap-y-3 h-full">
      <ReserveInput text="Cliente" v-model="nameCustomer" @sendData="receiveClient"/>
      <ReserveInput text="# Mesa" v-model="tableNumber" @sendData="receiveTableNumber"/> 
      <ReserveInput text="Fecha" />
      <ReserveInput text="Numero de personas" v-model="numberPeople" @sendData="receiveNumberPeople"/>
      <ReserveInput text="Numero de telefono" v-model="customerPhone" @sendData="receivePhone"/>
      <ReserveButton class="self-end justify-self-center mt-20 hover:cursor-pointer" text="Crear" @click="clickMe()"/>
    </div>
  </div>
</template>
