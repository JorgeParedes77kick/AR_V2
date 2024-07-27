<script setup>
import { onMounted, ref } from 'vue';
import { useForm, Link } from '@inertiajs/inertia-vue3';

import ButtonBack from '../../components/ButtonBack';
import Navbar from '../../components/Navbar';
import {
  ACCION,
  TEXT_BUTTON,
  FORM_POST,
  CRUD,
  validInput,
  removeValid,
} from '../../constants/form';

const props = defineProps({
  action: String,
  temporada: { Object, default: {} },
  status: String,
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
  form.querySelectorAll('.form-control').forEach((x) => removeValid(x));
  if (!form.checkValidity()) {
    const inputs = form.querySelectorAll(':invalid');
    inputs.forEach((x) => validInput(x, false));
    // e.preventDefault()
    e.stopPropagation();
  } else submit(form);
  //
};
const submit = async (form) => {
  const onError = (errors) => {
    // const { errors } = temporadaForm;

    if (errors.status == 400) {
      return alert(errors.mensaje);
    }
    Object.keys(temporadaForm.errors).forEach((x) => {
      validInput(form.querySelector('#' + x), false);
    });
  };
  if (props.action === CRUD.edit) {
    temporadaForm.put(route('temporada.update', temporadaForm.id), {
      onError,
      onSuccess: (data) => {
        console.log('data:', data);
      },
      onFinish: (data) => {
        console.log('data:', data);
      },
    });

    // const response = axios
    //   .put(route('temporada.update', temporadaForm.id), temporadaForm)
    //   .catch((err) => {
    //     console.log('err:', Object.keys(err));
    //     console.log('err:', err.request);
    //     console.log('err:', err.response.data);
    //   });
  }

  if (props.action === CRUD.create) {
    temporadaForm.post(route('temporada.store'), {
      onError,
      onSuccess: (data) => {
        console.log('data:', data);
      },
      onFinish: (data) => {
        console.log('data:', data);
      },
    });
  }
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
    <form @submit="validateForm" class="needs-validation" novalidate>
      <div class="row row-gap-2">
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
          <div class="invalid-feedback">
            {{ temporadaForm.errors.prefijo }}
          </div>
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
          <div class="invalid-feedback">
            {{ temporadaForm.errors.nombre }}
          </div>
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
          <div class="invalid-feedback">
            {{ temporadaForm.errors.fecha_inicio }}
          </div>
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
          <div class="invalid-feedback">
            {{ temporadaForm.errors.fecha_cierre }}
          </div>
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
          />
          <div class="invalid-feedback">
            {{ temporadaForm.errors.inscripcion_inicio }}
          </div>
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
          />
          <div class="invalid-feedback">
            {{ temporadaForm.errors.inscripcion_cierre }}
          </div>
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

