const e=document.querySelector("body"),t=document.querySelector("#start"),o=document.querySelector("#stop");let l=null;t.addEventListener("click",(()=>{l=setInterval((()=>{console.log("bleat");const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}),1e3)})),o.addEventListener("click",(()=>{clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.d81550a5.js.map
