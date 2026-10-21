import React from 'react';
const C={primary:'var(--midori-500)',accent:'var(--sienna-500)',structure:'var(--artemisia-500)',caution:'var(--ochre-500)',critical:'var(--crimson-500)'};
export function Progress({value=0,max=100,tone='primary',label,valueLabel,height=6,inverse,style}){
 const pct=Math.max(0,Math.min(100,value/max*100));
 return <div style={{display:'flex',flexDirection:'column',gap:8,...style}}>
  {(label||valueLabel)&&<div style={{display:'flex',justifyContent:'space-between',gap:12,font:'500 12px/1.2 var(--font-sans)',color:inverse?'var(--artemisia-200)':'var(--text-secondary)'}}><span>{label}</span><span style={{fontFamily:'var(--font-mono)',color:inverse?'var(--text-inverse)':'var(--text-primary)'}}>{valueLabel??Math.round(pct)+'%'}</span></div>}
  <div role="progressbar" aria-valuenow={value} aria-valuemax={max} style={{height,background:inverse?'var(--artemisia-700)':'var(--stone-100)',borderRadius:'var(--radius-pill)',overflow:'hidden'}}><div style={{width:pct+'%',height:'100%',background:C[tone]||C.primary,borderRadius:'inherit',transition:'width var(--duration-slow) var(--ease-standard)'}}/></div>
 </div>;
}