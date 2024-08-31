<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { defineProps } from 'vue';

defineProps({
  href: String,
});
</script>

<template>
  <Link :href="href">
  <v-btn icon="mdi-chevron-left" color='light' size="small" />
  </Link>

</template>
