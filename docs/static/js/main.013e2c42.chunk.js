(this["webpackJsonpstock-system"]=this["webpackJsonpstock-system"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,u,l,d,b,j,p,x,m,f,h,O,g,v,y,k,w,N,S,C=n(1),I=n.n(C),E=n(21),L=n.n(E),A=n(3),T=n(4),R=n(7),F=n(10),D=n.n(F),P=n(5),U=n(0),J=function(e){var t=Object(C.useState)(""),n=Object(R.a)(t,2),r=n[0],c=n[1],a=Object(C.useState)(""),s=Object(R.a)(a,2),i=s[0],o=s[1],u=Object(P.f)();return Object(U.jsxs)(M,{className:D()(e.className),children:[Object(U.jsxs)("header",{className:"flex flex-col gap-5 justify-center",children:[Object(U.jsx)("h1",{className:"mx-auto text-4xl font-bold",children:"Iniciar Sesi\xf3n"}),Object(U.jsx)("p",{className:"mx-auto font-semibold",children:"Ingrese para continuar"})]}),Object(U.jsx)("form",{className:"flex justify-center  mt-5",children:Object(U.jsxs)("div",{className:"flex flex-col w-4/5 md:w-1/2 gap-4",children:[Object(U.jsx)(B,{children:"USUARIO"}),Object(U.jsx)(G,{value:r,onChange:function(e){c(e.target.value)},type:"text"}),Object(U.jsx)(B,{children:"CONTRASE\xd1A"}),Object(U.jsx)(G,{value:i,onChange:function(e){o(e.target.value)},type:"password"}),Object(U.jsx)("button",{disabled:!i||!r,type:"submit",onClick:function(){"Joan"===r&&"123456"===i&&u.push("/menu")},className:"bg-gray-200 text-red-500 font-semibold px-10 py-2 mx-auto",children:"Log In"})]})})]})},M=T.a.div(r||(r=Object(A.a)(["\n  min-width: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n"]))),G=T.a.input(c||(c=Object(A.a)(["\n  padding: 8px 5px;\n  border-radius: 3px;\n  border: 1px solid black;\n  background-color: #eee;\n  outline: none;\n"]))),B=T.a.label(a||(a=Object(A.a)(["\n  font-weight: 500;\n"]))),H=function(e){return Object(U.jsxs)(V,{className:D()(e.className),children:[Object(U.jsxs)("header",{className:"flex flex-col gap-5 justify-center",children:[Object(U.jsx)("img",{alt:"logo",src:"https://i.ibb.co/RSnN3tK/lockdown2.png",className:"h-16 w-11 self-center"}),Object(U.jsx)("h1",{className:"text-center mx-auto text-4xl sm:w-1/2 w-4/5 font-bold",children:"\xbfTienes problemas para entrar?"}),Object(U.jsx)("p",{className:"text-center mx-auto sm:w-1/2 w-4/5 font-semibold",children:"Introduce tu correo electr\xf3nico y te enviaremos un enlace para que vuelvas a entrar a tu cuenta"})]}),Object(U.jsx)("form",{className:"flex justify-center mt-8",children:Object(U.jsxs)("div",{className:"flex flex-col justify-center w-2/5 md:w-1/3 gap-4",children:[Object(U.jsx)(z,{children:"EMAIL"}),Object(U.jsx)(q,{type:"text"}),Object(U.jsx)("button",{type:"submit",className:"bg-gray-200 text-red-500 rounded-lg font-semibold px-10 py-2 mx-auto",children:"Enviar enlace"})]})})]})},V=T.a.div(s||(s=Object(A.a)(["\n  min-width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n"]))),q=T.a.input(i||(i=Object(A.a)(["\n  padding: 8px 5px;\n  border-radius: 0.5rem;\n  border: 1px solid black;\n  background-color: #eee;\n  outline: none;\n"]))),z=T.a.label(o||(o=Object(A.a)(["\n  font-weight: 500;\n"]))),K=function(e){var t=Object(P.f)();return Object(U.jsx)("img",{onClick:function(){return t.push("/")},alt:"logo",className:D()("h-4/5 cursor-pointer",e.className),src:"https://i.ibb.co/pf5Xsdn/stock-system.png"})},X=function(e){return Object(U.jsx)(Q,{className:D()(e.className),children:e.children})},Q=T.a.div(u||(u=Object(A.a)(["\n  background-color: black;\n  width: 100%;\n  height: 12vh;\n  border-bottom: solid white 2px;\n"]))),W=function(){var e=Object(C.useState)("\xbfHas olvidado la contrase\xf1a?"),t=Object(R.a)(e,2),n=t[0],r=t[1],c="Volver al inicio de sesi\xf3n"===n;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(X,{className:"flex flex-row-reverse items-center",children:Object(U.jsx)(K,{className:"mr-8"})}),Object(U.jsxs)(Y,{className:"flex flex-col items-center justify-center",children:[c?Object(U.jsx)(H,{}):Object(U.jsx)(J,{}),Object(U.jsx)("button",{onClick:function(){c?(r("\xbfHas olvidado la contrase\xf1a?"),c=!1,console.log(c)):(r("Volver al inicio de sesi\xf3n"),c=!0,console.log(c))},className:"hover:text-blue-600 mx-auto mt-5 font-semibold",children:n})]})]})},Y=T.a.div(l||(l=Object(A.a)(["\n  width: 100%;\n  height: 88vh;\n"]))),Z=n(2),$=n.n(Z),_=n(6),ee=function(e){return Object(U.jsx)(te,{className:D()(e.className),children:e.children})},te=T.a.div(d||(d=Object(A.a)(["\n  display: flex;\n  height: 5vh;\n  border-bottom: solid grey 1px;\n\n  button + button {\n    border-left: solid grey 1px;\n  }\n"]))),ne=function(e){return Object(U.jsx)(re,{className:D()(e.className),onClick:e.onClick,children:e.children})},re=T.a.button(b||(b=Object(A.a)(["\n  width: 100%;\n"]))),ce="https://stock-system-backend.herokuapp.com/api/products/",ae=function(){var e=Object(_.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ce);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ce).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(_.a)($.a.mark((function e(t,n){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ce).concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({name:String(n.name).trim(),price:Number(n.price),description:String(n.description).trim(),provider:String(n.provider).trim(),brand:String(n.brand).trim(),color:String(n.color).trim()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify({name:String(t.name).trim(),price:Number(t.price),description:String(t.description).trim(),provider:String(t.provider).trim(),brand:String(t.brand).trim(),color:String(t.color).trim()})),e.next=3,fetch(ce,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:String(t.name).trim(),price:Number(t.price),description:String(t.description).trim(),provider:String(t.provider).trim(),brand:String(t.brand).trim(),color:String(t.color).trim()})});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ce).concat(t),{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le="https://stock-system-backend.herokuapp.com/api/users/",de=function(){var e=Object(_.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(le);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(le).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(_.a)($.a.mark((function e(t,n){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(le).concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({name:String(n.name).trim(),lastName:String(n.lastName).trim(),userType:String(n.userType).trim(),store:String(n.store).trim(),date:String(n.date).trim()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pe=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(le,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:String(t.name).trim(),lastName:String(t.lastName).trim(),userType:String(t.userType).trim(),store:String(t.store).trim(),date:String(t.date).trim()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(le).concat(t),{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(e){var t=e.getId,n=e.list,r=e.colNames;return Object(C.useEffect)((function(){for(var e,t=0;t<=25;t++)null!=(e=document.getElementById(t))&&(e.style.backgroundColor="rgb(236, 236, 236)")}),[n]),Object(U.jsx)("div",{style:{width:"100%"},children:Object(U.jsxs)(Oe,{cellSpacing:"0",children:[Object(U.jsx)("thead",{style:{width:"100%"},children:Object(U.jsx)("tr",{children:r.map((function(e,t){return Object(U.jsx)(he,{children:e.toUpperCase()},t)}))})}),Object(U.jsx)("tbody",{style:{width:"100%"},children:Object.values(n).map((function(e,n){return Object(U.jsx)(fe,{onClick:function(){!function(e){var n;t(e);for(var r=0;r<=25;r++)if(null!=(n=document.getElementById(r))){var c=r.toString();n.style.backgroundColor=c===e?"grey":"rgb(236, 236, 236)"}}(e.id)},id:e.id,children:Object.values(e).map((function(e,t){return Object(U.jsx)("td",{children:e},t)}))},n)}))})]})})},fe=T.a.tr(j||(j=Object(A.a)(["\n  cursor: pointer;\n  text-align: center;\n  &:hover {\n    background-color: grey;\n  }\n"]))),he=T.a.th(p||(p=Object(A.a)(["\n  color: red;\n  border: 1px solid grey;\n  border-top: 0px;\n  padding: 3px 0;\n  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n"]))),Oe=T.a.table(x||(x=Object(A.a)(["\n  height: auto;\n  width: 100%;\n  padding: 5px 10px;\n"]))),ge=n(13),ve=n(14),ye=function(e){var t=e.displayForm,n=e.productsList,r=e.initialState,c={id:0,name:"",description:"",provider:"",brand:"",price:0,color:"",edit:!1},a=Object(C.useState)(r),s=Object(R.a)(a,2),i=s[0],o=s[1],u=function(e){o(Object(ve.a)(Object(ve.a)({},i),{},Object(ge.a)({},e.target.name,e.target.value)))};Object(C.useEffect)((function(){o(r)}),[r]);var l=function(){var e=Object(_.a)($.a.mark((function e(t){var r,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!i.edit){e.next=19;break}return e.prev=2,e.next=5,ie(i.id,i);case 5:return r=e.sent,e.next=8,r.json();case 8:if("Success"!==e.sent.message){e.next=12;break}return e.next=12,n();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:e.next=35;break;case 19:return e.prev=19,e.next=22,oe(i);case 22:return a=e.sent,e.next=25,a.json();case 25:if("Success"!==e.sent.message){e.next=30;break}return o(c),e.next=30,n();case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(19),console.log(e.t1);case 35:case"end":return e.stop()}}),e,null,[[2,14],[19,32]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:t&&Object(U.jsx)(we,{children:Object(U.jsxs)("form",{className:"flex flex-col items-center",onSubmit:l,children:[Object(U.jsxs)("div",{className:"grid grid-cols-4 w-11/12 gap-y-4 gap-x-3 items-center",children:[Object(U.jsx)(Se,{children:"Nombre"}),Object(U.jsx)(Ne,{name:"name",type:"text",onChange:u,value:i.name,maxLength:"50"}),Object(U.jsx)(Se,{children:"Proveedor"}),Object(U.jsx)(Ne,{name:"provider",type:"text",onChange:u,value:i.provider,maxLength:"50"}),Object(U.jsx)(Se,{children:"Descripcion"}),Object(U.jsx)(Ne,{name:"description",type:"text",onChange:u,value:i.description,maxLength:"50"}),Object(U.jsx)(Se,{children:"Marca"}),Object(U.jsx)(Ne,{name:"brand",type:"text",onChange:u,value:i.brand,maxLength:"50"}),Object(U.jsx)(Se,{children:"Color"}),Object(U.jsx)(Ne,{name:"color",type:"text",onChange:u,value:i.color,maxLength:"50"}),Object(U.jsx)(Se,{children:"Precio"}),Object(U.jsx)(Ne,{name:"price",type:"number",onChange:u,value:i.price})]}),Object(U.jsx)("button",{type:"submit",className:"mt-4 rounded-full bg-gray-200 font-semibold px-10 py-2 mx-auto",children:"Enviar"})]})})})},ke=function(e){var t=e.displayForm,n=e.usersList,r=e.initialState,c={id:0,name:"",lastName:"",userType:"",store:"",date:"",edit:!1},a=Object(C.useState)(r),s=Object(R.a)(a,2),i=s[0],o=s[1],u=function(e){o(Object(ve.a)(Object(ve.a)({},i),{},Object(ge.a)({},e.target.name,e.target.value)))};Object(C.useEffect)((function(){o(r)}),[r]);var l=function(){var e=Object(_.a)($.a.mark((function e(t){var r,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!i.edit){e.next=19;break}return e.prev=2,e.next=5,je(i.id,i);case 5:return r=e.sent,e.next=8,r.json();case 8:if("Success"!==e.sent.message){e.next=12;break}return e.next=12,n();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:e.next=37;break;case 19:return e.prev=19,console.log("Pas\xf3"),console.log(i),e.next=24,pe(i);case 24:return a=e.sent,e.next=27,a.json();case 27:if("Success"!==e.sent.message){e.next=32;break}return o(c),e.next=32,n();case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(19),console.log(e.t1);case 37:case"end":return e.stop()}}),e,null,[[2,14],[19,34]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:t&&Object(U.jsx)(we,{children:Object(U.jsxs)("form",{className:"flex flex-col items-center",onSubmit:l,children:[Object(U.jsxs)("div",{className:"grid grid-cols-4 w-11/12 gap-y-4 gap-x-3 items-center",children:[Object(U.jsx)(Se,{children:"Nombre"}),Object(U.jsx)(Ne,{name:"name",type:"text",onChange:u,value:i.name,maxLength:"20"}),Object(U.jsx)(Se,{children:"Apellido"}),Object(U.jsx)(Ne,{name:"lastName",type:"text",onChange:u,value:i.lastName,maxLength:"20"}),Object(U.jsx)(Se,{children:"Usuario"}),Object(U.jsx)(Ne,{name:"userType",type:"text",onChange:u,value:i.userType,maxLength:"10"}),Object(U.jsx)(Se,{children:"Sucursal"}),Object(U.jsx)(Ne,{name:"store",type:"text",onChange:u,value:i.store,maxLength:"10"}),Object(U.jsx)(Se,{children:"Fecha Alta"}),Object(U.jsx)(Ne,{name:"date",type:"text",onChange:u,value:i.date,maxLength:"10"})]}),Object(U.jsx)("button",{type:"submit",className:"mt-4 rounded-full bg-gray-200 font-semibold px-10 py-2 mx-auto",children:"Enviar"})]})})})},we=T.a.div(m||(m=Object(A.a)(["\n  width: 99%;\n  background: linear-gradient(\n    90deg,\n    rgba(93, 93, 93, 1) 0%,\n    rgba(107, 107, 107, 1) 58%,\n    rgba(142, 142, 142, 1) 100%\n  );\n  padding: 15px 10px;\n  height: 60%;\n  border: 1px solid grey;\n  border-radius: 10px;\n  align-items: center;\n  display: flex;\n"]))),Ne=T.a.input(f||(f=Object(A.a)(["\n  padding: 4px;\n  width: 100%;\n  border-radius: 3px;\n  border: 1px solid black;\n  background-color: #eee;\n  outline: none;\n"]))),Se=T.a.label(h||(h=Object(A.a)(["\n  font-weight: 500;\n"]))),Ce=function(e){return Object(U.jsx)(Ie,{onClick:e.onClick,children:e.children})},Ie=T.a.button(O||(O=Object(A.a)(["\n  border-radius: 3rem;\n  background-color: rgb(202, 202, 202);\n  padding: 0.5rem 3rem;\n\n  &:hover {\n    background-color: rgb(236, 236, 236);\n  }\n"]))),Ee=function(){var e,t={id:0,name:"",description:"",provider:"",brand:"",price:0,color:"",edit:!1},n={id:0,name:"",lastName:"",userType:"",store:"",date:"",edit:!1},r=Object(C.useState)(t),c=Object(R.a)(r,2),a=c[0],s=c[1],i=Object(C.useState)(n),o=Object(R.a)(i,2),u=o[0],l=o[1],d=Object(C.useState)(0),b=Object(R.a)(d,2),j=b[0],p=b[1],x=Object(C.useState)(!1),m=Object(R.a)(x,2),f=m[0],h=m[1],O=Object(C.useState)([]),g=Object(R.a)(O,2),v=g[0],y=g[1],k=Object(C.useState)([]),w=Object(R.a)(k,2),N=w[0],S=w[1],I=function(){var e=Object(_.a)($.a.mark((function e(){var t,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae();case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,y(n.products),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(_.a)($.a.mark((function e(){var t,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de();case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,S(n.users),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),L=function(t){e=t},A=function(){var e=Object(_.a)($.a.mark((function e(t){var n,r,c,a,i,o;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=13;break}if(null===t&&void 0===t){e.next=11;break}return e.next=4,se(t);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,(c=r.products).edit=!0,s(c);case 11:e.next=27;break;case 13:if(null===t&&void 0===t){e.next=26;break}return e.next=16,se(t);case 16:return a=e.sent,e.next=19,a.json();case 19:i=e.sent,(o=i.products).edit=!0,s(o),h(!0),e.next=27;break;case 26:h(!0);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t&&void 0===t){e.next=5;break}return e.next=3,ue(t);case 3:return e.next=5,I();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(_.a)($.a.mark((function e(t){var n,r,c,a,s,i;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=13;break}if(null===t&&void 0===t){e.next=11;break}return e.next=4,be(t);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,(c=r.users).edit=!0,l(c);case 11:e.next=27;break;case 13:if(null===t&&void 0===t){e.next=26;break}return e.next=16,be(t);case 16:return a=e.sent,e.next=19,a.json();case 19:s=e.sent,(i=s.users).edit=!0,l(i),h(!0),e.next=27;break;case 26:h(!0);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(_.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t&&void 0===t){e.next=6;break}return console.log(t),e.next=4,xe(t);case 4:return e.next=6,E();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(X,{className:"flex flex-row-reverse items-center",children:Object(U.jsx)(K,{className:"mr-8"})}),Object(U.jsxs)(Re,{children:[Object(U.jsxs)(Fe,{children:[Object(U.jsxs)(ee,{children:[Object(U.jsx)(ne,{onClick:Object(_.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:p(1);case 3:case"end":return e.stop()}}),e)}))),className:"focus:bg-gray-200 bg-gray-500 hover:bg-gray-300 text-black font-bold",children:"USUARIOS"}),Object(U.jsx)(ne,{onClick:Object(_.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:p(2);case 3:case"end":return e.stop()}}),e)}))),className:"focus:bg-gray-200 bg-gray-500 hover:bg-gray-300 text-black font-bold",children:"PRODUCTOS"})]}),1===j?Object(U.jsxs)(Te,{children:[Object(U.jsx)(Le,{className:"mx-auto mt-14 w-1/2 sm:w-1/4",children:Object(U.jsxs)(Ae,{children:[Object(U.jsx)(Ce,{onClick:function(){f?l(n):h(!0)},children:"AGREGAR"}),Object(U.jsx)(Ce,{onClick:function(){F(e)},children:"MODIFICAR"}),Object(U.jsx)(Ce,{onClick:function(){D(e)},children:"ELIMINAR"})]})}),Object(U.jsx)(ke,{initialState:u,displayForm:f,usersList:E})]}):2===j?Object(U.jsxs)(Te,{children:[Object(U.jsx)(Le,{className:"mx-auto mt-14 w-1/2 sm:w-1/4",children:Object(U.jsxs)(Ae,{children:[Object(U.jsx)(Ce,{onClick:function(){f?s(t):h(!0)},children:"AGREGAR"}),Object(U.jsx)(Ce,{onClick:function(){A(e)},children:"MODIFICAR"}),Object(U.jsx)(Ce,{onClick:function(){T(e)},children:"ELIMINAR"})]})}),Object(U.jsx)(ye,{initialState:a,displayForm:f,productsList:I})]}):null]}),Object(U.jsx)(De,{children:1===j?Object(U.jsx)(me,{list:N,getId:L,colNames:["ID","Nombre","Apellido","Usuario","Sucursal","Fecha Alta"]}):2===j?Object(U.jsx)(me,{list:v,getId:L,colNames:["ID","Nombre","Descripcion","Proveedor","Marca","Color","Precio"]}):null})]})]})},Le=T.a.div(g||(g=Object(A.a)(["\n  border-radius: 2rem;\n  min-height: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Ae=T.a.div(v||(v=Object(A.a)(["\n  display: flex;\n  margin-bottom: 2rem;\n  flex-direction: column;\n  button + button {\n    margin-top: 2rem;\n  }\n  align-items: center;\n  z-index: 2;\n"]))),Te=T.a.div(y||(y=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Re=T.a.div(k||(k=Object(A.a)(["\n  height: 88%;\n  display: flex;\n"]))),Fe=T.a.div(w||(w=Object(A.a)(["\n  background-color: rgb(160, 160, 160);\n  height: 100%;\n  width: 45%;\n  margin-bottom: 5px;\n"]))),De=T.a.div(N||(N=Object(A.a)(["\n  background-color: rgb(236, 236, 236);\n  height: 100%;\n  width: 55%;\n"]))),Pe=(n(43),n(26)),Ue=function(){return Object(U.jsx)(Je,{children:Object(U.jsx)(Pe.a,{children:Object(U.jsxs)(P.c,{children:[Object(U.jsx)(P.a,{exact:!0,path:"/",component:W}),Object(U.jsx)(P.a,{exact:!0,path:"/menu",component:Ee})]})})})},Je=T.a.div(S||(S=Object(A.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(#6e6e6e, #818181, #9f9f9f);\n"])));n(44);L.a.render(Object(U.jsx)(I.a.StrictMode,{children:Object(U.jsx)(Ue,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.013e2c42.chunk.js.map