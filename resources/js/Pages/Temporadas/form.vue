<script setup>
import { onMounted, ref, inject } from 'vue';
import { useForm, Link } from '@inertiajs/inertia-vue3';

import ButtonBack from '../../components/ButtonBack';

import MainLayout from '../../components/Layout';
import {
  ACCION,
  TEXT_BUTTON,
  FORM_POST,
  CRUD,
  validInput,
  removeValid,
} from '../../constants/form';
import axios from 'axios';

const validate = inject('$validation');

const props = defineProps({
  action: String,
  temporada: { Object, default: {} },
  status: String,
});

const loading = ref(false);
const isDisabled = ref(props.action === CRUD.show);

const inputForm = useForm({
  nombre: '',
  prefijo: '',
  titulo: '',
  fecha_inicio: '',
  fecha_cierre: '',
  inscripcion_inicio: '',
  inscripcion_cierre: '',
  ...props.temporada,
});
const form = ref(null);

const validateForm = async (e) => {
  e.preventDefault();
  inputForm.clearErrors();
  const { valid } = await form.value.validate();
  if (valid) submit();
};

const submit = async (form) => {
  loading.value = true;
  const action = props.action === CRUD.edit ? 'update' : 'store';
  const method = props.action === CRUD.edit ? 'put' : 'post';
  const routeName = `temporadas.${action}`;
  const id = props.action === CRUD.edit ? inputForm.id : null;

  try {
    const response = await axios[method](route(routeName, id), inputForm);
    if (response?.data?.message) {
      const { message } = response.data;
      await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
      window.location.href = route('temporadas.index');
    }
  } catch (err) {
    console.log(err?.response);
    if (err?.response?.data?.server) {
      const { server: message } = err.response.data;
      Swal.fire({ title: 'Error!', text: message, icon: 'error' });
    }
    if (err?.response?.data?.errors) {
      const { errors } = err.response.data;
      inputForm.errors = errors;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <MainLayout>
    <v-container fluid>
      <v-card color="background" class="" :disabled="loading" :loading="loading">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear :active="isActive" color="primary" height="4" indeterminate />
        </template>
        <v-card-title>
          <ButtonBack :href="route('temporadas.index')" /> TEMPORADAS
          {{ CRUD.create !== action ? `#${inputForm.id}` : '' }}
        </v-card-title>
        <v-card-subtitle> {{ ACCION[action] }} de Temporada</v-card-subtitle>
        <v-card-text>
          <v-form @submit="validateForm" ref="form" lazy-validation>
            <v-row class="row-gap-2">
              <v-col cols="12" sm="6">
                <v-text-field id="prefijo" name="prefijo" label="Prefijo" v-model="inputForm.prefijo"
                  :disabled="isDisabled" :rules="validate('Nombre', 'required')"
                  :error-messages="inputForm.errors.prefijo" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="nombre" name="nombre" label="Nombre" v-model="inputForm.nombre" :disabled="isDisabled"
                  :rules="validate('Temporada', 'required')" :error-messages="inputForm.errors.nombre" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="fecha_inicio" name="fecha_inicio" label="Fecha de inicio" type="date"
                  v-model="inputForm.fecha_inicio" :disabled="isDisabled"
                  :rules="validate('Fecha de inicio', 'required')" :error-messages="inputForm.errors.fecha_inicio" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="fecha_cierre" name="fecha_cierre" label="Fecha de cierre" type="date"
                  v-model="inputForm.fecha_cierre" :disabled="isDisabled"
                  :rules="validate('Fecha de cierre', 'required')" :error-messages="inputForm.errors.fecha_cierre" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="inscripcion_inicio" name="inscripcion_inicio" label="Fecha de inicio de inscripcion"
                  type="date" v-model="inputForm.inscripcion_inicio" :disabled="isDisabled"
                  :error-messages="inputForm.errors.inscripcion_inicio" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="inscripcion_cierre" name="inscripcion_cierre" label="Fecha de cierre de inscripcion"
                  type="date" v-model="inputForm.inscripcion_cierre" :disabled="isDisabled"
                  :error-messages="inputForm.errors.inscripcion_cierre" />
              </v-col>
            </v-row>
            <v-row class="my-3" v-if="!isDisabled">
              <v-col cols="12" class="d-flex">
                <v-btn class="ms-auto" type="submit" color="primary" :loading="loading">
                  {{ TEXT_BUTTON[action] }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </MainLayout>
</template>
