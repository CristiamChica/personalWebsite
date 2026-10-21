import React from 'react';
export function Field({label,hint,error,htmlFor,children,style}){
 return <div style={{display:'flex',flexDirection:'column',gap:6,minWidth:0,...style}}>
  {label&&<label htmlFor={htmlFor} style={{font:'var(--weight-semibold) 12px/1.2 var(--font-sans)',letterSpacing:'var(--tracking-wide)',color:'var(--text-secondary)'}}>{label}</label>}
  {children}
  {(error||hint)&&<div style={{font:'var(--weight-regular) 12px/1.4 var(--font-sans)',color:error?'var(--status-critical)':'var(--text-muted)'}}>{error||hint}</div>}
 </div>;
}