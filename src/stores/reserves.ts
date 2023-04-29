import {ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { IReserve } from '../interfaces/IReserve';

export const useReserveStore = defineStore('reserve', () => {

  const baseUrl = 'https://reservation-p19o.onrender.com/api';
  const reserves: Ref<Array<IReserve>> = ref([]);
  const findReserve: Ref<IReserve> = ref({});

  async function findReserveForTable(tableId: string) {
    const uri = `${baseUrl}/reservations?table=${tableId}`
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

  return { findReserve, findReserveForTable, reserves }
})
