<script setup>
// import { Link, usePage } from '@inertiajs/inertia-vue3';
import { defineProps, onMounted, ref } from 'vue';
import MainLayout from '../../components/Layout.vue';
const props = defineProps({});
const loading = ref(false);
const isDisabled = ref(false);

onMounted(() => {});
</script>

<template>
  <main-layout>
    <v-container fluid>
      <v-card color="background" class="shadow-md px-4 py-2">
        <v-card-title> MIS GRUPOS PEQUEÑOS </v-card-title>
      </v-card>
    </v-container>
  </main-layout>
</template>
<style></style>
