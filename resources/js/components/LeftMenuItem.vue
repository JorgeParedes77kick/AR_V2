<script setup>
import {defineProps, ref} from "vue";
import LeftMenuItemSub from "./LeftMenuItemSub.vue";

const props = defineProps({
  menu: Array,
});

const activeGroup = ref(null);

</script>

<template>
  <template v-if="menu.submenu.length === 0" >
    <v-list-item :title="menu.nombre" href="menu.url_ref" :prepend-icon="menu.icon" ></v-list-item>
  </template>
  <template v-else >
    <v-list-group v-model="activeGroup" :value="menu.id" class="my-v-list-group">
      <template  v-slot:activator="{ props }" >
        <v-list-item v-bind="props" :title="menu.nombre" href="#" :prepend-icon="menu.icon" ></v-list-item>
      </template>
      <LeftMenuItemSub :subMenu="menu.submenu" ></LeftMenuItemSub>
    </v-list-group>
  </template>
</template>

<style scoped>

</style>
