(this["webpackJsonpcv-ui"]=this["webpackJsonpcv-ui"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(40),c=n.n(r),i=(n(49),n(43)),s=n(41);n(145);var u=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){fetch("https://cvt-2020.azurewebsites.net/report").then((function(e){e.json().then((function(e){r(e)}))})).catch((function(e){return console.error(e)}))})),a.a.createElement("div",{className:"App"},a.a.createElement(s.a,{data:{labels:n.map((function(e){return e.date})),datasets:[{data:n.map((function(e){return e.confirmed})),label:"Confirmados",borderColor:"#3333ff",fill:!0}]}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,n){e.exports=n(146)},49:function(e,t,n){}},[[44,1,2]]]);
//# sourceMappingURL=main.9d27a3b6.chunk.js.map