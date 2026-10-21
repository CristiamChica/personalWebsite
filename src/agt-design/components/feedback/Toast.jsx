import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T={positive:['circle-check','var(--midori-300)'],caution:['triangle-alert','var(--ochre-500)'],critical:['circle-alert','var(--sienna-300)'],info:['info','var(--byakuroku-300)']};
export function Toast({tone='info',title,message,action,onClose,style}){
 const [ic,c]=T[tone]||T.info;
 return <div role="status" style={{display:'flex',alignItems:'flex-start',gap:12,width:360,maxWidth:'100%',padding:'14px 14px 14px 16px',background:'var(--surface-inverse)',color:'var(--text-inverse)',borderRadius:'var(--radius-l)',boxShadow:'var(--shadow-3)',...style}}>
  <Icon name={ic} size={18} color={c} style={{marginTop:1}}/>
  <div style={{flex:1,display:'flex',flexDirection:'column',gap:4,minWidth:0}}>
   <div style={{font:'600 14px/1.3 var(--font-sans)'}}>{title}</div>
   {message&&<div style={{font:'400 13px/1.45 var(--font-sans)',color:'var(--artemisia-200)'}}>{message}</div>}
   {action&&<div style={{marginTop:6}}>{action}</div>}
  </div>
  {onClose&&<button aria-label="Dismiss" onClick={onClose} style={{background:'none',border:0,padding:2,color:'var(--artemisia-300)',cursor:'pointer'}}><Icon name="x" size={16}/></button>}
 </div>;
}