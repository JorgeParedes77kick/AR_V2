<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { defineProps, onMounted } from 'vue';

import MainLayout from '../../components/Layout';
import { truncarTexto } from '../../utils/string';
dayjs.extend(isBetween);

const props = defineProps({
  ciclos: Array,
});
onMounted(() => {
  // console.log(props.ciclos)
});

const headers = [
  { title: 'ID', key: 'id', fixed: true },
  { title: 'Curriculum', key: 'curriculum.nombre' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Ciclo Previo', key: 'previo' },
  { title: 'Acciones', key: 'acciones', sortable: false },
];
const onClickDelete = async (item) => {
  const { isConfirmed } = await Swal.fire({
    title: 'Eliminar Ciclo',
    text: `Estas seguro de eliminar el ciclo ${item.nombre}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });
  if (isConfirmed) {
    try {
      const response = await axios.delete(route('ciclos.destroy', item.id));
      const index = props.ciclos.findIndex(x => x.id === item.id)
      if (response?.data?.message) {
        const { message } = response.data;
        Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
        props.ciclos.splice(index, 1)
      }
    } catch (err) {
      console.log("err:", err)
      if (err?.response?.data?.server) {
        const { server: msg, message } = err.response.data;
        Swal.fire({ title: 'Error!', text: msg + '\n' + truncarTexto(message), icon: 'error' });
      }
    }
  }
};
</script>
<template>
  <MainLayout>
    <v-container>
      <v-card color="background" class="px-4 py-2">
        <v-card-title> CICLOS </v-card-title>
        <v-card-body>
          <v-row>
            <v-col class="d-flex justify-end">
              <Link :href="route('ciclos.create')">
              <v-btn :to="{ name: 'ciclos.create' }" color="success" class="ms-auto">
                Crear Nuevo Ciclo
              </v-btn>
              </Link>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table :headers="headers" :items="ciclos" :items-per-page="25" class="elevation-1 rounded">
                <template v-slot:[`item.previo`]="{ item }">
                  <p v-for="requisito in item.requisitos" :key="requisito.id">
                    {{ requisito?.ciclo_pre?.curriculum?.nombre }} - {{ requisito?.ciclo_pre?.nombre }}
                  </p>
                </template>
                <template v-slot:[`item.acciones`]="{ item }">
                  <div class="d-flex inline-flex ga-2">
                    <Link :href="route('ciclos.show', item)">
                    <v-btn as="v-btn" color="info" small> Ver </v-btn>
                    </Link>
                    <Link :href="route('ciclos.edit', item)">
                    <v-btn :to="{ name: 'ciclos.edit', params: { id: item.idCrypt } }" color="secondary" small>
                      Editar
                    </v-btn>
                    </Link>
                    <v-btn color="error" small @click="onClickDelete(item)">Eliminar
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
