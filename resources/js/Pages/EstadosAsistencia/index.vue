<script setup>
import { onMounted, ref, defineProps } from 'vue';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Link } from '@inertiajs/inertia-vue3';

import MainLayout from '../../components/Layout';

import { FormatFecha } from '../../utils/date';
dayjs.extend(isBetween);

const props = defineProps({
  estados: Object,
  status: Number,
});

onMounted(() => {
  console.log(props);
});

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Estado', key: 'estado' },
  { title: 'Acciones', key: 'acciones', sortable: false },
];
const onClickDelete = async (item) => {
  console.log("item:", item)
  const { isConfirmed } = await Swal.fire({
    title: 'Eliminar Estado Asistencia',
    text: `Estas seguro de eliminar la temporada ${item.estado}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });
  if (isConfirmed) {
    try {
      const response = await axios.delete(route('estados-asistencia.destroy', item.id))
      if (response?.data?.message) {
        const { message } = response.data;
        await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
        window.location.href = route('estados-asistencia.index');
      }
    } catch (err) {
      if (err?.response?.data?.server) {
        const { server: message } = err.response.data;
        Swal.fire({ title: 'Error!', text: message, icon: 'error' });
      }
    }
  }
}

</script>
<template>
  <MainLayout>
    <v-container fluid>
      <v-card color="background" class="px-4 py-2">
        <v-card-title> ESTADOS DE ASISTENCIA </v-card-title>
        <v-card-body>
          <v-row>
            <v-col class="d-flex justify-end">
              <Link :href="route('estados-asistencia.create')">
              <v-btn :to="{ name: 'estados-asistencia.create' }" color="success" class="ms-auto">
                Crear Nuevo Estado de Asistencia
              </v-btn>
              </Link>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="6">
              <v-data-table :headers="headers" :items="estados" :items-per-page="10" class="elevation-1 rounded">
                <template v-slot:[`item.acciones`]="{ item }">
                  <div class="d-flex flex-wrap ga-1">
                    <Link :href="route('estados-asistencia.show', item)">
                    <v-btn as="v-btn" color="info" small> Ver </v-btn>
                    </Link>
                    <Link :href="route('estados-asistencia.edit', item)">
                    <v-btn :to="{ name: 'estados-asistencia.edit', params: { id: item.idCrypt } }" color="secondary"
                      small>
                      Editar
                    </v-btn>
                    </Link>
                    <v-btn v-if="item.id > 5" color="error" small @click="onClickDelete(item)">Eliminar
                    </v-btn>
                  </div>
                </template>
              </v-data-table>
            </v-col>
          </v-row></v-card-body>
      </v-card>
    </v-container>
  </MainLayout>
</template>
