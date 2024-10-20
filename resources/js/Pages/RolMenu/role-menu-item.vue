<script setup>

import {defineProps, onMounted } from "vue";
import {useForm} from "@inertiajs/inertia-vue3";

const props = defineProps({
  rootMenu: Array,
  subMenu: String,
  roles: Array,
  rolesMenus: Array,
});

const inputForm = useForm({
  selectedRolMenu: [],
});

function isConfig(menu, rol) {
  console.log("menu/rol ", menu, rol);
  let exist = false;
  props.rolesMenus.forEach((rolMenu, index) => {
    console.log("rolMenu ", rolMenu);
    if(rolMenu.menu_id === menu && rolMenu.rol_id === rol){
      exist = true;
    }
  });
  console.log("exist ", exist);
  return exist
}

const isChange = (event) => {
  event.preventDefault();
  let element = event.target
  console.log("element ", element);
  console.log("selectedRolMenu ", inputForm.selectedRolMenu);

  let checked = element.getAttribute('checked');
  if(checked != null){
    console.log("checked true ", checked);
  }else{
    console.log("checked false ", checked);
  }
};

onMounted(() => {
  console.log("roles ", props.roles);
  console.log("rolesMenus ", props.rolesMenus);
/*
  const list = Object.keys(props.menusRoles).map(function(key) {
    return props.menusRoles[key];
  });
  console.log("list ", list);
  const listObjet = Object.keys(list).map(function(key) {
    return list[key];
  });
  console.log("listObjet ", listObjet);
  props.roles.forEach((rol, index) => {
    console.log("rol ", rol.id, rol.nombre)
    listObjet.forEach((menuRol, index) => {
      console.log("menuRol ", menuRol);
      if(rol.id === menuRol.rol_id){
        console.log("menuRol if ", menuRol);
      }
    })
  })
*/
});
</script>

<template>
  <tr>
    <td :class="(subMenu === 'yes') ? 'font-italic' : 'font-weight-black'" >
      <v-icon :icon="(subMenu === 'yes') ? 'mdi-chevron-double-right' : 'mdi-circle-medium'" style="color: darkred; font-size: 17px;" :class="(subMenu === 'yes') ? 'pl-5' : 'pl-0'"></v-icon>&nbsp;{{ rootMenu.nombre }}
    </td>

    <td v-for="rol in roles" :key="rol.nombre" class="text-center">
      <v-checkbox :id="rootMenu.id+'mr'+rol.id" :key="rootMenu.id+'mr'+rol.id"
                  :model-value="isConfig(rootMenu.id, rol.id)"
                  @change="isChange"
                  color="red" class="d-inline-flex" ></v-checkbox>
    </td>
  </tr>
  <template v-if="rootMenu.submenu.length">
    <role-menu-item v-for="(subMenu,index) in rootMenu.submenu"  :rootMenu="subMenu" subMenu="yes" :roles="roles" :rolesMenus="rolesMenus" ></role-menu-item>
  </template>
</template>

<style scoped>

</style>
