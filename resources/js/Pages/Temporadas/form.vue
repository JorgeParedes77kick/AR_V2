<script setup>
import Navbar from '../../components/Navbar.vue';
import { ACCION, TEXT_BUTTON } from '../../constants/form';
import { onMounted, ref } from 'vue';

const props = defineProps({
  action: String,
});
let textoButton = ref('');
let textoTitulo = ref('');
let submit = ref((e) => {
  e.preventDefault();
  console.log('e:', e);
});

const loadForAction = () => {
  const { action } = props;
};

onMounted(() => {
  console.log(props);
});
</script>

<template>
  <Navbar />
  <div class="container-lg container-fluid">
    <h3 class="text-center">TEMPORADAS</h3>

    <h5>{{ ACCION[action] }} de Temporada</h5>
    <form @submit="submit" class="row-gap-3">
      <div class="row">
        <div class="col-sm-6 col-12">
          <label for="prefijo" class="form-label">Nombre</label>
          <input class="form-control" id="prefijo" />
        </div>
        <div class="col-sm-6 col-12">
          <label for="nombre" class="form-label">Temporada</label>
          <input class="form-control" id="nombre" />
        </div>
        <div class="col-sm-6 col-12">
          <label for="fecha_inicio" class="form-label">Fecha de inicio</label>
          <input class="form-control" id="fecha_inicio" type="date" />
        </div>
        <div class="col-sm-6 col-12">
          <label for="fecha_cierre" class="form-label">Fecha de cierre</label>
          <input class="form-control" id="fecha_cierre" type="date" />
        </div>
        <div class="col-sm-6 col-12">
          <label for="inscripcion_inicio" class="form-label">Fecha de inicio de inscripcion </label>
          <input class="form-control" id="inscripcion_inicio" type="date" />
        </div>
        <div class="col-sm-6 col-12">
          <label for="inscripcion_cierre" class="form-label">Fecha de cierre de inscripcion</label>
          <input class="form-control" id="inscripcion_cierre" type="date" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12 d-flex">
          <button class="btn btn-primary ms-auto" type="sumbit">{{ TEXT_BUTTON[action] }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

