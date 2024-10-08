(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['resources_js_Pages_Alumno_Recursos-show_vue'],
  {
    /***/ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=script&setup=true&lang=js':
      /*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/vue/dist/vue.esm-bundler.js',
        );
        /* harmony import */ var _components_Layout_vue__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../components/Layout.vue */ './resources/js/components/Layout.vue',
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          __name: 'Recursos-show',
          props: {
            inscripciones: {
              type: Array,
              default: [],
            },
          },
          setup: function setup(__props, _ref) {
            var __expose = _ref.expose;
            __expose();

            // import { Link, usePage } from '@inertiajs/vue3';
            var props = __props;
            var loading = (0, vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
            var isDisabled = (0, vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
            (0, vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
              console.log(props.inscripciones);
            });
            var headers = [
              {
                title: 'N° DE RECURSO',
                key: 'grupo_pequeno.temporada.prefijo',
                sortable: false,
              },
              {
                title: 'LINK LECTURA',
                key: 'grupo_pequeno.ciclo.curriculum.nombre',
                sortable: false,
              },
              {
                title: 'LINK ESCRITURA',
                key: 'grupo_pequeno.ciclo.nombre',
                sortable: false,
              },
            ];
            var __returned__ = {
              props: props,
              loading: loading,
              isDisabled: isDisabled,
              headers: headers,
              onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
              ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
              MainLayout: _components_Layout_vue__WEBPACK_IMPORTED_MODULE_1__['default'],
            };
            Object.defineProperty(__returned__, '__isScriptSetup', {
              enumerable: false,
              value: true,
            });
            return __returned__;
          },
        };

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Layout.vue?vue&type=script&setup=true&lang=js':
      /*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Layout.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! axios */ './node_modules/axios/index.js',
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! vue */ './node_modules/vue/dist/vue.esm-bundler.js',
        );
        /* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! vuetify */ './node_modules/vuetify/lib/composables/theme.mjs',
        );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          __name: 'Layout',
          setup: function setup(__props, _ref) {
            var __expose = _ref.expose;
            __expose();
            var theme = (0, vuetify__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
            var isDarkTheme = (0, vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
            var drawer = (0, vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
            var csrf = (0, vue__WEBPACK_IMPORTED_MODULE_2__.ref)(
              document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            );
            var formLogout = (0, vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({
              _token: csrf,
            });
            var listGroup = (0, vue__WEBPACK_IMPORTED_MODULE_2__.ref)([
              {
                label: 'Admin',
                expanded: false,
                items: [
                  {
                    title: 'Home',
                    link: '/',
                  },
                  {
                    title: 'Globales',
                    link: '/',
                  },
                  {
                    title: 'Temporadas R',
                    link: '/',
                  },
                  {
                    title: 'Registrar Horario R',
                    link: '/',
                  },
                  {
                    title: 'Usuarios R',
                    link: '/',
                  },
                  {
                    title: 'Asistencias',
                    link: '/',
                  },
                  {
                    title: 'Recursos R',
                    link: '/',
                  },
                  {
                    title: 'Cumpleaños',
                    link: '/',
                  },
                  {
                    title: 'Adicionales ',
                    link: '/',
                  },
                  {
                    title: 'Exportar Data',
                    link: '/',
                  },
                  {
                    title: 'Inscribir Alumno',
                    link: '/',
                  },
                ],
              },
              {
                label: 'Coordinador',
                expanded: false,
                items: [
                  {
                    title: 'Asistencia',
                    link: '/',
                  },
                  {
                    title: 'Registrar Horario R',
                    link: '/',
                  },
                  {
                    title: 'Usuarios AR -',
                    link: '/',
                  },
                  {
                    title: 'Recursos R',
                    link: '/',
                  },
                  {
                    title: 'Cumpleaños',
                    link: '/',
                  },
                  {
                    title: 'Exportar Data',
                    link: '/',
                  },
                  {
                    title: 'Reasignar alumnos',
                    link: '/',
                  },
                  {
                    title: 'Inscribir Alumno',
                    link: '/',
                  },
                ],
              },
              {
                label: 'Monitor',
                expanded: false,
                items: [
                  {
                    title: 'Asistencia',
                    link: '',
                  },
                  {
                    title: 'Usuarios AR -',
                    link: '',
                  },
                  {
                    title: 'Cumpleaños',
                    link: '',
                  },
                  {
                    title: 'Exportar Data',
                    link: '',
                  },
                  {
                    title: 'Reasignar alumnos',
                    link: '',
                  },
                  {
                    title: 'Inscribir Alumno',
                    link: '',
                  },
                ],
              },
              {
                label: 'Lider',
                expanded: false,
                items: [
                  {
                    title: 'Mis Salones',
                    link: '',
                  },
                  {
                    title: 'Calificar alumnos',
                    link: '',
                  },
                  {
                    title: 'Cumpleaños',
                    link: '',
                  },
                ],
              },
              {
                label: 'Alumno',
                expanded: false,
                items: [
                  {
                    title: 'Home',
                    link: '',
                  },
                  {
                    title: 'Mis Recursos',
                    link: '',
                  },
                  {
                    title: 'Mis Grupos Pequeños',
                    link: '',
                  },
                ],
              },
            ]);
            var toggleTheme = function toggleTheme() {
              isDarkTheme.value = !isDarkTheme.value;
              theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
              localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
            };
            (0, vue__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
              isDarkTheme.value = localStorage.getItem('theme') === 'dark';
              theme.global.name.value = isDarkTheme.value ? 'dark' : 'light';
            });
            var activeGroup = (0, vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
            function toggleGroup(index) {
              activeGroup.value = activeGroup.value === index ? null : index;
            }
            function handleSubmit(e) {
              axios__WEBPACK_IMPORTED_MODULE_0___default()
                .post('logout', formLogout)
                .then(function (result) {
                  window.location.href = 'login';
                })
                ['catch'](function (error) {
                  console.log(JSON.stringify(error.response.data.message));
                });
            }
            var myApp = (0, vue__WEBPACK_IMPORTED_MODULE_2__.ref)([
              {
                title: 'Click Me 1',
                icon: 'mdi-power',
                link: 'logout',
              },
              {
                title: 'Click Me 2',
                icon: 'mdi-home',
                link: 'home',
              },
              {
                title: 'Click Me 3',
                icon: 'mdi-power',
                link: 'logout',
              },
              {
                title: 'Click Me 4',
                icon: 'mdi-home',
                link: 'home',
              },
            ]);
            var __returned__ = {
              theme: theme,
              isDarkTheme: isDarkTheme,
              drawer: drawer,
              csrf: csrf,
              formLogout: formLogout,
              listGroup: listGroup,
              toggleTheme: toggleTheme,
              activeGroup: activeGroup,
              toggleGroup: toggleGroup,
              handleSubmit: handleSubmit,
              myApp: myApp,
              get axios() {
                return axios__WEBPACK_IMPORTED_MODULE_0___default();
              },
              get classnames() {
                return classnames__WEBPACK_IMPORTED_MODULE_1___default();
              },
              onMounted: vue__WEBPACK_IMPORTED_MODULE_2__.onMounted,
              reactive: vue__WEBPACK_IMPORTED_MODULE_2__.reactive,
              ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
              get useTheme() {
                return vuetify__WEBPACK_IMPORTED_MODULE_3__.useTheme;
              },
            };
            Object.defineProperty(__returned__, '__isScriptSetup', {
              enumerable: false,
              value: true,
            });
            return __returned__;
          },
        };

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=template&id=925a5f44':
      /*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=template&id=925a5f44 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ render: () => /* binding */ render,
          /* harmony export */
        });
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/vue/dist/vue.esm-bundler.js',
        );
        function _typeof(obj) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      'function' == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, 'string');
          return _typeof(key) === 'symbol' ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== 'object' || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || 'default');
            if (_typeof(res) !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return (hint === 'string' ? String : Number)(input);
        }

        var _hoisted_1 = {
          class: 'd-flex inline-flex ga-2',
        };
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_v_card_title = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-card-title',
          );
          var _component_v_btn = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-btn');
          var _component_Link = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('Link');
          var _component_v_data_table = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-data-table',
          );
          var _component_v_card = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-card');
          var _component_v_container = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-container',
          );
          return (
            (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
            (0, vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup['MainLayout'], null, {
              default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [
                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                    _component_v_container,
                    {
                      fluid: '',
                    },
                    {
                      default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                            _component_v_card,
                            {
                              color: 'background',
                              class: 'shadow-md px-4 py-2',
                            },
                            {
                              default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                var _createVNode2;
                                return [
                                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                    _component_v_card_title,
                                    null,
                                    {
                                      default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                        function () {
                                          return [
                                            (0, vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                              'RECURSOS - ' +
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                  _ctx.ciclo.curriculum.nombre,
                                                ) +
                                                ' ' +
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                  _ctx.ciclo.nombre,
                                                ),
                                              1 /* TEXT */,
                                            ),
                                          ];
                                        },
                                      ),
                                      _: 1 /* STABLE */,
                                    },
                                  ),
                                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                    _component_v_data_table,
                                    {
                                      headers: $setup.headers,
                                      'header-props': {
                                        class: 'bg-data-table-header',
                                      },
                                      items: $props.inscripciones,
                                      class: 'elevation-1 rounded bg-data-table-body',
                                      'hide-default-footer': '',
                                    },
                                    ((_createVNode2 = {
                                      'no-data': (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                        function () {
                                          return [
                                            (0, vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                              'No tienes Inscripciones con Recursos disponibles ',
                                            ),
                                          ];
                                        },
                                      ),
                                    }),
                                    _defineProperty(
                                      _createVNode2,
                                      'item.id',
                                      (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                        function (_ref) {
                                          var index = _ref.index;
                                          return [
                                            (0, vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                              (0, vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                index + 1,
                                              ),
                                              1 /* TEXT */,
                                            ),
                                          ];
                                        },
                                      ),
                                    ),
                                    _defineProperty(
                                      _createVNode2,
                                      'item.acciones',
                                      (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                        function (_ref2) {
                                          var item = _ref2.item;
                                          return [
                                            (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                              'div',
                                              _hoisted_1,
                                              [
                                                (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                  _component_Link,
                                                  {
                                                    href: _ctx.route('mis-recursos.show', item),
                                                  },
                                                  {
                                                    default: (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                      function () {
                                                        return [
                                                          (0,
                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                            _component_v_btn,
                                                            {
                                                              as: 'v-btn',
                                                              color: 'info',
                                                              small: '',
                                                            },
                                                            {
                                                              default: (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                function () {
                                                                  return [
                                                                    (0,
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                      ' Ver Recursos',
                                                                    ),
                                                                  ];
                                                                },
                                                              ),
                                                              _: 1 /* STABLE */,
                                                            },
                                                          ),
                                                        ];
                                                      },
                                                    ),
                                                    _: 2 /* DYNAMIC */,
                                                  },
                                                  1032 /* PROPS, DYNAMIC_SLOTS */,
                                                  ['href'],
                                                ),
                                              ],
                                            ),
                                          ];
                                        },
                                      ),
                                    ),
                                    _defineProperty(_createVNode2, '_', 2),
                                    _createVNode2),
                                    1032 /* PROPS, DYNAMIC_SLOTS */,
                                    ['items'],
                                  ),
                                ];
                              }),
                              _: 1 /* STABLE */,
                            },
                          ),
                        ];
                      }),
                      _: 1 /* STABLE */,
                    },
                  ),
                ];
              }),
              _: 1 /* STABLE */,
            })
          );
        }

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Layout.vue?vue&type=template&id=e245f756':
      /*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Layout.vue?vue&type=template&id=e245f756 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ render: () => /* binding */ render,
          /* harmony export */
        });
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/vue/dist/vue.esm-bundler.js',
        );

        var _hoisted_1 = {
          class: 'mr-auto ml-2',
        };
        var _hoisted_2 = /*#__PURE__*/ (0, vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
          'img',
          {
            src: '/img/logos/ar ministries_white.png',
            width: '100',
            class: 'px-2',
            style: {
              filter: 'drop-shadow(3px 3px 3px rgba(153, 197, 192, 1))',
            },
          },
          null,
          -1 /* HOISTED */,
        );
        var _hoisted_3 = {
          class: 'd-flex align-center ml-auto mr-2',
        };
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_v_app_bar_nav_icon = (0,
          vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-app-bar-nav-icon');
          var _component_v_btn = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-btn');
          var _component_v_icon = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-icon');
          var _component_v_form = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-form');
          var _component_v_list_item_title = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-list-item-title',
          );
          var _component_v_list_item = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-list-item',
          );
          var _component_v_list = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-list');
          var _component_v_menu = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-menu');
          var _component_v_app_bar = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-app-bar',
          );
          var _component_v_hover = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-hover',
          );
          var _component_v_list_group = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
            'v-list-group',
          );
          var _component_v_navigation_drawer = (0,
          vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-navigation-drawer');
          var _component_v_main = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-main');
          var _component_v_app = (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)('v-app');
          return (
            (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
            (0, vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_app, null, {
              default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [
                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                    _component_v_app_bar,
                    {
                      app: '',
                      color: 'navbar-color',
                      class: 'text-navbar-text',
                    },
                    {
                      default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                            'div',
                            _hoisted_1,
                            [
                              _hoisted_2,
                              (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                _component_v_app_bar_nav_icon,
                                {
                                  onClick:
                                    _cache[0] ||
                                    (_cache[0] = function ($event) {
                                      return ($setup.drawer = !$setup.drawer);
                                    }),
                                },
                              ),
                            ],
                          ),
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                            'div',
                            _hoisted_3,
                            [
                              $setup.isDarkTheme
                                ? ((0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                    _component_v_btn,
                                    {
                                      key: 0,
                                      icon: 'mdi-weather-night',
                                      onClick: $setup.toggleTheme,
                                    },
                                  ))
                                : ((0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                    _component_v_btn,
                                    {
                                      key: 1,
                                      icon: 'mdi-weather-sunny',
                                      onClick: $setup.toggleTheme,
                                    },
                                  )),
                              (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                _component_v_menu,
                                {
                                  activator: 'parent',
                                  transition: 'slide-y-transition',
                                },
                                {
                                  activator: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                    function (_ref) {
                                      var props = _ref.props;
                                      return [
                                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                          _component_v_btn,
                                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(
                                            {
                                              color: '#99c5c0',
                                            },
                                            props,
                                          ),
                                          {
                                            default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                              function () {
                                                return [
                                                  (0,
                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                    'Mi Aplicación ',
                                                  ),
                                                ];
                                              },
                                            ),
                                            _: 2 /* DYNAMIC */,
                                          },
                                          1040 /* FULL_PROPS, DYNAMIC_SLOTS */,
                                        ),
                                      ];
                                    },
                                  ),
                                  default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                    function () {
                                      return [
                                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                          _component_v_list,
                                          {
                                            class: 'text-left',
                                          },
                                          {
                                            default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                              function () {
                                                return [
                                                  ((0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                    true,
                                                  ),
                                                  (0,
                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                    null,
                                                    (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                      $setup.myApp,
                                                      function (item, index) {
                                                        return (
                                                          (0,
                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                          (0,
                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                            _component_v_list_item,
                                                            {
                                                              key: index,
                                                              value: index,
                                                            },
                                                            {
                                                              default: (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                function () {
                                                                  return [
                                                                    (0,
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                      _component_v_list_item_title,
                                                                      null,
                                                                      {
                                                                        default: (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                          function () {
                                                                            return [
                                                                              (0,
                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                _component_v_form,
                                                                                {
                                                                                  onSubmit: (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(
                                                                                    $setup.handleSubmit,
                                                                                    ['prevent'],
                                                                                  ),
                                                                                },
                                                                                {
                                                                                  default: (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                    function () {
                                                                                      return [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                          _component_v_btn,
                                                                                          {
                                                                                            size: 'small',
                                                                                            variant:
                                                                                              'plain',
                                                                                            type: 'submit',
                                                                                            'prepend-icon':
                                                                                              item.icon,
                                                                                          },
                                                                                          {
                                                                                            prepend:
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                function () {
                                                                                                  return [
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                                      _component_v_icon,
                                                                                                      {
                                                                                                        size: 'x-large',
                                                                                                        color:
                                                                                                          'error',
                                                                                                      },
                                                                                                    ),
                                                                                                  ];
                                                                                                },
                                                                                              ),
                                                                                            default:
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                function () {
                                                                                                  return [
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                      ' ' +
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                          item.title,
                                                                                                        ),
                                                                                                      1 /* TEXT */,
                                                                                                    ),
                                                                                                  ];
                                                                                                },
                                                                                              ),
                                                                                            _: 2 /* DYNAMIC */,
                                                                                          },
                                                                                          1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                          [
                                                                                            'prepend-icon',
                                                                                          ],
                                                                                        ),
                                                                                      ];
                                                                                    },
                                                                                  ),
                                                                                  _: 2 /* DYNAMIC */,
                                                                                },
                                                                                1024 /* DYNAMIC_SLOTS */,
                                                                              ),
                                                                            ];
                                                                          },
                                                                        ),
                                                                        _: 2 /* DYNAMIC */,
                                                                      },
                                                                      1024 /* DYNAMIC_SLOTS */,
                                                                    ),
                                                                  ];
                                                                },
                                                              ),
                                                              _: 2 /* DYNAMIC */,
                                                            },
                                                            1032 /* PROPS, DYNAMIC_SLOTS */,
                                                            ['value'],
                                                          )
                                                        );
                                                      },
                                                    ),
                                                    128 /* KEYED_FRAGMENT */,
                                                  )),
                                                ];
                                              },
                                            ),
                                            _: 1 /* STABLE */,
                                          },
                                        ),
                                      ];
                                    },
                                  ),
                                  _: 1 /* STABLE */,
                                },
                              ),
                            ],
                          ),
                        ];
                      }),
                      _: 1 /* STABLE */,
                    },
                  ),
                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                    _component_v_navigation_drawer,
                    {
                      color: 'navbar-color',
                      modelValue: $setup.drawer,
                      'onUpdate:modelValue':
                        _cache[2] ||
                        (_cache[2] = function ($event) {
                          return ($setup.drawer = $event);
                        }),
                      app: '',
                      class: 'text-navbar-text',
                    },
                    {
                      default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                            ' Sidebar content ',
                          ),
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                            ' <template v-for="(item, index) in items" :key="index">\r\n        <v-hover>\r\n          <template v-slot:default="{ isHovering, props }">\r\n            <v-list-item\r\n              :title="item.title"\r\n              :to="item.link"\r\n              v-bind="props"\r\n              :class="\r\n                classnames({\r\n                  \'bg-navbar-hover\': isHovering,\r\n                  \'text-navbar-hover-text\': isHovering,\r\n                })\r\n              "\r\n            >\r\n            </v-list-item>\r\n          </template>\r\n</v-hover>\r\n</template> ',
                          ),
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                            _component_v_list,
                            null,
                            {
                              default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                return [
                                  ((0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true),
                                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                    vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    null,
                                    (0, vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                      $setup.listGroup,
                                      function (group, index) {
                                        return (
                                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                            _component_v_list_group,
                                            {
                                              key: index + 'group',
                                              modelValue: $setup.activeGroup,
                                              'onUpdate:modelValue':
                                                _cache[1] ||
                                                (_cache[1] = function ($event) {
                                                  return ($setup.activeGroup = $event);
                                                }),
                                              value: index,
                                            },
                                            {
                                              activator: (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                function (_ref2) {
                                                  var props = _ref2.props;
                                                  return [
                                                    (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                      _component_v_list_item,
                                                      (0,
                                                      vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(
                                                        {
                                                          ref_for: true,
                                                        },
                                                        props,
                                                        {
                                                          title: group.label,
                                                        },
                                                      ),
                                                      null,
                                                      16 /* FULL_PROPS */,
                                                      ['title'],
                                                    ),
                                                  ];
                                                },
                                              ),
                                              default: (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                function () {
                                                  return [
                                                    ((0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                      true,
                                                    ),
                                                    (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                      vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                      null,
                                                      (0,
                                                      vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                        group.items,
                                                        function (item, i) {
                                                          return (
                                                            (0,
                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                            (0,
                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                              _component_v_hover,
                                                              {
                                                                key: i + 'subItem',
                                                              },
                                                              {
                                                                default: (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                  function (_ref3) {
                                                                    var isHovering =
                                                                        _ref3.isHovering,
                                                                      props = _ref3.props;
                                                                    return [
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                        _component_v_list_item,
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(
                                                                          {
                                                                            title: item.title,
                                                                            ref_for: true,
                                                                          },
                                                                          props,
                                                                          {
                                                                            class:
                                                                              $setup.classnames({
                                                                                'bg-navbar-hover':
                                                                                  isHovering,
                                                                                'text-navbar-hover-text':
                                                                                  isHovering,
                                                                              }),
                                                                          },
                                                                        ),
                                                                        null,
                                                                        16 /* FULL_PROPS */,
                                                                        ['title', 'class'],
                                                                      ),
                                                                    ];
                                                                  },
                                                                ),
                                                                _: 2 /* DYNAMIC */,
                                                              },
                                                              1024 /* DYNAMIC_SLOTS */,
                                                            )
                                                          );
                                                        },
                                                      ),
                                                      128 /* KEYED_FRAGMENT */,
                                                    )),
                                                  ];
                                                },
                                              ),
                                              _: 2 /* DYNAMIC */,
                                            },
                                            1032 /* PROPS, DYNAMIC_SLOTS */,
                                            ['modelValue', 'value'],
                                          )
                                        );
                                      },
                                    ),
                                    128 /* KEYED_FRAGMENT */,
                                  )),
                                ];
                              }),
                              _: 1 /* STABLE */,
                            },
                          ),
                        ];
                      }),
                      _: 1 /* STABLE */,
                    },
                    8 /* PROPS */,
                    ['modelValue'],
                  ),
                  (0, vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                    _component_v_main,
                    {
                      id: 'body-app',
                    },
                    {
                      default: (0, vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [
                          (0, vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, 'default'),
                        ];
                      }),
                      _: 3 /* FORWARDED */,
                    },
                  ),
                ];
              }),
              _: 3 /* FORWARDED */,
            })
          );
        }

        /***/
      },

    /***/ './node_modules/vue-loader/dist/exportHelper.js':
      /*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        // runtime helper for setting properties on components
        // in a tree-shakable way
        exports['default'] = (sfc, props) => {
          const target = sfc.__vccOpts || sfc;
          for (const [key, val] of props) {
            target[key] = val;
          }
          return target;
        };

        /***/
      },

    /***/ './resources/js/Pages/Alumno/Recursos-show.vue':
      /*!*****************************************************!*\
  !*** ./resources/js/Pages/Alumno/Recursos-show.vue ***!
  \*****************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _Recursos_show_vue_vue_type_template_id_925a5f44__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./Recursos-show.vue?vue&type=template&id=925a5f44 */ './resources/js/Pages/Alumno/Recursos-show.vue?vue&type=template&id=925a5f44',
          );
        /* harmony import */ var _Recursos_show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./Recursos-show.vue?vue&type=script&setup=true&lang=js */ './resources/js/Pages/Alumno/Recursos-show.vue?vue&type=script&setup=true&lang=js',
          );
        /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ './node_modules/vue-loader/dist/exportHelper.js',
          );

        const __exports__ = /*#__PURE__*/ (0,
        _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__['default'])(
          _Recursos_show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[
            'default'
          ],
          [
            [
              'render',
              _Recursos_show_vue_vue_type_template_id_925a5f44__WEBPACK_IMPORTED_MODULE_0__.render,
            ],
            ['__file', 'resources/js/Pages/Alumno/Recursos-show.vue'],
          ],
        );
        /* hot reload */
        if (false) {
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = __exports__;

        /***/
      },

    /***/ './resources/js/components/Layout.vue':
      /*!********************************************!*\
  !*** ./resources/js/components/Layout.vue ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _Layout_vue_vue_type_template_id_e245f756__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./Layout.vue?vue&type=template&id=e245f756 */ './resources/js/components/Layout.vue?vue&type=template&id=e245f756',
          );
        /* harmony import */ var _Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./Layout.vue?vue&type=script&setup=true&lang=js */ './resources/js/components/Layout.vue?vue&type=script&setup=true&lang=js',
          );
        /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ './node_modules/vue-loader/dist/exportHelper.js',
          );

        const __exports__ = /*#__PURE__*/ (0,
        _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__['default'])(
          _Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__['default'],
          [
            [
              'render',
              _Layout_vue_vue_type_template_id_e245f756__WEBPACK_IMPORTED_MODULE_0__.render,
            ],
            ['__file', 'resources/js/components/Layout.vue'],
          ],
        );
        /* hot reload */
        if (false) {
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = __exports__;

        /***/
      },

    /***/ './resources/js/Pages/Alumno/Recursos-show.vue?vue&type=script&setup=true&lang=js':
      /*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Recursos_show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ],
          /* harmony export */
        });
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Recursos_show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Recursos-show.vue?vue&type=script&setup=true&lang=js */ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=script&setup=true&lang=js',
          );

        /***/
      },

    /***/ './resources/js/components/Layout.vue?vue&type=script&setup=true&lang=js':
      /*!*******************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ],
          /* harmony export */
        });
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&setup=true&lang=js */ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Layout.vue?vue&type=script&setup=true&lang=js',
          );

        /***/
      },

    /***/ './resources/js/Pages/Alumno/Recursos-show.vue?vue&type=template&id=925a5f44':
      /*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=template&id=925a5f44 ***!
  \***********************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ render: () =>
            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Recursos_show_vue_vue_type_template_id_925a5f44__WEBPACK_IMPORTED_MODULE_0__.render,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Recursos_show_vue_vue_type_template_id_925a5f44__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Recursos-show.vue?vue&type=template&id=925a5f44 */ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Alumno/Recursos-show.vue?vue&type=template&id=925a5f44',
          );

        /***/
      },

    /***/ './resources/js/components/Layout.vue?vue&type=template&id=e245f756':
      /*!**************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=template&id=e245f756 ***!
  \**************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ render: () =>
            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_e245f756__WEBPACK_IMPORTED_MODULE_0__.render,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_e245f756__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=e245f756 */ './node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Layout.vue?vue&type=template&id=e245f756',
          );

        /***/
      },

    /***/ './node_modules/classnames/index.js':
      /*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
      /***/ (module, exports) => {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
        /* global define */

        (function () {
          'use strict';

          var hasOwn = {}.hasOwnProperty;

          function classNames() {
            var classes = '';

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (arg) {
                classes = appendClass(classes, parseValue(arg));
              }
            }

            return classes;
          }

          function parseValue(arg) {
            if (typeof arg === 'string' || typeof arg === 'number') {
              return arg;
            }

            if (typeof arg !== 'object') {
              return '';
            }

            if (Array.isArray(arg)) {
              return classNames.apply(null, arg);
            }

            if (
              arg.toString !== Object.prototype.toString &&
              !arg.toString.toString().includes('[native code]')
            ) {
              return arg.toString();
            }

            var classes = '';

            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
              }
            }

            return classes;
          }

          function appendClass(value, newClass) {
            if (!newClass) {
              return value;
            }

            if (value) {
              return value + ' ' + newClass;
            }

            return value + newClass;
          }

          if (true && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })();

        /***/
      },
  },
]);
