import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'; // Estilos de Vuetify

const light = {
  dark: false,
  colors: {
    'navbar-color': 'rgba(34, 34, 36, 0.5)', // #222224
    'navbar-text': 'rgba(153, 197, 192, 0.5)', // #99c5c0
    'navbar-active': 'rgba(244, 237, 232, 0.5)', // #f4ede8
    'navbar-active-text': 'rgba(244, 237, 232, 0.5)', // #f4ede8
    'navbar-hover': 'rgba(153, 197, 192, 0.5)', // #99c5c0
    'navbar-hover-text': 'rgba(244, 237, 232, 0.5)', // #f4ede8

    background: 'rgba(254, 254, 254, 0.5)', // #fefefe
    foreground: 'rgba(34, 34, 34, 0.5)', // #222222
    primary: 'rgba(66, 165, 245, 0.5)', // #42a5f5
    secondary: 'rgba(38, 166, 154, 0.5)', // #26a69a
    success: 'rgba(102, 187, 106, 0.5)', // #66bb6a
    warning: 'rgba(255, 202, 40, 0.5)', // #ffca28
    error: 'rgba(229, 115, 115, 0.5)', // #e57373
    info: 'rgba(38, 198, 218, 0.5)', // #26c6da
    light: 'rgba(242, 237, 231, 0.5)', // #f2ede7
    surface: 'rgba(251, 251, 255, 0.5)', // #fbfbff
    dark: 'rgba(64, 37, 30, 0.5)', // #40251e
    red: 'rgba(229, 115, 115, 0.5)', // #e57373
    pink: 'rgba(240, 98, 146, 0.5)', // #f06292
    purple: 'rgba(186, 104, 200, 0.5)', // #ba68c8
    'deep-purple': 'rgba(149, 117, 205, 0.5)', // #9575cd
    indigo: 'rgba(92, 107, 192, 0.5)', // #5c6bc0
    blue: 'rgba(66, 165, 245, 0.5)', // #42a5f5
    'light-blue': 'rgba(41, 182, 246, 0.5)', // #29b6f6
    cyan: 'rgba(38, 198, 218, 0.5)', // #26c6da
    teal: 'rgba(38, 166, 154, 0.5)', // #26a69a
    green: 'rgba(102, 187, 106, 0.5)', // #66bb6a
    'light-green': 'rgba(156, 204, 101, 0.5)', // #9ccc65
    lime: 'rgba(212, 225, 87, 0.5)', // #d4e157
    yellow: 'rgba(255, 238, 88, 0.5)', // #ffee58
    amber: 'rgba(255, 202, 40, 0.5)', // #ffca28
    orange: 'rgba(255, 167, 38, 0.5)', // #ffa726
    'deep-orange': 'rgba(255, 112, 67, 0.5)', // #ff7043
    brown: 'rgba(141, 110, 99, 0.5)', // #8d6e63
    gray: 'rgba(189, 189, 189, 0.5)', // #bdbdbd
    'blue-gray': 'rgba(120, 144, 156, 0.5)', // #78909c
  },
};

const dark = {
  dark: true,
  colors: {
    'navbar-color': 'rgba(14, 14, 14, 0.5)', // #0e0e0e
    'navbar-text': 'rgba(186, 215, 212, 0.5)', // #bad7d4
    'navbar-active': 'rgba(244, 237, 232, 0.5)', // #f4ede8
    'navbar-active-text': 'rgba(22, 22, 23, 0.5)', // #161617
    'navbar-hover': 'rgba(186, 215, 212, 0.5)', // #bad7d4
    'navbar-hover-text': 'rgba(22, 22, 23, 0.5)', // #161617

    background: 'rgba(22, 22, 23, 0.5)', // #161617
    foreground: 'rgba(255, 253, 248, 0.5)', // #fffdf8
    primary: 'rgba(21, 101, 192, 0.5)', // #1565c0
    secondary: 'rgba(0, 105, 92, 0.5)', // #00695c
    success: 'rgba(46, 125, 50, 0.5)', // #2e7d32
    warning: 'rgba(255, 143, 0, 0.5)', // #ff8f00
    error: 'rgba(183, 28, 28, 0.5)', // #b71c1c
    info: 'rgba(0, 131, 143, 0.5)', // #00838f
    light: 'rgba(209, 204, 199, 0.5)', // #d1ccc7
    surface: 'rgba(33, 33, 33, 0.5)', // #212121
    dark: 'rgba(74, 59, 51, 0.5)', // #4a3b33
    red: 'rgba(183, 28, 28, 0.5)', // #b71c1c
    pink: 'rgba(194, 24, 91, 0.5)', // #c2185b
    purple: 'rgba(123, 31, 162, 0.5)', // #7b1fa2
    'deep-purple': 'rgba(81, 45, 168, 0.5)', // #512da8
    indigo: 'rgba(48, 63, 159, 0.5)', // #303f9f
    blue: 'rgba(21, 101, 192, 0.5)', // #1565c0
    'light-blue': 'rgba(2, 119, 189, 0.5)', // #0277bd
    cyan: 'rgba(0, 131, 143, 0.5)', // #00838f
    teal: 'rgba(0, 105, 92, 0.5)', // #00695c
    green: 'rgba(46, 125, 50, 0.5)', // #2e7d32
    'light-green': 'rgba(85, 139, 47, 0.5)', // #558b2f
    lime: 'rgba(158, 157, 36, 0.5)', // #9e9d24
    yellow: 'rgba(249, 168, 37, 0.5)', // #f9a825
    amber: 'rgba(255, 143, 0, 0.5)', // #ff8f00
    orange: 'rgba(239, 108, 0, 0.5)', // #ef6c00
    'deep-orange': 'rgba(216, 67, 21, 0.5)', // #d84315
    brown: 'rgba(93, 64, 55, 0.5)', // #5d4037
    gray: 'rgba(66, 66, 66, 0.5)', // #424242
    'blue-gray': 'rgba(55, 71, 79, 0.5)', // #37474f
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
