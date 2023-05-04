<script lang="ts" setup>
import TitlePage from './TitlePage.vue';
import ReserveInput from './ReserveInput.vue';
import ReserveButton from './ReserveButton.vue';
import { ref } from 'vue';

const nameCustomer = ref();
const tableNumber = ref();
const reserveDate = ref();
const reservePeople = ref();
function receiveClient(data: String) {
  nameCustomer.value = data;
}

function receiveTable(data: String) {
  tableNumber.value = data;
}

function receiveDate(data: String) {
  reserveDate.value = data; 
}

function receivePeople(data: String) {
  reservePeople.value = data;
}

function clickMe() {
  if(!nameCustomer.value || !tableNumber.value || !reserveDate.value || !reservePeople.value) {
    console.log("Campos vacios")
    return;
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <TitlePage text="Eliminar reserva" />
    <div class="grid grid-cols-3 mt-5 justify-between items-center gap-x-10 gap-y-3 h-full">
      <ReserveInput text="Cliente" @sendData="receiveClient"/>
      <ReserveInput text="# Mesa" @sendData="receiveTable"/>
      <ReserveInput text="Fecha" @sendData="receiveDate"/>
      <ReserveInput text="Numero de personas" @sendData="receivePeople"/>
      <ReserveButton class="self-end justify-self-center mt-20 col-start-3 cursor-pointer" text="Eliminar" @click="clickMe"/>
    </div>
  </div>
</template>
