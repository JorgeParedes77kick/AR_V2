<script setup>
import {reactive, ref, onMounted, onBeforeMount} from "vue";
import { useForm } from '@inertiajs/inertia-vue3';
import axios from "axios";
import logGP from '../../../../public/images/logo_gp.png';
import logoGlobal from "../../../../public/images/logo_global.png";
import women from "../../../../public/images/mujer.png";
import book from "../../../../public/images/libro.png";
import corona from "../../../../public/images/corona.png";
import tween from "../../../../public/images/tweens.png";

const loadingPage = ref(false);
const setOverlay = v => (loadingPage.value = v);

const message = ref("");
const setMessage = v => (message.value = v);
const mailConfirmEqualMail = () => fieldsForm.email_confirm === fieldsForm.email || "Correo Confirmación no coincide";

const fieldsForm = useForm({
  email: "",
  email_confirm: "",
});
const formForgotPass = ref(null);
const validateForm = async (e) => {
  e.preventDefault();
  fieldsForm.clearErrors();
  console.log("1 ");
  const { valid } = await formForgotPass.value.validate();
  console.log("2 ");
  if (valid) await submitForm();
};
const submitForm = async (form) => {
  setOverlay(true);
  console.log("3 ");
  try {
    console.log(fieldsForm);
    const result = await axios['post'](route('password.email'), fieldsForm);
    console.log("1 "+JSON.stringify(result));
    console.log("2 "+JSON.stringify(result.response));
    console.log("3 "+JSON.stringify(result.data));
    console.log("6 "+JSON.stringify(result.status));
    if (result?.data?.message) {
      const { message } = result.data;
      await Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
      window.location.href = route('login');
    }
  } catch (err) {
    console.log(err?.response);
    if (err?.response?.data?.server) {
      const { server: message } = err.response.data;
      Swal.fire({ title: 'Error!', text: message, icon: 'error' });
    }
    if (err?.response?.data?.errors) {
      const { errors } = err.response.data;
      fieldsForm.errors = errors;
    }
  } finally {
    console.log("finally ");
    setOverlay(false);
  }
};

</script>

<template>
  <v-container style="background-color: #222222; height: 100vh; width: 40%" class="d-flex justify-center align-center">
    <v-row align="stretch">
      <v-container fuild class="float-md position-absolute" style="left: 34%; ">
        <v-img :src="women" inline cover height="auto" width="2%" ></v-img>
      </v-container>
      <v-container fuild class="float-md position-absolute" style="left: 38%; ">
        <v-img :src="corona" inline cover height="auto" width="4%" ></v-img>
      </v-container>
      <v-container fuild class="float-md position-absolute" style="left: 57%; ">
        <v-img :src="book" inline cover height="auto" width="5%" ></v-img>
      </v-container>
      <v-container fuild class="float-md position-absolute" style="left: 63%; ">
        <v-img :src="tween" inline cover height="auto" width="2%" ></v-img>
      </v-container>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-img :src="logGP" inline cover height="auto" width="25%"></v-img>
      </v-col>
      <v-alert dismissible title="Error Message" :model-value="message.length !== 0" :text="message" type="error" mode="slide-y-reverse-transition" class="elevation-7"></v-alert>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-form @submit="validateForm" ref="formForgotPass" >
          <legend>&nbsp;</legend>
          <v-row no-gutters >
            <v-col cols="12" sm="12" class="d-flex justify-center align-center">
              <v-text-field v-model="fieldsForm.email"
                            label="Correo Electr&oacute;nico"
                            variant="outlined"
                            placeholder="johndoe@gmail.com"
                            name="mail"
                            style="color: #f4ede8;"
                            class="rounded-l"
                            :rules="[rules.required, rules.email]"
                            clearable
                            tabindex="1"
              />
            </v-col>
            <v-col cols="12" sm="12" class="d-flex justify-center align-center">
              <v-text-field v-model="fieldsForm.email_confirm"
                            label="Confirme Correo Electr&oacute;nico"
                            variant="outlined"
                            placeholder="johndoe@gmail.com"
                            name="mail"
                            style="color: #f4ede8"
                            class="rounded-l"
                            :rules="[rules.required, rules.email, mailConfirmEqualMail]"
                            clearable
                            tabindex="2"
              />
            </v-col>
            <v-col cols="12" sm="12" class="d-flex justify-center align-center">
              <v-btn type="submit" block style="background-color: #99c5c0;
                            font-weight: bolder; font-size: 14pt; border-color: beige;
                            border-width: 2pt; ">Recuperar Contrase&nacute;a</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-overlay :model-value="loadingPage" opacity="0.80" contained persistent class="align-center justify-center">
      <v-progress-circular style="color: #99c5c0 " size="37" indeterminate></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  data: () => ({
    email: '',
    rules: {
      required: value => !!value || 'Campo Requerido.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Correo no válido'
      },
    },
  }),
  methods: {
    validate() {
      this.$refs.formForgotPass.validate();
    },
  },
}
</script>
