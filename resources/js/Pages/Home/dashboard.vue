<script setup>
import { defineProps, onMounted, ref } from 'vue';
import MainLayout from '../../components/Layout.vue';

const props = defineProps({
  data: { type: Object, default: {} },
});
const loading = ref(false);
const isDisabled = ref(false);

onMounted(() => {
  console.log(props.data);
});
</script>

<template>
  <main-layout> <v-container fluid></v-container></main-layout>
</template>
<style></style>
