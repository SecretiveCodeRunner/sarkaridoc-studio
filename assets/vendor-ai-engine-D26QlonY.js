import{n as e,r as t}from"./rolldown-runtime-Dd_uD5pT.js";var n=`modulepreload`,r=function(e,t){return new URL(e,t).href},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(t.map(t=>{if(t=r(t,a),t=u(t),t in i)return;i[t]=!0;let o=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.href===t&&(!o||r.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:n,o||(s.as=`script`),s.crossOrigin=``,s.href=t,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,n)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},o=e({removeBackground:()=>Fi}),s=Object.create,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,p=(e,t)=>function(){return t||(0,e[u(e)[0]])((t={exports:{}}).exports,t),t.exports},m=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of u(t))!f.call(e,i)&&i!==n&&c(e,i,{get:()=>t[i],enumerable:!(r=l(t,i))||r.enumerable});return e},h=(e,t,n)=>(n=e==null?{}:s(d(e)),m(t||!e||!e.__esModule?c(n,`default`,{value:e,enumerable:!0}):n,e)),g=p({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(e,t){function n(e){for(var t=Array(e),n=0;n<e;++n)t[n]=n;return t}t.exports=n}}),_=p({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(e,t){t.exports=function(e){return e!=null&&(n(e)||r(e)||!!e._isBuffer)};function n(e){return!!e.constructor&&typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)}function r(e){return typeof e.readFloatLE==`function`&&typeof e.slice==`function`&&n(e.slice(0,0))}}}),v=p({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(e,t){var n=g(),r=_(),i=typeof Float64Array<`u`;function a(e,t){return e[0]-t[0]}function o(){var e=this.stride,t=Array(e.length),n;for(n=0;n<t.length;++n)t[n]=[Math.abs(e[n]),n];t.sort(a);var r=Array(t.length);for(n=0;n<r.length;++n)r[n]=t[n][1];return r}function s(e,t){var r=[`View`,t,`d`,e].join(``);t<0&&(r=`View_Nil`+e);var i=e===`generic`;if(t===-1){var a=`function `+r+`(a){this.data=a;};var proto=`+r+`.prototype;proto.dtype='`+e+`';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new `+r+`(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_`+r+`(a){return new `+r+`(a);}`,s=Function(a);return s()}if(t===0){var a=`function `+r+`(a,d) {this.data = a;this.offset = d};var proto=`+r+`.prototype;proto.dtype='`+e+`';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function `+r+`_copy() {return new `+r+`(this.data,this.offset)};proto.pick=function `+r+`_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function `+r+`_get(){return `+(i?`this.data.get(this.offset)`:`this.data[this.offset]`)+`};proto.set=function `+r+`_set(v){return `+(i?`this.data.set(this.offset,v)`:`this.data[this.offset]=v`)+`};return function construct_`+r+`(a,b,c,d){return new `+r+`(a,d)}`,s=Function(`TrivialArray`,a);return s(l[e][0])}var a=[`'use strict'`],c=n(t),u=c.map(function(e){return`i`+e}),d=`this.offset+`+c.map(function(e){return`this.stride[`+e+`]*i`+e}).join(`+`),f=c.map(function(e){return`b`+e}).join(`,`),p=c.map(function(e){return`c`+e}).join(`,`);a.push(`function `+r+`(a,`+f+`,`+p+`,d){this.data=a`,`this.shape=[`+f+`]`,`this.stride=[`+p+`]`,`this.offset=d|0}`,`var proto=`+r+`.prototype`,`proto.dtype='`+e+`'`,`proto.dimension=`+t),a.push(`Object.defineProperty(proto,'size',{get:function `+r+`_size(){return `+c.map(function(e){return`this.shape[`+e+`]`}).join(`*`),`}})`),t===1?a.push(`proto.order=[0]`):(a.push(`Object.defineProperty(proto,'order',{get:`),t<4?(a.push(`function `+r+`_order(){`),t===2?a.push(`return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})`):t===3&&a.push(`var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})`)):a.push(`ORDER})`)),a.push(`proto.set=function `+r+`_set(`+u.join(`,`)+`,v){`),i?a.push(`return this.data.set(`+d+`,v)}`):a.push(`return this.data[`+d+`]=v}`),a.push(`proto.get=function `+r+`_get(`+u.join(`,`)+`){`),i?a.push(`return this.data.get(`+d+`)}`):a.push(`return this.data[`+d+`]}`),a.push(`proto.index=function `+r+`_index(`,u.join(),`){return `+d+`}`),a.push(`proto.hi=function `+r+`_hi(`+u.join(`,`)+`){return new `+r+`(this.data,`+c.map(function(e){return[`(typeof i`,e,`!=='number'||i`,e,`<0)?this.shape[`,e,`]:i`,e,`|0`].join(``)}).join(`,`)+`,`+c.map(function(e){return`this.stride[`+e+`]`}).join(`,`)+`,this.offset)}`);var m=c.map(function(e){return`a`+e+`=this.shape[`+e+`]`}),h=c.map(function(e){return`c`+e+`=this.stride[`+e+`]`});a.push(`proto.lo=function `+r+`_lo(`+u.join(`,`)+`){var b=this.offset,d=0,`+m.join(`,`)+`,`+h.join(`,`));for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'&&i`+g+`>=0){d=i`+g+`|0;b+=c`+g+`*d;a`+g+`-=d}`);a.push(`return new `+r+`(this.data,`+c.map(function(e){return`a`+e}).join(`,`)+`,`+c.map(function(e){return`c`+e}).join(`,`)+`,b)}`),a.push(`proto.step=function `+r+`_step(`+u.join(`,`)+`){var `+c.map(function(e){return`a`+e+`=this.shape[`+e+`]`}).join(`,`)+`,`+c.map(function(e){return`b`+e+`=this.stride[`+e+`]`}).join(`,`)+`,c=this.offset,d=0,ceil=Math.ceil`);for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'){d=i`+g+`|0;if(d<0){c+=b`+g+`*(a`+g+`-1);a`+g+`=ceil(-a`+g+`/d)}else{a`+g+`=ceil(a`+g+`/d)}b`+g+`*=d}`);a.push(`return new `+r+`(this.data,`+c.map(function(e){return`a`+e}).join(`,`)+`,`+c.map(function(e){return`b`+e}).join(`,`)+`,c)}`);for(var _=Array(t),v=Array(t),g=0;g<t;++g)_[g]=`a[i`+g+`]`,v[g]=`b[i`+g+`]`;a.push(`proto.transpose=function `+r+`_transpose(`+u+`){`+u.map(function(e,t){return e+`=(`+e+`===undefined?`+t+`:`+e+`|0)`}).join(`;`),`var a=this.shape,b=this.stride;return new `+r+`(this.data,`+_.join(`,`)+`,`+v.join(`,`)+`,this.offset)}`),a.push(`proto.pick=function `+r+`_pick(`+u+`){var a=[],b=[],c=this.offset`);for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'&&i`+g+`>=0){c=(c+this.stride[`+g+`]*i`+g+`)|0}else{a.push(this.shape[`+g+`]);b.push(this.stride[`+g+`])}`);a.push(`var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}`),a.push(`return function construct_`+r+`(data,shape,stride,offset){return new `+r+`(data,`+c.map(function(e){return`shape[`+e+`]`}).join(`,`)+`,`+c.map(function(e){return`stride[`+e+`]`}).join(`,`)+`,offset)}`);var s=Function(`CTOR_LIST`,`ORDER`,a.join(`
`));return s(l[e],o)}function c(e){if(r(e))return`buffer`;if(i)switch(Object.prototype.toString.call(e)){case`[object Float64Array]`:return`float64`;case`[object Float32Array]`:return`float32`;case`[object Int8Array]`:return`int8`;case`[object Int16Array]`:return`int16`;case`[object Int32Array]`:return`int32`;case`[object Uint8Array]`:return`uint8`;case`[object Uint16Array]`:return`uint16`;case`[object Uint32Array]`:return`uint32`;case`[object Uint8ClampedArray]`:return`uint8_clamped`;case`[object BigInt64Array]`:return`bigint64`;case`[object BigUint64Array]`:return`biguint64`}return Array.isArray(e)?`array`:`generic`}var l={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function u(e,t,n,r){if(e===void 0){var i=l.array[0];return i([])}typeof e==`number`&&(e=[e]),t===void 0&&(t=[e.length]);var a=t.length;if(n===void 0){n=Array(a);for(var o=a-1,u=1;o>=0;--o)n[o]=u,u*=t[o]}if(r===void 0){r=0;for(var o=0;o<a;++o)n[o]<0&&(r-=(t[o]-1)*n[o])}for(var d=c(e),f=l[d];f.length<=a+1;)f.push(s(d,f.length-1));var i=f[a+1];return i(e,t,n,r)}t.exports=u}}),y=typeof global==`object`&&global&&global.Object===Object&&global,b=typeof self==`object`&&self&&self.Object===Object&&self,x=y||b||Function(`return this`)(),S=x.Symbol,ee=Object.prototype,te=ee.hasOwnProperty,ne=ee.toString,re=S?S.toStringTag:void 0;function ie(e){var t=te.call(e,re),n=e[re];try{e[re]=void 0;var r=!0}catch{}var i=ne.call(e);return r&&(t?e[re]=n:delete e[re]),i}var ae=ie,C=Object.prototype.toString;function oe(e){return C.call(e)}var se=oe,ce=`[object Null]`,le=`[object Undefined]`,ue=S?S.toStringTag:void 0;function de(e){return e==null?e===void 0?le:ce:ue&&ue in Object(e)?ae(e):se(e)}var fe=de;function pe(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var me=pe,w=`[object AsyncFunction]`,T=`[object Function]`,he=`[object GeneratorFunction]`,ge=`[object Proxy]`;function _e(e){if(!me(e))return!1;var t=fe(e);return t==T||t==he||t==w||t==ge}var ve=_e,ye=x[`__core-js_shared__`],be=function(){var e=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function xe(e){return!!be&&be in e}var Se=xe,Ce=Function.prototype.toString;function we(e){if(e!=null){try{return Ce.call(e)}catch{}try{return e+``}catch{}}return``}var Te=we,Ee=/[\\^$.*+?()[\]{}|]/g,De=/^\[object .+?Constructor\]$/,Oe=Function.prototype,ke=Object.prototype,Ae=Oe.toString,je=ke.hasOwnProperty,Me=RegExp(`^`+Ae.call(je).replace(Ee,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function Ne(e){return!me(e)||Se(e)?!1:(ve(e)?Me:De).test(Te(e))}var Pe=Ne;function E(e,t){return e?.[t]}var Fe=E;function Ie(e,t){var n=Fe(e,t);return Pe(n)?n:void 0}var Le=Ie,Re=Le(Object,`create`);function ze(){this.__data__=Re?Re(null):{},this.size=0}var Be=ze;function Ve(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var He=Ve,Ue=`__lodash_hash_undefined__`,We=Object.prototype.hasOwnProperty;function Ge(e){var t=this.__data__;if(Re){var n=t[e];return n===Ue?void 0:n}return We.call(t,e)?t[e]:void 0}var Ke=Ge,qe=Object.prototype.hasOwnProperty;function Je(e){var t=this.__data__;return Re?t[e]!==void 0:qe.call(t,e)}var Ye=Je,Xe=`__lodash_hash_undefined__`;function Ze(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=Re&&t===void 0?Xe:t,this}var Qe=Ze;function $e(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=Be,$e.prototype.delete=He,$e.prototype.get=Ke,$e.prototype.has=Ye,$e.prototype.set=Qe;var et=$e;function tt(){this.__data__=[],this.size=0}var nt=tt;function rt(e,t){return e===t||e!==e&&t!==t}var it=rt;function at(e,t){for(var n=e.length;n--;)if(it(e[n][0],t))return n;return-1}var ot=at,st=Array.prototype.splice;function ct(e){var t=this.__data__,n=ot(t,e);return n<0?!1:(n==t.length-1?t.pop():st.call(t,n,1),--this.size,!0)}var lt=ct;function ut(e){var t=this.__data__,n=ot(t,e);return n<0?void 0:t[n][1]}var dt=ut;function ft(e){return ot(this.__data__,e)>-1}var pt=ft;function mt(e,t){var n=this.__data__,r=ot(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var ht=mt;function gt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gt.prototype.clear=nt,gt.prototype.delete=lt,gt.prototype.get=dt,gt.prototype.has=pt,gt.prototype.set=ht;var _t=gt,vt=Le(x,`Map`);function yt(){this.size=0,this.__data__={hash:new et,map:new(vt||_t),string:new et}}var bt=yt;function xt(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}var St=xt;function Ct(e,t){var n=e.__data__;return St(t)?n[typeof t==`string`?`string`:`hash`]:n.map}var wt=Ct;function Tt(e){var t=wt(this,e).delete(e);return this.size-=+!!t,t}var Et=Tt;function Dt(e){return wt(this,e).get(e)}var Ot=Dt;function kt(e){return wt(this,e).has(e)}var At=kt;function jt(e,t){var n=wt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var Mt=jt;function Nt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Nt.prototype.clear=bt,Nt.prototype.delete=Et,Nt.prototype.get=Ot,Nt.prototype.has=At,Nt.prototype.set=Mt;var Pt=Nt,Ft=`Expected a function`;function It(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(Ft);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(It.Cache||Pt),n}It.Cache=Pt;var Lt=It,Rt=h(v()),zt=class e{constructor(e,t){this.type=`application/octet-stream`,this.params={},this.type=e,this.params=t}toString(){let e=[];for(let t in this.params){let n=this.params[t];e.push(`${t}=${n}`)}return[this.type,...e].join(`;`)}static create(t,n){return new e(t,n)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(t){let[n,...r]=t.split(`;`),i={};for(let e of r){let[t,n]=e.split(`=`);i[t.trim()]=n.trim()}return new e(n,i)}},Bt=h(v());async function Vt(e){let t=zt.fromString(e.type);switch(t.type){case`image/x-alpha8`:{let n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,Bt.default)(new Uint8Array(await e.arrayBuffer()),[r,n,1])}case`image/x-rgba8`:{let n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,Bt.default)(new Uint8Array(await e.arrayBuffer()),[r,n,4])}case`application/octet-stream`:case`image/png`:case`image/jpeg`:case`image/jpg`:case`image/webp`:{let t=Gt(await createImageBitmap(e));return(0,Bt.default)(new Uint8Array(t.data),[t.height,t.width,4])}default:throw Error(`Invalid format: ${t.type} with params: ${t.params}`)}}async function Ht(e,t=.8,n=`image/png`){let[r,i,a]=e.shape;switch(n){case`image/x-alpha8`:case`image/x-rgba8`:{let t=zt.create(n,{width:i.toString(),height:r.toString()});return new Blob([e.data],{type:t.toString()})}case`image/png`:case`image/jpeg`:case`image/webp`:{let a=new ImageData(new Uint8ClampedArray(e.data),i,r);var o=Zt(a.width,a.height);return o.getContext(`2d`).putImageData(a,0,0),o.convertToBlob({quality:t,type:n})}default:throw Error(`Invalid format: ${n}`)}}function Ut(e){return RegExp(`^(?:[a-z+]+:)?//`,`i`).test(e)}function Wt(e,t){return Ut(e)?e:new URL(e,t).href}function Gt(e){var t=Zt(e.width,e.height),n=t.getContext(`2d`);return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}function Kt(e){if(typeof Uint8Array<`u`)return new Uint8Array(e);if(typeof Uint8ClampedArray<`u`)return new Uint8ClampedArray(e);if(typeof Uint16Array<`u`)return new Uint16Array(e);if(typeof Uint32Array<`u`)return new Uint32Array(e);if(typeof Float32Array<`u`)return new Float32Array(e);if(typeof Float64Array<`u`)return new Float64Array(e);throw Error(`TypedArray not supported`)}function qt(e,t,n,r=!1){let[i,a,o]=e.shape,s=a/t,c=i/n;r&&(s=c=Math.max(s,c)>1?Math.max(s,c):Math.min(s,c));let l=(0,Rt.default)(Kt(o*t*n),[n,t,o]);for(let r=0;r<n;r++)for(let n=0;n<t;n++){let t=n*s,u=r*c,d=Math.max(Math.floor(t),0),f=Math.min(Math.ceil(t),a-1),p=Math.max(Math.floor(u),0),m=Math.min(Math.ceil(u),i-1),h=t-d,g=u-p;for(let t=0;t<o;t++){let i=e.get(p,d,t),a=e.get(p,f,t),o=e.get(m,d,t),s=e.get(m,f,t),c=(1-h)*(1-g)*i+h*(1-g)*a+(1-h)*g*o+h*g*s;l.set(r,n,t,c)}}return l}function Jt(e,t=[128,128,128],n=[256,256,256]){var r=e.data;let[i,a,o]=e.shape,s=i*a,c=new Float32Array(3*s);for(let e=0,i=0;e<r.length;e+=4,i+=1)c[i]=(r[e]-t[0])/n[0],c[i+s]=(r[e+1]-t[1])/n[1],c[i+s+s]=(r[e+2]-t[2])/n[2];return(0,Rt.default)(c,[1,3,i,a])}async function Yt(e,t){return typeof e==`string`&&(e=Wt(e,t.publicPath),e=new URL(e)),e instanceof URL&&(e=await(await fetch(e,{})).blob()),(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e])),e instanceof Blob&&(e=await Vt(e)),e}function Xt(e){let t=new Uint8Array(e.data.length);for(let n=0;n<e.data.length;n++)t[n]=e.data[n]*255;return(0,Rt.default)(t,e.shape)}function Zt(e,t){let n;if(n=typeof OffscreenCanvas<`u`?new OffscreenCanvas(e,t):document.createElement(`canvas`),!n)throw Error(`Canvas nor OffscreenCanvas are available in the current context.`);return n}var Qt=h(v()),$t=async()=>navigator.gpu!==void 0&&await navigator.gpu.requestAdapter()!==null,en=()=>navigator.hardwareConcurrency??4;async function tn(e,t){return URL.createObjectURL(await nn(e,t))}async function nn(e,t){let n=new URL(`resources.json`,t.publicPath),r=await fetch(n);if(!r.ok)throw Error(`Resource metadata not found. Ensure that the config.publicPath is configured correctly.`);let i=(await r.json())[e];if(!i)throw Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);let a=i.chunks,o=0,s=a.map(async n=>{let r=n.offsets[1]-n.offsets[0],a=t.publicPath?new URL(n.name,t.publicPath).toString():n.name,s=await(await fetch(a,t.fetchArgs)).blob();if(r!==s.size)throw Error(`Failed to fetch ${e} with size ${r} but got ${s.size}`);return t.progress&&(o+=r,t.progress(`fetch:${e}`,o,i.size)),s}),c=await Promise.all(s),l=new Blob(c,{type:i.mime});if(l.size!==i.size)throw Error(`Failed to fetch ${e} with size ${i.size} but got ${l.size}`);return l}var rn=null,an=async e=>(rn===null&&(rn=e?(await a(async()=>{let{default:e}=await Promise.resolve().then(()=>Bg);return{default:e}},void 0,import.meta.url)).default:(await a(async()=>{let{default:e}=await Promise.resolve().then(()=>Ii);return{default:e}},void 0,import.meta.url)).default),rn);async function on(e,t){let n=t.device===`gpu`&&await $t(),r=n&&t.proxyToWorker,i=[n?`webgpu`:`wasm`],a=await an(n);t.debug&&(console.debug(`	Using WebGPU:`,n),console.debug(`	Proxy to Worker:`,r),a.env.debug=!0,a.env.logLevel=`verbose`),a.env.wasm.numThreads=en(),a.env.wasm.proxy=r;let o=n?`/onnxruntime-web/ort-wasm-simd-threaded.jsep`:`/onnxruntime-web/ort-wasm-simd-threaded`,s=await tn(`${o}.wasm`,t),c=await tn(`${o}.mjs`,t);a.env.wasm.wasmPaths={mjs:c,wasm:s},t.debug&&console.debug(`ort.env.wasm:`,a.env.wasm);let l={executionProviders:i,graphOptimizationLevel:`all`,executionMode:`parallel`,enableCpuMemArena:!0};return await a.InferenceSession.create(e,l).catch(e=>{throw Error(`Failed to create session: "${e}". Please check if the publicPath is set correctly.`)})}async function sn(e,t,n,r){let i=await an(r.device===`gpu`&&await $t()),a={};for(let[e,n]of t)a[e]=new i.Tensor(`float32`,new Float32Array(n.data),n.shape);let o=await e.run(a,{}),s=[];for(let e of n){let t=o[e],n=t.dims,r=t.data,i=(0,Qt.default)(r,n);s.push(i)}return s}var cn;(function(e){e.assertEqual=e=>e;function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(cn||={});var ln;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(ln||={});var D=cn.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),un=e=>{switch(typeof e){case`undefined`:return D.undefined;case`string`:return D.string;case`number`:return isNaN(e)?D.nan:D.number;case`boolean`:return D.boolean;case`function`:return D.function;case`bigint`:return D.bigint;case`symbol`:return D.symbol;case`object`:return Array.isArray(e)?D.array:e===null?D.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?D.promise:typeof Map<`u`&&e instanceof Map?D.map:typeof Set<`u`&&e instanceof Set?D.set:typeof Date<`u`&&e instanceof Date?D.date:D.object;default:return D.unknown}},O=cn.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),dn=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,`$1:`),fn=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,cn.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};fn.create=e=>new fn(e);var pn=(e,t)=>{let n;switch(e.code){case O.invalid_type:n=e.received===D.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case O.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,cn.jsonStringifyReplacer)}`;break;case O.unrecognized_keys:n=`Unrecognized key(s) in object: ${cn.joinValues(e.keys,`, `)}`;break;case O.invalid_union:n=`Invalid input`;break;case O.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${cn.joinValues(e.options)}`;break;case O.invalid_enum_value:n=`Invalid enum value. Expected ${cn.joinValues(e.options)}, received '${e.received}'`;break;case O.invalid_arguments:n=`Invalid function arguments`;break;case O.invalid_return_type:n=`Invalid function return type`;break;case O.invalid_date:n=`Invalid date`;break;case O.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:cn.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case O.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case O.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case O.custom:n=`Invalid input`;break;case O.invalid_intersection_types:n=`Intersection results could not be merged`;break;case O.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case O.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,cn.assertNever(e)}return{message:n}},mn=pn;function hn(e){mn=e}function gn(){return mn}var _n=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}},vn=[];function k(e,t){let n=gn(),r=_n({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===pn?void 0:pn].filter(e=>!!e)});e.common.issues.push(r)}var yn=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return A;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return A;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},A=Object.freeze({status:`aborted`}),bn=e=>({status:`dirty`,value:e}),xn=e=>({status:`valid`,value:e}),Sn=e=>e.status===`aborted`,Cn=e=>e.status===`dirty`,wn=e=>e.status===`valid`,Tn=e=>typeof Promise<`u`&&e instanceof Promise;function En(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function Dn(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var j;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(j||={});var On,kn,An=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},jn=(e,t)=>{if(wn(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){if(this._error)return this._error;let t=new fn(e.common.issues);return this._error=t,this._error}}};function Mn(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var Nn=class{get description(){return this._def.description}_getType(e){return un(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:un(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new yn,ctx:{common:e.parent.common,data:e.data,parsedType:un(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Tn(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:un(e)};return jn(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:un(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return wn(n)?{value:n.value}:{issues:t.common.issues}}catch(e){((e?.message)?.toLowerCase())?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>wn(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:un(e)},r=this._parse({data:e,path:n.path,parent:n});return jn(n,await(Tn(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:O.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new Ir({schema:this,typeName:N.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return Lr.create(this,this._def)}nullable(){return Rr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return _r.create(this)}promise(){return Fr.create(this,this._def)}or(e){return br.create([this,e],this._def)}and(e){return wr.create(this,e,this._def)}transform(e){return new Ir({...Mn(this._def),schema:this,typeName:N.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new M({...Mn(this._def),innerType:this,defaultValue:t,typeName:N.ZodDefault})}brand(){return new Hr({typeName:N.ZodBranded,type:this,...Mn(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new zr({...Mn(this._def),innerType:this,catchValue:t,typeName:N.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Ur.create(this,e)}readonly(){return Wr.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Pn=/^c[^\s-]{8,}$/i,Fn=/^[0-9a-z]+$/,In=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ln=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Rn=/^[a-z0-9_-]{21}$/i,zn=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Bn=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Vn=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Hn=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,Un,Wn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Gn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Kn=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,qn=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Jn=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Yn=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Xn=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,Zn=RegExp(`^${Xn}$`);function Qn(e){let t=`([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`),t}function $n(e){return RegExp(`^${Qn(e)}$`)}function er(e){let t=`${Xn}T${Qn(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function tr(e,t){return!!((t===`v4`||!t)&&Wn.test(e)||(t===`v6`||!t)&&Kn.test(e))}function nr(e,t){if(!zn.test(e))return!1;try{let[n]=e.split(`.`),r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||!i.typ||!i.alg||t&&i.alg!==t)}catch{return!1}}function rr(e,t){return!!((t===`v4`||!t)&&Gn.test(e)||(t===`v6`||!t)&&qn.test(e))}var ir=class e extends Nn{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==D.string){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.string,received:t.parsedType}),A}let t=new yn,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?k(n,{code:O.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&k(n,{code:O.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)Vn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`email`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)Un||=new RegExp(Hn,`u`),Un.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`emoji`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)Ln.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`uuid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)Rn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`nanoid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)Pn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`cuid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)Fn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`cuid2`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)In.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`ulid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),k(n,{validation:`url`,code:O.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`regex`,code:O.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?er(r).test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?Zn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?$n(r).test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Bn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`duration`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?tr(e.data,r.version)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`ip`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?nr(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`jwt`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?rr(e.data,r.version)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`cidr`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?Jn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`base64`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?Yn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`base64url`,code:O.invalid_string,message:r.message}),t.dirty()):cn.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:O.invalid_string,...j.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...j.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...j.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...j.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...j.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...j.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...j.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...j.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...j.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...j.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...j.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...j.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...j.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...j.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...j.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...j.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...j.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...j.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...j.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...j.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...j.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...j.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...j.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...j.errToObj(t)})}nonempty(e){return this.min(1,j.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};ir.create=e=>new ir({checks:[],typeName:N.ZodString,coerce:e?.coerce??!1,...Mn(e)});function ar(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return parseInt(e.toFixed(i).replace(`.`,``))%parseInt(t.toFixed(i).replace(`.`,``))/10**i}var or=class e extends Nn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==D.number){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.number,received:t.parsedType}),A}let t,n=new yn;for(let r of this._def.checks)r.kind===`int`?cn.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),k(t,{code:O.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?ar(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),k(t,{code:O.not_finite,message:r.message}),n.dirty()):cn.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,j.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,j.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,j.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,j.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:j.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:j.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:j.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:j.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:j.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:j.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&cn.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};or.create=e=>new or({checks:[],typeName:N.ZodNumber,coerce:e?.coerce||!1,...Mn(e)});var sr=class e extends Nn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==D.bigint)return this._getInvalidInput(e);let t,n=new yn;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):cn.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.bigint,received:t.parsedType}),A}gte(e,t){return this.setLimit(`min`,e,!0,j.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,j.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,j.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,j.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:j.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:j.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};sr.create=e=>new sr({checks:[],typeName:N.ZodBigInt,coerce:e?.coerce??!1,...Mn(e)});var cr=class extends Nn{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==D.boolean){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.boolean,received:t.parsedType}),A}return xn(e.data)}};cr.create=e=>new cr({typeName:N.ZodBoolean,coerce:e?.coerce||!1,...Mn(e)});var lr=class e extends Nn{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==D.date){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.date,received:t.parsedType}),A}if(isNaN(e.data.getTime()))return k(this._getOrReturnCtx(e),{code:O.invalid_date}),A;let t=new yn,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):cn.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:j.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:j.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};lr.create=e=>new lr({checks:[],coerce:e?.coerce||!1,typeName:N.ZodDate,...Mn(e)});var ur=class extends Nn{_parse(e){if(this._getType(e)!==D.symbol){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.symbol,received:t.parsedType}),A}return xn(e.data)}};ur.create=e=>new ur({typeName:N.ZodSymbol,...Mn(e)});var dr=class extends Nn{_parse(e){if(this._getType(e)!==D.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.undefined,received:t.parsedType}),A}return xn(e.data)}};dr.create=e=>new dr({typeName:N.ZodUndefined,...Mn(e)});var fr=class extends Nn{_parse(e){if(this._getType(e)!==D.null){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.null,received:t.parsedType}),A}return xn(e.data)}};fr.create=e=>new fr({typeName:N.ZodNull,...Mn(e)});var pr=class extends Nn{constructor(){super(...arguments),this._any=!0}_parse(e){return xn(e.data)}};pr.create=e=>new pr({typeName:N.ZodAny,...Mn(e)});var mr=class extends Nn{constructor(){super(...arguments),this._unknown=!0}_parse(e){return xn(e.data)}};mr.create=e=>new mr({typeName:N.ZodUnknown,...Mn(e)});var hr=class extends Nn{_parse(e){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.never,received:t.parsedType}),A}};hr.create=e=>new hr({typeName:N.ZodNever,...Mn(e)});var gr=class extends Nn{_parse(e){if(this._getType(e)!==D.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.void,received:t.parsedType}),A}return xn(e.data)}};gr.create=e=>new gr({typeName:N.ZodVoid,...Mn(e)});var _r=class e extends Nn{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==D.array)return k(t,{code:O.invalid_type,expected:D.array,received:t.parsedType}),A;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(k(t,{code:e?O.too_big:O.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(k(t,{code:O.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(k(t,{code:O.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new An(t,e,t.path,n)))).then(e=>yn.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new An(t,e,t.path,n)));return yn.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:j.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:j.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:j.toString(n)}})}nonempty(e){return this.min(1,e)}};_r.create=(e,t)=>new _r({type:e,minLength:null,maxLength:null,exactLength:null,typeName:N.ZodArray,...Mn(t)});function vr(e){if(e instanceof yr){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=Lr.create(vr(r))}return new yr({...e._def,shape:()=>t})}return e instanceof _r?new _r({...e._def,type:vr(e.element)}):e instanceof Lr?Lr.create(vr(e.unwrap())):e instanceof Rr?Rr.create(vr(e.unwrap())):e instanceof Tr?Tr.create(e.items.map(e=>vr(e))):e}var yr=class e extends Nn{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=cn.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==D.object){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.object,received:t.parsedType}),A}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof hr&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new An(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof hr){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(k(n,{code:O.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new An(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>yn.mergeObjectSync(t,e)):yn.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return j.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{var r;let i=(r=this._def).errorMap?.call(r,e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:j.errToObj(t).message??i}:{message:i}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:N.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};return cn.objectKeys(t).forEach(e=>{t[e]&&this.shape[e]&&(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}omit(t){let n={};return cn.objectKeys(this.shape).forEach(e=>{t[e]||(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}deepPartial(){return vr(this)}partial(t){let n={};return cn.objectKeys(this.shape).forEach(e=>{let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}),new e({...this._def,shape:()=>n})}required(t){let n={};return cn.objectKeys(this.shape).forEach(e=>{if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof Lr;)t=t._def.innerType;n[e]=t}}),new e({...this._def,shape:()=>n})}keyof(){return Mr(cn.objectKeys(this.shape))}};yr.create=(e,t)=>new yr({shape:()=>e,unknownKeys:`strip`,catchall:hr.create(),typeName:N.ZodObject,...Mn(t)}),yr.strictCreate=(e,t)=>new yr({shape:()=>e,unknownKeys:`strict`,catchall:hr.create(),typeName:N.ZodObject,...Mn(t)}),yr.lazycreate=(e,t)=>new yr({shape:e,unknownKeys:`strip`,catchall:hr.create(),typeName:N.ZodObject,...Mn(t)});var br=class extends Nn{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new fn(e.ctx.common.issues));return k(t,{code:O.invalid_union,unionErrors:n}),A}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new fn(e));return k(t,{code:O.invalid_union,unionErrors:i}),A}}get options(){return this._def.options}};br.create=(e,t)=>new br({options:e,typeName:N.ZodUnion,...Mn(t)});var xr=e=>e instanceof Ar?xr(e.schema):e instanceof Ir?xr(e.innerType()):e instanceof jr?[e.value]:e instanceof Nr?e.options:e instanceof Pr?cn.objectValues(e.enum):e instanceof M?xr(e._def.innerType):e instanceof dr?[void 0]:e instanceof fr?[null]:e instanceof Lr?[void 0,...xr(e.unwrap())]:e instanceof Rr?[null,...xr(e.unwrap())]:e instanceof Hr||e instanceof Wr?xr(e.unwrap()):e instanceof zr?xr(e._def.innerType):[],Sr=class e extends Nn{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.object)return k(t,{code:O.invalid_type,expected:D.object,received:t.parsedType}),A;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(k(t,{code:O.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),A)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=xr(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:N.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Mn(r)})}};function Cr(e,t){let n=un(e),r=un(t);if(e===t)return{valid:!0,data:e};if(n===D.object&&r===D.object){let n=cn.objectKeys(t),r=cn.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=Cr(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}if(n===D.array&&r===D.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Cr(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}return n===D.date&&r===D.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}var wr=class extends Nn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(Sn(e)||Sn(r))return A;let i=Cr(e.value,r.value);return i.valid?((Cn(e)||Cn(r))&&t.dirty(),{status:t.value,value:i.data}):(k(n,{code:O.invalid_intersection_types}),A)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};wr.create=(e,t,n)=>new wr({left:e,right:t,typeName:N.ZodIntersection,...Mn(n)});var Tr=class e extends Nn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.array)return k(n,{code:O.invalid_type,expected:D.array,received:n.parsedType}),A;if(n.data.length<this._def.items.length)return k(n,{code:O.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),A;!this._def.rest&&n.data.length>this._def.items.length&&(k(n,{code:O.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new An(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>yn.mergeArray(t,e)):yn.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};Tr.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new Tr({items:e,typeName:N.ZodTuple,rest:null,...Mn(t)})};var Er=class e extends Nn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.object)return k(n,{code:O.invalid_type,expected:D.object,received:n.parsedType}),A;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new An(n,e,n.path,e)),value:a._parse(new An(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?yn.mergeObjectAsync(t,r):yn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Nn?new e({keyType:t,valueType:n,typeName:N.ZodRecord,...Mn(r)}):new e({keyType:ir.create(),valueType:t,typeName:N.ZodRecord,...Mn(n)})}},Dr=class extends Nn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.map)return k(n,{code:O.invalid_type,expected:D.map,received:n.parsedType}),A;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new An(n,e,n.path,[a,`key`])),value:i._parse(new An(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return A;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return A;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};Dr.create=(e,t,n)=>new Dr({valueType:t,keyType:e,typeName:N.ZodMap,...Mn(n)});var Or=class e extends Nn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.set)return k(n,{code:O.invalid_type,expected:D.set,received:n.parsedType}),A;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(k(n,{code:O.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(k(n,{code:O.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return A;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new An(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:j.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:j.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Or.create=(e,t)=>new Or({valueType:e,minSize:null,maxSize:null,typeName:N.ZodSet,...Mn(t)});var kr=class e extends Nn{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.function)return k(t,{code:O.invalid_type,expected:D.function,received:t.parsedType}),A;function n(e,n){return _n({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,gn(),pn].filter(e=>!!e),issueData:{code:O.invalid_arguments,argumentsError:n}})}function r(e,n){return _n({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,gn(),pn].filter(e=>!!e),issueData:{code:O.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Fr){let e=this;return xn(async function(...t){let o=new fn([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}{let e=this;return xn(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new fn([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new fn([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:Tr.create(t).rest(mr.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||Tr.create([]).rest(mr.create()),returns:n||mr.create(),typeName:N.ZodFunction,...Mn(r)})}},Ar=class extends Nn{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};Ar.create=(e,t)=>new Ar({getter:e,typeName:N.ZodLazy,...Mn(t)});var jr=class extends Nn{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return k(t,{received:t.data,code:O.invalid_literal,expected:this._def.value}),A}return{status:`valid`,value:e.data}}get value(){return this._def.value}};jr.create=(e,t)=>new jr({value:e,typeName:N.ZodLiteral,...Mn(t)});function Mr(e,t){return new Nr({values:e,typeName:N.ZodEnum,...Mn(t)})}var Nr=class e extends Nn{constructor(){super(...arguments),On.set(this,void 0)}_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return k(t,{expected:cn.joinValues(n),received:t.parsedType,code:O.invalid_type}),A}if(En(this,On,`f`)||Dn(this,On,new Set(this._def.values),`f`),!En(this,On,`f`).has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return k(t,{received:t.data,code:O.invalid_enum_value,options:n}),A}return xn(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};On=new WeakMap,Nr.create=Mr;var Pr=class extends Nn{constructor(){super(...arguments),kn.set(this,void 0)}_parse(e){let t=cn.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==D.string&&n.parsedType!==D.number){let e=cn.objectValues(t);return k(n,{expected:cn.joinValues(e),received:n.parsedType,code:O.invalid_type}),A}if(En(this,kn,`f`)||Dn(this,kn,new Set(cn.getValidEnumValues(this._def.values)),`f`),!En(this,kn,`f`).has(e.data)){let e=cn.objectValues(t);return k(n,{received:n.data,code:O.invalid_enum_value,options:e}),A}return xn(e.data)}get enum(){return this._def.values}};kn=new WeakMap,Pr.create=(e,t)=>new Pr({values:e,typeName:N.ZodNativeEnum,...Mn(t)});var Fr=class extends Nn{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==D.promise&&t.common.async===!1?(k(t,{code:O.invalid_type,expected:D.promise,received:t.parsedType}),A):xn((t.parsedType===D.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Fr.create=(e,t)=>new Fr({type:e,typeName:N.ZodPromise,...Mn(t)});var Ir=class extends Nn{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===N.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{k(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return A;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?A:r.status===`dirty`||t.value===`dirty`?bn(r.value):r});{if(t.value===`aborted`)return A;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?A:r.status===`dirty`||t.value===`dirty`?bn(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?A:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?A:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!wn(e))return e;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>wn(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):e);cn.assertNever(r)}};Ir.create=(e,t,n)=>new Ir({schema:e,typeName:N.ZodEffects,effect:t,...Mn(n)}),Ir.createWithPreprocess=(e,t,n)=>new Ir({schema:t,effect:{type:`preprocess`,transform:e},typeName:N.ZodEffects,...Mn(n)});var Lr=class extends Nn{_parse(e){return this._getType(e)===D.undefined?xn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Lr.create=(e,t)=>new Lr({innerType:e,typeName:N.ZodOptional,...Mn(t)});var Rr=class extends Nn{_parse(e){return this._getType(e)===D.null?xn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Rr.create=(e,t)=>new Rr({innerType:e,typeName:N.ZodNullable,...Mn(t)});var M=class extends Nn{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===D.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};M.create=(e,t)=>new M({innerType:e,typeName:N.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...Mn(t)});var zr=class extends Nn{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Tn(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new fn(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new fn(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};zr.create=(e,t)=>new zr({innerType:e,typeName:N.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...Mn(t)});var Br=class extends Nn{_parse(e){if(this._getType(e)!==D.nan){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.nan,received:t.parsedType}),A}return{status:`valid`,value:e.data}}};Br.create=e=>new Br({typeName:N.ZodNaN,...Mn(e)});var Vr=Symbol(`zod_brand`),Hr=class extends Nn{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},Ur=class e extends Nn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?A:e.status===`dirty`?(t.dirty(),bn(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?A:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:N.ZodPipeline})}},Wr=class extends Nn{_parse(e){let t=this._def.innerType._parse(e),n=e=>(wn(e)&&(e.value=Object.freeze(e.value)),e);return Tn(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};Wr.create=(e,t)=>new Wr({innerType:e,typeName:N.ZodReadonly,...Mn(t)});function Gr(e,t){let n=typeof e==`function`?e(t):typeof e==`string`?{message:e}:e;return typeof n==`string`?{message:n}:n}function Kr(e,t={},n){return e?pr.create().superRefine((r,i)=>{let a=e(r);if(a instanceof Promise)return a.then(e=>{if(!e){let e=Gr(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}});if(!a){let e=Gr(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}}):pr.create()}var qr={object:yr.lazycreate},N;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(N||={});var Jr=(e,t={message:`Input not instance of ${e.name}`})=>Kr(t=>t instanceof e,t),Yr=ir.create,Xr=or.create,P=Br.create,Zr=sr.create,Qr=cr.create,F=lr.create,$r=ur.create,I=dr.create,ei=fr.create,ti=pr.create,ni=mr.create,ri=hr.create,ii=gr.create,ai=_r.create,oi=yr.create,si=yr.strictCreate,ci=br.create,li=Sr.create,ui=wr.create,di=Tr.create,fi=Er.create,pi=Dr.create,mi=Or.create,hi=kr.create,gi=Ar.create,_i=jr.create,vi=Nr.create,yi=Pr.create,bi=Fr.create,xi=Ir.create,Si=Lr.create,Ci=Rr.create,wi=Ir.createWithPreprocess,Ti=Ur.create,Ei=Object.freeze({__proto__:null,defaultErrorMap:pn,setErrorMap:hn,getErrorMap:gn,makeIssue:_n,EMPTY_PATH:vn,addIssueToContext:k,ParseStatus:yn,INVALID:A,DIRTY:bn,OK:xn,isAborted:Sn,isDirty:Cn,isValid:wn,isAsync:Tn,get util(){return cn},get objectUtil(){return ln},ZodParsedType:D,getParsedType:un,ZodType:Nn,datetimeRegex:er,ZodString:ir,ZodNumber:or,ZodBigInt:sr,ZodBoolean:cr,ZodDate:lr,ZodSymbol:ur,ZodUndefined:dr,ZodNull:fr,ZodAny:pr,ZodUnknown:mr,ZodNever:hr,ZodVoid:gr,ZodArray:_r,ZodObject:yr,ZodUnion:br,ZodDiscriminatedUnion:Sr,ZodIntersection:wr,ZodTuple:Tr,ZodRecord:Er,ZodMap:Dr,ZodSet:Or,ZodFunction:kr,ZodLazy:Ar,ZodLiteral:jr,ZodEnum:Nr,ZodNativeEnum:Pr,ZodPromise:Fr,ZodEffects:Ir,ZodTransformer:Ir,ZodOptional:Lr,ZodNullable:Rr,ZodDefault:M,ZodCatch:zr,ZodNaN:Br,BRAND:Vr,ZodBranded:Hr,ZodPipeline:Ur,ZodReadonly:Wr,custom:Kr,Schema:Nn,ZodSchema:Nn,late:qr,get ZodFirstPartyTypeKind(){return N},coerce:{string:e=>ir.create({...e,coerce:!0}),number:e=>or.create({...e,coerce:!0}),boolean:e=>cr.create({...e,coerce:!0}),bigint:e=>sr.create({...e,coerce:!0}),date:e=>lr.create({...e,coerce:!0})},any:ti,array:ai,bigint:Zr,boolean:Qr,date:F,discriminatedUnion:li,effect:xi,enum:vi,function:hi,instanceof:Jr,intersection:ui,lazy:gi,literal:_i,map:pi,nan:P,nativeEnum:yi,never:ri,null:ei,nullable:Ci,number:Xr,object:oi,oboolean:()=>Qr().optional(),onumber:()=>Xr().optional(),optional:Si,ostring:()=>Yr().optional(),pipeline:Ti,preprocess:wi,promise:bi,record:fi,set:mi,strictObject:si,string:Yr,symbol:$r,transformer:xi,tuple:di,undefined:I,union:ci,unknown:ni,void:ii,NEVER:A,ZodIssueCode:O,quotelessJson:dn,ZodError:fn}),Di={name:`@imgly/background-removal`,version:`1.7.0`,description:`Background Removal in the Browser`,keywords:[`background-removal`,`client-side`,`data-privacy`,`image-segmentation`,`image-matting`,`onnx`],repository:{type:`git`,url:`git+https://github.com/imgly/background-removal-js.git`},license:`SEE LICENSE IN LICENSE.md`,author:{name:`IMG.LY GmbH`,email:`support@img.ly`,url:`https://img.ly`},bugs:{email:`support@img.ly`},source:`./src/index.ts`,main:`./dist/index.cjs`,module:`./dist/index.mjs`,types:`./dist/src/index.d.ts`,exports:{".":{require:`./dist/index.cjs`,import:`./dist/index.mjs`,types:`./dist/src/index.d.ts`}},homepage:`https://img.ly/showcases/cesdk/web/background-removal`,files:[`LICENSE.md`,`README.md`,`CHANGELOG.md`,`ThirdPartyLicenses.json`,`dist/`,`bin/`],scripts:{start:`pnpm run watch`,clean:`npx rimraf dist`,test:`true`,resources:`node ../../scripts/package-resources.mjs`,"changelog:create":`node ../../scripts/changelog/changelog-create.mjs`,"changelog:generate":`node ../../scripts/changelog/changelog-generate.mjs`,build:`pnpm run clean && pnpm run types && pnpm run resources && pnpm run changelog:generate && node scripts/build.mjs`,types:` npx tsc --declaration --emitDeclarationOnly --declarationDir dist --declarationMap`,watch:`pnpm run clean && pnpm run resources && pnpm run changelog:generate && node scripts/watch.mjs`,"publish:latest":`pnpm publish --tag latest --access public`,"publish:next":`pnpm publish --tag next --access public`,"package:pack":`pnpm pack . --pack-destination ../../releases`,"check:all":`pnpm run check:pretty`,"check:pretty":`prettier --list-different './src/**/*.{ts,tsx}'`,pretty:`prettier --write './src/**/*.{ts,tsx}'`},dependencies:{"lodash-es":`^4.17.21`,ndarray:`~1.0.0`,zod:`^3.23.8`},peerDependencies:{"onnxruntime-web":`1.21.0`},devDependencies:{"@types/lodash-es":`^4.17.12`,"@types/ndarray":`~1.0.14`,"@types/node":`~20.3.0`,assert:`~2.0.0`,esbuild:`~0.18.0`,glob:`~10.3.0`,"npm-dts":`~1.3.0`,process:`~0.11.0`,"ts-loader":`~9.4.0`,tslib:`~2.5.0`,typescript:`~5.1.0`,util:`~0.12.0`,webpack:`~5.85.0`,"webpack-cli":`~5.1.0`}},Oi=Ei.object({publicPath:Ei.string().optional().describe(`The public path to the wasm files and the onnx model.`).default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(e=>e.replace("${PACKAGE_NAME}",Di.name).replace("${PACKAGE_VERSION}",Di.version)),debug:Ei.boolean().default(!1).describe(`Whether to enable debug logging.`),rescale:Ei.boolean().default(!0).describe(`Whether to rescale the image.`),device:Ei.enum([`cpu`,`gpu`]).default(`cpu`).describe(`The device to run the model on.`),proxyToWorker:Ei.boolean().default(!1).describe(`Whether to proxy inference to a web worker.`),fetchArgs:Ei.any().default({}).describe(`Arguments to pass to fetch when loading the model.`),progress:Ei.function().args(Ei.string(),Ei.number(),Ei.number()).returns(Ei.void()).describe(`Progress callback.`).optional(),model:Ei.preprocess(e=>{switch(e){case`large`:return`isnet`;case`small`:return`isnet_quint8`;case`medium`:return`isnet_fp16`;default:return e}},Ei.enum([`isnet`,`isnet_fp16`,`isnet_quint8`])).default(`medium`),output:Ei.object({format:Ei.enum([`image/png`,`image/jpeg`,`image/webp`,`image/x-rgba8`,`image/x-alpha8`]).default(`image/png`),quality:Ei.number().default(.8)}).default({})}).default({}).transform(e=>(e.debug&&console.log(`Config:`,e),e.debug&&!e.progress&&(e.progress=e.progress??((e,t,n)=>{console.debug(`Downloading ${e}: ${t} of ${n}`)}),crossOriginIsolated||e.debug&&console.debug(`Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.`)),e));function ki(e){return Oi.parse(e??{})}var Ai=h(v());async function ji(e){e.debug&&console.debug(`Loading model...`,e.model);let t=e.model;return await on(await(await nn(`/models/${t}`,e)).arrayBuffer(),e)}async function Mi(e){e=ki(e);let t=await ji(e);return{config:e,session:{base:t}}}async function Ni(e,t,n){let r=1024,[i,a,o]=e.shape,s=qt(e,r,r,!1),c=Jt(s),l=await sn(n.base,[[`input`,c]],[`output`],t),u=Xt((0,Ai.default)(l[0].data,[r,r,1]));return t.rescale?(u=qt(u,a,i,!1),[u,e]):[u,s]}var Pi=Lt(Mi,e=>JSON.stringify(e));async function Fi(e,t){let{config:n,session:r}=await Pi(t);n.progress&&n.progress(`compute:decode`,0,4);let i=await Yt(e,n);n.progress?.(`compute:inference`,1,4);let[a,o]=await Ni(i,n,r);n.progress?.(`compute:mask`,2,4);let s=o,[c,l]=s.shape,u=c*l;for(let e=0;e<u;e+=1)s.data[4*e+3]=a.data[e];n.progress?.(`compute:encode`,3,4);let d=await Ht(s,n.output.quality,n.output.format);return n.progress?.(`compute:encode`,4,4),d}var Ii=e({InferenceSession:()=>Pa,TRACE:()=>Da,TRACE_FUNC_BEGIN:()=>ka,TRACE_FUNC_END:()=>Aa,Tensor:()=>Ta,default:()=>zg,env:()=>ra,registerBackend:()=>qi}),Li=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,zi=Object.getOwnPropertyNames,Bi=Object.prototype.hasOwnProperty,Vi=(e=>typeof t<`u`?t:typeof Proxy<`u`?new Proxy(e,{get:(e,n)=>(typeof t<`u`?t:e)[n]}):e)(function(e){if(typeof t<`u`)return t.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),Hi=(e,t)=>{for(var n in t)Li(e,n,{get:t[n],enumerable:!0})},Ui=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of zi(t))!Bi.call(e,i)&&i!==n&&Li(e,i,{get:()=>t[i],enumerable:!(r=Ri(t,i))||r.enumerable});return e},Wi=e=>Ui(Li({},`__esModule`,{value:!0}),e),Gi,Ki,qi,Ji,Yi,Xi=L(()=>{Gi=new Map,Ki=[],qi=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Gi.get(e);if(r===void 0)Gi.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Ki.indexOf(e);t!==-1&&Ki.splice(t,1);for(let t=0;t<Ki.length;t++)if(Gi.get(Ki[t]).priority<=n){Ki.splice(t,0,e);return}Ki.push(e)}return}throw TypeError(`not a valid backend`)},Ji=async e=>{let t=Gi.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Yi=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Ki:n,i,a=[],o=new Set;for(let e of r){let t=await Ji(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),Zi=L(()=>{Xi()}),Qi,$i=L(()=>{Qi=`1.21.0`}),ea,ta,na=L(()=>{$i(),ea=`warning`,ta={wasm:{},webgl:{},webgpu:{},versions:{common:Qi},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);ea=e}},get logLevel(){return ea}},Object.defineProperty(ta,"logLevel",{enumerable:!0})}),ra,ia=L(()=>{na(),ra=ta}),aa,oa,sa=L(()=>{aa=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},oa=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),ca,la,ua,da,fa,pa,ma=L(()=>{wa(),ca=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new Ca(`float32`,u,[1,4,n,r]):new Ca(`float32`,u,[1,3,n,r])},la=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,ca(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(ca(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return ca(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},ua=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new Ca({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},da=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Ca({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},fa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Ca({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},pa=(e,t,n)=>new Ca({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),ha,ga,_a,va,ya=L(()=>{ha=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),ga=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),_a=!1,va=()=>{if(!_a){_a=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(ha.set(`int64`,BigInt64Array),ga.set(BigInt64Array,`int64`)),t&&(ha.set(`uint64`,BigUint64Array),ga.set(BigUint64Array,`uint64`)),r?(ha.set(`float16`,n),ga.set(n,`float16`)):ha.set(`float16`,Uint16Array)}}}),ba,xa,Sa=L(()=>{wa(),ba=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},xa=(e,t)=>{switch(e.location){case`cpu`:return new Ca(e.type,e.data,t);case`cpu-pinned`:return new Ca({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new Ca({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new Ca({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new Ca({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ca,wa=L(()=>{sa(),ma(),ya(),Sa(),Ca=class{constructor(e,t,n){va();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=ha.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=ha.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=ga.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=ba(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return la(e,t)}static fromTexture(e,t){return ua(e,t)}static fromGpuBuffer(e,t){return da(e,t)}static fromMLTensor(e,t){return fa(e,t)}static fromPinnedBuffer(e,t,n){return pa(e,t,n)}toDataURL(e){return aa(this,e)}toImageData(e){return oa(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return xa(this,e)}}}),Ta,Ea=L(()=>{wa(),Ta=Ca}),Da,Oa,ka,Aa,ja=L(()=>{na(),Da=(e,t)=>{(typeof ta.trace>`u`?!ta.wasm.trace:!ta.trace)||console.timeStamp(`${e}::ORT::${t}`)},Oa=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),Da(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},ka=e=>{(typeof ta.trace>`u`?!ta.wasm.trace:!ta.trace)||Oa(`BEGIN`,e)},Aa=e=>{(typeof ta.trace>`u`?!ta.wasm.trace:!ta.trace)||Oa(`END`,e)}}),Ma,Na=L(()=>{Xi(),Ea(),ja(),Ma=class e{constructor(e){this.handler=e}async run(e,t,n){ka();let r={},i={};if(typeof e!=`object`||!e||e instanceof Ta||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof Ta)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof Ta)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];s[e]=t instanceof Ta?t:new Ta(t.type,t.data,t.dims)}return Aa(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){ka();let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await Yi(o),l=await s.createInferenceSessionHandler(a,c);return Aa(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Pa,Fa=L(()=>{Na(),Pa=Ma}),Ia=L(()=>{}),La=L(()=>{}),Ra=L(()=>{}),za=L(()=>{}),Ba={};Hi(Ba,{InferenceSession:()=>Pa,TRACE:()=>Da,TRACE_FUNC_BEGIN:()=>ka,TRACE_FUNC_END:()=>Aa,Tensor:()=>Ta,env:()=>ra,registerBackend:()=>qi});var Va=L(()=>{Zi(),ia(),Fa(),Ea(),Ia(),La(),ja(),Ra(),za()}),Ha=L(()=>{}),Ua={};Hi(Ua,{default:()=>Ka});var Wa,Ga,Ka,qa=L(()=>{lg(),Co(),mo(),Wa=`ort-wasm-proxy-worker`,Ga=globalThis.self?.name===Wa,Ga&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:xo(n.wasm).then(()=>{Qh(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;$h(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=ng(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;rg(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:ig(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;og(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},cg([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:sg(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),Ka=Ga?null:e=>new Worker(e??no,{type:`module`,name:Wa})}),Ja={};Hi(Ja,{default:()=>Za});var Ya,Xa,Za,Qa,$a=L(()=>{Xa=(Ya=import.meta.url,async function(e={}){var t,n,r=e,i=new Promise((e,r)=>{t=e,n=r}),a=typeof window==`object`,o=typeof WorkerGlobalScope<`u`,s=o&&self.name?.startsWith(`em-pthread`);r.mountExternalData=(e,t)=>{e.startsWith(`./`)&&(e=e.substring(2)),(r.Bd||=new Map).set(e,t)},r.unmountExternalData=()=>{delete r.Bd};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=()=>{let e=(e,t,n)=>(...r)=>{let i=A,a=t?.();r=e(...r);let o=t?.();return a!==o&&(e=o,n(a),t=n=null),A==i?r:new Promise((e,t)=>{Tn={resolve:e,reject:t}})},t=e=>async(...t)=>{try{if(r.Cd)throw Error(`Session already started`);let n=r.Cd={be:t[0],errors:[]},i=await e(...t);if(r.Cd!==n)throw Error(`Session mismatch`);r.Dd?.flush();let a=n.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{r.Cd=null}};r._OrtCreateSession=e(r._OrtCreateSession,()=>r._OrtCreateSession,e=>r._OrtCreateSession=e),r._OrtRun=t(e(r._OrtRun,()=>r._OrtRun,e=>r._OrtRun=e)),r._OrtRunWithBinding=t(e(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,e=>r._OrtRunWithBinding=e)),r._OrtBindInput=e(r._OrtBindInput,()=>r._OrtBindInput,e=>r._OrtBindInput=e),l=void 0};r.jsepInit=(e,t)=>{if(l?.(),e===`webgpu`){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=t;let e=r.Dd;r.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),r.jsepGetBuffer=t=>e.getBuffer(t),r.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),r.jsepOnCreateSession=t=>{e.onCreateSession(t)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepOnRunStart=t=>e.onRunStart(t),r.$d=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=t,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let e=r.Dd;r.jsepOnRunStart=t=>e.onRunStart(t),r.jsepOnRunEnd=e.onRunEnd.bind(e),r.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),r.jsepRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),r.jsepCreateMLContext=t=>e.createMLContext(t),r.jsepRegisterMLConstant=(t,n,i,a,o)=>e.registerMLConstant(t,n,i,a,o,r.Bd),r.jsepRegisterGraphInput=e.registerGraphInput.bind(e),r.jsepIsGraphInput=e.isGraphInput.bind(e),r.jsepCreateTemporaryTensor=e.createTemporaryTensor.bind(e)}};var u,d,f=Object.assign({},r),p=(e,t)=>{throw t},m=``;(a||o)&&(o?m=self.location.href:typeof document<`u`&&document.currentScript&&(m=document.currentScript.src),Ya&&(m=Ya),m=m.startsWith(`blob:`)?``:m.slice(0,m.replace(/[?#].*/,``).lastIndexOf(`/`)+1),o&&(d=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),u=async e=>{if(ue(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var h=console.log.bind(console),g=console.error.bind(console),_=h,v=g;Object.assign(r,f),f=null;var y,b,x,S,ee,te,ne,re,ie,ae,C,oe,se,ce=r.wasmBinary,le=!1,ue=e=>e.startsWith(`file://`);function de(){return y.buffer!=S.buffer&&ye(),S}function fe(){return y.buffer!=S.buffer&&ye(),ee}function pe(){return y.buffer!=S.buffer&&ye(),te}function me(){return y.buffer!=S.buffer&&ye(),ne}function w(){return y.buffer!=S.buffer&&ye(),re}function T(){return y.buffer!=S.buffer&&ye(),ie}function he(){return y.buffer!=S.buffer&&ye(),ae}function ge(){return y.buffer!=S.buffer&&ye(),se}if(s){let e=function(t){try{var n=t.data,i=n.yd;if(i===`load`){let t=[];self.onmessage=e=>t.push(e),self.startWorker=()=>{postMessage({yd:`loaded`});for(let n of t)e(n);self.onmessage=e};for(let e of n.Od)r[e]&&!r[e].proxy||(r[e]=(...t)=>{postMessage({yd:`callHandler`,Nd:e,args:t})},e==`print`&&(_=r[e]),e==`printErr`&&(v=r[e]));y=n.he,ye(),_e(n.ie)}else if(i===`run`){Ke(n.xd),Gr(n.xd,0,0,1,0,0),Ue(),ln(n.xd),ve||=(Vr(),!0);try{qe(n.de,n.Fd)}catch(e){if(e!=`unwind`)throw e}}else n.target!==`setimmediate`&&(i===`checkMailbox`?ve&&D():i&&(v(`worker: received unknown command ${i}`),v(n)))}catch(e){throw Kr(),e}};var _e,ve=!1;v=function(...e){e=e.join(` `),console.error(e)},self.alert=function(...e){postMessage({yd:`alert`,text:e.join(` `),fe:Hr()})},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}function ye(){var e=y.buffer;r.HEAP8=S=new Int8Array(e),r.HEAP16=te=new Int16Array(e),r.HEAPU8=ee=new Uint8Array(e),r.HEAPU16=ne=new Uint16Array(e),r.HEAP32=re=new Int32Array(e),r.HEAPU32=ie=new Uint32Array(e),r.HEAPF32=ae=new Float32Array(e),r.HEAPF64=se=new Float64Array(e),r.HEAP64=C=new BigInt64Array(e),r.HEAPU64=oe=new BigUint64Array(e)}function be(){s?startWorker(r):M.Bb()}s||(y=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var xe,Se=0,Ce=null;function we(){if(--Se==0&&Ce){var e=Ce;Ce=null,e()}}function Te(e){throw v(e=`Aborted(`+e+`)`),le=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),n(e),e}function Ee(){return{a:{Ta:ke,Va:Oe,W:Ye,la:Ze,b:tt,u:nt,R:rt,Za:it,d:at,pb:st,g:$e,T:dt,Ga:ft,lb:ht,nb:gt,Ha:_t,Ea:vt,wb:yt,Da:bt,pa:xt,mb:St,jb:Ct,Fa:wt,kb:Tt,Ma:Ot,za:Ft,eb:Lt,cb:Gt,ya:qt,V:Jt,N:Yt,db:Xt,ma:an,fb:on,zb:sn,hb:un,qb:dn,ab:fn,Aa:pn,yb:ln,Ja:mn,S:_n,Wa:vn,$:j,G:kn,E:Mn,m:Bt,H:Pn,B:Rn,X:zn,J:Bn,v:Vn,O:Hn,D:Un,t:Wn,A:Gn,z:Kn,w:qn,r:Jn,tb:Yn,ub:$n,vb:er,rb:tr,sb:nr,bb:ar,Oa:or,La:lr,y:fr,ja:pr,Ba:mr,Ka:sr,qa:hr,Ia:gr,ib:_r,U:ir,fa:vr,Sa:yr,gb:br,Qa:wr,Pa:Tr,Ab:kr,Ca:Ar,ob:Le,aa:jr,oa:Mr,xb:Nr,na:Fr,$a:xa,ia:Pa,sa:za,ga:ya,da:Da,ua:La,p:_a,e:ta,c:$i,ea:Ta,f:na,n:ia,k:pa,Y:oa,ka:ma,j:va,wa,Ra:Ha,ca:Ma,Ua:Va,P:Ea,K:ca,_:ja,Q:ba,Z:Fa,x:sa,l:ea,va:Aa,i:Qi,h:aa,ra:Ba,ta:Ra,o:ra,q:la,s:da,I:fa,C:ga,L:ha,xa:Ca,_a:Sa,F:Na,Ya:Oa,ba:Ia,M:ua,Xa:ka,ha:Ir,a:y,Na:Fe}}}var De={1319426:()=>typeof wasmOffsetConverter<`u`,1319483:(e,t,n,i,a)=>{if(r===void 0||!r.Bd)return 1;if((e=ut(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=r.Bd.get(e)))return 2;if(t=Number(t>>>0),n=Number(n>>>0),i=Number(i>>>0),t+n>e.byteLength)return 3;try{let o=e.subarray(t,t+n);switch(a){case 0:fe().set(o,i>>>0);break;case 1:r.$d(i,o);break;default:return 4}return 0}catch{return 4}},1320198:(e,t,n)=>{r.Jd(e,fe().subarray(t>>>0,t+n>>>0))},1320261:()=>r.Yd(),1320302:e=>{r.Id(e)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:e=>r.Rd(e),1320456:e=>r.Vd(e),1320488:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n),!0)},1320551:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n))},1320608:e=>{r.hc(`Abs`,e,void 0)},1320659:e=>{r.hc(`Neg`,e,void 0)},1320710:e=>{r.hc(`Floor`,e,void 0)},1320763:e=>{r.hc(`Ceil`,e,void 0)},1320815:e=>{r.hc(`Reciprocal`,e,void 0)},1320873:e=>{r.hc(`Sqrt`,e,void 0)},1320925:e=>{r.hc(`Exp`,e,void 0)},1320976:e=>{r.hc(`Erf`,e,void 0)},1321027:e=>{r.hc(`Sigmoid`,e,void 0)},1321082:(e,t,n)=>{r.hc(`HardSigmoid`,e,{alpha:t,beta:n})},1321161:e=>{r.hc(`Log`,e,void 0)},1321212:e=>{r.hc(`Sin`,e,void 0)},1321263:e=>{r.hc(`Cos`,e,void 0)},1321314:e=>{r.hc(`Tan`,e,void 0)},1321365:e=>{r.hc(`Asin`,e,void 0)},1321417:e=>{r.hc(`Acos`,e,void 0)},1321469:e=>{r.hc(`Atan`,e,void 0)},1321521:e=>{r.hc(`Sinh`,e,void 0)},1321573:e=>{r.hc(`Cosh`,e,void 0)},1321625:e=>{r.hc(`Asinh`,e,void 0)},1321678:e=>{r.hc(`Acosh`,e,void 0)},1321731:e=>{r.hc(`Atanh`,e,void 0)},1321784:e=>{r.hc(`Tanh`,e,void 0)},1321836:e=>{r.hc(`Not`,e,void 0)},1321887:(e,t,n)=>{r.hc(`Clip`,e,{min:t,max:n})},1321956:e=>{r.hc(`Clip`,e,void 0)},1322008:(e,t)=>{r.hc(`Elu`,e,{alpha:t})},1322066:e=>{r.hc(`Gelu`,e,void 0)},1322118:e=>{r.hc(`Relu`,e,void 0)},1322170:(e,t)=>{r.hc(`LeakyRelu`,e,{alpha:t})},1322234:(e,t)=>{r.hc(`ThresholdedRelu`,e,{alpha:t})},1322304:(e,t)=>{r.hc(`Cast`,e,{to:t})},1322362:e=>{r.hc(`Add`,e,void 0)},1322413:e=>{r.hc(`Sub`,e,void 0)},1322464:e=>{r.hc(`Mul`,e,void 0)},1322515:e=>{r.hc(`Div`,e,void 0)},1322566:e=>{r.hc(`Pow`,e,void 0)},1322617:e=>{r.hc(`Equal`,e,void 0)},1322670:e=>{r.hc(`Greater`,e,void 0)},1322725:e=>{r.hc(`GreaterOrEqual`,e,void 0)},1322787:e=>{r.hc(`Less`,e,void 0)},1322839:e=>{r.hc(`LessOrEqual`,e,void 0)},1322898:(e,t,n,i,a)=>{r.hc(`ReduceMean`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323073:(e,t,n,i,a)=>{r.hc(`ReduceMax`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323247:(e,t,n,i,a)=>{r.hc(`ReduceMin`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323421:(e,t,n,i,a)=>{r.hc(`ReduceProd`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323596:(e,t,n,i,a)=>{r.hc(`ReduceSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323770:(e,t,n,i,a)=>{r.hc(`ReduceL1`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323943:(e,t,n,i,a)=>{r.hc(`ReduceL2`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324116:(e,t,n,i,a)=>{r.hc(`ReduceLogSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324293:(e,t,n,i,a)=>{r.hc(`ReduceSumSquare`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324473:(e,t,n,i,a)=>{r.hc(`ReduceLogSumExp`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324653:e=>{r.hc(`Where`,e,void 0)},1324706:(e,t,n)=>{r.hc(`Transpose`,e,{perm:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[]})},1324830:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1324963:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1325096:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1325529:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1326190:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1326623:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1327284:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327375:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1327854:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327945:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328424:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1328511:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328986:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1329073:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1329548:(e,t,n,i,a)=>{r.hc(`Gemm`,e,{alpha:t,beta:n,transA:i,transB:a})},1329652:e=>{r.hc(`MatMul`,e,void 0)},1329706:(e,t,n,i)=>{r.hc(`ArgMax`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329814:(e,t,n,i)=>{r.hc(`ArgMin`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329922:(e,t)=>{r.hc(`Softmax`,e,{axis:t})},1329985:(e,t)=>{r.hc(`Concat`,e,{axis:t})},1330045:(e,t,n,i,a)=>{r.hc(`Split`,e,{axis:t,numOutputs:n,splitSizes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1330201:e=>{r.hc(`Expand`,e,void 0)},1330255:(e,t)=>{r.hc(`Gather`,e,{axis:Number(t)})},1330326:(e,t)=>{r.hc(`GatherElements`,e,{axis:Number(t)})},1330405:(e,t)=>{r.hc(`GatherND`,e,{batch_dims:Number(t)})},1330484:(e,t,n,i,a,o,s,c,l,u,d)=>{r.hc(`Resize`,e,{antialias:t,axes:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],coordinateTransformMode:ut(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:ut(l),mode:ut(u),nearestMode:ut(d)})},1330846:(e,t,n,i,a,o,s)=>{r.hc(`Slice`,e,{starts:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[],ends:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1331110:e=>{r.hc(`Tile`,e,void 0)},1331162:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331276:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331390:e=>{r.hc(`Range`,e,void 0)},1331443:(e,t)=>{r.hc(`Einsum`,e,{equation:ut(t)})},1331524:(e,t,n,i,a)=>{r.hc(`Pad`,e,{mode:t,value:n,pads:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1331667:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1331836:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1332005:(e,t,n)=>{r.hc(`CumSum`,e,{exclusive:Number(t),reverse:Number(n)})},1332102:(e,t,n)=>{r.hc(`DequantizeLinear`,e,{axis:t,blockSize:n})},1332192:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332362:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332532:(e,t)=>{r.hc(`ScatterND`,e,{reduction:ut(t)})},1332617:(e,t,n,i,a,o,s,c,l)=>{r.hc(`Attention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from(w().subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1332889:e=>{r.hc(`BiasAdd`,e,void 0)},1332944:e=>{r.hc(`BiasSplitGelu`,e,void 0)},1333005:e=>{r.hc(`FastGelu`,e,void 0)},1333061:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{r.hc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:t,dilations:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!de()[Number(p)>>>0],activation:ut(m),activation_params:h?Array.from(he().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1333645:e=>{r.hc(`Gelu`,e,void 0)},1333697:(e,t,n,i,a,o,s,c,l)=>{r.hc(`GroupQueryAttention`,e,{numHeads:t,kvNumHeads:n,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1333914:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334025:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334136:(e,t,n,i,a,o)=>{r.hc(`MatMulNBits`,e,{k:t,n,accuracyLevel:i,bits:a,blockSize:o})},1334263:(e,t,n,i,a,o)=>{r.hc(`MultiHeadAttention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o})},1334422:(e,t)=>{r.hc(`QuickGelu`,e,{alpha:t})},1334486:(e,t,n,i,a)=>{r.hc(`RotaryEmbedding`,e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:a})},1334625:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334727:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334829:(e,t,n,i)=>{r.hc(`GatherBlockQuantized`,e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},1334950:e=>{r.Wd(e)},1334984:(e,t)=>r.Zd(Number(e),Number(t),r.Cd.be,r.Cd.errors)};function Oe(e,t,n){return Dn(async()=>{await r.Ud(Number(e),Number(t),Number(n))})}function ke(){return typeof wasmOffsetConverter<`u`}class Ae{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var je=e=>{e.terminate(),e.onmessage=()=>{}},Me=[],Ne=e=>{Re.length==0&&(Ge(),We(Re[0]));var t=Re.pop();if(!t)return 6;ze.push(t),Ve[e.xd]=t,t.xd=e.xd;var n={yd:`run`,de:e.ce,Fd:e.Fd,xd:e.xd};return t.postMessage(n,e.Ld),0},Pe=0,E=(e,t,...n)=>{for(var r=2*n.length,i=I(),a=$r(8*r),o=a>>>3,s=0;s<n.length;s++){var c=n[s];typeof c==`bigint`?(C[o+2*s]=1n,C[o+2*s+1]=c):(C[o+2*s]=0n,ge()[o+2*s+1>>>0]=c)}return e=qr(e,0,r,a,t),F(i),e};function Fe(e){if(s)return E(0,1,e);if(x=e,!(0<Pe)){for(var t of ze)je(t);for(t of Re)je(t);Re=[],ze=[],Ve={},le=!0}p(0,new Ae(e))}function Ie(e){if(s)return E(1,0,e);Le(e)}var Le=e=>{if(x=e,s)throw Ie(e),`unwind`;Fe(e)},Re=[],ze=[],Be=[],Ve={},He=e=>{var t=e.xd;delete Ve[t],Re.push(e),ze.splice(ze.indexOf(e),1),e.xd=0,N(t)};function Ue(){Be.forEach(e=>e())}var We=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).yd;if(n.Ed&&n.Ed!=Hr()){var a=Ve[n.Ed];a?a.postMessage(n,n.Ld):v(`Internal error! Worker sent a message "${i}" to target pthread ${n.Ed}, but that thread no longer exists!`)}else i===`checkMailbox`?D():i===`spawnThread`?Ne(n):i===`cleanupThread`?He(Ve[n.ee]):i===`loaded`?(e.loaded=!0,t(e)):i===`alert`?alert(`Thread ${n.fe}: ${n.text}`):n.target===`setimmediate`?e.postMessage(n):i===`callHandler`?r[n.Nd](...n.args):i&&v(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw v(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])r.propertyIsEnumerable(n)&&i.push(n);e.postMessage({yd:`load`,Od:i,he:y,ie:b})});function Ge(){var e=new Worker(import.meta.url.startsWith(`file:`)?new URL(``+new URL(`ort.bundle.min-OfoG_cy9.mjs`,import.meta.url).href,``+import.meta.url):new URL(import.meta.url),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Re.push(e)}var Ke=e=>{ye();var t=T()[e+52>>>2>>>0];e=T()[e+56>>>2>>>0],Qr(t,t-e),F(t)},qe=(e,t)=>{Pe=0,e=oi(e,t),0<Pe?x=e:Jr(e)},Je=[];function Ye(e){var t=new Qe(e>>>=0);if(de()[t.wd+12>>>0]==0){var n=1;de()[t.wd+12>>>0]=n}return n=0,de()[t.wd+13>>>0]=n,Je.push(t),ti(e),ri(e)}var Xe=0,Ze=()=>{P(0,0);var e=Je.pop();ei(e.Gd),Xe=0};class Qe{constructor(e){this.Gd=e,this.wd=e-24}}function $e(e){throw Xe||=e>>>0,Xe}var et=e=>{var t=Xe;if(!t)return Zr(0),0;var n=new Qe(t);T()[n.wd+16>>>2>>>0]=t;var r=T()[n.wd+4>>>2>>>0];if(!r)return Zr(0),t;for(var i of e){if(i===0||i===r)break;if(ni(i,r,n.wd+16))return Zr(i),t}return Zr(r),t};function tt(){return et([])}function nt(e){return et([e>>>0])}function rt(e,t){return et([e>>>0,t>>>0])}var it=()=>{var e=Je.pop();e||Te(`no exception to throw`);var t=e.Gd;if(de()[e.wd+13>>>0]==0){Je.push(e);var n=1;de()[e.wd+13>>>0]=n,n=0,de()[e.wd+12>>>0]=n}throw Xe=t};function at(e,t,n){var r=new Qe(e>>>=0);throw t>>>=0,n>>>=0,T()[r.wd+16>>>2>>>0]=0,T()[r.wd+4>>>2>>>0]=t,T()[r.wd+8>>>2>>>0]=n,Xe=e}function ot(e,t,n,r){return s?E(2,1,e,t,n,r):st(e,t,n,r)}function st(e,t,n,r){if(e>>>=0,n>>>=0,r>>>=0,c===void 0)return 6;var i=[];return s&&i.length===0?ot(e,t>>>=0,n,r):(e={ce:n,xd:e,Fd:r,Ld:i},s?(e.yd=`spawnThread`,postMessage(e,i),0):Ne(e))}var ct=typeof TextDecoder<`u`?new TextDecoder:void 0,lt=(e,t=0,n=NaN)=>{var r=(t>>>=0)+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&ct)return ct.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},ut=(e,t)=>(e>>>=0)?lt(fe(),e,t):``;function dt(e,t,n){return s?E(3,1,e,t,n):0}function ft(e,t){if(s)return E(4,1,e,t)}var pt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},mt=(e,t,n)=>{var r=fe();if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(t>=n)break;r[t++>>>0]=o}else{if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63}r[t++>>>0]=128|o>>6&63}r[t++>>>0]=128|63&o}}r[t>>>0]=0,e=t-i}else e=0;return e};function ht(e,t){if(s)return E(5,1,e,t)}function gt(e,t,n){if(s)return E(6,1,e,t,n)}function _t(e,t,n){return s?E(7,1,e,t,n):0}function vt(e,t){if(s)return E(8,1,e,t)}function yt(e,t,n){if(s)return E(9,1,e,t,n)}function bt(e,t,n,r){if(s)return E(10,1,e,t,n,r)}function xt(e,t,n,r){if(s)return E(11,1,e,t,n,r)}function St(e,t,n,r){if(s)return E(12,1,e,t,n,r)}function Ct(e){if(s)return E(13,1,e)}function wt(e,t){if(s)return E(14,1,e,t)}function Tt(e,t,n){if(s)return E(15,1,e,t,n)}var Et,Dt,Ot=()=>Te(``),kt=e=>{for(var t=``;fe()[e>>>0];)t+=Et[fe()[e++>>>0]];return t},At={},jt={},Mt={};function Nt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new Dt(`type "${r}" must have a positive integer typeid pointer`);if(jt.hasOwnProperty(e)){if(n.Pd)return;throw new Dt(`Cannot register type '${r}' twice`)}jt[e]=t,delete Mt[e],At.hasOwnProperty(e)&&(t=At[e],delete At[e],t.forEach(e=>e()))}(e,t,n)}var Pt=(e,t,n)=>{switch(t){case 1:return n?e=>de()[e>>>0]:e=>fe()[e>>>0];case 2:return n?e=>pe()[e>>>1>>>0]:e=>me()[e>>>1>>>0];case 4:return n?e=>w()[e>>>2>>>0]:e=>T()[e>>>2>>>0];case 8:return n?e=>C[e>>>3]:e=>oe[e>>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function Ft(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw t=t===null?`null`:(e=typeof t)==`object`||e===`array`||e===`function`?t.toString():``+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},zd:It,readValueFromPointer:Pt(t,n,t.indexOf(`u`)==-1),Ad:null})}var It=8;function Lt(e,t,n,r){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},zd:It,readValueFromPointer:function(e){return this.fromWireType(fe()[e>>>0])},Ad:null})}var Rt=[],zt=[];function Bt(e){9<(e>>>=0)&&--zt[e+1]==0&&(zt[e]=void 0,Rt.push(e))}var Vt=e=>{if(!e)throw new Dt(`Cannot use deleted val. handle = `+e);return zt[e]},Ht=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Rt.pop()||zt.length;return zt[t]=e,zt[t+1]=1,t}};function Ut(e){return this.fromWireType(T()[e>>>2>>>0])}var Wt={name:`emscripten::val`,fromWireType:e=>{var t=Vt(e);return Bt(e),t},toWireType:(e,t)=>Ht(t),zd:It,readValueFromPointer:Ut,Ad:null};function Gt(e){return Nt(e>>>0,Wt)}var Kt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(he()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(ge()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function qt(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,zd:It,readValueFromPointer:Kt(t,n),Ad:null})}function Jt(e,t,n,r,i){if(e>>>=0,n>>>=0,t=kt(t>>>0),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Nt(e,{name:t,fromWireType:i,toWireType:o,zd:It,readValueFromPointer:Pt(t,n,r!==0),Ad:null})}function Yt(e,t,n){function r(e){var t=T()[e>>>2>>>0];return e=T()[e+4>>>2>>>0],new i(de().buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];Nt(e>>>=0,{name:n=kt(n>>>0),fromWireType:r,zd:It,readValueFromPointer:r},{Pd:!0})}function Xt(e,t){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){for(var t,n=T()[e>>>2>>>0],r=e+4,i=r,a=0;a<=n;++a){var o=r+a;a!=n&&fe()[o>>>0]!=0||(i=ut(i,o-i),t===void 0?t=i:(t+=`\0`,t+=i),i=o+1)}return Ur(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new Dt(`Cannot pass non-string to std::string`);var r=n?pt(t):t.length,i=Wr(4+r+1),a=i+4;if(T()[i>>>2>>>0]=r,n)mt(t,a,r+1);else if(n)for(n=0;n<r;++n){var o=t.charCodeAt(n);if(255<o)throw Ur(i),new Dt(`String has UTF-16 code units that do not fit in 8 bits`);fe()[a+n>>>0]=o}else for(n=0;n<r;++n)fe()[a+n>>>0]=t[n];return e!==null&&e.push(Ur,i),i},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}var Zt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,Qt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&me()[n>>>0];)++n;if(32<(n<<=1)-e&&Zt)return Zt.decode(fe().slice(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=pe()[e+2*r>>>1>>>0];if(i==0)break;n+=String.fromCharCode(i)}return n},$t=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);pe()[t>>>1>>>0]=a,t+=2}return pe()[t>>>1>>>0]=0,t-r},en=e=>2*e.length,tn=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=w()[e+4*n>>>2>>>0];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)):r+=String.fromCharCode(i)}return r},nn=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),w()[t>>>2>>>0]=a,(t+=4)+4>n)break}return w()[t>>>2>>>0]=0,t-r},rn=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t};function an(e,t,n){if(e>>>=0,t>>>=0,n=kt(n>>>=0),t===2)var r=Qt,i=$t,a=en,o=e=>me()[e>>>1>>>0];else t===4&&(r=tn,i=nn,a=rn,o=e=>T()[e>>>2>>>0]);Nt(e,{name:n,fromWireType:e=>{for(var n,i=T()[e>>>2>>>0],a=e+4,s=0;s<=i;++s){var c=e+4+s*t;s!=i&&o(c)!=0||(a=r(a,c-a),n===void 0?n=a:(n+=`\0`,n+=a),a=c+t)}return Ur(e),n},toWireType:(e,r)=>{if(typeof r!=`string`)throw new Dt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Wr(4+o+t);return T()[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Ur,s),s},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}function on(e,t){Nt(e>>>=0,{Qd:!0,name:t=kt(t>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function sn(e){Gr(e>>>0,!o,1,!a,131072,!1),Ue()}var cn=e=>{if(!le)try{if(e(),!(0<Pe))try{s?Jr(x):Le(x)}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}};function ln(e){e>>>=0,typeof Atomics.ge==`function`&&(Atomics.ge(w(),e>>>2,e).value.then(D),e+=128,Atomics.store(w(),e>>>2,1))}var D=()=>{var e=Hr();e&&(ln(e),cn(Xr))};function un(e,t){(e>>>=0)==t>>>0?setTimeout(D):s?postMessage({Ed:e,yd:`checkMailbox`}):(e=Ve[e])&&e.postMessage({yd:`checkMailbox`})}var O=[];function dn(e,t,n,r,i){for(t>>>=0,r/=2,O.length=r,n=i>>>0>>>3,i=0;i<r;i++)O[i]=C[n+2*i]?C[n+2*i+1]:ge()[n+2*i+1>>>0];return(t?De[t]:zr[e])(...O)}var fn=()=>{Pe=0};function pn(e){e>>>=0,s?postMessage({yd:`cleanupThread`,ee:e}):He(Ve[e])}function mn(e){}var hn=(e,t)=>{var n=jt[e];if(n===void 0)throw e=Br(e),n=kt(e),Ur(e),new Dt(`${t} has unknown type ${n}`);return n},gn=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(T()[t>>>2>>>0]=Ht(r)),e};function _n(e,t,n){return t>>>=0,n>>>=0,e=Vt(e>>>0),t=hn(t,`emval::as`),gn(t,n,e)}function vn(e,t){return t>>>=0,e=Vt(e>>>0),(t=hn(t,`emval::as`)).toWireType(null,e)}var k=e=>{try{e()}catch(e){Te(e)}},yn=0,A=null,bn=0,xn=[],Sn={},Cn={},wn=0,Tn=null,En=[];function Dn(e){return function(e){if(!le){if(yn===0){var t=!1,n=!1;e((e=0)=>{if(!le&&(bn=e,t=!0,n)){yn=2,k(()=>Xi(A)),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.resume(),e=!1;try{var r=function(){var e=w()[A+8>>>2>>>0];return e=M[Cn[e]],--Pe,e()}()}catch(t){r=t,e=!0}var i=!1;if(!A){var a=Tn;a&&(Tn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(yn=1,A=function(){var e=Wr(65548),t=e+12;T()[e>>>2>>>0]=t,T()[e+4>>>2>>>0]=t+65536,t=xn[0];var n=Sn[t];return n===void 0&&(n=wn++,Sn[t]=n,Cn[n]=t),t=n,w()[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.pause(),k(()=>Ji(A)))}else yn===2?(yn=0,k(Zi),Ur(A),A=null,En.forEach(cn)):Te(`invalid state: ${yn}`);return bn}}(t=>{e().then(t)})}function j(e){return e>>>=0,Dn(async()=>Ht(await Vt(e)))}var On=[];function kn(e,t,n,r){return n>>>=0,r>>>=0,(e=On[e>>>0])(null,t=Vt(t>>>0),n,r)}var An={},jn=e=>{var t=An[e];return t===void 0?kt(e):t};function Mn(e,t,n,r,i){return n>>>=0,r>>>=0,i>>>=0,(e=On[e>>>0])(t=Vt(t>>>0),t[n=jn(n)],r,i)}var Nn=()=>typeof globalThis==`object`?globalThis:Function(`return this`)();function Pn(e){return(e>>>=0)==0?Ht(Nn()):(e=jn(e),Ht(Nn()[e]))}var Fn=e=>{var t=On.length;return On.push(e),t},In=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=hn(T()[t+4*r>>>2>>>0],`parameter `+r);return n},Ln=(e,t)=>Object.defineProperty(t,"name",{value:e});function Rn(e,t,n){var r=(t=In(e,t>>>0)).shift();e--;var i=`return function (obj, func, destructorsRef, args) {
`,a=0,o=[];n===0&&o.push(`obj`);for(var s=[`retType`],c=[r],l=0;l<e;++l)o.push(`arg`+l),s.push(`argType`+l),c.push(t[l]),i+=`  var arg${l} = argType${l}.readValueFromPointer(args${a?`+`+a:``});
`,a+=t[l].zd;return i+=`  var rv = ${n===1?`new func`:`func.call`}(${o.join(`, `)});
`,r.Qd||(s.push(`emval_returnValue`),c.push(gn),i+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s.push(i+`};
`),e=function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=Ln(t.name||`unknownFunctionName`,function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n}(s)(...c),n=`methodCaller<(${t.map(e=>e.name).join(`, `)}) => ${r.name}>`,Fn(Ln(n,e))}function zn(e){return e=jn(e>>>0),Ht(r[e])}function Bn(e,t){return t>>>=0,e=Vt(e>>>0),t=Vt(t),Ht(e[t])}function Vn(e){9<(e>>>=0)&&(zt[e+1]+=1)}function Hn(){return Ht([])}function Un(e){e=Vt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Ht(t)}function Wn(e){return Ht(jn(e>>>0))}function Gn(){return Ht({})}function Kn(e){for(var t=Vt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Bt(e)}function qn(e,t,n){t>>>=0,n>>>=0,e=Vt(e>>>0),t=Vt(t),n=Vt(n),e[t]=n}function Jn(e,t){return t>>>=0,e=(e=hn(e>>>0,`_emval_take_value`)).readValueFromPointer(t),Ht(e)}function Yn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getUTCSeconds(),w()[t+4>>>2>>>0]=e.getUTCMinutes(),w()[t+8>>>2>>>0]=e.getUTCHours(),w()[t+12>>>2>>>0]=e.getUTCDate(),w()[t+16>>>2>>>0]=e.getUTCMonth(),w()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,w()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,w()[t+28>>>2>>>0]=e}var Xn=e=>e%4==0&&(e%100!=0||e%400==0),Zn=[0,31,60,91,121,152,182,213,244,274,305,335],Qn=[0,31,59,90,120,151,181,212,243,273,304,334];function $n(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getSeconds(),w()[t+4>>>2>>>0]=e.getMinutes(),w()[t+8>>>2>>>0]=e.getHours(),w()[t+12>>>2>>>0]=e.getDate(),w()[t+16>>>2>>>0]=e.getMonth(),w()[t+20>>>2>>>0]=e.getFullYear()-1900,w()[t+24>>>2>>>0]=e.getDay();var n=(Xn(e.getFullYear())?Zn:Qn)[e.getMonth()]+e.getDate()-1|0;w()[t+28>>>2>>>0]=n,w()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),w()[t+32>>>2>>>0]=e}function er(e){e>>>=0;var t=new Date(w()[e+20>>>2>>>0]+1900,w()[e+16>>>2>>>0],w()[e+12>>>2>>>0],w()[e+8>>>2>>>0],w()[e+4>>>2>>>0],w()[e>>>2>>>0],0),n=w()[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?w()[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),w()[e+24>>>2>>>0]=t.getDay(),n=(Xn(t.getFullYear())?Zn:Qn)[t.getMonth()]+t.getDate()-1|0,w()[e+28>>>2>>>0]=n,w()[e>>>2>>>0]=t.getSeconds(),w()[e+4>>>2>>>0]=t.getMinutes(),w()[e+8>>>2>>>0]=t.getHours(),w()[e+12>>>2>>>0]=t.getDate(),w()[e+16>>>2>>>0]=t.getMonth(),w()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function tr(e,t,n,r,i,a,o){return s?E(16,1,e,t,n,r,i,a,o):-52}function nr(e,t,n,r,i,a){if(s)return E(17,1,e,t,n,r,i,a)}var rr={},ir=()=>performance.timeOrigin+performance.now();function ar(e,t){return s?E(18,1,e,t):(rr[e]&&(clearTimeout(rr[e].id),delete rr[e]),t&&(rr[e]={id:setTimeout(()=>{delete rr[e],cn(()=>Yr(e,performance.timeOrigin+performance.now()))},t),ke:t}),0)}function or(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);T()[e>>>2>>>0]=60*o,w()[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(mt(e,n,17),mt(t,r,17)):(mt(e,r,17),mt(t,n,17))}var sr=()=>Date.now(),cr=1;function lr(e,t,n){if(!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!cr)return 52;e=performance.timeOrigin+performance.now()}return C[n>>>0>>>3]=BigInt(Math.round(1e6*e)),0}var ur=[],dr=(e,t)=>{ur.length=0;for(var n;n=fe()[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,ur.push(n==112?T()[t>>>2>>>0]:n==106?C[t>>>3]:n==105?w()[t>>>2>>>0]:ge()[t>>>3>>>0]),t+=r?8:4}return ur};function fr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}function pr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}var mr=()=>{};function hr(e,t){return v(ut(e>>>0,t>>>0))}var gr=()=>{throw Pe+=1,`unwind`};function _r(){return 4294901760}var vr=()=>navigator.hardwareConcurrency;function yr(){return Te(`Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER`),0}function br(e){e>>>=0;var t=fe().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(r),ye();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var xr=()=>(Te(`Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER`),0),Sr={},Cr=e=>{e.forEach(e=>{var t=xr();t&&(Sr[t]=e)})};function wr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),Cr(e),Sr.Kd=xr(),Sr.ae=e,Sr.Kd}function Tr(e,t,n){if(e>>>=0,t>>>=0,Sr.Kd==e)var r=Sr.ae;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),Cr(r);for(var i=3;r[i]&&xr()!=e;)++i;for(e=0;e<n&&r[e+i];++e)w()[t+4*e>>>2>>>0]=xr();return e}var Er,Dr={},Or=()=>{if(!Er){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in Dr)Dr[e]===void 0?delete t[e]:t[e]=Dr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Er=n}return Er};function kr(e,t){if(s)return E(19,1,e,t);e>>>=0,t>>>=0;var n=0;return Or().forEach((r,i)=>{var a=t+n;for(i=T()[e+4*i>>>2>>>0]=a,a=0;a<r.length;++a)de()[i++>>>0]=r.charCodeAt(a);de()[i>>>0]=0,n+=r.length+1}),0}function Ar(e,t){if(s)return E(20,1,e,t);e>>>=0,t>>>=0;var n=Or();T()[e>>>2>>>0]=n.length;var r=0;return n.forEach(e=>r+=e.length+1),T()[t>>>2>>>0]=r,0}function jr(e){return s?E(21,1,e):52}function Mr(e,t,n,r){return s?E(22,1,e,t,n,r):52}function Nr(e,t,n,r){return s?E(23,1,e,t,n,r):70}var Pr=[null,[],[]];function Fr(e,t,n,r){if(s)return E(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var i=0,a=0;a<n;a++){var o=T()[t>>>2>>>0],c=T()[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=fe()[o+l>>>0],d=Pr[e];u===0||u===10?((e===1?_:v)(lt(d)),d.length=0):d.push(u)}i+=c}return T()[r>>>2>>>0]=i,0}function Ir(e){return e>>>0}s||function(){for(var e=r.numThreads-1;e--;)Ge();Me.unshift(()=>{Se++,function(e){s?e():Promise.all(Re.map(We)).then(e)}(()=>we())})}();for(var Lr=Array(256),Rr=0;256>Rr;++Rr)Lr[Rr]=String.fromCharCode(Rr);Et=Lr,Dt=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},zt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>zt.length/2-5-Rt.length;var M,zr=[Fe,Ie,ot,dt,ft,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,tr,nr,ar,kr,Ar,jr,Mr,Nr,Fr];(async function(){function e(e,t){return M=e.exports,M=function(){var e=M,t={};for(let[n,r]of Object.entries(e))t[n]=typeof r==`function`?(...e)=>{xn.push(n);try{return r(...e)}finally{le||(xn.pop(),A&&yn===1&&xn.length===0&&(yn=0,Pe+=1,k(Yi),typeof Fibers<`u`&&Fibers.le()))}}:r;return t}(),M=function(){var e=M,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Cb=t(e.Cb),e.fc=n(e.fc),e.ic=t(e.ic),e.vc=t(e.vc),e.wc=n(e.wc),e.Ac=t(e.Ac),e}(),Be.push(M.jc),b=t,we(),M}Se++;var t=Ee();if(r.instantiateWasm)return new Promise(n=>{r.instantiateWasm(t,(t,r)=>{e(t,r),n(t.exports)})});if(s)return new Promise(t=>{_e=n=>{t(e(new WebAssembly.Instance(n,Ee()),n))}});xe??=r.locateFile?r.locateFile?r.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,m):m+`ort-wasm-simd-threaded.jsep.wasm`:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href;try{var i=await async function(e){var t=xe;if(!ce&&typeof WebAssembly.instantiateStreaming==`function`&&!ue(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){v(`wasm streaming compile failed: ${e}`),v(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!ce)try{var t=await u(e);return new Uint8Array(t)}catch{}if(e==xe&&ce)e=new Uint8Array(ce);else{if(!d)throw`both async and sync fetching of the wasm failed`;e=d(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){v(`failed to asynchronously prepare wasm: ${e}`),Te(e)}}(t,e)}(t);return e(i.instance,i.module)}catch(e){return n(e),Promise.reject(e)}})();var Br=e=>(Br=M.Cb)(e),Vr=()=>(Vr=M.Db)();r._OrtInit=(e,t)=>(r._OrtInit=M.Eb)(e,t),r._OrtGetLastError=(e,t)=>(r._OrtGetLastError=M.Fb)(e,t),r._OrtCreateSessionOptions=(e,t,n,i,a,o,s,c,l,u)=>(r._OrtCreateSessionOptions=M.Gb)(e,t,n,i,a,o,s,c,l,u),r._OrtAppendExecutionProvider=(e,t)=>(r._OrtAppendExecutionProvider=M.Hb)(e,t),r._OrtAddFreeDimensionOverride=(e,t,n)=>(r._OrtAddFreeDimensionOverride=M.Ib)(e,t,n),r._OrtAddSessionConfigEntry=(e,t,n)=>(r._OrtAddSessionConfigEntry=M.Jb)(e,t,n),r._OrtReleaseSessionOptions=e=>(r._OrtReleaseSessionOptions=M.Kb)(e),r._OrtCreateSession=(e,t,n)=>(r._OrtCreateSession=M.Lb)(e,t,n),r._OrtReleaseSession=e=>(r._OrtReleaseSession=M.Mb)(e),r._OrtGetInputOutputCount=(e,t,n)=>(r._OrtGetInputOutputCount=M.Nb)(e,t,n),r._OrtGetInputName=(e,t)=>(r._OrtGetInputName=M.Ob)(e,t),r._OrtGetOutputName=(e,t)=>(r._OrtGetOutputName=M.Pb)(e,t),r._OrtFree=e=>(r._OrtFree=M.Qb)(e),r._OrtCreateTensor=(e,t,n,i,a,o)=>(r._OrtCreateTensor=M.Rb)(e,t,n,i,a,o),r._OrtGetTensorData=(e,t,n,i,a)=>(r._OrtGetTensorData=M.Sb)(e,t,n,i,a),r._OrtReleaseTensor=e=>(r._OrtReleaseTensor=M.Tb)(e),r._OrtCreateRunOptions=(e,t,n,i)=>(r._OrtCreateRunOptions=M.Ub)(e,t,n,i),r._OrtAddRunConfigEntry=(e,t,n)=>(r._OrtAddRunConfigEntry=M.Vb)(e,t,n),r._OrtReleaseRunOptions=e=>(r._OrtReleaseRunOptions=M.Wb)(e),r._OrtCreateBinding=e=>(r._OrtCreateBinding=M.Xb)(e),r._OrtBindInput=(e,t,n)=>(r._OrtBindInput=M.Yb)(e,t,n),r._OrtBindOutput=(e,t,n,i)=>(r._OrtBindOutput=M.Zb)(e,t,n,i),r._OrtClearBoundOutputs=e=>(r._OrtClearBoundOutputs=M._b)(e),r._OrtReleaseBinding=e=>(r._OrtReleaseBinding=M.$b)(e),r._OrtRunWithBinding=(e,t,n,i,a)=>(r._OrtRunWithBinding=M.ac)(e,t,n,i,a),r._OrtRun=(e,t,n,i,a,o,s,c)=>(r._OrtRun=M.bc)(e,t,n,i,a,o,s,c),r._OrtEndProfiling=e=>(r._OrtEndProfiling=M.cc)(e),r._JsepOutput=(e,t,n)=>(r._JsepOutput=M.dc)(e,t,n),r._JsepGetNodeName=e=>(r._JsepGetNodeName=M.ec)(e);var Hr=()=>(Hr=M.fc)(),Ur=r._free=e=>(Ur=r._free=M.gc)(e),Wr=r._malloc=e=>(Wr=r._malloc=M.ic)(e),Gr=(e,t,n,r,i,a)=>(Gr=M.kc)(e,t,n,r,i,a),Kr=()=>(Kr=M.lc)(),qr=(e,t,n,r,i)=>(qr=M.mc)(e,t,n,r,i),N=e=>(N=M.nc)(e),Jr=e=>(Jr=M.oc)(e),Yr=(e,t)=>(Yr=M.pc)(e,t),Xr=()=>(Xr=M.qc)(),P=(e,t)=>(P=M.rc)(e,t),Zr=e=>(Zr=M.sc)(e),Qr=(e,t)=>(Qr=M.tc)(e,t),F=e=>(F=M.uc)(e),$r=e=>($r=M.vc)(e),I=()=>(I=M.wc)(),ei=e=>(ei=M.xc)(e),ti=e=>(ti=M.yc)(e),ni=(e,t,n)=>(ni=M.zc)(e,t,n),ri=e=>(ri=M.Ac)(e),ii=r.dynCall_iii=(e,t,n)=>(ii=r.dynCall_iii=M.Bc)(e,t,n),ai=r.dynCall_vi=(e,t)=>(ai=r.dynCall_vi=M.Cc)(e,t),oi=r.dynCall_ii=(e,t)=>(oi=r.dynCall_ii=M.Dc)(e,t),si=r.dynCall_vii=(e,t,n)=>(si=r.dynCall_vii=M.Ec)(e,t,n),ci=r.dynCall_iiii=(e,t,n,i)=>(ci=r.dynCall_iiii=M.Fc)(e,t,n,i),li=r.dynCall_viii=(e,t,n,i)=>(li=r.dynCall_viii=M.Gc)(e,t,n,i),ui=r.dynCall_iiiii=(e,t,n,i,a)=>(ui=r.dynCall_iiiii=M.Hc)(e,t,n,i,a),di=r.dynCall_viiii=(e,t,n,i,a)=>(di=r.dynCall_viiii=M.Ic)(e,t,n,i,a),fi=r.dynCall_viiiiii=(e,t,n,i,a,o,s)=>(fi=r.dynCall_viiiiii=M.Jc)(e,t,n,i,a,o,s),pi=r.dynCall_viiiiiii=(e,t,n,i,a,o,s,c)=>(pi=r.dynCall_viiiiiii=M.Kc)(e,t,n,i,a,o,s,c),mi=r.dynCall_ji=(e,t)=>(mi=r.dynCall_ji=M.Lc)(e,t),hi=r.dynCall_v=e=>(hi=r.dynCall_v=M.Mc)(e),gi=r.dynCall_viiiii=(e,t,n,i,a,o)=>(gi=r.dynCall_viiiii=M.Nc)(e,t,n,i,a,o),_i=r.dynCall_i=e=>(_i=r.dynCall_i=M.Oc)(e),vi=r.dynCall_fii=(e,t,n)=>(vi=r.dynCall_fii=M.Pc)(e,t,n),yi=r.dynCall_viiiiiiii=(e,t,n,i,a,o,s,c,l)=>(yi=r.dynCall_viiiiiiii=M.Qc)(e,t,n,i,a,o,s,c,l),bi=r.dynCall_viiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(bi=r.dynCall_viiiiiiiiii=M.Rc)(e,t,n,i,a,o,s,c,l,u,d),xi=r.dynCall_jiii=(e,t,n,i)=>(xi=r.dynCall_jiii=M.Sc)(e,t,n,i),Si=r.dynCall_dii=(e,t,n)=>(Si=r.dynCall_dii=M.Tc)(e,t,n),Ci=r.dynCall_viiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Ci=r.dynCall_viiiiiiiii=M.Uc)(e,t,n,i,a,o,s,c,l,u),wi=r.dynCall_viiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f)=>(wi=r.dynCall_viiiiiiiiiii=M.Vc)(e,t,n,i,a,o,s,c,l,u,d,f),Ti=r.dynCall_iiiiii=(e,t,n,i,a,o)=>(Ti=r.dynCall_iiiiii=M.Wc)(e,t,n,i,a,o),Ei=r.dynCall_iij=(e,t,n)=>(Ei=r.dynCall_iij=M.Xc)(e,t,n),Di=r.dynCall_iiiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Di=r.dynCall_iiiiiiiiii=M.Yc)(e,t,n,i,a,o,s,c,l,u),Oi=r.dynCall_iiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(Oi=r.dynCall_iiiiiiiiiii=M.Zc)(e,t,n,i,a,o,s,c,l,u,d),ki=r.dynCall_vij=(e,t,n)=>(ki=r.dynCall_vij=M._c)(e,t,n),Ai=r.dynCall_iiif=(e,t,n,i)=>(Ai=r.dynCall_iiif=M.$c)(e,t,n,i),ji=r.dynCall_iiij=(e,t,n,i)=>(ji=r.dynCall_iiij=M.ad)(e,t,n,i),Mi=r.dynCall_fiii=(e,t,n,i)=>(Mi=r.dynCall_fiii=M.bd)(e,t,n,i),Ni=r.dynCall_viiiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>(Ni=r.dynCall_viiiiiiiiiiiii=M.cd)(e,t,n,i,a,o,s,c,l,u,d,f,p,m),Pi=r.dynCall_vjiii=(e,t,n,i,a)=>(Pi=r.dynCall_vjiii=M.dd)(e,t,n,i,a),Fi=r.dynCall_vif=(e,t,n)=>(Fi=r.dynCall_vif=M.ed)(e,t,n),Ii=r.dynCall_iiiiiii=(e,t,n,i,a,o,s)=>(Ii=r.dynCall_iiiiiii=M.fd)(e,t,n,i,a,o,s),Li=r.dynCall_iiiij=(e,t,n,i,a)=>(Li=r.dynCall_iiiij=M.gd)(e,t,n,i,a),Ri=r.dynCall_iiiiiiii=(e,t,n,i,a,o,s,c)=>(Ri=r.dynCall_iiiiiiii=M.hd)(e,t,n,i,a,o,s,c),zi=r.dynCall_viiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p)=>(zi=r.dynCall_viiiiiiiiiiii=M.id)(e,t,n,i,a,o,s,c,l,u,d,f,p),Bi=r.dynCall_diii=(e,t,n,i)=>(Bi=r.dynCall_diii=M.jd)(e,t,n,i),Vi=r.dynCall_jiiii=(e,t,n,i,a)=>(Vi=r.dynCall_jiiii=M.kd)(e,t,n,i,a),L=r.dynCall_viiij=(e,t,n,i,a)=>(L=r.dynCall_viiij=M.ld)(e,t,n,i,a),Hi=r.dynCall_fiiii=(e,t,n,i,a)=>(Hi=r.dynCall_fiiii=M.md)(e,t,n,i,a),Ui=r.dynCall_viiif=(e,t,n,i,a)=>(Ui=r.dynCall_viiif=M.nd)(e,t,n,i,a),Wi=r.dynCall_diiii=(e,t,n,i,a)=>(Wi=r.dynCall_diiii=M.od)(e,t,n,i,a),Gi=r.dynCall_viiid=(e,t,n,i,a)=>(Gi=r.dynCall_viiid=M.pd)(e,t,n,i,a),Ki=r.dynCall_iiiijii=(e,t,n,i,a,o,s)=>(Ki=r.dynCall_iiiijii=M.qd)(e,t,n,i,a,o,s),qi=r.dynCall_iiiiiij=(e,t,n,i,a,o,s)=>(qi=r.dynCall_iiiiiij=M.rd)(e,t,n,i,a,o,s),Ji=e=>(Ji=M.sd)(e),Yi=()=>(Yi=M.td)(),Xi=e=>(Xi=M.ud)(e),Zi=()=>(Zi=M.vd)();function Qi(e,t,n){var r=I();try{si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function $i(e,t,n){var r=I();try{return ii(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ea(e,t){var n=I();try{ai(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function ta(e,t){var n=I();try{return oi(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function na(e,t,n,r){var i=I();try{return ci(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function ra(e,t,n,r,i){var a=I();try{di(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function ia(e,t,n,r,i){var a=I();try{return ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function aa(e,t,n,r){var i=I();try{li(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function oa(e,t,n,r,i,a,o){var s=I();try{return Ii(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function sa(e){var t=I();try{hi(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function ca(e,t,n){var r=I();try{return Ei(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function la(e,t,n,r,i,a){var o=I();try{gi(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ua(e,t,n){var r=I();try{ki(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function da(e,t,n,r,i,a,o){var s=I();try{fi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function fa(e,t,n,r,i,a,o,s){var c=I();try{pi(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function pa(e,t,n,r,i,a){var o=I();try{return Ti(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ma(e,t,n,r,i,a,o,s){var c=I();try{return Ri(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function ha(e,t,n,r,i,a,o,s,c,l){var u=I();try{Ci(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ga(e,t,n,r,i,a,o,s,c){var l=I();try{yi(e,t,n,r,i,a,o,s,c)}catch(e){if(F(l),e!==e+0)throw e;P(1,0)}}function _a(e){var t=I();try{return _i(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function va(e,t,n,r,i,a,o,s,c,l){var u=I();try{return Di(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ya(e,t,n){var r=I();try{return vi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ba(e,t,n,r){var i=I();try{return xi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;return P(1,0),0n}}function xa(e,t,n){var r=I();try{return Si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function Sa(e,t,n,r,i,a,o,s,c,l,u,d){var f=I();try{wi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(F(f),e!==e+0)throw e;P(1,0)}}function Ca(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{bi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function wa(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{return Oi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function Ta(e,t,n,r){var i=I();try{return Ai(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Ea(e,t,n,r){var i=I();try{return ji(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Da(e,t,n,r){var i=I();try{return Mi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Oa(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=I();try{Ni(e,t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if(F(m),e!==e+0)throw e;P(1,0)}}function ka(e,t,n,r,i){var a=I();try{Pi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Aa(e,t,n){var r=I();try{Fi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ja(e,t){var n=I();try{return mi(e,t)}catch(e){if(F(n),e!==e+0)throw e;return P(1,0),0n}}function Ma(e,t,n,r,i){var a=I();try{return Li(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Na(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=I();try{zi(e,t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if(F(p),e!==e+0)throw e;P(1,0)}}function Pa(e,t,n,r){var i=I();try{return Bi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Fa(e,t,n,r,i){var a=I();try{return Vi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;return P(1,0),0n}}function Ia(e,t,n,r,i){var a=I();try{L(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function La(e,t,n,r,i){var a=I();try{return Hi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ra(e,t,n,r,i){var a=I();try{Ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function za(e,t,n,r,i){var a=I();try{return Wi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ba(e,t,n,r,i){var a=I();try{Gi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Va(e,t,n,r,i,a,o){var s=I();try{return Ki(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function Ha(e,t,n,r,i,a,o){var s=I();try{return qi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}return r.stackSave=()=>I(),r.stackRestore=e=>F(e),r.stackAlloc=e=>$r(e),r.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:de()[e>>>0]=t;break;case`i16`:pe()[e>>>1>>>0]=t;break;case`i32`:w()[e>>>2>>>0]=t;break;case`i64`:C[e>>>3]=BigInt(t);break;case`float`:he()[e>>>2>>>0]=t;break;case`double`:ge()[e>>>3>>>0]=t;break;case`*`:T()[e>>>2>>>0]=t;break;default:Te(`invalid type for setValue: ${n}`)}},r.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return de()[e>>>0];case`i16`:return pe()[e>>>1>>>0];case`i32`:return w()[e>>>2>>>0];case`i64`:return C[e>>>3];case`float`:return he()[e>>>2>>>0];case`double`:return ge()[e>>>3>>>0];case`*`:return T()[e>>>2>>>0];default:Te(`invalid type for getValue: ${t}`)}},r.UTF8ToString=ut,r.stringToUTF8=mt,r.lengthBytesUTF8=pt,function e(){if(0<Se)Ce=e;else if(s)t(r),be();else{for(;0<Me.length;)Me.shift()(r);0<Se?Ce=e:(r.calledRun=!0,le||(be(),t(r)))}}(),r.PTR_SIZE=4,i}),Za=Xa,Qa=globalThis.self?.name?.startsWith(`em-pthread`),Qa&&Xa()}),eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo=L(()=>{Ha(),eo=typeof location>`u`?void 0:location.origin,to=()=>import.meta.url?.startsWith(`file:`)?new URL(new URL(``+new URL(`ort.bundle.min-OfoG_cy9.mjs`,import.meta.url).href,``+import.meta.url).href,eo).href:import.meta.url,no=to(),ro=()=>{if(no&&!no.startsWith(`blob:`))return no.substring(0,no.lastIndexOf(`/`)+1)},io=(e,t)=>{try{let n=t??no;return(n?new URL(e,n):new URL(e)).origin===eo}catch{return!1}},ao=(e,t)=>{let n=t??no;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},oo=(e,t)=>`${t??`./`}${e}`,so=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},co=async e=>(await a(async()=>{let{default:t}=await import(e);return{default:t}},[],import.meta.url)).default,lo=(qa(),Wi(Ua)).default,uo=async()=>{if(!no)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(io(no))return[void 0,lo()];let e=await so(no);return[e,lo(e)]},fo=($a(),Wi(Ja)).default,po=async(e,t,n)=>{if(!e&&!t&&fo&&no&&io(no))return[void 0,fo];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??ao(r,t),a=n&&i&&!io(i,t),o=a?await so(i):i??oo(r,t);return[a?o:void 0,await co(o)]}}}),ho,go,_o,vo,yo,bo,xo,So,Co=L(()=>{mo(),go=!1,_o=!1,vo=!1,yo=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},bo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},xo=async e=>{if(go)return Promise.resolve();if(_o)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(vo)throw Error(`previous call to 'initializeWebAssembly()' failed.`);_o=!0;let t=e.initTimeout,n=e.numThreads;if(!bo())throw Error(`WebAssembly SIMD is not supported in the current environment.`);let r=yo();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await po(s,a,n>1),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=ro();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{_o=!1,go=!0,ho=t,e(),d&&URL.revokeObjectURL(d)},e=>{_o=!1,vo=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},So=()=>{if(go&&ho)return ho;throw Error(`WebAssembly is not initialized yet.`)}}),wo,To,Eo,Do=L(()=>{Co(),wo=(e,t)=>{let n=So(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},To=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)To(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},Eo=e=>{let t=So(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Oo,ko=L(()=>{Co(),Do(),Oo=e=>{let t=So(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=wo(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Eo(`Can't create run options.`),e?.extra!==void 0&&To(e.extra,``,new WeakSet,(e,i)=>{let a=wo(e,r),o=wo(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&Eo(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Ao,jo,Mo,No,Po,Fo=L(()=>{Co(),Do(),Ao=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},jo=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Mo=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},No=(e,t,n)=>{for(let r of t){let t=typeof r==`string`?r:r.name;switch(t){case`webnn`:if(t=`WEBNN`,typeof r!=`string`){let t=r?.deviceType;if(t){let r=wo(`deviceType`,n),i=wo(t,n);So()._OrtAddSessionConfigEntry(e,r,i)!==0&&Eo(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case`webgpu`:if(t=`JS`,typeof r!=`string`){let t=r;if(t?.preferredLayout){if(t.preferredLayout!==`NCHW`&&t.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let r=wo(`preferredLayout`,n),i=wo(t.preferredLayout,n);So()._OrtAddSessionConfigEntry(e,r,i)!==0&&Eo(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${t}`)}let i=wo(t,n);So()._OrtAppendExecutionProvider(e,i)!==0&&Eo(`Can't append execution provider: ${t}.`)}},Po=e=>{let t=So(),n=0,r=[],i=e||{};Mo(i);try{let e=Ao(i.graphOptimizationLevel??`all`),a=jo(i.executionMode??`sequential`),o=typeof i.logId==`string`?wo(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log serverity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?wo(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&Eo(`Can't create session options.`),i.executionProviders&&No(n,i.executionProviders,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let e=wo(`enableGraphCapture`,r),a=wo(i.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,e,a)!==0&&Eo(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=wo(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&Eo(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&To(i.extra,``,new WeakSet,(e,i)=>{let a=wo(e,r),o=wo(i,r);t._OrtAddSessionConfigEntry(n,a,o)!==0&&Eo(`Can't set a session config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Eo(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,R=L(()=>{Io=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Lo=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Ro=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},zo=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Bo=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Vo=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Ho=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Uo=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Wo,Go=L(()=>{Ha(),Wo=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ko,qo,Jo,Yo,Xo,Zo,Qo,$o=L(()=>{R(),Ko=[`V`,`I`,`W`,`E`,`F`],qo=(e,t)=>{console.log(`[${Ko[e]},${new Date().toISOString()}]${t}`)},Xo=(e,t)=>{Jo=e,Yo=t},Zo=(e,t)=>{let n=Bo(e);n>=Bo(Jo)&&qo(n,typeof t==`function`?t():t)},Qo=(...e)=>{Yo&&Zo(...e)}}),es,ts=L(()=>{R(),es=(e,t)=>new(zo(t))(e)}),ns=L(()=>{}),rs,is,as,os,ss,cs,ls,us,ds,fs=L(()=>{$o(),ns(),rs=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),is=[],as=e=>Math.ceil(Number(e)/16)*16,os=e=>{for(let t=0;t<is.length;t++){let n=is[t];if(e<=n)return n}return Math.ceil(e/16)*16},ss=1,cs=()=>ss++,ls=async(e,t,n,r)=>{let i=as(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},us=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of rs)is.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=as(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Qo(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=as(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Qo(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=cs();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Qo(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Qo(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=os(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:cs(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Qo(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return Qo(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await ls(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=rs.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(Qo(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ds=(...e)=>new us(...e)}),ps,ms,hs=L(()=>{ps=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},ms=e=>new ps(e)}),gs,_s,z,vs,ys,bs,xs,B=L(()=>{gs=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},_s=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=gs.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},z=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},vs=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},ys=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!_s.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},bs=-34028234663852886e22,xs=34028234663852886e22}),Ss,Cs,ws,Ts,V,Es,Ds,Os,ks,H,As,U,W,js,Ms,Ns,Ps,Fs=L(()=>{R(),B(),Ss=64,Cs=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},ws=(e,t=1)=>{let n=Cs(e,t);return typeof n==`string`?n:n[0]},Ts=(e,t=1)=>{let n=Cs(e,t);return typeof n==`string`?n:n[1]},V=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:z.computeStrides(e)})}),t},Es=e=>e%4==0?4:e%2==0?2:1,Ds=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Os=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,ks=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,H=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,As=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Cs(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${H(g,e,o)};
    let rest${e} = current % ${H(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${H(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),ee=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,te=(e,t)=>o<2?`${e}`:`${H(e,t,o)}`,ne=(e,t,n)=>o<2?`${e}=${n};`:`${H(e,t,o)}=${n};`,re={},ie=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in re)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${te(g,e)} * (${t} % ${te(h,e)})`)}return re[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},ae=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),C=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),oe=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${C(`i2o_${e}(indices)`)};
  }`,se=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${ee(n)});
  }`})(),ce=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?C(`0u`):o===1?C(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},le=t=>o<2?C(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ue=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${ae(`i2o_${e}(indices)`,`value`)}
  }`,de=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${ee(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(re).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(de),t=!0),p.setByIndices&&(e.push(ue),t=!0),p.get&&(e.push(se),t=!0),p.getByIndices&&(e.push(oe),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${z.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:ie,indices:ee,indicesGet:te,indicesSet:ne,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?ae(`0u`,n):o===1?ae(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:ae,setByIndices:(t,n)=>o<2?ae(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ce,getByOffset:C,getByIndices:le,usage:r,name:e,strides:g,shape:h,rank:o}},U=(e,t,n,r=1)=>As(e,t,n,`input`,r),W=(e,t,n,r=1)=>As(e,t,n,`output`,r),js=(e,t,n)=>As(e,t,n,`atomicOutput`,1),Ms=(e,t,n,r=1)=>As(e,t,n,`internal`,r),Ns=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Ss){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ps=(e,t)=>new Ns(e,t)}),Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs=L(()=>{R(),B(),hs(),Fs(),Is=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ls=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Rs=(e,t)=>z.sortBasedOnPerm(e,Ls(e.length,t)),zs=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Bs=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Vs=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Hs=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Ls(r,t),a=Rs(e.dims,i),o=e.dims,s=a,c=r<2||Vs(i,e.dims),l;if(c)return l=e=>{let t=U(`input`,n,o,4),r=W(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Bs(e.dims,i),f=z.areEqual(d,[2,3,1]),p=z.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=U(`a`,n,o.length),r=W(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...V(o,s)]}},getShaderSource:l}):(l=e=>{let t=U(`a`,n,o.length),a=W(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${zs(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...V(o,s)]}},getShaderSource:l})},Us=(e,t)=>{Is(e.inputs,t.perm),e.compute(Hs(e.inputs[0],t.perm))},Ws=e=>ms({perm:e.perm})}),Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc=L(()=>{R(),B(),Fs(),Bc(),Gs(),Ks={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},qs={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Js={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Ys={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Xs=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Zs=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},Qs=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},$s=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},ec=(e,t)=>{let n=[];if(!$s(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},tc=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=z.size(a),l=z.size(o),u=U(`_A`,n[0].dataType,s),d=W(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Js[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${Ks[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${qs[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Ys[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},nc=(e,t,n,r)=>{let i=e.inputs.length===1?n:_c(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=z.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=ec(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Hs(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Xs(s.length,c.dims.length));let[u,d]=Zs(c.dims,s),f=u;i.keepDims&&(f=Qs(u,o)),e.compute(tc(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},rc=(e,t)=>{nc(e,`ReduceMeanShared`,t,`mean`)},ic=(e,t)=>{nc(e,`ReduceL1Shared`,t,`l1`)},ac=(e,t)=>{nc(e,`ReduceL2Shared`,t,`l2`)},oc=(e,t)=>{nc(e,`ReduceLogSumExpShared`,t,`logSumExp`)},sc=(e,t)=>{nc(e,`ReduceMaxShared`,t,`max`)},cc=(e,t)=>{nc(e,`ReduceMinShared`,t,`min`)},lc=(e,t)=>{nc(e,`ReduceProdShared`,t,`prod`)},uc=(e,t)=>{nc(e,`ReduceSumShared`,t,`sum`)},dc=(e,t)=>{nc(e,`ReduceSumSquareShared`,t,`sumSquare`)},fc=(e,t)=>{nc(e,`ReduceLogSumShared`,t,`logSum`)}}),mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc=L(()=>{R(),B(),hs(),Fs(),pc(),mc=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},hc=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],gc=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=z.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=z.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=U(`_A`,n[0].dataType,u),s=W(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...V(l,c)]})}},_c=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),ms({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},vc=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:_c(i,n);e.compute(gc(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?hc:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},yc=(e,t)=>{mc(e.inputs),vc(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},bc=(e,t)=>{mc(e.inputs),vc(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},xc=(e,t)=>{mc(e.inputs),vc(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},Sc=(e,t)=>{mc(e.inputs),vc(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Cc=(e,t)=>{mc(e.inputs),vc(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},wc=(e,t)=>{mc(e.inputs),vc(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Tc=(e,t)=>{mc(e.inputs),vc(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Ec=(e,t)=>{mc(e.inputs),vc(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Dc=(e,t)=>{mc(e.inputs),vc(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Oc=(e,t)=>{mc(e.inputs),vc(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},kc=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Ac=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wc(e,t):rc(e,t)},jc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bc(e,t):ic(e,t)},Mc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xc(e,t):ac(e,t)},Nc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sc(e,t):oc(e,t)},Pc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cc(e,t):sc(e,t)},Fc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tc(e,t):cc(e,t)},Ic=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ec(e,t):lc(e,t)},Lc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dc(e,t):uc(e,t)},Rc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oc(e,t):dc(e,t)},zc=(e,t)=>{kc(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yc(e,t):fc(e,t)}}),Vc,Hc,Uc,Wc,Gc=L(()=>{R(),hs(),Bc(),Vc=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Hc=(e,t)=>{Vc(e.inputs),e.compute(gc(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Uc=(e,t)=>{Vc(e.inputs),e.compute(gc(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Wc=e=>ms(e)}),Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el=L(()=>{R(),B(),ns(),Fs(),Kc=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},qc=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Jc=(e,t,n,r,i,a,o,s)=>{let c=Es(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=ws(e.dataType,c),m=Ts(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=W(`x`,e.dataType,e.dims,c),r=[n],i=o?U(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?U(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=Ts(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${qc(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(a/l),y:i,z:t*n},programUniforms:f})}},Yc=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=Es(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&z.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=U(`q`,t.dataType,t.dims,g),o=[a,U(`key`,n.dataType,n.dims,g)];if(b){let e=U(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(U(`attention_bias`,i.dataType,i.dims));let l=s?U(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?U(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=W(`output`,t.dataType,u),_=[h];d&&_.push(W(`present_key`,t.dataType,p,g));let v=Ts(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${qc(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Xc=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&z.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=U(`probs`,t.dataType,t.dims),a=[i,U(`v`,n.dataType,n.dims)];_&&a.push(U(`past_value`,r.dataType,r.dims));let c=o?U(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?U(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[W(`output`,t.dataType,m)];return d&&f.push(W(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${qc(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},Zc=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&z.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&z.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute(Yc(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Jc(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&z.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(Xc(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},Qc=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=W(`output_q`,s[0].dataType,n),r=W(`output_k`,s[0].dataType,n),i=W(`output_v`,s[0].dataType,n),a=U(`input`,s[0].dataType,s[0].dims),o=U(`weight`,s[1].dataType,s[1].dims),c=U(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},$c=(e,t)=>{let n=Kc(e.inputs,t),[r,i,a]=Qc(e,n);return Zc(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),tl,nl,rl,il,al=L(()=>{Va(),R(),B(),hs(),Fs(),tl=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},nl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Es(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=z.size(a)/o,l=r,u=l?a.length:a,d=U(`x`,e[0].dataType,e[0].dims,o),f=U(`scale`,e[1].dataType,e[1].dims,s),p=U(`bias`,e[2].dataType,e[2].dims,s),m=U(`inputMean`,e[3].dataType,e[3].dims,s),h=U(`inputVar`,e[4].dataType,e[4].dims,s),g=W(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...V(a)]:[{type:12,data:c}]})}},rl=e=>ms(e),il=(e,t)=>{let{inputs:n,outputCount:r}=e,i=rl({...t,outputCount:r});if(ra.webgpu.validateInputContent&&tl(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(nl(n,i))}}),ol,sl,cl,ll=L(()=>{B(),Fs(),ol=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},sl=e=>{let t=e[0].dims,n=e[0].dims[2],r=z.size(t)/4,i=e[0].dataType,a=U(`input`,i,t,4),o=U(`bias`,i,[n],4),s=U(`residual`,i,t,4),c=W(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},cl=e=>{ol(e.inputs),e.compute(sl(e.inputs))}}),ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu=L(()=>{R(),B(),hs(),Fs(),ul=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=U(`inputData`,n,[s],4),u=W(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},dl=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>ul(t,z.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(z.size(t[0].dims)/64/4)},programUniforms:c})}},fl=e=>{e.compute(dl(e.inputs[0],`Abs`,`abs`))},pl=e=>{e.compute(dl(e.inputs[0],`Acos`,`acos`))},ml=e=>{e.compute(dl(e.inputs[0],`Acosh`,`acosh`))},hl=e=>{e.compute(dl(e.inputs[0],`Asin`,`asin`))},gl=e=>{e.compute(dl(e.inputs[0],`Asinh`,`asinh`))},_l=e=>{e.compute(dl(e.inputs[0],`Atan`,`atan`))},vl=e=>{e.compute(dl(e.inputs[0],`Atanh`,`atanh`))},yl=e=>ms(e),bl=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(dl(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},xl=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return ms({min:t,max:n})},Sl=(e,t)=>{let n=t||xl(e.inputs),r=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},Cl=e=>{e.compute(dl(e.inputs[0],`Ceil`,`ceil`))},wl=e=>{e.compute(dl(e.inputs[0],`Cos`,`cos`))},Tl=e=>{e.compute(dl(e.inputs[0],`Cosh`,`cosh`))},El=e=>ms(e),Dl=(e,t)=>{let n=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ol=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,kl=e=>{let t=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Ol(t)))},Al=e=>{e.compute(dl(e.inputs[0],`Exp`,`exp`))},jl=e=>{e.compute(dl(e.inputs[0],`Floor`,`floor`))},Ml=e=>{let t=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ol(t)))},Nl=(e,t)=>{let n=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Pl=e=>{e.compute(dl(e.inputs[0],`Not`,e=>`!${e}`))},Fl=e=>{e.compute(dl(e.inputs[0],`Neg`,e=>`-${e}`))},Il=e=>{e.compute(dl(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Ll=e=>{let t=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Rl=e=>{e.compute(dl(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},zl=e=>ms(e),Bl=(e,t)=>{let n=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Vl=e=>{e.compute(dl(e.inputs[0],`Sin`,`sin`))},Hl=e=>{e.compute(dl(e.inputs[0],`Sinh`,`sinh`))},Ul=e=>{e.compute(dl(e.inputs[0],`Sqrt`,`sqrt`))},Wl=e=>{e.compute(dl(e.inputs[0],`Tan`,`tan`))},Gl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Kl=e=>{e.compute(dl(e.inputs[0],`Tanh`,Gl))},ql=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Gl(`v`)};
}
`,Jl=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Yl=e=>{let t=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`FastGelu`,Jl,ql(t),void 0,e.inputs[0].dataType))},Xl=(e,t)=>{let n=Ts(e.inputs[0].dataType);return e.compute(dl(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Zl=e=>{e.compute(dl(e.inputs[0],`Log`,`log`))},Ql=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,$l=e=>`quick_gelu_impl(${e})`,eu=(e,t)=>{let n=Ts(e.inputs[0].dataType);e.compute(dl(e.inputs[0],`QuickGelu`,$l,Ql(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),nu,ru,iu,au=L(()=>{B(),Fs(),tu(),nu=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},ru=e=>{let t=e[0].dims.slice();t[2]/=2;let n=U(`input`,e[0].dataType,e[0].dims,4),r=U(`bias`,e[0].dataType,[e[0].dims[2]],4),i=W(`output`,e[0].dataType,t,4),a=z.size(t)/4,o=ws(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Ol(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},iu=e=>{nu(e.inputs),e.compute(ru(e.inputs))}}),ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu=L(()=>{R(),B(),Fs(),ou=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=W(`outputData`,u,r.length,4),h=U(`aData`,c,t.length,4),g=U(`bData`,l,n.length,4),_;if(i)if(a){let e=z.size(t)===1,r=z.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},su=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(e=>Number(e)??1),c=r.dims.map(e=>Number(e)??1),l=!z.areEqual(s,c),u=s,d=z.size(s),f=!1,p=!1,m=[l];if(l){let e=_s.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=z.size(u);let t=z.size(s)===1,n=z.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>ou(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(u)/4)},...V(s,c,u)]})}},cu=(e,t,n,r,i,a)=>{e.compute(su(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},lu=e=>{cu(e,`Add`,(e,t)=>`${e}+${t}`)},uu=e=>{cu(e,`Div`,(e,t)=>`${e}/${t}`)},du=e=>{cu(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},fu=e=>{cu(e,`Mul`,(e,t)=>`${e}*${t}`)},pu=e=>{let t=U(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;cu(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},mu=e=>{cu(e,`Sub`,(e,t)=>`${e}-${t}`)},hu=e=>{cu(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},gu=e=>{cu(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},_u=e=>{cu(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},vu=e=>{cu(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),bu,xu,Su,Cu,wu,Tu,Eu=L(()=>{R(),B(),hs(),Fs(),bu=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},xu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Su=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Cu=(e,t,n,r)=>{let i=z.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=U(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...V(e[t].dims));u.push(...V(n));let d=W(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${xu(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Su(o,d)}
  }`}},wu=(e,t)=>{let n=e.inputs,r=n[0].dims,i=z.normalizeAxis(t.axis,r.length);bu(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>z.size(e.dims)>0);e.compute(Cu(o,i,a,n[0].dataType),{inputs:o})},Tu=e=>ms({axis:e.axis})}),Du,Ou,ku,Au,ju=L(()=>{R(),B(),Du=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},Ou=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},ku=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},Au=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[bs,xs];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Mu,Nu,Pu=L(()=>{Mu=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Nu=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Fu,Iu=L(()=>{Fu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Lu,Ru,zu=L(()=>{R(),B(),Fs(),ju(),Lu=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${H(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,H(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},Ru=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=Es(l),f=Es(u),p=Es(c),m=z.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[z.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return Ou(t,v),v.push(...V(g,o,s)),h&&v.push(...V(e[2].dims)),v.push(...V(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Ms(`batch_dims`,e[0].dataType,g.length),c=U(`a`,e[0].dataType,o.length,f),l=U(`b`,e[1].dataType,s.length,d),u=W(`output`,e[0].dataType,_.length,d),m=ws(u.type.tensor),v=Du(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(U(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];ku(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Lu(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Lu(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju=L(()=>{R(),B(),Fs(),ju(),zu(),Pu(),Bu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,Vu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,Hu=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Bu(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${Vu(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Uu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,Wu=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,Gu=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Uu(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Uu(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Wu(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},Ku=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=ws(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Mu(e,l)} {
      var value = ${Mu(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Lu(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Mu(e,l)} {
      var value = ${Mu(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Lu(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Mu(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${Mu(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},qu=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=z.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],ee=S.length,te=[d,f,m/y],ne=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];Ou(t,ne),ne.push(...V(u,b,S));let re=[`rank`,`rank`],ie=e.length>2;return ie&&(ne.push(...V(e[2].dims)),re.push(`rank`)),ne.push(...V(te)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:re},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ne}),getShaderSource:n=>{let r=u.length,a=Ms(`batchDims`,e[0].dataType,r,1),o=ws(e[0].dataType),s=U(`a`,e[0].dataType,x,y),c=U(`b`,e[1].dataType,ee,y),l=W(`result`,e[0].dataType,te.length,y),d=[s,c];if(ie){let t=i?y:1;d.push(U(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];ku(t,f);let p=ws(l.type.tensor),m=Du(t,l.type.value,p),v=Ku(y,ie,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?Hu(g,_,o,a):Gu(g,_,o,a)}
                   `}}}}),Yu,Xu,Zu=L(()=>{R(),$o(),Fs(),ju(),Pu(),Iu(),Ju(),Yu=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Mu(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Mu(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Mu(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Mu(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Mu(s,l)}(0.0);`,x=Mu(c,l),S=Mu(e?o:s,l),ee=Mu(e?s:o,l),te=Du(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ee} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${Nu(i)}
      ${te}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Xu=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];Qo(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],ee=v[0]*y[0],te=Math.max(v[0]*x,v[1]),ne=r%S===0,re=i%ee===0,ie=a%te===0,ae=h?[x,4,4]:[1,1,1],C=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ou(t,C),C.push(...V(e[0].dims,e[1].dims));let oe=[`rank`,`rank`];return o&&(C.push(...V(e[2].dims)),oe.push(`rank`)),C.push(...V(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${ne};${re};${ie};${S};${ee};${te}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:C}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];ku(t,i);let a=h?4:1,c=ws(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[U(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),U(`w`,e[1].dataType,e[1].dims.length,a)],f=W(`result`,e[0].dataType,n.length,a);if(o){let t=U(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Fu(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${Yu(l,ne,re,ie,o,t,ae[0],ae[1],ae[2],c)}
        ${h?Hu(y,v,c,void 0,!l,te):Gu(y,v,c,void 0,!l,te,!1,void 0,s)}`}}}}),Qu,$u,ed,td,nd,rd,id,ad,od=L(()=>{R(),$o(),B(),Fs(),ju(),Pu(),Qu=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},$u=e=>typeof e==`number`?[e,e,e]:e,ed=(e,t)=>t<=1?e:e+(e-1)*(t-1),td=(e,t,n,r=1)=>{let i=ed(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},nd=(e,t,n,r,i)=>{i??=td(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},rd=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=nd([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=nd([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},id=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=$u(n),[y,b,x]=$u(r),S=ed(p,y),ee=ed(m,b),te=ed(h,x),{padInfo:ne,outDepth:re,outHeight:ie,outWidth:ae}=rd(i,c,l,u,g,_,v,S,ee,te),C=a?f*d:f,oe=[0,0,0,0,0];return o===`channelsFirst`?oe=[s,C,re,ie,ae]:o===`channelsLast`&&(oe=[s,re,ie,ae,C]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:re,outHeight:ie,outWidth:ae,outChannels:C,padInfo:ne,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:ee,effectiveFilterWidth:te,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:oe,filterShape:t}},ad=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(Qu(c.x.map(e=>n[e]))/s[0]),1,1];Qo(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:z.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ou(t,u),u.push(...V(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...V(e[2].dims)),d.push(`rank`)),u.push(...V(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];ku(t,s);let c=ws(e[0].dataType),l=U(`x`,e[0].dataType,e[0].dims.length,1),u=U(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=W(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=U(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?H(`coords`,4,5):H(`coords`,1,5)}];
        }`}let h=Mu(1,c),g=Du(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${H(`coords`,0,l.rank)};
              let d2 = ${o?H(`coords`,l.rank-1,l.rank):H(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?H(`coords`,1,l.rank):H(`coords`,2,l.rank)},
              ${o?H(`coords`,2,l.rank):H(`coords`,3,l.rank)},
              ${o?H(`coords`,3,l.rank):H(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?H(`uniforms.x_shape`,1,l.rank):H(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?H(`uniforms.x_shape`,2,l.rank):H(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?H(`uniforms.x_shape`,3,l.rank):H(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?H(`uniforms.x_shape`,4,l.rank):H(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),sd,cd,ld=L(()=>{R(),B(),Fs(),ju(),sd=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?Es(l):1,f=z.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];Ou(t,p),p.push(...V(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...V([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=W(`output`,e[0].dataType,n.length,d),u=ws(l.type.tensor),f=Du(t,l.type.value,u),p=U(`x`,e[0].dataType,o.length),m=U(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(U(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];ku(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},cd=(e,t,n,r)=>{let i=e.length>2,a=Es(n[3]),o=Es(n[2]),s=z.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ou(t,d),d.push(...V(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=W(`output`,e[0].dataType,u.length,a),s=ws(r.type.tensor),d=Du(t,r.type.value,s),p=U(`x`,e[0].dataType,c.length,a),m=U(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(U(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return ku(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),ud,dd,fd,pd,md,hd,gd,_d,vd,yd=L(()=>{B(),Zu(),od(),Ju(),ld(),ju(),zu(),Gs(),ud=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},dd=[2,3,1,0],fd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},pd=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();vs.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},md=e=>{let t=Au(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},hd=(e,t,n,r)=>{let i=n.format===`NHWC`,a=ud(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Hs(t[1],dd),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(cd(o,n,a,r),{inputs:o}):e.compute(sd(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Hs(t[1],dd),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(Ru(v,n,a,_,i,r),{inputs:v}):e.compute(qu(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Hs(t[1],dd),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(Xu(_,n,a,v,y,b,o,!0,r),{inputs:_})},gd=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=pd({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);hd(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},_d=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=pd(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=id(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(ad(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},vd=(e,t)=>{if(fd(e.inputs,t),e.inputs[0].dims.length===3)gd(e,t);else if(e.inputs[0].dims.length===5)_d(e,e.inputs,t);else{let n=pd(t,e.inputs);hd(e,e.inputs,n)}}}),bd,xd=L(()=>{R(),$o(),B(),Fs(),bd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?Es(c):1,d=a?Es(l):1,f=a?l===1?u:d:1,p=z.size(i)/d,m=[Math.ceil(p/64),1,1];Qo(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let h=[`rank`,`rank`],g=[t.strides[0],t.strides[1]],_=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],v=[t.dilations[0],t.dilations[1]],y=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],b=[y[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),y[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:p},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:y},{type:6,data:b},{type:12,data:c},{type:12,data:l},...V(e[0].dims,e[1].dims)];return r&&(x.push(...V(e[2].dims)),h.push(`rank`)),x.push(...V(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${f}${d}${l===1}`,inputDependencies:h},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:g.length},{name:`filter_dims`,type:`u32`,length:_.length},{name:`dilations`,type:`u32`,length:_.length},{name:`effective_filter_dims`,type:`u32`,length:y.length},{name:`pads`,type:`i32`,length:b.length},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=ws(e[0].dataType),s=a?1:2,c=a?2:3,p=a?3:1,m=U(`W`,e[1].dataType,e[1].dims.length,f),h=U(`Dy`,e[0].dataType,e[0].dims.length,u),v=[h,m];r&&v.push(U(`bias`,e[2].dataType,[i[p]].length,d));let x=W(`result`,e[0].dataType,i.length,d),S=`
            let outputIndices = ${x.offsetToIndices(`global_idx * ${d}`)};
            let batch = ${x.indicesGet(`outputIndices`,0)};
            let d1 = ${x.indicesGet(`outputIndices`,p)};
            let r = ${x.indicesGet(`outputIndices`,s)};
            let c = ${x.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${x.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${u}) {
                  let xValue = ${a?h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):h.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
                  ${(()=>{let e=``;if(u===1)e+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)e+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${u};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${d}]`:``};
            ${x.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(...v,x)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${S}}`}}}}),Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd=L(()=>{xd(),ju(),Gs(),Sd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Cd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},wd=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=Sd(s,o[i],a[i],t[f],n[i],p);Cd(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},Td=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}wd(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},Ed=e=>{let t=Au(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Dd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},Od=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Hs(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(bd(a,n,r),{inputs:a})},kd=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=Td({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);Od(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Ad=(e,t)=>{if(Dd(e.inputs,t),e.inputs[0].dims.length===3)kd(e,t);else{let n=Td(t,e.inputs);Od(e,e.inputs,n)}}}),Md,Nd,Pd,Fd=L(()=>{R(),B(),hs(),Fs(),Md=(e,t,n,r)=>{let i=z.size(t),a=t.length,o=U(`input`,e,a),s=W(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=z.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...V(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=H(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Nd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Md(r,n,i,t),{inputs:[0]})},Pd=e=>{let t=e.exclusive===1,n=e.reverse===1;return ms({exclusive:t,reverse:n})}}),Id,Ld,Rd,zd,Bd,Vd=L(()=>{R(),B(),hs(),Fs(),Id=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},Ld=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Rd=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=U(`a`,p,f),h=W(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=z.size(t),u=d.dims,f=z.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...V(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${Ld(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},zd=(e,t)=>{Id(e.inputs),e.compute(Rd(e.inputs[0],t))},Bd=e=>ms({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d=L(()=>{R(),B(),hs(),Fs(),Hd=`[a-zA-Z]|\\.\\.\\.`,Ud=`(`+Hd+`)+`,Wd=`^`+Ud+`$`,Gd=`(`+Ud+`,)*`+Ud,Kd=`^`+Gd+`$`,qd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Jd=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(Kd)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(Wd)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Ud)))throw Error(`Invalid RHS`);r.match(RegExp(Hd,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Wd))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(Hd,`g`)),l=new qd(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Yd=e=>e+`_max`,Xd=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>U(`input${n}`,t,e)),a=z.size(r),o=W(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...V(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...V(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${Yd(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${Yd(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Zd=(e,t)=>{let n=new Jd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Xd(i,e.inputs[0].dataType,n,r))},Qd=e=>{let t=e.equation.replace(/\s+/g,``);return ms({equation:t})}}),ef,tf,nf,rf,af,of=L(()=>{R(),B(),Fs(),ef=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},tf=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},nf=(e,t)=>e.length>t.length?tf(e,t):tf(t,e),rf=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=nf(t,n),i=e[0].dataType,a=i===9||z.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(z.size(r)/s),l=e=>{let n=U(`input`,i,t.length,o),a=W(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...V(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},af=e=>{ef(e.inputs),e.compute(rf(e.inputs),{inputs:[0]})}}),sf,cf,lf=L(()=>{R(),B(),Fs(),tu(),sf=e=>{let t=e[0].dataType,n=z.size(e[0].dims),r=z.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=U(`x`,t,[1],4),r=U(`bias`,t,[1],4),a=W(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${ql(Ts(t))}

    ${e.mainStart(Ss)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Jl(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Ss/4)}})}},cf=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?Yl(e):e.compute(sf(e.inputs))}}),uf,df,ff,pf,mf=L(()=>{R(),B(),hs(),Fs(),uf=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},df=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=z.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(z.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...V(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=U(`data`,e[0].dataType,e[0].dims.length,c),s=U(`inputIndices`,e[1].dataType,e[1].dims.length),l=W(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},ff=e=>ms({axis:e.axis}),pf=(e,t)=>{let n=e.inputs;uf(n),e.compute(df(e.inputs,t))}}),hf,gf,_f,vf=L(()=>{R(),B(),Fs(),hf=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...V(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[U(`indices_data`,t.dataType,t.dims.length),W(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},gf=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=z.sizeToDimension(a,a.length-1),c=z.sizeFromDimension(r,t.batchDims+o),l=z.sizeToDimension(r,t.batchDims),u=z.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=hf(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=z.size(g),v=[{type:12,data:_},{type:12,data:c},...V(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=U(`data`,n[0].dataType,n[0].dims.length),r=U(`slice_offsets`,12,m.dims.length),i=W(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},_f=e=>({batchDims:e.batch_dims,cacheKey:``})}),yf,bf,xf,Sf,Cf=L(()=>{R(),B(),hs(),Fs(),yf=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},bf=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=z.normalizeAxis(t.gatherAxis,i),o=z.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=z.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...V(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=U(`data`,e[0].dataType,e[0].dims.length),o=U(`inputIndices`,e[1].dataType,e[1].dims.length),c=U(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?U(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=W(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${Ts(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},xf=(e,t)=>{let n=e.inputs;yf(n,t),e.compute(bf(e.inputs,t))},Sf=e=>ms({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),wf,Tf,Ef,Df,Of=L(()=>{R(),B(),hs(),Fs(),wf=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Tf=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=z.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=z.size(l),d=U(`input`,r,i),f=U(`indicesInput`,o,a.length),p=W(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...V(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},Ef=e=>ms({axis:e.axis}),Df=(e,t)=>{let n=e.inputs;wf(n),e.compute(Tf(e.inputs,t))}}),kf,Af,jf,Mf,Nf=L(()=>{R(),B(),Fs(),kf=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},Af=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=ys.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);z.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...V(e[2].dims)),d.push(`rank`)),u.push(...V(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=U(`a`,e[0].dataType,e[0].dims),i=U(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=U(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=W(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},jf=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Mf=(e,t)=>{kf(e.inputs),e.compute(Af(e.inputs,t))}}),Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf=L(()=>{R(),B(),hs(),Fs(),[Pf,Ff,If,Lf]=[0,1,2,3],Rf=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},zf=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Bf=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Vf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Hf=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Uf=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Pf}] = batch;
     indices[${Ff}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${If}] = u32(r);
            indices[${Lf}] = u32(c);
          }
        `;case`border`:return`
          indices[${If}] = u32(clamp(r, 0, H - 1));
          indices[${Lf}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${If}] = gs_reflect(r, border[1], border[3]);
          indices[${Lf}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,Wf=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Pf}], indices[${Ff}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Pf}], indices[${Ff}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Pf}], indices[${Ff}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Pf}], indices[${Ff}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Pf}], indices[${Ff}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Pf}], indices[${Ff}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Gf=(e,t)=>{let n=U(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=U(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Pf,Ff,If,Lf]=[0,3,1,2]);let o=W(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:z.size(a)},...V(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${zf}
  ${Bf(s)}
  ${Vf(t)}
  ${Hf(t)}
  ${Uf(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${If}]);
      let W_in = i32(uniforms.x_shape[${Lf}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Pf}], indices[${If}], indices[${Lf}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Wf(o,s,t)}
  }`}},Kf=(e,t)=>{Rf(e.inputs),e.compute(Gf(e.inputs,t))},qf=e=>ms({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Yf,Xf,Zf,Qf,$f,ep,tp,np=L(()=>{R(),B(),hs(),ns(),el(),Fs(),Gs(),Yf=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Xf=(e,t)=>{let n=e[0],r=Yf(e,1),i=Yf(e,2),a=Yf(e,3),o=Yf(e,4),s=Yf(e,5),c=Yf(e,6),l=Yf(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&z.size(c.dims)&&z.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&z.size(c.dims)||l&&z.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&z.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&z.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&z.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&z.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&z.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&z.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Zf=e=>ms({...e}),Qf=ms({perm:[0,2,1,3]}),$f=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=z.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=W(`qkv_with_bias`,t.dataType,s),i=U(`qkv`,t.dataType,s),a=U(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},ep=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&z.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=$f(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Hs(c,Qf.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Hs(c,Qf.perm),{inputs:[c],outputs:[-1]})[0]},tp=(e,t)=>{let n=Xf(e.inputs,t),r=e.inputs[0],i=Yf(e.inputs,1),a=Yf(e.inputs,2),o=Yf(e.inputs,3),s=Yf(e.inputs,4),c=Yf(e.inputs,5),l=Yf(e.inputs,6),u=Yf(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=ep(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return Zc(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=ep(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=ep(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Zc(e,f,p,m,s,void 0,l,u,c,n)}}),rp,ip,ap,op,sp,cp,lp,up=L(()=>{R(),B(),hs(),Fs(),rp=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},ip=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),ms({numOutputs:r,axis:t.axis,splitSizes:n})},ap=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${H(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,op=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},sp=(e,t)=>{let n=e[0].dims,r=z.size(n),i=e[0].dataType,a=z.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=U(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=W(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...V(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${ap(c.length)}
  ${op(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${H(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},cp=(e,t)=>{rp(e.inputs);let n=e.inputs.length===1?t:ip(e.inputs,t);e.compute(sp(e.inputs,n),{inputs:[0]})},lp=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes lengh must be equal`);return ms({axis:t,numOutputs:r,splitSizes:n})}}),dp,fp,pp,mp,hp=L(()=>{hs(),el(),np(),up(),Gs(),dp=(e,t)=>{if(t.doRotary)throw Error(`GroupQuerryAttention do_rotary attribute is not supported`);if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},fp=ms({perm:[0,2,1,3]}),pp=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Hs(r,fp.perm),{inputs:[r],outputs:[-1]})[0]),r},mp=(e,t)=>{let n=dp(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=ms({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(sp([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h=ep(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,f,void 0,0);Zc(e,h,pp(e,p,n),pp(e,m,n),void 0,void 0,o,s,void 0,n,c,l)}}),gp,_p,vp,yp,bp=L(()=>{R(),B(),Gs(),Fs(),gp=(e,t,n,r,i,a,o,s)=>{let c=Es(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...V(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=U(`x`,t.dataType,3,c),a=[i,U(`scale`,n.dataType,n.dims),U(`bias`,r.dataType,r.dims),W(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ks(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${ks(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},_p=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=z.sizeFromDimension(r,2),c=Es(s),l=z.size(i)/c,u=gp(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...V(d,f,d)]}),getShaderSource:e=>{let n=U(`x`,t[0].dataType,d.length,c),r=U(`scale_shift`,1,f.length,2),i=W(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},vp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=z.sizeFromDimension(r,1)/o,c=Es(o),l=z.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Hs(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=gp(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=ws(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=U(`input`,t[0].dataType,t[0].dims,c),s=W(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},yp=(e,t)=>{t.format===`NHWC`?vp(e,e.inputs,t):_p(e,e.inputs,t)}}),xp,Sp,Cp,wp=L(()=>{R(),B(),Fs(),xp=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},Sp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=z.normalizeAxis(t.axis,i.length),l=z.sizeToDimension(i,c),u=z.sizeFromDimension(i,c),d=z.size(a.dims),f=o?z.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=Es(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=ws(e[0].dataType),i=[U(`x`,e[0].dataType,e[0].dims,m),U(`scale`,a.dataType,a.dims,m)];return o&&i.push(U(`bias`,o.dataType,o.dims,m)),i.push(W(`output`,e[0].dataType,s,m)),_&&i.push(W(`mean_data_output`,1,p)),v&&i.push(W(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ds(`f32`,m)};
    var mean_square_vector = ${Ds(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Os(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ks(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ks(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Os(n,m,`x[j + offset]`)};
      let f32scale = ${Os(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Os(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},Cp=(e,t)=>{xp(e.inputs),e.compute(Sp(e.inputs,t,e.outputCount))}}),Tp,Ep,Dp=L(()=>{B(),zu(),Ju(),Tp=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},Ep=e=>{Tp(e.inputs);let t=_s.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ru(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=z.size(e.inputs[0].dims.slice(0,-2)),o=z.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(qu(c,{activation:``},t,s),{inputs:c})}else e.compute(qu(e.inputs,{activation:``},t))}}}),Op,kp,Ap,jp,Mp,Np=L(()=>{R(),B(),hs(),Fs(),Op=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!z.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(z.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(z.size(n)!==r)throw Error(`zeroPoints input size error.`)}},kp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=z.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Es(t.k),f=Es(l),p=Es(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=z.size(m)/p/h,_=[],v=[c,i,a/d],y=z.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...V(v)),_.push(...V(y)),_.push(...V(e[2].dims)),e.length===4&&_.push(...V(z.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...V(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=U(`a`,e[0].dataType,r,d),a=U(`b`,12,y.length,f),o=U(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?U(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=W(`output`,e[0].dataType,u,p),g=ws(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},Ap=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=z.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Es(t.k),f=Es(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=z.size(p)/m,b=[],x=[c,i,a/d],S=z.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...V(x)),b.push(...V(S)),b.push(...V(e[2].dims)),e.length===4&&b.push(...V(z.convertShape(e[3].dims)));let ee=[c,i,o];return b.push(...V(ee)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=U(`a`,e[0].dataType,r,d),a=U(`b`,12,S.length,f),o=U(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?U(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=ee.length,u=W(`output`,e[0].dataType,l),p=ws(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},jp=(e,t)=>{Op(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(Ap(e.inputs,t)):e.compute(kp(e.inputs,t))},Mp=e=>ms(e)}),Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up=L(()=>{R(),B(),Fs(),Pp=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},Fp=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${H(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${H(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Ip=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${H(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${H(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${H(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Lp=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${H(`uniforms.x_shape`,i,t)})) {
                  k = i32(${H(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${H(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Rp=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${H(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${H(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${H(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${H(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},zp=(e,t,n)=>{switch(n.mode){case 0:return Fp(e,t,n.pads.length);case 1:return Ip(e,t,n.pads.length);case 2:return Lp(e,t,n.pads.length);case 3:return Rp(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},Bp=(e,t)=>{let n=z.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:z.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...V(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=W(`output`,e[0].dataType,n.length),s=U(`x`,e[0].dataType,r.length),c=s.type.value,l=zp(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},Vp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},Hp=(e,t)=>{Pp(e.inputs);let n=Vp(e.inputs,t);e.compute(Bp(e.inputs,n),{inputs:[0]})}}),Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm=L(()=>{Va(),R(),B(),Fs(),Wp=e=>{if(ra.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Gp=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();vs.adjustPoolAttributes(n,i,o,s,c,l);let u=vs.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Kp=(e,t)=>{let n=t.format===`NHWC`,r=z.size(e),i=z.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=z.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},qp=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=W(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${H(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${H(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${H(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${H(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Jp=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Yp=e=>`${Jp(e)};${e.countIncludePad}`,Xp=e=>`${Jp(e)};${e.storageOrder};${e.dilations}`,Zp=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Qp=(e,t,n,r)=>{let[i,a]=Gp(t,r,n),o=U(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Kp(a,i);return l.push(...V(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(a)/64)},programUniforms:l}),getShaderSource:e=>qp(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},$p=e=>{let t=e.count_include_pad!==0,n=Zp(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Yp(r)}},em=(e,t)=>{Wp(e.inputs),e.compute(Qp(`AveragePool`,e.inputs[0],!1,t))},tm={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},nm=e=>{let t=e.format;return{format:t,...tm,cacheKey:t}},rm=(e,t)=>{Wp(e.inputs),e.compute(Qp(`GlobalAveragePool`,e.inputs[0],!0,t))},im=(e,t,n,r)=>{let[i,a]=Gp(t,r,n),o=U(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Kp(a,i);return c.push(...V(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(a)/64)},programUniforms:c}),getShaderSource:e=>qp(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},am=(e,t)=>{Wp(e.inputs),e.compute(im(`MaxPool`,e.inputs[0],!1,t))},om=e=>{let t=e.storage_order,n=e.dilations,r=Zp(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Xp(i)}},sm=e=>{let t=e.format;return{format:t,...tm,cacheKey:t}},cm=(e,t)=>{Wp(e.inputs),e.compute(im(`GlobalMaxPool`,e.inputs[0],!0,t))}}),um,dm,fm,pm,mm=L(()=>{R(),B(),hs(),Fs(),um=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},dm=(e,t)=>{let n=z.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=z.size(a),c=r===3||r===2,l=c?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(z.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=Es(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=U(`input`,c?12:r,l.length,v),b=U(`scale`,o,u.length),x=d?U(`zero_point`,c?12:r,f.length):void 0,S=W(`output`,o,a.length,_),ee=[y,b];x&&ee.push(x);let te=[l,u];d&&te.push(f);let ne=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...V(...te,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...ee,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:ne})}},fm=(e,t)=>{um(e.inputs,t),e.compute(dm(e.inputs,t))},pm=e=>ms({axis:e.axis,blockSize:e.blockSize})}),hm,gm,_m,vm=L(()=>{Va(),R(),Fs(),hm=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},gm=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...V(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=W(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},_m=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ra.webgpu.validateInputContent&&hm(t,n,r),e.compute(gm(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),ym,bm,xm,Sm,Cm=L(()=>{R(),B(),hs(),Fs(),ym=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},bm=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(z.size(r)/1),o=r[r.length-1],s=z.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...V(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let a=U(`indices`,e[1].dataType,e[1].dims.length),o=U(`updates`,e[2].dataType,e[2].dims.length,1),s=t.reduction!==`none`&&t.reduction!==``?js(`output`,e[0].dataType,i.length):W(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(a,o,s)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var hasDuplicates = false;
  if (${t.reduction===`none`}) {
    let n = ${z.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction===`none`} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${ym(t.reduction,`output[data_offset + i]`,`value`,s.type.value)}
  }

      }`}}},xm=e=>ms({reduction:e.reduction}),Sm=(e,t)=>{e.compute(bm(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm=L(()=>{R(),B(),hs(),Fs(),wm=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},Tm=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},Em=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);wm(r,t),t.axes.length>0&&Tm(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},Dm=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Om=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Dm(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Dm(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,km=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,Am=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},jm=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},Mm=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},Nm=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${H(`uniforms.scales`,`i`,r)};
        var roi_low = ${H(`uniforms.roi`,`i`,i)};
        var roi_hi = ${H(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${H(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${H(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Pm=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${H(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${H(`uniforms.roi`,`i`,a)};
          var roi_hi = ${H(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${H(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${H(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,Fm=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${H(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,Im=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,Lm=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Im(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Rm=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},zm=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${Im(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Bm=(e,t,n,r,i,a)=>{let o=e.dims,s=Am(a,t.axes,o.length),c=jm(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=Mm(o,l,t)));let u=W(`output`,e.dataType,c.length),d=U(`input`,e.dataType,o.length),f=z.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${Om(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${Fm(d,o)};
              ${km(t.nearestMode,n,g)};
              ${Pm(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${Nm(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Lm(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${zm(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${Rm(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...V(o,c)]})}},Vm=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Hm=(e,t)=>{let n=[],r=[],i=[],a=Vm(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);Em(e.inputs,t,a,n,r,i),e.compute(Bm(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Um=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return ms({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),Gm,Km,qm,Jm=L(()=>{R(),B(),hs(),Fs(),Gm=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!z.areEqual(r.dims,[])&&!z.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!z.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=z.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},Km=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=z.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=z.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...V(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:ms({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=U(`input`,e[0].dataType,e[0].dims.length),i=U(`position_ids`,e[1].dataType,e[1].dims.length),a=U(`cos_cache`,e[2].dataType,e[2].dims.length),o=U(`sin_cache`,e[3].dataType,e[3].dims.length),s=W(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Ss)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,W(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(f)/Ss)},programUniforms:m})}},qm=(e,t)=>{Gm(e.inputs,t),e.compute(Km(e.inputs,t))}}),Ym,Xm,Zm,Qm=L(()=>{R(),B(),Fs(),Ym=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Xm=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=z.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=Es(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[U(`x`,e[0].dataType,e[0].dims,g),U(`skip`,e[1].dataType,e[1].dims,g),U(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(U(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(U(`bias`,e[4].dataType,e[4].dims,g)),r.push(W(`output`,e[0].dataType,s,g)),p&&r.push(W(`mean_output`,1,u)),m&&r.push(W(`inv_std_output`,1,u)),h&&r.push(W(`input_skip_bias_sum`,e[0].dataType,s,g));let a=ws(e[0].dataType),o=ws(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Os(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ks(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ks(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Zm=(e,t)=>{Ym(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Xm(e.inputs,t,e.outputCount,!1),{outputs:n})}}),$m,eh,th,nh,rh,ih,ah,oh,sh=L(()=>{R(),B(),hs(),Fs(),$m=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},eh=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},th=(e,t)=>{if(e.length>1){let t=eh(e,1),n=eh(e,2),r=eh(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),ms({starts:t,ends:n,axes:r})}return t},nh=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},rh=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${H(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${H(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${H(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${H(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,ih=(e,t)=>{let n=e[0].dims,r=z.size(n),i=t.axes.length>0?z.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=eh(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>nh(e,t,n,i,a)),s=t.ends.map((e,t)=>nh(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=W(`output`,e[0].dataType,l.length),f=U(`input`,e[0].dataType,e[0].dims.length),p=z.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...V(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${rh(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},ah=(e,t)=>{$m(e.inputs,t);let n=th(e.inputs,t);e.compute(ih(e.inputs,n),{inputs:[0]})},oh=e=>{let t=e.starts,n=e.ends,r=e.axes;return ms({starts:t,ends:n,axes:r})}}),ch,lh,uh,dh,fh=L(()=>{R(),B(),hs(),Gs(),Fs(),ch=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},lh=(e,t)=>{let n=e.inputs[0],r=n.dims,i=z.size(r),a=r.length,o=z.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Hs(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=Es(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=U(`x`,c.dataType,c.dims,p),v=W(`result`,c.dataType,c.dims,p),y=_.type.value,b=ws(c.dataType)===`f32`?`var threadMax = ${y}(-3.402823e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${ks(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Hs(x,l),{inputs:[x]})},uh=(e,t)=>{ch(e.inputs),lh(e,t)},dh=e=>ms({axis:e.axis})}),ph,mh,hh,gh,_h,vh=L(()=>{R(),B(),Fs(),ph=e=>Array.from(e.getBigInt64Array(),Number),mh=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(ph(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},hh=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},gh=(e,t)=>{let n=e[0].dims,r=t??ph(e[1]),i=hh(n,r),a=z.size(i),o=e[0].dataType,s=U(`input`,o,n.length),c=W(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...V(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},_h=e=>{mh(e.inputs),e.compute(gh(e.inputs),{inputs:[0]})}}),yh,bh,xh,Sh=L(()=>{R(),B(),Fs(),yh=(e,t,n,r,i)=>{let a=W(`output_data`,i,n.length,4),o=U(`a_data`,t[1].dataType,t[1].dims.length,4),s=U(`b_data`,t[2].dataType,t[2].dims.length,4),c=U(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},bh=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(z.areEqual(t,n)&&z.areEqual(n,r)),o=t,s=z.size(t);if(a){let e=_s.calcShape(_s.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=z.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>yh(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...V(r,t,n,o)]})}},xh=e=>{e.compute(bh(e.inputs))}}),Ch,wh=L(()=>{Gc(),el(),al(),ll(),au(),yu(),Eu(),yd(),jd(),Fd(),Vd(),$d(),of(),lf(),mf(),vf(),Cf(),Of(),Nf(),Jf(),hp(),bp(),wp(),Dp(),Np(),np(),Up(),lm(),mm(),vm(),Cm(),Bc(),Wm(),Jm(),Qm(),sh(),fh(),up(),vh(),Gs(),tu(),Sh(),Ch=new Map([[`Abs`,[fl]],[`Acos`,[pl]],[`Acosh`,[ml]],[`Add`,[lu]],[`ArgMax`,[Uc,Wc]],[`ArgMin`,[Hc,Wc]],[`Asin`,[hl]],[`Asinh`,[gl]],[`Atan`,[_l]],[`Atanh`,[vl]],[`Attention`,[$c]],[`AveragePool`,[em,$p]],[`BatchNormalization`,[il]],[`BiasAdd`,[cl]],[`BiasSplitGelu`,[iu]],[`Cast`,[bl,yl]],[`Ceil`,[Cl]],[`Clip`,[Sl]],[`Concat`,[wu,Tu]],[`Conv`,[vd,md]],[`ConvTranspose`,[Ad,Ed]],[`Cos`,[wl]],[`Cosh`,[Tl]],[`CumSum`,[Nd,Pd]],[`DepthToSpace`,[zd,Bd]],[`DequantizeLinear`,[fm,pm]],[`Div`,[uu]],[`Einsum`,[Zd,Qd]],[`Elu`,[Dl,El]],[`Equal`,[du]],[`Erf`,[kl]],[`Exp`,[Al]],[`Expand`,[af]],[`FastGelu`,[cf]],[`Floor`,[jl]],[`FusedConv`,[vd,md]],[`Gather`,[pf,ff]],[`GatherElements`,[Df,Ef]],[`GatherBlockQuantized`,[xf,Sf]],[`GatherND`,[gf,_f]],[`Gelu`,[Ml]],[`Gemm`,[Mf,jf]],[`GlobalAveragePool`,[rm,nm]],[`GlobalMaxPool`,[cm,sm]],[`Greater`,[hu]],[`GreaterOrEqual`,[_u]],[`GridSample`,[Kf,qf]],[`GroupQueryAttention`,[mp]],[`HardSigmoid`,[Bl,zl]],[`InstanceNormalization`,[yp]],[`LayerNormalization`,[Cp]],[`LeakyRelu`,[Nl,El]],[`Less`,[gu]],[`LessOrEqual`,[vu]],[`Log`,[Zl]],[`MatMul`,[Ep]],[`MatMulNBits`,[jp,Mp]],[`MaxPool`,[am,om]],[`Mul`,[fu]],[`MultiHeadAttention`,[tp,Zf]],[`Neg`,[Fl]],[`Not`,[Pl]],[`Pad`,[Hp]],[`Pow`,[pu]],[`QuickGelu`,[eu,El]],[`Range`,[_m]],[`Reciprocal`,[Il]],[`ReduceMin`,[Fc]],[`ReduceMean`,[Ac]],[`ReduceMax`,[Pc]],[`ReduceSum`,[Lc]],[`ReduceProd`,[Ic]],[`ReduceL1`,[jc]],[`ReduceL2`,[Mc]],[`ReduceLogSum`,[zc]],[`ReduceLogSumExp`,[Nc]],[`ReduceSumSquare`,[Rc]],[`Relu`,[Ll]],[`Resize`,[Hm,Um]],[`RotaryEmbedding`,[qm]],[`ScatterND`,[Sm,xm]],[`Sigmoid`,[Rl]],[`Sin`,[Vl]],[`Sinh`,[Hl]],[`Slice`,[ah,oh]],[`SkipLayerNormalization`,[Zm]],[`Split`,[cp,lp]],[`Sqrt`,[Ul]],[`Softmax`,[uh,dh]],[`Sub`,[mu]],[`Tan`,[Wl]],[`Tanh`,[Kl]],[`ThresholdedRelu`,[Xl,El]],[`Tile`,[_h]],[`Transpose`,[Us,Ws]],[`Where`,[xh]]])}),Th,Eh=L(()=>{Va(),$o(),Fs(),Th=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){ka(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Aa(e.programInfo.name)}dispose(){}build(e,t){ka(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`},{feature:`subgroups-f16`,extension:`subgroups_f16`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Ps(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Qo(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return Aa(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),Dh,Oh,kh,Ah,jh,Mh=L(()=>{Va(),R(),$o(),ts(),fs(),wh(),Eh(),Dh=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},Oh=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${Dh(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},kh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ah=class{constructor(e){this.subgroupsSupported=e.features.has(`subgroups`),this.subgroupsF16Supported=e.features.has(`subgroups`);let t=e.limits;this.subgroupSizeRange=!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?void 0:[t.minSubgroupSize,t.maxSubgroupSize]}},jh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`)&&i(`subgroups-f16`),this.device=await t.requestDevice(r),this.deviceInfo=new Ah(this.device),this.adapterInfo=new kh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=ds(this),this.programManager=new Th(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Xo(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;ka(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Lo(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Lo(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Lo(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Lo(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}execution time: ${m-p} ns`)}Da(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Aa()}run(e,t,n,r,i,a){ka(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return Aa(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Lo(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=Oh(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),Qo(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(Qo(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),Aa(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Ch.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),Qo(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ls(this,e,t);return es(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Qo(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){Qo(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){Qo(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh=L(()=>{$o(),Nh=1,Ph=()=>Nh++,Fh=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),Ih=(e,t)=>{let n=Fh.get(e);if(!n)throw Error(`Unsupported data type.`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},Lh=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Ih(this.dataType,this.tensorShape)}destroy(){Qo(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}},Rh=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Ih(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Qo(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},zh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}reserveTensorId(){let e=Ph();return this.tensorTrackersById.set(e,new Rh(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Qo(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){Qo(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Ph(),o=new Lh({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Rh(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a){let o=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(o,t,n)){Qo(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${n}}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}Qo(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${n}}`);let s=await o.createTensor({dataType:t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Lh({sessionId:e,context:o,tensor:s,dataType:t,shape:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Bh=(...e)=>new zh(...e)}),Hh,Uh,Wh,Gh=L(()=>{R(),Co(),ts(),Vh(),$o(),Hh=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),Uh=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},Wh=class{constructor(e){this.tensorManager=Bh(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Xo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){Qo(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Qo(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)Qo(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>Uh(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Qo(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Hh.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Qo(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Hh.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!So().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);Qo(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return es(n,t)}}registerMLTensor(e,t,n,r){let i=Hh.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Qo(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a){if(!a)throw Error(`External mounted files are not available.`);let o=e;e.startsWith(`./`)&&(o=e.substring(2));let s=a.get(o);if(!s)throw Error(`File with name ${o} not found in preloaded files.`);if(t+n>s.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let c=s.slice(t,t+n).buffer,l;switch(i.dataType){case`float32`:l=new Float32Array(c);break;case`float16`:l=new Uint16Array(c);break;case`int32`:l=new Int32Array(c);break;case`uint32`:l=new Uint32Array(c);break;case`int64`:l=new BigInt64Array(c);break;case`uint64`:l=new BigUint64Array(c);break;case`int8`:l=new Int8Array(c);break;case`int4`:case`uint4`:case`uint8`:l=new Uint8Array(c);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Qo(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),r.constant(i,l)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}flush(){}}}),Kh={};Hi(Kh,{init:()=>Yh});var qh,Jh,Yh,Xh=L(()=>{R(),Mh(),$o(),B(),Gh(),qh=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(z.size(t)!==z.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Jh=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new qh(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new qh(this.module,t,this.output(e,n),n),(e,t)=>{let n=Ro(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new qh(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},Yh=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=new jh;await e.initialize(n,r),i(`webgpu`,[e,t=>e.alloc(Number(t)),t=>e.free(t),(n,r,i,a=!1)=>{if(a)Qo(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(r)}, size=${Number(i)}`),e.memcpy(Number(n),Number(r));else{Qo(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(r)}, size=${Number(i)}`);let a=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(i));e.upload(Number(r),a)}},async(n,r,i)=>{Qo(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${r}, size=${i}`),await e.download(Number(n),()=>t.HEAPU8.subarray(Number(r)>>>0,Number(r+i)>>>0))},(n,r,i)=>e.createKernel(n,Number(r),i,t.UTF8ToString(t._JsepGetNodeName(Number(r)))),t=>e.releaseKernel(t),(n,r,i,a)=>{Qo(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${i}, kernel=${n}, contextDataOffset=${r}`);let o=new Jh(t,e,Number(r));return e.computeKernel(Number(n),o,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new Wh(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg=L(()=>{ko(),Fo(),R(),Co(),Do(),Go(),Zh=(e,t)=>{So()._OrtInit(e,t)!==0&&Eo(`Can't initialize onnxruntime.`)},Qh=async e=>{Zh(e.wasm.numThreads,Bo(e.logLevel))},$h=async(e,t)=>{{let n=(Xh(),Wi(Kh)).init;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);let t=e.webgpu.adapter;if(t){if(typeof t.limits!=`object`||typeof t.features!=`object`||typeof t.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!==`low-power`&&n!==`high-performance`)throw Error(`Invalid powerPreference setting: "${n}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}await n(`webgpu`,So(),e,t)}if(t===`webnn`){if(typeof navigator>`u`||!navigator.ml)throw Error(`WebNN is not supported in current environment`);await n(`webnn`,So(),e)}}},eg=new Map,tg=e=>{let t=So(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&Eo(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},ng=e=>{let t=So(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},rg=async(e,t)=>{let n,r,i=So();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=ng(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=Po(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Wo(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.jsepCreateMLContext(r):await i.jsepCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.jsepCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),a===0&&Eo(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=tg(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[];for(let t=0;t<e;t++){let e=i._OrtGetInputName(a,t);e===0&&Eo(`Can't get an input name.`),l.push(e),p.push(i.UTF8ToString(e))}for(let e=0;e<d;e++){let n=i._OrtGetOutputName(a,e);n===0&&Eo(`Can't get an output name.`),u.push(n);let r=i.UTF8ToString(n);m.push(r);{if(f&&t?.preferredOutputLocation===void 0){h.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[r]??`cpu`;if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);h.push(e)}}let g=null;return h.some(e=>e===`gpu-buffer`||e===`ml-tensor`)&&(s=i._OrtCreateBinding(a),s===0&&Eo(`Can't create IO binding.`),g={handle:s,outputPreferredLocations:h,outputPreferredLocationsEncoded:h.map(e=>Uo(e))}),eg.set(a,[a,l,u,g,f,!1]),[a,p,m]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&Eo(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&Eo(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Eo(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},ig=e=>{let t=So(),n=eg.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Eo(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&Eo(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&Eo(`Can't release session.`),eg.delete(e)},ag=async(e,t,n,r,i,a=!1)=>{if(!e){t.push(0);return}let o=So(),s=o.PTR_SIZE,c=e[0],l=e[1],u=e[3],d=u,f,p;if(c===`string`&&(u===`gpu-buffer`||u===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(a&&u!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(u===`gpu-buffer`){let t=e[2].gpuBuffer;p=Ro(Io(c),l);let n=o.jsepRegisterBuffer;if(!n)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);f=n(r,i,t,p)}else if(u===`ml-tensor`){let t=e[2].mlTensor;p=Ro(Io(c),l);let n=o.jsepRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);f=n(r,t,Io(c),l)}else{let t=e[2];if(Array.isArray(t)){p=s*t.length,f=o._malloc(p),n.push(f);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);o.setValue(f+e*s,wo(t[e],n),`*`)}}else{let e=o.jsepIsGraphInput;if(c!==`string`&&e){let a=o._OrtGetInputName(r,i);if(e(r,o.UTF8ToString(a))){let e=Io(c);p=Ro(e,l),d=`ml-tensor`;let n=o.jsepCreateTemporaryTensor,i=o.jsepUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,l);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f=a}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}}let m=o.stackSave(),h=o.stackAlloc(4*l.length);try{l.forEach((e,t)=>o.setValue(h+t*s,e,s===4?`i32`:`i64`));let e=o._OrtCreateTensor(Io(c),f,p,h,l.length,Uo(d));e===0&&Eo(`Can't create tensor for input/output. session=${r}, index=${i}.`),t.push(e)}finally{o.stackRestore(m)}},og=async(e,t,n,r,i,a)=>{let o=So(),s=o.PTR_SIZE,c=eg.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=o.stackSave(),ee=o.stackAlloc(h*s),te=o.stackAlloc(h*s),ne=o.stackAlloc(g*s),re=o.stackAlloc(g*s);try{[_,v]=Oo(a);for(let r=0;r<h;r++)await ag(n[r],y,x,e,t[r],p);for(let t=0;t<g;t++)await ag(i[t],b,x,e,h+r[t],p);for(let e=0;e<h;e++)o.setValue(ee+e*s,y[e],`*`),o.setValue(te+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(ne+e*s,b[e],`*`),o.setValue(re+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&Eo(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?o._OrtBindOutput(n,d[c],b[t],0)!==0&&Eo(`Can't bind pre-allocated output[${t}] for session=${e}.`):o._OrtBindOutput(n,d[c],0,s[c])!==0&&Eo(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}eg.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,ne,_):await o._OrtRun(l,te,ee,h,re,g,ne,_),c!==0&&Eo(`failed to call OrtRun().`);let S=[];for(let t=0;t<g;t++){let n=Number(o.getValue(ne+t*s,`*`));if(n===b[t]){S.push(i[t]);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),u=!1,d,p=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&Eo(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));p=o.getValue(c+s,`*`);let l=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(l+e*s,i)));o._OrtFree(l)!==0&&Eo(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);d=Lo(a);let _=f?.outputPreferredLocations[r[t]];if(d===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(p+t*s,`*`),r=o.getValue(p+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}S.push([d,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(p),r=Ro(a,g);if(r===void 0||!Vo(d))throw Error(`Unsupported data type: ${d}`);u=!0,S.push([d,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,d),dispose:()=>{o._OrtReleaseTensor(n)!==0&&Eo(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Ro(a,g)===void 0||!Ho(d))throw Error(`Unsupported data type: ${d}`);let r=await t(e,p,a,h,!1);u=!0,S.push([d,h,{mlTensor:r,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(n)}},`ml-tensor`])}else{let e=new(zo(d))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(p,p+e.byteLength)),S.push([d,h,e,`cpu`])}}finally{o.stackRestore(a),d===`string`&&p&&o._free(p),u||o._OrtReleaseTensor(n),o.jsepOnRunEnd?.(l)}}return f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&Eo(`Can't clear bound outputs.`),eg.set(e,[l,u,d,f,p,!1])),S}finally{o.stackRestore(S),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},sg=e=>{let t=So(),n=eg.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&Eo(`Can't get an profile file name.`),t._OrtFree(i)},cg=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og=L(()=>{Va(),lg(),Co(),mo(),ug=()=>!!ra.wasm.proxy&&typeof document<`u`,fg=!1,pg=!1,mg=!1,_g=new Map,vg=(e,t)=>{let n=_g.get(e);n?n.push(t):_g.set(e,[t])},yg=()=>{if(fg||!pg||mg||!dg)throw Error(`worker not ready`)},bg=e=>{switch(e.data.type){case`init-wasm`:fg=!1,e.data.err?(mg=!0,gg[1](e.data.err)):(pg=!0,gg[0]()),hg&&=(URL.revokeObjectURL(hg),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=_g.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},xg=async()=>{if(!pg){if(fg)throw Error(`multiple calls to 'initWasm()' detected.`);if(mg)throw Error(`previous call to 'initWasm()' failed.`);if(fg=!0,ug())return new Promise((e,t)=>{dg?.terminate(),uo().then(([n,r])=>{try{dg=r,dg.onerror=e=>t(e),dg.onmessage=bg,gg=[e,t];let i={type:`init-wasm`,in:ra};!i.in.wasm.wasmPaths&&(n||import.meta.url?.startsWith(`file:`))&&(i.in.wasm.wasmPaths={wasm:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href}),dg.postMessage(i),hg=n}catch(e){t(e)}},t)});try{await xo(ra.wasm),await Qh(ra),pg=!0}catch(e){throw mg=!0,e}finally{fg=!1}}},Sg=async e=>{if(ug())return yg(),new Promise((t,n)=>{vg(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:ra}};dg.postMessage(r)});await $h(ra,e)},Cg=async e=>ug()?(yg(),new Promise((t,n)=>{vg(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};dg.postMessage(r,[e.buffer])})):ng(e),wg=async(e,t)=>{if(ug()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return yg(),new Promise((n,r)=>{vg(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),dg.postMessage(i,a)})}return rg(e,t)},Tg=async e=>{if(ug())return yg(),new Promise((t,n)=>{vg(`release`,[t,n]);let r={type:`release`,in:e};dg.postMessage(r)});ig(e)},Eg=async(e,t,n,r,i,a)=>{if(ug()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return yg(),new Promise((i,o)=>{vg(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};dg.postMessage(c,cg(s))})}return og(e,t,n,r,i,a)},Dg=async e=>{if(ug())return yg(),new Promise((t,n)=>{vg(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};dg.postMessage(r)});sg(e)}}),kg,Ag,jg,Mg=L(()=>{Va(),Og(),R(),Ha(),Go(),kg=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},Ag=e=>{switch(e[3]){case`cpu`:return new Ta(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Vo(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ta.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Ho(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ta.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},jg=class{async fetchModelAndCopyToWasmMemory(e){return Cg(await Wo(e))}async loadModel(e,t){ka();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await wg(n,t),Aa()}async dispose(){return Tg(this.sessionId)}async run(e,t,n){ka();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>kg(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?kg(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await Eg(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??Ag(l[e]);return Aa(),u}startProfiling(){}endProfiling(){Dg(this.sessionId)}}}),Ng={};Hi(Ng,{OnnxruntimeWebAssemblyBackend:()=>Fg,initializeFlags:()=>Pg,wasmBackend:()=>Ig});var Pg,Fg,Ig,Lg=L(()=>{Va(),Og(),Mg(),Pg=()=>{if((typeof ra.wasm.initTimeout!=`number`||ra.wasm.initTimeout<0)&&(ra.wasm.initTimeout=0),ra.wasm.simd===!1&&console.warn(`Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.`),typeof ra.wasm.proxy!=`boolean`&&(ra.wasm.proxy=!1),typeof ra.wasm.trace!=`boolean`&&(ra.wasm.trace=!1),typeof ra.wasm.numThreads!=`number`||!Number.isInteger(ra.wasm.numThreads)||ra.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)ra.wasm.numThreads=1;else{let e=typeof navigator>`u`?Vi(`node:os`).cpus().length:navigator.hardwareConcurrency;ra.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Fg=class{async init(e){Pg(),await xg(),await Sg(e)}async createInferenceSessionHandler(e,t){let n=new jg;return await n.loadModel(e,t),Promise.resolve(n)}},Ig=new Fg});Va(),Va(),Va();var Rg=`1.21.0`,zg=Ba;{let e=(Lg(),Wi(Ng)).wasmBackend;qi(`webgpu`,e,5),qi(`webnn`,e,5),qi(`cpu`,e,10),qi(`wasm`,e,10)}Object.defineProperty(ra.versions,"web",{value:Rg,enumerable:!0});var Bg=e({InferenceSession:()=>R_,TRACE:()=>j_,TRACE_FUNC_BEGIN:()=>N_,TRACE_FUNC_END:()=>P_,Tensor:()=>k_,default:()=>BO,env:()=>s_,registerBackend:()=>Zg}),Vg=Object.defineProperty,Hg=Object.getOwnPropertyDescriptor,Ug=Object.getOwnPropertyNames,Wg=Object.prototype.hasOwnProperty,Gg=(e=>typeof t<`u`?t:typeof Proxy<`u`?new Proxy(e,{get:(e,n)=>(typeof t<`u`?t:e)[n]}):e)(function(e){if(typeof t<`u`)return t.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),G=(e,t)=>()=>(e&&(t=e(e=0)),t),Kg=(e,t)=>{for(var n in t)Vg(e,n,{get:t[n],enumerable:!0})},qg=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Ug(t))!Wg.call(e,i)&&i!==n&&Vg(e,i,{get:()=>t[i],enumerable:!(r=Hg(t,i))||r.enumerable});return e},Jg=e=>qg(Vg({},`__esModule`,{value:!0}),e),Yg,Xg,Zg,Qg,$g,e_=G(()=>{Yg=new Map,Xg=[],Zg=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Yg.get(e);if(r===void 0)Yg.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Xg.indexOf(e);t!==-1&&Xg.splice(t,1);for(let t=0;t<Xg.length;t++)if(Yg.get(Xg[t]).priority<=n){Xg.splice(t,0,e);return}Xg.push(e)}return}throw TypeError(`not a valid backend`)},Qg=async e=>{let t=Yg.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},$g=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Xg:n,i,a=[],o=new Set;for(let e of r){let t=await Qg(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),t_=G(()=>{e_()}),n_,r_=G(()=>{n_=`1.21.0`}),i_,a_,o_=G(()=>{r_(),i_=`warning`,a_={wasm:{},webgl:{},webgpu:{},versions:{common:n_},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);i_=e}},get logLevel(){return i_}},Object.defineProperty(a_,"logLevel",{enumerable:!0})}),s_,c_=G(()=>{o_(),s_=a_}),l_,u_,d_=G(()=>{l_=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},u_=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),f_,p_,m_,h_,g_,__,v_=G(()=>{O_(),f_=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new D_(`float32`,u,[1,4,n,r]):new D_(`float32`,u,[1,3,n,r])},p_=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,f_(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(f_(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return f_(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},m_=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new D_({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},h_=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new D_({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},g_=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new D_({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},__=(e,t,n)=>new D_({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),y_,b_,x_,S_,C_=G(()=>{y_=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),b_=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),x_=!1,S_=()=>{if(!x_){x_=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(y_.set(`int64`,BigInt64Array),b_.set(BigInt64Array,`int64`)),t&&(y_.set(`uint64`,BigUint64Array),b_.set(BigUint64Array,`uint64`)),r?(y_.set(`float16`,n),b_.set(n,`float16`)):y_.set(`float16`,Uint16Array)}}}),w_,T_,E_=G(()=>{O_(),w_=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},T_=(e,t)=>{switch(e.location){case`cpu`:return new D_(e.type,e.data,t);case`cpu-pinned`:return new D_({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new D_({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new D_({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new D_({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),D_,O_=G(()=>{d_(),v_(),C_(),E_(),D_=class{constructor(e,t,n){S_();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=y_.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=y_.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=b_.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=w_(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return p_(e,t)}static fromTexture(e,t){return m_(e,t)}static fromGpuBuffer(e,t){return h_(e,t)}static fromMLTensor(e,t){return g_(e,t)}static fromPinnedBuffer(e,t,n){return __(e,t,n)}toDataURL(e){return l_(this,e)}toImageData(e){return u_(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return T_(this,e)}}}),k_,A_=G(()=>{O_(),k_=D_}),j_,M_,N_,P_,F_=G(()=>{o_(),j_=(e,t)=>{(typeof a_.trace>`u`?!a_.wasm.trace:!a_.trace)||console.timeStamp(`${e}::ORT::${t}`)},M_=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),j_(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},N_=e=>{(typeof a_.trace>`u`?!a_.wasm.trace:!a_.trace)||M_(`BEGIN`,e)},P_=e=>{(typeof a_.trace>`u`?!a_.wasm.trace:!a_.trace)||M_(`END`,e)}}),I_,L_=G(()=>{e_(),A_(),F_(),I_=class e{constructor(e){this.handler=e}async run(e,t,n){N_();let r={},i={};if(typeof e!=`object`||!e||e instanceof k_||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof k_)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof k_)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];s[e]=t instanceof k_?t:new k_(t.type,t.data,t.dims)}return P_(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){N_();let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await $g(o),l=await s.createInferenceSessionHandler(a,c);return P_(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),R_,z_=G(()=>{L_(),R_=I_}),B_=G(()=>{}),V_=G(()=>{}),H_=G(()=>{}),U_=G(()=>{}),W_={};Kg(W_,{InferenceSession:()=>R_,TRACE:()=>j_,TRACE_FUNC_BEGIN:()=>N_,TRACE_FUNC_END:()=>P_,Tensor:()=>k_,env:()=>s_,registerBackend:()=>Zg});var G_=G(()=>{t_(),c_(),z_(),A_(),B_(),V_(),F_(),H_(),U_()}),K_=G(()=>{}),q_={};Kg(q_,{default:()=>X_});var J_,Y_,X_,Z_=G(()=>{uO(),Ev(),_v(),J_=`ort-wasm-proxy-worker`,Y_=globalThis.self?.name===J_,Y_&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:wv(n.wasm).then(()=>{$D(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;eO(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=rO(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;iO(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:aO(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;sO(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},lO([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:cO(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),X_=Y_?null:e=>new Worker(e??ov,{type:`module`,name:J_})}),Q_={};Kg(Q_,{default:()=>tv});var $_,ev,tv,nv,rv=G(()=>{ev=($_=import.meta.url,async function(e={}){var t,n,r=e,i=new Promise((e,r)=>{t=e,n=r}),a=typeof window==`object`,o=typeof WorkerGlobalScope<`u`,s=o&&self.name?.startsWith(`em-pthread`);r.mountExternalData=(e,t)=>{e.startsWith(`./`)&&(e=e.substring(2)),(r.Bd||=new Map).set(e,t)},r.unmountExternalData=()=>{delete r.Bd};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=()=>{let e=(e,t,n)=>(...r)=>{let i=A,a=t?.();r=e(...r);let o=t?.();return a!==o&&(e=o,n(a),t=n=null),A==i?r:new Promise((e,t)=>{Tn={resolve:e,reject:t}})},t=e=>async(...t)=>{try{if(r.Cd)throw Error(`Session already started`);let n=r.Cd={be:t[0],errors:[]},i=await e(...t);if(r.Cd!==n)throw Error(`Session mismatch`);r.Dd?.flush();let a=n.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{r.Cd=null}};r._OrtCreateSession=e(r._OrtCreateSession,()=>r._OrtCreateSession,e=>r._OrtCreateSession=e),r._OrtRun=t(e(r._OrtRun,()=>r._OrtRun,e=>r._OrtRun=e)),r._OrtRunWithBinding=t(e(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,e=>r._OrtRunWithBinding=e)),r._OrtBindInput=e(r._OrtBindInput,()=>r._OrtBindInput,e=>r._OrtBindInput=e),l=void 0};r.jsepInit=(e,t)=>{if(l?.(),e===`webgpu`){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=t;let e=r.Dd;r.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),r.jsepGetBuffer=t=>e.getBuffer(t),r.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),r.jsepOnCreateSession=t=>{e.onCreateSession(t)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepOnRunStart=t=>e.onRunStart(t),r.$d=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=t,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let e=r.Dd;r.jsepOnRunStart=t=>e.onRunStart(t),r.jsepOnRunEnd=e.onRunEnd.bind(e),r.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),r.jsepRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),r.jsepCreateMLContext=t=>e.createMLContext(t),r.jsepRegisterMLConstant=(t,n,i,a,o)=>e.registerMLConstant(t,n,i,a,o,r.Bd),r.jsepRegisterGraphInput=e.registerGraphInput.bind(e),r.jsepIsGraphInput=e.isGraphInput.bind(e),r.jsepCreateTemporaryTensor=e.createTemporaryTensor.bind(e)}};var u,d,f=Object.assign({},r),p=(e,t)=>{throw t},m=``;(a||o)&&(o?m=self.location.href:typeof document<`u`&&document.currentScript&&(m=document.currentScript.src),$_&&(m=$_),m=m.startsWith(`blob:`)?``:m.slice(0,m.replace(/[?#].*/,``).lastIndexOf(`/`)+1),o&&(d=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),u=async e=>{if(ue(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var h=console.log.bind(console),g=console.error.bind(console),_=h,v=g;Object.assign(r,f),f=null;var y,b,x,S,ee,te,ne,re,ie,ae,C,oe,se,ce=r.wasmBinary,le=!1,ue=e=>e.startsWith(`file://`);function de(){return y.buffer!=S.buffer&&ye(),S}function fe(){return y.buffer!=S.buffer&&ye(),ee}function pe(){return y.buffer!=S.buffer&&ye(),te}function me(){return y.buffer!=S.buffer&&ye(),ne}function w(){return y.buffer!=S.buffer&&ye(),re}function T(){return y.buffer!=S.buffer&&ye(),ie}function he(){return y.buffer!=S.buffer&&ye(),ae}function ge(){return y.buffer!=S.buffer&&ye(),se}if(s){let e=function(t){try{var n=t.data,i=n.yd;if(i===`load`){let t=[];self.onmessage=e=>t.push(e),self.startWorker=()=>{postMessage({yd:`loaded`});for(let n of t)e(n);self.onmessage=e};for(let e of n.Od)r[e]&&!r[e].proxy||(r[e]=(...t)=>{postMessage({yd:`callHandler`,Nd:e,args:t})},e==`print`&&(_=r[e]),e==`printErr`&&(v=r[e]));y=n.he,ye(),_e(n.ie)}else if(i===`run`){Ke(n.xd),Gr(n.xd,0,0,1,0,0),Ue(),ln(n.xd),ve||=(Vr(),!0);try{qe(n.de,n.Fd)}catch(e){if(e!=`unwind`)throw e}}else n.target!==`setimmediate`&&(i===`checkMailbox`?ve&&D():i&&(v(`worker: received unknown command ${i}`),v(n)))}catch(e){throw Kr(),e}};var _e,ve=!1;v=function(...e){e=e.join(` `),console.error(e)},self.alert=function(...e){postMessage({yd:`alert`,text:e.join(` `),fe:Hr()})},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}function ye(){var e=y.buffer;r.HEAP8=S=new Int8Array(e),r.HEAP16=te=new Int16Array(e),r.HEAPU8=ee=new Uint8Array(e),r.HEAPU16=ne=new Uint16Array(e),r.HEAP32=re=new Int32Array(e),r.HEAPU32=ie=new Uint32Array(e),r.HEAPF32=ae=new Float32Array(e),r.HEAPF64=se=new Float64Array(e),r.HEAP64=C=new BigInt64Array(e),r.HEAPU64=oe=new BigUint64Array(e)}function be(){s?startWorker(r):M.Bb()}s||(y=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var xe,Se=0,Ce=null;function we(){if(--Se==0&&Ce){var e=Ce;Ce=null,e()}}function Te(e){throw v(e=`Aborted(`+e+`)`),le=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),n(e),e}function Ee(){return{a:{Ta:ke,Va:Oe,W:Ye,la:Ze,b:tt,u:nt,R:rt,Za:it,d:at,pb:st,g:$e,T:dt,Ga:ft,lb:ht,nb:gt,Ha:_t,Ea:vt,wb:yt,Da:bt,pa:xt,mb:St,jb:Ct,Fa:wt,kb:Tt,Ma:Ot,za:Ft,eb:Lt,cb:Gt,ya:qt,V:Jt,N:Yt,db:Xt,ma:an,fb:on,zb:sn,hb:un,qb:dn,ab:fn,Aa:pn,yb:ln,Ja:mn,S:_n,Wa:vn,$:j,G:kn,E:Mn,m:Bt,H:Pn,B:Rn,X:zn,J:Bn,v:Vn,O:Hn,D:Un,t:Wn,A:Gn,z:Kn,w:qn,r:Jn,tb:Yn,ub:$n,vb:er,rb:tr,sb:nr,bb:ar,Oa:or,La:lr,y:fr,ja:pr,Ba:mr,Ka:sr,qa:hr,Ia:gr,ib:_r,U:ir,fa:vr,Sa:yr,gb:br,Qa:wr,Pa:Tr,Ab:kr,Ca:Ar,ob:Le,aa:jr,oa:Mr,xb:Nr,na:Fr,$a:xa,ia:Pa,sa:za,ga:ya,da:Da,ua:La,p:_a,e:ta,c:$i,ea:Ta,f:na,n:ia,k:pa,Y:oa,ka:ma,j:va,wa,Ra:Ha,ca:Ma,Ua:Va,P:Ea,K:ca,_:ja,Q:ba,Z:Fa,x:sa,l:ea,va:Aa,i:Qi,h:aa,ra:Ba,ta:Ra,o:ra,q:la,s:da,I:fa,C:ga,L:ha,xa:Ca,_a:Sa,F:Na,Ya:Oa,ba:Ia,M:ua,Xa:ka,ha:Ir,a:y,Na:Fe}}}var De={1319426:()=>typeof wasmOffsetConverter<`u`,1319483:(e,t,n,i,a)=>{if(r===void 0||!r.Bd)return 1;if((e=ut(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=r.Bd.get(e)))return 2;if(t=Number(t>>>0),n=Number(n>>>0),i=Number(i>>>0),t+n>e.byteLength)return 3;try{let o=e.subarray(t,t+n);switch(a){case 0:fe().set(o,i>>>0);break;case 1:r.$d(i,o);break;default:return 4}return 0}catch{return 4}},1320198:(e,t,n)=>{r.Jd(e,fe().subarray(t>>>0,t+n>>>0))},1320261:()=>r.Yd(),1320302:e=>{r.Id(e)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:e=>r.Rd(e),1320456:e=>r.Vd(e),1320488:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n),!0)},1320551:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n))},1320608:e=>{r.hc(`Abs`,e,void 0)},1320659:e=>{r.hc(`Neg`,e,void 0)},1320710:e=>{r.hc(`Floor`,e,void 0)},1320763:e=>{r.hc(`Ceil`,e,void 0)},1320815:e=>{r.hc(`Reciprocal`,e,void 0)},1320873:e=>{r.hc(`Sqrt`,e,void 0)},1320925:e=>{r.hc(`Exp`,e,void 0)},1320976:e=>{r.hc(`Erf`,e,void 0)},1321027:e=>{r.hc(`Sigmoid`,e,void 0)},1321082:(e,t,n)=>{r.hc(`HardSigmoid`,e,{alpha:t,beta:n})},1321161:e=>{r.hc(`Log`,e,void 0)},1321212:e=>{r.hc(`Sin`,e,void 0)},1321263:e=>{r.hc(`Cos`,e,void 0)},1321314:e=>{r.hc(`Tan`,e,void 0)},1321365:e=>{r.hc(`Asin`,e,void 0)},1321417:e=>{r.hc(`Acos`,e,void 0)},1321469:e=>{r.hc(`Atan`,e,void 0)},1321521:e=>{r.hc(`Sinh`,e,void 0)},1321573:e=>{r.hc(`Cosh`,e,void 0)},1321625:e=>{r.hc(`Asinh`,e,void 0)},1321678:e=>{r.hc(`Acosh`,e,void 0)},1321731:e=>{r.hc(`Atanh`,e,void 0)},1321784:e=>{r.hc(`Tanh`,e,void 0)},1321836:e=>{r.hc(`Not`,e,void 0)},1321887:(e,t,n)=>{r.hc(`Clip`,e,{min:t,max:n})},1321956:e=>{r.hc(`Clip`,e,void 0)},1322008:(e,t)=>{r.hc(`Elu`,e,{alpha:t})},1322066:e=>{r.hc(`Gelu`,e,void 0)},1322118:e=>{r.hc(`Relu`,e,void 0)},1322170:(e,t)=>{r.hc(`LeakyRelu`,e,{alpha:t})},1322234:(e,t)=>{r.hc(`ThresholdedRelu`,e,{alpha:t})},1322304:(e,t)=>{r.hc(`Cast`,e,{to:t})},1322362:e=>{r.hc(`Add`,e,void 0)},1322413:e=>{r.hc(`Sub`,e,void 0)},1322464:e=>{r.hc(`Mul`,e,void 0)},1322515:e=>{r.hc(`Div`,e,void 0)},1322566:e=>{r.hc(`Pow`,e,void 0)},1322617:e=>{r.hc(`Equal`,e,void 0)},1322670:e=>{r.hc(`Greater`,e,void 0)},1322725:e=>{r.hc(`GreaterOrEqual`,e,void 0)},1322787:e=>{r.hc(`Less`,e,void 0)},1322839:e=>{r.hc(`LessOrEqual`,e,void 0)},1322898:(e,t,n,i,a)=>{r.hc(`ReduceMean`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323073:(e,t,n,i,a)=>{r.hc(`ReduceMax`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323247:(e,t,n,i,a)=>{r.hc(`ReduceMin`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323421:(e,t,n,i,a)=>{r.hc(`ReduceProd`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323596:(e,t,n,i,a)=>{r.hc(`ReduceSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323770:(e,t,n,i,a)=>{r.hc(`ReduceL1`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323943:(e,t,n,i,a)=>{r.hc(`ReduceL2`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324116:(e,t,n,i,a)=>{r.hc(`ReduceLogSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324293:(e,t,n,i,a)=>{r.hc(`ReduceSumSquare`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324473:(e,t,n,i,a)=>{r.hc(`ReduceLogSumExp`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324653:e=>{r.hc(`Where`,e,void 0)},1324706:(e,t,n)=>{r.hc(`Transpose`,e,{perm:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[]})},1324830:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1324963:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1325096:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1325529:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1326190:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1326623:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1327284:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327375:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1327854:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327945:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328424:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1328511:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328986:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1329073:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1329548:(e,t,n,i,a)=>{r.hc(`Gemm`,e,{alpha:t,beta:n,transA:i,transB:a})},1329652:e=>{r.hc(`MatMul`,e,void 0)},1329706:(e,t,n,i)=>{r.hc(`ArgMax`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329814:(e,t,n,i)=>{r.hc(`ArgMin`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329922:(e,t)=>{r.hc(`Softmax`,e,{axis:t})},1329985:(e,t)=>{r.hc(`Concat`,e,{axis:t})},1330045:(e,t,n,i,a)=>{r.hc(`Split`,e,{axis:t,numOutputs:n,splitSizes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1330201:e=>{r.hc(`Expand`,e,void 0)},1330255:(e,t)=>{r.hc(`Gather`,e,{axis:Number(t)})},1330326:(e,t)=>{r.hc(`GatherElements`,e,{axis:Number(t)})},1330405:(e,t)=>{r.hc(`GatherND`,e,{batch_dims:Number(t)})},1330484:(e,t,n,i,a,o,s,c,l,u,d)=>{r.hc(`Resize`,e,{antialias:t,axes:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],coordinateTransformMode:ut(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:ut(l),mode:ut(u),nearestMode:ut(d)})},1330846:(e,t,n,i,a,o,s)=>{r.hc(`Slice`,e,{starts:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[],ends:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1331110:e=>{r.hc(`Tile`,e,void 0)},1331162:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331276:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331390:e=>{r.hc(`Range`,e,void 0)},1331443:(e,t)=>{r.hc(`Einsum`,e,{equation:ut(t)})},1331524:(e,t,n,i,a)=>{r.hc(`Pad`,e,{mode:t,value:n,pads:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1331667:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1331836:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1332005:(e,t,n)=>{r.hc(`CumSum`,e,{exclusive:Number(t),reverse:Number(n)})},1332102:(e,t,n)=>{r.hc(`DequantizeLinear`,e,{axis:t,blockSize:n})},1332192:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332362:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332532:(e,t)=>{r.hc(`ScatterND`,e,{reduction:ut(t)})},1332617:(e,t,n,i,a,o,s,c,l)=>{r.hc(`Attention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from(w().subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1332889:e=>{r.hc(`BiasAdd`,e,void 0)},1332944:e=>{r.hc(`BiasSplitGelu`,e,void 0)},1333005:e=>{r.hc(`FastGelu`,e,void 0)},1333061:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{r.hc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:t,dilations:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!de()[Number(p)>>>0],activation:ut(m),activation_params:h?Array.from(he().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1333645:e=>{r.hc(`Gelu`,e,void 0)},1333697:(e,t,n,i,a,o,s,c,l)=>{r.hc(`GroupQueryAttention`,e,{numHeads:t,kvNumHeads:n,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1333914:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334025:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334136:(e,t,n,i,a,o)=>{r.hc(`MatMulNBits`,e,{k:t,n,accuracyLevel:i,bits:a,blockSize:o})},1334263:(e,t,n,i,a,o)=>{r.hc(`MultiHeadAttention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o})},1334422:(e,t)=>{r.hc(`QuickGelu`,e,{alpha:t})},1334486:(e,t,n,i,a)=>{r.hc(`RotaryEmbedding`,e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:a})},1334625:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334727:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334829:(e,t,n,i)=>{r.hc(`GatherBlockQuantized`,e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},1334950:e=>{r.Wd(e)},1334984:(e,t)=>r.Zd(Number(e),Number(t),r.Cd.be,r.Cd.errors)};function Oe(e,t,n){return Dn(async()=>{await r.Ud(Number(e),Number(t),Number(n))})}function ke(){return typeof wasmOffsetConverter<`u`}class Ae{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var je=e=>{e.terminate(),e.onmessage=()=>{}},Me=[],Ne=e=>{Re.length==0&&(Ge(),We(Re[0]));var t=Re.pop();if(!t)return 6;ze.push(t),Ve[e.xd]=t,t.xd=e.xd;var n={yd:`run`,de:e.ce,Fd:e.Fd,xd:e.xd};return t.postMessage(n,e.Ld),0},Pe=0,E=(e,t,...n)=>{for(var r=2*n.length,i=I(),a=$r(8*r),o=a>>>3,s=0;s<n.length;s++){var c=n[s];typeof c==`bigint`?(C[o+2*s]=1n,C[o+2*s+1]=c):(C[o+2*s]=0n,ge()[o+2*s+1>>>0]=c)}return e=qr(e,0,r,a,t),F(i),e};function Fe(e){if(s)return E(0,1,e);if(x=e,!(0<Pe)){for(var t of ze)je(t);for(t of Re)je(t);Re=[],ze=[],Ve={},le=!0}p(0,new Ae(e))}function Ie(e){if(s)return E(1,0,e);Le(e)}var Le=e=>{if(x=e,s)throw Ie(e),`unwind`;Fe(e)},Re=[],ze=[],Be=[],Ve={},He=e=>{var t=e.xd;delete Ve[t],Re.push(e),ze.splice(ze.indexOf(e),1),e.xd=0,N(t)};function Ue(){Be.forEach(e=>e())}var We=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).yd;if(n.Ed&&n.Ed!=Hr()){var a=Ve[n.Ed];a?a.postMessage(n,n.Ld):v(`Internal error! Worker sent a message "${i}" to target pthread ${n.Ed}, but that thread no longer exists!`)}else i===`checkMailbox`?D():i===`spawnThread`?Ne(n):i===`cleanupThread`?He(Ve[n.ee]):i===`loaded`?(e.loaded=!0,t(e)):i===`alert`?alert(`Thread ${n.fe}: ${n.text}`):n.target===`setimmediate`?e.postMessage(n):i===`callHandler`?r[n.Nd](...n.args):i&&v(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw v(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])r.propertyIsEnumerable(n)&&i.push(n);e.postMessage({yd:`load`,Od:i,he:y,ie:b})});function Ge(){var e=new Worker(import.meta.url.startsWith(`file:`)?new URL(``+new URL(`ort.webgpu.bundle.min-CEayb2S6.mjs`,import.meta.url).href,``+import.meta.url):new URL(import.meta.url),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Re.push(e)}var Ke=e=>{ye();var t=T()[e+52>>>2>>>0];e=T()[e+56>>>2>>>0],Qr(t,t-e),F(t)},qe=(e,t)=>{Pe=0,e=oi(e,t),0<Pe?x=e:Jr(e)},Je=[];function Ye(e){var t=new Qe(e>>>=0);if(de()[t.wd+12>>>0]==0){var n=1;de()[t.wd+12>>>0]=n}return n=0,de()[t.wd+13>>>0]=n,Je.push(t),ti(e),ri(e)}var Xe=0,Ze=()=>{P(0,0);var e=Je.pop();ei(e.Gd),Xe=0};class Qe{constructor(e){this.Gd=e,this.wd=e-24}}function $e(e){throw Xe||=e>>>0,Xe}var et=e=>{var t=Xe;if(!t)return Zr(0),0;var n=new Qe(t);T()[n.wd+16>>>2>>>0]=t;var r=T()[n.wd+4>>>2>>>0];if(!r)return Zr(0),t;for(var i of e){if(i===0||i===r)break;if(ni(i,r,n.wd+16))return Zr(i),t}return Zr(r),t};function tt(){return et([])}function nt(e){return et([e>>>0])}function rt(e,t){return et([e>>>0,t>>>0])}var it=()=>{var e=Je.pop();e||Te(`no exception to throw`);var t=e.Gd;if(de()[e.wd+13>>>0]==0){Je.push(e);var n=1;de()[e.wd+13>>>0]=n,n=0,de()[e.wd+12>>>0]=n}throw Xe=t};function at(e,t,n){var r=new Qe(e>>>=0);throw t>>>=0,n>>>=0,T()[r.wd+16>>>2>>>0]=0,T()[r.wd+4>>>2>>>0]=t,T()[r.wd+8>>>2>>>0]=n,Xe=e}function ot(e,t,n,r){return s?E(2,1,e,t,n,r):st(e,t,n,r)}function st(e,t,n,r){if(e>>>=0,n>>>=0,r>>>=0,c===void 0)return 6;var i=[];return s&&i.length===0?ot(e,t>>>=0,n,r):(e={ce:n,xd:e,Fd:r,Ld:i},s?(e.yd=`spawnThread`,postMessage(e,i),0):Ne(e))}var ct=typeof TextDecoder<`u`?new TextDecoder:void 0,lt=(e,t=0,n=NaN)=>{var r=(t>>>=0)+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&ct)return ct.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},ut=(e,t)=>(e>>>=0)?lt(fe(),e,t):``;function dt(e,t,n){return s?E(3,1,e,t,n):0}function ft(e,t){if(s)return E(4,1,e,t)}var pt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},mt=(e,t,n)=>{var r=fe();if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(t>=n)break;r[t++>>>0]=o}else{if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63}r[t++>>>0]=128|o>>6&63}r[t++>>>0]=128|63&o}}r[t>>>0]=0,e=t-i}else e=0;return e};function ht(e,t){if(s)return E(5,1,e,t)}function gt(e,t,n){if(s)return E(6,1,e,t,n)}function _t(e,t,n){return s?E(7,1,e,t,n):0}function vt(e,t){if(s)return E(8,1,e,t)}function yt(e,t,n){if(s)return E(9,1,e,t,n)}function bt(e,t,n,r){if(s)return E(10,1,e,t,n,r)}function xt(e,t,n,r){if(s)return E(11,1,e,t,n,r)}function St(e,t,n,r){if(s)return E(12,1,e,t,n,r)}function Ct(e){if(s)return E(13,1,e)}function wt(e,t){if(s)return E(14,1,e,t)}function Tt(e,t,n){if(s)return E(15,1,e,t,n)}var Et,Dt,Ot=()=>Te(``),kt=e=>{for(var t=``;fe()[e>>>0];)t+=Et[fe()[e++>>>0]];return t},At={},jt={},Mt={};function Nt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new Dt(`type "${r}" must have a positive integer typeid pointer`);if(jt.hasOwnProperty(e)){if(n.Pd)return;throw new Dt(`Cannot register type '${r}' twice`)}jt[e]=t,delete Mt[e],At.hasOwnProperty(e)&&(t=At[e],delete At[e],t.forEach(e=>e()))}(e,t,n)}var Pt=(e,t,n)=>{switch(t){case 1:return n?e=>de()[e>>>0]:e=>fe()[e>>>0];case 2:return n?e=>pe()[e>>>1>>>0]:e=>me()[e>>>1>>>0];case 4:return n?e=>w()[e>>>2>>>0]:e=>T()[e>>>2>>>0];case 8:return n?e=>C[e>>>3]:e=>oe[e>>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function Ft(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw t=t===null?`null`:(e=typeof t)==`object`||e===`array`||e===`function`?t.toString():``+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},zd:It,readValueFromPointer:Pt(t,n,t.indexOf(`u`)==-1),Ad:null})}var It=8;function Lt(e,t,n,r){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},zd:It,readValueFromPointer:function(e){return this.fromWireType(fe()[e>>>0])},Ad:null})}var Rt=[],zt=[];function Bt(e){9<(e>>>=0)&&--zt[e+1]==0&&(zt[e]=void 0,Rt.push(e))}var Vt=e=>{if(!e)throw new Dt(`Cannot use deleted val. handle = `+e);return zt[e]},Ht=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Rt.pop()||zt.length;return zt[t]=e,zt[t+1]=1,t}};function Ut(e){return this.fromWireType(T()[e>>>2>>>0])}var Wt={name:`emscripten::val`,fromWireType:e=>{var t=Vt(e);return Bt(e),t},toWireType:(e,t)=>Ht(t),zd:It,readValueFromPointer:Ut,Ad:null};function Gt(e){return Nt(e>>>0,Wt)}var Kt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(he()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(ge()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function qt(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,zd:It,readValueFromPointer:Kt(t,n),Ad:null})}function Jt(e,t,n,r,i){if(e>>>=0,n>>>=0,t=kt(t>>>0),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Nt(e,{name:t,fromWireType:i,toWireType:o,zd:It,readValueFromPointer:Pt(t,n,r!==0),Ad:null})}function Yt(e,t,n){function r(e){var t=T()[e>>>2>>>0];return e=T()[e+4>>>2>>>0],new i(de().buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];Nt(e>>>=0,{name:n=kt(n>>>0),fromWireType:r,zd:It,readValueFromPointer:r},{Pd:!0})}function Xt(e,t){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){for(var t,n=T()[e>>>2>>>0],r=e+4,i=r,a=0;a<=n;++a){var o=r+a;a!=n&&fe()[o>>>0]!=0||(i=ut(i,o-i),t===void 0?t=i:(t+=`\0`,t+=i),i=o+1)}return Ur(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new Dt(`Cannot pass non-string to std::string`);var r=n?pt(t):t.length,i=Wr(4+r+1),a=i+4;if(T()[i>>>2>>>0]=r,n)mt(t,a,r+1);else if(n)for(n=0;n<r;++n){var o=t.charCodeAt(n);if(255<o)throw Ur(i),new Dt(`String has UTF-16 code units that do not fit in 8 bits`);fe()[a+n>>>0]=o}else for(n=0;n<r;++n)fe()[a+n>>>0]=t[n];return e!==null&&e.push(Ur,i),i},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}var Zt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,Qt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&me()[n>>>0];)++n;if(32<(n<<=1)-e&&Zt)return Zt.decode(fe().slice(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=pe()[e+2*r>>>1>>>0];if(i==0)break;n+=String.fromCharCode(i)}return n},$t=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);pe()[t>>>1>>>0]=a,t+=2}return pe()[t>>>1>>>0]=0,t-r},en=e=>2*e.length,tn=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=w()[e+4*n>>>2>>>0];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)):r+=String.fromCharCode(i)}return r},nn=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),w()[t>>>2>>>0]=a,(t+=4)+4>n)break}return w()[t>>>2>>>0]=0,t-r},rn=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t};function an(e,t,n){if(e>>>=0,t>>>=0,n=kt(n>>>=0),t===2)var r=Qt,i=$t,a=en,o=e=>me()[e>>>1>>>0];else t===4&&(r=tn,i=nn,a=rn,o=e=>T()[e>>>2>>>0]);Nt(e,{name:n,fromWireType:e=>{for(var n,i=T()[e>>>2>>>0],a=e+4,s=0;s<=i;++s){var c=e+4+s*t;s!=i&&o(c)!=0||(a=r(a,c-a),n===void 0?n=a:(n+=`\0`,n+=a),a=c+t)}return Ur(e),n},toWireType:(e,r)=>{if(typeof r!=`string`)throw new Dt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Wr(4+o+t);return T()[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Ur,s),s},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}function on(e,t){Nt(e>>>=0,{Qd:!0,name:t=kt(t>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function sn(e){Gr(e>>>0,!o,1,!a,131072,!1),Ue()}var cn=e=>{if(!le)try{if(e(),!(0<Pe))try{s?Jr(x):Le(x)}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}};function ln(e){e>>>=0,typeof Atomics.ge==`function`&&(Atomics.ge(w(),e>>>2,e).value.then(D),e+=128,Atomics.store(w(),e>>>2,1))}var D=()=>{var e=Hr();e&&(ln(e),cn(Xr))};function un(e,t){(e>>>=0)==t>>>0?setTimeout(D):s?postMessage({Ed:e,yd:`checkMailbox`}):(e=Ve[e])&&e.postMessage({yd:`checkMailbox`})}var O=[];function dn(e,t,n,r,i){for(t>>>=0,r/=2,O.length=r,n=i>>>0>>>3,i=0;i<r;i++)O[i]=C[n+2*i]?C[n+2*i+1]:ge()[n+2*i+1>>>0];return(t?De[t]:zr[e])(...O)}var fn=()=>{Pe=0};function pn(e){e>>>=0,s?postMessage({yd:`cleanupThread`,ee:e}):He(Ve[e])}function mn(e){}var hn=(e,t)=>{var n=jt[e];if(n===void 0)throw e=Br(e),n=kt(e),Ur(e),new Dt(`${t} has unknown type ${n}`);return n},gn=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(T()[t>>>2>>>0]=Ht(r)),e};function _n(e,t,n){return t>>>=0,n>>>=0,e=Vt(e>>>0),t=hn(t,`emval::as`),gn(t,n,e)}function vn(e,t){return t>>>=0,e=Vt(e>>>0),(t=hn(t,`emval::as`)).toWireType(null,e)}var k=e=>{try{e()}catch(e){Te(e)}},yn=0,A=null,bn=0,xn=[],Sn={},Cn={},wn=0,Tn=null,En=[];function Dn(e){return function(e){if(!le){if(yn===0){var t=!1,n=!1;e((e=0)=>{if(!le&&(bn=e,t=!0,n)){yn=2,k(()=>Xi(A)),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.resume(),e=!1;try{var r=function(){var e=w()[A+8>>>2>>>0];return e=M[Cn[e]],--Pe,e()}()}catch(t){r=t,e=!0}var i=!1;if(!A){var a=Tn;a&&(Tn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(yn=1,A=function(){var e=Wr(65548),t=e+12;T()[e>>>2>>>0]=t,T()[e+4>>>2>>>0]=t+65536,t=xn[0];var n=Sn[t];return n===void 0&&(n=wn++,Sn[t]=n,Cn[n]=t),t=n,w()[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.pause(),k(()=>Ji(A)))}else yn===2?(yn=0,k(Zi),Ur(A),A=null,En.forEach(cn)):Te(`invalid state: ${yn}`);return bn}}(t=>{e().then(t)})}function j(e){return e>>>=0,Dn(async()=>Ht(await Vt(e)))}var On=[];function kn(e,t,n,r){return n>>>=0,r>>>=0,(e=On[e>>>0])(null,t=Vt(t>>>0),n,r)}var An={},jn=e=>{var t=An[e];return t===void 0?kt(e):t};function Mn(e,t,n,r,i){return n>>>=0,r>>>=0,i>>>=0,(e=On[e>>>0])(t=Vt(t>>>0),t[n=jn(n)],r,i)}var Nn=()=>typeof globalThis==`object`?globalThis:Function(`return this`)();function Pn(e){return(e>>>=0)==0?Ht(Nn()):(e=jn(e),Ht(Nn()[e]))}var Fn=e=>{var t=On.length;return On.push(e),t},In=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=hn(T()[t+4*r>>>2>>>0],`parameter `+r);return n},Ln=(e,t)=>Object.defineProperty(t,"name",{value:e});function Rn(e,t,n){var r=(t=In(e,t>>>0)).shift();e--;var i=`return function (obj, func, destructorsRef, args) {
`,a=0,o=[];n===0&&o.push(`obj`);for(var s=[`retType`],c=[r],l=0;l<e;++l)o.push(`arg`+l),s.push(`argType`+l),c.push(t[l]),i+=`  var arg${l} = argType${l}.readValueFromPointer(args${a?`+`+a:``});
`,a+=t[l].zd;return i+=`  var rv = ${n===1?`new func`:`func.call`}(${o.join(`, `)});
`,r.Qd||(s.push(`emval_returnValue`),c.push(gn),i+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s.push(i+`};
`),e=function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=Ln(t.name||`unknownFunctionName`,function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n}(s)(...c),n=`methodCaller<(${t.map(e=>e.name).join(`, `)}) => ${r.name}>`,Fn(Ln(n,e))}function zn(e){return e=jn(e>>>0),Ht(r[e])}function Bn(e,t){return t>>>=0,e=Vt(e>>>0),t=Vt(t),Ht(e[t])}function Vn(e){9<(e>>>=0)&&(zt[e+1]+=1)}function Hn(){return Ht([])}function Un(e){e=Vt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Ht(t)}function Wn(e){return Ht(jn(e>>>0))}function Gn(){return Ht({})}function Kn(e){for(var t=Vt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Bt(e)}function qn(e,t,n){t>>>=0,n>>>=0,e=Vt(e>>>0),t=Vt(t),n=Vt(n),e[t]=n}function Jn(e,t){return t>>>=0,e=(e=hn(e>>>0,`_emval_take_value`)).readValueFromPointer(t),Ht(e)}function Yn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getUTCSeconds(),w()[t+4>>>2>>>0]=e.getUTCMinutes(),w()[t+8>>>2>>>0]=e.getUTCHours(),w()[t+12>>>2>>>0]=e.getUTCDate(),w()[t+16>>>2>>>0]=e.getUTCMonth(),w()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,w()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,w()[t+28>>>2>>>0]=e}var Xn=e=>e%4==0&&(e%100!=0||e%400==0),Zn=[0,31,60,91,121,152,182,213,244,274,305,335],Qn=[0,31,59,90,120,151,181,212,243,273,304,334];function $n(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getSeconds(),w()[t+4>>>2>>>0]=e.getMinutes(),w()[t+8>>>2>>>0]=e.getHours(),w()[t+12>>>2>>>0]=e.getDate(),w()[t+16>>>2>>>0]=e.getMonth(),w()[t+20>>>2>>>0]=e.getFullYear()-1900,w()[t+24>>>2>>>0]=e.getDay();var n=(Xn(e.getFullYear())?Zn:Qn)[e.getMonth()]+e.getDate()-1|0;w()[t+28>>>2>>>0]=n,w()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),w()[t+32>>>2>>>0]=e}function er(e){e>>>=0;var t=new Date(w()[e+20>>>2>>>0]+1900,w()[e+16>>>2>>>0],w()[e+12>>>2>>>0],w()[e+8>>>2>>>0],w()[e+4>>>2>>>0],w()[e>>>2>>>0],0),n=w()[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?w()[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),w()[e+24>>>2>>>0]=t.getDay(),n=(Xn(t.getFullYear())?Zn:Qn)[t.getMonth()]+t.getDate()-1|0,w()[e+28>>>2>>>0]=n,w()[e>>>2>>>0]=t.getSeconds(),w()[e+4>>>2>>>0]=t.getMinutes(),w()[e+8>>>2>>>0]=t.getHours(),w()[e+12>>>2>>>0]=t.getDate(),w()[e+16>>>2>>>0]=t.getMonth(),w()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function tr(e,t,n,r,i,a,o){return s?E(16,1,e,t,n,r,i,a,o):-52}function nr(e,t,n,r,i,a){if(s)return E(17,1,e,t,n,r,i,a)}var rr={},ir=()=>performance.timeOrigin+performance.now();function ar(e,t){return s?E(18,1,e,t):(rr[e]&&(clearTimeout(rr[e].id),delete rr[e]),t&&(rr[e]={id:setTimeout(()=>{delete rr[e],cn(()=>Yr(e,performance.timeOrigin+performance.now()))},t),ke:t}),0)}function or(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);T()[e>>>2>>>0]=60*o,w()[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(mt(e,n,17),mt(t,r,17)):(mt(e,r,17),mt(t,n,17))}var sr=()=>Date.now(),cr=1;function lr(e,t,n){if(!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!cr)return 52;e=performance.timeOrigin+performance.now()}return C[n>>>0>>>3]=BigInt(Math.round(1e6*e)),0}var ur=[],dr=(e,t)=>{ur.length=0;for(var n;n=fe()[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,ur.push(n==112?T()[t>>>2>>>0]:n==106?C[t>>>3]:n==105?w()[t>>>2>>>0]:ge()[t>>>3>>>0]),t+=r?8:4}return ur};function fr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}function pr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}var mr=()=>{};function hr(e,t){return v(ut(e>>>0,t>>>0))}var gr=()=>{throw Pe+=1,`unwind`};function _r(){return 4294901760}var vr=()=>navigator.hardwareConcurrency;function yr(){return Te(`Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER`),0}function br(e){e>>>=0;var t=fe().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(r),ye();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var xr=()=>(Te(`Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER`),0),Sr={},Cr=e=>{e.forEach(e=>{var t=xr();t&&(Sr[t]=e)})};function wr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),Cr(e),Sr.Kd=xr(),Sr.ae=e,Sr.Kd}function Tr(e,t,n){if(e>>>=0,t>>>=0,Sr.Kd==e)var r=Sr.ae;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),Cr(r);for(var i=3;r[i]&&xr()!=e;)++i;for(e=0;e<n&&r[e+i];++e)w()[t+4*e>>>2>>>0]=xr();return e}var Er,Dr={},Or=()=>{if(!Er){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in Dr)Dr[e]===void 0?delete t[e]:t[e]=Dr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Er=n}return Er};function kr(e,t){if(s)return E(19,1,e,t);e>>>=0,t>>>=0;var n=0;return Or().forEach((r,i)=>{var a=t+n;for(i=T()[e+4*i>>>2>>>0]=a,a=0;a<r.length;++a)de()[i++>>>0]=r.charCodeAt(a);de()[i>>>0]=0,n+=r.length+1}),0}function Ar(e,t){if(s)return E(20,1,e,t);e>>>=0,t>>>=0;var n=Or();T()[e>>>2>>>0]=n.length;var r=0;return n.forEach(e=>r+=e.length+1),T()[t>>>2>>>0]=r,0}function jr(e){return s?E(21,1,e):52}function Mr(e,t,n,r){return s?E(22,1,e,t,n,r):52}function Nr(e,t,n,r){return s?E(23,1,e,t,n,r):70}var Pr=[null,[],[]];function Fr(e,t,n,r){if(s)return E(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var i=0,a=0;a<n;a++){var o=T()[t>>>2>>>0],c=T()[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=fe()[o+l>>>0],d=Pr[e];u===0||u===10?((e===1?_:v)(lt(d)),d.length=0):d.push(u)}i+=c}return T()[r>>>2>>>0]=i,0}function Ir(e){return e>>>0}s||function(){for(var e=r.numThreads-1;e--;)Ge();Me.unshift(()=>{Se++,function(e){s?e():Promise.all(Re.map(We)).then(e)}(()=>we())})}();for(var Lr=Array(256),Rr=0;256>Rr;++Rr)Lr[Rr]=String.fromCharCode(Rr);Et=Lr,Dt=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},zt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>zt.length/2-5-Rt.length;var M,zr=[Fe,Ie,ot,dt,ft,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,tr,nr,ar,kr,Ar,jr,Mr,Nr,Fr];(async function(){function e(e,t){return M=e.exports,M=function(){var e=M,t={};for(let[n,r]of Object.entries(e))t[n]=typeof r==`function`?(...e)=>{xn.push(n);try{return r(...e)}finally{le||(xn.pop(),A&&yn===1&&xn.length===0&&(yn=0,Pe+=1,k(Yi),typeof Fibers<`u`&&Fibers.le()))}}:r;return t}(),M=function(){var e=M,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Cb=t(e.Cb),e.fc=n(e.fc),e.ic=t(e.ic),e.vc=t(e.vc),e.wc=n(e.wc),e.Ac=t(e.Ac),e}(),Be.push(M.jc),b=t,we(),M}Se++;var t=Ee();if(r.instantiateWasm)return new Promise(n=>{r.instantiateWasm(t,(t,r)=>{e(t,r),n(t.exports)})});if(s)return new Promise(t=>{_e=n=>{t(e(new WebAssembly.Instance(n,Ee()),n))}});xe??=r.locateFile?r.locateFile?r.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,m):m+`ort-wasm-simd-threaded.jsep.wasm`:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href;try{var i=await async function(e){var t=xe;if(!ce&&typeof WebAssembly.instantiateStreaming==`function`&&!ue(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){v(`wasm streaming compile failed: ${e}`),v(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!ce)try{var t=await u(e);return new Uint8Array(t)}catch{}if(e==xe&&ce)e=new Uint8Array(ce);else{if(!d)throw`both async and sync fetching of the wasm failed`;e=d(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){v(`failed to asynchronously prepare wasm: ${e}`),Te(e)}}(t,e)}(t);return e(i.instance,i.module)}catch(e){return n(e),Promise.reject(e)}})();var Br=e=>(Br=M.Cb)(e),Vr=()=>(Vr=M.Db)();r._OrtInit=(e,t)=>(r._OrtInit=M.Eb)(e,t),r._OrtGetLastError=(e,t)=>(r._OrtGetLastError=M.Fb)(e,t),r._OrtCreateSessionOptions=(e,t,n,i,a,o,s,c,l,u)=>(r._OrtCreateSessionOptions=M.Gb)(e,t,n,i,a,o,s,c,l,u),r._OrtAppendExecutionProvider=(e,t)=>(r._OrtAppendExecutionProvider=M.Hb)(e,t),r._OrtAddFreeDimensionOverride=(e,t,n)=>(r._OrtAddFreeDimensionOverride=M.Ib)(e,t,n),r._OrtAddSessionConfigEntry=(e,t,n)=>(r._OrtAddSessionConfigEntry=M.Jb)(e,t,n),r._OrtReleaseSessionOptions=e=>(r._OrtReleaseSessionOptions=M.Kb)(e),r._OrtCreateSession=(e,t,n)=>(r._OrtCreateSession=M.Lb)(e,t,n),r._OrtReleaseSession=e=>(r._OrtReleaseSession=M.Mb)(e),r._OrtGetInputOutputCount=(e,t,n)=>(r._OrtGetInputOutputCount=M.Nb)(e,t,n),r._OrtGetInputName=(e,t)=>(r._OrtGetInputName=M.Ob)(e,t),r._OrtGetOutputName=(e,t)=>(r._OrtGetOutputName=M.Pb)(e,t),r._OrtFree=e=>(r._OrtFree=M.Qb)(e),r._OrtCreateTensor=(e,t,n,i,a,o)=>(r._OrtCreateTensor=M.Rb)(e,t,n,i,a,o),r._OrtGetTensorData=(e,t,n,i,a)=>(r._OrtGetTensorData=M.Sb)(e,t,n,i,a),r._OrtReleaseTensor=e=>(r._OrtReleaseTensor=M.Tb)(e),r._OrtCreateRunOptions=(e,t,n,i)=>(r._OrtCreateRunOptions=M.Ub)(e,t,n,i),r._OrtAddRunConfigEntry=(e,t,n)=>(r._OrtAddRunConfigEntry=M.Vb)(e,t,n),r._OrtReleaseRunOptions=e=>(r._OrtReleaseRunOptions=M.Wb)(e),r._OrtCreateBinding=e=>(r._OrtCreateBinding=M.Xb)(e),r._OrtBindInput=(e,t,n)=>(r._OrtBindInput=M.Yb)(e,t,n),r._OrtBindOutput=(e,t,n,i)=>(r._OrtBindOutput=M.Zb)(e,t,n,i),r._OrtClearBoundOutputs=e=>(r._OrtClearBoundOutputs=M._b)(e),r._OrtReleaseBinding=e=>(r._OrtReleaseBinding=M.$b)(e),r._OrtRunWithBinding=(e,t,n,i,a)=>(r._OrtRunWithBinding=M.ac)(e,t,n,i,a),r._OrtRun=(e,t,n,i,a,o,s,c)=>(r._OrtRun=M.bc)(e,t,n,i,a,o,s,c),r._OrtEndProfiling=e=>(r._OrtEndProfiling=M.cc)(e),r._JsepOutput=(e,t,n)=>(r._JsepOutput=M.dc)(e,t,n),r._JsepGetNodeName=e=>(r._JsepGetNodeName=M.ec)(e);var Hr=()=>(Hr=M.fc)(),Ur=r._free=e=>(Ur=r._free=M.gc)(e),Wr=r._malloc=e=>(Wr=r._malloc=M.ic)(e),Gr=(e,t,n,r,i,a)=>(Gr=M.kc)(e,t,n,r,i,a),Kr=()=>(Kr=M.lc)(),qr=(e,t,n,r,i)=>(qr=M.mc)(e,t,n,r,i),N=e=>(N=M.nc)(e),Jr=e=>(Jr=M.oc)(e),Yr=(e,t)=>(Yr=M.pc)(e,t),Xr=()=>(Xr=M.qc)(),P=(e,t)=>(P=M.rc)(e,t),Zr=e=>(Zr=M.sc)(e),Qr=(e,t)=>(Qr=M.tc)(e,t),F=e=>(F=M.uc)(e),$r=e=>($r=M.vc)(e),I=()=>(I=M.wc)(),ei=e=>(ei=M.xc)(e),ti=e=>(ti=M.yc)(e),ni=(e,t,n)=>(ni=M.zc)(e,t,n),ri=e=>(ri=M.Ac)(e),ii=r.dynCall_iii=(e,t,n)=>(ii=r.dynCall_iii=M.Bc)(e,t,n),ai=r.dynCall_vi=(e,t)=>(ai=r.dynCall_vi=M.Cc)(e,t),oi=r.dynCall_ii=(e,t)=>(oi=r.dynCall_ii=M.Dc)(e,t),si=r.dynCall_vii=(e,t,n)=>(si=r.dynCall_vii=M.Ec)(e,t,n),ci=r.dynCall_iiii=(e,t,n,i)=>(ci=r.dynCall_iiii=M.Fc)(e,t,n,i),li=r.dynCall_viii=(e,t,n,i)=>(li=r.dynCall_viii=M.Gc)(e,t,n,i),ui=r.dynCall_iiiii=(e,t,n,i,a)=>(ui=r.dynCall_iiiii=M.Hc)(e,t,n,i,a),di=r.dynCall_viiii=(e,t,n,i,a)=>(di=r.dynCall_viiii=M.Ic)(e,t,n,i,a),fi=r.dynCall_viiiiii=(e,t,n,i,a,o,s)=>(fi=r.dynCall_viiiiii=M.Jc)(e,t,n,i,a,o,s),pi=r.dynCall_viiiiiii=(e,t,n,i,a,o,s,c)=>(pi=r.dynCall_viiiiiii=M.Kc)(e,t,n,i,a,o,s,c),mi=r.dynCall_ji=(e,t)=>(mi=r.dynCall_ji=M.Lc)(e,t),hi=r.dynCall_v=e=>(hi=r.dynCall_v=M.Mc)(e),gi=r.dynCall_viiiii=(e,t,n,i,a,o)=>(gi=r.dynCall_viiiii=M.Nc)(e,t,n,i,a,o),_i=r.dynCall_i=e=>(_i=r.dynCall_i=M.Oc)(e),vi=r.dynCall_fii=(e,t,n)=>(vi=r.dynCall_fii=M.Pc)(e,t,n),yi=r.dynCall_viiiiiiii=(e,t,n,i,a,o,s,c,l)=>(yi=r.dynCall_viiiiiiii=M.Qc)(e,t,n,i,a,o,s,c,l),bi=r.dynCall_viiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(bi=r.dynCall_viiiiiiiiii=M.Rc)(e,t,n,i,a,o,s,c,l,u,d),xi=r.dynCall_jiii=(e,t,n,i)=>(xi=r.dynCall_jiii=M.Sc)(e,t,n,i),Si=r.dynCall_dii=(e,t,n)=>(Si=r.dynCall_dii=M.Tc)(e,t,n),Ci=r.dynCall_viiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Ci=r.dynCall_viiiiiiiii=M.Uc)(e,t,n,i,a,o,s,c,l,u),wi=r.dynCall_viiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f)=>(wi=r.dynCall_viiiiiiiiiii=M.Vc)(e,t,n,i,a,o,s,c,l,u,d,f),Ti=r.dynCall_iiiiii=(e,t,n,i,a,o)=>(Ti=r.dynCall_iiiiii=M.Wc)(e,t,n,i,a,o),Ei=r.dynCall_iij=(e,t,n)=>(Ei=r.dynCall_iij=M.Xc)(e,t,n),Di=r.dynCall_iiiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Di=r.dynCall_iiiiiiiiii=M.Yc)(e,t,n,i,a,o,s,c,l,u),Oi=r.dynCall_iiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(Oi=r.dynCall_iiiiiiiiiii=M.Zc)(e,t,n,i,a,o,s,c,l,u,d),ki=r.dynCall_vij=(e,t,n)=>(ki=r.dynCall_vij=M._c)(e,t,n),Ai=r.dynCall_iiif=(e,t,n,i)=>(Ai=r.dynCall_iiif=M.$c)(e,t,n,i),ji=r.dynCall_iiij=(e,t,n,i)=>(ji=r.dynCall_iiij=M.ad)(e,t,n,i),Mi=r.dynCall_fiii=(e,t,n,i)=>(Mi=r.dynCall_fiii=M.bd)(e,t,n,i),Ni=r.dynCall_viiiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>(Ni=r.dynCall_viiiiiiiiiiiii=M.cd)(e,t,n,i,a,o,s,c,l,u,d,f,p,m),Pi=r.dynCall_vjiii=(e,t,n,i,a)=>(Pi=r.dynCall_vjiii=M.dd)(e,t,n,i,a),Fi=r.dynCall_vif=(e,t,n)=>(Fi=r.dynCall_vif=M.ed)(e,t,n),Ii=r.dynCall_iiiiiii=(e,t,n,i,a,o,s)=>(Ii=r.dynCall_iiiiiii=M.fd)(e,t,n,i,a,o,s),Li=r.dynCall_iiiij=(e,t,n,i,a)=>(Li=r.dynCall_iiiij=M.gd)(e,t,n,i,a),Ri=r.dynCall_iiiiiiii=(e,t,n,i,a,o,s,c)=>(Ri=r.dynCall_iiiiiiii=M.hd)(e,t,n,i,a,o,s,c),zi=r.dynCall_viiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p)=>(zi=r.dynCall_viiiiiiiiiiii=M.id)(e,t,n,i,a,o,s,c,l,u,d,f,p),Bi=r.dynCall_diii=(e,t,n,i)=>(Bi=r.dynCall_diii=M.jd)(e,t,n,i),Vi=r.dynCall_jiiii=(e,t,n,i,a)=>(Vi=r.dynCall_jiiii=M.kd)(e,t,n,i,a),L=r.dynCall_viiij=(e,t,n,i,a)=>(L=r.dynCall_viiij=M.ld)(e,t,n,i,a),Hi=r.dynCall_fiiii=(e,t,n,i,a)=>(Hi=r.dynCall_fiiii=M.md)(e,t,n,i,a),Ui=r.dynCall_viiif=(e,t,n,i,a)=>(Ui=r.dynCall_viiif=M.nd)(e,t,n,i,a),Wi=r.dynCall_diiii=(e,t,n,i,a)=>(Wi=r.dynCall_diiii=M.od)(e,t,n,i,a),Gi=r.dynCall_viiid=(e,t,n,i,a)=>(Gi=r.dynCall_viiid=M.pd)(e,t,n,i,a),Ki=r.dynCall_iiiijii=(e,t,n,i,a,o,s)=>(Ki=r.dynCall_iiiijii=M.qd)(e,t,n,i,a,o,s),qi=r.dynCall_iiiiiij=(e,t,n,i,a,o,s)=>(qi=r.dynCall_iiiiiij=M.rd)(e,t,n,i,a,o,s),Ji=e=>(Ji=M.sd)(e),Yi=()=>(Yi=M.td)(),Xi=e=>(Xi=M.ud)(e),Zi=()=>(Zi=M.vd)();function Qi(e,t,n){var r=I();try{si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function $i(e,t,n){var r=I();try{return ii(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ea(e,t){var n=I();try{ai(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function ta(e,t){var n=I();try{return oi(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function na(e,t,n,r){var i=I();try{return ci(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function ra(e,t,n,r,i){var a=I();try{di(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function ia(e,t,n,r,i){var a=I();try{return ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function aa(e,t,n,r){var i=I();try{li(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function oa(e,t,n,r,i,a,o){var s=I();try{return Ii(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function sa(e){var t=I();try{hi(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function ca(e,t,n){var r=I();try{return Ei(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function la(e,t,n,r,i,a){var o=I();try{gi(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ua(e,t,n){var r=I();try{ki(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function da(e,t,n,r,i,a,o){var s=I();try{fi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function fa(e,t,n,r,i,a,o,s){var c=I();try{pi(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function pa(e,t,n,r,i,a){var o=I();try{return Ti(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ma(e,t,n,r,i,a,o,s){var c=I();try{return Ri(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function ha(e,t,n,r,i,a,o,s,c,l){var u=I();try{Ci(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ga(e,t,n,r,i,a,o,s,c){var l=I();try{yi(e,t,n,r,i,a,o,s,c)}catch(e){if(F(l),e!==e+0)throw e;P(1,0)}}function _a(e){var t=I();try{return _i(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function va(e,t,n,r,i,a,o,s,c,l){var u=I();try{return Di(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ya(e,t,n){var r=I();try{return vi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ba(e,t,n,r){var i=I();try{return xi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;return P(1,0),0n}}function xa(e,t,n){var r=I();try{return Si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function Sa(e,t,n,r,i,a,o,s,c,l,u,d){var f=I();try{wi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(F(f),e!==e+0)throw e;P(1,0)}}function Ca(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{bi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function wa(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{return Oi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function Ta(e,t,n,r){var i=I();try{return Ai(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Ea(e,t,n,r){var i=I();try{return ji(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Da(e,t,n,r){var i=I();try{return Mi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Oa(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=I();try{Ni(e,t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if(F(m),e!==e+0)throw e;P(1,0)}}function ka(e,t,n,r,i){var a=I();try{Pi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Aa(e,t,n){var r=I();try{Fi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ja(e,t){var n=I();try{return mi(e,t)}catch(e){if(F(n),e!==e+0)throw e;return P(1,0),0n}}function Ma(e,t,n,r,i){var a=I();try{return Li(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Na(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=I();try{zi(e,t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if(F(p),e!==e+0)throw e;P(1,0)}}function Pa(e,t,n,r){var i=I();try{return Bi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Fa(e,t,n,r,i){var a=I();try{return Vi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;return P(1,0),0n}}function Ia(e,t,n,r,i){var a=I();try{L(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function La(e,t,n,r,i){var a=I();try{return Hi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ra(e,t,n,r,i){var a=I();try{Ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function za(e,t,n,r,i){var a=I();try{return Wi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ba(e,t,n,r,i){var a=I();try{Gi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Va(e,t,n,r,i,a,o){var s=I();try{return Ki(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function Ha(e,t,n,r,i,a,o){var s=I();try{return qi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}return r.stackSave=()=>I(),r.stackRestore=e=>F(e),r.stackAlloc=e=>$r(e),r.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:de()[e>>>0]=t;break;case`i16`:pe()[e>>>1>>>0]=t;break;case`i32`:w()[e>>>2>>>0]=t;break;case`i64`:C[e>>>3]=BigInt(t);break;case`float`:he()[e>>>2>>>0]=t;break;case`double`:ge()[e>>>3>>>0]=t;break;case`*`:T()[e>>>2>>>0]=t;break;default:Te(`invalid type for setValue: ${n}`)}},r.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return de()[e>>>0];case`i16`:return pe()[e>>>1>>>0];case`i32`:return w()[e>>>2>>>0];case`i64`:return C[e>>>3];case`float`:return he()[e>>>2>>>0];case`double`:return ge()[e>>>3>>>0];case`*`:return T()[e>>>2>>>0];default:Te(`invalid type for getValue: ${t}`)}},r.UTF8ToString=ut,r.stringToUTF8=mt,r.lengthBytesUTF8=pt,function e(){if(0<Se)Ce=e;else if(s)t(r),be();else{for(;0<Me.length;)Me.shift()(r);0<Se?Ce=e:(r.calledRun=!0,le||(be(),t(r)))}}(),r.PTR_SIZE=4,i}),tv=ev,nv=globalThis.self?.name?.startsWith(`em-pthread`),nv&&ev()}),iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v=G(()=>{K_(),iv=typeof location>`u`?void 0:location.origin,av=()=>import.meta.url?.startsWith(`file:`)?new URL(new URL(``+new URL(`ort.webgpu.bundle.min-CEayb2S6.mjs`,import.meta.url).href,``+import.meta.url).href,iv).href:import.meta.url,ov=av(),sv=()=>{if(ov&&!ov.startsWith(`blob:`))return ov.substring(0,ov.lastIndexOf(`/`)+1)},cv=(e,t)=>{try{let n=t??ov;return(n?new URL(e,n):new URL(e)).origin===iv}catch{return!1}},lv=(e,t)=>{let n=t??ov;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},uv=(e,t)=>`${t??`./`}${e}`,dv=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},fv=async e=>(await a(async()=>{let{default:t}=await import(e);return{default:t}},[],import.meta.url)).default,pv=(Z_(),Jg(q_)).default,mv=async()=>{if(!ov)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(cv(ov))return[void 0,pv()];let e=await dv(ov);return[e,pv(e)]},hv=(rv(),Jg(Q_)).default,gv=async(e,t,n)=>{if(!e&&!t&&hv&&ov&&cv(ov))return[void 0,hv];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??lv(r,t),a=n&&i&&!cv(i,t),o=a?await dv(i):i??uv(r,t);return[a?o:void 0,await fv(o)]}}}),vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev=G(()=>{_v(),yv=!1,bv=!1,xv=!1,Sv=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Cv=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},wv=async e=>{if(yv)return Promise.resolve();if(bv)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(xv)throw Error(`previous call to 'initializeWebAssembly()' failed.`);bv=!0;let t=e.initTimeout,n=e.numThreads;if(!Cv())throw Error(`WebAssembly SIMD is not supported in the current environment.`);let r=Sv();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await gv(s,a,n>1),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=sv();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{bv=!1,yv=!0,vv=t,e(),d&&URL.revokeObjectURL(d)},e=>{bv=!1,xv=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Tv=()=>{if(yv&&vv)return vv;throw Error(`WebAssembly is not initialized yet.`)}}),Dv,Ov,kv,Av=G(()=>{Ev(),Dv=(e,t)=>{let n=Tv(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Ov=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Ov(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},kv=e=>{let t=Tv(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),jv,Mv=G(()=>{Ev(),Av(),jv=e=>{let t=Tv(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Dv(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&kv(`Can't create run options.`),e?.extra!==void 0&&Ov(e.extra,``,new WeakSet,(e,i)=>{let a=Dv(e,r),o=Dv(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&kv(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Nv,Pv,Fv,Iv,Lv,Rv=G(()=>{Ev(),Av(),Nv=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Pv=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Fv=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Iv=(e,t,n)=>{for(let r of t){let t=typeof r==`string`?r:r.name;switch(t){case`webnn`:if(t=`WEBNN`,typeof r!=`string`){let t=r?.deviceType;if(t){let r=Dv(`deviceType`,n),i=Dv(t,n);Tv()._OrtAddSessionConfigEntry(e,r,i)!==0&&kv(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case`webgpu`:if(t=`JS`,typeof r!=`string`){let t=r;if(t?.preferredLayout){if(t.preferredLayout!==`NCHW`&&t.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let r=Dv(`preferredLayout`,n),i=Dv(t.preferredLayout,n);Tv()._OrtAddSessionConfigEntry(e,r,i)!==0&&kv(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${t}`)}let i=Dv(t,n);Tv()._OrtAppendExecutionProvider(e,i)!==0&&kv(`Can't append execution provider: ${t}.`)}},Lv=e=>{let t=Tv(),n=0,r=[],i=e||{};Fv(i);try{let e=Nv(i.graphOptimizationLevel??`all`),a=Pv(i.executionMode??`sequential`),o=typeof i.logId==`string`?Dv(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log serverity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?Dv(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&kv(`Can't create session options.`),i.executionProviders&&Iv(n,i.executionProviders,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let e=Dv(`enableGraphCapture`,r),a=Dv(i.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,e,a)!==0&&kv(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=Dv(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&kv(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Ov(i.extra,``,new WeakSet,(e,i)=>{let a=Dv(e,r),o=Dv(i,r);t._OrtAddSessionConfigEntry(n,a,o)!==0&&kv(`Can't set a session config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&kv(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),zv,Bv,Vv,Hv,Uv,Wv,Gv,Kv,K=G(()=>{zv=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Bv=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Vv=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Hv=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Uv=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Wv=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Gv=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Kv=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),qv,Jv=G(()=>{K_(),qv=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Yv,Xv,Zv,Qv,$v,ey,ty,ny=G(()=>{K(),Yv=[`V`,`I`,`W`,`E`,`F`],Xv=(e,t)=>{console.log(`[${Yv[e]},${new Date().toISOString()}]${t}`)},$v=(e,t)=>{Zv=e,Qv=t},ey=(e,t)=>{let n=Uv(e);n>=Uv(Zv)&&Xv(n,typeof t==`function`?t():t)},ty=(...e)=>{Qv&&ey(...e)}}),ry,iy=G(()=>{K(),ry=(e,t)=>new(Hv(t))(e)}),ay=G(()=>{}),oy,sy,cy,ly,uy,dy,fy,py,my,hy=G(()=>{ny(),ay(),oy=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),sy=[],cy=e=>Math.ceil(Number(e)/16)*16,ly=e=>{for(let t=0;t<sy.length;t++){let n=sy[t];if(e<=n)return n}return Math.ceil(e/16)*16},uy=1,dy=()=>uy++,fy=async(e,t,n,r)=>{let i=cy(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},py=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of oy)sy.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=cy(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),ty(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=cy(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ty(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=dy();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ty(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ty(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=ly(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:dy(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),ty(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return ty(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await fy(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=oy.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(ty(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},my=(...e)=>new py(...e)}),gy,_y,vy=G(()=>{gy=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},_y=e=>new gy(e)}),yy,by,q,xy,Sy,Cy,wy,J=G(()=>{yy=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},by=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=yy.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},xy=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},Sy=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!by.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},Cy=-34028234663852886e22,wy=34028234663852886e22}),Ty,Ey,Dy,Oy,Y,ky,Ay,jy,My,X,Ny,Z,Q,Py,Fy,Iy,Ly,$=G(()=>{K(),J(),Ty=64,Ey=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},Dy=(e,t=1)=>{let n=Ey(e,t);return typeof n==`string`?n:n[0]},Oy=(e,t=1)=>{let n=Ey(e,t);return typeof n==`string`?n:n[1]},Y=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:q.computeStrides(e)})}),t},ky=e=>e%4==0?4:e%2==0?2:1,Ay=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,jy=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,My=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Ny=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Ey(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${X(g,e,o)};
    let rest${e} = current % ${X(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${X(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),ee=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,te=(e,t)=>o<2?`${e}`:`${X(e,t,o)}`,ne=(e,t,n)=>o<2?`${e}=${n};`:`${X(e,t,o)}=${n};`,re={},ie=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in re)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${te(g,e)} * (${t} % ${te(h,e)})`)}return re[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},ae=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),C=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),oe=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${C(`i2o_${e}(indices)`)};
  }`,se=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${ee(n)});
  }`})(),ce=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?C(`0u`):o===1?C(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},le=t=>o<2?C(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ue=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${ae(`i2o_${e}(indices)`,`value`)}
  }`,de=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${ee(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(re).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(de),t=!0),p.setByIndices&&(e.push(ue),t=!0),p.get&&(e.push(se),t=!0),p.getByIndices&&(e.push(oe),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${q.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:ie,indices:ee,indicesGet:te,indicesSet:ne,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?ae(`0u`,n):o===1?ae(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:ae,setByIndices:(t,n)=>o<2?ae(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ce,getByOffset:C,getByIndices:le,usage:r,name:e,strides:g,shape:h,rank:o}},Z=(e,t,n,r=1)=>Ny(e,t,n,`input`,r),Q=(e,t,n,r=1)=>Ny(e,t,n,`output`,r),Py=(e,t,n)=>Ny(e,t,n,`atomicOutput`,1),Fy=(e,t,n,r=1)=>Ny(e,t,n,`internal`,r),Iy=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Ty){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ly=(e,t)=>new Iy(e,t)}),Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy=G(()=>{K(),J(),vy(),$(),Ry=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},zy=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,By=(e,t)=>q.sortBasedOnPerm(e,zy(e.length,t)),Vy=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Hy=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Uy=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Wy=(e,t)=>{let n=e.dataType,r=e.dims.length,i=zy(r,t),a=By(e.dims,i),o=e.dims,s=a,c=r<2||Uy(i,e.dims),l;if(c)return l=e=>{let t=Z(`input`,n,o,4),r=Q(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Hy(e.dims,i),f=q.areEqual(d,[2,3,1]),p=q.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=Z(`a`,n,o.length),r=Q(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...Y(o,s)]}},getShaderSource:l}):(l=e=>{let t=Z(`a`,n,o.length),a=Q(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Vy(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...Y(o,s)]}},getShaderSource:l})},Gy=(e,t)=>{Ry(e.inputs,t.perm),e.compute(Wy(e.inputs[0],t.perm))},Ky=e=>_y({perm:e.perm})}),Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb,pb,mb,hb=G(()=>{K(),J(),$(),Hb(),qy(),Jy={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},Yy={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Xy={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Zy={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Qy=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},$y=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},eb=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},tb=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},nb=(e,t)=>{let n=[];if(!tb(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},rb=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=q.size(a),l=q.size(o),u=Z(`_A`,n[0].dataType,s),d=Q(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Xy[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${Jy[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Yy[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Zy[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},ib=(e,t,n,r)=>{let i=e.inputs.length===1?n:yb(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=q.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=nb(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Wy(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Qy(s.length,c.dims.length));let[u,d]=$y(c.dims,s),f=u;i.keepDims&&(f=eb(u,o)),e.compute(rb(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},ab=(e,t)=>{ib(e,`ReduceMeanShared`,t,`mean`)},ob=(e,t)=>{ib(e,`ReduceL1Shared`,t,`l1`)},sb=(e,t)=>{ib(e,`ReduceL2Shared`,t,`l2`)},cb=(e,t)=>{ib(e,`ReduceLogSumExpShared`,t,`logSumExp`)},lb=(e,t)=>{ib(e,`ReduceMaxShared`,t,`max`)},ub=(e,t)=>{ib(e,`ReduceMinShared`,t,`min`)},db=(e,t)=>{ib(e,`ReduceProdShared`,t,`prod`)},fb=(e,t)=>{ib(e,`ReduceSumShared`,t,`sum`)},pb=(e,t)=>{ib(e,`ReduceSumSquareShared`,t,`sumSquare`)},mb=(e,t)=>{ib(e,`ReduceLogSumShared`,t,`logSum`)}}),gb,_b,vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb=G(()=>{K(),J(),vy(),$(),hb(),gb=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},_b=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],vb=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=q.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=q.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=Z(`_A`,n[0].dataType,u),s=Q(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Y(l,c)]})}},yb=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),_y({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},bb=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:yb(i,n);e.compute(vb(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?_b:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},xb=(e,t)=>{gb(e.inputs),bb(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},Sb=(e,t)=>{gb(e.inputs),bb(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Cb=(e,t)=>{gb(e.inputs),bb(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},wb=(e,t)=>{gb(e.inputs),bb(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Tb=(e,t)=>{gb(e.inputs),bb(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Eb=(e,t)=>{gb(e.inputs),bb(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Db=(e,t)=>{gb(e.inputs),bb(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Ob=(e,t)=>{gb(e.inputs),bb(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},kb=(e,t)=>{gb(e.inputs),bb(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Ab=(e,t)=>{gb(e.inputs),bb(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},jb=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Mb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eb(e,t):ab(e,t)},Nb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sb(e,t):ob(e,t)},Pb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cb(e,t):sb(e,t)},Fb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wb(e,t):cb(e,t)},Ib=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tb(e,t):lb(e,t)},Lb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Db(e,t):ub(e,t)},Rb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ob(e,t):db(e,t)},zb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kb(e,t):fb(e,t)},Bb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ab(e,t):pb(e,t)},Vb=(e,t)=>{jb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xb(e,t):mb(e,t)}}),Ub,Wb,Gb,Kb,qb=G(()=>{K(),vy(),Hb(),Ub=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Wb=(e,t)=>{Ub(e.inputs),e.compute(vb(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Gb=(e,t)=>{Ub(e.inputs),e.compute(vb(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Kb=e=>_y(e)}),Jb,Yb,Xb,Zb,Qb,$b,ex,tx,nx=G(()=>{K(),J(),ay(),$(),Jb=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Yb=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Xb=(e,t,n,r,i,a,o,s)=>{let c=ky(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=Dy(e.dataType,c),m=Oy(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=Q(`x`,e.dataType,e.dims,c),r=[n],i=o?Z(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?Z(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=Oy(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Yb(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(a/l),y:i,z:t*n},programUniforms:f})}},Zb=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=ky(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&q.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=Z(`q`,t.dataType,t.dims,g),o=[a,Z(`key`,n.dataType,n.dims,g)];if(b){let e=Z(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(Z(`attention_bias`,i.dataType,i.dims));let l=s?Z(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?Z(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=Q(`output`,t.dataType,u),_=[h];d&&_.push(Q(`present_key`,t.dataType,p,g));let v=Oy(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Yb(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Qb=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&q.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=Z(`probs`,t.dataType,t.dims),a=[i,Z(`v`,n.dataType,n.dims)];_&&a.push(Z(`past_value`,r.dataType,r.dims));let c=o?Z(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?Z(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[Q(`output`,t.dataType,m)];return d&&f.push(Q(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Yb(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},$b=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&q.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&q.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute(Zb(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Xb(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&q.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(Qb(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},ex=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=Q(`output_q`,s[0].dataType,n),r=Q(`output_k`,s[0].dataType,n),i=Q(`output_v`,s[0].dataType,n),a=Z(`input`,s[0].dataType,s[0].dims),o=Z(`weight`,s[1].dataType,s[1].dims),c=Z(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},tx=(e,t)=>{let n=Jb(e.inputs,t),[r,i,a]=ex(e,n);return $b(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),rx,ix,ax,ox,sx=G(()=>{G_(),K(),J(),vy(),$(),rx=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},ix=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?ky(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=q.size(a)/o,l=r,u=l?a.length:a,d=Z(`x`,e[0].dataType,e[0].dims,o),f=Z(`scale`,e[1].dataType,e[1].dims,s),p=Z(`bias`,e[2].dataType,e[2].dims,s),m=Z(`inputMean`,e[3].dataType,e[3].dims,s),h=Z(`inputVar`,e[4].dataType,e[4].dims,s),g=Q(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...Y(a)]:[{type:12,data:c}]})}},ax=e=>_y(e),ox=(e,t)=>{let{inputs:n,outputCount:r}=e,i=ax({...t,outputCount:r});if(s_.webgpu.validateInputContent&&rx(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(ix(n,i))}}),cx,lx,ux,dx=G(()=>{J(),$(),cx=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},lx=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,a=Z(`input`,i,t,4),o=Z(`bias`,i,[n],4),s=Z(`residual`,i,t,4),c=Q(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},ux=e=>{cx(e.inputs),e.compute(lx(e.inputs))}}),fx,px,mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS=G(()=>{K(),J(),vy(),$(),fx=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=Z(`inputData`,n,[s],4),u=Q(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},px=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>fx(t,q.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(q.size(t[0].dims)/64/4)},programUniforms:c})}},mx=e=>{e.compute(px(e.inputs[0],`Abs`,`abs`))},hx=e=>{e.compute(px(e.inputs[0],`Acos`,`acos`))},gx=e=>{e.compute(px(e.inputs[0],`Acosh`,`acosh`))},_x=e=>{e.compute(px(e.inputs[0],`Asin`,`asin`))},vx=e=>{e.compute(px(e.inputs[0],`Asinh`,`asinh`))},yx=e=>{e.compute(px(e.inputs[0],`Atan`,`atan`))},bx=e=>{e.compute(px(e.inputs[0],`Atanh`,`atanh`))},xx=e=>_y(e),Sx=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(px(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},Cx=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return _y({min:t,max:n})},wx=(e,t)=>{let n=t||Cx(e.inputs),r=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},Tx=e=>{e.compute(px(e.inputs[0],`Ceil`,`ceil`))},Ex=e=>{e.compute(px(e.inputs[0],`Cos`,`cos`))},Dx=e=>{e.compute(px(e.inputs[0],`Cosh`,`cosh`))},Ox=e=>_y(e),kx=(e,t)=>{let n=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ax=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,jx=e=>{let t=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Ax(t)))},Mx=e=>{e.compute(px(e.inputs[0],`Exp`,`exp`))},Nx=e=>{e.compute(px(e.inputs[0],`Floor`,`floor`))},Px=e=>{let t=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ax(t)))},Fx=(e,t)=>{let n=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Ix=e=>{e.compute(px(e.inputs[0],`Not`,e=>`!${e}`))},Lx=e=>{e.compute(px(e.inputs[0],`Neg`,e=>`-${e}`))},Rx=e=>{e.compute(px(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},zx=e=>{let t=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Bx=e=>{e.compute(px(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Vx=e=>_y(e),Hx=(e,t)=>{let n=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Ux=e=>{e.compute(px(e.inputs[0],`Sin`,`sin`))},Wx=e=>{e.compute(px(e.inputs[0],`Sinh`,`sinh`))},Gx=e=>{e.compute(px(e.inputs[0],`Sqrt`,`sqrt`))},Kx=e=>{e.compute(px(e.inputs[0],`Tan`,`tan`))},qx=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Jx=e=>{e.compute(px(e.inputs[0],`Tanh`,qx))},Yx=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${qx(`v`)};
}
`,Xx=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Zx=e=>{let t=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`FastGelu`,Xx,Yx(t),void 0,e.inputs[0].dataType))},Qx=(e,t)=>{let n=Oy(e.inputs[0].dataType);return e.compute(px(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},$x=e=>{e.compute(px(e.inputs[0],`Log`,`log`))},eS=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,tS=e=>`quick_gelu_impl(${e})`,nS=(e,t)=>{let n=Oy(e.inputs[0].dataType);e.compute(px(e.inputs[0],`QuickGelu`,tS,eS(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),iS,aS,oS,sS=G(()=>{J(),$(),rS(),iS=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},aS=e=>{let t=e[0].dims.slice();t[2]/=2;let n=Z(`input`,e[0].dataType,e[0].dims,4),r=Z(`bias`,e[0].dataType,[e[0].dims[2]],4),i=Q(`output`,e[0].dataType,t,4),a=q.size(t)/4,o=Dy(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Ax(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},oS=e=>{iS(e.inputs),e.compute(aS(e.inputs))}}),cS,lS,uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS=G(()=>{K(),J(),$(),cS=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=Q(`outputData`,u,r.length,4),h=Z(`aData`,c,t.length,4),g=Z(`bData`,l,n.length,4),_;if(i)if(a){let e=q.size(t)===1,r=q.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},lS=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(e=>Number(e)??1),c=r.dims.map(e=>Number(e)??1),l=!q.areEqual(s,c),u=s,d=q.size(s),f=!1,p=!1,m=[l];if(l){let e=by.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=q.size(u);let t=q.size(s)===1,n=q.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>cS(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(u)/4)},...Y(s,c,u)]})}},uS=(e,t,n,r,i,a)=>{e.compute(lS(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},dS=e=>{uS(e,`Add`,(e,t)=>`${e}+${t}`)},fS=e=>{uS(e,`Div`,(e,t)=>`${e}/${t}`)},pS=e=>{uS(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},mS=e=>{uS(e,`Mul`,(e,t)=>`${e}*${t}`)},hS=e=>{let t=Z(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;uS(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},gS=e=>{uS(e,`Sub`,(e,t)=>`${e}-${t}`)},_S=e=>{uS(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},vS=e=>{uS(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},yS=e=>{uS(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},bS=e=>{uS(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),SS,CS,wS,TS,ES,DS,OS=G(()=>{K(),J(),vy(),$(),SS=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},CS=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,wS=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},TS=(e,t,n,r)=>{let i=q.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=Z(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...Y(e[t].dims));u.push(...Y(n));let d=Q(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${CS(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${wS(o,d)}
  }`}},ES=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);SS(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>q.size(e.dims)>0);e.compute(TS(o,i,a,n[0].dataType),{inputs:o})},DS=e=>_y({axis:e.axis})}),kS,AS,jS,MS,NS=G(()=>{K(),J(),kS=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},AS=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},jS=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},MS=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[Cy,wy];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),PS,FS,IS=G(()=>{PS=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},FS=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),LS,RS=G(()=>{LS=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),zS,BS,VS=G(()=>{K(),J(),$(),NS(),zS=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${X(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,X(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},BS=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=ky(l),f=ky(u),p=ky(c),m=q.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[q.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return AS(t,v),v.push(...Y(g,o,s)),h&&v.push(...Y(e[2].dims)),v.push(...Y(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Fy(`batch_dims`,e[0].dataType,g.length),c=Z(`a`,e[0].dataType,o.length,f),l=Z(`b`,e[1].dataType,s.length,d),u=Q(`output`,e[0].dataType,_.length,d),m=Dy(u.type.tensor),v=kS(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(Z(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];jS(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${zS(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${zS(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),HS,US,WS,GS,KS,qS,JS,YS,XS=G(()=>{K(),J(),$(),NS(),VS(),IS(),HS=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,US=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,WS=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${HS(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${US(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},GS=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,KS=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,qS=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${GS(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${GS(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${KS(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},JS=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=Dy(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${PS(e,l)} {
      var value = ${PS(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${zS(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${PS(e,l)} {
      var value = ${PS(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${zS(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${PS(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${PS(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},YS=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=q.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],ee=S.length,te=[d,f,m/y],ne=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];AS(t,ne),ne.push(...Y(u,b,S));let re=[`rank`,`rank`],ie=e.length>2;return ie&&(ne.push(...Y(e[2].dims)),re.push(`rank`)),ne.push(...Y(te)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:re},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ne}),getShaderSource:n=>{let r=u.length,a=Fy(`batchDims`,e[0].dataType,r,1),o=Dy(e[0].dataType),s=Z(`a`,e[0].dataType,x,y),c=Z(`b`,e[1].dataType,ee,y),l=Q(`result`,e[0].dataType,te.length,y),d=[s,c];if(ie){let t=i?y:1;d.push(Z(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];jS(t,f);let p=Dy(l.type.tensor),m=kS(t,l.type.value,p),v=JS(y,ie,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?WS(g,_,o,a):qS(g,_,o,a)}
                   `}}}}),ZS,QS,$S=G(()=>{K(),ny(),$(),NS(),IS(),RS(),XS(),ZS=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${PS(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${PS(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${PS(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${PS(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${PS(s,l)}(0.0);`,x=PS(c,l),S=PS(e?o:s,l),ee=PS(e?s:o,l),te=kS(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ee} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${FS(i)}
      ${te}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},QS=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];ty(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],ee=v[0]*y[0],te=Math.max(v[0]*x,v[1]),ne=r%S===0,re=i%ee===0,ie=a%te===0,ae=h?[x,4,4]:[1,1,1],C=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];AS(t,C),C.push(...Y(e[0].dims,e[1].dims));let oe=[`rank`,`rank`];return o&&(C.push(...Y(e[2].dims)),oe.push(`rank`)),C.push(...Y(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${ne};${re};${ie};${S};${ee};${te}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:C}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];jS(t,i);let a=h?4:1,c=Dy(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[Z(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),Z(`w`,e[1].dataType,e[1].dims.length,a)],f=Q(`result`,e[0].dataType,n.length,a);if(o){let t=Z(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${LS(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${ZS(l,ne,re,ie,o,t,ae[0],ae[1],ae[2],c)}
        ${h?WS(y,v,c,void 0,!l,te):qS(y,v,c,void 0,!l,te,!1,void 0,s)}`}}}}),eC,tC,nC,rC,iC,aC,oC,sC,cC=G(()=>{K(),ny(),J(),$(),NS(),IS(),eC=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},tC=e=>typeof e==`number`?[e,e,e]:e,nC=(e,t)=>t<=1?e:e+(e-1)*(t-1),rC=(e,t,n,r=1)=>{let i=nC(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},iC=(e,t,n,r,i)=>{i??=rC(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},aC=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=iC([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=iC([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},oC=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=tC(n),[y,b,x]=tC(r),S=nC(p,y),ee=nC(m,b),te=nC(h,x),{padInfo:ne,outDepth:re,outHeight:ie,outWidth:ae}=aC(i,c,l,u,g,_,v,S,ee,te),C=a?f*d:f,oe=[0,0,0,0,0];return o===`channelsFirst`?oe=[s,C,re,ie,ae]:o===`channelsLast`&&(oe=[s,re,ie,ae,C]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:re,outHeight:ie,outWidth:ae,outChannels:C,padInfo:ne,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:ee,effectiveFilterWidth:te,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:oe,filterShape:t}},sC=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(eC(c.x.map(e=>n[e]))/s[0]),1,1];ty(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:q.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];AS(t,u),u.push(...Y(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...Y(e[2].dims)),d.push(`rank`)),u.push(...Y(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];jS(t,s);let c=Dy(e[0].dataType),l=Z(`x`,e[0].dataType,e[0].dims.length,1),u=Z(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=Q(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=Z(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?X(`coords`,4,5):X(`coords`,1,5)}];
        }`}let h=PS(1,c),g=kS(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${X(`coords`,0,l.rank)};
              let d2 = ${o?X(`coords`,l.rank-1,l.rank):X(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?X(`coords`,1,l.rank):X(`coords`,2,l.rank)},
              ${o?X(`coords`,2,l.rank):X(`coords`,3,l.rank)},
              ${o?X(`coords`,3,l.rank):X(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?X(`uniforms.x_shape`,1,l.rank):X(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?X(`uniforms.x_shape`,2,l.rank):X(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?X(`uniforms.x_shape`,3,l.rank):X(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?X(`uniforms.x_shape`,4,l.rank):X(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),lC,uC,dC=G(()=>{K(),J(),$(),NS(),lC=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?ky(l):1,f=q.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];AS(t,p),p.push(...Y(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...Y([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=Q(`output`,e[0].dataType,n.length,d),u=Dy(l.type.tensor),f=kS(t,l.type.value,u),p=Z(`x`,e[0].dataType,o.length),m=Z(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(Z(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];jS(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},uC=(e,t,n,r)=>{let i=e.length>2,a=ky(n[3]),o=ky(n[2]),s=q.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];AS(t,d),d.push(...Y(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=Q(`output`,e[0].dataType,u.length,a),s=Dy(r.type.tensor),d=kS(t,r.type.value,s),p=Z(`x`,e[0].dataType,c.length,a),m=Z(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(Z(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return jS(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),fC,pC,mC,hC,gC,_C,vC,yC,bC,xC=G(()=>{J(),$S(),cC(),XS(),dC(),NS(),VS(),qy(),fC=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},pC=[2,3,1,0],mC=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},hC=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();xy.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},gC=e=>{let t=MS(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},_C=(e,t,n,r)=>{let i=n.format===`NHWC`,a=fC(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Wy(t[1],pC),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(uC(o,n,a,r),{inputs:o}):e.compute(lC(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Wy(t[1],pC),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(BS(v,n,a,_,i,r),{inputs:v}):e.compute(YS(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Wy(t[1],pC),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(QS(_,n,a,v,y,b,o,!0,r),{inputs:_})},vC=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=hC({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);_C(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},yC=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=hC(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=oC(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(sC(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},bC=(e,t)=>{if(mC(e.inputs,t),e.inputs[0].dims.length===3)vC(e,t);else if(e.inputs[0].dims.length===5)yC(e,e.inputs,t);else{let n=hC(t,e.inputs);_C(e,e.inputs,n)}}}),SC,CC=G(()=>{K(),ny(),J(),$(),SC=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?ky(c):1,d=a?ky(l):1,f=a?l===1?u:d:1,p=q.size(i)/d,m=[Math.ceil(p/64),1,1];ty(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let h=[`rank`,`rank`],g=[t.strides[0],t.strides[1]],_=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],v=[t.dilations[0],t.dilations[1]],y=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],b=[y[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),y[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:p},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:y},{type:6,data:b},{type:12,data:c},{type:12,data:l},...Y(e[0].dims,e[1].dims)];return r&&(x.push(...Y(e[2].dims)),h.push(`rank`)),x.push(...Y(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${f}${d}${l===1}`,inputDependencies:h},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:g.length},{name:`filter_dims`,type:`u32`,length:_.length},{name:`dilations`,type:`u32`,length:_.length},{name:`effective_filter_dims`,type:`u32`,length:y.length},{name:`pads`,type:`i32`,length:b.length},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=Dy(e[0].dataType),s=a?1:2,c=a?2:3,p=a?3:1,m=Z(`W`,e[1].dataType,e[1].dims.length,f),h=Z(`Dy`,e[0].dataType,e[0].dims.length,u),v=[h,m];r&&v.push(Z(`bias`,e[2].dataType,[i[p]].length,d));let x=Q(`result`,e[0].dataType,i.length,d),S=`
            let outputIndices = ${x.offsetToIndices(`global_idx * ${d}`)};
            let batch = ${x.indicesGet(`outputIndices`,0)};
            let d1 = ${x.indicesGet(`outputIndices`,p)};
            let r = ${x.indicesGet(`outputIndices`,s)};
            let c = ${x.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${x.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${u}) {
                  let xValue = ${a?h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):h.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
                  ${(()=>{let e=``;if(u===1)e+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)e+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${u};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${d}]`:``};
            ${x.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(...v,x)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${S}}`}}}}),wC,TC,EC,DC,OC,kC,AC,jC,MC,NC=G(()=>{CC(),NS(),qy(),wC=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,TC=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},EC=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=wC(s,o[i],a[i],t[f],n[i],p);TC(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},DC=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}EC(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},OC=e=>{let t=MS(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},kC=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},AC=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Wy(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(SC(a,n,r),{inputs:a})},jC=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=DC({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);AC(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},MC=(e,t)=>{if(kC(e.inputs,t),e.inputs[0].dims.length===3)jC(e,t);else{let n=DC(t,e.inputs);AC(e,e.inputs,n)}}}),PC,FC,IC,LC=G(()=>{K(),J(),vy(),$(),PC=(e,t,n,r)=>{let i=q.size(t),a=t.length,o=Z(`input`,e,a),s=Q(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...Y(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=X(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},FC=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(PC(r,n,i,t),{inputs:[0]})},IC=e=>{let t=e.exclusive===1,n=e.reverse===1;return _y({exclusive:t,reverse:n})}}),RC,zC,BC,VC,HC,UC=G(()=>{K(),J(),vy(),$(),RC=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},zC=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},BC=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=Z(`a`,p,f),h=Q(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=q.size(t),u=d.dims,f=q.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Y(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${zC(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},VC=(e,t)=>{RC(e.inputs),e.compute(BC(e.inputs[0],t))},HC=e=>_y({blocksize:e.blocksize,mode:e.mode,format:e.format})}),WC,GC,KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw=G(()=>{K(),J(),vy(),$(),WC=`[a-zA-Z]|\\.\\.\\.`,GC=`(`+WC+`)+`,KC=`^`+GC+`$`,qC=`(`+GC+`,)*`+GC,JC=`^`+qC+`$`,YC=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},XC=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(JC)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(KC)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(GC)))throw Error(`Invalid RHS`);r.match(RegExp(WC,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(KC))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(WC,`g`)),l=new YC(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},ZC=e=>e+`_max`,QC=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>Z(`input${n}`,t,e)),a=q.size(r),o=Q(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...Y(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...Y(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${ZC(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${ZC(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},$C=(e,t)=>{let n=new XC(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(QC(i,e.inputs[0].dataType,n,r))},ew=e=>{let t=e.equation.replace(/\s+/g,``);return _y({equation:t})}}),nw,rw,iw,aw,ow,sw=G(()=>{K(),J(),$(),nw=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},rw=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},iw=(e,t)=>e.length>t.length?rw(e,t):rw(t,e),aw=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=iw(t,n),i=e[0].dataType,a=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(q.size(r)/s),l=e=>{let n=Z(`input`,i,t.length,o),a=Q(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...Y(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},ow=e=>{nw(e.inputs),e.compute(aw(e.inputs),{inputs:[0]})}}),cw,lw,uw=G(()=>{K(),J(),$(),rS(),cw=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=Z(`x`,t,[1],4),r=Z(`bias`,t,[1],4),a=Q(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${Yx(Oy(t))}

    ${e.mainStart(Ty)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Xx(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Ty/4)}})}},lw=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?Zx(e):e.compute(cw(e.inputs))}}),dw,fw,pw,mw,hw=G(()=>{K(),J(),vy(),$(),dw=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},fw=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...Y(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=Z(`data`,e[0].dataType,e[0].dims.length,c),s=Z(`inputIndices`,e[1].dataType,e[1].dims.length),l=Q(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},pw=e=>_y({axis:e.axis}),mw=(e,t)=>{let n=e.inputs;dw(n),e.compute(fw(e.inputs,t))}}),gw,_w,vw,yw=G(()=>{K(),J(),$(),gw=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...Y(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[Z(`indices_data`,t.dataType,t.dims.length),Q(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},_w=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=q.sizeToDimension(a,a.length-1),c=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),u=q.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=gw(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=q.size(g),v=[{type:12,data:_},{type:12,data:c},...Y(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=Z(`data`,n[0].dataType,n[0].dims.length),r=Z(`slice_offsets`,12,m.dims.length),i=Q(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},vw=e=>({batchDims:e.batch_dims,cacheKey:``})}),bw,xw,Sw,Cw,ww=G(()=>{K(),J(),vy(),$(),bw=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},xw=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=q.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...Y(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=Z(`data`,e[0].dataType,e[0].dims.length),o=Z(`inputIndices`,e[1].dataType,e[1].dims.length),c=Z(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?Z(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=Q(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${Oy(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},Sw=(e,t)=>{let n=e.inputs;bw(n,t),e.compute(xw(e.inputs,t))},Cw=e=>_y({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Tw,Ew,Dw,Ow,kw=G(()=>{K(),J(),vy(),$(),Tw=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ew=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=q.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=q.size(l),d=Z(`input`,r,i),f=Z(`indicesInput`,o,a.length),p=Q(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...Y(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},Dw=e=>_y({axis:e.axis}),Ow=(e,t)=>{let n=e.inputs;Tw(n),e.compute(Ew(e.inputs,t))}}),Aw,jw,Mw,Nw,Pw=G(()=>{K(),J(),$(),Aw=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},jw=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=Sy.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);q.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...Y(e[2].dims)),d.push(`rank`)),u.push(...Y(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=Z(`a`,e[0].dataType,e[0].dims),i=Z(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=Z(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=Q(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},Mw=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Nw=(e,t)=>{Aw(e.inputs),e.compute(jw(e.inputs,t))}}),Fw,Iw,Lw,Rw,zw,Bw,Vw,Hw,Uw,Ww,Gw,Kw,qw,Jw,Yw=G(()=>{K(),J(),vy(),$(),[Fw,Iw,Lw,Rw]=[0,1,2,3],zw=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Bw=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Vw=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Hw=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Uw=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Ww=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Fw}] = batch;
     indices[${Iw}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Lw}] = u32(r);
            indices[${Rw}] = u32(c);
          }
        `;case`border`:return`
          indices[${Lw}] = u32(clamp(r, 0, H - 1));
          indices[${Rw}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Lw}] = gs_reflect(r, border[1], border[3]);
          indices[${Rw}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,Gw=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Fw}], indices[${Iw}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Fw}], indices[${Iw}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Fw}], indices[${Iw}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Fw}], indices[${Iw}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Fw}], indices[${Iw}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Fw}], indices[${Iw}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Kw=(e,t)=>{let n=Z(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Z(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Fw,Iw,Lw,Rw]=[0,3,1,2]);let o=Q(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:q.size(a)},...Y(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Bw}
  ${Vw(s)}
  ${Hw(t)}
  ${Uw(t)}
  ${Ww(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Lw}]);
      let W_in = i32(uniforms.x_shape[${Rw}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Fw}], indices[${Lw}], indices[${Rw}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Gw(o,s,t)}
  }`}},qw=(e,t)=>{zw(e.inputs),e.compute(Kw(e.inputs,t))},Jw=e=>_y({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Xw,Zw,Qw,$w,eT,tT,nT,rT=G(()=>{K(),J(),vy(),ay(),nx(),$(),qy(),Xw=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Zw=(e,t)=>{let n=e[0],r=Xw(e,1),i=Xw(e,2),a=Xw(e,3),o=Xw(e,4),s=Xw(e,5),c=Xw(e,6),l=Xw(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&q.size(c.dims)&&q.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&q.size(c.dims)||l&&q.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&q.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&q.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&q.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Qw=e=>_y({...e}),$w=_y({perm:[0,2,1,3]}),eT=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=q.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=Q(`qkv_with_bias`,t.dataType,s),i=Z(`qkv`,t.dataType,s),a=Z(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},tT=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&q.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=eT(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Wy(c,$w.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Wy(c,$w.perm),{inputs:[c],outputs:[-1]})[0]},nT=(e,t)=>{let n=Zw(e.inputs,t),r=e.inputs[0],i=Xw(e.inputs,1),a=Xw(e.inputs,2),o=Xw(e.inputs,3),s=Xw(e.inputs,4),c=Xw(e.inputs,5),l=Xw(e.inputs,6),u=Xw(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=tT(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return $b(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=tT(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=tT(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);$b(e,f,p,m,s,void 0,l,u,c,n)}}),iT,aT,oT,sT,cT,lT,uT,dT=G(()=>{K(),J(),vy(),$(),iT=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},aT=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),_y({numOutputs:r,axis:t.axis,splitSizes:n})},oT=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,sT=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},cT=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,a=q.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=Z(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=Q(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...Y(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${oT(c.length)}
  ${sT(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},lT=(e,t)=>{iT(e.inputs);let n=e.inputs.length===1?t:aT(e.inputs,t);e.compute(cT(e.inputs,n),{inputs:[0]})},uT=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes lengh must be equal`);return _y({axis:t,numOutputs:r,splitSizes:n})}}),fT,pT,mT,hT,gT=G(()=>{vy(),nx(),rT(),dT(),qy(),fT=(e,t)=>{if(t.doRotary)throw Error(`GroupQuerryAttention do_rotary attribute is not supported`);if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},pT=_y({perm:[0,2,1,3]}),mT=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Wy(r,pT.perm),{inputs:[r],outputs:[-1]})[0]),r},hT=(e,t)=>{let n=fT(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=_y({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(cT([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h=tT(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,f,void 0,0);$b(e,h,mT(e,p,n),mT(e,m,n),void 0,void 0,o,s,void 0,n,c,l)}}),_T,vT,yT,bT,xT=G(()=>{K(),J(),qy(),$(),_T=(e,t,n,r,i,a,o,s)=>{let c=ky(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...Y(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=Z(`x`,t.dataType,3,c),a=[i,Z(`scale`,n.dataType,n.dims),Z(`bias`,r.dataType,r.dims),Q(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${My(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${My(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},vT=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=q.sizeFromDimension(r,2),c=ky(s),l=q.size(i)/c,u=_T(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...Y(d,f,d)]}),getShaderSource:e=>{let n=Z(`x`,t[0].dataType,d.length,c),r=Z(`scale_shift`,1,f.length,2),i=Q(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},yT=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=q.sizeFromDimension(r,1)/o,c=ky(o),l=q.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Wy(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=_T(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=Dy(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=Z(`input`,t[0].dataType,t[0].dims,c),s=Q(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},bT=(e,t)=>{t.format===`NHWC`?yT(e,e.inputs,t):vT(e,e.inputs,t)}}),ST,CT,wT,TT=G(()=>{K(),J(),$(),ST=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},CT=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,c),u=q.sizeFromDimension(i,c),d=q.size(a.dims),f=o?q.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=ky(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=Dy(e[0].dataType),i=[Z(`x`,e[0].dataType,e[0].dims,m),Z(`scale`,a.dataType,a.dims,m)];return o&&i.push(Z(`bias`,o.dataType,o.dims,m)),i.push(Q(`output`,e[0].dataType,s,m)),_&&i.push(Q(`mean_data_output`,1,p)),v&&i.push(Q(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ay(`f32`,m)};
    var mean_square_vector = ${Ay(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${jy(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${My(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${My(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${jy(n,m,`x[j + offset]`)};
      let f32scale = ${jy(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${jy(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},wT=(e,t)=>{ST(e.inputs),e.compute(CT(e.inputs,t,e.outputCount))}}),ET,DT,OT=G(()=>{J(),VS(),XS(),ET=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},DT=e=>{ET(e.inputs);let t=by.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(BS(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(YS(c,{activation:``},t,s),{inputs:c})}else e.compute(YS(e.inputs,{activation:``},t))}}}),kT,AT,jT,MT,NT,PT=G(()=>{K(),J(),vy(),$(),kT=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(q.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(q.size(n)!==r)throw Error(`zeroPoints input size error.`)}},AT=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=q.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=ky(t.k),f=ky(l),p=ky(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=q.size(m)/p/h,_=[],v=[c,i,a/d],y=q.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...Y(v)),_.push(...Y(y)),_.push(...Y(e[2].dims)),e.length===4&&_.push(...Y(q.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...Y(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=Z(`a`,e[0].dataType,r,d),a=Z(`b`,12,y.length,f),o=Z(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?Z(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=Q(`output`,e[0].dataType,u,p),g=Dy(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},jT=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=q.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=ky(t.k),f=ky(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=q.size(p)/m,b=[],x=[c,i,a/d],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...Y(x)),b.push(...Y(S)),b.push(...Y(e[2].dims)),e.length===4&&b.push(...Y(q.convertShape(e[3].dims)));let ee=[c,i,o];return b.push(...Y(ee)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=Z(`a`,e[0].dataType,r,d),a=Z(`b`,12,S.length,f),o=Z(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?Z(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=ee.length,u=Q(`output`,e[0].dataType,l),p=Dy(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},MT=(e,t)=>{kT(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(jT(e.inputs,t)):e.compute(AT(e.inputs,t))},NT=e=>_y(e)}),FT,IT,LT,RT,zT,BT,VT,HT,UT,WT=G(()=>{K(),J(),$(),FT=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},IT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${X(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},LT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},RT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X(`uniforms.x_shape`,i,t)})) {
                  k = i32(${X(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${X(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},zT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${X(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${X(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${X(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${X(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},BT=(e,t,n)=>{switch(n.mode){case 0:return IT(e,t,n.pads.length);case 1:return LT(e,t,n.pads.length);case 2:return RT(e,t,n.pads.length);case 3:return zT(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},VT=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:q.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...Y(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=Q(`output`,e[0].dataType,n.length),s=Z(`x`,e[0].dataType,r.length),c=s.type.value,l=BT(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},HT=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},UT=(e,t)=>{FT(e.inputs);let n=HT(e.inputs,t);e.compute(VT(e.inputs,n),{inputs:[0]})}}),GT,KT,qT,JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE,iE,aE,oE,sE,cE,lE,uE=G(()=>{G_(),K(),J(),$(),GT=e=>{if(s_.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},KT=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();xy.adjustPoolAttributes(n,i,o,s,c,l);let u=xy.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},qT=(e,t)=>{let n=t.format===`NHWC`,r=q.size(e),i=q.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=q.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},JT=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=Q(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${X(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${X(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${X(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${X(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},YT=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,XT=e=>`${YT(e)};${e.countIncludePad}`,ZT=e=>`${YT(e)};${e.storageOrder};${e.dilations}`,QT=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),$T=(e,t,n,r)=>{let[i,a]=KT(t,r,n),o=Z(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=qT(a,i);return l.push(...Y(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:l}),getShaderSource:e=>JT(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},eE=e=>{let t=e.count_include_pad!==0,n=QT(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:XT(r)}},tE=(e,t)=>{GT(e.inputs),e.compute($T(`AveragePool`,e.inputs[0],!1,t))},nE={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},rE=e=>{let t=e.format;return{format:t,...nE,cacheKey:t}},iE=(e,t)=>{GT(e.inputs),e.compute($T(`GlobalAveragePool`,e.inputs[0],!0,t))},aE=(e,t,n,r)=>{let[i,a]=KT(t,r,n),o=Z(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=qT(a,i);return c.push(...Y(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:c}),getShaderSource:e=>JT(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},oE=(e,t)=>{GT(e.inputs),e.compute(aE(`MaxPool`,e.inputs[0],!1,t))},sE=e=>{let t=e.storage_order,n=e.dilations,r=QT(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:ZT(i)}},cE=e=>{let t=e.format;return{format:t,...nE,cacheKey:t}},lE=(e,t)=>{GT(e.inputs),e.compute(aE(`GlobalMaxPool`,e.inputs[0],!0,t))}}),dE,fE,pE,mE,hE=G(()=>{K(),J(),vy(),$(),dE=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},fE=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=q.size(a),c=r===3||r===2,l=c?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(q.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=ky(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=Z(`input`,c?12:r,l.length,v),b=Z(`scale`,o,u.length),x=d?Z(`zero_point`,c?12:r,f.length):void 0,S=Q(`output`,o,a.length,_),ee=[y,b];x&&ee.push(x);let te=[l,u];d&&te.push(f);let ne=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...Y(...te,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...ee,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:ne})}},pE=(e,t)=>{dE(e.inputs,t),e.compute(fE(e.inputs,t))},mE=e=>_y({axis:e.axis,blockSize:e.blockSize})}),gE,_E,vE,yE=G(()=>{G_(),K(),$(),gE=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},_E=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...Y(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=Q(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},vE=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),s_.webgpu.validateInputContent&&gE(t,n,r),e.compute(_E(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),bE,xE,SE,CE,wE=G(()=>{K(),J(),vy(),$(),bE=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},xE=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(q.size(r)/1),o=r[r.length-1],s=q.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...Y(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let a=Z(`indices`,e[1].dataType,e[1].dims.length),o=Z(`updates`,e[2].dataType,e[2].dims.length,1),s=t.reduction!==`none`&&t.reduction!==``?Py(`output`,e[0].dataType,i.length):Q(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(a,o,s)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var hasDuplicates = false;
  if (${t.reduction===`none`}) {
    let n = ${q.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction===`none`} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${bE(t.reduction,`output[data_offset + i]`,`value`,s.type.value)}
  }

      }`}}},SE=e=>_y({reduction:e.reduction}),CE=(e,t)=>{e.compute(xE(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),TE,EE,DE,OE,kE,AE,jE,ME,NE,PE,FE,IE,LE,RE,zE,BE,VE,HE,UE,WE,GE=G(()=>{K(),J(),vy(),$(),TE=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},EE=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},DE=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);TE(r,t),t.axes.length>0&&EE(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},OE=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,kE=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${OE(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${OE(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,AE=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,jE=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},ME=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},NE=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},PE=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${X(`uniforms.scales`,`i`,r)};
        var roi_low = ${X(`uniforms.roi`,`i`,i)};
        var roi_hi = ${X(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${X(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,FE=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${X(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X(`uniforms.roi`,`i`,a)};
          var roi_hi = ${X(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${X(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${X(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,IE=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${X(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,LE=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,RE=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${LE(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},zE=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},BE=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${LE(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},VE=(e,t,n,r,i,a)=>{let o=e.dims,s=jE(a,t.axes,o.length),c=ME(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=NE(o,l,t)));let u=Q(`output`,e.dataType,c.length),d=Z(`input`,e.dataType,o.length),f=q.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${kE(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${IE(d,o)};
              ${AE(t.nearestMode,n,g)};
              ${FE(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${PE(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${RE(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${BE(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${zE(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...Y(o,c)]})}},HE=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},UE=(e,t)=>{let n=[],r=[],i=[],a=HE(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);DE(e.inputs,t,a,n,r,i),e.compute(VE(e.inputs[0],t,a,n,r,i),{inputs:[0]})},WE=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return _y({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),KE,qE,JE,YE=G(()=>{K(),J(),vy(),$(),KE=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!q.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=q.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},qE=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=q.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:_y({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=Z(`input`,e[0].dataType,e[0].dims.length),i=Z(`position_ids`,e[1].dataType,e[1].dims.length),a=Z(`cos_cache`,e[2].dataType,e[2].dims.length),o=Z(`sin_cache`,e[3].dataType,e[3].dims.length),s=Q(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Ty)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,Q(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(f)/Ty)},programUniforms:m})}},JE=(e,t)=>{KE(e.inputs,t),e.compute(qE(e.inputs,t))}}),XE,ZE,QE,$E=G(()=>{K(),J(),$(),XE=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},ZE=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=q.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=ky(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[Z(`x`,e[0].dataType,e[0].dims,g),Z(`skip`,e[1].dataType,e[1].dims,g),Z(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(Z(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(Z(`bias`,e[4].dataType,e[4].dims,g)),r.push(Q(`output`,e[0].dataType,s,g)),p&&r.push(Q(`mean_output`,1,u)),m&&r.push(Q(`inv_std_output`,1,u)),h&&r.push(Q(`input_skip_bias_sum`,e[0].dataType,s,g));let a=Dy(e[0].dataType),o=Dy(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${jy(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${My(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${My(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},QE=(e,t)=>{XE(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(ZE(e.inputs,t,e.outputCount,!1),{outputs:n})}}),eD,tD,nD,rD,iD,aD,oD,sD,cD=G(()=>{K(),J(),vy(),$(),eD=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},tD=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},nD=(e,t)=>{if(e.length>1){let t=tD(e,1),n=tD(e,2),r=tD(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),_y({starts:t,ends:n,axes:r})}return t},rD=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},iD=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${X(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${X(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${X(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${X(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,aD=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=tD(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>rD(e,t,n,i,a)),s=t.ends.map((e,t)=>rD(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=Q(`output`,e[0].dataType,l.length),f=Z(`input`,e[0].dataType,e[0].dims.length),p=q.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...Y(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${iD(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},oD=(e,t)=>{eD(e.inputs,t);let n=nD(e.inputs,t);e.compute(aD(e.inputs,n),{inputs:[0]})},sD=e=>{let t=e.starts,n=e.ends,r=e.axes;return _y({starts:t,ends:n,axes:r})}}),lD,uD,dD,fD,pD=G(()=>{K(),J(),vy(),qy(),$(),lD=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},uD=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),a=r.length,o=q.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Wy(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=ky(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=Z(`x`,c.dataType,c.dims,p),v=Q(`result`,c.dataType,c.dims,p),y=_.type.value,b=Dy(c.dataType)===`f32`?`var threadMax = ${y}(-3.402823e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${My(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Wy(x,l),{inputs:[x]})},dD=(e,t)=>{lD(e.inputs),uD(e,t)},fD=e=>_y({axis:e.axis})}),mD,hD,gD,_D,vD,yD=G(()=>{K(),J(),$(),mD=e=>Array.from(e.getBigInt64Array(),Number),hD=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(mD(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},gD=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},_D=(e,t)=>{let n=e[0].dims,r=t??mD(e[1]),i=gD(n,r),a=q.size(i),o=e[0].dataType,s=Z(`input`,o,n.length),c=Q(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...Y(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},vD=e=>{hD(e.inputs),e.compute(_D(e.inputs),{inputs:[0]})}}),bD,xD,SD,CD=G(()=>{K(),J(),$(),bD=(e,t,n,r,i)=>{let a=Q(`output_data`,i,n.length,4),o=Z(`a_data`,t[1].dataType,t[1].dims.length,4),s=Z(`b_data`,t[2].dataType,t[2].dims.length,4),c=Z(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},xD=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,s=q.size(t);if(a){let e=by.calcShape(by.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=q.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>bD(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...Y(r,t,n,o)]})}},SD=e=>{e.compute(xD(e.inputs))}}),wD,TD=G(()=>{qb(),nx(),sx(),dx(),sS(),xS(),OS(),xC(),NC(),LC(),UC(),tw(),sw(),uw(),hw(),yw(),ww(),kw(),Pw(),Yw(),gT(),xT(),TT(),OT(),PT(),rT(),WT(),uE(),hE(),yE(),wE(),Hb(),GE(),YE(),$E(),cD(),pD(),dT(),yD(),qy(),rS(),CD(),wD=new Map([[`Abs`,[mx]],[`Acos`,[hx]],[`Acosh`,[gx]],[`Add`,[dS]],[`ArgMax`,[Gb,Kb]],[`ArgMin`,[Wb,Kb]],[`Asin`,[_x]],[`Asinh`,[vx]],[`Atan`,[yx]],[`Atanh`,[bx]],[`Attention`,[tx]],[`AveragePool`,[tE,eE]],[`BatchNormalization`,[ox]],[`BiasAdd`,[ux]],[`BiasSplitGelu`,[oS]],[`Cast`,[Sx,xx]],[`Ceil`,[Tx]],[`Clip`,[wx]],[`Concat`,[ES,DS]],[`Conv`,[bC,gC]],[`ConvTranspose`,[MC,OC]],[`Cos`,[Ex]],[`Cosh`,[Dx]],[`CumSum`,[FC,IC]],[`DepthToSpace`,[VC,HC]],[`DequantizeLinear`,[pE,mE]],[`Div`,[fS]],[`Einsum`,[$C,ew]],[`Elu`,[kx,Ox]],[`Equal`,[pS]],[`Erf`,[jx]],[`Exp`,[Mx]],[`Expand`,[ow]],[`FastGelu`,[lw]],[`Floor`,[Nx]],[`FusedConv`,[bC,gC]],[`Gather`,[mw,pw]],[`GatherElements`,[Ow,Dw]],[`GatherBlockQuantized`,[Sw,Cw]],[`GatherND`,[_w,vw]],[`Gelu`,[Px]],[`Gemm`,[Nw,Mw]],[`GlobalAveragePool`,[iE,rE]],[`GlobalMaxPool`,[lE,cE]],[`Greater`,[_S]],[`GreaterOrEqual`,[yS]],[`GridSample`,[qw,Jw]],[`GroupQueryAttention`,[hT]],[`HardSigmoid`,[Hx,Vx]],[`InstanceNormalization`,[bT]],[`LayerNormalization`,[wT]],[`LeakyRelu`,[Fx,Ox]],[`Less`,[vS]],[`LessOrEqual`,[bS]],[`Log`,[$x]],[`MatMul`,[DT]],[`MatMulNBits`,[MT,NT]],[`MaxPool`,[oE,sE]],[`Mul`,[mS]],[`MultiHeadAttention`,[nT,Qw]],[`Neg`,[Lx]],[`Not`,[Ix]],[`Pad`,[UT]],[`Pow`,[hS]],[`QuickGelu`,[nS,Ox]],[`Range`,[vE]],[`Reciprocal`,[Rx]],[`ReduceMin`,[Lb]],[`ReduceMean`,[Mb]],[`ReduceMax`,[Ib]],[`ReduceSum`,[zb]],[`ReduceProd`,[Rb]],[`ReduceL1`,[Nb]],[`ReduceL2`,[Pb]],[`ReduceLogSum`,[Vb]],[`ReduceLogSumExp`,[Fb]],[`ReduceSumSquare`,[Bb]],[`Relu`,[zx]],[`Resize`,[UE,WE]],[`RotaryEmbedding`,[JE]],[`ScatterND`,[CE,SE]],[`Sigmoid`,[Bx]],[`Sin`,[Ux]],[`Sinh`,[Wx]],[`Slice`,[oD,sD]],[`SkipLayerNormalization`,[QE]],[`Split`,[lT,uT]],[`Sqrt`,[Gx]],[`Softmax`,[dD,fD]],[`Sub`,[gS]],[`Tan`,[Kx]],[`Tanh`,[Jx]],[`ThresholdedRelu`,[Qx,Ox]],[`Tile`,[vD]],[`Transpose`,[Gy,Ky]],[`Where`,[SD]]])}),ED,DD=G(()=>{G_(),ny(),$(),ED=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){N_(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),P_(e.programInfo.name)}dispose(){}build(e,t){N_(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`},{feature:`subgroups-f16`,extension:`subgroups_f16`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Ly(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});ty(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return P_(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),OD,kD,AD,jD,MD,ND=G(()=>{G_(),K(),ny(),iy(),hy(),TD(),DD(),OD=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},kD=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${OD(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},AD=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},jD=class{constructor(e){this.subgroupsSupported=e.features.has(`subgroups`),this.subgroupsF16Supported=e.features.has(`subgroups`);let t=e.limits;this.subgroupSizeRange=!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?void 0:[t.minSubgroupSize,t.maxSubgroupSize]}},MD=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`)&&i(`subgroups-f16`),this.device=await t.requestDevice(r),this.deviceInfo=new jD(this.device),this.adapterInfo=new AD(t.info||await t.requestAdapterInfo()),this.gpuDataManager=my(this),this.programManager=new ED(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,$v(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;N_(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Bv(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Bv(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Bv(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Bv(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}execution time: ${m-p} ns`)}j_(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),P_()}run(e,t,n,r,i,a){N_(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return P_(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Bv(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=kD(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),ty(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(ty(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),P_(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=wD.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),ty(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await fy(this,e,t);return ry(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ty(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){ty(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){ty(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),PD,FD,ID,LD,RD,zD,BD,VD,HD=G(()=>{ny(),PD=1,FD=()=>PD++,ID=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),LD=(e,t)=>{let n=ID.get(e);if(!n)throw Error(`Unsupported data type.`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},RD=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return LD(this.dataType,this.tensorShape)}destroy(){ty(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}},zD=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==LD(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else ty(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},BD=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}reserveTensorId(){let e=FD();return this.tensorTrackersById.set(e,new zD(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ty(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){ty(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=FD(),o=new RD({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new zD(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a){let o=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(o,t,n)){ty(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${n}}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}ty(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${n}}`);let s=await o.createTensor({dataType:t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new RD({sessionId:e,context:o,tensor:s,dataType:t,shape:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},VD=(...e)=>new BD(...e)}),UD,WD,GD,KD=G(()=>{K(),Ev(),iy(),HD(),ny(),UD=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),WD=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},GD=class{constructor(e){this.tensorManager=VD(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,$v(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){ty(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ty(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)ty(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>WD(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ty(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=UD.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){ty(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=UD.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Tv().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);ty(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ry(n,t)}}registerMLTensor(e,t,n,r){let i=UD.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return ty(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a){if(!a)throw Error(`External mounted files are not available.`);let o=e;e.startsWith(`./`)&&(o=e.substring(2));let s=a.get(o);if(!s)throw Error(`File with name ${o} not found in preloaded files.`);if(t+n>s.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let c=s.slice(t,t+n).buffer,l;switch(i.dataType){case`float32`:l=new Float32Array(c);break;case`float16`:l=new Uint16Array(c);break;case`int32`:l=new Int32Array(c);break;case`uint32`:l=new Uint32Array(c);break;case`int64`:l=new BigInt64Array(c);break;case`uint64`:l=new BigUint64Array(c);break;case`int8`:l=new Int8Array(c);break;case`int4`:case`uint4`:case`uint8`:l=new Uint8Array(c);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ty(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),r.constant(i,l)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}flush(){}}}),qD={};Kg(qD,{init:()=>XD});var JD,YD,XD,ZD=G(()=>{K(),ND(),ny(),J(),KD(),JD=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(q.size(t)!==q.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},YD=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new JD(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new JD(this.module,t,this.output(e,n),n),(e,t)=>{let n=Vv(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new JD(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},XD=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=new MD;await e.initialize(n,r),i(`webgpu`,[e,t=>e.alloc(Number(t)),t=>e.free(t),(n,r,i,a=!1)=>{if(a)ty(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(r)}, size=${Number(i)}`),e.memcpy(Number(n),Number(r));else{ty(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(r)}, size=${Number(i)}`);let a=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(i));e.upload(Number(r),a)}},async(n,r,i)=>{ty(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${r}, size=${i}`),await e.download(Number(n),()=>t.HEAPU8.subarray(Number(r)>>>0,Number(r+i)>>>0))},(n,r,i)=>e.createKernel(n,Number(r),i,t.UTF8ToString(t._JsepGetNodeName(Number(r)))),t=>e.releaseKernel(t),(n,r,i,a)=>{ty(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${i}, kernel=${n}, contextDataOffset=${r}`);let o=new YD(t,e,Number(r));return e.computeKernel(Number(n),o,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new GD(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),QD,$D,eO,tO,nO,rO,iO,aO,oO,sO,cO,lO,uO=G(()=>{Mv(),Rv(),K(),Ev(),Av(),Jv(),QD=(e,t)=>{Tv()._OrtInit(e,t)!==0&&kv(`Can't initialize onnxruntime.`)},$D=async e=>{QD(e.wasm.numThreads,Uv(e.logLevel))},eO=async(e,t)=>{{let n=(ZD(),Jg(qD)).init;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);let t=e.webgpu.adapter;if(t){if(typeof t.limits!=`object`||typeof t.features!=`object`||typeof t.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!==`low-power`&&n!==`high-performance`)throw Error(`Invalid powerPreference setting: "${n}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}await n(`webgpu`,Tv(),e,t)}if(t===`webnn`){if(typeof navigator>`u`||!navigator.ml)throw Error(`WebNN is not supported in current environment`);await n(`webnn`,Tv(),e)}}},tO=new Map,nO=e=>{let t=Tv(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&kv(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},rO=e=>{let t=Tv(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},iO=async(e,t)=>{let n,r,i=Tv();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=rO(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=Lv(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(qv(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.jsepCreateMLContext(r):await i.jsepCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.jsepCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),a===0&&kv(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=nO(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[];for(let t=0;t<e;t++){let e=i._OrtGetInputName(a,t);e===0&&kv(`Can't get an input name.`),l.push(e),p.push(i.UTF8ToString(e))}for(let e=0;e<d;e++){let n=i._OrtGetOutputName(a,e);n===0&&kv(`Can't get an output name.`),u.push(n);let r=i.UTF8ToString(n);m.push(r);{if(f&&t?.preferredOutputLocation===void 0){h.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[r]??`cpu`;if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);h.push(e)}}let g=null;return h.some(e=>e===`gpu-buffer`||e===`ml-tensor`)&&(s=i._OrtCreateBinding(a),s===0&&kv(`Can't create IO binding.`),g={handle:s,outputPreferredLocations:h,outputPreferredLocationsEncoded:h.map(e=>Kv(e))}),tO.set(a,[a,l,u,g,f,!1]),[a,p,m]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&kv(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&kv(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&kv(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},aO=e=>{let t=Tv(),n=tO.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&kv(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&kv(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&kv(`Can't release session.`),tO.delete(e)},oO=async(e,t,n,r,i,a=!1)=>{if(!e){t.push(0);return}let o=Tv(),s=o.PTR_SIZE,c=e[0],l=e[1],u=e[3],d=u,f,p;if(c===`string`&&(u===`gpu-buffer`||u===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(a&&u!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(u===`gpu-buffer`){let t=e[2].gpuBuffer;p=Vv(zv(c),l);let n=o.jsepRegisterBuffer;if(!n)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);f=n(r,i,t,p)}else if(u===`ml-tensor`){let t=e[2].mlTensor;p=Vv(zv(c),l);let n=o.jsepRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);f=n(r,t,zv(c),l)}else{let t=e[2];if(Array.isArray(t)){p=s*t.length,f=o._malloc(p),n.push(f);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);o.setValue(f+e*s,Dv(t[e],n),`*`)}}else{let e=o.jsepIsGraphInput;if(c!==`string`&&e){let a=o._OrtGetInputName(r,i);if(e(r,o.UTF8ToString(a))){let e=zv(c);p=Vv(e,l),d=`ml-tensor`;let n=o.jsepCreateTemporaryTensor,i=o.jsepUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,l);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f=a}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}}let m=o.stackSave(),h=o.stackAlloc(4*l.length);try{l.forEach((e,t)=>o.setValue(h+t*s,e,s===4?`i32`:`i64`));let e=o._OrtCreateTensor(zv(c),f,p,h,l.length,Kv(d));e===0&&kv(`Can't create tensor for input/output. session=${r}, index=${i}.`),t.push(e)}finally{o.stackRestore(m)}},sO=async(e,t,n,r,i,a)=>{let o=Tv(),s=o.PTR_SIZE,c=tO.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=o.stackSave(),ee=o.stackAlloc(h*s),te=o.stackAlloc(h*s),ne=o.stackAlloc(g*s),re=o.stackAlloc(g*s);try{[_,v]=jv(a);for(let r=0;r<h;r++)await oO(n[r],y,x,e,t[r],p);for(let t=0;t<g;t++)await oO(i[t],b,x,e,h+r[t],p);for(let e=0;e<h;e++)o.setValue(ee+e*s,y[e],`*`),o.setValue(te+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(ne+e*s,b[e],`*`),o.setValue(re+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&kv(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?o._OrtBindOutput(n,d[c],b[t],0)!==0&&kv(`Can't bind pre-allocated output[${t}] for session=${e}.`):o._OrtBindOutput(n,d[c],0,s[c])!==0&&kv(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}tO.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,ne,_):await o._OrtRun(l,te,ee,h,re,g,ne,_),c!==0&&kv(`failed to call OrtRun().`);let S=[];for(let t=0;t<g;t++){let n=Number(o.getValue(ne+t*s,`*`));if(n===b[t]){S.push(i[t]);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),u=!1,d,p=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&kv(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));p=o.getValue(c+s,`*`);let l=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(l+e*s,i)));o._OrtFree(l)!==0&&kv(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);d=Bv(a);let _=f?.outputPreferredLocations[r[t]];if(d===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(p+t*s,`*`),r=o.getValue(p+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}S.push([d,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(p),r=Vv(a,g);if(r===void 0||!Wv(d))throw Error(`Unsupported data type: ${d}`);u=!0,S.push([d,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,d),dispose:()=>{o._OrtReleaseTensor(n)!==0&&kv(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Vv(a,g)===void 0||!Gv(d))throw Error(`Unsupported data type: ${d}`);let r=await t(e,p,a,h,!1);u=!0,S.push([d,h,{mlTensor:r,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(n)}},`ml-tensor`])}else{let e=new(Hv(d))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(p,p+e.byteLength)),S.push([d,h,e,`cpu`])}}finally{o.stackRestore(a),d===`string`&&p&&o._free(p),u||o._OrtReleaseTensor(n),o.jsepOnRunEnd?.(l)}}return f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&kv(`Can't clear bound outputs.`),tO.set(e,[l,u,d,f,p,!1])),S}finally{o.stackRestore(S),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},cO=e=>{let t=Tv(),n=tO.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&kv(`Can't get an profile file name.`),t._OrtFree(i)},lO=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),dO,fO,pO,mO,hO,gO,_O,vO,yO,bO,xO,SO,CO,wO,TO,EO,DO,OO,kO=G(()=>{G_(),uO(),Ev(),_v(),dO=()=>!!s_.wasm.proxy&&typeof document<`u`,pO=!1,mO=!1,hO=!1,vO=new Map,yO=(e,t)=>{let n=vO.get(e);n?n.push(t):vO.set(e,[t])},bO=()=>{if(pO||!mO||hO||!fO)throw Error(`worker not ready`)},xO=e=>{switch(e.data.type){case`init-wasm`:pO=!1,e.data.err?(hO=!0,_O[1](e.data.err)):(mO=!0,_O[0]()),gO&&=(URL.revokeObjectURL(gO),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=vO.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},SO=async()=>{if(!mO){if(pO)throw Error(`multiple calls to 'initWasm()' detected.`);if(hO)throw Error(`previous call to 'initWasm()' failed.`);if(pO=!0,dO())return new Promise((e,t)=>{fO?.terminate(),mv().then(([n,r])=>{try{fO=r,fO.onerror=e=>t(e),fO.onmessage=xO,_O=[e,t];let i={type:`init-wasm`,in:s_};!i.in.wasm.wasmPaths&&(n||import.meta.url?.startsWith(`file:`))&&(i.in.wasm.wasmPaths={wasm:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href}),fO.postMessage(i),gO=n}catch(e){t(e)}},t)});try{await wv(s_.wasm),await $D(s_),mO=!0}catch(e){throw hO=!0,e}finally{pO=!1}}},CO=async e=>{if(dO())return bO(),new Promise((t,n)=>{yO(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:s_}};fO.postMessage(r)});await eO(s_,e)},wO=async e=>dO()?(bO(),new Promise((t,n)=>{yO(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};fO.postMessage(r,[e.buffer])})):rO(e),TO=async(e,t)=>{if(dO()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return bO(),new Promise((n,r)=>{yO(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),fO.postMessage(i,a)})}return iO(e,t)},EO=async e=>{if(dO())return bO(),new Promise((t,n)=>{yO(`release`,[t,n]);let r={type:`release`,in:e};fO.postMessage(r)});aO(e)},DO=async(e,t,n,r,i,a)=>{if(dO()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return bO(),new Promise((i,o)=>{yO(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};fO.postMessage(c,lO(s))})}return sO(e,t,n,r,i,a)},OO=async e=>{if(dO())return bO(),new Promise((t,n)=>{yO(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};fO.postMessage(r)});cO(e)}}),AO,jO,MO,NO=G(()=>{G_(),kO(),K(),K_(),Jv(),AO=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},jO=e=>{switch(e[3]){case`cpu`:return new k_(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Wv(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return k_.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Gv(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return k_.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},MO=class{async fetchModelAndCopyToWasmMemory(e){return wO(await qv(e))}async loadModel(e,t){N_();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await TO(n,t),P_()}async dispose(){return EO(this.sessionId)}async run(e,t,n){N_();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>AO(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?AO(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await DO(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??jO(l[e]);return P_(),u}startProfiling(){}endProfiling(){OO(this.sessionId)}}}),PO={};Kg(PO,{OnnxruntimeWebAssemblyBackend:()=>IO,initializeFlags:()=>FO,wasmBackend:()=>LO});var FO,IO,LO,RO=G(()=>{G_(),kO(),NO(),FO=()=>{if((typeof s_.wasm.initTimeout!=`number`||s_.wasm.initTimeout<0)&&(s_.wasm.initTimeout=0),s_.wasm.simd===!1&&console.warn(`Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.`),typeof s_.wasm.proxy!=`boolean`&&(s_.wasm.proxy=!1),typeof s_.wasm.trace!=`boolean`&&(s_.wasm.trace=!1),typeof s_.wasm.numThreads!=`number`||!Number.isInteger(s_.wasm.numThreads)||s_.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)s_.wasm.numThreads=1;else{let e=typeof navigator>`u`?Gg(`node:os`).cpus().length:navigator.hardwareConcurrency;s_.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},IO=class{async init(e){FO(),await SO(),await CO(e)}async createInferenceSessionHandler(e,t){let n=new MO;return await n.loadModel(e,t),Promise.resolve(n)}},LO=new IO});G_(),G_(),G_();var zO=`1.21.0`,BO=W_;{let e=(RO(),Jg(PO)).wasmBackend;Zg(`webgpu`,e,5),Zg(`webnn`,e,5),Zg(`cpu`,e,10),Zg(`wasm`,e,10)}Object.defineProperty(s_.versions,"web",{value:zO,enumerable:!0});export{a as n,o as t};