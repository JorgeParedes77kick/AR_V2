<script setup>
import axios from 'axios';
import classnames from 'classnames';
import { onMounted, reactive, ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isDarkTheme = ref(false);

const drawer = ref(false);

const csrf = ref(document.querySelector('meta[name="csrf-token"]').getAttribute('content'));

const formLogout = reactive({
  _token: csrf,
});

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
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

onMounted(() => {
  isDarkTheme.value = localStorage.getItem('theme') === 'dark';
  theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
});

const activeGroup = ref(null);

function toggleGroup(index) {
  activeGroup.value = activeGroup.value === index ? null : index;
}

function handleSubmit(e) {
  axios
    .post('logout', formLogout)
    .then((result) => {
      window.location.href = 'login';
    })
    .catch((error) => {
      console.log(JSON.stringify(error.response.data.message));
    });
}

const myApp = ref([
  { title: 'Click Me 1', icon: 'mdi-power', link: 'logout' },
  { title: 'Click Me 2', icon: 'mdi-home', link: 'home' },
  { title: 'Click Me 3', icon: 'mdi-power', link: 'logout' },
  { title: 'Click Me 4', icon: 'mdi-home', link: 'home' },
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
        <v-menu activator="parent" transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn color="#99c5c0" v-bind="props">Mi Aplicaci&oacute;n </v-btn>
          </template>
          <v-list class="text-left">
            <v-list-item v-for="(item, index) in myApp" :key="index" :value="index">
              <v-list-item-title>
                <v-form @submit.prevent="handleSubmit">
                  <v-btn size="small" variant="plain" type="submit" :prepend-icon="item.icon">
                    <template v-slot:prepend>
                      <v-icon size="x-large" color="error"></v-icon>
                    </template>
                    {{ item.title }}
                  </v-btn>
                </v-form>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
      <v-list>
        <template v-for="(group, index) in listGroup" :key="index + 'group'">
          <v-list-group v-model="activeGroup" :value="index">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="group.label" />
            </template>
            <v-hover v-for="(item, i) in group.items" :key="i + 'subItem'">
              <template v-slot:default="{ isHovering, props }">
                <v-list-item
                  :title="item.title"
                  v-bind="props"
                  :class="
                    classnames({
                      'bg-navbar-hover': isHovering,
                      'text-navbar-hover-text': isHovering,
                    })
                  "
                ></v-list-item> </template
            ></v-hover>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main id="body-app">
      <slot></slot>
    </v-main>
  </v-app>
</template>
