import React from 'react';
import { Field } from './Field.jsx';
export function Input({label,hint,error,prefix,suffix,mono,id,disabled,style,...rest}){
 const [f,setF]=React.useState(false);const uid=id||React.useId();
 const bc=error?'var(--status-critical)':f?'var(--border-focus)':'var(--border-strong)';
 return <Field label={label} hint={hint} error={error} htmlFor={uid} style={style}>
  <div style={{display:'flex',alignItems:'center',gap:8,height:'var(--control-h-m)',padding:'0 12px',background:disabled?'var(--surface-sunken)':'var(--surface-raised)',border:`1px solid ${bc}`,borderRadius:'var(--radius-m)',boxShadow:f?'0 0 0 3px var(--midori-50)':'none',transition:'border-color var(--duration-fast), box-shadow var(--duration-fast)'}}>
   {prefix&&<span style={{color:'var(--text-muted)',font:'14px/1 var(--font-sans)'}}>{prefix}</span>}
   <input id={uid} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{flex:1,minWidth:0,border:0,outline:0,background:'transparent',color:'var(--text-primary)',font:mono?'500 14px/1 var(--font-mono)':'400 14px/1 var(--font-sans)',padding:0,height:'100%'}} {...rest}/>
   {suffix&&<span style={{color:'var(--text-muted)',font:'500 12px/1 var(--font-mono)'}}>{suffix}</span>}
  </div>
 </Field>;
}