<script setup>
import logoGlobal from '../../../public/images/logo_global.png';
import hello from '../../../public/images/hola.png';
</script>

<template>
    <v-container fuild class="py-0 px-0" style="margin-left:0px; max-width:none;">
        <v-fade-transition mode="out-in">
            <v-row no-gutters>
                <v-col cols="5" id="loginPanel">
                    <v-container fuild class="float-md-top position-absolute" style="left: 4%; top: 4%">
                        <v-img :src="logoGlobal" inline cover height="auto" width="10%" ></v-img>
                    </v-container>
                    <v-container fuild class="float-md-end position-absolute" style="left: 4%; bottom: 10%">
                        <v-img :src="hello" inline cover height="auto" width="20%" ></v-img>
                    </v-container>
                </v-col>
                <v-col cols="7" id="loginPanelForm">
                    <slot></slot>
                </v-col>
            </v-row>
        </v-fade-transition>
    </v-container>
</template>

<style scoped>

</style>
