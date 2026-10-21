import React from 'react';
import { Icon } from '../core/Icon.jsx';
const V={
 primary:{bg:'var(--action-primary)',hv:'var(--action-primary-hover)',pr:'var(--action-primary-press)',fg:'var(--text-on-primary)',bd:'transparent'},
 accent:{bg:'var(--action-accent)',hv:'var(--action-accent-hover)',pr:'var(--action-accent-press)',fg:'#fff',bd:'transparent'},
 secondary:{bg:'var(--stone-25)',hv:'var(--stone-100)',pr:'var(--stone-200)',fg:'var(--text-primary)',bd:'var(--border-strong)'},
 ghost:{bg:'transparent',hv:'var(--stone-100)',pr:'var(--stone-200)',fg:'var(--text-primary)',bd:'transparent'},
 danger:{bg:'var(--stone-25)',hv:'var(--crimson-100)',pr:'var(--crimson-100)',fg:'var(--crimson-500)',bd:'var(--crimson-500)'}};
const S={s:{h:'var(--control-h-s)',px:10,fs:13,ic:14},m:{h:'var(--control-h-m)',px:14,fs:14,ic:16},l:{h:'var(--control-h-l)',px:20,fs:15,ic:18}};
export function Button({variant='primary',size='m',icon,iconRight,disabled,fullWidth,children,style,type='button',...rest}){
 const [h,setH]=React.useState(false),[p,setP]=React.useState(false);
 const v=V[variant]||V.primary,s=S[size]||S.m;
 return <button type={type} disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
  style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:8,height:s.h,padding:`0 ${s.px}px`,font:`var(--weight-semibold) ${s.fs}px/1 var(--font-sans)`,letterSpacing:'0.01em',color:v.fg,background:disabled?undefined:(p?v.pr:h?v.hv:v.bg),border:`1px solid ${v.bd}`,borderRadius:'var(--radius-m)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,transition:'background var(--duration-fast) var(--ease-standard)',whiteSpace:'nowrap',...(disabled?{background:v.bg}:{}),...style}} {...rest}>
  {icon&&<Icon name={icon} size={s.ic}/>}{children}{iconRight&&<Icon name={iconRight} size={s.ic}/>}
 </button>;
}