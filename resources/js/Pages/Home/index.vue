<script setup>
import { usePage } from '@inertiajs/inertia-vue3';
import { defineProps, inject, onMounted, ref } from 'vue';
import MainLayout from '../../components/Layout.vue';

const validate = inject('validation');

// const { flash } = usePage().props.value;
const pageProps = usePage().props.value;

const props = defineProps({
  temporadas: { type: Array, default: [] },
  curriculums: { type: Array, default: [] },
});

const loading = ref(false);
const isDisabled = ref(false);

onMounted(() => {
  console.log('pageProps:', pageProps);
  console.log('pageProps:', props);
});
</script>

<template>
  <main-layout>
    <v-container>
      <v-card color="background" class="shadow px-4 py-2">
        <v-card-body>
          <template v-if="temporadas.some((x) => x.state_inscripcion) && curriculums.length > 0">
            <v-card-title class="text-center h4"
              >GRUPOS PEQUEÑOS ABIERTOS ESTA TEMPORADA</v-card-title
            >
            <p class="text-center">Haz clic en el grupo pequeño de tu interes!</p>
          </template>
          <template v-else>
            <v-card-title class="text-center h4" style="font-size: 30px"
              >¡Ya comenzó la temporada {{ nombreTemporada }} de grupos pequeños!</v-card-title
            >
            <!-- <img src="@/assets/celebracion.png" width="10%" height="10%" /> -->
          </template>
          <template v-if="status">
            <v-alert type="success" :text="status"></v-alert>
          </template>
          <template v-if="temporadas.some((x) => x.state_inscripcion) && curriculums.length > 0">
            <v-row>
              <template v-for="(grupopequeno, index) in curriculums" :key="index">
                <template v-if="grupopequeno.id !== 7">
                  <template
                    v-if="
                      (user.genero === 'Masculino' && [5, 26, 27, 29].includes(grupopequeno.id)) ||
                      (user.genero === 'Femenino' && grupopequeno.id === 4)
                    "
                  >
                    <v-col cols="3" class="mb-1">
                      <v-card class="hover-card">
                        <input
                          type="hidden"
                          name="gp"
                          :value="grupopequeno.id"
                          class="form-control"
                        />
                        <input
                          type="hidden"
                          name="nombregp"
                          :value="grupopequeno.nombre_grupop"
                          class="form-control"
                        />
                        <img :alt="grupopequeno.nombre_grupop" class="shadow" />
                        <v-btn
                          class="text-white btn btn-custom btn-block"
                          @click="avisoGenero(user.genero)"
                        >
                          <!-- {{-- {{ grupopequeno.nombre_grupop }} --}} -->
                        </v-btn>
                      </v-card>
                    </v-col>
                  </template>
                  <template v-else>
                    <v-col cols="3" class="mb-1">
                      <v-form
                        class="hover-card"
                        :action="opcionRoute"
                        method="post"
                        :id="grupopequeno.id"
                      >
                        @csrf
                        <input
                          type="hidden"
                          name="gp"
                          :value="grupopequeno.id"
                          class="form-control"
                        />
                        <input
                          type="hidden"
                          name="nombregp"
                          :value="
                            grupopequeno.id === 6
                              ? 'PROGRAMA DE MATRIMONIOS'
                              : grupopequeno.nombre_grupop
                          "
                          class="form-control"
                        />
                        <img
                          :alt="
                            grupopequeno.id === 6
                              ? 'PROGRAMA DE MATRIMONIOS'
                              : grupopequeno.nombre_grupop
                          "
                          class="shadow"
                        />
                        <v-btn
                          type="submit"
                          class="text-white btn btn-custom btn-block"
                          @click="
                            validaCurso(
                              $event,
                              grupopequeno.edad_min,
                              grupopequeno.edad_max,
                              grupopequeno.id,
                            )
                          "
                        >
                          <!-- {{-- {{ grupopequeno.id === 6 ? 'PROGRAMA DE MATRIMONIOS' : grupopequeno.nombre_grupop }}--}} -->
                        </v-btn>
                      </v-form>
                    </v-col>
                  </template>
                </template>
              </template>
            </v-row>
          </template>
          <template v-else>
            <v-row id="aviso">
              <v-col cols="12">
                <v-alert color="info">
                  <p>
                    Qué bueno que seas parte de esta familia sin fronteras. Esperamos que estés
                    disfrutando de todo lo que estas viviendo este tiempo. Recuerda que aquí podrás
                    tener <a :href="editarPerfilRoute">acceso a tu perfil</a>, revisar
                    <a :href="misGruposRoute">tus grupos inscritos</a> y muy pronto tendremos nuevas
                    funciones que harán mejor tu experiencia de Grupos Pequeños Sin Fronteras.
                  </p>
                  <p style="text-align: center">
                    <strong>¡Que tengas una bella temporada!</strong>
                  </p>
                </v-alert>
              </v-col>
            </v-row>
          </template>
        </v-card-body>
      </v-card></v-container
    ></main-layout
  >
</template>
<style></style>
