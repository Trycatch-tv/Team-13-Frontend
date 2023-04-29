import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type {ITable} from '@/interfaces/ITable';

export const useTableStore = defineStore('table', () => {

  const baseUrl = 'https://reservation-p19o.onrender.com/api';
  const tables: Ref<Array<ITable>> = ref([]);
  const findTable: Ref<ITable> = ref({});

  async function getTables() {
    const uri = `${baseUrl}/tables`;
    const rawResponse = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json'
      }
    })
    const response = await rawResponse.json();
    tables.value = response.data;
  }

  async function findByNumber(number: string|string[]) {
    const uri = `${baseUrl}/tables?number=${number}`;
    const rawResponse = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json'
      }
    })
    const response = await rawResponse.json();
    findTable.value = response.data[0]
  }

  async function createTable(table: ITable) {
    const uri = `${baseUrl}/tables`;
    const rawResponse = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json'
      },
      body: JSON.stringify({
        number_table: table.number_table,
        capacity: table.capacity,
        location: table.location
      })
    })
    const response = await rawResponse.json();
    console.log(response)
  }

  return { getTables, tables, findTable, createTable, findByNumber }
})
