import{R as l}from"./index-BBkUAzwr.js";import{P as m}from"./index-DckXk6te.js";import{u as d,T as p}from"./dark-Bjdy4tIf.js";const c={1:"24",2:"20",3:"16",4:"14",5:"12",6:"12"},u={1:"16",2:"14",3:"12",4:"12",5:"12",6:"12"},y=d.h1(({theme:e,variant:a,level:t})=>({fontFamily:["display","head","label"].includes(a)?"GothamPro":"Inter",fontSize:a==="display"?e["font-size"].display.sm:a==="head"?e["font-size"][`h${t}`]:a==="body"?e["font-size"][c[t]]:e["font-size"][u[t]]})),s=({children:e,variant:a,level:t})=>l.createElement(m,null,l.createElement(y,{variant:a,level:t},e));s.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactChild"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'display' | 'head' | 'body' | 'label'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'head'"},{name:"literal",value:"'body'"},{name:"literal",value:"'label'"}]},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""}},composes:["HTMLAttributes"]};const g={title:"Components/Text",component:s,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},args:{children:"Text",type:"display"},decorators:[e=>l.createElement(p,{theme:{theme:"light"}},e())]},h=e=>l.createElement(s,{...e}),r=h.bind({});r.args={};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Text {...args} />",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,g as default};
