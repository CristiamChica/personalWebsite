import React from 'react';
const SRC='https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js';
let loading=null;const subs=new Set();
function ensure(){if(typeof window==='undefined'||window.lucide)return;if(!loading){loading=document.createElement('script');loading.src=SRC;loading.onload=()=>subs.forEach(f=>f());document.head.appendChild(loading);}}
const pascal=n=>n.replace(/(^|-)([a-z0-9])/g,(_,a,b)=>b.toUpperCase());
export function Icon({name,size=18,strokeWidth=1.5,color='currentColor',style,...rest}){
  const [,force]=React.useState(0);
  React.useEffect(()=>{if(window.lucide)return;const f=()=>force(x=>x+1);subs.add(f);ensure();return()=>subs.delete(f);},[]);
  const lib=typeof window!=='undefined'&&window.lucide;
  let node=lib&&(lib.icons[pascal(name)]||lib.icons[name]);
  if(node&&node[0]==='svg')node=node[2];
  const kids=(node||[]).map(([t,a],i)=>React.createElement(t,{...a,key:i}));
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0,display:'block',...style}} {...rest}>{kids}</svg>;
}