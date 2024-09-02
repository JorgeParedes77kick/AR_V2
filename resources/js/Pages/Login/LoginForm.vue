<script setup>
import { reactive, ref } from "vue";
import {validateForm} from "../../constants/form";
import logGP from '../../../../public/images/logo_gp.png';

import axios from "axios";

const loadingPage = ref(false);

const validLoginForm = ref(true);

const message = ref("");

const setOverlay = v => (loadingPage.value = v);

const setMessage = v => (message.value = v);

const form = reactive({
    email: "",
    password: "",
});

function handleSubmit(e) {
    // make api request
    setMessage("");
    setOverlay(true);
    if (validateForm(e)){
        axios.post('login', form).then(result => {
            setMessage("");
            window.location.href = "home";
        }).catch(error => {
            setOverlay(false);
            console.log(JSON.stringify(error));
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("1 " +JSON.stringify(error.response.data));
              console.log("2 " +JSON.stringify(error.response.status));
              if (error.response.status >= 500) {
                setMessage("Error de Sistema, Favor contactar al administrador");
              } else {
                if(error.response.status === 422) {
                  setMessage(JSON.stringify(error.response.data.errors));
                }else{
                  setMessage("Error al Ingresar, Favor contactar al administrador");
                }
              }
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log("4 " +JSON.stringify(error.request));
              setMessage("Error al Ingresar, Favor contactar al administrador");
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('5 Error', error.message);
              setMessage("Error al Ingresar, Favor contactar al administrador");
            }
        });
    } else {
        setOverlay(false);
    }

};

</script>

<template>
  <v-container fluid class="py-0 px-0 fill-height" color="#222222" style="height: 100vh; width: 100%;"  >
    <v-card elevation="12" class="d-flex align-center justify-center" color="#222222" style="height: 100vh; width: 100%;">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-img :src="logGP" inline cover height="auto" width="25%"></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-form @submit.prevent="handleSubmit" ref="formLogin" v-model="validLoginForm" class="w-33">
            <v-row>
              <v-col cols="12" >
                <v-text-field v-model="form.email"
                              label="Correo Electr&oacute;nico"
                              variant="outlined"
                              placeholder="johndoe@gmail.com"
                              name="mail"
                              style="color: #f4ede8"
                              class="rounded-l"
                              :rules="[rules.required, rules.email]"
                              clearable
                              tabindex="1"
                />
              </v-col>
              <v-col cols="12" >
                <v-text-field v-model="form.password"
                              label="Contrase&nacute;a"
                              variant="outlined"
                              placeholder="******"
                              name="password"
                              type="password"
                              style="color: #f4ede8"
                              class="rounded-l"
                              :rules="[rules.required, rules.counter]"
                              clearable
                              tabindex="2"
                              hint=""
                />
              </v-col>
              <v-col cols="12" >
                <v-btn type="submit" block @click="validate" style="background-color: #99c5c0;
                            font-weight: bolder; font-size: 14pt; border-color: beige;
                            border-width: 2pt; ">INICIAR SESI&Oacute;N</v-btn>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <p style="color: beige;">A&uacute;n no tienes usuario? <a href="register" style="text-decoration: none; color: #99c5c0; font-weight: bold; font-size: 10pt;" >Registrate aqu&iacute;</a></p>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <p><a href="forgot-password" style="text-decoration: none; color: #99c5c0; font-weight: normal; font-size: 12pt;" >&iquest;Olvidaste tu contrase&ntilde;a&quest;</a></p>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>

</style>

<script>
import {ref} from "vue";

export default {
    data: () => ({
        email: '',
        rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length >= 5 || 'Min 5 characters',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
        },
    }),
    methods:{
        validate () {
            this.$refs.formLogin.validate();
        },
    },
}
</script>
