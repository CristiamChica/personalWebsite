import React from 'react';
const T={default:{bg:'var(--surface-card)',bd:'var(--border-hairline)',fg:'var(--text-body)'},raised:{bg:'var(--surface-raised)',bd:'var(--border-hairline)',fg:'var(--text-body)'},tint:{bg:'var(--surface-tint)',bd:'var(--byakuroku-200)',fg:'var(--text-body)'},inverse:{bg:'var(--surface-inverse)',bd:'transparent',fg:'var(--text-inverse)'}};
export function Card({eyebrow,title,action,children,variant='default',padding=24,style,...rest}){
 const t=T[variant]||T.default;
 return <section style={{background:t.bg,color:t.fg,border:`1px solid ${t.bd}`,borderRadius:'var(--radius-l)',padding,display:'flex',flexDirection:'column',gap:16,boxShadow:variant==='raised'?'var(--shadow-2)':'none',...style}} {...rest}>
  {(eyebrow||title||action)&&<header style={{padding:(padding===0||padding==='0')?'20px 24px 0':0,display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
   <div style={{display:'flex',flexDirection:'column',gap:4,minWidth:0}}>
    {eyebrow&&<div style={{font:'var(--weight-semibold) var(--size-overline)/1 var(--font-sans)',letterSpacing:'var(--tracking-overline)',textTransform:'uppercase',color:variant==='inverse'?'var(--byakuroku-300)':'var(--text-muted)'}}>{eyebrow}</div>}
    {title&&<h3 style={{margin:0,font:'var(--weight-semibold) var(--size-h3)/1.25 var(--font-sans)',color:variant==='inverse'?'var(--text-inverse)':'var(--text-primary)'}}>{title}</h3>}
   </div>{action}
  </header>}
  {children}
 </section>;
}