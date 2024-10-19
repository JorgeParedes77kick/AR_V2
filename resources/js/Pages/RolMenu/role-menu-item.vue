<script setup>

import {defineProps, onMounted, ref, computed } from "vue";

const props = defineProps({
  rootMenu: Array,
  subMenu: String,
  roles: Array,
  menusRoles: Array,
});

//const array_column = (array = [], column_name = '') => array.map((item, index) => item[column_name])
const items = ref(['foo', 'bar']);
const search = ref('');



onMounted(() => {
  const filteredList = computed(() => {
    if (search.value.length === 0) return props.menusRoles;
    return props.menusRoles.filter(item => item.includes(search.value));
  });

  search.value = "1";
  console.log(filteredList);
});
</script>

<template>
  <tr>
    <td :class="(subMenu === 'yes') ? 'font-italic' : 'font-weight-black'" >
      <v-icon :icon="(subMenu === 'yes') ? 'mdi-chevron-double-right' : 'mdi-circle-medium'" style="color: darkred; font-size: 17px;" :class="(subMenu === 'yes') ? 'pl-5' : 'pl-0'"></v-icon>&nbsp;{{ rootMenu.nombre }}
    </td>

    <td v-for="rol in roles" :key="rol.nombre" class="text-left">
      <v-checkbox :id="rootMenu.id+'mr'+rol.id" color="red" ></v-checkbox>
    </td>
  </tr>
  <template v-for="subMenu in rootMenu.submenu">
      <role-menu-item :rootMenu="subMenu" subMenu="yes" :roles="roles" ></role-menu-item>
  </template>
</template>

<style scoped>

</style>
