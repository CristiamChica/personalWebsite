import React from 'react';
const T={positive:['var(--midori-50)','var(--midori-700)','var(--midori-500)'],caution:['var(--ochre-100)','var(--ochre-700)','var(--ochre-500)'],critical:['var(--crimson-100)','var(--crimson-700)','var(--crimson-500)'],info:['var(--artemisia-50)','var(--artemisia-700)','var(--artemisia-500)'],accent:['var(--sienna-50)','var(--sienna-700)','var(--sienna-500)'],neutral:['var(--stone-100)','var(--stone-700)','var(--stone-500)']};
export function Badge({tone='neutral',dot=true,children,style}){
 const [bg,fg,d]=T[tone]||T.neutral;
 return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:22,padding:'0 8px',borderRadius:'var(--radius-pill)',background:bg,color:fg,font:'var(--weight-semibold) 12px/1 var(--font-sans)',whiteSpace:'nowrap',...style}}>{dot&&<span style={{width:6,height:6,borderRadius:'50%',background:d}}/>}{children}</span>;
}