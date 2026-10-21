import React from 'react';
export function Tabs({items=[],value,onChange,variant='underline',style}){
 const [h,setH]=React.useState(null);
 const seg=variant==='segmented';
 return <div role="tablist" style={{display:'flex',gap:seg?2:24,padding:seg?2:0,background:seg?'var(--stone-100)':'transparent',borderRadius:seg?'var(--radius-m)':0,borderBottom:seg?'none':'1px solid var(--border-hairline)',width:seg?'fit-content':undefined,...style}}>
  {items.map(it=>{const v=typeof it==='string'?{value:it,label:it}:it;const on=v.value===value;
   return <button key={v.value} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(v.value)} onMouseEnter={()=>setH(v.value)} onMouseLeave={()=>setH(null)}
    style={seg?{height:28,padding:'0 12px',border:0,borderRadius:'var(--radius-s)',background:on?'var(--surface-raised)':'transparent',boxShadow:on?'var(--shadow-1)':'none',color:on||h===v.value?'var(--text-primary)':'var(--text-secondary)',font:'var(--weight-semibold) 13px/1 var(--font-sans)',cursor:'pointer'}
     :{height:40,padding:0,border:0,borderBottom:`2px solid ${on?'var(--midori-500)':'transparent'}`,marginBottom:-1,background:'transparent',color:on||h===v.value?'var(--text-primary)':'var(--text-secondary)',font:'var(--weight-semibold) 14px/1 var(--font-sans)',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:6}}>
    {v.label}{v.count!=null&&<span style={{font:'500 11px/1 var(--font-mono)',color:'var(--text-muted)'}}>{v.count}</span>}
   </button>})}
 </div>;
}