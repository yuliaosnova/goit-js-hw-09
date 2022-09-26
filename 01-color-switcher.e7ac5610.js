const e=document.querySelector("body"),t=document.querySelector("#start"),o=document.querySelector("#stop");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}),1e3)})),o.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.e7ac5610.js.map
