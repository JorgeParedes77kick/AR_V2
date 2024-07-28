<script setup>
const name = 'Inicio';
</script>

<template>
  <v-container class="">
    <v-card color="yellow">
      <v-card-title primary-title> Titulo de la pagina </v-card-title>
      <v-card-text class="mt-10">
        <h1 class="text-h1">Hola mundo - {{ name }}</h1>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary"> Guardar </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

