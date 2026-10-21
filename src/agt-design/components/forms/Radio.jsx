import React from 'react';
export function Radio({label,name,value,checked,defaultChecked,onChange,disabled,style}){
 const ref=React.useRef();const [,f]=React.useState(0);
 const on=checked??(ref.current?ref.current.checked:!!defaultChecked);
 return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,font:'400 14px/1.3 var(--font-sans)',color:'var(--text-body)',...style}}>
  <input ref={ref} type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} disabled={disabled} onChange={e=>{f(x=>x+1);document.querySelectorAll('input[name="'+name+'"]').forEach(i=>i.dispatchEvent(new Event('agt-sync')));onChange&&onChange(e)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
  <span style={{width:18,height:18,borderRadius:'50%',border:`1.5px solid ${on?'var(--action-primary)':'var(--border-strong)'}`,background:'var(--surface-raised)',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{on&&<span style={{width:8,height:8,borderRadius:'50%',background:'var(--action-primary)'}}/>}</span>
  {label}
 </label>;
}