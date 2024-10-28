<script setup>
import axios from 'axios';
import classnames from 'classnames';
import {defineProps, onMounted, reactive, ref} from 'vue';
import { useTheme } from 'vuetify';
import {getList} from "../constants/form";
import LeftMenuItem from "./LeftMenuItem.vue";

const theme = useTheme();
const isDarkTheme = ref(false);

const drawer = ref(false);

const csrf = ref(document.querySelector('meta[name="csrf-token"]').getAttribute('content'));

const formLogout = reactive({
  _token: csrf,
});

const dynamicMenu = ref([]);

const userRoles = ref([]);
/*
const listGroup = ref([
  {
    label: 'Admin',
    expanded: false,
    items: [
      { title: 'Home', link: '/' },
      { title: 'Globales', link: '/' },
      { title: 'Temporadas R', link: '/' },
      { title: 'Registrar Horario R', link: '/' },
      { title: 'Usuarios R', link: '/' },
      { title: 'Asistencias', link: '/' },
      { title: 'Recursos R', link: '/' },
      { title: 'Cumpleaños', link: '/' },
      { title: 'Adicionales ', link: '/' },
      { title: 'Exportar Data', link: '/' },
      { title: 'Inscribir Alumno', link: '/' },
    ],
  },
  {
    label: 'Coordinador',
    expanded: false,
    items: [
      { title: 'Asistencia', link: '/' },
      { title: 'Registrar Horario R', link: '/' },
      { title: 'Usuarios AR -', link: '/' },
      { title: 'Recursos R', link: '/' },
      { title: 'Cumpleaños', link: '/' },
      { title: 'Exportar Data', link: '/' },
      { title: 'Reasignar alumnos', link: '/' },
      { title: 'Inscribir Alumno', link: '/' },
    ],
  },
  {
    label: 'Monitor',
    expanded: false,
    items: [
      { title: 'Asistencia', link: '' },
      { title: 'Usuarios AR -', link: '' },
      { title: 'Cumpleaños', link: '' },
      { title: 'Exportar Data', link: '' },
      { title: 'Reasignar alumnos', link: '' },
      { title: 'Inscribir Alumno', link: '' },
    ],
  },
  {
    label: 'Lider',
    expanded: false,
    items: [
      { title: 'Mis Salones', link: '' },
      { title: 'Calificar alumnos', link: '' },
      { title: 'Cumpleaños', link: '' },
    ],
  },
  {
    label: 'Alumno',
    expanded: false,
    items: [
      { title: 'Home', link: '' },
      { title: 'Mis Recursos', link: '' },
      { title: 'Mis Grupos Pequeños', link: '' },
    ],
  },
]);

 */
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

onMounted(() => {
  isDarkTheme.value = localStorage.getItem('theme') === 'dark';
  theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';

  getList('/menu/list/byRol').then((data)=>{
    console.log("Menus byRol: " + JSON.stringify(data));
    dynamicMenu.value = data;
    console.log("dynamicMenu: " + JSON.stringify(dynamicMenu));
  });

  getList('/roles/list/byUser').then((data)=>{
    console.log("Roles byUser: " + JSON.stringify(data));
    userRoles.value = data;
    console.log("userRoles: " + JSON.stringify(userRoles));
  });

});

const activeGroup = ref(null);

function toggleGroup(index) {
  activeGroup.value = activeGroup.value === index ? null : index;
}

function handleSubmit(event, link) {
  if(link !== '#'){
    if(link === 'logout'){
      axios
        .post(link, formLogout)
        .then((result) => {
          window.location.href = 'login';
        })
        .catch((error) => {
          console.log(JSON.stringify(error.response.data.message));
        });
    }else{
      window.location.href = link;
    }
  }
  event.preventDefault();
}

const myApp = ref([
  { title: 'Home', icon: 'mdi-home', link: 'home' },
  { title: 'Logout', icon: 'mdi-power', link: 'logout' },
  { title: 'Roles', icon: 'mdi-power', link: '#' },
]);

</script>
<template>
  <v-app>
    <v-app-bar app color="navbar-color" class="text-navbar-text">
      <div class="mr-auto ml-2">
        <img
          src="/img/logos/ar ministries_white.png"
          width="100"
          class="px-2"
          style="filter: drop-shadow(3px 3px 3px rgba(153, 197, 192, 1))"
        />
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <div class="d-flex align-center ml-auto mr-2">
        <v-btn v-if="isDarkTheme" icon="mdi-weather-night" @click="toggleTheme" />
        <v-btn v-else icon="mdi-weather-sunny" @click="toggleTheme" />
        <v-btn color="#99c5c0">
          Mi Aplicaci&oacute;n
          <v-menu activator="parent" location="bottom" open-on-hover>
            <v-list>
              <v-list-item v-for="(item, i) in myApp" :key="i" link >
                <v-list-item-title>
                  <v-form @submit.prevent="handleSubmit($event, item.link)">
                    <v-btn size="small" variant="plain" type="submit">
                      {{ item.title }}
                    </v-btn>
                  </v-form>
                </v-list-item-title>
                <template v-slot:prepend>
                  <template v-if="item.title !== 'Roles' ">
                    <v-icon :icon="item.icon" size="small"></v-icon>
                  </template>
                  <template v-else>
                    <v-icon icon="mdi-menu-left" size="small"></v-icon>
                  </template>
                </template>
                <template v-if="item.title === 'Roles' ">
                  <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu location="start">
                    <v-list>
                      <v-list-item v-for="(userRol, r) in userRoles" :key="r" link href="#">
                        <v-list-item-title>{{ userRol.nombre }}</v-list-item-title>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-check-decagram" size="small"></v-icon>
                        </template>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer color="navbar-color" v-model="drawer" app class="text-navbar-text">
      <!-- Sidebar content -->
      <!-- <template v-for="(item, index) in items" :key="index">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-list-item
              :title="item.title"
              :to="item.link"
              v-bind="props"
              :class="
                classnames({
                  'bg-navbar-hover': isHovering,
                  'text-navbar-hover-text': isHovering,
                })
              "
            >
            </v-list-item>
          </template>
</v-hover>
</template> -->
      <!-- Dynamic Menu Init-->
      <v-list>
        <template v-for="(menu, index) in dynamicMenu" :key="menu.id">
          <template v-if="menu.menu_padre_id === null" >
            <LeftMenuItem :menu="menu" :activeGroup="activeGroup"></LeftMenuItem>
          </template>
        </template>
      </v-list>
      <!-- Dynamic Menu Finish-->
    </v-navigation-drawer>

    <v-main id="body-app">
      <slot></slot>
    </v-main>
  </v-app>
</template>
