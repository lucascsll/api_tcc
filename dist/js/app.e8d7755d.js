(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},r={app:0},n=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"63f526f4"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=r[t]=[e,a]}));e.push(o[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=r[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("85ec"),r=o.n(a);r.a},"039a":function(t,e,o){"use strict";var a=o("7174"),r=o.n(a);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},n=[],i=(o("034f"),o("2877")),s={},l=Object(i["a"])(s,r,n,!1,null,null,null),c=l.exports,u=(o("d3b7"),o("8c4f")),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Login",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[1==t.login?o("b-col",{staticClass:"container",attrs:{sm:"12"}},[o("b-col",{staticClass:"text-left"},[o("label",{staticStyle:{color:"#ffff","font-size":"22px","margin-top":"50px"}},[t._v(" Login ")])]),o("b-col",[o("b-form-input",{staticClass:"input-login",attrs:{placeholder:"Digite seu e-mail"},model:{value:t.emailLogin,callback:function(e){t.emailLogin=e},expression:"emailLogin"}}),o("b-form-input",{attrs:{placeholder:"Digite sua senha"},model:{value:t.senhaLogin,callback:function(e){t.senhaLogin=e},expression:"senhaLogin"}})],1),o("b-col",{staticClass:"text-center"},[o("b-button",{staticStyle:{"background-color":"#9A9CD6","margin-bottom":"30px","margin-top":"50px"},on:{click:t.loginUser}},[o("strong",[t._v("ENTRAR ")])])],1),o("b-col",{staticClass:"text-center"},[o("label",{staticStyle:{color:"#ffff"}},[t._v(" Não possui cadastro? "),o("strong",{staticStyle:{color:"#9A9CD6"},on:{click:function(e){t.login=!1}}},[t._v(" Cadastre-se ")])])])],1):t._e(),0==t.login&&0==t.loginSucesso?o("b-col",{staticClass:"container",attrs:{sm:"12"}},[o("b-col",{staticClass:"text-left"},[o("label",{staticStyle:{color:"#ffff","font-size":"22px","margin-top":"50px"}},[t._v(" Cadastro ")])]),o("b-col",[o("b-form-input",{staticClass:"input-login",attrs:{placeholder:"Digite seu e-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("b-form-input",{staticClass:"input-login",attrs:{placeholder:"Digite sua senha"},model:{value:t.senha,callback:function(e){t.senha=e},expression:"senha"}}),o("b-form-input",{attrs:{placeholder:"Confirmar senha"},model:{value:t.confirmarSenha,callback:function(e){t.confirmarSenha=e},expression:"confirmarSenha"}}),o("b-col",{staticClass:"text-left"},[o("label",{staticStyle:{color:"red","font-size":"18px","font-weight":"bold"}},[t._v(" "+t._s(t.alertaError)+" ")])])],1),o("b-col",{staticClass:"text-center"},[o("b-button",{staticStyle:{"background-color":"#9A9CD6","margin-bottom":"30px","margin-top":"50px"},on:{click:t.createUser}},[o("strong",[t._v("CADASTRAR ")])]),o("b-button",{staticStyle:{"background-color":"#9A9CD6","margin-bottom":"30px","margin-top":"50px","margin-left":"5px"},on:{click:function(e){t.login=!0}}},[o("strong",[t._v("CANCELAR ")])])],1)],1):t._e(),1==t.loginSucesso?o("b-col",{staticClass:"container",attrs:{sm:"12"}},[o("b-col",{staticClass:"text-left"},[o("label",{staticStyle:{color:"#ffff","font-size":"22px","margin-top":"50px"}},[t._v(" Avaliar")])]),o("b-col",[o("b-form-input",{staticClass:"input-login",attrs:{placeholder:"Procurar livros"},on:{keypress:t.procurarLivros},model:{value:t.searchLivros,callback:function(e){t.searchLivros=e},expression:"searchLivros"}}),0==t.livroSelecionado.length?o("b-list-group",{staticClass:"text-left"},t._l(t.resultData,(function(e){return o("b-list-group-item",{staticClass:"select",on:{click:function(o){return t.selecionar(e)}}},[o("img",{attrs:{width:"30",height:"30",src:e.imageUrl}}),t._v(" "+t._s(e.bookTitleBare))])})),1):t._e(),o("b-list-group",{staticClass:"text-left"},t._l(t.livroSelecionado,(function(e){return o("b-list-group-item",{staticClass:"select",on:{click:function(o){return t.selecionar(e)}}},[o("img",{attrs:{width:"30",height:"30",src:e.imageUrl}}),t._v(" "+t._s(e.bookTitleBare))])})),1),1==this.livroSelecionado.length?o("b-form-rating",{staticStyle:{"margin-top":"40px"},attrs:{variant:"warning"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}):t._e()],1),o("b-col",{staticClass:"text-center"},[o("b-button",{staticStyle:{"background-color":"#9A9CD6","margin-bottom":"30px","margin-top":"50px"},on:{click:t.avaliarLivros}},[o("strong",[t._v("Salvar ")])])],1)],1):t._e()],1)},m=[],d=(o("caad"),o("2532"),o("96cf"),o("1da1")),g=o("bc3a"),b=o.n(g),v={name:"HelloWorld",props:{msg:String},data:function(){return{loginSucesso:!1,login:!0,sucesso:!1,value:null,searchLivros:"",resultData:null,livroSelecionado:[],rating:0,email:"",senha:"",confirmarSenha:"",alertaError:"",boxOne:"",boxTwo:"",emailLogin:"",senhaLogin:"",token:"",idUSer:null}},methods:{teste:function(){console.log("teste")},procurarLivros:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=".concat(t.searchLivros)).then((function(e){t.resultData=e.data,console.log(t.livroSelecionado.length)}));case 2:case"end":return e.stop()}}),e)})))()},selecionar:function(t){0==this.livroSelecionado.length&&this.livroSelecionado.push(t)},createUser:function(){var t=this;return this.email?this.senha?this.confirmarSenha?this.confirmarSenha!=this.senha?this.alertaError="Por favor ensira uma senha corresponde a primeira":0==this.email.includes("@")||0==this.email.includes(".")?this.alertaError="Por favor ensira um email valido":void b.a.post("https://apitcclivros.herokuapp.com/users",{email:this.email,password:this.senha}).then((function(e){if(0==e.data.status)return t.alertaError="Email já cadastrado";t.showMsgBoxTwo(),t.email="",t.senha="",t.confirmarSenha="",t.login=!0})):this.alertaError="Por favor confirme a senha":this.alertaError="Por favor ensira uma senha":this.alertaError="Por favor ensira um email"},showMsgBoxTwo:function(){var t=this;this.boxTwo="",this.$bvModal.msgBoxOk("Cadastro realizado com sucesso!",{title:"Tudo certo!",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(e){t.boxTwo=e})).catch((function(t){}))},loginUser:function(){var t=this;b.a.post("https://apitcclivros.herokuapp.com/sessions",{email:this.emailLogin,password:this.senhaLogin}).then((function(e){e.data.token&&(t.token=e.data.token,t.login=!1,t.loginSucesso=!0,t.idUSer=e.data.user.id)}))},avaliarLivros:function(){var t=this;console.log(this.livroSelecionado),1==this.livroSelecionado.length&&b.a.post("https://apitcclivros.herokuapp.com/quiz",{id_usuario:this.idUSer,id_livro:this.livroSelecionado[0].bookId,nome_livro:this.livroSelecionado[0].title,rating:this.rating,authorization:"Bearer "+this.token}).then((function(e){200==e.status&&(t.rating=0,t.searchLivros="",t.livroSelecionado=[],t.resultData=null,t.boxTwo="",t.$bvModal.msgBoxOk("Avaliação enviada com sucesso!",{title:"Obrigado por contribuir com sua avaliação!",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(e){t.boxTwo=e})).catch((function(t){})))}))}}},x=v,S=(o("039a"),Object(i["a"])(x,h,m,!1,null,null,null)),k=S.exports,w={name:"Home",components:{Login:k}},C=w,_=Object(i["a"])(C,f,p,!1,null,null,null),y=_.exports;a["default"].use(u["a"]);var L=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],O=new u["a"]({mode:"history",base:"/",routes:L}),j=O,E=o("2f62");a["default"].use(E["a"]);var T=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=o("5f5b"),P=o("b1e0");o("f9e3"),o("2dd8");a["default"].config.productionTip=!1,a["default"].use(A["a"]),a["default"].use(P["a"]),new a["default"]({router:j,store:T,render:function(t){return t(c)}}).$mount("#app")},7174:function(t,e,o){},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.e8d7755d.js.map