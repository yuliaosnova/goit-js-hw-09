function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},t=o.parcelRequired7c6;null==t&&((t=function(e){if(e in l)return l[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return l[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=t);var r=t("eWCmQ");const i={formEl:document.querySelector(".form"),delayEl:document.querySelector('[name="delay"]'),stepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]')};function u(e,o){return new Promise(((l,n)=>{setTimeout((()=>{Math.random()>.3?l({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.formEl.addEventListener("submit",(function(o){o.preventDefault();let l=Number(i.delayEl.value),n=Number(i.stepEl.value),t=Number(i.amountEl.value);console.log("delay: ",l,n,t);for(let o=0;o<t;o++)u(o,l).then((({position:o,delay:l})=>{console.log(`✅ Fulfilled promise ${o} in ${l}ms`),e(r).Notify.success(`✅ Fulfilled promise ${o} in ${l}ms`)})).catch((({position:o,delay:l})=>{console.log(`❌ Rejected promise ${o} in ${l}ms`),e(r).Notify.failure(`❌ Rejected promise ${o} in ${l}ms`)})),l+=n;i.delayEl.value="",i.stepEl.value="",i.amountEl.value=""}));
//# sourceMappingURL=03-promises.80e3ae13.js.map
