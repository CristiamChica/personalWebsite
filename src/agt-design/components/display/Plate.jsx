import React from 'react';
export function Plate({size=160,style}){
 const w=size,u=w/2.0;
 const b=(bg,l,t,ww)=>({position:'absolute',left:l,top:t,width:ww,height:u*0.5,background:bg});
 return <div aria-hidden="true" style={{position:'relative',width:w,height:u*1.5+u*0.5*0,minHeight:u*1.5,...style}}>
  <div style={b('var(--sienna-500)',w*0.25,0,u)}/>
  <div style={b('var(--byakuroku-300)',0,u*0.5,u)}/>
  <div style={b('var(--artemisia-500)',u,u*0.5,u)}/>
  <div style={b('var(--midori-500)',w*0.25,u,u)}/>
 </div>;
}