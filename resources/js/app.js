/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Vuetify from '../plugins/vuetify';
// import Vuetify from 'vuetify';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login', require('./views/login.vue').default);
Vue.component('register', require('./views/register.vue').default);
// &nbsp; &ensp; &emsp;
const app = new Vue({
  el: '#app',
  vuetify: Vuetify,
});
