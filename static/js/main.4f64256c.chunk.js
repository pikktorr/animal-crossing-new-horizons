(this["webpackJsonpvillagers-of-animal-crossing-new-horizons"]=this["webpackJsonpvillagers-of-animal-crossing-new-horizons"]||[]).push([[0],{15:function(e,n,a){e.exports=a.p+"static/media/new-horizons-logo.ee6b4980.png"},16:function(e,n,a){e.exports=a(29)},28:function(e,n,a){},29:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(3),i=a.n(o),c=a(6),s=a(2),l=a(14),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=a(4),p=a(5),g=a(8),m=a(7),f=a(15),v=a.n(f),b=function(e){Object(g.a)(a,e);var n=Object(m.a)(a);function a(){var e;return Object(h.a)(this,a),(e=n.call(this)).state={hasLogo:!0},e}return Object(p.a)(a,[{key:"shouldComponentUpdate",value:function(e,n){return this.state.hasLogo!==n.hasLogo}},{key:"render",value:function(){return r.a.createElement("div",{className:"logo-div"},r.a.createElement("header",null,r.a.createElement("img",{src:v.a,className:"logo",alt:"logo"})))}}]),a}(t.Component),w=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"search-div pa2"},r.a.createElement("input",{"aria-label":"Search Villagers",className:"pa2 ba bw3 br3 b--light-yellow bg-washed-yellow w5",type:"search",name:"",id:"searchInput",placeholder:"search villagers",onChange:n}))},E=function(e){var n=e.id,a=e.name,t=e.phrase;return r.a.createElement("div",{className:"navy bg-light-yellow dib br2 pa3 ma2 shadow-5 w50 grow"},r.a.createElement("img",{className:"br2 mw5",src:"https://acnhapi.com/images/villagers/".concat(n),alt:"image_of_".concat(a)}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f3 ma2"},a),r.a.createElement("p",{className:"phrase f5 ma1 navy",style:{textTransform:"capitalize"}},'"',t,'"')))},y=function(e){var n=e.villagers;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,name:e.name["name-en"],phrase:e["catch-phrase"]})})))},j=function(e){Object(g.a)(a,e);var n=Object(m.a)(a);function a(){return Object(h.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestVillagers()}},{key:"render",value:function(){var e=this.props,n=e.searchField,a=e.onSearchChange,t=e.apiData,o=e.isPending,i=Object.entries(t).map((function(e){return e[1]})).filter((function(e){return e.name["name-en"].toLowerCase().includes(n.toLowerCase())}));return o?r.a.createElement("h1",{className:"tc pa3 bg-light-yellow mid-gray"},"Hold on just a sec, OK?"):r.a.createElement("div",{className:"tc"},r.a.createElement(b,null),r.a.createElement(w,{searchChange:a}),r.a.createElement(y,{villagers:i}))}}]),a}(t.Component),O=Object(c.b)((function(e){return{searchField:e.searchFieldReducer.searchField,isPending:e.requestApiReducer.isPending,apiData:e.requestApiReducer.apiData,error:e.requestApiReducer.error}}),(function(e){return{onSearchChange:function(n){e({type:"INPUT_TEXT",payload:n.target.value})},onRequestVillagers:function(){return e((function(e){e({type:"REQUEST_API_PENDING"}),fetch("https://acnhapi.com/villagers").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_API_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_API_FAILED",payload:n})}))}))}}}))(j),P=a(1),S={searchField:""},N={isPending:!1,apiData:[],error:""},A=Object(s.c)({searchFieldReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"INPUT_TEXT":return Object(P.a)(Object(P.a)({},e),{},{searchField:n.payload});default:return e}},requestApiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_API_PENDING":return Object(P.a)(Object(P.a)({},e),{},{isPending:!0});case"REQUEST_API_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{apiData:n.payload,isPending:!1});case"REQUEST_API_FAILED":return Object(P.a)(Object(P.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),C=(a(27),a(28),Object(s.d)(A,Object(s.a)(l.a)));i.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/animal-crossing-new-horizons",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/animal-crossing-new-horizons","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.4f64256c.chunk.js.map