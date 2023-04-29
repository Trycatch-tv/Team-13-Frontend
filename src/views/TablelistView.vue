<script setup lang="ts">
import TitlePage from '@/components/TitlePage.vue';

import { ref, onMounted } from 'vue';
import axios from 'axios'; //Peticion hacia la api
//Funcion default exportable: se ponen los datos, que accionse realiza una vez que se carge la pagina y definimo los metodos
//const tables = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])


const mesas = ref([]) // referencia de un arreglo vacio (reactividad)

async function getMesas() { //Construimos la funcion getMesas
  await axios.get('https://reservation-p19o.onrender.com/api/tables') // Traemos la info de l API
    .then(function (response) {
      mesas.value = response.data.data // Guardamos la info en la variable mesas
    }
    )
}
onMounted(() => { getMesas() })    //Verifica si un componentes se monta y ejecuta la funcion montada   Montamos la funcion getMesas.  con una funcion anoonima

</script>
<template>
  <div class="h-screen flex flex-col justify-evenly items-center" style="background-color: blueviolet;">

    <TitlePage text="Listado de mesas" />

    <div class="relative overflow-x-auto">

      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 bg-gray-50 border-2 border-black">
          <tr>
            <th scope="col" class="px-6 py-3"># Mesa</th>
            <th scope="col" class="px-6 py-3 border-2 border-black">Capacidad</th>
            <th scope="col" class="px-6 py-3 border-2 border-black">Localización</th>
            <th scope="col" class="px-6 py-3 border-2 border-black">ID</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-2 border-black" v-for="mesa in mesas" :key="mesa.id">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ mesa.number_table }}
            </th>
            <td class="px-6 py-4 border-black border-2">
              {{ mesa.capacity }}
            </td>
            <td class="px-6 py-4 border-black border-2">
              {{ mesa.location }}
            </td>
            <td class="px-6 py-4 border-black border-2">
              {{ mesa.id }}
            </td>
          </tr>
          <tr class="bg-white border-b">

          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script lang="ts">



</script>


