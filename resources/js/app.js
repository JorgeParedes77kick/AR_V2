/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap.js');
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createApp, h } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

import vuetify from './Plugins/vuetify.js';
import { validate } from './utils/formRules.js';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

function resolvePageComponent(name) {
  return import(`./Pages/${name}.vue`);
}

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(name),
  setup({ el, app, props, plugin }) {
    const vueApp = createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(vuetify)
      .use(VueSweetalert2)

      .mixin({ methods: { route } });

    // Use provide to add the validation function globally
    vueApp.provide('$validation', validate);

    return vueApp.mount(el);
  },
}).then(()=>{});

InertiaProgress.init();

{
  /* MODO DE USO DE LOS PROVIDE
    <script setup>
import { inject } from 'vue';

const validate = inject('$validation');

// Ahora puedes usar la función validate en tu componente
 };
const result = validate(data);
</script> */
}

