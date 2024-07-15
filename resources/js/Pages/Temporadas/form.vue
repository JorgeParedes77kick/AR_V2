<script setup>
import { onMounted, ref } from 'vue';
import { useForm, Link } from '@inertiajs/inertia-vue3';

import ButtonBack from '../../components/ButtonBack';
import Navbar from '../../components/Navbar';
import { ACCION, TEXT_BUTTON, FORM_POST, CRUD } from '../../constants/form';

const props = defineProps({
  action: String,
  temporada: { Object, default: {} },
});

const isDisabled = ref(props.action === CRUD.show);

const temporadaForm = useForm({
  nombre: '',
  prefijo: '',
  titulo: '',
  fecha_inicio: '',
  fecha_cierre: '',
  inscripcion_inicio: '',
  inscripcion_cierre: '',
  ...props.temporada,
});

const validateForm = (e) => {
  e.preventDefault();
  const form = e.target;
  form.classList.add('was-validated');
  if (!form.checkValidity()) {
    // e.preventDefault()
    e.stopPropagation();
  } else submit();
  //   const data = Array.from(new FormData(form));
  //   console.log('Object.fromEntries(data):', Object.fromEntries(data));
};
const submit = () => {
  if (props.action === CRUD.edit) temporadaForm.put(route('temporada.update', temporadaForm.id));
  if (props.action === CRUD.create) temporadaForm.post(route('temporada.store'));
};

onMounted(() => {
  console.log(props);
});
</script>

<template>
  <Navbar />
  <div class="container-lg container-fluid">
    <h3 class="text-center">TEMPORADAS</h3>
    <ButtonBack :href="route('temporada.index')" />

    <h5>{{ ACCION[action] }} de Temporada</h5>
    <form @submit="validateForm" class="row-gap-3 needs-validation" novalidate>
      <div class="row">
        <div class="col-sm-6 col-12">
          <label for="prefijo" class="form-label">Nombre</label>
          <input
            class="form-control"
            id="prefijo"
            name="prefijo"
            v-model="temporadaForm.prefijo"
            :disabled="isDisabled"
            required
          />
        </div>
        <div class="col-sm-6 col-12">
          <label for="nombre" class="form-label">Temporada</label>
          <input
            class="form-control"
            id="nombre"
            name="nombre"
            v-model="temporadaForm.nombre"
            :disabled="isDisabled"
            required
          />
        </div>
        <div class="col-sm-6 col-12">
          <label for="fecha_inicio" class="form-label">Fecha de inicio</label>
          <input
            class="form-control"
            id="fecha_inicio"
            name="fecha_inicio"
            type="date"
            v-model="temporadaForm.fecha_inicio"
            :disabled="isDisabled"
            required
          />
        </div>
        <div class="col-sm-6 col-12">
          <label for="fecha_cierre" class="form-label">Fecha de cierre</label>
          <input
            class="form-control"
            id="fecha_cierre"
            name="fecha_cierre"
            type="date"
            v-model="temporadaForm.fecha_cierre"
            :disabled="isDisabled"
            required
          />
        </div>
        <div class="col-sm-6 col-12">
          <label for="inscripcion_inicio" class="form-label">Fecha de inicio de inscripcion </label>
          <input
            class="form-control"
            id="inscripcion_inicio"
            name="inscripcion_inicio"
            type="date"
            v-model="temporadaForm.inscripcion_inicio"
            :disabled="isDisabled"
            required
          />
        </div>
        <div class="col-sm-6 col-12">
          <label for="inscripcion_cierre" class="form-label">Fecha de cierre de inscripcion</label>
          <input
            class="form-control"
            id="inscripcion_cierre"
            name="inscripcion_cierre"
            type="date"
            v-model="temporadaForm.inscripcion_cierre"
            :disabled="isDisabled"
            required
          />
        </div>
      </div>
      <div class="row my-3" v-if="!isDisabled">
        <div class="col-12 d-flex">
          <button class="btn btn-primary ms-auto" type="sumbit">{{ TEXT_BUTTON[action] }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

