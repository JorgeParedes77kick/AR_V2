<script setup>
import classnames from 'classnames';
import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isDarkTheme = ref(false);

const drawer = ref(false);
const items = [
  { title: 'Inicio', link: '/', isActive: true },
  { title: 'Acerca de', link: '/about', isActive: false },
  { title: 'Contacto', link: '/contact', isActive: false },
];
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

onMounted(() => {
  isDarkTheme.value = localStorage.getItem('theme') == 'dark';
  theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
});
</script>
<template>
  <v-app>
    <v-app-bar app color="navbar-color" class="text-navbar-text">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn v-if="isDarkTheme" icon="mdi-weather-night" @click="toggleTheme" />
      <v-btn v-else icon="mdi-weather-sunny" @click="toggleTheme" />
      <v-toolbar-title>Mi Aplicación</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer color="navbar-color" v-model="drawer" app class="text-navbar-text">
      <!-- Sidebar content -->
      <template v-for="(item, index) in items" :key="index">
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
      </template>
    </v-navigation-drawer>

    <v-main id="body-app">
      <slot></slot>
    </v-main>
  </v-app>
</template>

