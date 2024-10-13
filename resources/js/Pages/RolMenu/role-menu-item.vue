<script setup>

import {defineProps} from "vue";

const props = defineProps({
  rootMenu: Array,
  subMenu: String,
  roles: Array,
});
</script>

<template>
  <tr>
    <td :class="(subMenu === 'yes') ? 'font-italic' : 'font-weight-black'" >
      <v-icon :icon="(subMenu === 'yes') ? 'mdi-chevron-double-right' : 'mdi-circle-medium'" style="color: darkred; font-size: 17px;" :class="(subMenu === 'yes') ? 'pl-5' : 'pl-0'"></v-icon>&nbsp;{{ rootMenu.nombre }}
    </td>

    <td v-for="rol in roles" :key="rol.nombre" class="text-left">
      <v-checkbox id="rol.id" color="red"></v-checkbox>
    </td>
  </tr>
  <template v-for="subMenu in rootMenu.submenu">
      <role-menu-item :rootMenu="subMenu" subMenu="yes" :roles="roles"></role-menu-item>
  </template>
</template>

<style scoped>

</style>
