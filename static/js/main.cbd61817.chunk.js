(this["webpackJsonpvillagers-of-animal-crossing-new-horizons"]=this["webpackJsonpvillagers-of-animal-crossing-new-horizons"]||[]).push([[0],{224:function(e,n,a){e.exports=a.p+"static/media/new-horizons-logo.ee6b4980.png"},225:function(e,n,a){e.exports=a(507)},240:function(e,n){},302:function(e,n){},318:function(e,n){},320:function(e,n){},506:function(e,n,a){},507:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(72),i=a.n(o),c=a(73),s=a(19),l=a(223),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=a(28),p=a(29),g=a(31),f=a(30),m=a(224),v=a.n(m),b=function(e){Object(g.a)(a,e);var n=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=n.call(this)).state={hasLogo:!0},e}return Object(p.a)(a,[{key:"shouldComponentUpdate",value:function(e,n){return this.state.hasLogo!==n.hasLogo}},{key:"render",value:function(){return r.a.createElement("div",{className:"logo-div"},r.a.createElement("header",null,r.a.createElement("img",{src:v.a,className:"logo",alt:"logo"})))}}]),a}(t.Component),E=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"search-div pa2"},r.a.createElement("input",{"aria-label":"Search Villagers",className:"pa2 ba bw3 br3 b--light-yellow bg-washed-yellow w5",type:"search",name:"",id:"searchInput",placeholder:"search villagers",onChange:n}))},w=function(e){var n=e.id,a=e.name,t=e.phrase;return r.a.createElement("div",{className:"navy bg-light-yellow dib br2 pa3 ma2 shadow-5 grow"},r.a.createElement("img",{className:"br2",src:"https://acnhapi.com/v1/images/villagers/".concat(n),alt:"image_of_".concat(a),loading:"lazy"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f3 ma2"},a),r.a.createElement("p",{className:"phrase f5 ma1 navy",style:{textTransform:"capitalize"}},'"',t,'"')))},y=function(e){var n=e.villagers;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(w,{key:e.id,id:e.id,name:e.name["name-EUen"],phrase:e["catch-phrase"]})})))},j=(a(235),function(e){Object(g.a)(a,e);var n=Object(f.a)(a);function a(){return Object(d.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log("HELLLOO"),this.props.onRequestVillagers()}},{key:"render",value:function(){var e=this.props,n=e.searchField,a=e.onSearchChange,t=e.apiData,o=e.isPending,i=Object.entries(t).map((function(e){return e[1]})).filter((function(e){return e.name["name-EUen"].toLowerCase().includes(n.toLowerCase())}));return o?r.a.createElement("h1",{className:"tc pa3 bg-light-yellow mid-gray"},"Hold on just a sec, OK?"):r.a.createElement("div",{className:"tc"},r.a.createElement(b,null),r.a.createElement(E,{searchChange:a}),r.a.createElement(y,{villagers:i}))}}]),a}(t.Component)),O=function(e){Object(g.a)(a,e);var n=Object(f.a)(a);function a(){return Object(d.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(j,this.props)}}]),a}(t.Component),P=Object(c.b)((function(e){return{searchField:e.searchFieldReducer.searchField,isPending:e.requestApiReducer.isPending,apiData:e.requestApiReducer.apiData,error:e.requestApiReducer.error}}),(function(e){return{onSearchChange:function(n){e({type:"INPUT_TEXT",payload:n.target.value})},onRequestVillagers:function(){return e((function(e){e({type:"REQUEST_API_PENDING"}),fetch("https://acnhapi.com/v1/villagers").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_API_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_API_FAILED",payload:n})}))}))}}}))(O),S=a(12),C={searchField:""},N={isPending:!1,apiData:[],error:""},k=Object(s.c)({searchFieldReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"INPUT_TEXT":return Object(S.a)(Object(S.a)({},e),{},{searchField:n.payload});default:return e}},requestApiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_API_PENDING":return Object(S.a)(Object(S.a)({},e),{},{isPending:!0});case"REQUEST_API_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{apiData:n.payload,isPending:!1});case"REQUEST_API_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),A=(a(505),a(506),Object(s.d)(k,Object(s.a)(l.a)));i.a.render(r.a.createElement(c.a,{store:A},r.a.createElement(P,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/animal-crossing-new-horizons",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/animal-crossing-new-horizons","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}},[[225,1,2]]]);
//# sourceMappingURL=main.cbd61817.chunk.js.map