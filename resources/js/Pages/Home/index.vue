<script setup>
import { Link, usePage } from '@inertiajs/inertia-vue3';
import { defineProps, onMounted, ref } from 'vue';
import MainLayout from '../../components/Layout.vue';

// const { flash } = usePage().props.value;
const pageProps = usePage().props.value;

const props = defineProps({
  temporadas: { type: Array, default: [] },
  curriculums: { type: Array, default: [] },
  status: Boolean,
});

const loading = ref(false);
const isDisabled = ref(false);

onMounted(() => {
  console.log('pageProps:', pageProps);
  console.log('Props:', props);
});
</script>

<template>
  <main-layout>
    <v-container fluid>
      <v-card color="background" class="shadow-md px-4 py-2">
        <div>
          <template v-if="temporadas.some((x) => x.activo_inscripcion) && curriculums.length > 0">
            <v-card-title class="text-center text-h4"
              >GRUPOS PEQUEÑOS ABIERTOS ESTA TEMPORADA</v-card-title
            >
            <p class="text-subtitle-1 text-center">Haz clic en el grupo pequeño de tu interes!</p>
          </template>
          <template v-else>
            <v-card-title class="text-center h4" style="font-size: 30px"
              >¡Ya comenzó la temporada {{ temporadas[0].prefijo }} de grupos
              pequeños!</v-card-title
            >
            <!-- <img src="@/assets/celebracion.png" width="10%" height="10%" /> -->
          </template>

          <template v-if="status">
            <v-alert type="success" :text="status"></v-alert>
          </template>

          <template v-if="temporadas.some((x) => x.activo_inscripcion) && curriculums.length > 0">
            <v-row class="mt-3">
              <v-col
                cols="6"
                sm="4"
                md="3"
                xl="2"
                class="mb-1"
                v-for="curriculum in curriculums"
                :key="curriculum.id"
              >
                <Link
                  :href="
                    route(
                      'horario.curriculum',
                      curriculum.nombre.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
                    )
                  "
                >
                  <v-card class="hover-card">
                    <v-img :src="`/storage/img/curriculums/${curriculum.imagen}`" />
                  </v-card>
                </Link>
              </v-col>
            </v-row>
          </template>
          <template>
            <v-row id="aviso">
              <v-col cols="12">
                <v-alert color="info">
                  <p>
                    Qué bueno que seas parte de esta familia sin fronteras. Esperamos que estés
                    disfrutando de todo lo que estas viviendo este tiempo. Recuerda que aquí podrás
                    tener
                    <!-- <a :href="editarPerfilRoute">acceso a tu perfil</a>, -->
                    revisar
                    <!-- <a :href="misGruposRoute">tus grupos inscritos</a> -->
                    y muy pronto tendremos nuevas funciones que harán mejor tu experiencia de Grupos
                    Pequeños Sin Fronteras.
                  </p>
                  <p style="text-align: center">
                    <strong>¡Que tengas una bella temporada!</strong>
                  </p>
                </v-alert>
              </v-col>
            </v-row>
          </template>
        </div>
      </v-card></v-container
    ></main-layout
  >
</template>
<style></style>
