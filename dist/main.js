!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=function(e,t){let n=document.createElement(e);return t&&Object.entries(t).forEach(([e,t])=>{n.setAttribute(e,t)}),n},c=e=>document.querySelector(e),r=e=>document.getElementById(e),a=(e,...t)=>e.classList.remove(...t),i=(e,...t)=>e.getElementsByClassName(...t),s=function(e,t){t.forEach(t=>e.appendChild(t))},l=function(){const e=c(".projectInput"),t=r("userInput"),n=c("button");e.classList.contains("hidden")?(a(e,"hidden"),a(n,"addProject"),n.id="cancelProject",t.value=""):(t.value="",((e,...t)=>{e.classList.add(...t)})(e,"hidden"),a(n,"cancelProject"),n.id="addProject")},d=function(){const e=r("left-block"),t=r("right-block"),n=i(e,"select"),o=i(t,"select");for(let e=0;e<n.length;e++)n[e].addEventListener("click",(function(){Array.prototype.forEach.call(n,(function(e){e.classList.remove("active")})),this.classList.add("active"),Array.prototype.forEach.call(o,(function(e){e.classList.replace("active","hidden")})),o[e].classList.replace("hidden","active")}))};d();const u=function(e){let t=e.target.parentNode.classList[0];const n=i(document,t);for(;n.length>0;)n[0].remove()},f=function(){const e=r("toDo-List"),t=r("userInput2"),n=o("div",{id:""+t.value,class:"todo"}),c=o("p");c.innerHTML=t.value,n.appendChild(c),e.appendChild(n),t.value=""};r("addProject").addEventListener("click",l),r("form").addEventListener("submit",(function(){const e=r("left-block"),t=r("userInput"),n=document.querySelector(".button-tab"),c=o("div",{class:t.value+" project-tab select"}),a=o("div",{class:"projectTag"}),i=o("i",{id:"today",class:"fas fa-calendar-check"}),f=o("i",{id:""+t.value,class:"fas fa-trash-alt"});f.addEventListener("click",u);const p=o("p");p.innerHTML=t.value,s(a,[i,p]),s(c,[a,f]),e.insertBefore(c,n);const v=r("right-block"),b=o("div",{class:t.value+" display select hidden"}),h=o("h1",{class:"project-title"});h.innerHTML=t.value;const y=o("div",{id:"toDo-List"}),m=o("div",{class:"toDo-button"}),L=o("button",{id:"addToDo"}),j=o("i",{class:"fas fa-plus"});L.appendChild(j);const g=o("div",{class:"toDoInput"}),E=o("input",{id:"userInput2",type:"text",placeholder:"Add Task",required:!0});g.appendChild(E),s(m,[L,g]),s(b,[h,y,m]),s(v,[b]),l(),d()}));const p=document.getElementsByClassName("addToDo");for(var v=0;v<p.length;v++)p[v].addEventListener("click",f)}]);