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
/* harmony import */ var _public_images_corona_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/images/corona.png */ "./public/images/corona.png");
/* harmony import */ var _public_images_tweens_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../public/images/tweens.png */ "./public/images/tweens.png");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var __default__ = {
  data: function data() {
    return {
      email: '',
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        counter_pass: function counter_pass(value) {
          return value.length >= 8 || 'Min 8 characters';
        },
        counter_dir: function counter_dir(value) {
          return value.length < 250 || 'Max 250 characters';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        text_valid: function text_valid(value) {
          var pattern = /^[a-zA-Z\s]{3,50}$/;
          return pattern.test(value) || 'Letras mayusculas o minúsculas';
        },
        phone: function phone(value) {
          var pattern = /\+[0-9\s-]+/;
          return pattern.test(value) || 'El número de teléfono debe ser válido +## ###########';
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
    var message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var setOverlay = function setOverlay(v) {
      return loadingPage.value = v;
    };
    var setMessage = function setMessage(v) {
      return message.value = v;
    };
    var formRegister = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var fieldsForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_9__.useForm)({
      nombre: "",
      apellido: "",
      dni: "",
      fecha_nacimiento: "",
      genero_id: "",
      estado_civil_id: "",
      nacionalidad_id: "",
      pais_recidencia: "",
      region_id: "",
      ciudad: "",
      direccion: "",
      telefono: "",
      ocupacion: "",
      email: "",
      email_confirm: "",
      password: "",
      password_confirm: "",
      persona_id: "",
      nick_name: ""
    });
    var mailConfirmEqualMail = function mailConfirmEqualMail() {
      return fieldsForm.email_confirm === fieldsForm.email || "Correo Confirmación no coincide";
    };
    var passConfirmEqualPass = function passConfirmEqualPass() {
      return fieldsForm.password_confirm === fieldsForm.password || "Contraseña Confirmación no coincide";
    };
    var genderList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setGenders = function setGenders(v) {
      return genderList.value = v;
    };
    var civilStatusList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setCivilStatus = function setCivilStatus(v) {
      return civilStatusList.value = v;
    };
    var nationalityList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setNationality = function setNationality(v) {
      return nationalityList.value = v;
    };
    var countryList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setCountry = function setCountry(v) {
      return countryList.value = v;
    };
    var regionList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setRegion = function setRegion(v) {
      return regionList.value = v;
    };
    var cityList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setCity = function setCity(v) {
      return cityList.value = v;
    };
    var occupationList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setOccupation = function setOccupation(v) {
      return occupationList.value = v;
    };
    var initialize = function initialize() {
      setExpand(true);
      setOverlay(false);
    };
    var validateForm = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var _yield$formRegister$v, valid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setOverlay(true);
              e.preventDefault();
              fieldsForm.clearErrors();
              _context.next = 5;
              return formRegister.value.validate();
            case 5:
              _yield$formRegister$v = _context.sent;
              valid = _yield$formRegister$v.valid;
              if (valid) handleSubmit();
              setOverlay(false);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function validateForm(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    function handleSubmit(e) {
      // make api request
      setMessage("");
      setOverlay(true);
      createNickName();
      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/persona/store', fieldsForm).then(function (result) {
        /*console.log("1 "+JSON.stringify(result));
        console.log("2 "+JSON.stringify(result.response));
        console.log("3 "+JSON.stringify(result.data));
        console.log("4 "+JSON.stringify(result.data.person));
        console.log("5 "+JSON.stringify(result.data.person.id));
        console.log("6 "+JSON.stringify(result.status));*/
        setMessage("");
        if (result.status === 200) {
          setOverlay(false);
          Swal.fire({
            title: 'Exito!',
            text: JSON.stringify(result.data.person),
            icon: 'success',
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(function (result) {
            window.location.href = route('login');
          });
        } else {
          setMessage(JSON.stringify(result.data));
          setOverlay(false);
        }
      })["catch"](function (error) {
        console.log("catch ", error);
        setOverlay(false);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          /* console.log("1 " +JSON.stringify(error.response.data));
          console.log("2 " +JSON.stringify(error.response.status));
          console.log("3 " +JSON.stringify(error.response.headers)); */
          if (error.response.status >= 500) {
            setMessage("Error de Sistema, Favor contactar al administrador");
          } else {
            var _error$response, _error$response$data;
            if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && _error$response$data.errors) {
              var errors = error.response.data.errors;
              fieldsForm.errors = errors;
            } else {
              setMessage("Error al Registrar, Favor contactar al administrador");
            }
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log("4 " +JSON.stringify(error.request));
          setMessage("Error al Registrar, Favor contactar al administrador");
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log('5 Error', error.message);
          setMessage("Error al Registrar, Favor contactar al administrador");
        }
      });
    }
    function createNickName() {
      var names = fieldsForm.nombre.split(" ");
      var apell = fieldsForm.apellido.split(" ");
      var nickName = names[0].trim() + "." + apell[0].trim();
      fieldsForm.nick_name = nickName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function updateRegion() {
      (0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.getList)('/region/list/' + fieldsForm.pais_recidencia).then(function (data) {
        setRegion(data);
      });
    }
    var checkDigit = function checkDigit(event) {
      var pattern = /^[\d\s()+-]+$/;
      if (!pattern.test(event.key) && event.which !== 46 && event.which !== 8) {
        event.preventDefault();
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      return setOverlay(true);
    });

    /** En vez de hacer esto, esta información se obtiene automaticamente desde el renderizado de la pagina por el controllador
     * const props = defineProps({
      genders: { type: Array, default: [] },
      civilStatus: { type: Array, default: [] },
      nationalities: { type: Array, default: [] },
      countries:{ type: Array, default: [] },
      ...etc
    });
     */
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return setTimeout(function () {
        (0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.getList)('/gender/list').then(function (data) {
          setGenders(data);
        });
        (0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.getList)('/civilStatus/list').then(function (data) {
          setCivilStatus(data);
        });
        (0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.getList)('/nationality/list').then(function (data) {
          setNationality(data);
        });
        (0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.getList)('/country/list').then(function (data) {
          setCountry(data);
        });
        initialize();
      }, 1700);
    });
    var __returned__ = {
      loadingPage: loadingPage,
      expand: expand,
      setExpand: setExpand,
      message: message,
      setOverlay: setOverlay,
      setMessage: setMessage,
      formRegister: formRegister,
      fieldsForm: fieldsForm,
      mailConfirmEqualMail: mailConfirmEqualMail,
      passConfirmEqualPass: passConfirmEqualPass,
      genderList: genderList,
      setGenders: setGenders,
      civilStatusList: civilStatusList,
      setCivilStatus: setCivilStatus,
      nationalityList: nationalityList,
      setNationality: setNationality,
      countryList: countryList,
      setCountry: setCountry,
      regionList: regionList,
      setRegion: setRegion,
      cityList: cityList,
      setCity: setCity,
      occupationList: occupationList,
      setOccupation: setOccupation,
      initialize: initialize,
      validateForm: validateForm,
      handleSubmit: handleSubmit,
      createNickName: createNickName,
      updateRegion: updateRegion,
      checkDigit: checkDigit,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      get getList() {
        return _constants_form__WEBPACK_IMPORTED_MODULE_1__.getList;
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
      get corona() {
        return _public_images_corona_png__WEBPACK_IMPORTED_MODULE_7__["default"];
      },
      get tween() {
        return _public_images_tweens_png__WEBPACK_IMPORTED_MODULE_8__["default"];
      },
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_9__.useForm;
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
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
              "left": "38%",
              "top": "6%"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.corona,
                inline: "",
                cover: "",
                height: "auto",
                width: "4%"
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
              "left": "57%",
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
                src: $setup.tween,
                inline: "",
                cover: "",
                height: "auto",
                width: "2%"
              }, null, 8 /* PROPS */, ["src"])];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_alert, {
        closable: "",
        title: "Error Message",
        "model-value": $setup.message.length !== 0,
        text: $setup.message,
        type: "error",
        mode: "slide-y-reverse-transition",
        "class": "elevation-7"
      }, null, 8 /* PROPS */, ["model-value", "text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_expand_x_transition, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_form, {
            onSubmit: $setup.validateForm,
            ref: "formRegister",
            "lazy-validation": ""
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
                        modelValue: $setup.fieldsForm.nombre,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                          return $setup.fieldsForm.nombre = $event;
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
                        rules: [_ctx.rules.required, _ctx.rules.text_valid],
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
                        modelValue: $setup.fieldsForm.apellido,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                          return $setup.fieldsForm.apellido = $event;
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
                        rules: [_ctx.rules.required, _ctx.rules.text_valid],
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
                        modelValue: $setup.fieldsForm.dni,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                          return $setup.fieldsForm.dni = $event;
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
                        "error-messages": $setup.fieldsForm.errors.dni,
                        clearable: "",
                        tabindex: "3"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
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
                        modelValue: $setup.fieldsForm.fecha_nacimiento,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                          return $setup.fieldsForm.fecha_nacimiento = $event;
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
                        elevation: "15",
                        max: new Date(Date.now() - new Date().getTimezoneOffset() * 60000 - 87600 * 60 * 60000).toISOString().substring(0, 10),
                        min: "1950-01-01",
                        "active-picker.sync": "YEAR",
                        tabindex: "4"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "max"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.genero_id,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                          return $setup.fieldsForm.genero_id = $event;
                        }),
                        name: "genero_id",
                        label: "Género",
                        items: $setup.genderList,
                        "item-title": "nombre",
                        "item-value": "id",
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "5"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.estado_civil_id,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                          return $setup.fieldsForm.estado_civil_id = $event;
                        }),
                        name: "estado_civil_id",
                        label: "Estado Civil",
                        items: $setup.civilStatusList,
                        "item-title": "estado",
                        "item-value": "id",
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "6"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
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
                        modelValue: $setup.fieldsForm.nacionalidad_id,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                          return $setup.fieldsForm.nacionalidad_id = $event;
                        }),
                        name: "nacionalidad",
                        label: "Nacionalidad",
                        items: $setup.nationalityList,
                        "item-title": "nombre",
                        "item-value": "id",
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "7"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.pais_recidencia,
                        "onUpdate:modelValue": [_cache[7] || (_cache[7] = function ($event) {
                          return $setup.fieldsForm.pais_recidencia = $event;
                        }), $setup.updateRegion],
                        name: "pais",
                        label: "País",
                        items: $setup.countryList,
                        "item-title": "nombre",
                        "item-value": "id",
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "8"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.region_id,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                          return $setup.fieldsForm.region_id = $event;
                        }),
                        name: "region_id",
                        label: "Region",
                        items: $setup.regionList,
                        "item-title": "nombre",
                        "item-value": "id",
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "9"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.ciudad,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                          return $setup.fieldsForm.ciudad = $event;
                        }),
                        label: "Ciudad/Comuna",
                        variant: "outlined",
                        placeholder: "Mi comuna",
                        name: "ciudad",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.counter_dir],
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
                        modelValue: $setup.fieldsForm.direccion,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                          return $setup.fieldsForm.direccion = $event;
                        }),
                        label: "Dirección",
                        variant: "outlined",
                        placeholder: "Romano",
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
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.ocupacion,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                          return $setup.fieldsForm.ocupacion = $event;
                        }),
                        label: "Ocupación",
                        variant: "outlined",
                        placeholder: "Jhon",
                        name: "ocupacion",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.counter_dir],
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
                        modelValue: $setup.fieldsForm.telefono,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
                          return $setup.fieldsForm.telefono = $event;
                        }),
                        label: "Teléfono",
                        variant: "outlined",
                        placeholder: "+## ###########",
                        maxlength: 15,
                        name: "telefono",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.phone],
                        clearable: "",
                        onKeydown: $setup.checkDigit,
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
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.email,
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                          return $setup.fieldsForm.email = $event;
                        }),
                        label: "Correo Electrónico",
                        variant: "outlined",
                        placeholder: "johndoe@gmail.com",
                        name: "email",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.email],
                        "error-messages": $setup.fieldsForm.errors.email,
                        clearable: "",
                        tabindex: "14"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.email_confirm,
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                          return $setup.fieldsForm.email_confirm = $event;
                        }),
                        label: "Confirme Correo Electrónico",
                        variant: "outlined",
                        placeholder: "johndoe@gmail.com",
                        name: "mail",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, _ctx.rules.email, $setup.mailConfirmEqualMail],
                        clearable: "",
                        tabindex: "15"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.password,
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                          return $setup.fieldsForm.password = $event;
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
                        rules: [_ctx.rules.required, _ctx.rules.counter, _ctx.rules.counter_pass],
                        clearable: "",
                        tabindex: "16"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.password_confirm,
                        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
                          return $setup.fieldsForm.password_confirm = $event;
                        }),
                        label: "Confirme Contraseńa",
                        variant: "outlined",
                        placeholder: "******",
                        name: "password_confirm",
                        type: "password",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, $setup.passConfirmEqualPass, _ctx.rules.counter_pass],
                        clearable: "",
                        tabindex: "17"
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
          }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.expand]])];
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
  }, 8 /* PROPS */, ["model-value"])], 64 /* STABLE_FRAGMENT */);
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
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "getQueryMap": () => (/* binding */ getQueryMap),
/* harmony export */   "removeValid": () => (/* binding */ removeValid),
/* harmony export */   "validInput": () => (/* binding */ validInput)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var getList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then(function (result) {
            if (result) {
              if (result.status === 200) {
                return result.data;
              } else {
                return [];
              }
            } else {
              return [];
            }
          })["catch"](function (error) {
            console.log(JSON.stringify(error.response.data.message));
            return [];
          });
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Get a query map based on a query string.
 *
 * The function will populate a map variable with key value pairs of the parameters.
 *
 * If there is more than one of the same key, the function will populate an array in the map with the multiple values within it
 *
 * @param  {string} query The query string - the question mark is optional
 * @return {object}       key value pairs of the parameter / value of the parameter
 */
var getQueryMap = function getQueryMap(query) {
  if (typeof query !== 'string') {
    return null;
  }
  var toType = function toType(a) {
      return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    },
    map = {};

  // map the hit query into a proper object
  query.replace(/([^&|\?=]+)=?([^&]*)(?:&+|$)/g, function (match, key, value) {
    if (key in map) {
      // the key already exists, so we need to check if it is an array, if not, make it an array and add the new value
      if (toType(map[key]) !== 'array') {
        // it's not an array - make it an array
        map[key] = [map[key]];
      }
      // push the new value into the array
      map[key].push(decodeURIComponent(value));
    } else {
      // put the value into the map
      map[key] = decodeURIComponent(value);
    }
  });
  return map;
};

/***/ }),

/***/ "./public/images/corona.png":
/*!**********************************!*\
  !*** ./public/images/corona.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/corona.png?ad4513f3611a25ad55e71bfa21e8fe8e");

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