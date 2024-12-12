<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { defineProps, inject, onMounted, ref, watch } from 'vue';

import axios from 'axios';
import MainLayout from '../../components/Layout.vue';
import Pagination from '../../components/Pagination.vue';
const validate = inject('$validation');

const props = defineProps({
  genero: { type: Array, default: [] },
  estadoCivil: { type: Array, default: [] },
  pais: { type: Array, default: [] },
  nacionalidad: { type: Array, default: [] },
});

const region = ref([]);

const inputForm = useForm({
  buscador: '',
  genero: null,
  estado_civil: null,
  nacionalidad: null,
  pais: null,
  region: null,
});
const loading = ref(false);
const isDisabled = ref(false);

const formBuscar = ref(null);

const headers = [
  // { title: '', key: 'id', fixed: true },
  { title: 'Nick', key: 'nick_name' },
  { title: 'Email', key: 'email' },
  { title: 'Nombre', key: 'nombreCompleto' },
  { title: 'Acciones', key: 'acciones', sortable: false },
];

const usuarios = ref({});

const validateForm = async (e) => {
  e?.preventDefault?.();
  inputForm.clearErrors();
  const { valid } = await formBuscar.value.validate();
  if (valid) submitBuscar();
};

const bodyFind = ref(null);
const openFilter = ref(false);

const submitBuscar = async () => {
  try {
    loading.value = true;
    const response = await axios.post(route('personas.find'), {
      ...inputForm,
      perPage: options.value.perPage,
    });
    loading.value = false;
    bodyFind.value = { ...inputForm };
    usuarios.value = { ...response.data.usuarios };
    openFilter.value = false;
  } catch (error) {
    console.log('error:', error);
  }
};
const onChangePais = (item) => {
  const paisSelect = props.pais.find((x) => x.id === item);
  if (paisSelect) region.value = paisSelect.regiones;
  else region.value = [];
};
const options = ref({ page: 1, perPage: 20 });

const onChangePage = (page) => {
  options.value.page = page;
};
const onChangePerPage = (perPage) => {
  options.value = { perPage, page: 1 };
};

const fetchData = async () => {
  const { page, perPage } = options.value;
  try {
    loading.value = true;
    const { data } = await axios.post(`${route('personas.find')}?page=${page}`, {
      ...bodyFind,
      perPage,
    });
    loading.value = false;
    usuarios.value = { ...data.usuarios };
  } catch (error) { }
};

watch(
  options,
  () => {
    fetchData();
  },
  { deep: true },
);

onMounted(() => {
  submitBuscar();
});


</script>

<template>
  <MainLayout>
    <v-container fluid>
      <v-card color="background" class="shadow-md px-4 py-2">
        <v-card-title> Personas </v-card-title>

        <v-form @submit="validateForm" ref="formBuscar" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field id="buscador" name="buscador" label="Buscador" v-model="inputForm.buscador"
                prepend-inner-icon="mdi-magnify" :error-messages="inputForm.errors.inputForm" clearable
                placeholder="nombre | apellido | correo | dni | nick" />
            </v-col></v-row>
          <v-expansion-panels v-model="openFilter" class="mb-2">
            <v-expansion-panel title="Filtros de búsqueda">
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-select id="genero" name="genero" label="Genero" v-model="inputForm.genero" color="input"
                      :error-messages="inputForm.errors.genero" :items="genero" item-title="nombre" item-value="id"
                      clearable />
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-select id="estado_civil" name="estado_civil" label="Estado Civil"
                      v-model="inputForm.estado_civil" color="input" :error-messages="inputForm.errors.estado_civil"
                      :items="estadoCivil" item-title="estado" item-value="id" clearable />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-select id="nacionalidad" name="nacionalidad" label="Nacionalidad"
                      v-model="inputForm.nacionalidad" color="input" :error-messages="inputForm.errors.nacionalidad"
                      :items="nacionalidad" item-title="nombre" item-value="id" clearable />
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-select id="pais" name="pais" label="País" v-model="inputForm.pais" color="input"
                      :error-messages="inputForm.errors.pais" :items="pais" item-title="nombre" item-value="id"
                      @update:modelValue="onChangePais" clearable />
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-select id="region" name="region" label="Región" v-model="inputForm.region" color="input"
                      :error-messages="inputForm.errors.region" :items="region" item-title="nombre" item-value="id"
                      clearable />
                  </v-col>
                </v-row>
              </v-expansion-panel-text></v-expansion-panel></v-expansion-panels>

          <v-row>
            <v-col cols="12" class="d-flex">
              <v-btn class="ms-auto" type="submit" color="info" :loading="loading">
                BUSCAR
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <v-row>
          <v-col>
            <v-data-table fixed-header :headers="headers" :items="usuarios.data" :loading="loading"
              :items-per-page="options.perPage" class="elevation-1 rounded" height="50rem">
              <!-- Slot para el footer personalizado -->
              <template #bottom>
                <Pagination v-bind="usuarios" :onChangePage="onChangePage" :onChangePerPage="onChangePerPage" />
              </template>
              <template v-slot:[`item.acciones`]="{ item }">
                <div class="d-flex inline-flex ga-2">

                  <Link :href="route('personas.edit', item.idCrypt)">
                  <v-btn color="secondary" small>
                    Editar
                  </v-btn>
                  </Link>

                </div>
              </template>
            </v-data-table>
          </v-col></v-row>
      </v-card>
    </v-container>
  </MainLayout>
</template>
<style></style>
