import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';
export function Dialog({open,title,eyebrow,children,footer,onClose,width=480,inline}){
 if(!open)return null;
 const box=<div role="dialog" aria-modal="true" style={{width,maxWidth:'100%',background:'var(--surface-raised)',borderRadius:'var(--radius-l)',boxShadow:'var(--shadow-3)',display:'flex',flexDirection:'column',overflow:'hidden'}}>
  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,padding:'20px 20px 0 24px'}}>
   <div style={{display:'flex',flexDirection:'column',gap:6}}>{eyebrow&&<div style={{font:'600 11px/1 var(--font-sans)',letterSpacing:'var(--tracking-overline)',textTransform:'uppercase',color:'var(--text-muted)'}}>{eyebrow}</div>}<h2 style={{margin:0,font:'500 22px/1.25 var(--font-display)',color:'var(--text-primary)'}}>{title}</h2></div>
   {onClose&&<IconButton icon="x" label="Close" size="s" onClick={onClose}/>}
  </div>
  <div style={{padding:'16px 24px 24px',font:'400 14px/1.55 var(--font-sans)',color:'var(--text-body)'}}>{children}</div>
  {footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:8,padding:'14px 24px',borderTop:'1px solid var(--border-hairline)',background:'var(--surface-card)'}}>{footer}</div>}
 </div>;
 if(inline)return box;
 return <div onClick={e=>{if(e.target===e.currentTarget&&onClose)onClose()}} style={{position:'fixed',inset:0,background:'var(--scrim)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,zIndex:100}}>{box}</div>;
}