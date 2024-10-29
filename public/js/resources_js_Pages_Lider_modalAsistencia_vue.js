"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Lider_modalAsistencia_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isType */ "./resources/js/utils/isType.js");
/* harmony import */ var _utils_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/proxy */ "./resources/js/utils/proxy.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'modalAsistencia',
  props: {
    idGrupo: {
      type: Number,
      "default": -1
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isDisabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {});
    var alumnos = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var semanas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var estados = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var colorEstados = (0,_utils_proxy__WEBPACK_IMPORTED_MODULE_2__.CustomProxy)({
      1: 'gray',
      2: 'success',
      3: 'error',
      4: 'warning'
    }, 'dark');
    var headers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      title: 'Nombre',
      key: 'usuario.nombreCompleto',
      width: '20rem'
    }, {
      title: 'Semanas',
      align: 'center',
      children: []
    }]);
    var buscarAsistencias = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _data$inscripciones, _data$semanas, _data$estados, response, data, genSemana, i, _data$semanas2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              loading.value = true;
              _context.prev = 1;
              _context.next = 4;
              return axios.get(route('mis-salones.asistencia', props.idGrupo));
            case 4:
              response = _context.sent;
              data = response.data;
              alumnos.value = (_data$inscripciones = data === null || data === void 0 ? void 0 : data.inscripciones) !== null && _data$inscripciones !== void 0 ? _data$inscripciones : [];
              semanas.value = (_data$semanas = data === null || data === void 0 ? void 0 : data.semanas) !== null && _data$semanas !== void 0 ? _data$semanas : 0;
              estados.value = (_data$estados = data === null || data === void 0 ? void 0 : data.estados) !== null && _data$estados !== void 0 ? _data$estados : [];
              genSemana = [];
              for (i = 0; i < ((_data$semanas2 = data === null || data === void 0 ? void 0 : data.semanas) !== null && _data$semanas2 !== void 0 ? _data$semanas2 : 0); i++) {
                genSemana.push({
                  title: "".concat(i + 1),
                  key: "semana_".concat(i + 1),
                  sortable: false,
                  width: '1rem',
                  align: 'center'
                });
              }

              // Asignar los encabezados dinámicamente
              headers.value = [{
                title: 'Nombre',
                key: 'usuario.nombreCompleto',
                width: '20rem'
              }, {
                title: 'Semanas',
                align: 'center',
                children: genSemana
              }];
              _context.next = 17;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
            case 17:
              loading.value = false;
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 14]]);
      }));
      return function buscarAsistencias() {
        return _ref2.apply(this, arguments);
      };
    }();
    var onClickSave = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var body, keys, asistencias, _yield$axios$put, data, message;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              loading.value = true;
              body = {
                inscrito: [],
                presente: [],
                ausente: [],
                recuperado: [],
                noAplica: [],
                otros: []
              };
              keys = (0,_utils_proxy__WEBPACK_IMPORTED_MODULE_2__.CustomProxy)({
                1: 'inscrito',
                2: 'presente',
                3: 'ausente',
                4: 'recuperado',
                5: 'noAplica'
              }, 'otros');
              asistencias = [];
              alumnos.value.forEach(function (inscripcion) {
                asistencias = [].concat(_toConsumableArray(asistencias), _toConsumableArray(inscripcion.asistencias));
              });
              asistencias.forEach(function (asistencia) {
                var key = keys[asistencia.estado_asistencia_id];
                body[key].push(asistencia);
              });
              _context2.prev = 6;
              _context2.next = 9;
              return axios.put(route('mis-salones.update', props.idGrupo), body);
            case 9:
              _yield$axios$put = _context2.sent;
              data = _yield$axios$put.data;
              if (data !== null && data !== void 0 && data.message) {
                _context2.next = 13;
                break;
              }
              throw new Error('No message');
            case 13:
              message = data.message; // Swal.fire({ title: 'Exito!', text: message, icon: 'success' });
              _context2.next = 19;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](6);
              console.log('error:', _context2.t0);
              // if (err?.response?.data?.server) {
              //   const { server: message } = err.response.data;
              //   Swal.fire({ title: 'Error!', text: message, icon: 'error' });
              // }
            case 19:
              loading.value = false;
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[6, 16]]);
      }));
      return function onClickSave() {
        return _ref3.apply(this, arguments);
      };
    }();
    var onClickUpdateValueAsistencia = function onClickUpdateValueAsistencia(item, i_inscripcion, i_asistencia) {
      var _alumnos$value$i_insc, _alumnos$value$i_insc2, _alumnos$value$i_insc3;
      var estado = (_alumnos$value$i_insc = alumnos.value[i_inscripcion]) === null || _alumnos$value$i_insc === void 0 ? void 0 : (_alumnos$value$i_insc2 = _alumnos$value$i_insc.asistencias) === null || _alumnos$value$i_insc2 === void 0 ? void 0 : (_alumnos$value$i_insc3 = _alumnos$value$i_insc2[i_asistencia]) === null || _alumnos$value$i_insc3 === void 0 ? void 0 : _alumnos$value$i_insc3.estado_asistencia_id;
      if (!(0,_utils_isType__WEBPACK_IMPORTED_MODULE_1__.Truthty)(estado)) return;
      alumnos.value[i_inscripcion].asistencias[i_asistencia].estado_asistencia_id = item.id;
      alumnos.value[i_inscripcion].asistencias[i_asistencia].estado_asistencia = _objectSpread({}, item);
    };
    var __returned__ = {
      props: props,
      loading: loading,
      isDisabled: isDisabled,
      alumnos: alumnos,
      semanas: semanas,
      estados: estados,
      colorEstados: colorEstados,
      headers: headers,
      buscarAsistencias: buscarAsistencias,
      onClickSave: onClickSave,
      onClickUpdateValueAsistencia: onClickUpdateValueAsistencia,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get Truthty() {
        return _utils_isType__WEBPACK_IMPORTED_MODULE_1__.Truthty;
      },
      get CustomProxy() {
        return _utils_proxy__WEBPACK_IMPORTED_MODULE_2__.CustomProxy;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=template&id=10cb691a":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=template&id=10cb691a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-alert");
  var _component_v_chip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-chip");
  var _component_v_list_item_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-list-item-title");
  var _component_v_list_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-list-item");
  var _component_v_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-list");
  var _component_v_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-menu");
  var _component_v_data_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-data-table");
  var _component_v_card_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card-text");
  var _component_v_card_actions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card-actions");
  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");
  var _component_v_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-dialog");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-dialog v-model=\"dialog\" max-width=\"800px\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_dialog, {
    width: "auto"
  }, {
    activator: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var activatorProps = _ref.props;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        color: "success",
        onClick: $setup.buscarAsistencias
      }, activatorProps), {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Asistencia ")];
        }),
        _: 2 /* DYNAMIC */
      }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var isActive = _ref2.isActive;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
        title: "Asistencias",
        loading: $setup.loading
      }, {
        append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
            icon: "mdi-close",
            variant: "text",
            onClick: function onClick($event) {
              return isActive.value = false;
            }
          }, null, 8 /* PROPS */, ["onClick"])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_text, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_data_table, {
                headers: $setup.headers,
                items: $setup.alumnos,
                "class": "elevation-1 rounded",
                "hide-default-footer": ""
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({
                "no-data": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_alert, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No hay datos disponibles")];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 2 /* DYNAMIC */
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.semanas, function (n) {
                return {
                  name: "item.semana_".concat(n),
                  fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                    var item = _ref3.item,
                      index = _ref3.index;
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <pre>{{ item.asistencias[n - 1]?.estado_asistencia?.estado }}</pre> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_menu, null, {
                      activator: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                        var _item$asistencias;
                        var props = _ref4.props;
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_chip, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(props, {
                          color: $setup.colorEstados[(_item$asistencias = item.asistencias[n - 1]) === null || _item$asistencias === void 0 ? void 0 : _item$asistencias.estado_asistencia_id],
                          variant: "elevated",
                          "class": "text-uppercase",
                          size: "large"
                        }), {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            var _item$asistencias2, _item$asistencias2$es;
                            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_item$asistencias2 = item.asistencias[n - 1]) === null || _item$asistencias2 === void 0 ? void 0 : (_item$asistencias2$es = _item$asistencias2.estado_asistencia) === null || _item$asistencias2$es === void 0 ? void 0 : _item$asistencias2$es.estado[0]), 1 /* TEXT */)];
                          }),
                          _: 2 /* DYNAMIC */
                        }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["color"])];
                      }),
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list, null, {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.estados, function (est) {
                              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_list_item, {
                                key: est.id,
                                value: est.id,
                                onClick: function onClick($event) {
                                  return $setup.onClickUpdateValueAsistencia(est, index, n - 1);
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list_item_title, null, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(est.estado), 1 /* TEXT */)];
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */)];
                                }),
                                _: 2 /* DYNAMIC */
                              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value", "onClick"]);
                            }), 128 /* KEYED_FRAGMENT */))];
                          }),
                          _: 2 /* DYNAMIC */
                        }, 1024 /* DYNAMIC_SLOTS */)];
                      }),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */)];
                  })
                };
              })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["headers", "items"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_actions, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                color: "secondary",
                onClick: function onClick($event) {
                  return isActive.value = false;
                },
                loading: $setup.loading
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancelar")];
                }),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick", "loading"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                color: "primary",
                onClick: $setup.onClickSave,
                loading: $setup.loading
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Guardar")];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["loading"])];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["loading"])];
    }),
    _: 1 /* STABLE */
  })], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/utils/isType.js":
/*!**************************************!*\
  !*** ./resources/js/utils/isType.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Truthty": () => (/* binding */ Truthty),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Determines if all elements in the dataset are truthy.
 * @param {...any[]} data - The dataset to check.
 * @returns {boolean} Returns true if all elements are truthy, otherwise returns false.
 */
var Truthty = function Truthty() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }
  if (data.length === 0) return false;
  var values = data.map(function (d) {
    if (d === undefined || d === null || !d && d !== 0) return false;
    if (Array.isArray(d)) return d.length !== 0;
    if (_typeof(d) === 'object' && Object.keys(d).length === 0) return false;
    return true;
  });
  return !values.includes(false);
};

/**
 * Checks if the dataset is empty or invalid.
 * @param {any} data - The dataset to check.
 * @returns {boolean} Returns true if the dataset is empty or invalid, otherwise returns false.
 */
var isEmpty = function isEmpty(data) {
  return typeof data === 'undefined' || !Truthty(data) || data === '';
};

/**
 * Determines if the object is a real object (not an array or an empty object).
 * @param {any} data - The object to check.
 * @returns {boolean} Returns true if the object is a real object, otherwise returns false.
 */
var isObject = function isObject(data) {
  return data !== null && _typeof(data) === 'object';
};

/***/ }),

/***/ "./resources/js/utils/proxy.js":
/*!*************************************!*\
  !*** ./resources/js/utils/proxy.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomProxy": () => (/* binding */ CustomProxy)
/* harmony export */ });
// export const CustomProxy = <T extends { [index: string]: any }, K>(obj: T, defaultReturn: K) => {
//   const element = new Proxy(obj, {
//     get(target, prop: string | symbol) {
//       return prop in target ? target[prop as keyof typeof target] : defaultReturn;
//     },
//   });
//   return element as T & { [index: string]: K };
// };
var CustomProxy = function CustomProxy(obj, defaultReturn) {
  var element = new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : defaultReturn;
    }
  });
  return element;
};

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

/***/ "./resources/js/Pages/Lider/modalAsistencia.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Lider/modalAsistencia.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalAsistencia_vue_vue_type_template_id_10cb691a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAsistencia.vue?vue&type=template&id=10cb691a */ "./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=template&id=10cb691a");
/* harmony import */ var _modalAsistencia_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAsistencia.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_modalAsistencia_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_modalAsistencia_vue_vue_type_template_id_10cb691a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Lider/modalAsistencia.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modalAsistencia_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modalAsistencia_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modalAsistencia.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=template&id=10cb691a":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=template&id=10cb691a ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modalAsistencia_vue_vue_type_template_id_10cb691a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modalAsistencia_vue_vue_type_template_id_10cb691a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modalAsistencia.vue?vue&type=template&id=10cb691a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Lider/modalAsistencia.vue?vue&type=template&id=10cb691a");


/***/ })

}]);