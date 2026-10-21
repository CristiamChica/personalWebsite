import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({label,checked,defaultChecked,onChange,disabled,style}){
 const [c,setC]=React.useState(!!defaultChecked);const on=checked??c;
 return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,font:'400 14px/1.3 var(--font-sans)',color:'var(--text-body)',...style}}>
  <input type="checkbox" checked={on} disabled={disabled} onChange={e=>{setC(e.target.checked);onChange&&onChange(e)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
  <span style={{width:18,height:18,borderRadius:'var(--radius-xs)',border:`1.5px solid ${on?'var(--action-primary)':'var(--border-strong)'}`,background:on?'var(--action-primary)':'var(--surface-raised)',display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'all var(--duration-fast)',flexShrink:0}}>{on&&<Icon name="check" size={13} strokeWidth={2.5} color="#fff"/>}</span>
  {label}
 </label>;
}