(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,r){},QfWi:function(e,t,r){"use strict";r.r(t);r("L1EO");var o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e)}},c=function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e)}},s="light-theme",n="dark-theme",a=document.querySelector("#theme-switch-toggle"),i=document.querySelector("body");!function(){if(o("theme")===n)return i.classList.add(n),void(a.checked=!0);i.classList.add(s)}(),a.addEventListener("change",(function(){i.classList.toggle("light-theme"),i.classList.toggle("dark-theme"),c("theme",i.classList.contains(s)?s:n)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.52bea65ddb6ad2290e3f.js.map