import {ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { IReserve } from '../interfaces/IReserve';
import { useTableStore } from './tables';

export const useReserveStore = defineStore('reserve', () => {

  const baseUrl = 'https://reservation-p19o.onrender.com/api';
  const reserves: Ref<Array<IReserve>> = ref([]);
  const findReserve: Ref<IReserve> = ref('');
  const store = useTableStore();

  async function findReserveForTable(tableNumber: string|string[]) {
    const table = ref();
    await store.findByNumber(tableNumber);
    table.value = store.findTable;
    const uri = `${baseUrl}/reservations?table=${table.value.id}`
    const rawResponse = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json'
      }
    })
    const response = await rawResponse.json();
    findReserve.value = response.data[0];
  }

  async function createReserve(number_people: Number, table_id: String, phoneNumber: Number, nameCustomer: String) {
    const uri = `${baseUrl}/reservations`
    const rawResponse = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json'
      },
      body: JSON.stringify({
        number_people: number_people,
        table_id: table_id,
        name_customer: nameCustomer,
        number_phone_customer: phoneNumber
      })
    })
    const response = await rawResponse.json();
    console.log(response);
  }

  return { findReserve, findReserveForTable, reserves, createReserve }
})
