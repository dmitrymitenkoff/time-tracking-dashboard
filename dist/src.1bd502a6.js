parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"boCh":[function(require,module,exports) {
module.exports=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}];
},{}],"A2T1":[function(require,module,exports) {
var e=require("./data.json"),t=document.querySelectorAll(".content"),s=document.querySelector("#daily"),r=document.querySelector("#weekly"),c=document.querySelector("#monthly");function n(){var s=0;t.forEach(function(t){var r=t.querySelector(".stats__hrs--num"),c=t.querySelector(".stats__prev__hrs");r.textContent=e[s].timeframes.daily.current,c.textContent=e[s].timeframes.daily.previous,s++})}function o(){var s=0;t.forEach(function(t){var r=t.querySelector(".stats__hrs--num"),c=t.querySelector(".stats__prev__hrs");r.textContent=e[s].timeframes.weekly.current,c.textContent=e[s].timeframes.weekly.previous,s++})}function a(){var s=0;t.forEach(function(t){var r=t.querySelector(".stats__hrs--num"),c=t.querySelector(".stats__prev__hrs");r.textContent=e[s].timeframes.monthly.current,c.textContent=e[s].timeframes.monthly.previous,s++})}s.addEventListener("click",function(){r.classList.remove("selected"),c.classList.remove("selected"),s.classList.add("selected"),n()}),r.addEventListener("click",function(){s.classList.remove("selected"),c.classList.remove("selected"),r.classList.add("selected"),o()}),c.addEventListener("click",function(){s.classList.remove("selected"),c.classList.add("selected"),r.classList.remove("selected"),a()});
},{"./data.json":"boCh"}],"Focm":[function(require,module,exports) {
"use strict";require("./app");
},{"./app":"A2T1"}]},{},["Focm"], null)