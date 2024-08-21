"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Register_RegisterPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _constants_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/form */ "./resources/js/constants/form.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_logo_gp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/images/logo_gp.png */ "./public/images/logo_gp.png");
/* harmony import */ var _public_images_logo_global_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/images/logo_global.png */ "./public/images/logo_global.png");
/* harmony import */ var _public_images_mujer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/images/mujer.png */ "./public/images/mujer.png");
/* harmony import */ var _public_images_libro_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/images/libro.png */ "./public/images/libro.png");
/* harmony import */ var _public_images_linea_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/images/linea.png */ "./public/images/linea.png");
/* harmony import */ var _public_images_tweens_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../public/images/tweens.png */ "./public/images/tweens.png");










var __default__ = {
  data: function data() {
    return {
      email: '',
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        counter: function counter(value) {
          return value.length >= 5 || 'Min 5 characters';
        },
        counter_dir: function counter_dir(value) {
          return value.length < 250 || 'Max 250 characters';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }
      }
    };
  },
  methods: {
    validate: function validate() {
      this.$refs.formRegister.validate();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'RegisterForm',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var loadingPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var expand = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var setExpand = function setExpand(v) {
      return expand.value = v;
    };
    var validRegisterForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var setOverlay = function setOverlay(v) {
      return loadingPage.value = v;
    };
    var setMessage = function setMessage(v) {
      return message.value = v;
    };
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      nombre: "",
      apellido: "",
      dni: "",
      fecha_nacimiento: "",
      genero_id: "",
      estado_civil_id: "",
      nacionalidad: "",
      pais_recidencia: "",
      region: "",
      ciudad: "",
      direccion: "",
      telefono: "",
      ocupacion: "",
      email: "",
      email_confirm: "",
      pass: ""
    });
    var mailConfirmEqualMail = function mailConfirmEqualMail() {
      return form.email_confirm === form.email || "Correo Confirmacion no coincide";
    };
    var initialize = function initialize() {
      setExpand(true);
    };
    function handleSubmit(e) {
      // make api request
      setMessage("");
      setOverlay(true);
      if ((0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.validateForm)(e)) {
        axios__WEBPACK_IMPORTED_MODULE_2___default().post('register', form).then(function (result) {
          setMessage("");
          window.location.href = "login";
        })["catch"](function (error) {
          console.log(JSON.stringify(error.response.data.message));
          if (error.response.status >= 500) {
            setMessage("Error de Sistema, Favor contactar al administrador");
          } else {
            setMessage(error.response.data.message);
          }
          setOverlay(false);
        });
      } else {
        setOverlay(false);
      }
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      return setOverlay(true);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return setTimeout(function () {
        initialize();
        setOverlay(false);
      }, 1700);
    });
    var __returned__ = {
      loadingPage: loadingPage,
      expand: expand,
      setExpand: setExpand,
      validRegisterForm: validRegisterForm,
      message: message,
      setOverlay: setOverlay,
      setMessage: setMessage,
      form: form,
      mailConfirmEqualMail: mailConfirmEqualMail,
      initialize: initialize,
      handleSubmit: handleSubmit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      get validateForm() {
        return _constants_form__WEBPACK_IMPORTED_MODULE_1__.validateForm;
      },
      get axios() {
        return (axios__WEBPACK_IMPORTED_MODULE_2___default());
      },
      get logGP() {
        return _public_images_logo_gp_png__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      get logoGlobal() {
        return _public_images_logo_global_png__WEBPACK_IMPORTED_MODULE_4__["default"];
      },
      get women() {
        return _public_images_mujer_png__WEBPACK_IMPORTED_MODULE_5__["default"];
      },
      get book() {
        return _public_images_libro_png__WEBPACK_IMPORTED_MODULE_6__["default"];
      },
      get line() {
        return _public_images_linea_png__WEBPACK_IMPORTED_MODULE_7__["default"];
      },
      get tweens() {
        return _public_images_tweens_png__WEBPACK_IMPORTED_MODULE_8__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterPage.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterPage.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_RegisterLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/RegisterLayout.vue */ "./resources/js/layouts/RegisterLayout.vue");
/* harmony import */ var _RegisterForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue */ "./resources/js/Pages/Register/RegisterForm.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'RegisterPage',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      RegisterLayout: _layouts_RegisterLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      RegisterForm: _RegisterForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_images_logo_global_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/images/logo_global.png */ "./public/images/logo_global.png");
/* harmony import */ var _public_images_hola_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/images/hola.png */ "./public/images/hola.png");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'RegisterLayout',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get logoGlobal() {
        return _public_images_logo_global_png__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      get hello() {
        return _public_images_hola_png__WEBPACK_IMPORTED_MODULE_1__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=template&id=9897428c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=template&id=9897428c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", null, " ", -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", null, " ", -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", null, " ", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_fab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-fab");
  var _component_v_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-img");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-alert");
  var _component_v_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-icon");
  var _component_v_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-label");
  var _component_v_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-divider");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-form");
  var _component_v_expand_x_transition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-expand-x-transition");
  var _component_v_progress_circular = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-progress-circular");
  var _component_v_overlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-overlay");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_container, {
    id: "registerContainer",
    "fill-height": "",
    fuild: "",
    style: {
      "background-color": "#222222",
      "max-width": "none",
      "width": "60%",
      "max-height": "none"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_fab, {
            color: "light",
            icon: "mdi-reply-circle",
            variant: "flat",
            href: "login",
            location: "top end",
            absolute: "",
            style: {
              "left": "20px"
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
            cols: "12",
            "class": "text-center"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.logGP,
                inline: "",
                cover: "",
                height: "auto",
                width: "17%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            fuild: "",
            "class": "float-md-top position-absolute",
            style: {
              "left": "34%",
              "top": "0"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.women,
                inline: "",
                cover: "",
                height: "auto",
                width: "2%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            fuild: "",
            "class": "float-md-top position-absolute",
            style: {
              "left": "40%",
              "top": "6%"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.tweens,
                inline: "",
                cover: "",
                height: "auto",
                width: "2%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            fuild: "",
            "class": "float-md-top position-absolute",
            style: {
              "left": "4%",
              "top": "0"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.logoGlobal,
                inline: "",
                cover: "",
                height: "auto",
                width: "10%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            fuild: "",
            "class": "float-md-top position-absolute",
            style: {
              "left": "56%",
              "top": "6%"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.book,
                inline: "",
                cover: "",
                height: "auto",
                width: "5%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            fuild: "",
            "class": "float-md-top position-absolute",
            style: {
              "left": "63%",
              "top": "0"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.line,
                inline: "",
                cover: "",
                height: "auto",
                width: "5%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_alert, {
        dismissible: "",
        title: "Error Message",
        "model-value": $setup.message.length !== 0,
        text: $setup.message,
        type: "error",
        mode: "slide-y-reverse-transition",
        "class": "elevation-7"
      }, null, 8 /* PROPS */, ["model-value", "text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_expand_x_transition, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_form, {
            onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.handleSubmit, ["prevent"]),
            ref: "formRegister",
            modelValue: $setup.validRegisterForm,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
              return $setup.validRegisterForm = $event;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                "no-gutters": ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
                        icon: "mdi-notebook-edit-outline",
                        style: {
                          "color": "#99c5c0",
                          "font-size": "20px"
                        }
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_label, {
                        style: {
                          "color": "#99c5c0",
                          "font-size": "17px"
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Datos Personales ")];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_divider, {
                        style: {
                          "color": "#f4ede8",
                          "padding-top": "2pt",
                          "margin-inline-start": "8%"
                        }
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" row 1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.nombre,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                          return $setup.form.nombre = $event;
                        }),
                        label: "Nombres",
                        variant: "outlined",
                        placeholder: "Jhon",
                        name: "mail",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "1"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.apellido,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                          return $setup.form.apellido = $event;
                        }),
                        label: "Apellidos",
                        variant: "outlined",
                        placeholder: "Doe",
                        name: "apellidos",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "2"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.dni,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                          return $setup.form.dni = $event;
                        }),
                        label: "DNI, Cédula,o RUT",
                        variant: "outlined",
                        placeholder: "1234567890",
                        name: "dni",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "3"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" row 2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.fecha_nacimiento,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                          return $setup.form.fecha_nacimiento = $event;
                        }),
                        label: "Fecha Nacimiento",
                        variant: "outlined",
                        placeholder: "20/03/1999",
                        name: "fecha_nacimiento",
                        type: "date",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "4"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.genero_id,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                          return $setup.form.genero_id = $event;
                        }),
                        name: "genero_id",
                        label: "Género",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "5"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.estado_civil_id,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                          return $setup.form.estado_civil_id = $event;
                        }),
                        name: "estado_civil_id",
                        label: "Estado Civil",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "6"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                "no-gutters": ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
                        icon: "mdi-map-marker-radius",
                        style: {
                          "color": "#99c5c0",
                          "font-size": "20px"
                        }
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_label, {
                        style: {
                          "color": "#99c5c0",
                          "font-size": "17px"
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ubicación ")];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_divider, {
                        style: {
                          "color": "#f4ede8",
                          "padding-top": "2pt",
                          "margin-inline-start": "8%"
                        }
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" row 3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.nacionalidad,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                          return $setup.form.nacionalidad = $event;
                        }),
                        name: "nacionalidad",
                        label: "Nacionalidad",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "7"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.pais_recidencia,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                          return $setup.form.pais_recidencia = $event;
                        }),
                        name: "pais",
                        label: "País",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "8"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.region,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                          return $setup.form.region = $event;
                        }),
                        name: "region",
                        label: "Region",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "9"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.ciudad,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                          return $setup.form.ciudad = $event;
                        }),
                        name: "ciudad",
                        label: "Ciudad/Comuna",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "10"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" row 4 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "6"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.direccion,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                          return $setup.form.direccion = $event;
                        }),
                        label: "Dirección",
                        variant: "outlined",
                        placeholder: "Jhon",
                        name: "direccion",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.counter_dir],
                        clearable: "",
                        tabindex: "11"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.form.ocupacion,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                          return $setup.form.ocupacion = $event;
                        }),
                        name: "ocupacion",
                        label: "Ocupación",
                        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "12"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.telefono,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
                          return $setup.form.telefono = $event;
                        }),
                        label: "Teléfono",
                        variant: "outlined",
                        placeholder: "+## #######",
                        name: "telefono",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "13"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                "no-gutters": ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
                        icon: "mdi-card-account-details-star-outline",
                        style: {
                          "color": "#99c5c0",
                          "font-size": "20px"
                        }
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_label, {
                        style: {
                          "color": "#99c5c0",
                          "font-size": "17px"
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Datos de Usuario ")];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_divider, {
                        style: {
                          "color": "#f4ede8",
                          "padding-top": "2pt",
                          "margin-inline-start": "8%"
                        }
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" row 5 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.email,
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                          return $setup.form.email = $event;
                        }),
                        label: "Correo Electrónico",
                        variant: "outlined",
                        placeholder: "johndoe@gmail.com",
                        name: "mail",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "14"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.email_confirm,
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                          return $setup.form.email_confirm = $event;
                        }),
                        label: "Confirme Correo Electrónico",
                        variant: "outlined",
                        placeholder: "johndoe@gmail.com",
                        name: "mail",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, $setup.mailConfirmEqualMail],
                        clearable: "",
                        tabindex: "15"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.form.pass,
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                          return $setup.form.pass = $event;
                        }),
                        label: "Contraseńa",
                        variant: "outlined",
                        placeholder: "******",
                        name: "password",
                        type: "password",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.counter],
                        clearable: "",
                        tabindex: "16",
                        hint: "Enter your password to access this website"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "12",
                    "class": "text-center"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                        type: "submit",
                        large: "",
                        onClick: $options.validate,
                        style: {
                          "background-color": "#99c5c0",
                          "font-weight": "bolder",
                          "font-size": "14pt",
                          "border-color": "beige",
                          "border-width": "2pt"
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("REGISTRARME")];
                        }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["onClick"])];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              })];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.expand]])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_overlay, {
        "model-value": $setup.loadingPage,
        opacity: "0.80",
        absolute: true,
        contained: "",
        persistent: "",
        "class": "align-center justify-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_progress_circular, {
            style: {
              "color": "#99c5c0"
            },
            size: "37",
            indeterminate: ""
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["model-value"])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RegisterLayout"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RegisterForm"])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_fade_transition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-fade-transition");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_container, {
    fuild: "",
    "class": "py-0 px-0",
    style: {
      "margin-left": "0px",
      "max-width": "none"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_fade_transition, {
        mode: "out-in"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
            "no-gutters": ""
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                cols: "12",
                id: "registerPanel"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
                }),
                _: 3 /* FORWARDED */
              })];
            }),
            _: 3 /* FORWARDED */
          })];
        }),
        _: 3 /* FORWARDED */
      })];
    }),
    _: 3 /* FORWARDED */
  });
}

/***/ }),

/***/ "./resources/js/constants/form.js":
/*!****************************************!*\
  !*** ./resources/js/constants/form.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCION": () => (/* binding */ ACCION),
/* harmony export */   "CRUD": () => (/* binding */ CRUD),
/* harmony export */   "FORM_POST": () => (/* binding */ FORM_POST),
/* harmony export */   "TEXT_BUTTON": () => (/* binding */ TEXT_BUTTON),
/* harmony export */   "removeValid": () => (/* binding */ removeValid),
/* harmony export */   "validInput": () => (/* binding */ validInput),
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
var CRUD = {
  index: 'index',
  show: 'show',
  create: 'create',
  edit: 'edit',
  update: 'update',
  "delete": 'delete'
};
var ACCION = {
  show: 'Visualización',
  create: 'Creación',
  edit: 'Edición'
};
var TEXT_BUTTON = {
  create: 'Crear',
  edit: 'Actualizar'
};
var FORM_POST = {
  create: 'store',
  edit: 'update'
};
/**
 *
 * @param {HTMLInputElement} input
 * @param {boolean} value
 */
var validInput = function validInput(input, value) {
  input.classList.remove('is-invalid');
  input.classList.remove('is-valid');
  if (value) input.classList.add('is-valid');else input.classList.add('is-invalid');
};
/**
 *
 * @param {HTMLInputElement} input
 */
var removeValid = function removeValid(input) {
  input.classList.remove('is-invalid');
  input.classList.remove('is-valid');
};
var validateForm = function validateForm(e) {
  e.preventDefault();
  var form = e.target;
  var validForm = true;
  form.querySelectorAll('.v-input--error').forEach(function (x) {
    console.log(x);
    validForm = false;
  });
  if (!validForm) {
    e.stopPropagation();
    return false;
  } else {
    return true;
  }
};

/***/ }),

/***/ "./public/images/hola.png":
/*!********************************!*\
  !*** ./public/images/hola.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/hola.png?616e473f314e4b719f5984d659ac2b72");

/***/ }),

/***/ "./public/images/libro.png":
/*!*********************************!*\
  !*** ./public/images/libro.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/libro.png?2f263a686e29ac488855e4466aaeceef");

/***/ }),

/***/ "./public/images/linea.png":
/*!*********************************!*\
  !*** ./public/images/linea.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/linea.png?697980e7682f9fd6852c03e3444fd87f");

/***/ }),

/***/ "./public/images/logo_global.png":
/*!***************************************!*\
  !*** ./public/images/logo_global.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo_global.png?3821571be1b146c4f98a5fae155cea17");

/***/ }),

/***/ "./public/images/logo_gp.png":
/*!***********************************!*\
  !*** ./public/images/logo_gp.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo_gp.png?6f9a12f7402bdfe72ac09ef62dcead4a");

/***/ }),

/***/ "./public/images/mujer.png":
/*!*********************************!*\
  !*** ./public/images/mujer.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/mujer.png?080dd9a3acffb74c222af213af78f553");

/***/ }),

/***/ "./public/images/tweens.png":
/*!**********************************!*\
  !*** ./public/images/tweens.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/tweens.png?8b28842d903e2eeb3545b867cab6a65f");

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Pages/Register/RegisterForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Register/RegisterForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_9897428c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=9897428c */ "./resources/js/Pages/Register/RegisterForm.vue?vue&type=template&id=9897428c");
/* harmony import */ var _RegisterForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegisterForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisterForm_vue_vue_type_template_id_9897428c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Register/RegisterForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Register/RegisterPage.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Register/RegisterPage.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterPage_vue_vue_type_template_id_6a9a51f6_class_py_0_20px_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0 */ "./resources/js/Pages/Register/RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0");
/* harmony import */ var _RegisterPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Register/RegisterPage.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegisterPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisterPage_vue_vue_type_template_id_6a9a51f6_class_py_0_20px_0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Register/RegisterPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/RegisterLayout.vue":
/*!*************************************************!*\
  !*** ./resources/js/layouts/RegisterLayout.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterLayout_vue_vue_type_template_id_1ce75e91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterLayout.vue?vue&type=template&id=1ce75e91 */ "./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91");
/* harmony import */ var _RegisterLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterLayout.vue?vue&type=script&setup=true&lang=js */ "./resources/js/layouts/RegisterLayout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegisterLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisterLayout_vue_vue_type_template_id_1ce75e91__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/RegisterLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterForm.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Register/RegisterPage.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Register/RegisterPage.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterPage.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterPage.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/RegisterLayout.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/layouts/RegisterLayout.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterLayout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Register/RegisterForm.vue?vue&type=template&id=9897428c":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Register/RegisterForm.vue?vue&type=template&id=9897428c ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_template_id_9897428c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_template_id_9897428c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterForm.vue?vue&type=template&id=9897428c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=template&id=9897428c");


/***/ }),

/***/ "./resources/js/Pages/Register/RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Register/RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterPage_vue_vue_type_template_id_6a9a51f6_class_py_0_20px_0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterPage_vue_vue_type_template_id_6a9a51f6_class_py_0_20px_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterPage.vue?vue&type=template&id=6a9a51f6&class=py-0%20px-0");


/***/ }),

/***/ "./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91":
/*!*******************************************************************************!*\
  !*** ./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterLayout_vue_vue_type_template_id_1ce75e91__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterLayout_vue_vue_type_template_id_1ce75e91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterLayout.vue?vue&type=template&id=1ce75e91 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91");


/***/ })

}]);