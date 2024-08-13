"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Register_RegisterForm_vue"],{

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
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }
      }
    };
  },
  methods: {
    validate: function validate() {
      this.$refs.formLogin.validate();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'RegisterForm',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var loadingPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var validLoginForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var setOverlay = function setOverlay(v) {
      return loadingPage.value = v;
    };
    var setMessage = function setMessage(v) {
      return message.value = v;
    };
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      email: "",
      password: ""
    });
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
    ;
    var __returned__ = {
      loadingPage: loadingPage,
      validLoginForm: validLoginForm,
      message: message,
      setOverlay: setOverlay,
      setMessage: setMessage,
      form: form,
      handleSubmit: handleSubmit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      get validateForm() {
        return _constants_form__WEBPACK_IMPORTED_MODULE_1__.validateForm;
      },
      get axios() {
        return (axios__WEBPACK_IMPORTED_MODULE_2___default());
      },
      get logGP() {
        return _public_images_logo_gp_png__WEBPACK_IMPORTED_MODULE_3__["default"];
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-img");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-alert");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-form");
  var _component_v_progress_circular = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-progress-circular");
  var _component_v_overlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-overlay");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_container, {
    fuild: "",
    style: {
      "background-color": "#222222"
    },
    "class": "h-100",
    "fill-height": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
        "no-gutters": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
            cols: "12",
            "class": "h-100 text-center"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.logGP,
                inline: "",
                cover: "",
                height: "auto",
                width: "15%"
              }, null, 8 /* PROPS */, ["src"])];
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
          }, null, 8 /* PROPS */, ["model-value", "text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
            cols: "12",
            "class": "h-100 text-center"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_form, {
                onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.handleSubmit, ["prevent"]),
                ref: "formLogin",
                modelValue: $setup.validLoginForm,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $setup.validLoginForm = $event;
                }),
                "class": "h-100"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                    "no-gutters": ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        cols: "12",
                        "class": "h-100 text-center w-50"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                            modelValue: $setup.form.email,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
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
                            rules: [_ctx.rules.required, _ctx.rules.email],
                            clearable: "",
                            tabindex: "1"
                          }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        cols: "12",
                        "class": "h-100 text-center w-50"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                            modelValue: $setup.form.password,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                              return $setup.form.password = $event;
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
                            tabindex: "2"
                          }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        cols: "12",
                        "class": "h-100 text-center w-50"
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
              }, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          })];
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


/***/ })

}]);