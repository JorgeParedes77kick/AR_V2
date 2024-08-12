<script setup>
import { reactive, ref } from "vue";
import {validateForm} from "../../constants/form";

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
        axios.post('register', form).then(result => {
            setMessage("");
            window.location.href = "login";
        }).catch(error => {
            console.log(JSON.stringify(error.response.data.message));
            if(error.response.status >= 500){
              setMessage("Error de Sistema, Favor contactar al administrador");
            }else{
              setMessage(error.response.data.message);
            }
            setOverlay(false);
        });
    } else {
        setOverlay(false);
    }

};
import logGP from '../../../../public/images/logo_gp.png';
</script>

<template>
    <v-container fuild style="background-color: #222222" class="h-100 " fill-height>
        <v-row no-gutters>
            <v-col cols="12" class="h-100 text-center">
                <v-img :src="logGP" inline cover height="auto" width="25%"></v-img>
            </v-col>
            <v-alert dismissible title="Error Message" :model-value="message.length !== 0" :text="message" type="error" mode="slide-y-reverse-transition" class="elevation-7"></v-alert>
            <v-col cols="12" class="h-100 text-center">
                <v-form @submit.prevent="handleSubmit" ref="formLogin" v-model="validLoginForm" class="h-100">
                    <legend>&nbsp;</legend>
                    <v-row no-gutters>
                        <v-col cols="12" class="h-100 text-center w-50">
                            <v-text-field v-model="form.email"
                                          label="Correo Electr&oacute;nico"
                                          variant="outlined"
                                          placeholder="johndoe@gmail.com"
                                          name="mail"
                                          style="color: #f4ede8"
                                          class="rounded-l"
                                          :rules="[rules.required, rules.email]"
                                          clearable
                            />
                        </v-col>
                        <v-col cols="12" class="h-100 text-center w-50">
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
                            />
                        </v-col>
                        <v-col cols="12" class="h-100 text-center w-50">
                            <v-btn type="submit" large @click="validate" style="background-color: #99c5c0;
                            font-weight: bolder; font-size: 14pt; border-color: beige;
                            border-width: 2pt; ">REGISTRARSE</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
        <v-overlay :model-value="loadingPage" opacity="0.80" :absolute="true" contained persistent class="align-center justify-center">
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
