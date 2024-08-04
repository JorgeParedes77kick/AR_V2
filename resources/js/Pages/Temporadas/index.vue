<script setup>
import { onMounted, ref, defineProps } from 'vue';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Link } from '@inertiajs/inertia-vue3';

import MainLayout from '../../components/Layout';

import { FormatFecha } from '../../utils/date';
dayjs.extend(isBetween);

const props = defineProps({
  temporadas: Object,
  status: Number,
});

onMounted(() => {
  console.log(props);
});

const isActive = (fecha_ini, fecha_fin) => {
  const fecha_iniJS = dayjs(fecha_ini);
  const fecha_finJS = dayjs(fecha_fin);
  const currentDate = dayjs();
  //   console.log('currentDate:', currentDate);
  return `${currentDate.isBetween(fecha_iniJS, fecha_finJS, 'day', '[]')}`;
  //   return 'TRUE';
};

const headers = [
  { title: 'Prefijo', key: 'prefijo' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Fecha Inicio', key: 'fecha_inicio' },
  { title: 'Fecha Fin', key: 'fecha_cierre' },
  { title: 'Fecha Inscripcion', key: 'inscripcion_inicio' },
  { title: 'Status', key: 'status' },
  { title: 'Acciones', key: 'acciones' },
];
const onClickDelete = async (item) => {
  console.log("item:", item)
  const { isConfirmed } = await Swal.fire({
    title: 'Eliminar Temporada',
    text: `Estas seguro de eliminar la temporada ${item.prefijo} ${item.nombre}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });
  if (isConfirmed) {
    try {
      const response = await axios.delete(route('temporadas.destroy', item.id))
      if (response?.data?.message) {
        const { message } = response.data;
        await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
        window.location.href = route('temporadas.index');
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
        <v-card-title> TEMPORADAS </v-card-title>
        <v-card-body>
          <v-row>
            <v-col class="d-flex justify-end">
              <Link :href="route('temporadas.create')">
              <v-btn :to="{ name: 'temporadas.create' }" color="success" class="ms-auto">
                Crear Nueva Temporada
              </v-btn>
              </Link>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table :headers="headers" :items="temporadas" :items-per-page="10" class="elevation-1 rounded">
                <template v-slot:[`item.fecha_inicio`]="{ item }">
                  {{ FormatFecha(item.fecha_inicio, 3) }}
                </template>
                <template v-slot:[`item.fecha_cierre`]="{ item }">
                  {{ FormatFecha(item.fecha_cierre, 3) }}
                </template>
                <template v-slot:[`item.inscripcion_inicio`]="{ item }">
                  {{ FormatFecha(item.inscripcion_inicio, 3) }} -
                  {{ FormatFecha(item.inscripcion_cierre, 3) }}
                </template>
                <template v-slot:[`item.status`]="{ item }">
                  {{ isActive(item.fecha_inicio, item.fecha_cierre) }}
                </template>
                <template v-slot:[`item.acciones`]="{ item }">
                  <div class="d-flex flex-wrap ga-3">
                    <Link :href="route('temporadas.show', item)">
                    <v-btn as="v-btn" color="info" small> Ver </v-btn>
                    </Link>
                    <Link :href="route('temporadas.edit', item)">
                    <v-btn :to="{ name: 'temporadas.edit', params: { id: item.idCrypt } }" color="secondary" small>
                      Editar
                    </v-btn></Link>
                    <v-btn color="error" small @click="onClickDelete(item)">Eliminar</v-btn>
                  </div>
                </template>
              </v-data-table>
            </v-col>
          </v-row></v-card-body>
      </v-card>
    </v-container>
  </MainLayout>
</template>
