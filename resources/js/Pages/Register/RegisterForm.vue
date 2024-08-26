<script setup>
import {reactive, ref, onMounted, onBeforeMount} from "vue";
import {validateForm, getList} from "../../constants/form";
import axios from "axios";
import logGP from '../../../../public/images/logo_gp.png';
import logoGlobal from "../../../../public/images/logo_global.png";
import women from "../../../../public/images/mujer.png";
import book from "../../../../public/images/libro.png";
import corona from "../../../../public/images/corona.png";
import tween from "../../../../public/images/tweens.png";

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
  nacionalidad_id: "",
  pais_recidencia: "",
  region_id: "",
  ciudad: "",
  direccion: "",
  telefono: "",
  ocupacion: "",
});

const formUser = reactive({
  email: "",
  email_confirm: "",
  password: "",
  password_confirm: "",
  persona_id: "",
  nick_name: "",
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
    axios.post('/persona/store', form).then(result => {
      console.log("1 "+JSON.stringify(result));
      console.log("2 "+JSON.stringify(result.response));
      console.log("3 "+JSON.stringify(result.data));
      console.log("4 "+JSON.stringify(result.data.person));
      console.log("5 "+JSON.stringify(result.data.person.id));
      console.log("6 "+JSON.stringify(result.status));
      setMessage("");
      if(result.status === 200){
        formUser.persona_id = result.data.person.id;
        formUser.nick_name = createNickName();
        registerUser(result);
      }else{
        setMessage(JSON.stringify(result.data));
        setOverlay(false);
      }
    }).catch(error => {
      setOverlay(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("1 " +JSON.stringify(error.response.data));
        console.log("2 " +JSON.stringify(error.response.status));
        console.log("3 " +JSON.stringify(error.response.headers));
        if (error.response.status >= 500) {
          setMessage("Error de Sistema, Favor contactar al administrador");
        } else {
          if(error.response.status === 422) {
            setMessage(JSON.stringify(error.response.data.errors));
          }else{
            setMessage("Error al Registrar, Favor contactar al administrador");
          }
        }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("4 " +JSON.stringify(error.request));
        setMessage("Error al Registrar, Favor contactar al administrador");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('5 Error', error.message);
        setMessage("Error al Registrar, Favor contactar al administrador");
      }
    });
  } else {
    setOverlay(false);
  }

}

function registerUser() {
  // make api request
  axios.post('user/store', formUser).then(result => {
    if(result.status === 200){
      setMessage("");
      window.location.href = "login";
    }else{
      setOverlay(false);
      setMessage("Error al Registrar, "+JSON.stringify(result.data));
    }
  }).catch(error => {
    setOverlay(false);
    deletePerson();
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
          setMessage("Error al Crear Usuario, Favor contactar al administrador");
        }
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("4 " +JSON.stringify(error.request));
      setMessage("Error al Crear Usuario, Favor contactar al administrador");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('5 Error', error.message);
      setMessage("Error al Crear Usuario, Favor contactar al administrador");
    }
  });
}
function deletePerson() {
  // make api request
  axios.delete('persona/'+formUser.persona_id+'/delete', form).then(result => {
    setOverlay(false);
  }).catch(error => {
    setOverlay(false);
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
          setMessage("Error al Borrar Datos, Favor contactar al administrador");
        }
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("4 " +JSON.stringify(error.request));
      setMessage("Error al Borrar Datos, Favor contactar al administrador");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('5 Error', error.message);
      setMessage("Error al Borrar Datos, Favor contactar al administrador");
    }
  });
}
function createNickName(){
  var names = form.nombre.split(" ");
  var apell = form.apellido.split(" ");
  var nickName = names[0].trim()+"."+apell[0].trim();
  return nickName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function updateRegion(){
  getList('/region/list/'+form.pais_recidencia).then((data)=>{
    setRegion(data);
  });
}

const checkDigit = (event) => {
  const pattern = /^[\d\s()+-]+$/
  if (!pattern.test(event.key) && (event.which !== 46 && event.which !== 8) ) {
    event.preventDefault();
  }
};

onBeforeMount(() =>
  setOverlay(true)
);

onMounted(() =>
  setTimeout(function () {
    getList('/gender/list').then((data)=>{
      setGenders(data);
    });
    getList('/civilStatus/list').then((data)=>{
      setCivilStatus(data);
    });
    getList('/nationality/list').then((data)=>{
      setNationality(data);
    });
    getList('/country/list').then((data)=>{
      setCountry(data);;
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
      <v-container fuild class="float-md-top position-absolute" style="left: 38%; top:6%;">
        <v-img :src="corona" inline cover height="auto" width="4%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 4%; top:0;">
        <v-img :src="logoGlobal" inline cover height="auto" width="10%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 57%; top:6%;">
        <v-img :src="book" inline cover height="auto" width="5%" ></v-img>
      </v-container>
      <v-container fuild class="float-md-top position-absolute" style="left: 63%; top:0;">
        <v-img :src="tween" inline cover height="auto" width="2%" ></v-img>
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
                          :rules="[rules.required, rules.text_valid]"
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
                          :rules="[rules.required, rules.text_valid]"
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
                          elevation="15"
                          :max="(new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000 ) - (87600 * 60) * 60000)).toISOString().substring(0, 10)"
                          min="1950-01-01"
                          active-picker.sync="YEAR"
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
            <v-select v-model="form.nacionalidad_id"
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
                      @update:modelValue="updateRegion"
                      clearable
                      tabindex="8"
            ></v-select>
          </v-col>
          <v-col cols="3" >
            <v-select v-model="form.region_id"
                      name="region_id"
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
            <v-text-field v-model="form.ciudad"
                          label="Ciudad/Comuna"
                          variant="outlined"
                          placeholder="Mi comuna"
                          name="ciudad"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.counter_dir]"
                          clearable
                          tabindex="10"
            />
          </v-col>
        </v-row>
        <!-- row 4 -->
        <v-row>
          <v-col cols="6" >
            <v-text-field v-model="form.direccion"
                          label="Direcci&oacute;n"
                          variant="outlined"
                          placeholder="Romano"
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
            <v-text-field v-model="form.ocupacion"
                          label="Ocupaci&oacute;n"
                          variant="outlined"
                          placeholder="Jhon"
                          name="ocupacion"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.counter_dir]"
                          clearable
                          tabindex="12"
            />
          </v-col>
          <v-col cols="3" >
            <v-text-field v-model="form.telefono"
                          label="Tel&eacute;fono"
                          variant="outlined"
                          placeholder="+## ###########"
                          :maxlength="15"
                          name="telefono"
                          type="input"
                          style="color: #f4ede8"
                          class="rounded-l"
                          :rules="[rules.required, rules.phone]"
                          clearable
                          @keydown="checkDigit"
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
            <v-text-field v-model="formUser.email"
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
            <v-text-field v-model="formUser.email_confirm"
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
            <v-text-field v-model="formUser.password"
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
            <v-text-field v-model="formUser.password_confirm"
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
  </v-container>
  <v-overlay :model-value="loadingPage" opacity="0.80" :absolute="true" contained persistent
             class="align-center justify-center">
    <v-progress-circular style="color: #99c5c0 " size="37" indeterminate></v-progress-circular>
  </v-overlay>
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
      text_valid: value =>{
        const pattern = /^[a-zA-Z\s]{3,50}$/
        return pattern.test(value) || 'Letras mayusculas o minúsculas'
      },
      phone: value =>{
        const pattern = /\+[0-9\s-]+/
        return pattern.test(value) || 'El número de teléfono debe ser válido +## ###########'
      }
    },
  }),
  methods: {
    validate() {
      this.$refs.formRegister.validate();
    },
  },
}
</script>
