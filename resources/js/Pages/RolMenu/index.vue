<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { defineProps, onMounted } from 'vue';

import MainLayout from '../../components/Layout';
import { truncarTexto } from '../../utils/string';
import RoleMenuItem from "./role-menu-item.vue";
import {no} from "vuetify/locale";
dayjs.extend(isBetween);

const props = defineProps({
  menus: Array,
  roles: Array,
  menusRoles: Array,
  rolMenus: Array,
});
onMounted(() => {
  console.log("menus ", props.menus);
  console.log("roles ", props.roles);
  console.log("menusRoles ", props.menusRoles);
  console.log("rolMenus ", props.rolMenus);
});

const headers = [
  { title: 'Menu', key: 'id', fixed: true },
  { title: 'Menu Padre', key: 'menu_padre_id', sortable: false },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Ruta', key: 'url_ref', sortable: false },
  { title: 'Icono', key: 'icon', sortable: false },
  { title: 'Acciones', key: 'acciones', sortable: false },
];
const onClickDelete = async (item) => {
  console.log('item:', item);
  const { isConfirmed } = await Swal.fire({
    title: 'Eliminar Menu',
    text: `Estas seguro de eliminar el menu ${item.nombre}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });
  if (isConfirmed) {
    try {
      const response = await axios.delete(route('menu.destroy', item.id));
      const index = props.menus.findIndex((x) => x.id === item.id);
      if (response?.data?.message) {
        const { message } = response.data;
        Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
        props.menus.splice(index, 1);
      }
    } catch (err) {
      console.log('err:', err);
      if (err?.response?.data?.server) {
        const { server: msg, message } = err.response.data;
        Swal.fire({ title: 'Error!', text: msg + '\n' + truncarTexto(message), icon: 'error' });
      }
    }
  }
};
</script>
<template>
  <MainLayout>
    <v-container>
      <v-card color="background" class="px-4 py-2">
        <v-card-title> Rol Menus </v-card-title>
        <div>
          <v-row>
            <v-col>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="text-left">
                      Menus/Roles
                    </th>
                    <th v-for="rol in roles"
                        :key="rol.nombre" class="text-left">
                      {{rol.nombre}}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="menu in menus">
                    <template v-if="menu.menu_padre_id == null">
                      <role-menu-item :rootMenu="menu" subMenu="not" :roles="roles" :menusRoles="menusRoles"></role-menu-item>
                    </template>
                  </template>
                  <!--<tr v-for="menu in menus" :key="menu.nombre">
                    <template v-if="menu.menu_padre_id == null">
                      <role-menu-item :rootMenu="menu" subMenu="not" :roles="roles"></role-menu-item>
                    </template>
                  </tr>-->
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </MainLayout>
</template>
