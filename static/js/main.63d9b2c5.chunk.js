(this["webpackJsonpmarkdownviewer-react-material-ui"]=this["webpackJsonpmarkdownviewer-react-material-ui"]||[]).push([[0],{168:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(1),i=r(9),c=r.n(i),o=(r(91),r(47)),d=r(208),l=r(206),s=r(207),u=r(201);var j=function(e){var t=e.title,r="";return"None"!==t&&(r=t),Object(n.jsx)(u.a,{variant:"h3",style:{flexGrow:1,color:"#FEA47F"},align:"center",children:Object(n.jsx)("div",{children:r})})},b=r(205),h=r(210),m=r(209),x=[{value:"Document1",label:"Document1"},{value:"Document2",label:"Document2"},{value:"Document3",label:"Document3"}],p=Object(b.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200,backgroundColor:"#222",justifyContent:"right",alignItems:"right",borderWidth:"1px",borderStyle:"solid",borderColor:"#FEA47F"},menu:{width:200}}}));var g=function(e){var t=e.docSelected,r=e.onChange,a=p();return Object(n.jsx)("form",{className:a.container,children:Object(n.jsx)(m.a,{id:"outlined-select-document",select:!0,label:""===t?"Select a Document":"",className:a.textField,value:t,onChange:r,InputLabelProps:{shrink:!1},SelectProps:{MenuProps:{className:a.menu}},margin:"normal",variant:"outlined",children:x.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.label},e.value)}))})})},O=r(211),v=Object(b.a)((function(e){return{root:{flexGrow:1},avatar:{margin:"10px 1px",height:"10%",width:"10%",borderWidth:"3px",borderStyle:"solid",borderColor:"#FEA47F"}}})),f=function(e){var t=e.documentSelected,r=e.handleChange,a=v();return Object(n.jsx)("div",{className:a.root,children:Object(n.jsx)(l.a,{position:"static",color:"primary",children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(O.a,{src:"./img/synamedia.jpg",className:a.avatar}),Object(n.jsx)(j,{title:t}),Object(n.jsx)(g,{docSelected:t,onChange:r})]})})})},w=r(81),y=Object(w.a)({palette:{primary:{main:"#003049"},secondary:{main:"#d62828"},type:"dark"}}),F=r(78),C=r.n(F),S=Object(b.a)((function(e){return{textField:{width:"70%",height:"45%",margin:"0 auto",backgroundColor:"white",marginTop:"50px",marginBottom:"100px",padding:"20px",borderRadius:"15px",overflow:"hidden",overflowY:"auto",borderWidth:"4px",borderStyle:"solid",borderColor:"#FEA47F"},emptyTextField:{width:"70%",margin:"0 auto",backgroundColor:"#FEA47F",marginTop:"50px",padding:"20px",borderRadius:"15px"}}})),k=function(e){var t=e.render,r="Select A Document From The Dropdown List",i=Object(a.useState)(r),c=Object(o.a)(i,2),d=c[0],l=c[1],s=S();return Object(a.useEffect)((function(){fetch("documents/"+t+".md").then((function(e){return e.text()})).then((function(e){l(""!==t?e:r)}))}),[t]),d===r?Object(n.jsx)(u.a,{variant:"h3",align:"center",children:Object(n.jsx)("div",{className:s.emptyTextField,children:r})}):Object(n.jsx)("div",{className:s.textField,children:Object(n.jsx)(C.a,{source:d,escapeHtml:!1})})},D=r(0),N=r(79),A=r(57),E=r(80),R=Object(b.a)((function(e){return{footer:{width:"100%",height:"50px",position:"fixed",bottom:1,backgroundColor:"#FEA47F"}}}));var T=function(){var e=R();return Object(n.jsx)("div",{className:e.footer,children:Object(n.jsx)(u.a,{align:"center",children:Object(n.jsxs)(D.b.Provider,{value:{color:"#2C3A47",size:"2em"},children:[Object(n.jsx)(N.a,{style:{paddingRight:30,paddingTop:10}}),Object(n.jsx)(A.a,{style:{paddingRight:30}}),Object(n.jsx)(A.b,{style:{paddingRight:30}}),Object(n.jsx)(E.a,{style:{paddingRight:30}})]})})})},P=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),r=t[0],i=t[1];return Object(n.jsx)("div",{style:{backgroundColor:"#003049",width:"100%",height:"100vh"},children:Object(n.jsxs)(d.a,{theme:y,children:[Object(n.jsx)(f,{documentSelected:r,handleChange:function(e){i(e.target.value)}}),Object(n.jsx)(k,{render:r}),Object(n.jsx)(T,{})]})})};c.a.render(Object(n.jsx)(P,{}),document.getElementById("root"))},91:function(e,t,r){}},[[168,1,2]]]);
//# sourceMappingURL=main.63d9b2c5.chunk.js.map