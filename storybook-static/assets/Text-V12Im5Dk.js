import{R as n}from"./index-BBkUAzwr.js";import{u as s,P as o}from"./index-D_arvefj.js";const d={1:"24",2:"20",3:"16",4:"14",5:"12",6:"12"},u={1:"16",2:"14",3:"12",4:"12",5:"12",6:"12"},m=s.h1(({theme:e,variant:l,level:i,weight:a,inherit:t})=>({fontFamily:["display","head","label"].includes(l)?"GothamPro":"Inter",fontSize:l==="display"?e["font-size"].display.sm:l==="head"?e["font-size"][`h${i}`]:l==="body"?e["font-size"][d[i]]:e["font-size"][u[i]],fontWeight:l==="display"?e["font-weight"].display:l==="body"?a==="regular"?e["font-weight"].body.regular:a==="medium"?e["font-weight"].body.medium:e["font-weight"].body.bold:l==="head"?a==="medium"?e["font-weight"].title.medium:e["font-weight"].title.bold:l==="label"&&e["font-weight"].label,letterSpacing:e["letter-spacing"].h1,lineHeight:l==="display"?e["line-height"].xs:e["line-height"].sm,color:t?"inherit":e.theme.fg.surface.default})),p=({children:e,variant:l,level:i,weight:a,style:t,inherit:r})=>n.createElement(o,null,n.createElement(m,{variant:l,level:i,weight:a,style:{...t},inherit:r},e));p.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!1,tsType:{name:"ReactChild"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'display' | 'head' | 'body' | 'label'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'head'"},{name:"literal",value:"'body'"},{name:"literal",value:"'label'"}]},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},inherit:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};export{p as T};