import{R as t}from"./index-BBkUAzwr.js";import{I as b}from"./index-DfUKlMq5.js";import{u as a,P as g}from"./index-DL58Rkbr.js";import{u as p,T as f}from"./ThemeProvider-B3pbil3k.js";function y(e){var r,n;return`${e}`.includes("e-")?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(0):new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e?`${e}`.split(".")[1]?+`${`${e}`.split(".")[0]}.${(n=(r=`${e}`)==null?void 0:r.split(".")[1])==null?void 0:n.substring(0,2)}`:e:0)}function v(e){var r,n;return`${e}`.includes("e-")?new Intl.NumberFormat().format(0):new Intl.NumberFormat().format(e?`${e}`.split(".")[1]?+`${`${e}`.split(".")[0]}.${(n=(r=`${e}`)==null?void 0:r.split(".")[1])==null?void 0:n.substring(0,2)}`:e:0)}const T=a.div(({theme:e})=>({display:"flex",flexDirection:"row",alignItems:"center",padding:e.bignumber.padding.desktop,gap:e.bignumber.gap.value,backgroundColor:e.bignumber.bg.content,borderRadius:e.bignumber.borderRadius.content,border:e.bignumber.border.default,color:e.bignumber.fg.value,overflow:"hidden"})),w=a.div(({theme:e,status:r})=>({height:e.bignumber.size.icon.bg,width:e.bignumber.size.icon.bg,backgroundColor:e.bignumber.bg.icon.content[r],borderRadius:e.bignumber.borderRadius.icon,color:e.bignumber.bg.icon.color[r],display:"flex",justifyContent:"center",alignItems:"center"})),x=a.div(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:e.bignumber.gap.value})),R=a.div(({theme:e})=>({color:e.bignumber.fg.value,font:e.bignumber.total.value,width:"100%",textTransform:"capitalize"})),B=a.div(({theme:e})=>({color:e.bignumber.fg.value,font:e.bignumber.text.value,width:"100%"})),I=a.div(({theme:e})=>({padding:e.bignumber.padding.total,gap:e.bignumber.gap.total,color:e.bignumber.bg.total.text,borderRadius:e.bignumber.borderRadius.icon,border:e.bignumber.border.total.default,font:e.bignumber.total.value})),o=({label:e,value:r,total:n,status:m,style:c})=>{const{theme:d}=p();return t.createElement(g,null,t.createElement(T,{"provided-theme":d,style:c},t.createElement(w,{status:m||"default"},t.createElement(b,{name:"CurrencyDollarIcon"})),t.createElement(x,null,t.createElement(R,null,e),t.createElement(B,null,y(r||0)),t.createElement(I,null,"Total: ",v(n||0)))))};o.__docgenInfo={description:"",methods:[],displayName:"BigNumber",props:{theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'danger' | 'warning' | 'neutral' | 'default' | 'success'",elements:[{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'default'"},{name:"literal",value:"'success'"}]},description:""},value:{required:!1,tsType:{name:"number"},description:""},total:{required:!1,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["HTMLAttributes"]};const q={title:"Components/BigNumber",component:o,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},args:{label:"Label",theme:"light",status:"default",value:1e3,total:100,style:{width:"180px"}},decorators:[e=>t.createElement(f,{theme:{theme:e().props.theme}},e())]},N=e=>t.createElement(o,{...e}),i=N.bind({});i.args={};var l,s,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"args => <BigNumber {...args} />",...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,q as default};
