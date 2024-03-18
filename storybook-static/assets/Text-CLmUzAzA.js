import{R as o}from"./index-BBkUAzwr.js";import{b as r,a as s,t as d,d as m,l as u,u as f}from"./dark-Bjdy4tIf.js";const c=""+new URL("GothamPro-Medium-Y9EtT5An.woff",import.meta.url).href,p=""+new URL("Inter-Medium-CKLJZXR2.ttf",import.meta.url).href,y=r`
    @font-face {
        font-family: 'GothamPro';
        src: local('Font Name'), local('FontName'),
        url(${c}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }@font-face {
        font-family: 'Inter';
        src: local('Font Name'), local('FontName'),
        url(${p}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`,n=({children:e})=>{const{theme:t}=s();return o.createElement(d,{theme:t==="dark"?m:u},o.createElement(y,null),e)};n.__docgenInfo={description:"",methods:[],displayName:"ProvideTheme"};const h={1:"24",2:"20",3:"16",4:"14",5:"12",6:"12"},g={1:"16",2:"14",3:"12",4:"12",5:"12",6:"12"},b=f.h1(({theme:e,variant:t,level:l,weight:a})=>({fontFamily:["display","head","label"].includes(t)?"GothamPro":"Inter",fontSize:t==="display"?e["font-size"].display.sm:t==="head"?e["font-size"][`h${l}`]:t==="body"?e["font-size"][h[l]]:e["font-size"][g[l]],fontWeight:t==="display"?e["font-weight"].display:t==="body"?a==="regular"?e["font-weight"].body.regular:a==="medium"?e["font-weight"].body.medium:e["font-weight"].body.bold:t==="head"?a==="medium"?e["font-weight"].title.medium:e["font-weight"].title.bold:t==="label"&&e["font-weight"].label,letterSpacing:e["letter-spacing"].h1,color:e.theme.fg.surface.default,lineHeight:t==="display"?e["line-height"].xs:e["line-height"].sm})),w=({children:e,variant:t,level:l,weight:a,style:i})=>o.createElement(n,null,o.createElement(b,{variant:t,level:l,weight:a,style:i},e));w.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactChild"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'display' | 'head' | 'body' | 'label'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'head'"},{name:"literal",value:"'body'"},{name:"literal",value:"'label'"}]},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}},composes:["HTMLAttributes"]};export{n as P,w as T};
