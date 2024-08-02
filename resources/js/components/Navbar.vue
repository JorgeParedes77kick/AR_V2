<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

let currentTheme = ref('light');

onMounted(() => {
  currentTheme.value = localStorage.getItem('theme') || 'light';
});

onUnmounted(() => {});

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  console.log('currentTheme.value:', currentTheme.value);
  window.toggleTheme();
  // window.location.reload();
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          v-if="currentTheme == 'light'"
          src="/img/logos/ar ministries.png"
          alt="LOGO"
          width="100"
        />
        <img v-else src="/img/logos/ar ministries_white.png" alt="LOGO" width="100" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Home</a></li>
              <li><a class="dropdown-item">Globales</a></li>
              <li><a class="dropdown-item">Temporadas</a></li>
              <li><a class="dropdown-item">Registrar Horario</a></li>
              <li><a class="dropdown-item">Usuarios</a></li>
              <li><a class="dropdown-item">Asistencias</a></li>
              <li><a class="dropdown-item">Recursos</a></li>
              <li><a class="dropdown-item">Cumpleaños</a></li>
              <li><a class="dropdown-item">Adicionales </a></li>
              <li><a class="dropdown-item">Exportar Data</a></li>
              <li><a class="dropdown-item">Inscribir Alumno</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Coordinador
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Asistencia</a></li>
              <li><a class="dropdown-item">Registrar Horario</a></li>
              <li><a class="dropdown-item">Usuarios AR</a></li>
              <li><a class="dropdown-item">Recursos</a></li>
              <li><a class="dropdown-item">Cumpleaños</a></li>
              <li><a class="dropdown-item">Exportar Data</a></li>
              <li><a class="dropdown-item">Reasignar alumnos</a></li>
              <li><a class="dropdown-item">Inscribir Alumno</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Monitor
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Asistencia</a></li>
              <li><a class="dropdown-item">Usuarios AR</a></li>
              <li><a class="dropdown-item">Cumpleaños</a></li>
              <li><a class="dropdown-item">Exportar Data</a></li>
              <li><a class="dropdown-item">Reasignar alumnos</a></li>
              <li><a class="dropdown-item">Inscribir Alumno</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lider
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Mis Salones</a></li>
              <li><a class="dropdown-item">Calificar alumnos</a></li>
              <li><a class="dropdown-item">Cumpleaños</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Alumno
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Home</a></li>
              <li><a class="dropdown-item">Mis Recursos</a></li>
              <li><a class="dropdown-item">Mis Grupos Pequeños</a></li>
            </ul>
          </li>
        </ul>
        <div>
          <button class="btn btn-secondary rounded-pill mx-2" @click="toggleTheme">
            {{ currentTheme == 'light' ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style></style>

