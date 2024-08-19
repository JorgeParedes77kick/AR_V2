<script setup>
import {reactive, ref, onMounted, onBeforeMount} from "vue";
import {validateForm, getList} from "../../constants/form";
import axios from "axios";
import logGP from '../../../../public/images/logo_gp.png';
import logoGlobal from "../../../../public/images/logo_global.png";
import women from "../../../../public/images/mujer.png";
import book from "../../../../public/images/libro.png";
import line from "../../../../public/images/linea.png";
import tweens from "../../../../public/images/tweens.png";

const loadingPage = ref(false);

const expand = ref(false);

const setExpand = v => (expand.value = v);

const validRegisterForm = ref(true);

const message = ref("");

const setOverlay = v => (loadingPage.value = v);

const setMessage = v => (message.value = v);

const form = reactive({
  nombre: "",
  apellido: "",
  dni: "",
  fecha_nacimiento: "",
  genero_id: "",
  estado_civil_id: "",
  nacionalidad: "",
  pais_recidencia: "",
  region: "",
  ciudad: "",
  direccion: "",
  telefono: "",
  ocupacion: "",
  email: "",
  email_confirm: "",
  pass: "",
  pass_confirm: "",
});

const mailConfirmEqualMail = () => form.email_confirm === form.email || "Correo Confirmación no coincide";
const passConfirmEqualPass = () => form.pass_confirm === form.pass || "Contraseña Confirmación no coincide";

const genderList = ref([]);
const setGenders = v => (genderList.value = v);

const civilStatusList = ref([]);
const setCivilStatus = v => (civilStatusList.value = v);

const nationalityList = ref([]);
const setNationality = v => (nationalityList.value = v);

const countryList = ref([]);
const setCountry = v => (countryList.value = v);

const regionList = ref([]);
const setRegion = v => (regionList.value = v);

const cityList = ref([]);
const setCity = v => (cityList.value = v);

const occupationList = ref([]);
const setOccupation = v => (occupationList.value = v);

const initialize = () => {
  setExpand(true);

  setOverlay(false);
};
function handleSubmit(e) {
  // make api request
  setMessage("");
  setOverlay(true);
  if (validateForm(e)) {
    axios.post('register', form).then(result => {
      setMessage("");
      window.location.href = "login";
    }).catch(error => {
      console.log(JSON.stringify(error.response.data.message));
      if (error.response.status >= 500) {
        setMessage("Error de Sistema, Favor contactar al administrador");
      } else {
        setMessage(error.response.data.message);
      }
      setOverlay(false);
    });
  } else {
    setOverlay(false);
  }

}

onBeforeMount(() =>
  setOverlay(true)
);

onMounted(() =>
  setTimeout(function () {
    getList('/gender/list').then((data)=>{
      setGenders(data);
      console.log("On " + JSON.stringify(data));
    });
    getList('/civilStatus/list').then((data)=>{
      setCivilStatus(data);
      console.log("On " + JSON.stringify(data));
    });
    getList('/nationality/list').then((data)=>{
      setNationality(data);
      console.log("On " + JSON.stringify(data));
    });
    getList('/country/list').then((data)=>{
      setCountry(data);
      console.log("On " + JSON.stringify(data));
    });
    getList('/region/list').then((data)=>{
      setRegion(data);
      console.log("On " + JSON.stringify(data));
    });

    initialize();
  }, 1700)
);

</script>

<template>
  <v-container id="registerContainer" fill-height fuild style="background-color: #222222; max-width: none; width: 60%; max-height: none;" >
    <v-row>
      <v-fab color="light" icon="mdi-reply-circle" variant="flat" href="login" location="top end" absolute style="left: 20px;"></v-fab>
      <v-col cols="12" class="text-center">
        <v-img :src="logGP" inline cover height="auto" width="17%"></v-img>
      </v-col>
      <v-container fuild class="float-md-top position-absolute" style="left: 34%; top:0;">
        <v-img :src="women" inline cover height="auto" width="2%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 40%; top:6%;">
        <v-img :src="tweens" inline cover height="auto" width="2%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 4%; top:0;">
        <v-img :src="logoGlobal" inline cover height="auto" width="10%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 56%; top:6%;">
        <v-img :src="book" inline cover height="auto" width="5%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 63%; top:0;">
        <v-img :src="line" inline cover height="auto" width="5%" ></v-img>
      </v-container>
    </v-row>
    <v-alert dismissible title="Error Message" :model-value="message.length !== 0" :text="message" type="error"
             mode="slide-y-reverse-transition" class="elevation-7"></v-alert>
    <v-expand-x-transition>
      <v-form @submit.prevent="handleSubmit" ref="formRegister" v-model="validRegisterForm" v-show="expand" lazy-validation>
        <v-row no-gutters>
          <v-col cols="3">
            <v-icon icon="mdi-notebook-edit-outline" style="color: #99c5c0; font-size: 20px;"></v-icon>&nbsp;<v-label
            style="color: #99c5c0; font-size: 17px;">Datos Personales
          </v-label>
            <v-divider style="color:#f4ede8; padding-top: 2pt; margin-inline-start: 8%;"></v-divider>
          </v-col>
        </v-row>
        <legend>&nbsp;</legend>
        <!-- row 1 -->
        <v-row>
          <v-col cols="4" >
            <v-text-field v-model="form.nombre"
                          label="Nombres"
                          variant="outlined"
                          placeholder="Jhon"
                          name="mail"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required]"
                          clearable
                          tabindex="1"
            />
          </v-col>
          <v-col cols="4" >
            <v-text-field v-model="form.apellido"
                          label="Apellidos"
                          variant="outlined"
                          placeholder="Doe"
                          name="apellidos"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required]"
                          clearable
                          tabindex="2"
            />
          </v-col>
          <v-col cols="4" >
            <v-text-field v-model="form.dni"
                          label="DNI, C&eacute;dula,o RUT"
                          variant="outlined"
                          placeholder="1234567890"
                          name="dni"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required]"
                          clearable
                          tabindex="3"
            />
          </v-col>
        </v-row>
        <!-- row 2 -->
        <v-row>
          <v-col cols="4" >
            <v-text-field v-model="form.fecha_nacimiento"
                          label="Fecha Nacimiento"
                          variant="outlined"
                          placeholder="20/03/1999"
                          name="fecha_nacimiento"
                          type="date"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required]"
                          clearable
                          tabindex="4"
            />
          </v-col>
          <v-col cols="4" >
            <v-select v-model="form.genero_id"
                      name="genero_id"
                      label="G&eacute;nero"
                      :items="genderList"
                      item-title="nombre"
                      item-value="id"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="5"
            ></v-select>
          </v-col>
          <v-col cols="4" >
            <v-select v-model="form.estado_civil_id"
                      name="estado_civil_id"
                      label="Estado Civil"
                      :items="civilStatusList"
                      item-title="estado"
                      item-value="id"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="6"
            ></v-select>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <v-icon icon="mdi-map-marker-radius" style="color: #99c5c0; font-size: 20px;"></v-icon>&nbsp;<v-label
            style="color: #99c5c0; font-size: 17px;">Ubicaci&oacute;n
          </v-label>
            <v-divider style="color:#f4ede8; padding-top: 2pt; margin-inline-start: 8%;"></v-divider>
          </v-col>
        </v-row>
        <legend>&nbsp;</legend>
        <!-- row 3 -->
        <v-row>
          <v-col cols="3" >
            <v-select v-model="form.nacionalidad"
                      name="nacionalidad"
                      label="Nacionalidad"
                      :items="nationalityList"
                      item-title="nombre"
                      item-value="id"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="7"
            ></v-select>
          </v-col>
          <v-col cols="3" >
            <v-select v-model="form.pais_recidencia"
                      name="pais"
                      label="Pa&iacute;s"
                      :items="countryList"
                      item-title="nombre"
                      item-value="id"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="8"
            ></v-select>
          </v-col>
          <v-col cols="3" >
            <v-select v-model="form.region"
                      name="region"
                      label="Region"
                      :items="regionList"
                      item-title="nombre"
                      item-value="id"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="9"
            ></v-select>
          </v-col>
          <v-col cols="3" >
            <v-select v-model="form.ciudad"
                      name="ciudad"
                      label="Ciudad/Comuna"
                      :items="['Falta', 'No Existe']"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="10"
            ></v-select>
          </v-col>
        </v-row>
        <!-- row 4 -->
        <v-row>
          <v-col cols="6" >
            <v-text-field v-model="form.direccion"
                          label="Direcci&oacute;n"
                          variant="outlined"
                          placeholder="Jhon"
                          name="direccion"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.counter_dir]"
                          clearable
                          tabindex="11"
            />
          </v-col>
          <v-col cols="3" >
            <v-select v-model="form.ocupacion"
                      name="ocupacion"
                      label="Ocupaci&oacute;n"
                      :items="['Sin ocupacion', 'No existe']"
                      variant="outlined"
                      style="color: #f4ede8"
                      class="rounded-l"
                      :rules="[rules.required]"
                      clearable
                      tabindex="12"
            ></v-select>
          </v-col>
          <v-col cols="3" >
            <v-text-field v-model="form.telefono"
                          label="Tel&eacute;fono"
                          variant="outlined"
                          placeholder="+## #######"
                          name="telefono"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required]"
                          clearable
                          tabindex="13"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <v-icon icon="mdi-card-account-details-star-outline" style="color: #99c5c0; font-size: 20px;"></v-icon>&nbsp;<v-label
            style="color: #99c5c0; font-size: 17px;">Datos de Usuario
          </v-label>
            <v-divider style="color:#f4ede8; padding-top: 2pt; margin-inline-start: 8%;"></v-divider>
          </v-col>
        </v-row>
        <legend>&nbsp;</legend>
        <!-- row 5 -->
        <v-row>
          <v-col cols="3" >
            <v-text-field v-model="form.email"
                          label="Correo Electr&oacute;nico"
                          variant="outlined"
                          placeholder="johndoe@gmail.com"
                          name="mail"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.email]"
                          clearable
                          tabindex="14"
            />
          </v-col>
          <v-col cols="3" >
            <v-text-field v-model="form.email_confirm"
                          label="Confirme Correo Electr&oacute;nico"
                          variant="outlined"
                          placeholder="johndoe@gmail.com"
                          name="mail"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.email, mailConfirmEqualMail]"
                          clearable
                          tabindex="15"
            />
          </v-col>
          <v-col cols="3" >
            <v-text-field v-model="form.pass"
                          label="Contrase&nacute;a"
                          variant="outlined"
                          placeholder="******"
                          name="password"
                          type="password"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.counter, rules.counter_pass]"
                          clearable
                          tabindex="16"
            />
          </v-col>
          <v-col cols="3" >
            <v-text-field v-model="form.pass_confirm"
                          label="Confirme Contrase&nacute;a"
                          variant="outlined"
                          placeholder="******"
                          name="password"
                          type="password"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, passConfirmEqualPass, rules.counter_pass]"
                          clearable
                          tabindex="17"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn type="submit" large @click="validate" style="background-color: #99c5c0;
                              font-weight: bolder; font-size: 14pt; border-color: beige;
                              border-width: 2pt; ">REGISTRARME</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-expand-x-transition>
    <v-overlay :model-value="loadingPage" opacity="0.80" :absolute="true" contained persistent
               class="align-center justify-center">
      <v-progress-circular style="color: #99c5c0 " size="37" indeterminate></v-progress-circular>
    </v-overlay>

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
      counter_pass: value => value.length >= 5 || 'Min 5 characters',
      counter_dir: value => value.length < 250 || 'Max 250 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
  }),
  methods: {
    validate() {
      this.$refs.formRegister.validate();
    },
  },
}
</script>
