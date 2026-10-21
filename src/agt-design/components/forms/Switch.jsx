import React from 'react';
export function Switch({label,checked,defaultChecked,onChange,disabled,style}){
 const [c,setC]=React.useState(!!defaultChecked);const on=checked??c;
 return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,font:'400 14px/1.3 var(--font-sans)',color:'var(--text-body)',whiteSpace:'nowrap',...style}}>
  <input type="checkbox" role="switch" checked={on} disabled={disabled} onChange={e=>{setC(e.target.checked);onChange&&onChange(e)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
  <span style={{width:32,height:18,borderRadius:'var(--radius-pill)',background:on?'var(--action-primary)':'var(--stone-300)',position:'relative',transition:'background var(--duration-base) var(--ease-standard)',flexShrink:0}}><span style={{position:'absolute',top:2,left:on?16:2,width:14,height:14,borderRadius:'50%',background:'#fff',boxShadow:'var(--shadow-1)',transition:'left var(--duration-base) var(--ease-standard)'}}/></span>
  {label}
 </label>;
}