(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_LoginForm_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/LoginForm.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/LoginForm.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _public_images_logo_gp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/images/logo_gp.png */ "./public/images/logo_gp.png");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
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
        counter: function counter(value) {
          return value.length >= 8 || 'Min 8 characters';
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
  __name: 'LoginForm',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var loadingPage = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var validLoginForm = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(true);
    var message = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)("");
    var setOverlay = function setOverlay(v) {
      return loadingPage.value = v;
    };
    var setMessage = function setMessage(v) {
      return message.value = v;
    };
    var formLogin = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var fieldsForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      email: "",
      password: ""
    });
    var validateForm = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var _yield$formLogin$valu, valid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setOverlay(true);
              e.preventDefault();
              fieldsForm.clearErrors();
              _context.next = 5;
              return formLogin.value.validate();
            case 5:
              _yield$formLogin$valu = _context.sent;
              valid = _yield$formLogin$valu.valid;
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
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('login', fieldsForm).then(function (result) {
        setMessage("");
        window.location.href = "home";
      })["catch"](function (error) {
        setOverlay(false);
        console.log(JSON.stringify(error));
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status >= 500) {
            setMessage("Error de Sistema, Favor contactar al administrador");
          } else {
            if (error.response.status === 422) {
              var errors = error.response.data.errors;
              fieldsForm.errors = errors;
            } else {
              setMessage("Error al Ingresar, Favor contactar al administrador");
            }
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setMessage("Error al Ingresar, Favor contactar al administrador");
        } else {
          // Something happened in setting up the request that triggered an Error
          setMessage("Error al Ingresar, Favor contactar al administrador");
        }
      });
    }
    ;
    var __returned__ = {
      loadingPage: loadingPage,
      validLoginForm: validLoginForm,
      message: message,
      setOverlay: setOverlay,
      setMessage: setMessage,
      formLogin: formLogin,
      fieldsForm: fieldsForm,
      validateForm: validateForm,
      handleSubmit: handleSubmit,
      ref: vue__WEBPACK_IMPORTED_MODULE_3__.ref,
      get axios() {
        return (axios__WEBPACK_IMPORTED_MODULE_0___default());
      },
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
      },
      get logGP() {
        return _public_images_logo_gp_png__WEBPACK_IMPORTED_MODULE_2__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/LoginForm.vue?vue&type=template&id=4c37766e":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/LoginForm.vue?vue&type=template&id=4c37766e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  style: {
    "color": "beige",
    "font-size": "10pt"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Aún no tienes usuario? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "register",
  style: {
    "text-decoration": "none",
    "color": "#99c5c0",
    "font-weight": "bold",
    "font-size": "10pt"
  }
}, "Registrate aquí")], -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "forgot-password",
  style: {
    "text-decoration": "none",
    "color": "#99c5c0",
    "font-weight": "normal",
    "font-size": "12pt"
  }
}, "¿Olvidaste tu contraseña?")], -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-img");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-form");
  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_container, {
    fluid: "",
    "class": "py-0 px-0 fill-height",
    color: "#222222",
    style: {
      "height": "100vh",
      "width": "100%"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
        elevation: "12",
        "class": "d-flex align-center justify-center",
        color: "#222222",
        style: {
          "height": "100vh",
          "width": "100%"
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                cols: "12",
                "class": "d-flex justify-center"
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
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                "class": "d-flex justify-center"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_form, {
                    onSubmit: $setup.validateForm,
                    ref: "formLogin",
                    modelValue: $setup.validLoginForm,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                      return $setup.validLoginForm = $event;
                    }),
                    "class": "w-33",
                    "lazy-validation": ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12"
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
                                "error-messages": $setup.fieldsForm.errors.email,
                                clearable: "",
                                tabindex: "1"
                              }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                modelValue: $setup.fieldsForm.password,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
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
                                rules: [_ctx.rules.required, _ctx.rules.counter],
                                "error-messages": $setup.fieldsForm.errors.password,
                                clearable: "",
                                tabindex: "2",
                                hint: ""
                              }, null, 8 /* PROPS */, ["modelValue", "rules", "error-messages"])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                                type: "submit",
                                block: "",
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
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("INICIAR SESIÓN")];
                                }),
                                _: 1 /* STABLE */
                              }, 8 /* PROPS */, ["onClick"])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12",
                            "class": "d-flex justify-center"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_1];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12",
                            "class": "d-flex justify-center"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_2];
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
          })];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  });
}

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

/***/ "./resources/js/Pages/Login/LoginForm.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Login/LoginForm.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginForm_vue_vue_type_template_id_4c37766e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=4c37766e */ "./resources/js/Pages/Login/LoginForm.vue?vue&type=template&id=4c37766e");
/* harmony import */ var _LoginForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Login/LoginForm.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoginForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoginForm_vue_vue_type_template_id_4c37766e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Login/LoginForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Login/LoginForm.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Login/LoginForm.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginForm.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/LoginForm.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Login/LoginForm.vue?vue&type=template&id=4c37766e":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Login/LoginForm.vue?vue&type=template&id=4c37766e ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_template_id_4c37766e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_template_id_4c37766e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginForm.vue?vue&type=template&id=4c37766e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login/LoginForm.vue?vue&type=template&id=4c37766e");


/***/ })

}]);