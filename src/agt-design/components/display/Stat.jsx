import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Stat({label,value,unit,delta,deltaTone,caption,size='m',style}){
 const tone=deltaTone||(delta&&String(delta).trim().startsWith('-')?'critical':'positive');
 const c={positive:'var(--midori-600)',critical:'var(--crimson-500)',caution:'var(--ochre-700)',neutral:'var(--text-secondary)'}[tone];
 const fs={s:22,m:32,l:48}[size]||32;
 return <div style={{display:'flex',flexDirection:'column',gap:8,minWidth:0,...style}}>
  <div style={{font:'var(--weight-semibold) var(--size-overline)/1 var(--font-sans)',letterSpacing:'var(--tracking-overline)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}</div>
  <div style={{display:'flex',alignItems:'baseline',gap:6}}>
   <span style={{font:`var(--weight-medium) ${fs}px/1 var(--font-display)`,color:'var(--text-primary)',fontVariantNumeric:'tabular-nums',letterSpacing:'-0.01em'}}>{value}</span>
   {unit&&<span style={{font:'500 13px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{unit}</span>}
  </div>
  {(delta||caption)&&<div style={{display:'flex',alignItems:'center',gap:6,font:'500 12px/1.2 var(--font-sans)',color:'var(--text-secondary)'}}>
   {delta&&<span style={{display:'inline-flex',alignItems:'center',gap:2,color:c,fontFamily:'var(--font-mono)'}}><Icon name={tone==='critical'?'arrow-down-right':'arrow-up-right'} size={13}/>{delta}</span>}{caption}
  </div>}
 </div>;
}