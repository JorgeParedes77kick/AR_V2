<template>
  <main-layout>
    <v-container>
      <v-card color="background">
        <v-card-title>Bienvenido a Mi Aplicación</v-card-title>
        <v-card-text> Este es el contenido de la página de ejemplo. </v-card-text>
      </v-card>
    </v-container>
  </main-layout>
</template>

<script>
import MainLayout from '../components/Layout.vue';

export default {
  components: {
    MainLayout,
  },
};
</script>

<style scoped></style>

