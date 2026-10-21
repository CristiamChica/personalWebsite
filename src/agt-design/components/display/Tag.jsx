import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Tag({children,selected,onClick,onRemove,icon,style}){
 const [h,setH]=React.useState(false);
 return <span onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',gap:6,height:28,padding:onRemove?'0 6px 0 10px':'0 10px',borderRadius:'var(--radius-s)',border:`1px solid ${selected?'var(--byakuroku-500)':'var(--border-strong)'}`,background:selected?'var(--surface-selected)':h&&onClick?'var(--stone-100)':'var(--surface-raised)',color:selected?'var(--byakuroku-800)':'var(--text-body)',font:'var(--weight-medium) 13px/1 var(--font-sans)',cursor:onClick?'pointer':'default',whiteSpace:'nowrap',...style}}>
  {icon&&<Icon name={icon} size={14}/>}{children}
  {onRemove&&<span role="button" aria-label="Remove" onClick={e=>{e.stopPropagation();onRemove()}} style={{display:'inline-flex',cursor:'pointer',color:'var(--text-muted)'}}><Icon name="x" size={14}/></span>}
 </span>;
}