<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import { router } from '@inertiajs/vue3';
import { defineProps, inject, onMounted, ref } from 'vue';

import ButtonBack from '../../components/ButtonBack';

import axios from 'axios';
import MainLayout from '../../components/Layout';
import { CRUD, TEXT_BUTTON } from '../../constants/form';
import { Truthty } from '../../utils/isType';

const validate = inject('$validation');

const props = defineProps({
  action: String,
  usuario: { type: Object, default: {} },
  roles: { type: Array, default: [] },
  personas: { type: Array, default: [] },
  status: String,
});

const loading = ref(false);
const isDisabled = ref(props.action === CRUD.show);

const inputForm = useForm({
  id: '',
  nick_name: '',
  email: '',
  persona: {},
  nombreApellido: '',
  roles: [],
  ...props.usuario,
});
const form = ref(null);
const persona = ref('');

onMounted(() => {
  const { usuario, roles } = props;
  let ids = [5];
  if (Truthty(usuario)) {
    ids = usuario.roles.map((x) => x.id);
    inputForm.nombreApellido = `${props.usuario?.persona?.nombre} ${props.usuario?.persona?.apellido}`;
  }
  inputForm.roles = roles.map((x) => ({ ...x, activo: ids.includes(x.id) }));
});

const validateForm = async (e) => {
  e.preventDefault();
  inputForm.clearErrors();
  const { valid, ...rest } = await form.value.validate();
  console.log('valid:', valid, rest);
  if (valid) submit();
};

const submit = async () => {
  loading.value = true;
  const action = props.action === CRUD.edit ? 'update' : 'store';
  const method = props.action === CRUD.edit ? 'put' : 'post';
  const routeName = `usuarios-equipo.${action}`;
  const id = props.action === CRUD.edit ? inputForm.id : undefined;

  try {
    const response = await axios[method](route(routeName, id), inputForm);
    if (response?.data?.message) {
      const { message } = response.data;
      await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });

      router.visit(route('usuarios-equipo.index'));
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

const focus = (state) => {
  if (!state && typeof persona == 'string') {
    persona.value = '';
    inputForm.nick_name = '';
    inputForm.nombreApellido = '';
    inputForm.email = '';
    inputForm.id = '';
  }
};
const onChange = (item) => {
  if (typeof item === 'object' && Truthty(item)) {
    const { nick_name, nombre, apellido, email, id } = item;
    inputForm.nick_name = nick_name;
    inputForm.nombreApellido = `${nombre} ${apellido}`;
    inputForm.email = email;
    inputForm.id = id;
  }
};
</script>

<template>
  <MainLayout>
    <v-container>
      <v-card color="background" class="" :disabled="loading" :loading="loading">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear :active="isActive" color="primary" height="4" indeterminate />
        </template>
        <v-card-title>
          <ButtonBack :href="route('usuarios-equipo.index')" /> USUARIOS DE AR - INTERNOS
          {{ CRUD.create !== action ? `#${inputForm.id}` : '' }}
        </v-card-title>
        <!-- <v-card-subtitle>{{ ACCION[action] }} del Rol</v-card-subtitle> -->
        <v-card-text>
          <v-form @submit="validateForm" ref="form" lazy-validation>
            <v-row class="row-gap-2">
              <v-col cols="12" v-if="action === CRUD.create">
                <v-combobox id="personas" name="personas" label="Persona" v-model="persona" item-title="fullNombre"
                  item-value="id" :rules="validate('Persona', 'required')" @update:modelValue="onChange"
                  :items="personas" autocomplete="off" @update:focused="focus">
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props" :subtitle="item.raw.nick_name"></v-list-item>
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="nick_name" name="nick_name" label="Nick" v-model="inputForm.nick_name" disabled
                  :rules="validate('Nick', 'required')" :error-messages="inputForm.errors.nick_name" />
              </v-col>
            </v-row>

            <v-row class="row-gap-2">
              <!-- <v-col v-if="action !== CRUD.create" cols="12" sm="6">
                <v-text-field id="id" name="id" label="ID" v-model="inputForm.id" disabled
                  :error-messages="inputForm.errors.id" />
              </v-col> -->

              <v-col cols="12" sm="6">
                <v-text-field id="Nombre" name="Nombre" label="Nombre" v-model="inputForm.nombreApellido" disabled
                  :rules="validate('Nombre', 'required')" :error-messages="inputForm.errors.nick_name" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field id="email" name="email" label="Correo" v-model="inputForm.email" disabled
                  :rules="validate('Correo', 'required')" :error-messages="inputForm.errors.nick_name" />
              </v-col>
            </v-row>
            <v-row class="mx-4">
              <v-col cols="12" sm="4" md="3" lg="2" v-for="rol in inputForm.roles" :key="rol.id">
                <text class="text-body-2"> {{ rol.nombre }}</text>
                <v-switch :id="`activo_${rol.id}`" :name="`activo_${rol.id}`" v-model="rol.activo"
                  :disabled="isDisabled" :label="rol.activo ? 'Activo' : 'Inactivo'" color="primary" />
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
