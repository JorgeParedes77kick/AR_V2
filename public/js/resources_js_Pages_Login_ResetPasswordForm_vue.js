"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_ResetPasswordForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_logo_gp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/images/logo_gp.png */ "./public/images/logo_gp.png");
/* harmony import */ var _public_images_logo_global_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/images/logo_global.png */ "./public/images/logo_global.png");
/* harmony import */ var _public_images_mujer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/images/mujer.png */ "./public/images/mujer.png");
/* harmony import */ var _public_images_libro_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/images/libro.png */ "./public/images/libro.png");
/* harmony import */ var _public_images_corona_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/images/corona.png */ "./public/images/corona.png");
/* harmony import */ var _public_images_tweens_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../public/images/tweens.png */ "./public/images/tweens.png");
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
          return !!value || 'Campo Requerido.';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Correo no válido';
        }
      }
    };
  },
  methods: {
    validate: function validate() {
      this.$refs.formForgotPass.validate();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'ResetPasswordForm',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var loadingPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var setOverlay = function setOverlay(v) {
      return loadingPage.value = v;
    };
    var message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var setMessage = function setMessage(v) {
      return message.value = v;
    };
    var mailConfirmEqualMail = function mailConfirmEqualMail() {
      return fieldsForm.email_confirm === fieldsForm.email || "Correo Confirmación no coincide";
    };
    var fieldsForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      email: "",
      email_confirm: ""
    });
    var formForgotPass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var validateForm = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var _yield$formForgotPass, valid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              fieldsForm.clearErrors();
              console.log("1 ");
              _context.next = 5;
              return formForgotPass.value.validate();
            case 5:
              _yield$formForgotPass = _context.sent;
              valid = _yield$formForgotPass.valid;
              console.log("2 ");
              if (!valid) {
                _context.next = 11;
                break;
              }
              _context.next = 11;
              return submitForm();
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function validateForm(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var submitForm = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(form) {
        var _result$data, result, _message, _err$response, _err$response$data, _err$response2, _err$response2$data, _message2, errors;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              setOverlay(true);
              console.log("3 ");
              _context2.prev = 2;
              console.log(fieldsForm);
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post(route('password.email'), fieldsForm);
            case 6:
              result = _context2.sent;
              console.log("1 " + JSON.stringify(result));
              console.log("2 " + JSON.stringify(result.response));
              console.log("3 " + JSON.stringify(result.data));
              console.log("6 " + JSON.stringify(result.status));
              if (!(result !== null && result !== void 0 && (_result$data = result.data) !== null && _result$data !== void 0 && _result$data.message)) {
                _context2.next = 16;
                break;
              }
              _message = result.data.message;
              _context2.next = 15;
              return Swal.fire({
                title: 'Exito!',
                text: _message,
                icon: 'success'
              });
            case 15:
              window.location.href = route('login');
            case 16:
              _context2.next = 23;
              break;
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.response);
              if (_context2.t0 !== null && _context2.t0 !== void 0 && (_err$response = _context2.t0.response) !== null && _err$response !== void 0 && (_err$response$data = _err$response.data) !== null && _err$response$data !== void 0 && _err$response$data.server) {
                _message2 = _context2.t0.response.data.server;
                Swal.fire({
                  title: 'Error!',
                  text: _message2,
                  icon: 'error'
                });
              }
              if (_context2.t0 !== null && _context2.t0 !== void 0 && (_err$response2 = _context2.t0.response) !== null && _err$response2 !== void 0 && (_err$response2$data = _err$response2.data) !== null && _err$response2$data !== void 0 && _err$response2$data.errors) {
                errors = _context2.t0.response.data.errors;
                fieldsForm.errors = errors;
              }
            case 23:
              _context2.prev = 23;
              console.log("finally ");
              setOverlay(false);
              return _context2.finish(23);
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 18, 23, 27]]);
      }));
      return function submitForm(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    var __returned__ = {
      loadingPage: loadingPage,
      setOverlay: setOverlay,
      message: message,
      setMessage: setMessage,
      mailConfirmEqualMail: mailConfirmEqualMail,
      fieldsForm: fieldsForm,
      formForgotPass: formForgotPass,
      validateForm: validateForm,
      submitForm: submitForm,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=template&id=47ab3a0f":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=template&id=47ab3a0f ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("legend", null, " ", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-img");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-alert");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-form");
  var _component_v_progress_circular = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-progress-circular");
  var _component_v_overlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-overlay");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_container, {
    style: {
      "background-color": "#222222",
      "height": "100vh",
      "width": "40%"
    },
    "class": "d-flex justify-center align-center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
        align: "stretch"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            fuild: "",
            "class": "float-md position-absolute",
            style: {
              "left": "34%"
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
            "class": "float-md position-absolute",
            style: {
              "left": "38%"
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
            "class": "float-md position-absolute",
            style: {
              "left": "57%"
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
            "class": "float-md position-absolute",
            style: {
              "left": "63%"
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
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
            cols: "12",
            "class": "d-flex justify-center align-center"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                src: $setup.logGP,
                inline: "",
                cover: "",
                height: "auto",
                width: "25%"
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
            "class": "d-flex justify-center align-center"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_form, {
                onSubmit: $setup.validateForm,
                ref: "formForgotPass"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                    "no-gutters": ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        cols: "12",
                        sm: "12",
                        "class": "d-flex justify-center align-center"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                            modelValue: $setup.fieldsForm.email,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                              return $setup.fieldsForm.email = $event;
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
                        sm: "12",
                        "class": "d-flex justify-center align-center"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                            modelValue: $setup.fieldsForm.email_confirm,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
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
                            tabindex: "2"
                          }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        cols: "12",
                        sm: "12",
                        "class": "d-flex justify-center align-center"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                            type: "submit",
                            block: "",
                            style: {
                              "background-color": "#99c5c0",
                              "font-weight": "bolder",
                              "font-size": "14pt",
                              "border-color": "beige",
                              "border-width": "2pt"
                            }
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Recuperar Contraseńa")];
                            }),
                            _: 1 /* STABLE */
                          })];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }, 512 /* NEED_PATCH */)];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_overlay, {
        "model-value": $setup.loadingPage,
        opacity: "0.80",
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

/***/ "./resources/js/Pages/Login/ResetPasswordForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Login/ResetPasswordForm.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPasswordForm_vue_vue_type_template_id_47ab3a0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordForm.vue?vue&type=template&id=47ab3a0f */ "./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=template&id=47ab3a0f");
/* harmony import */ var _ResetPasswordForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordForm.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ResetPasswordForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ResetPasswordForm_vue_vue_type_template_id_47ab3a0f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Login/ResetPasswordForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPasswordForm.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=template&id=47ab3a0f":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=template&id=47ab3a0f ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordForm_vue_vue_type_template_id_47ab3a0f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordForm_vue_vue_type_template_id_47ab3a0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPasswordForm.vue?vue&type=template&id=47ab3a0f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/ResetPasswordForm.vue?vue&type=template&id=47ab3a0f");


/***/ })

}]);