parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"VNNP":[function(require,module,exports) {
function e(t,r,c={}){return Object.entries(r).forEach(([r,o])=>{"object"==typeof o?(c[r]={},e(t,o,c[r])):c[r]=n(o,t)}),c}function n(e,t,r=""){let c;return Object.entries(t).forEach(([t,o])=>{c||("object"==typeof o?c=n(e,o,`${r}.${t}`):e===o&&(c=`${r}.${t}`))}),c}function t(e,n){let t=`\ntarget = ${e.replace(new RegExp('"\\.',"g"),"source.").replace(new RegExp('",',"g"),",").replace(/"\n/g,"\n")}\n    `;return n?t.replace(/\{/g,"[").replace(/\}/g,"]"):t}"undefined"!=typeof module&&(module.exports={guessMapingRules:e,findPath:n,generateMappingCode:t});
},{}],"ARet":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"yU0Q":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ARet"}],"xZdZ":[function(require,module,exports) {
"use strict";var e=require("../lib/index");!async function(){const[r,t]=await async function(){return Promise.all([require("_bundle_loader")(require.resolve("./vendors/jsoneditor")),require("_bundle_loader")(require.resolve("./vendors/prism"))])}(),n=(o=document.querySelector("#source-jsoneditor"),new r(o,{mode:"code"},{p:{firstname:"Benoit",lastname:"Vasseur"},others_data:{birthdate:"14/10/1991",nationality:"French"},current_work:{type:"developer",where:"Modulus Data; Levis, QC, Canada"}}));var o;const a=(i=document.querySelector("#target-jsoneditor"),new r(i,{mode:"code"},{personne:{firstName:"Benoit",lastName:"Vasseur",nationality:"French",birthdate:"14/10/1991",current_work_type:"developer",current_work_place:"Modulus Data; Levis, QC, Canada"}}));var i;function u(){return document.querySelector("#source-code")}document.querySelector("#generate-button").addEventListener("click",function(){!function(r,n){const o=(0,e.guessMapingRules)(r.get(),n.get()),a=JSON.stringify(o,null,4),i=(0,e.generateMappingCode)(a);u().textContent=i,t.highlightElement(u())}(n,a)})}();
},{"../lib/index":"VNNP","_bundle_loader":"yU0Q","./vendors/jsoneditor":[["jsoneditor.9b3fda9e.js","x5Jp"],"jsoneditor.9b3fda9e.map","x5Jp"],"./vendors/prism":[["prism.6a919090.js","aoAr"],"prism.6a919090.map","aoAr"]}],"Bs6y":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("yU0Q");b.register("js",require("Bs6y"));
},{}]},{},[0,"xZdZ"], null)
//# sourceMappingURL=/uiApp.14349678.map