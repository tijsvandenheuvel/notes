(function(e){function t(t){for(var a,s,r=t[0],l=t[1],i=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},s={app:0},o={app:0},c=[];function r(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d05226bd","chunk-2d0ac41c":"058ab368"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"ad00ce3b","chunk-2d0ac41c":"31d6cfe0"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var i=c[r],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){i=d[r],u=i.getAttribute("data-href");if(u===a||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],b.parentNode.removeChild(b),n(c)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/notes/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"024a":function(e,t,n){},"14fd":function(e,t,n){"use strict";n("86b6")},2885:function(e,t,n){},"369b":function(e,t,n){"use strict";n("ab2c")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const s={id:"nav"},o={id:"main"};function c(e,t,n,c,r,l){const i=Object(a["z"])("Nav"),u=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",s,[Object(a["h"])(i)]),Object(a["f"])("div",o,[Object(a["h"])(u)])],64)}const r={class:"nav"},l={class:"nav-router-links"},i={class:"nav-buttons"};function u(e,t,n,s,o,c){const u=Object(a["z"])("router-link");return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["f"])("div",l,[Object(a["h"])(u,{to:"/"},{default:Object(a["F"])(()=>[Object(a["g"])("Notes")]),_:1}),Object(a["h"])(u,{to:"/about"},{default:Object(a["F"])(()=>[Object(a["g"])("About")]),_:1})]),Object(a["f"])("div",i,[e.$store.state.userIsAuthenticated?Object(a["d"])("",!0):(Object(a["s"])(),Object(a["e"])("a",{key:0,class:"menu-button",onClick:t[0]||(t[0]=t=>e.$store.dispatch("auth0Login"))},"Log in")),e.$store.state.userIsAuthenticated?(Object(a["s"])(),Object(a["e"])("a",{key:1,class:"menu-button",onClick:t[1]||(t[1]=t=>e.$store.dispatch("auth0Logout"))},"Log out")):Object(a["d"])("",!0)])])}var d={name:"Nav"},b=(n("14fd"),n("6b0d")),h=n.n(b);const p=h()(d,[["render",u]]);var O=p,f={name:"App",components:{Nav:O},mounted(){}};n("f049");const j=h()(f,[["render",c]]);var m=j,g=n("6605");const k={class:"home"};function v(e,t,n,s,o,c){const r=Object(a["z"])("Notes");return Object(a["s"])(),Object(a["e"])("div",k,[Object(a["h"])(r)])}var _=n("f125");const y={key:0};function N(e,t,n,s,o,c){return e.$store.state.all.length>0?(Object(a["s"])(!0),Object(a["e"])(a["a"],{key:0},Object(a["y"])(e.$store.state.all,(t,n)=>(Object(a["s"])(),Object(a["e"])("div",null,[0==n||e.$store.state.all[n-1]&&t.createdAt.substr(0,10)!=e.$store.state.all[n-1].createdAt.substr(0,10)?(Object(a["s"])(),Object(a["e"])("h3",y,Object(a["B"])(t.createdAt.substr(0,10)),1)):Object(a["d"])("",!0),Object(a["g"])(" "+Object(a["B"])(t.I),1)]))),256)):Object(a["d"])("",!0)}var S={};const w=h()(S,[["render",N]]);var A=w,I={name:"Home",components:{Notes:_["a"],ListByDate:A}};const T=h()(I,[["render",v]]);var L=T,C=(n("14d9"),n("5502"));const D=(e,t,n,a)=>{localStorage.getItem("access_token")||console.log("no access token");var s=new XMLHttpRequest;s.open(e,t,!0),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Authorization","Bearer "+localStorage.getItem("access_token")),s.send(n),s.onreadystatechange=()=>{4==s.readyState&&"200"==s.status&&a(s.responseText)}};function $(e,t){const n=JSON.stringify({ids:e});D("POST","https://dinges-app.herokuapp.com/dinges/get",n,e=>{t(JSON.parse(e))})}function U(e,t){D("POST","https://dinges-app.herokuapp.com/ding",JSON.stringify(e),e=>{t(JSON.parse(e))})}function B(e,t){e.updatedAt=(new Date).toISOString(),D("PUT","https://dinges-app.herokuapp.com/ding/"+e._id,JSON.stringify(e),e=>{t(JSON.parse(e))})}function E(e,t){const n=JSON.stringify({email:e});D("POST","https://dinges-app.herokuapp.com/user/get",n,e=>{let n=JSON.parse(e);t(n||null)})}function P(e,t){const n=JSON.stringify({username:e});D("POST","https://dinges-app.herokuapp.com/user/name_check",n,e=>{let n="true"===e;t(n)})}function x(e,t,n){console.log(t);const a={email:e,username:t,O:[]};D("POST","https://dinges-app.herokuapp.com/user",JSON.stringify(a),e=>{n(e)})}function H(e,t){D("PUT","https://dinges-app.herokuapp.com/user/"+e._id,JSON.stringify(e),e=>{t(e)})}var J=n("b0af"),z=Object(C["a"])({state:{auth0:new J["a"].WebAuth({domain:"tijs-app.eu.auth0.com",clientID:"h2xPpZy7MyMG9Q1ZnjBofEZxF0dHUHDZ",redirectUri:"https://tijsvandenheuvel.github.io/notes/auth0callback",responseType:"token id_token",scope:"openid profile email",audience:"https://dinges-api"}),userIsAuthenticated:!1,userEmail:null,userData:null,userToBeCreated:!1,userNameAvailable:!0,all:[]},mutations:{setUserIsAuthenticated(e,t){e.userIsAuthenticated=t},getAllFromUserData(e){$(e.userData.O,t=>{e.all=t})},createNote(e,{note:t,callback:n}){let a={I:t,O:[]};U(a,t=>{e.all.push(t),e.userData.O.push(t._id),H(e.userData,()=>{}),n(t)})}},actions:{auth0Login(e){e.state.auth0.authorize()},auth0HandleAuthentication(e){e.state.auth0.parseHash((t,n)=>{if(n&&n.accessToken&&n.idToken){let a=JSON.stringify((new Date).getTime()+1e3*n.expiresIn);localStorage.setItem("access_token",n.accessToken),localStorage.setItem("id_token",n.idToken),localStorage.setItem("expires_at",a),e.dispatch("auth0getUserEmail"),F.replace("/"),t&&(alert("login failed"),F.replace("/"),console.log(t))}})},auth0getUserEmail(e){localStorage.getItem("access_token")&&e.state.auth0.client.userInfo(localStorage.getItem("access_token"),(function(t,n){n&&(e.state.userEmail=n.email)}))},auth0Logout(e){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),window.location.href="https://tijs-app.eu.auth0.com/v2/logout?returnTo=https://tijsvandenheuvel.github.io/notes&client_id=h2xPpZy7MyMG9Q1ZnjBofEZxF0dHUHDZ"},checkUserNameAvailabilityAndTrySave(e,t){P(t,n=>{e.state.userNameAvailable=n,n&&x(e.state.userEmail,t,()=>{e.state.userToBeCreated=!1,e.dispatch("init")})})},init(e){localStorage.getItem("access_token")&&E(e.state.userEmail,t=>{t?(e.state.userData=t,e.commit("getAllFromUserData")):(e.state.userToBeCreated=!0,console.log("creating user"))})},updateNote(e,{note:t,callback:n}){B(t,t=>{e.dispatch("init",()=>{}),n(t)})},getOrCreateDingByValue(e,{val:t,callback:n}){let a=e.state.all.find(e=>e.I.toLowerCase().replace("?","")==t.toLowerCase().replace("?",""));if(0==e.state.all.length)console.log("no state"),n(null);else if(a)n(a);else{let a=e.state.all.find(e=>e._id==t);a?n(a):e.commit("createNote",{note:t,callback:e=>{n(e)}})}},addLinkToNote(e,{note:t,link:n,callback:a}){e.dispatch("getOrCreateDingByValue",{val:n,callback:n=>{let s={};s["link"]=n._id,t.O.push(s),e.dispatch("updateNote",{note:t,callback:e=>{a()}})}})}},modules:{}});const M=[{path:"/",name:"Home",component:L},{path:"/auth0callback",component:L},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/notes",name:"Notes",component:()=>n.e("chunk-2d0ac41c").then(n.bind(null,"1986"))}],Z=Object(g["a"])({history:Object(g["b"])("/notes/"),routes:M});Z.beforeEach((e,t,n)=>{e.matched.some(e=>"/auth0callback"==e.path)&&z.dispatch("auth0HandleAuthentication");let a=!1;if(localStorage.getItem("access_token")&&localStorage.getItem("id_token")&&localStorage.getItem("expires_at")){let e=JSON.parse(localStorage.getItem("expires_at"));a=(new Date).getTime()<e}z.commit("setUserIsAuthenticated",a),e.matched.some(e=>e.meta.requiresAuth)?a?(z.commit("setUserIsAuthenticated",!0),n()):Z.replace("/"):n()});var F=Z;Object(a["c"])(m).use(z).use(F).mount("#app")},"684c":function(e,t,n){},"86b6":function(e,t,n){},ab2c:function(e,t,n){},ab6f:function(e,t,n){},ca38:function(e,t,n){"use strict";n("ab6f")},caa6:function(e,t,n){"use strict";n("684c")},e8df:function(e,t,n){"use strict";n("2885")},f049:function(e,t,n){"use strict";n("024a")},f125:function(e,t,n){"use strict";var a=n("7a23");const s={key:0,class:"notes"},o={class:"user"},c={key:0,class:"user-data"},r={key:1,class:"create-user"};function l(e,t,n,l,i,u){const d=Object(a["z"])("CreateUser"),b=Object(a["z"])("NotesList"),h=Object(a["z"])("NewNote");return e.$store.state.userIsAuthenticated&&this.$store.state.userEmail?(Object(a["s"])(),Object(a["e"])("div",s,[Object(a["f"])("div",o,[e.$store.state.userData?(Object(a["s"])(),Object(a["e"])("div",c,[Object(a["f"])("h2",null,"Hello "+Object(a["B"])(e.$store.state.userData.username),1)])):Object(a["d"])("",!0),e.$store.state.userToBeCreated?(Object(a["s"])(),Object(a["e"])("div",r,[Object(a["h"])(d)])):Object(a["d"])("",!0)]),Object(a["h"])(b),Object(a["h"])(h)])):Object(a["d"])("",!0)}const i=e=>(Object(a["v"])("data-v-64923c0c"),e=e(),Object(a["t"])(),e),u=i(()=>Object(a["f"])("br",null,null,-1)),d=i(()=>Object(a["f"])("span",null,"Choose a Username: ",-1)),b=i(()=>Object(a["f"])("br",null,null,-1)),h=i(()=>Object(a["f"])("br",null,null,-1)),p={key:0,id:"warning"},O=i(()=>Object(a["f"])("br",null,null,-1)),f=i(()=>Object(a["f"])("br",null,null,-1)),j=i(()=>Object(a["f"])("br",null,null,-1));function m(e,t,n,s,o,c){return Object(a["s"])(),Object(a["e"])(a["a"],null,[u,d,b,Object(a["G"])(Object(a["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.userName=e),onKeyup:t[1]||(t[1]=Object(a["H"])(e=>c.trySave(),["enter"]))},null,544),[[a["D"],o.userName]]),h,Object(a["f"])("button",{class:"btn",onClick:t[2]||(t[2]=e=>c.trySave())},"Save"),e.$store.state.userNameAvailable?Object(a["d"])("",!0):(Object(a["s"])(),Object(a["e"])("div",p,[O,Object(a["g"])(" This username is unavailable ")])),f,j],64)}var g={data(){return{userName:"",userNameAvailable:!0}},methods:{trySave(){this.$store.dispatch("checkUserNameAvailabilityAndTrySave",this.userName)}}},k=(n("e8df"),n("6b0d")),v=n.n(k);const _=v()(g,[["render",m],["__scopeId","data-v-64923c0c"]]);var y=_;const N={class:"notes-list"},S=["onClick"],w={class:"active-note-line"},A={class:"note-text"},I=["onUpdate:modelValue","onKeypress"],T={key:1},L={key:0,class:"note-buttons"};function C(e,t,n,s,o,c){const r=Object(a["z"])("LinkList");return e.$store.state.all.length>0?(Object(a["s"])(!0),Object(a["e"])(a["a"],{key:0},Object(a["y"])(e.$store.state.all,(e,n)=>(Object(a["s"])(),Object(a["e"])("div",N,[Object(a["f"])("div",{class:Object(a["o"])(["card",{active:e==o.selected_note}]),onClick:t=>c.select(e)},[Object(a["f"])("div",w,[Object(a["f"])("span",A,[e==o.selected_note?Object(a["G"])((Object(a["s"])(),Object(a["e"])("input",{key:0,class:"edit-note-input","onUpdate:modelValue":t=>e.I=t,onKeypress:Object(a["H"])(t=>c.editNote(e),["enter"])},null,40,I)),[[a["D"],e.I]]):(Object(a["s"])(),Object(a["e"])("span",T,Object(a["B"])(e.I),1))]),e==o.selected_note?(Object(a["s"])(),Object(a["e"])("span",L,[Object(a["f"])("button",{class:"add-button",onClick:t[0]||(t[0]=e=>c.toggleAddingLink())}," + ")])):Object(a["d"])("",!0)]),Object(a["h"])(r,{toAdd:e==o.selected_note&&o.add_link_to_selected_note,note:e},null,8,["toAdd","note"])],10,S)]))),256)):Object(a["d"])("",!0)}const D={class:"active-note-links"},$={class:"links-list"},U={key:0,class:"links-list"};function B(e,t,n,s,o,c){return Object(a["s"])(),Object(a["e"])("div",D,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(n.note.O,e=>(Object(a["s"])(),Object(a["e"])("div",$,[Object(a["f"])("li",null,Object(a["B"])(c.getDingByLink(e).I),1)]))),256)),n.toAdd?(Object(a["s"])(),Object(a["e"])("li",U,[Object(a["G"])(Object(a["f"])("input",{class:"new-link-input","onUpdate:modelValue":t[0]||(t[0]=e=>o.new_link=e),onKeypress:t[1]||(t[1]=Object(a["H"])(e=>c.AddLinkToSelectedNote(),["enter"]))},null,544),[[a["D"],o.new_link]])])):Object(a["d"])("",!0)])}var E={props:["note","toAdd"],data(){return{new_link:""}},methods:{getDingByLink(e){var t;let n=Object.values(e)[0],a=null!==(t=this.$store.state.all.filter(e=>e._id==n)[0])&&void 0!==t?t:{I:"! "+n};return"!"==a.I[0]?(console.log("ding not found"),!1):a},AddLinkToSelectedNote(){this.note&&this.new_link.length>0&&this.$store.dispatch("addLinkToNote",{note:this.note,link:this.new_link,callback:e=>{this.new_link=""}})}}};n("369b");const P=v()(E,[["render",B]]);var x=P,H={components:{LinkList:x},data(){return{selected_note:null,add_link_to_selected_note:!1,new_link:""}},methods:{getDingByLink(e){var t;let n=Object.values(e)[0],a=null!==(t=this.$store.state.all.filter(e=>e._id==n)[0])&&void 0!==t?t:{I:"! "+n};return"!"==a.I[0]?(console.log("ding not found"),!1):a},select(e){this.selected_note!=e&&(this.selected_note=e,this.add_link_to_selected_note=!1)},deselect(){this.selected_note=null},editNote(e){this.$store.dispatch("updateNote",{note:e,callback:e=>{}}),this.deselect()},toggleAddingLink(){this.add_link_to_selected_note=!this.add_link_to_selected_note,console.log(this.add_link_to_selected_note)},AddLinkToSelectedNote(){this.selected_note&&this.new_link.length>0&&this.$store.dispatch("addLinkToNote",{note:this.selected_note,link:this.new_link,callback:e=>{this.new_link=""}})}},mounted(){this.$store.dispatch("init")}};n("caa6");const J=v()(H,[["render",C]]);var z=J;const M={class:"new-note"};function Z(e,t,n,s,o,c){return Object(a["s"])(),Object(a["e"])("div",M,[Object(a["G"])(Object(a["f"])("input",{class:"new-note-input","onUpdate:modelValue":t[0]||(t[0]=e=>o.new_note=e),onClick:t[1]||(t[1]=e=>c.deselect()),onKeypress:t[2]||(t[2]=Object(a["H"])(e=>c.createNote(),["enter"]))},null,544),[[a["D"],o.new_note]])])}var F={data(){return{new_note:""}},methods:{deselect(){},createNote(){this.new_note.length>0&&(this.$store.commit("createNote",{note:this.new_note,callback:e=>{}}),this.new_note="")}}};n("ca38");const V=v()(F,[["render",Z]]);var q=V,G={name:"Notes",components:{CreateUser:y,NotesList:z,NewNote:q},data(){return{}},methods:{},beforeCreate(){this.$store.state.userIsAuthenticated&&(this.$store.state.userEmail||this.$store.dispatch("auth0getUserEmail"))}};const K=v()(G,[["render",l]]);t["a"]=K}});
//# sourceMappingURL=app.f90510b3.js.map