import{R as t}from"./index-BBkUAzwr.js";import{P as u}from"./index-DckXk6te.js";import{u as d,T as p}from"./dark-Bjdy4tIf.js";const c=d.div(({theme:e})=>({backgroundColor:e.button.primary.filled.bg.default,padding:e.button.primary.padding.large["icon-right"].padding,gap:e.button.primary.padding.large["icon-right"].gap,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:e.button["border-radius"]})),m=d.div(({theme:e})=>({backgroundColor:e.button.primary.outline.bg.default,padding:e.button.primary.padding.large["icon-right"].padding,gap:e.button.primary.padding.large["icon-right"].gap,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:e.button["border-radius"]})),n=({children:e,variant:a,style:s})=>t.createElement(u,null,a==="filled"&&t.createElement(c,{style:s},t.createElement("h1",null,e)),a==="outlined"&&t.createElement(m,null,t.createElement("h1",null,e)));n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactChild"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:""}},composes:["HTMLAttributes"]};const h={title:"Components/Button",component:n,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},args:{children:"Button",variant:"filled",style:{width:"200px"}},decorators:[e=>t.createElement(p,{theme:{theme:"light"}},e())]},g=e=>t.createElement(n,{...e}),r=g.bind({});r.args={};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Button {...args} />",...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,h as default};