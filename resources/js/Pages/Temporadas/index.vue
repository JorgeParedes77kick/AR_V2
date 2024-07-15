<script setup>
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { FormatFecha } from '../../utils/date';
import Navbar from '../../components/Navbar.vue';
import { Link } from '@inertiajs/inertia-vue3';

import { onMounted, ref, defineProps } from 'vue';
dayjs.extend(isBetween);

const props = defineProps({
  temporadas: Object,
});

onMounted(() => {
  console.log(props.temporadas);
});

const isActive = (fecha_ini, fecha_fin) => {
  const fecha_iniJS = dayjs(fecha_ini);
  const fecha_finJS = dayjs(fecha_fin);
  const currentDate = dayjs();
  //   console.log('currentDate:', currentDate);
  return `${currentDate.isBetween(fecha_iniJS, fecha_finJS, 'day', '[]')}`;
  //   return 'TRUE';
};
</script>

<template>
  <Navbar />
  <div class="container-lg container-fluid">
    <h3>TEMPORADAS</h3>
    <div class="row">
      <div class="col d-flex">
        <Link :href="route('temporada.create')" as="button" class="btn btn-success ms-auto">
          Crear Nueva Temporada
        </Link>
      </div>
    </div>

    <table class="table table-hover table-responsive">
      <thead class="no-seleccionable">
        <tr>
          <th>Nombre</th>
          <th class="text-center">Fecha Inicio</th>
          <th class="text-center">Fecha Fin</th>
          <th class="text-center">Fecha Inscripcion</th>
          <th class="text-center">Status</th>
          <th class="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in temporadas" :key="item.idCrypt">
          <td>{{ item.prefijo }}</td>
          <td class="text-center">{{ FormatFecha(item.fecha_inicio, 3) }}</td>
          <td class="text-center">{{ FormatFecha(item.fecha_cierre, 3) }}</td>
          <td class="text-center">
            {{ FormatFecha(item.inscripcion_inicio, 3) }} -
            {{ FormatFecha(item.inscripcion_cierre, 3) }}
          </td>
          <td class="text-center">{{ isActive(item.fecha_inicio, item.fecha_cierre) }}</td>
          <td class="d-flex column-gap-1 justify-content-center">
            <Link :href="route('temporada.show', item)" as="button" class="btn btn-info">
              Ver
            </Link>
            <Link :href="route('temporada.edit', item)" as="button" class="btn btn-secondary">
              Editar
            </Link>
            <button class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style></style>

