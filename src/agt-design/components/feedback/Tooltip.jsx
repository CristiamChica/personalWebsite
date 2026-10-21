import React from 'react';
export function Tooltip({content,children,placement='top',open:forced}){
 const [o,setO]=React.useState(false);const open=forced??o;
 const pos=placement==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
 return <span onMouseEnter={()=>setO(true)} onMouseLeave={()=>setO(false)} onFocus={()=>setO(true)} onBlur={()=>setO(false)} style={{position:'relative',display:'inline-flex'}}>
  {children}
  {open&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,padding:'6px 9px',background:'var(--stone-900)',color:'var(--stone-25)',font:'500 12px/1.35 var(--font-sans)',borderRadius:'var(--radius-s)',whiteSpace:'nowrap',pointerEvents:'none',zIndex:50}}>{content}</span>}
 </span>;
}