
<template>
  <v-container fluid class="h-100 d-flex align-center">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="3" md="4" sm="8" class="px-10">
        <v-card class="elevation-12 rounded-4">
          <v-toolbar color="dark2">
            <v-toolbar-title class="text-center text-white font-weight-bold"
              >Inicia sesión en tu cuenta
            </v-toolbar-title>
          </v-toolbar>
          <p class="text-center py-2 elevation-5 dark2">
            <a href="/login">
              <v-img src="https://arministriesgp.com/cdn/gplogo4.png" width="250" class="m-auto">
              </v-img>
            </a>
          </p>

          <v-card-text class="py-3 px-4">
            <v-form @submit.prevent="submit" v-model="valid" ref="form" lazy-validation>
              <v-select
                label="Seleccione El Tipo de Usuario"
                v-model="role"
                required
                :items="roles"
                item-text="name"
                item-value="id"
              ></v-select>
              <v-text-field
                label="Correo Electrónico"
                v-model="email"
                required
                type="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                v-model="password"
                required
                type="password"
                :rules="passwordRules"
              ></v-text-field>
              <!-- <v-checkbox 0v-model="remember" label="Recuérdame"></v-checkbox> -->
              <v-btn type="submit" color="primary" class="w-100 my-2">
                <v-icon>login</v-icon>&nbsp;Ingresar</v-btn
              >
              <v-btn color="secondary" class="w-100 my-2" @click="goToRegister"
                ><v-icon>how_to_reg</v-icon>&nbsp;Registrarme</v-btn
              >

              <a type="button" class="w-100 my-2 v-btn v-btn--text theme--light">
                <span> ¿Olvidaste tu contraseña? </span>
              </a>
            </v-form>
          </v-card-text>
          <v-footer color="dark2">
            <div class="text-center w-100 py-2">
              <a href="/login"
                ><img
                  style="width: 140px"
                  src="https://arministriesgp.com/cdn/logox211x75-light.png"
              /></a>
            </div>
          </v-footer>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" lg="7">
        <v-row class="d-none d-sm-none d-md-block">
          <v-col
            ><v-img
              alt="info"
              src="/img/ar_school.png"
              class="elevation-12"
              contain
              height="100%"
            ></v-img></v-col
        ></v-row>
        <v-row class="d-sm-block d-md-none">
          <v-col class="d-flex justify-content-center"
            ><v-card class="elevation-12 pa-3">
              <v-img
                alt="info"
                src="/img/icons/arSchool.webp"
                max-width="20rem"
                min-width="15rem"
                width="100%"
                contain
              ></v-img> </v-card></v-col
        ></v-row>

        <v-row class="mt-3">
          <v-col class="d-flex justify-content-center">
            <v-btn
              href="https://www.playandgroup.com"
              color="infoSchool"
              target="_blank"
              class="white--text m-2 font-weight-bold"
            >
              Más información aquí
            </v-btn></v-col
          >
          <v-col class="d-flex justify-content-center">
            <v-btn
              href="https://www.arschoolglobal.com"
              color="arSchool"
              target="_blank"
              class="white--text m-2 font-weight-bold"
            >
              Ven a visitar AR School
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  props: ['roles'],
  data() {
    return {
      role: 5,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail es requerido',
        (v) => /.+@.+\..+/.test(v) || 'E-mail debe ser en formato valido',
      ],
      password: '',
      passwordRules: [(v) => !!v || 'password es requerido'],
      remember: false,
      valid: true,
    };
  },
  methods: {
    submit() {
      // Aquí puedes enviar la información de inicio de sesión al servidor
      console.log(`Correo electrónico: ${this.email}, Contraseña: ${this.password}`);
      const state = this.$refs.form.validate();
      if (!state) return;
      else this.login();
    },
    async login() {
      const { role, email, password } = this;
      const response = await axios.post(`${window.location.origin}/login`, {
        role,
        email,
        password,
      });
      console.log('file: register.vue:296 ~ response:', response);
    },
    goToRegister() {
      window.location.href = `${window.location.origin}/register`;
    },
  },
  mounted() {
    // console.clear();
    console.log('🚀 ~ file: login.vue:156 ~ mounted ~ this.roles:', this.roles);
  },
};
</script>

