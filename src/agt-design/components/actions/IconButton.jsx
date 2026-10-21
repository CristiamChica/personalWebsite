import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function IconButton({icon,label,variant='ghost',size='m',disabled,style,...rest}){
 const [h,setH]=React.useState(false);
 const d={s:28,m:36,l:44}[size]||36,ic={s:14,m:18,l:20}[size]||18;
 const bg=variant==='secondary'?(h?'var(--stone-100)':'var(--stone-25)'):variant==='primary'?(h?'var(--action-primary-hover)':'var(--action-primary)'):(h?'var(--stone-100)':'transparent');
 return <button type="button" aria-label={label} title={label} disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
  style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:0,background:disabled?'transparent':bg,color:variant==='primary'?'#fff':'var(--text-primary)',border:variant==='secondary'?'1px solid var(--border-strong)':'1px solid transparent',borderRadius:'var(--radius-m)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,transition:'background var(--duration-fast) var(--ease-standard)',...style}} {...rest}><Icon name={icon} size={ic}/></button>;
}