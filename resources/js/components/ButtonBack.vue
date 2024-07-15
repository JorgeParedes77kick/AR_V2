<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { defineProps } from 'vue';

defineProps({
  href: String,
});
</script>

<template>
  <Link
    class="btn btn-outline-secondary rounded-circle my-2"
    as="button"
    :href="href"
    style="width: 39px; height: 39px; padding: 0px 0px 5px 5px"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z" />
    </svg>
  </Link>
</template>

