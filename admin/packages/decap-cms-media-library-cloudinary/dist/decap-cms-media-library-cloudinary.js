!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("decap-cms-lib-util")):"function"==typeof define&&define.amd?define("DecapCmsMediaLibraryCloudinary",["decap-cms-lib-util"],r):"object"==typeof exports?exports.DecapCmsMediaLibraryCloudinary=r(require("decap-cms-lib-util")):t.DecapCmsMediaLibraryCloudinary=r(t.DecapCmsLibUtil)}(window,(t=>(()=>{var r={9612:(t,r,e)=>{var n=e(2118),o=e(6909),i=e(8138),a=e(4174),u=e(7942);function s(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=u,t.exports=s},235:(t,r,e)=>{var n=e(3945),o=e(1846),i=e(8028),a=e(2344),u=e(4769);function s(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=u,t.exports=s},326:(t,r,e)=>{var n=e(8761)(e(7772),"Map");t.exports=n},6738:(t,r,e)=>{var n=e(2411),o=e(6417),i=e(6928),a=e(9493),u=e(4150);function s(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=u,t.exports=s},857:(t,r,e)=>{var n=e(7772).Symbol;t.exports=n},9432:t=>{t.exports=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}},343:t=>{t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}},5067:t=>{t.exports=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}},91:(t,r,e)=>{var n=e(3940),o=e(1225),i=Object.prototype.hasOwnProperty;t.exports=function(t,r,e){var a=t[r];i.call(t,r)&&o(a,e)&&(void 0!==e||r in t)||n(t,r,e)}},2218:(t,r,e)=>{var n=e(1225);t.exports=function(t,r){for(var e=t.length;e--;)if(n(t[e][0],r))return e;return-1}},3940:(t,r,e)=>{var n=e(3043);t.exports=function(t,r,e){"__proto__"==r&&n?n(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}},2034:(t,r,e)=>{var n=e(5067),o=e(5882);t.exports=function t(r,e,i,a,u){var s=-1,c=r.length;for(i||(i=o),u||(u=[]);++s<c;){var p=r[s];e>0&&i(p)?e>1?t(p,e-1,i,a,u):n(u,p):a||(u[u.length]=p)}return u}},3324:(t,r,e)=>{var n=e(7297),o=e(3812);t.exports=function(t,r){for(var e=0,i=(r=n(r,t)).length;null!=t&&e<i;)t=t[o(r[e++])];return e&&e==i?t:void 0}},3366:(t,r,e)=>{var n=e(857),o=e(2107),i=e(7157),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},187:t=>{t.exports=function(t,r){return null!=t&&r in Object(t)}},5183:(t,r,e)=>{var n=e(3366),o=e(5125);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},6840:(t,r,e)=>{var n=e(1049),o=e(7394),i=e(9259),a=e(7035),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,p=s.toString,l=c.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?f:u).test(a(t))}},2602:(t,r,e)=>{var n=e(3759),o=e(5041);t.exports=function(t,r){return n(t,r,(function(r,e){return o(t,e)}))}},3759:(t,r,e)=>{var n=e(3324),o=e(2857),i=e(7297);t.exports=function(t,r,e){for(var a=-1,u=r.length,s={};++a<u;){var c=r[a],p=n(t,c);e(p,c)&&o(s,i(c,t),p)}return s}},2857:(t,r,e)=>{var n=e(91),o=e(7297),i=e(9045),a=e(9259),u=e(3812);t.exports=function(t,r,e,s){if(!a(t))return t;for(var c=-1,p=(r=o(r,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=u(r[c]),y=e;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(c!=l){var h=f[v];void 0===(y=s?s(h,v,f):void 0)&&(y=a(h)?h:i(r[c+1])?[]:{})}n(f,v,y),f=f[v]}return t}},6532:(t,r,e)=>{var n=e(6874),o=e(3043),i=e(3059),a=o?function(t,r){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(r),writable:!0})}:i;t.exports=a},1054:(t,r,e)=>{var n=e(857),o=e(343),i=e(6152),a=e(4795),u=n?n.prototype:void 0,s=u?u.toString:void 0;t.exports=function t(r){if("string"==typeof r)return r;if(i(r))return o(r,t)+"";if(a(r))return s?s.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e}},7297:(t,r,e)=>{var n=e(6152),o=e(1401),i=e(4452),a=e(6188);t.exports=function(t,r){return n(t)?t:o(t,r)?[t]:i(a(t))}},4019:(t,r,e)=>{var n=e(7772)["__core-js_shared__"];t.exports=n},3043:(t,r,e)=>{var n=e(8761),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},9097:(t,r,e)=>{var n=e(5676),o=e(3114),i=e(5251);t.exports=function(t){return i(o(t,void 0,n),t+"")}},1242:(t,r,e)=>{var n="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=n},7937:(t,r,e)=>{var n=e(8304);t.exports=function(t,r){var e=t.__data__;return n(r)?e["string"==typeof r?"string":"hash"]:e.map}},8761:(t,r,e)=>{var n=e(6840),o=e(8109);t.exports=function(t,r){var e=o(t,r);return n(e)?e:void 0}},2107:(t,r,e)=>{var n=e(857),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var r=i.call(t,u),e=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(r?t[u]=e:delete t[u]),o}},8109:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},1369:(t,r,e)=>{var n=e(7297),o=e(9631),i=e(6152),a=e(9045),u=e(1158),s=e(3812);t.exports=function(t,r,e){for(var c=-1,p=(r=n(r,t)).length,l=!1;++c<p;){var f=s(r[c]);if(!(l=null!=t&&e(t,f)))break;t=t[f]}return l||++c!=p?l:!!(p=null==t?0:t.length)&&u(p)&&a(f,p)&&(i(t)||o(t))}},2118:(t,r,e)=>{var n=e(9191);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},6909:t=>{t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},8138:(t,r,e)=>{var n=e(9191),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(n){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return o.call(r,t)?r[t]:void 0}},4174:(t,r,e)=>{var n=e(9191),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return n?void 0!==r[t]:o.call(r,t)}},7942:(t,r,e)=>{var n=e(9191);t.exports=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=n&&void 0===r?"__lodash_hash_undefined__":r,this}},5882:(t,r,e)=>{var n=e(857),o=e(9631),i=e(6152),a=n?n.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(a&&t&&t[a])}},9045:t=>{var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},1401:(t,r,e)=>{var n=e(6152),o=e(4795),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,r){if(n(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!o(t))||a.test(t)||!i.test(t)||null!=r&&t in Object(r)}},8304:t=>{t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},7394:(t,r,e)=>{var n,o=e(4019),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},3945:t=>{t.exports=function(){this.__data__=[],this.size=0}},1846:(t,r,e)=>{var n=e(2218),o=Array.prototype.splice;t.exports=function(t){var r=this.__data__,e=n(r,t);return!(e<0||(e==r.length-1?r.pop():o.call(r,e,1),--this.size,0))}},8028:(t,r,e)=>{var n=e(2218);t.exports=function(t){var r=this.__data__,e=n(r,t);return e<0?void 0:r[e][1]}},2344:(t,r,e)=>{var n=e(2218);t.exports=function(t){return n(this.__data__,t)>-1}},4769:(t,r,e)=>{var n=e(2218);t.exports=function(t,r){var e=this.__data__,o=n(e,t);return o<0?(++this.size,e.push([t,r])):e[o][1]=r,this}},2411:(t,r,e)=>{var n=e(9612),o=e(235),i=e(326);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},6417:(t,r,e)=>{var n=e(7937);t.exports=function(t){var r=n(this,t).delete(t);return this.size-=r?1:0,r}},6928:(t,r,e)=>{var n=e(7937);t.exports=function(t){return n(this,t).get(t)}},9493:(t,r,e)=>{var n=e(7937);t.exports=function(t){return n(this,t).has(t)}},4150:(t,r,e)=>{var n=e(7937);t.exports=function(t,r){var e=n(this,t),o=e.size;return e.set(t,r),this.size+=e.size==o?0:1,this}},7777:(t,r,e)=>{var n=e(733);t.exports=function(t){var r=n(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}},9191:(t,r,e)=>{var n=e(8761)(Object,"create");t.exports=n},7157:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},3114:(t,r,e)=>{var n=e(9432),o=Math.max;t.exports=function(t,r,e){return r=o(void 0===r?t.length-1:r,0),function(){for(var i=arguments,a=-1,u=o(i.length-r,0),s=Array(u);++a<u;)s[a]=i[r+a];a=-1;for(var c=Array(r+1);++a<r;)c[a]=i[a];return c[r]=e(s),n(t,this,c)}}},7772:(t,r,e)=>{var n=e(1242),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},5251:(t,r,e)=>{var n=e(6532),o=e(7787)(n);t.exports=o},7787:t=>{var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var o=r(),i=16-(o-n);if(n=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},4452:(t,r,e)=>{var n=e(7777),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=n((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(o,(function(t,e,n,o){r.push(n?o.replace(i,"$1"):e||t)})),r}));t.exports=a},3812:(t,r,e)=>{var n=e(4795);t.exports=function(t){if("string"==typeof t||n(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},7035:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},6874:t=>{t.exports=function(t){return function(){return t}}},1225:t=>{t.exports=function(t,r){return t===r||t!=t&&r!=r}},5676:(t,r,e)=>{var n=e(2034);t.exports=function(t){return null!=t&&t.length?n(t,1):[]}},5041:(t,r,e)=>{var n=e(187),o=e(1369);t.exports=function(t,r){return null!=t&&o(t,r,n)}},3059:t=>{t.exports=function(t){return t}},9631:(t,r,e)=>{var n=e(5183),o=e(5125),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},6152:t=>{var r=Array.isArray;t.exports=r},1049:(t,r,e)=>{var n=e(3366),o=e(9259);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},1158:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},9259:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},5125:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},4795:(t,r,e)=>{var n=e(3366),o=e(5125);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},733:(t,r,e)=>{var n=e(6738);function o(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a)||i,a};return e.cache=new(o.Cache||n),e}o.Cache=n,t.exports=o},3888:(t,r,e)=>{var n=e(2602),o=e(9097)((function(t,r){return null==t?{}:n(t,r)}));t.exports=o},6188:(t,r,e)=>{var n=e(1054);t.exports=function(t){return null==t?"":n(t)}},4688:r=>{"use strict";r.exports=t}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return r[t](i,i.exports,n),i.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);var o={};return(()=>{"use strict";n.d(o,{DecapCmsMediaLibraryCloudinary:()=>l});var t=n(3888),r=n.n(t),e=n(4688);const i=["config"];function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){var n,o,i,a;n=t,o=r,i=e[r],(o="symbol"==typeof(a=function(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}const s={use_secure_url:!0,use_transformations:!0,output_filename_only:!1},c={button_class:void 0,inline_container:void 0,insert_transformation:!1,z_index:"99999"},p={multiple:!1},l={name:"cloudinary",init:async function({options:t={},handleInsert:n}={}){const{config:o={}}=t,a=function(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(t,i),l=u(u({},s),a),f=u(u(u({},p),o),c),v=r()(f,["default_transformations","max_files","multiple"]);await(0,e.loadScript)("https://media-library.cloudinary.com/global/all.js");const y=window.cloudinary.createMediaLibrary(f,{insertHandler:function(t){const r=t.assets.map((t=>function(t,{use_secure_url:r,use_transformations:e,output_filename_only:n}){return n?`${t.public_id}.${t.format}`:(t.derived&&e?t.derived[0]:t)[r?"secure_url":"url"]}(t,l)));n(o.multiple||r.length>1?r:r[0])}});return{show:({config:t={},allowMultiple:r}={})=>(!1===r&&(t.multiple=!1),y.show(u(u({},v),t))),hide:()=>y.hide(),enableStandalone:()=>!0}}}})(),o.DecapCmsMediaLibraryCloudinary})()));
//# sourceMappingURL=decap-cms-media-library-cloudinary.js.map