(this["webpackJsonpgifs-app"]=this["webpackJsonpgifs-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),s=c.n(r),a=c(2),i=c(3),u=c(0),l=function(e){var t=e.setQuery,c=e.query,r=Object(n.useState)(c),s=Object(a.a)(r,2),l=s[0],j=s[1],o=Object(n.useState)(!1),d=Object(a.a)(o,2),b=d[0],m=d[1],f=Object(n.useState)(!!c),p=Object(a.a)(f,2),O=p[0],h=p[1];Object(n.useEffect)((function(){j(c),h(!!c)}),[c]);return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),l.trim().length>0?(t(l.trim()),localStorage.setItem("query",l.trim()),m(!1),e.target.firstChild.firstChild.blur()):m(!0)},children:[Object(u.jsxs)("div",{className:"form__input_group",children:[Object(u.jsx)("input",{className:b?"form__input invalid":"form__input",type:"text",value:l,onChange:function(e){var t=e.target.value;j(t),t.length>0?h(!0):h(!1)},placeholder:"Escribe algo"}),O&&Object(u.jsx)("button",{type:"button",onClick:function(){j(""),m(!1),h(!1)},children:" X "})]}),Object(u.jsxs)("button",{type:"submit",children:[" ",Object(u.jsx)(i.b,{})," "]})]})},j=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)("p",{className:"footer__copy",children:["Gifs desde"," ",Object(u.jsx)("a",{className:"footer__link",href:"https://giphy.com/",target:"_blank",rel:"noreferrer",children:"GIPHY"})]})})},o=function(e){var t=e.title,c=e.url;return Object(u.jsx)("li",{className:"card",children:Object(u.jsx)("img",{className:"card__img",src:c,alt:t,title:t})})},d=c(5),b=c.n(d),m=c(7),f=function(){var e=Object(m.a)(b.a.mark((function e(t){var c,n,r,s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=66jxY7494rLDgFEi0zurjRPZTfCn7k2g"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,s=r.data,a=s.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){f(e).then((function(e){s({data:e,loading:!1})}))}),[e]),r}(e.param),c=t.data;return t.loading?Object(u.jsx)("div",{className:"spinner",children:Object(u.jsxs)("div",{class:"lds-ellipsis",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})}):Object(u.jsx)("ul",{className:"cards",children:c.map((function(e){var t=e.id,c=e.title,n=e.url;return Object(u.jsx)(o,{title:c,url:n},t)}))})},O=function(){var e=Object(n.useState)(localStorage.getItem("query")||""),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(u.jsxs)("main",{children:[Object(u.jsxs)("div",{className:"introduce",children:[Object(u.jsxs)("div",{className:"introduce__group",children:[Object(u.jsx)("h1",{className:"introduce__title",children:"GifExpertApp"}),!!c&&Object(u.jsx)(i.a,{onClick:function(){r((function(e){return""})),localStorage.setItem("query","")}})]}),Object(u.jsx)(l,{setQuery:r,query:c})]}),""!==c?Object(u.jsx)("div",{className:"group",children:Object(u.jsx)(p,{param:c})}):Object(u.jsx)("div",{className:"empty",children:Object(u.jsx)("p",{className:"empty__text",children:"\xbfTiene un gif en mente? \xa1B\xfascalo!"})}),Object(u.jsx)(j,{})]})};c(14);s.a.render(Object(u.jsx)(O,{}),document.getElementById("main"))}},[[15,1,2]]]);
//# sourceMappingURL=main.06477b1a.chunk.js.map