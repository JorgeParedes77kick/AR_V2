(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Register_RegisterPage_vue"],{

/***/ "./node_modules/@inertiajs/inertia-vue3/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue3/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js")),t=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"),n=e(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js")),o=__webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(){var e=[].slice.call(arguments),a="string"==typeof e[0]?e[0]:null,u=("string"==typeof e[0]?e[1]:e[0])||{},s=a?o.Inertia.restore(a):null,c=n(u),l=null,p=null,f=function(e){return e},d=t.reactive(i({},s?s.data:u,{isDirty:!1,errors:s?s.errors:{},hasErrors:!1,processing:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,data:function(){var e=this;return Object.keys(u).reduce(function(r,t){return r[t]=e[t],r},{})},transform:function(e){return f=e,this},defaults:function(e,r){var t;return c=void 0===e?this.data():Object.assign({},n(c),r?((t={})[e]=r,t):e),this},reset:function(){var e=[].slice.call(arguments),r=n(c);return Object.assign(this,0===e.length?r:Object.keys(r).filter(function(r){return e.includes(r)}).reduce(function(e,t){return e[t]=r[t],e},{})),this},setError:function(e,r){var t;return Object.assign(this.errors,r?((t={})[e]=r,t):e),this.hasErrors=Object.keys(this.errors).length>0,this},clearErrors:function(){var e=this,r=[].slice.call(arguments);return this.errors=Object.keys(this.errors).reduce(function(t,n){var o;return i({},t,r.length>0&&!r.includes(n)?((o={})[n]=e.errors[n],o):{})},{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit:function(e,r,t){var a=this,u=this;void 0===t&&(t={});var s=f(this.data()),d=i({},t,{onCancelToken:function(e){if(l=e,t.onCancelToken)return t.onCancelToken(e)},onBefore:function(e){if(u.wasSuccessful=!1,u.recentlySuccessful=!1,clearTimeout(p),t.onBefore)return t.onBefore(e)},onStart:function(e){if(u.processing=!0,t.onStart)return t.onStart(e)},onProgress:function(e){if(u.progress=e,t.onProgress)return t.onProgress(e)},onSuccess:function(e){try{var r=function(e){return c=n(a.data()),a.isDirty=!1,e};return a.processing=!1,a.progress=null,a.clearErrors(),a.wasSuccessful=!0,a.recentlySuccessful=!0,p=setTimeout(function(){return a.recentlySuccessful=!1},2e3),Promise.resolve(t.onSuccess?Promise.resolve(t.onSuccess(e)).then(r):r(null))}catch(e){return Promise.reject(e)}},onError:function(e){if(u.processing=!1,u.progress=null,u.clearErrors().setError(e),t.onError)return t.onError(e)},onCancel:function(){if(u.processing=!1,u.progress=null,t.onCancel)return t.onCancel()},onFinish:function(){if(u.processing=!1,u.progress=null,l=null,t.onFinish)return t.onFinish()}});"delete"===e?o.Inertia.delete(r,i({},d,{data:s})):o.Inertia[e](r,s,d)},get:function(e,r){this.submit("get",e,r)},post:function(e,r){this.submit("post",e,r)},put:function(e,r){this.submit("put",e,r)},patch:function(e,r){this.submit("patch",e,r)},delete:function(e,r){this.submit("delete",e,r)},cancel:function(){l&&l.cancel()},__rememberable:null===a,__remember:function(){return{data:this.data(),errors:this.errors}},__restore:function(e){Object.assign(this,e.data),this.setError(e.errors)}}));return t.watch(d,function(e){d.isDirty=!r(d.data(),c),a&&o.Inertia.remember(n(e.__remember()),a)},{immediate:!0,deep:!0}),d}var u={created:function(){var e=this;if(this.$options.remember){Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),"string"==typeof this.$options.remember&&(this.$options.remember={data:[this.$options.remember]}),"string"==typeof this.$options.remember.data&&(this.$options.remember={data:[this.$options.remember.data]});var r=this.$options.remember.key instanceof Function?this.$options.remember.key.call(this):this.$options.remember.key,t=o.Inertia.restore(r),a=this.$options.remember.data.filter(function(r){return!(null!==e[r]&&"object"==typeof e[r]&&!1===e[r].__rememberable)}),u=function(r){return null!==e[r]&&"object"==typeof e[r]&&"function"==typeof e[r].__remember&&"function"==typeof e[r].__restore};a.forEach(function(s){void 0!==e[s]&&void 0!==t&&void 0!==t[s]&&(u(s)?e[s].__restore(t[s]):e[s]=t[s]),e.$watch(s,function(){o.Inertia.remember(a.reduce(function(r,t){var o;return i({},r,((o={})[t]=n(u(t)?e[t].__remember():e[t]),o))},{}),r)},{immediate:!0,deep:!0})})}}},s=t.ref(null),c=t.ref({}),l=t.ref(null),p=null,f={name:"Inertia",props:{initialPage:{type:Object,required:!0},initialComponent:{type:Object,required:!1},resolveComponent:{type:Function,required:!1},titleCallback:{type:Function,required:!1,default:function(e){return e}},onHeadUpdate:{type:Function,required:!1,default:function(){return function(){}}}},setup:function(e){var r=e.initialPage,n=e.initialComponent,a=e.resolveComponent,u=e.titleCallback,f=e.onHeadUpdate;s.value=n?t.markRaw(n):null,c.value=r,l.value=null;var d="undefined"==typeof window;return p=o.createHeadManager(d,u,f),d||o.Inertia.init({initialPage:r,resolveComponent:a,swapComponent:function(e){try{return s.value=t.markRaw(e.component),c.value=e.page,l.value=e.preserveState?l.value:Date.now(),Promise.resolve()}catch(e){return Promise.reject(e)}}}),function(){if(s.value){s.value.inheritAttrs=!!s.value.inheritAttrs;var e=t.h(s.value,i({},c.value.props,{key:l.value}));return s.value.layout?"function"==typeof s.value.layout?s.value.layout(t.h,e):(Array.isArray(s.value.layout)?s.value.layout:[s.value.layout]).concat(e).reverse().reduce(function(e,r){return r.inheritAttrs=!!r.inheritAttrs,t.h(r,i({},c.value.props),function(){return e})}):e}}}},d={install:function(e){o.Inertia.form=a,Object.defineProperty(e.config.globalProperties,"$inertia",{get:function(){return o.Inertia}}),Object.defineProperty(e.config.globalProperties,"$page",{get:function(){return c.value}}),Object.defineProperty(e.config.globalProperties,"$headManager",{get:function(){return p}}),e.mixin(u)}},h={props:{title:{type:String,required:!1}},data:function(){return{provider:this.$headManager.createProvider()}},beforeUnmount:function(){this.provider.disconnect()},methods:{isUnaryTag:function(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1},renderTagStart:function(e){e.props=e.props||{},e.props.inertia=void 0!==e.props["head-key"]?e.props["head-key"]:"";var r=Object.keys(e.props).reduce(function(r,t){var n=e.props[t];return["key","head-key"].includes(t)?r:""===n?r+" "+t:r+" "+t+'="'+n+'"'},"");return"<"+e.type+r+">"},renderTagChildren:function(e){var r=this;return"string"==typeof e.children?e.children:e.children.reduce(function(e,t){return e+r.renderTag(t)},"")},renderTag:function(e){if("Symbol(Text)"===e.type.toString())return e.children;if("Symbol()"===e.type.toString())return"";if("Symbol(Comment)"===e.type.toString())return"";var r=this.renderTagStart(e);return e.children&&(r+=this.renderTagChildren(e)),this.isUnaryTag(e)||(r+="</"+e.type+">"),r},addTitleElement:function(e){return this.title&&!e.find(function(e){return e.startsWith("<title")})&&e.push("<title inertia>"+this.title+"</title>"),e},renderNodes:function(e){var r=this;return this.addTitleElement(e.flatMap(function(e){return"Symbol(Fragment)"===e.type.toString()?e.children:e}).map(function(e){return r.renderTag(e)}).filter(function(e){return e}))}},render:function(){this.provider.update(this.renderNodes(this.$slots.default?this.$slots.default():[]))}},m={name:"InertiaLink",props:{as:{type:String,default:"a"},data:{type:Object,default:function(){return{}}},href:{type:String},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:null},only:{type:Array,default:function(){return[]}},headers:{type:Object,default:function(){return{}}},queryStringArrayFormat:{type:String,default:"brackets"}},setup:function(e,r){var n=r.slots,a=r.attrs;return function(e){var r=e.as.toLowerCase(),u=e.method.toLowerCase(),s=o.mergeDataIntoQueryString(u,e.href||"",e.data,e.queryStringArrayFormat),c=s[0],l=s[1];return"a"===r&&"get"!==u&&console.warn('Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.\n\nPlease specify a more appropriate element using the "as" attribute. For example:\n\n<Link href="'+c+'" method="'+u+'" as="button">...</Link>'),t.h(e.as,i({},a,"a"===r?{href:c}:{},{onClick:function(r){var t;o.shouldIntercept(r)&&(r.preventDefault(),o.Inertia.visit(c,{data:l,method:u,replace:e.replace,preserveScroll:e.preserveScroll,preserveState:null!=(t=e.preserveState)?t:"get"!==u,only:e.only,headers:e.headers,onCancelToken:a.onCancelToken||function(){return{}},onBefore:a.onBefore||function(){return{}},onStart:a.onStart||function(){return{}},onProgress:a.onProgress||function(){return{}},onFinish:a.onFinish||function(){return{}},onCancel:a.onCancel||function(){return{}},onSuccess:a.onSuccess||function(){return{}},onError:a.onError||function(){return{}}}))}}),n)}}};exports.App=f,exports.Head=h,exports.InertiaApp=f,exports.InertiaHead=h,exports.InertiaLink=m,exports.Link=m,exports.app=f,exports.createInertiaApp=function(e){try{var r,n,o,i,a,u,s;n=void 0===(r=e.id)?"app":r,o=e.resolve,i=e.setup,a=e.title,u=e.page,s=e.render;var c="undefined"==typeof window,l=c?null:document.getElementById(n),p=u||JSON.parse(l.dataset.page),h=function(e){return Promise.resolve(o(e)).then(function(e){return e.default||e})},m=[];return Promise.resolve(h(p.component).then(function(e){return i({el:l,app:f,App:f,props:{initialPage:p,initialComponent:e,resolveComponent:h,titleCallback:a,onHeadUpdate:c?function(e){return m=e}:null},plugin:d})})).then(function(e){return function(){if(c)return Promise.resolve(s(t.createSSRApp({render:function(){return t.h("div",{id:n,"data-page":JSON.stringify(p),innerHTML:s(e)})}}))).then(function(e){return{head:m,body:e}})}()})}catch(e){return Promise.reject(e)}},exports.link=m,exports.plugin=d,exports.useForm=a,exports.usePage=function(){return{props:t.computed(function(){return c.value.props}),url:t.computed(function(){return c.value.url}),component:t.computed(function(){return c.value.component}),version:t.computed(function(){return c.value.version})}},exports.useRemember=function(e,r){if("object"==typeof e&&null!==e&&!1===e.__rememberable)return e;var i=o.Inertia.restore(r),a=t.isReactive(e)?t.reactive:t.ref,u="function"==typeof e.__remember&&"function"==typeof e.__restore,s=void 0===i?e:a(u?e.__restore(i):i);return t.watch(s,function(t){o.Inertia.remember(n(u?e.__remember():t),r)},{immediate:!0,deep:!0}),s};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/inertia/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@inertiajs/inertia/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! axios */ "./node_modules/axios/index.js")),n=__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"),i=e(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o,s={modal:null,listener:null,show:function(e){var t=this;"object"==typeof e&&(e="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(e));var n=document.createElement("html");n.innerHTML=e,n.querySelectorAll("a").forEach(function(e){return e.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return t.hide()});var i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(n.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(e){27===e.keyCode&&this.hide()}};function a(e,t){var n;return function(){var i=arguments,r=this;clearTimeout(n),n=setTimeout(function(){return e.apply(r,[].slice.call(i))},t)}}function c(e,t,n){for(var i in void 0===t&&(t=new FormData),void 0===n&&(n=null),e=e||{})Object.prototype.hasOwnProperty.call(e,i)&&d(t,l(n,i),e[i]);return t}function l(e,t){return e?e+"["+t+"]":t}function d(e,t,n){return Array.isArray(n)?Array.from(n.keys()).forEach(function(i){return d(e,l(t,i.toString()),n[i])}):n instanceof Date?e.append(t,n.toISOString()):n instanceof File?e.append(t,n,n.name):n instanceof Blob?e.append(t,n):"boolean"==typeof n?e.append(t,n?"1":"0"):"string"==typeof n?e.append(t,n):"number"==typeof n?e.append(t,""+n):null==n?e.append(t,""):void c(n,e,t)}function u(e){return new URL(e.toString(),window.location.toString())}function h(e,t,r,o){void 0===o&&(o="brackets");var s=/^https?:\/\//.test(t.toString()),a=s||t.toString().startsWith("/"),c=!a&&!t.toString().startsWith("#")&&!t.toString().startsWith("?"),l=t.toString().includes("?")||e===exports.Method.GET&&Object.keys(r).length,d=t.toString().includes("#"),u=new URL(t.toString(),"http://localhost");return e===exports.Method.GET&&Object.keys(r).length&&(u.search=n.stringify(i(n.parse(u.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:o}),r={}),[[s?u.protocol+"//"+u.host:"",a?u.pathname:"",c?u.pathname.substring(1):"",l?u.search:"",d?u.hash:""].join(""),r]}function p(e){return(e=new URL(e.href)).hash="",e}function f(e,t){return document.dispatchEvent(new CustomEvent("inertia:"+e,t))}(o=exports.Method||(exports.Method={})).GET="get",o.POST="post",o.PUT="put",o.PATCH="patch",o.DELETE="delete";var v=function(e){return f("finish",{detail:{visit:e}})},m=function(e){return f("navigate",{detail:{page:e}})},g="undefined"==typeof window,w=function(){function e(){this.visitId=null}var n=e.prototype;return n.init=function(e){var t=e.resolveComponent,n=e.swapComponent;this.page=e.initialPage,this.resolveComponent=t,this.swapComponent=n,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},n.handleInitialPageVisit=function(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(function(){return m(e)})},n.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",a(this.handleScrollEvent.bind(this),100),!0)},n.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},n.handleScrollEvent=function(e){"function"==typeof e.target.hasAttribute&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},n.saveScrollPositions=function(){this.replaceState(r({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(e){return{top:e.scrollTop,left:e.scrollLeft}})}))},n.resetScrollPositions=function(){var e;window.scrollTo(0,0),this.scrollRegions().forEach(function(e){"function"==typeof e.scrollTo?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&(null==(e=document.getElementById(window.location.hash.slice(1)))||e.scrollIntoView())},n.restoreScrollPositions=function(){var e=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(t,n){var i=e.page.scrollRegions[n];i&&("function"==typeof t.scrollTo?t.scrollTo(i.left,i.top):(t.scrollTop=i.top,t.scrollLeft=i.left))})},n.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&"back_forward"===window.performance.getEntriesByType("navigation")[0].type},n.handleBackForwardVisit=function(e){var t=this;window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){t.restoreScrollPositions(),m(e)})},n.locationVisit=function(e,t){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:t})),window.location.href=e.href,p(window.location).href===p(e).href&&window.location.reload()}catch(e){return!1}},n.isLocationVisit=function(){try{return null!==window.sessionStorage.getItem("inertiaLocationVisit")}catch(e){return!1}},n.handleLocationVisit=function(e){var t,n,i,r,o=this,s=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=null!=(t=null==(n=window.history.state)?void 0:n.rememberedState)?t:{},e.scrollRegions=null!=(i=null==(r=window.history.state)?void 0:r.scrollRegions)?i:[],this.setPage(e,{preserveScroll:s.preserveScroll,preserveState:!0}).then(function(){s.preserveScroll&&o.restoreScrollPositions(),m(e)})},n.isLocationVisitResponse=function(e){return e&&409===e.status&&e.headers["x-inertia-location"]},n.isInertiaResponse=function(e){return null==e?void 0:e.headers["x-inertia"]},n.createVisitId=function(){return this.visitId={},this.visitId},n.cancelVisit=function(e,t){var n=t.cancelled,i=void 0!==n&&n,r=t.interrupted,o=void 0!==r&&r;!e||e.completed||e.cancelled||e.interrupted||(e.cancelToken.cancel(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=o,v(e),e.onFinish(e))},n.finishVisit=function(e){e.cancelled||e.interrupted||(e.completed=!0,e.cancelled=!1,e.interrupted=!1,v(e),e.onFinish(e))},n.resolvePreserveOption=function(e,t){return"function"==typeof e?e(t):"errors"===e?Object.keys(t.props.errors||{}).length>0:e},n.visit=function(e,n){var i=this,o=void 0===n?{}:n,a=o.method,l=void 0===a?exports.Method.GET:a,d=o.data,v=void 0===d?{}:d,m=o.replace,g=void 0!==m&&m,w=o.preserveScroll,y=void 0!==w&&w,S=o.preserveState,b=void 0!==S&&S,E=o.only,P=void 0===E?[]:E,T=o.headers,I=void 0===T?{}:T,x=o.errorBag,V=void 0===x?"":x,L=o.forceFormData,O=void 0!==L&&L,k=o.onCancelToken,C=void 0===k?function(){}:k,M=o.onBefore,A=void 0===M?function(){}:M,j=o.onStart,F=void 0===j?function(){}:j,R=o.onProgress,D=void 0===R?function(){}:R,B=o.onFinish,q=void 0===B?function(){}:B,N=o.onCancel,H=void 0===N?function(){}:N,W=o.onSuccess,G=void 0===W?function(){}:W,U=o.onError,X=void 0===U?function(){}:U,J=o.queryStringArrayFormat,K=void 0===J?"brackets":J,_="string"==typeof e?u(e):e;if(!function e(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(function(t){return e(t)})||"object"==typeof t&&null!==t&&Object.values(t).some(function(t){return e(t)})}(v)&&!O||v instanceof FormData||(v=c(v)),!(v instanceof FormData)){var z=h(l,_,v,K),Q=z[1];_=u(z[0]),v=Q}var Y={url:_,method:l,data:v,replace:g,preserveScroll:y,preserveState:b,only:P,headers:I,errorBag:V,forceFormData:O,queryStringArrayFormat:K,cancelled:!1,completed:!1,interrupted:!1};if(!1!==A(Y)&&function(e){return f("before",{cancelable:!0,detail:{visit:e}})}(Y)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var Z=this.createVisitId();this.activeVisit=r({},Y,{onCancelToken:C,onBefore:A,onStart:F,onProgress:D,onFinish:q,onCancel:H,onSuccess:G,onError:X,queryStringArrayFormat:K,cancelToken:t.CancelToken.source()}),C({cancel:function(){i.activeVisit&&i.cancelVisit(i.activeVisit,{cancelled:!0})}}),function(e){f("start",{detail:{visit:e}})}(Y),F(Y),t({method:l,url:p(_).href,data:l===exports.Method.GET?{}:v,params:l===exports.Method.GET?v:{},cancelToken:this.activeVisit.cancelToken.token,headers:r({},I,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},P.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":P.join(",")}:{},V&&V.length?{"X-Inertia-Error-Bag":V}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(e){v instanceof FormData&&(e.percentage=Math.round(e.loaded/e.total*100),function(e){f("progress",{detail:{progress:e}})}(e),D(e))}}).then(function(e){var t;if(!i.isInertiaResponse(e))return Promise.reject({response:e});var n=e.data;P.length&&n.component===i.page.component&&(n.props=r({},i.page.props,n.props)),y=i.resolvePreserveOption(y,n),(b=i.resolvePreserveOption(b,n))&&null!=(t=window.history.state)&&t.rememberedState&&n.component===i.page.component&&(n.rememberedState=window.history.state.rememberedState);var o=_,s=u(n.url);return o.hash&&!s.hash&&p(o).href===s.href&&(s.hash=o.hash,n.url=s.href),i.setPage(n,{visitId:Z,replace:g,preserveScroll:y,preserveState:b})}).then(function(){var e=i.page.props.errors||{};if(Object.keys(e).length>0){var t=V?e[V]?e[V]:{}:e;return function(e){f("error",{detail:{errors:e}})}(t),X(t)}return f("success",{detail:{page:i.page}}),G(i.page)}).catch(function(e){if(i.isInertiaResponse(e.response))return i.setPage(e.response.data,{visitId:Z});if(i.isLocationVisitResponse(e.response)){var t=u(e.response.headers["x-inertia-location"]),n=_;n.hash&&!t.hash&&p(n).href===t.href&&(t.hash=n.hash),i.locationVisit(t,!0===y)}else{if(!e.response)return Promise.reject(e);f("invalid",{cancelable:!0,detail:{response:e.response}})&&s.show(e.response.data)}}).then(function(){i.activeVisit&&i.finishVisit(i.activeVisit)}).catch(function(e){if(!t.isCancel(e)){var n=f("exception",{cancelable:!0,detail:{exception:e}});if(i.activeVisit&&i.finishVisit(i.activeVisit),n)return Promise.reject(e)}})}},n.setPage=function(e,t){var n=this,i=void 0===t?{}:t,r=i.visitId,o=void 0===r?this.createVisitId():r,s=i.replace,a=void 0!==s&&s,c=i.preserveScroll,l=void 0!==c&&c,d=i.preserveState,h=void 0!==d&&d;return Promise.resolve(this.resolveComponent(e.component)).then(function(t){o===n.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},(a=a||u(e.url).href===window.location.href)?n.replaceState(e):n.pushState(e),n.swapComponent({component:t,page:e,preserveState:h}).then(function(){l||n.resetScrollPositions(),a||m(e)}))})},n.pushState=function(e){this.page=e,window.history.pushState(e,"",e.url)},n.replaceState=function(e){this.page=e,window.history.replaceState(e,"",e.url)},n.handlePopstateEvent=function(e){var t=this;if(null!==e.state){var n=e.state,i=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(function(e){i===t.visitId&&(t.page=n,t.swapComponent({component:e,page:n,preserveState:!1}).then(function(){t.restoreScrollPositions(),m(n)}))})}else{var o=u(this.page.url);o.hash=window.location.hash,this.replaceState(r({},this.page,{url:o.href})),this.resetScrollPositions()}},n.get=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({},n,{method:exports.Method.GET,data:t}))},n.reload=function(e){return void 0===e&&(e={}),this.visit(window.location.href,r({},e,{preserveScroll:!0,preserveState:!0}))},n.replace=function(e,t){var n;return void 0===t&&(t={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+(null!=(n=t.method)?n:"get")+"() instead."),this.visit(e,r({preserveState:!0},t,{replace:!0}))},n.post=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.POST,data:t}))},n.put=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PUT,data:t}))},n.patch=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PATCH,data:t}))},n.delete=function(e,t){return void 0===t&&(t={}),this.visit(e,r({preserveState:!0},t,{method:exports.Method.DELETE}))},n.remember=function(e,t){var n,i;void 0===t&&(t="default"),g||this.replaceState(r({},this.page,{rememberedState:r({},null==(n=this.page)?void 0:n.rememberedState,(i={},i[t]=e,i))}))},n.restore=function(e){var t,n;if(void 0===e&&(e="default"),!g)return null==(t=window.history.state)||null==(n=t.rememberedState)?void 0:n[e]},n.on=function(e,t){var n=function(e){var n=t(e);e.cancelable&&!e.defaultPrevented&&!1===n&&e.preventDefault()};return document.addEventListener("inertia:"+e,n),function(){return document.removeEventListener("inertia:"+e,n)}},e}(),y={buildDOMElement:function(e){var t=document.createElement("template");t.innerHTML=e;var n=t.content.firstChild;if(!e.startsWith("<script "))return n;var i=document.createElement("script");return i.innerHTML=n.innerHTML,n.getAttributeNames().forEach(function(e){i.setAttribute(e,n.getAttribute(e)||"")}),i},isInertiaManagedElement:function(e){return e.nodeType===Node.ELEMENT_NODE&&null!==e.getAttribute("inertia")},findMatchingElementIndex:function(e,t){var n=e.getAttribute("inertia");return null!==n?t.findIndex(function(e){return e.getAttribute("inertia")===n}):-1},update:a(function(e){var t=this,n=e.map(function(e){return t.buildDOMElement(e)});Array.from(document.head.childNodes).filter(function(e){return t.isInertiaManagedElement(e)}).forEach(function(e){var i=t.findMatchingElementIndex(e,n);if(-1!==i){var r,o=n.splice(i,1)[0];o&&!e.isEqualNode(o)&&(null==e||null==(r=e.parentNode)||r.replaceChild(o,e))}else{var s;null==e||null==(s=e.parentNode)||s.removeChild(e)}}),n.forEach(function(e){return document.head.appendChild(e)})},1)},S=new w;exports.Inertia=S,exports.createHeadManager=function(e,t,n){var i={},r=0;function o(){var e=Object.values(i).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,n){if(-1===n.indexOf("<"))return e;if(0===n.indexOf("<title ")){var i=n.match(/(<title [^>]+>)(.*?)(<\/title>)/);return e.title=i?""+i[1]+t(i[2])+i[3]:n,e}var r=n.match(/ inertia="[^"]+"/);return r?e[r[0]]=n:e[Object.keys(e).length]=n,e},{});return Object.values(e)}function s(){e?n(o()):y.update(o())}return{createProvider:function(){var e=function(){var e=r+=1;return i[e]=[],e.toString()}();return{update:function(t){return function(e,t){void 0===t&&(t=[]),null!==e&&Object.keys(i).indexOf(e)>-1&&(i[e]=t),s()}(e,t)},disconnect:function(){return function(e){null!==e&&-1!==Object.keys(i).indexOf(e)&&(delete i[e],s())}(e)}}}}},exports.hrefToUrl=u,exports.mergeDataIntoQueryString=h,exports.shouldIntercept=function(e){var t="a"===e.currentTarget.tagName.toLowerCase();return!(e.target&&null!=e&&e.target.isContentEditable||e.defaultPrevented||t&&e.which>1||t&&e.altKey||t&&e.ctrlKey||t&&e.metaKey||t&&e.shiftKey)},exports.urlWithoutHash=p;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Register/RegisterForm.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  props: {
    genderList: Array,
    civilStatusList: Array,
    nationalityList: Array,
    countryList: Array,
    typeDocumentsList: Array
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
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
      tipo_documento_id: "",
      dni: "",
      fecha_nacimiento: "",
      genero_id: "",
      estado_civil_id: "",
      nacionalidad_id: "",
      pais_residencia: "",
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
    var isDocValid = function isDocValid(v) {
      console.log(v);
      if (fieldsForm.tipo_documento_id === 1) {
        return (0,_constants_form__WEBPACK_IMPORTED_MODULE_1__.checkRut)(v) || "RUT No Valido";
      } else {
        return true;
      }
    };
    var regionList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var setRegion = function setRegion(v) {
      return regionList.value = v;
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
      setRegion([]);
      fieldsForm.region_id = "";
      Object.values(props.countryList).forEach(function (country) {
        if (country.id === fieldsForm.pais_residencia) {
          var newList = Object.values(country.regiones).sort(function (a, b) {
            if (a['nombre'] < b['nombre']) return -1;
            if (a['nombre'] > b['nombre']) return 1;
            return 0;
          });
          setRegion(newList);
        }
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
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return setTimeout(function () {
        console.log(props.countryList);
        initialize();
      }, 1700);
    });
    var __returned__ = {
      props: props,
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
      isDocValid: isDocValid,
      regionList: regionList,
      setRegion: setRegion,
      initialize: initialize,
      validateForm: validateForm,
      handleSubmit: handleSubmit,
      createNickName: createNickName,
      updateRegion: updateRegion,
      checkDigit: checkDigit,
      get checkRut() {
        return _constants_form__WEBPACK_IMPORTED_MODULE_1__.checkRut;
      },
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_RegisterLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/RegisterLayout.vue */ "./resources/js/layouts/RegisterLayout.vue");
/* harmony import */ var _RegisterForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue */ "./resources/js/Pages/Register/RegisterForm.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'RegisterPage',
  props: {
    genderList: Array,
    civilStatusList: Array,
    nationalityList: Array,
    countryList: Array,
    typeDocumentsList: Array
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var __returned__ = {
      props: props,
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

"use strict";
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

"use strict";
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
                    cols: "3"
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
                        name: "nombres",
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
                    cols: "3"
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
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.tipo_documento_id,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                          return $setup.fieldsForm.tipo_documento_id = $event;
                        }),
                        name: "tipo_documento",
                        label: "Tipo Documento",
                        items: $props.typeDocumentsList,
                        "item-title": "nombre",
                        "item-value": "id",
                        variant: "outlined",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required],
                        clearable: "",
                        tabindex: "3"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.dni,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                          return $setup.fieldsForm.dni = $event;
                        }),
                        label: "Número de Documento",
                        variant: "outlined",
                        placeholder: "1234567890",
                        name: "dni",
                        type: "input",
                        style: {
                          "color": "#f4ede8"
                        },
                        "class": "rounded-l",
                        rules: [_ctx.rules.required, $setup.isDocValid],
                        "error-messages": $setup.fieldsForm.errors.dni,
                        clearable: "",
                        tabindex: "4"
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
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
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
                        tabindex: "5"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "max"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.genero_id,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                          return $setup.fieldsForm.genero_id = $event;
                        }),
                        name: "genero_id",
                        label: "Género",
                        items: $props.genderList,
                        "item-title": "nombre",
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
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "4"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.estado_civil_id,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                          return $setup.fieldsForm.estado_civil_id = $event;
                        }),
                        name: "estado_civil_id",
                        label: "Estado Civil",
                        items: $props.civilStatusList,
                        "item-title": "estado",
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
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                          return $setup.fieldsForm.nacionalidad_id = $event;
                        }),
                        name: "nacionalidad",
                        label: "Nacionalidad",
                        items: $props.nationalityList,
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
                        modelValue: $setup.fieldsForm.pais_residencia,
                        "onUpdate:modelValue": [_cache[8] || (_cache[8] = function ($event) {
                          return $setup.fieldsForm.pais_residencia = $event;
                        }), $setup.updateRegion],
                        name: "pais",
                        label: "País",
                        items: $props.countryList,
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
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                        modelValue: $setup.fieldsForm.region_id,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
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
                        tabindex: "10"
                      }, null, 8 /* PROPS */, ["modelValue", "items", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.ciudad,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
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
                        "error-messages": $setup.fieldsForm.errors.ciudad,
                        clearable: "",
                        tabindex: "11"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
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
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
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
                        "error-messages": $setup.fieldsForm.errors.direccion,
                        clearable: "",
                        tabindex: "12"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.ocupacion,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
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
                        "error-messages": $setup.fieldsForm.errors.ocupacion,
                        clearable: "",
                        tabindex: "13"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.telefono,
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
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
                        "error-messages": $setup.fieldsForm.errors.telefono,
                        clearable: "",
                        onKeydown: $setup.checkDigit,
                        tabindex: "14"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
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
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
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
                        tabindex: "15"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.email_confirm,
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
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
                        tabindex: "16"
                      }, null, 8 /* PROPS */, ["modelValue", "rules"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.password,
                        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
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
                        "error-messages": $setup.fieldsForm.errors.password,
                        clearable: "",
                        tabindex: "17"
                      }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                    cols: "3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                        modelValue: $setup.fieldsForm.password_confirm,
                        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
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
                        tabindex: "18"
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RegisterLayout"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RegisterForm"], {
        genderList: $props.genderList,
        civilStatusList: $props.civilStatusList,
        nationalityList: $props.nationalityList,
        countryList: $props.countryList,
        typeDocumentsList: $props.typeDocumentsList
      }, null, 8 /* PROPS */, ["genderList", "civilStatusList", "nationalityList", "countryList", "typeDocumentsList"])];
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCION": () => (/* binding */ ACCION),
/* harmony export */   "CRUD": () => (/* binding */ CRUD),
/* harmony export */   "FORM_POST": () => (/* binding */ FORM_POST),
/* harmony export */   "TEXT_BUTTON": () => (/* binding */ TEXT_BUTTON),
/* harmony export */   "checkRut": () => (/* binding */ checkRut),
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
/*
export const checkRut = function (rut) {
  // Despejar Puntos
  let valor = rut.replace('.','');
  // Despejar Guión
  valor = valor.replace('-','');

  // Aislar Cuerpo y Dígito Verificador
  let cuerpo = valor.slice(0,-1);
  let dv = valor.slice(-1).toUpperCase();

  // Formatear RUN
  rut = cuerpo + '-'+ dv

  // Si no cumple con el mínimo ej. (n.nnn.nnn)
  if(cuerpo.length < 7) { return false;}

  // Calcular Dígito Verificador
  let suma = 0;
  let multiplo = 2;

  // Para cada dígito del Cuerpo
  for(let i=1;i<=cuerpo.length;i++) {

    // Obtener su Producto con el Múltiplo Correspondiente
    let index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

  }

  // Calcular Dígito Verificador en base al Módulo 11
  let dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = (dv == 'K')?10:dv;
  dv = (dv == 0)?11:dv;

  // Validar que el Cuerpo coincide con su Dígito Verificador
  if(dvEsperado != dv) { return false; }

  // Si todo sale bien, eliminar errores (decretar que es válido)
  return true;
}
*/

var checkRut = function checkRut(rut) {
  console.log("checkRut: params:", rut);
  // Despejar Puntos
  var valor = rut.replace('.', '');
  // Despejar Guión
  valor = valor.replace('-', '');

  // Aislar Cuerpo y Dígito Verificador
  var cuerpo = valor.slice(0, -1);
  var digv = valor.slice(-1).toUpperCase();
  if (digv === 'K') digv = 'k';
  return dv(cuerpo) == digv;
};
var dv = function dv(T) {
  var M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + T % 10 * (9 - M++ % 6)) % 11;
  return S ? S - 1 : 'k';
};

/***/ }),

/***/ "./public/images/corona.png":
/*!**********************************!*\
  !*** ./public/images/corona.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";

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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterLayout_vue_vue_type_template_id_1ce75e91__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterLayout_vue_vue_type_template_id_1ce75e91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterLayout.vue?vue&type=template&id=1ce75e91 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/RegisterLayout.vue?vue&type=template&id=1ce75e91");


/***/ })

}]);