(this["webpackJsonpmarkdownviewer-react-material-ui"]=this["webpackJsonpmarkdownviewer-react-material-ui"]||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a(8),i=a.n(r),l=(a(87),a(46)),s=a(204),o=a(201),u=a(202),m=a(203),d=a(197),j=a(207);var b=function(){var e=Object(d.a)({avatar:{margin:"10px 1px",height:"10%",width:"10%"}})();return Object(n.jsx)(j.a,{src:"./img/synamedia.jpg",className:e.avatar})};var h=function(e){var t=e.title,a=Object(d.a)({title:{marginLeft:830,marginRight:-12}})(),c="";return"None"!==t&&(c=t),Object(n.jsx)(o.a,{variant:"h3",className:a.title,style:{flex:1},children:Object(n.jsx)("div",{children:c})})},p=a(206),x=a(205),O=[{value:"Document1",label:"Document1"},{value:"Document2",label:"Document2"},{value:"Document3",label:"Document3"}],g=Object(d.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:e.spacing(2)},menu:{width:200}}}));var v=function(e){var t=e.docSelected,a=e.onChange,c=g();return Object(n.jsx)("form",{className:c.container,noValidate:!0,autoComplete:"off",children:Object(n.jsx)(x.a,{id:"outlined-select-document",select:!0,label:""===t?"Select a Document":"",className:c.textField,value:t,onChange:a,InputLabelProps:{shrink:!1},SelectProps:{MenuProps:{className:c.menu}},margin:"normal",variant:"outlined",children:O.map((function(e){return Object(n.jsx)(p.a,{value:e.value,children:e.label},e.value)}))})})},f=function(e){var t=e.documentSelected,a=e.handleChange;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u.a,{color:"primary",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(b,{}),Object(n.jsx)(h,{title:t}),Object(n.jsx)(v,{docSelected:t,onChange:a})]})})})},w=a(77),y=Object(w.a)({palette:{primary:{main:"#003049"},secondary:{main:"#d62828"},type:"dark"}}),S=a(76),D=a.n(S),k=function(e){var t=e.render,a=Object(c.useState)(""),r=Object(l.a)(a,2),i=r[0],s=r[1];return fetch("documents/"+t+".md").then((function(e){return e.text()})).then((function(e){s(""!==t?e:"")})),Object(n.jsx)(D.a,{source:i,escapeHtml:!1})},C=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)(s.a,{theme:y,children:[Object(n.jsx)(f,{documentSelected:a,handleChange:function(e){r(e.target.value)}}),Object(n.jsx)(o.a,{style:{marginTop:200},children:Object(n.jsx)(k,{render:a,style:{marginTop:200}})})]})};i.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))},87:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.e2c03647.chunk.js.map