import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: '#6DA6A0',
        // secondary: '#93BF73',
        // accent: '#F2EEEB',
        // error: '#F29057',
        // background: '#0D0D0D',
        dark: '#0D0D0D',
        dark2: '#343434',
        infoSchool: '#ffb8c2',
        arSchool: '#20516b',
      },
      //   dark: {
      //     primary: '#2C2E59',
      //     secondary: '#6DA6A0',
      //     accent: '#F2EEEB',
      //     error: '#593520',
      //   },
    },
  },
});

// export default new Vuetify();
