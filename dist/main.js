!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=function(e,t){let n=document.createElement(e);return t&&Object.entries(t).forEach(([e,t])=>{n.setAttribute(e,t)}),n},r=e=>document.querySelector(e),c=e=>document.getElementById(e),a=(e,...t)=>e.classList.remove(...t),i=function(e,t){t.forEach(t=>e.appendChild(t))},s=function(){const e=r(".projectInput"),t=c("userInput"),n=r("button");e.classList.contains("hidden")?(a(e,"hidden"),a(n,"addProject"),n.id="cancelProject",t.value=""):(t.value="",((e,...t)=>{e.classList.add(...t)})(e,"hidden"),a(n,"cancelProject"),n.id="addProject")};!function(){const e=c("left-block").getElementsByClassName("select");for(var t=0;t<e.length;t++)e[t].addEventListener("click",(function(){let e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}();const l=function(e){console.log(e.target.parentNode.id);c("right-block");e.target.parentNode.id;e.target.parentNode.remove()};c("addProject").addEventListener("click",s),c("form").addEventListener("submit",(function(){const e=c("left-block"),t=c("userInput"),n=document.querySelector(".button-tab"),r=o("div",{id:t.value,class:"project-tab select"}),a=o("div",{class:"projectTag"}),d=o("i",{id:"today",class:"fas fa-calendar-check"}),u=o("i",{id:"trash",class:"fas fa-trash-alt"});u.addEventListener("click",l);const f=o("p");f.innerHTML=t.value,i(a,[d,f]),i(r,[a,u]),e.insertBefore(r,n);const p=c("right-block"),v=o("div",{id:t.value,class:"display select active"}),b=o("h1",{class:"project-title"});b.innerHTML=t.value;const m=o("div",{id:"toDo-List"}),y=o("div",{class:"toDo-button"}),h=o("button",{id:"addToDo"}),g=o("i",{class:"fas fa-plus"});h.appendChild(g);const j=o("div",{class:"toDoInput"}),E=o("input",{id:"userInput2",type:"text",placeholder:"Add Task",required:!0});j.appendChild(E),i(y,[h,j]),i(v,[b,m,y]),i(p,[v]),s()}))}]);