<script setup>
import { Link } from '@inertiajs/vue3';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { defineProps, onMounted } from 'vue';

import MainLayout from '../../components/Layout';
import { FormatFecha } from '../../utils/date';
import { truncarTexto } from '../../utils/string';

dayjs.extend(isBetween);

const props = defineProps({
  temporadas: Object,
  // status: Number,
});

onMounted(() => {
  // console.log(props);
});

const isActive = (fecha_ini, fecha_fin) => {
  const fecha_iniJS = dayjs(fecha_ini);
  const fecha_finJS = dayjs(fecha_fin);
  const currentDate = dayjs();
  //   console.log('currentDate:', currentDate);
  return currentDate.isBetween(fecha_iniJS, fecha_finJS, 'day', '[]');
  //   return 'TRUE';
};

const headers = [
  { title: 'Prefijo', key: 'prefijo', fixed: true },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Fecha Inicio', key: 'fecha_inicio', minWidth: '8rem' },
  { title: 'Fecha Fin', key: 'fecha_cierre', minWidth: '8rem' },
  { title: 'Fecha Inscripcion', key: 'inscripcion_inicio', minWidth: '8rem' },
  { title: 'Activo', key: 'activo', sortable: false },
  { title: 'Inscripciones', key: 'activo_inscripcion', sortable: false },
  { title: '', key: 'toggle', sortable: false },
  { title: 'Acciones', key: 'acciones', sortable: false },
];
const onClickDelete = async (item) => {
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
      const response = await axios.delete(route('temporadas.destroy', item.id));
      if (response?.data?.message) {
        const { message } = response.data;
        await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });

        router.visit(route('temporadas.index'));
      }
    } catch (err) {
      if (err?.response?.data?.server) {
        const { server: msg, message } = err.response.data;
        Swal.fire({ title: 'Error!', text: msg + '\n' + truncarTexto(message), icon: 'error' });
      }
    }
  }
};
const onClickToggle = async (item, name) => {
  const index = props.temporadas.findIndex((x) => x.id === item.id);
  try {
    const response = await axios.post(route(`temporada.${name}`, item.id));
    const { temporada } = response.data;
    props.temporadas[index] = temporada;
  } catch (error) { }
};
</script>
<template>
  <MainLayout>
    <v-container fluid>
      <v-card color="background" class="px-4 py-2">
        <v-card-title> TEMPORADAS </v-card-title>
        <div>
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
                <template v-slot:[`item.activo`]="{ item }">
                  <v-chip v-if="item.activo" color="success" variant="flat">Activa</v-chip>
                  <v-chip v-else color="error" variant="flat">Inactiva</v-chip>
                </template>
                <template v-slot:[`item.activo_inscripcion`]="{ item }">
                  <v-chip v-if="item.activo_inscripcion" color="success" variant="flat">En inscripción</v-chip>
                  <v-chip v-else color="error" variant="flat">Cerrada</v-chip>
                </template>
                <template v-slot:[`item.toggle`]="{ item }">
                  <div class="d-flex inline-flex ga-2">
                    <!-- <Link :href="route('temporadas.show', item)"> -->
                    <v-btn v-if="item.activo" color="error" small variant="outlined"
                      @click="onClickToggle(item, 'toggleActivo')">
                      cerrar
                    </v-btn>
                    <v-btn v-else color="success" small variant="outlined" @click="onClickToggle(item, 'toggleActivo')">
                      activar
                    </v-btn>
                    <!-- </Link>
                    <Link :href="route('temporadas.edit', item)"> -->
                    <v-btn v-if="item.activo_inscripcion" color="error" small variant="outlined"
                      @click="onClickToggle(item, 'toggleInscripcion')">
                      cerrar inscripción
                    </v-btn>
                    <v-btn v-else color="success" small variant="outlined"
                      @click="onClickToggle(item, 'toggleInscripcion')">
                      activar inscripción
                    </v-btn>
                    <!-- </Link> -->
                  </div>
                </template>
                <template v-slot:[`item.acciones`]="{ item }">
                  <div class="d-flex inline-flex ga-2">
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
          </v-row>
        </div>
      </v-card>
    </v-container>
  </MainLayout>
</template>
