!function(){"use strict";var e,t,n,r,o,a,c,f={},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return f[e](n,n.exports,i),n.exports}i.m=f,e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var c=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[f])}))?n.splice(f--,1):(c=!1,o<a&&(a=o));c&&(e.splice(s--,1),t=r())}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(o,a),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({3:"component---src-pages-news-js",18:"component---src-pages-programmes-js",300:"component---src-pages-students-js",304:"component---src-pages-partners-js",351:"commons",501:"component---src-pages-contact-js",532:"styles",549:"component---src-pages-staff-js",678:"component---src-pages-index-js",682:"component---src-pages-about-js",853:"component---src-pages-projects-js",905:"component---src-pages-facilities-js",908:"component---src-pages-sponsors-js",941:"component---src-templates-programme-js"}[e]||e)+"-"+{3:"cc41210b596c8b8ae19e",18:"43bfda32731a313faf3e",175:"2b4db827516bf34adac5",231:"6c7686233521f2e51162",300:"4124c6b4cd2cbbea552d",304:"3d3f3d6031e83094f87e",351:"d4fa59729845c140e9b1",401:"91786d82a2b79c669b27",501:"84cdc2729e17bfc49fc9",532:"b0fdec28c7f3d462a9cd",549:"552f6121df86b7ab887e",678:"04b35f1e9d5593cb3192",682:"0ed850ddf221152ccf8d",853:"187a41172e946050e603",905:"d2b3d46ed1ecf4ac9104",908:"430112bab8646574b345",941:"42890a22c6ee5519fd47"}[e]+".js"},i.miniCssF=function(e){return"styles.d38d9cf35197c1b75002.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-hello-world:",i.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var c,f;if(void 0!==n)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+n){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),f&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",a=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=c,s.request=f,o.parentNode.removeChild(o),r(s)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},i.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=a(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0,532:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=i.p+i.u(t),c=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],f=n[2],s=0;for(r in c)i.o(c,r)&&(i.m[r]=c[r]);for(f&&f(i),t&&t(n);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0;i.O()},n=self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.O()}();
//# sourceMappingURL=webpack-runtime-e09682e2cb52cc691c55.js.map