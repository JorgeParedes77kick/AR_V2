<template>
  <v-container fluid class="h-100 d-flex align-center">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10" md="10" sm="11" class="px-10">
        <v-card class="elevation-12 rounded-4">
          <v-toolbar color="dark2">
            <v-toolbar-title class="text-center text-white font-weight-bold"
              >Registro: Ingresa tus datos
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
              <v-row>
                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.name"
                    label="Nombres"
                    required
                    autofocus
                    :rules="errors.name"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.lastname"
                    label="Apellidos"
                    required
                    :rules="errors.lastname"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.dni"
                    label="DNI, Cédula ó Rut"
                    required
                    :rules="errors.dni"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-select
                    v-model="form.gender"
                    :items="genders"
                    label="Género"
                    required
                    :rules="errors.gender"
                    item-text="name"
                    item-value="value"
                  ></v-select>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-select
                    v-model="form.civil_status"
                    :items="civil_status"
                    label="Estado civil"
                    required
                    :rules="errors.civil_status"
                    item-text="name"
                    item-value="value"
                  ></v-select>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.birthdate"
                    label="Fecha de nacimiento"
                    required
                    :rules="errors.birthdate"
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.phone"
                    label="Teléfono"
                    required
                    :rules="errors.phone"
                    type="tel"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.email"
                    type="email"
                    label="Correo"
                    required
                    :rules="errors.email"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-select
                    v-model="form.nationality_id"
                    :items="nationalities"
                    label="Nacionalidad"
                    required
                    :rules="errors.nationality_id"
                    item-text="gentilic"
                    item-value="id"
                  >
                  </v-select>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-select
                    v-model="country"
                    :items="countries"
                    label="País donde te encuentras"
                    required
                    :rules="errors.country"
                    @change="onChangeCountry"
                    item-text="name"
                    :item-value="(item) => item"
                  ></v-select>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-select
                    v-model="form.region_id"
                    :items="regions"
                    label="Región donde te encuentras"
                    required
                    :rules="errors.region_id"
                    item-text="name"
                    item-value="value"
                  ></v-select>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.city"
                    label="Ciudad/Comuna"
                    required
                    :rules="errors.city"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.address"
                    label="Dirección"
                    required
                    :rules="errors.address"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.occupation"
                    label="Profesión/Ocupación"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="form.password"
                    label="Contraseña"
                    required
                    type="password"
                    :rules="errors.password"
                    :messages="messagesPassword"
                  ></v-text-field>
                </v-col>

                <v-col md="4" sm="6" cols="12">
                  <v-text-field
                    v-model="passwordRepeat"
                    label="Repita Contraseña"
                    required
                    type="password"
                    :rules="errors.passwordRepeat"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-end">
                  <v-btn color="primary" type="submit">Enviar</v-btn>
                </v-col>
              </v-row>
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
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ['nationalities', 'countries'],

  data() {
    return {
      valid: true,
      civil_status: [
        { name: 'Soltero(a)', value: 'Soltero' },
        { name: 'Casado(a)', value: 'Casado' },
        { name: 'Divorciado(a)', value: 'Divorciado' },
        { name: 'Viudo(a)', value: 'Viudo' },
      ],
      genders: [
        { name: 'Masculino', value: 'M' },
        { name: 'Femenino', value: 'F' },
      ],
      country: undefined,
      regions: [],
      passwordRepeat: '',
      form: {
        name: '',
        lastname: '',
        dni: '',
        gender: '',
        email: '',
        civil_status: '',
        birthdate: '',
        nationality_id: '',
        region_id: '',
        city: '',
        address: '',
        phone: '',
        password: '',
        photo: '',
        occupation: '',
        password_confirmation: '',
      },
      messagesPassword: '',
      // 'El largo de la contraseña debe ser igual o mayor a 8 caracteres.\n' +
      // 'La contraseña debe contener al menos una letra mayúscula.\n' +
      // 'La contraseña debe contener al menos un número.\n' +
      // 'La contraseña debe contener al menos un carácter especial.',
      errors: {
        name: [(v) => !!v || 'Nombre es requerido.'],
        lastname: [(v) => !!v || 'Apellido es requerido.'],
        dni: [(v) => !!v || 'DNI es requerido.'],
        gender: [(v) => !!v || 'Género es requerido.'],
        civil_status: [(v) => !!v || 'Estado civil es requerido.'],
        birthdate: [(v) => !!v || 'Fecha de nacimiento es requerido.'],
        email: [
          (v) => !!v || 'Email es requerido.',
          (v) => /.+@.+\..+/.test(v) || 'E-mail debe ser en formato valido',
        ],
        nationality_id: [(v) => !!v || 'Nacionalidad es requerido.'],
        region_id: [(v) => !!v || 'Región es requerido.'],
        country: [(v) => !!v || 'Pais es requerido.'],
        city: [(v) => !!v || 'Ciudad es requerido.'],
        address: [(v) => !!v || 'Dirección es requerido.'],
        phone: [(v) => !!v || 'Telefono es requerido.'],
        password: [
          (v) => !!v || 'La contraseña es requerida.',
          (v) => v.length >= 8 || 'El largo de la contraseña debe ser igual o mayor a 8 caracteres',
          (v) => /[A-Z]/.test(v) || 'La contraseña debe contener al menos una letra mayúscula',
          (v) => /\d/.test(v) || 'La contraseña debe contener al menos un número',
          (v) =>
            /[!@#$%^&*\,\.\-\_]/.test(v) ||
            'La contraseña debe contener al menos un carácter especial (!@#$%^&*,.-_)',
        ],
        passwordRepeat: [
          (v) => !!v || 'Repetir contraseña es requerido.',
          (v) => v === this.form.password || 'Las contraseñas no coinciden.',
        ],
      },
    };
  },
  methods: {
    submit() {
      //   const state = this.$refs.form.validate();
      //   if (!state) return;
      //   else
      this.register();
    },
    async register() {
      const { form } = this;
      const response = await axios.post(`${window.location.origin}/register`, { ...form });
      console.log('file: register.vue:296 ~ response:', response);
    },
    onChangeCountry(country) {
      this.regions = country.regions;
      this.form.region_id = '';
    },
  },
  mounted() {
    // console.clear();
    console.log(this.$props);
  },
};
</script>

