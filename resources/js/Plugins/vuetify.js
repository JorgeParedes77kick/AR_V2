import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import { aliases, mdi } from 'vuetify/iconsets/mdi';

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'; //Estilos de vuetify

const light = {
  dark: false,
  colors: {
    'navbar-color': '#222224',
    'navbar-text': '#99c5c0',
    'navbar-active': '#f4ede8',
    'navbar-active-text': '#f4ede8',
    'navbar-hover': '#99c5c0',
    'navbar-hover-text': '#f4ede8',

    // background: '#f4ede8',
    background: '#fffdf8',
    foreground: '#222222',
    primary: '#42a5f5',
    secondary: '#26a69a',
    success: '#66bb6a',
    warning: '#ffca28',
    error: '#e57373',
    info: '#26c6da',
    light: '#f2ede7',
    surface: '#f2ede7',
    dark: '#40251e',
    red: '#e57373',
    pink: '#f06292',
    purple: '#ba68c8',
    'deep-purple': '#9575cd',
    indigo: '#5c6bc0',
    blue: '#42a5f5',
    'light-blue': '#29b6f6',
    cyan: '#26c6da',
    teal: '#26a69a',
    green: '#66bb6a',
    'light-green': '#9ccc65',
    lime: '#d4e157',
    yellow: '#ffee58',
    amber: '#ffca28',
    orange: '#ffa726',
    'deep-orange': '#ff7043',
    brown: '#8d6e63',
    gray: '#bdbdbd',
    'blue-gray': '#78909c',
  },
};

const dark = {
  dark: true,
  colors: {
    'navbar-color': '#0e0e0e',
    'navbar-text': '#bad7d4',
    'navbar-active': '#f4ede8',
    'navbar-active-text': '#161617',
    'navbar-hover': '#bad7d4',
    'navbar-hover-text': '#161617',

    background: '#161617',
    foreground: '#fffdf8',
    primary: '#1565c0',
    secondary: '#00695c',
    success: '#2e7d32',
    warning: '#ff8f00',
    error: '#b71c1c',
    info: '#00838f',
    light: '#d1ccc7',
    surface: '#212121',
    dark: '#4a3b33',
    red: '#b71c1c',
    pink: '#c2185b',
    purple: '#7b1fa2',
    'deep-purple': '#512da8',
    indigo: '#303f9f',
    blue: '#1565c0',
    'light-blue': '#0277bd',
    cyan: '#00838f',
    teal: '#00695c',
    green: '#2e7d32',
    'light-green': '#558b2f',
    lime: '#9e9d24',
    yellow: '#f9a825',
    amber: '#ff8f00',
    orange: '#ef6c00',
    'deep-orange': '#d84315',
    brown: '#5d4037',
    gray: '#424242',
    'blue-gray': '#37474f',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light,
      dark,
    },
  },
});

export default vuetify;
