import React from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';
export function Select({label,hint,error,options=[],id,disabled,style,...rest}){
 const uid=id||React.useId();
 return <Field label={label} hint={hint} error={error} htmlFor={uid} style={style}>
  <div style={{position:'relative'}}>
   <select id={uid} disabled={disabled} style={{appearance:'none',width:'100%',height:'var(--control-h-m)',padding:'0 36px 0 12px',background:disabled?'var(--surface-sunken)':'var(--surface-raised)',border:`1px solid ${error?'var(--status-critical)':'var(--border-strong)'}`,borderRadius:'var(--radius-m)',font:'400 14px/1 var(--font-sans)',color:'var(--text-primary)',cursor:'pointer'}} {...rest}>
    {options.map(o=>{const v=typeof o==='string'?{value:o,label:o}:o;return <option key={v.value} value={v.value}>{v.label}</option>})}
   </select>
   <Icon name="chevron-down" size={16} color="var(--text-secondary)" style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',pointerEvents:'none'}}/>
  </div>
 </Field>;
}