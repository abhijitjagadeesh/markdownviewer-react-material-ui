(this["webpackJsonpmarkdownviewer-react-material-ui"]=this["webpackJsonpmarkdownviewer-react-material-ui"]||[]).push([[0],{45:function(e){e.exports=JSON.parse('[{"value":"Document1","label":"Document1"},{"value":"Document2","label":"Document2"},{"value":"Document3","label":"Document3"}]')},59:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(1),c=r.n(a),i=r(9),o=r.n(i),l=(r(59),r(14)),s=r(103),d=r(101),u=r(102),j=r(96);var b=function(){var e=Object(a.useContext)(I),t=Object(l.a)(e,1)[0];return Object(n.jsx)(j.a,{variant:"h3",style:{flexGrow:1,color:"#FEA47F"},align:"center",children:Object(n.jsx)("div",{children:"None"!==t?t:""})})},x=r(100),h=r(105),m=r(104),p=r(45),O=Object(x.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200,backgroundColor:"#222",justifyContent:"right",alignItems:"right"},menu:{width:200}}}));var v=function(){var e=Object(a.useContext)(I),t=Object(l.a)(e,2),r=t[0],c=t[1],i=O();return Object(n.jsx)("form",{className:i.container,children:Object(n.jsx)(m.a,{id:"outlined-select-document",select:!0,label:""===r?"Select a Document":"",className:i.textField,value:r,onChange:c,InputLabelProps:{shrink:!1},SelectProps:{MenuProps:{className:i.menu}},margin:"normal",variant:"outlined",children:p.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.label},e.value)}))})})},g=r(106),f=Object(x.a)((function(e){return{root:{flexGrow:1},avatar:{margin:"10px 1px",height:"10%",width:"10%",borderWidth:"3px",borderStyle:"solid",borderColor:"#FEA47F"}}})),w=function(){var e=f();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(d.a,{position:"static",color:"primary",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(g.a,{src:"./img/synamedia.jpg",className:e.avatar}),Object(n.jsx)(b,{}),Object(n.jsx)(v,{})]})})})},y=r(49),F=Object(y.a)({palette:{primary:{main:"#003049"},secondary:{main:"#d62828"},type:"dark"}}),C=r(46),k=Object(x.a)((function(e){return{textField:{width:"70%",height:"45%",margin:"0 auto",backgroundColor:"white",marginTop:"50px",marginBottom:"100px",padding:"20px",borderRadius:"15px",overflow:"hidden",overflowY:"auto",borderWidth:"4px",borderStyle:"solid",borderColor:"#FEA47F"},emptyTextField:{width:"70%",margin:"0 auto",backgroundColor:"#FEA47F",marginTop:"50px",padding:"20px",borderRadius:"15px"}}})),N=function(){var e=Object(a.useContext)(I),t=Object(l.a)(e,1)[0],r="Select A Document From The Dropdown List",c=Object(a.useState)(r),i=Object(l.a)(c,2),o=i[0],s=i[1],d=k();return Object(a.useEffect)((function(){""!==t&&fetch("documents/"+t+".md").then((function(e){return e.text()})).then((function(e){s(""!==t?e:r)}))}),[t]),o===r?Object(n.jsx)(j.a,{variant:"h3",align:"center",children:Object(n.jsx)("div",{className:d.emptyTextField,children:r})}):Object(n.jsx)("div",{className:d.textField,children:Object(n.jsx)(C.a,{children:o})})},D=r(0),S=r(47),A=r(37),E=r(48),T=Object(x.a)((function(e){return{footer:{width:"100%",height:"50px",position:"fixed",bottom:1,backgroundColor:"#FEA47F"}}})),P={paddingRight:30,paddingTop:10};var R=function(){var e=T();return Object(n.jsx)("div",{className:e.footer,children:Object(n.jsx)(j.a,{align:"center",children:Object(n.jsxs)(D.b.Provider,{value:{color:"#2C3A47",size:"2em"},children:[Object(n.jsx)(S.a,{style:P}),Object(n.jsx)(A.a,{style:P}),Object(n.jsx)(A.b,{style:P}),Object(n.jsx)(E.a,{style:P})]})})})},I=c.a.createContext(),J={backgroundColor:"#003049",width:"100%",height:"100vh"},L=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(n.jsx)(I.Provider,{value:[r,function(e){c(e.target.value)}],children:Object(n.jsx)("div",{style:J,children:Object(n.jsxs)(s.a,{theme:F,children:[Object(n.jsx)(w,{}),Object(n.jsx)(N,{}),Object(n.jsx)(R,{})]})})})};o.a.render(Object(n.jsx)(L,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6cc16a96.chunk.js.map