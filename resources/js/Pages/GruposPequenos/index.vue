<script setup>
import { Link } from '@inertiajs/inertia-vue3';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';

import { computed, defineProps, onMounted, ref, watch } from 'vue';

import MainLayout from '../../components/Layout';
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const props = defineProps({
  gruposPequenos: { type: Array, default: [] },
  temporadas: { type: Array, default: [] },
  curriculums: { type: Array, default: [] },
  ciclos: { type: Array, default: [] },
  dias: { type: Array, default: [] },
  action: String,
});
onMounted(() => {
  console.log(props);
});

const headers = [
  { title: 'ID', key: 'id', fixed: true },
  { title: 'Temporada', key: 'temporada.prefijo' },
  { title: 'Curriculum', key: 'ciclo.curriculum.nombre' },
  { title: 'Ciclo', key: 'ciclo.nombre' },
  { title: 'Monitores', key: 'monitores' },
  { title: 'Lideres', key: '' },
  { title: 'Día', key: 'dia_curso' },
  { title: 'Hora', key: 'hora', minWidth: '6rem' },
  { title: 'Obs', key: 'info_adicional', minWidth: '10rem', sortable: false },
  // { title: 'Roles', key: 'roles', width: '20rem', sortable: false },
  { title: 'Acciones', key: 'acciones', sortable: false },
];

const openFilter = ref(false);
const searchForm = ref({
  temporadas: [],
  curriculums: [],
  ciclos: [],
  dias: [],
  nombre: '',
});

const filteredItems = computed(() => {
  return props.gruposPequenos.filter((item) => {
    const { temporadas, curriculums, ciclos, dias, nombre } = searchForm.value;
    const nombreCast = nombre.toLowerCase();

    if (temporadas.length > 0 && !temporadas.includes(item.temporada.prefijo)) return false;
    if (curriculums.length > 0 && !curriculums.includes(item.ciclo.curriculum.nombre)) return false;
    if (ciclos.length > 0 && !ciclos.includes(item.ciclo.nombre)) return false;
    if (dias.length > 0 && !dias.includes(item.dia_curso)) return false;

    const inscripciones = [...item.monitores, ...item.lideres].map((x) => {
      return {
        nombre: x.persona.nombre.toLowerCase(),
        apellido: x.persona.apellido.toLowerCase(),
        email: x.email.toLowerCase(),
        fullName: `${x.persona.nombre} ${x.persona.apellido}`.toLowerCase(),
      };
    });

    const matchNombre =
      nombreCast.length === 0 ||
      inscripciones.some((x) =>
        [x.nombre, x.apellido, x.email, x.fullName].some((y) => {
          return y.includes(nombreCast);
        }),
      );

    return matchNombre;
  });
});
// Watch to trigger the filteredItems whenever searchForm changes
watch(searchForm, () => {}, { deep: true });

const onClickClean = (e) => {
  e.preventDefault();
  searchForm.value = { temporadas: [], curriculums: [], ciclos: [], dias: [], nombre: '' };
  openFilter.value = false;
};

const onClickDelete = async (item) => {
  console.log('item:', item);
  const { isConfirmed } = await Swal.fire({
    title: 'Eliminar Horario Grupo Pequeño',
    text: `Estas seguro de eliminar el horario #${item.id}.\n Día ${item.dia_curso} a las ${dayjs(item.hora_inicio, 'HH:mm:ss').format('HH:mm [hrs]')} a
    ${dayjs(item.hora_fin, 'HH:mm:ss').format('HH:mm [hrs]')}, para el grupo pequeno ${item.ciclo.curriculum.nombre}
     en el ciclo ${item.ciclo.nombre}.`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });
  if (isConfirmed) {
    try {
      const response = await axios.delete(route('grupos-pequenos.destroy', item.id));
      const index = props.gruposPequenos.findIndex((x) => x.id === item.id);
      if (response?.data?.message) {
        const { message } = response.data;
        await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
        props.gruposPequenos.splice(index, 1);
      }
    } catch (err) {
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
        <v-card-title>
          GRUPOS PEQUEÑOS - {{ action === 'horario' ? 'HORARIOS' : 'HISTORICO' }}</v-card-title
        >
        <div v-if="action === 'horario'">
          <v-row class="pb-2">
            <v-col class="d-flex justify-end">
              <Link :href="route('grupos-pequenos.create')">
                <v-btn color="success" class="ms-auto"> Nuevo Horario </v-btn>
              </Link>
            </v-col>
          </v-row>
        </div>
        <v-expansion-panels v-model="openFilter">
          <v-expansion-panel>
            <v-expansion-panel-title> Filtros de búsqueda </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="row-gap-2">
                <v-col cols="12">
                  <v-text-field
                    v-model="searchForm.nombre"
                    label="Nombre"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="3">
                  <v-select
                    id="Temporada"
                    name="Temporada"
                    label="Temporada"
                    chips
                    multiple
                    closable-chips
                    v-model="searchForm.temporadas"
                    :items="temporadas"
                    item-title="prefijo"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-select
                    id="Curriculum"
                    name="Curriculum"
                    label="Curriculum"
                    chips
                    multiple
                    closable-chips
                    v-model="searchForm.curriculums"
                    :items="curriculums"
                    item-title="nombre"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-select
                    id="Ciclo"
                    name="Ciclo"
                    label="Ciclo"
                    chips
                    multiple
                    closable-chips
                    v-model="searchForm.ciclos"
                    :items="ciclos"
                    item-title="nombre"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-select
                    id="Dia"
                    name="Dia"
                    label="Día"
                    chips
                    multiple
                    closable-chips
                    v-model="searchForm.dias"
                    :items="dias"
                  />
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-btn size="x-small" @click="onClickClean">Limpiar</v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <div>
          <v-row>
            <v-col>
              <v-data-table
                :headers="headers"
                :items="filteredItems"
                :items-per-page="20"
                class="elevation-1 rounded"
              >
                <template v-slot:[`item.monitores`]="{ item }">
                  <p v-for="monitor in item.monitores" :key="monitor.id">
                    {{ monitor?.persona?.nombre }}
                    {{ monitor?.persona?.apellido }}
                  </p>
                </template>
                <template v-slot:[`item.lideres`]="{ item }">
                  <p v-for="lider in item.lideres" :key="lider.id">
                    {{ lider?.persona?.nombre }} {{ lider?.persona?.apellido }}
                  </p>
                </template>
                <template v-slot:[`item.hora`]="{ item }">
                  <p v-if="item.dia_curso == 'none'">none</p>
                  <p v-else>
                    {{ dayjs(item.hora_inicio, 'HH:mm:ss').format('HH:mm [hrs]') }}
                    {{ dayjs(item.hora_fin, 'HH:mm:ss').format('HH:mm [hrs]') }}
                  </p>
                </template>
                <template v-slot:[`item.acciones`]="{ item }">
                  <div class="d-flex inline-flex ga-2">
                    <Link :href="route('grupos-pequenos.show', item)">
                      <v-btn as="v-btn" color="info" small> Ver </v-btn>
                    </Link>
                    <Link v-if="item.temporada.activo" :href="route('grupos-pequenos.edit', item)">
                      <v-btn color="secondary" small> Editar </v-btn>
                    </Link>
                    <v-btn
                      v-if="item.temporada.activo && item.alumnos_contar === 0"
                      color="error"
                      small
                      @click="onClickDelete(item)"
                      v-tooltip:top="'Solo se pueden eliminar los que no tienen inscripciones'"
                      >Eliminar
                    </v-btn>
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
