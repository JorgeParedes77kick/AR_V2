<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { defineProps, onMounted } from 'vue';

import MainLayout from '../../components/Layout';
dayjs.extend(isBetween);

const props = defineProps({
  'adicionales': Array,
  'curriculums': Array,
});
onMounted(() => {
  console.log(props)
});

const headers = [
  { title: '', key: 'data-table-expand' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Con Adicional', key: 'adicionales.length' },
  { title: 'Acciones', key: 'acciones', sortable: false },
];
// const onClickDelete = async (item) => {
//   const { isConfirmed } = await Swal.fire({
//     title: 'Eliminar Rol',
//     text: `Estas seguro de eliminar la restriccion para el curriculum ${item.curriculum.nombre} de ${item.tipo_restriccion.nombre} con valor ${item.valor_restriccion}?`,
//     icon: 'question',
//     showCancelButton: true,
//     confirmButtonText: 'Aceptar',
//     cancelButtonText: 'Cancelar',
//   });
//   if (isConfirmed) {
//     try {
//       const response = await axios.delete(route('adicionales-curriculum.destroy', item.id));
//       const index = props.restricciones.findIndex(x => x.id === item.id)
//       if (response?.data?.message) {
//         const { message } = response.data;
//         Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
//         props.restricciones.splice(index, 1)
//       }
//     } catch (err) {
//       console.log("err:", err)
//       if (err?.response?.data?.server) {
//         const { server: msg, message } = err.response.data;
//         Swal.fire({ title: 'Error!', text: msg + '\n' + truncarTexto(message), icon: 'error' });
//       }
//     }
//   }
// };
</script>
<template>
  <MainLayout>
    <v-container>
      <v-card color="background" class="px-4 py-2">
        <v-card-title> ADICIONALES CURRICULUM </v-card-title>
        <v-card-body>
          <v-row>
            <v-col class="d-flex justify-end">
              <Link :href="route('adicionales-curriculum.create')">
              <v-btn :to="{ name: 'adicionales-curriculum.create' }" color="success" class="ms-auto">
                Crear Nuevas Adicionales
              </v-btn>
              </Link>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table :headers="headers" :items="curriculums" :items-per-page="10" class="elevation-1 rounded"
                show-expand>
                <template v-slot:expanded-row="{ item }">

                  <tr v-for="adi in item.adicionales" :key="adi.id">
                    <td :colspan="2"></td>
                    <td :colspan="1">{{ adi.nombre }} </td>
                    <td :colspan="1">{{ adi.type_value }} </td>
                  </tr>
                </template>
                <template v-slot:[`item.acciones`]="{ item }">
                  <div class="d-flex inline-flex ga-2">
                    <Link :href="route('adicionales-curriculum.show', item)">
                    <v-btn as="v-btn" color="info" small> Ver </v-btn>
                    </Link>
                    <Link :href="route('adicionales-curriculum.edit', item)">
                    <v-btn :to="{ name: 'adicionales-curriculum.edit', params: { id: item.idCrypt } }" color="secondary"
                      small>
                      Editar
                    </v-btn>
                    </Link>
                    <!-- <v-btn color="error" small @click="onClickDelete(item)">Eliminar
                    </v-btn> -->
                  </div>
                </template>
              </v-data-table>
            </v-col>
          </v-row></v-card-body>
      </v-card>
    </v-container>
  </MainLayout>
</template>
