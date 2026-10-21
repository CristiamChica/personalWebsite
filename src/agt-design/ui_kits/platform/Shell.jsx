const { Icon, IconButton, Badge } = window.AGTDesignSystem_48f3d6;
function Sidebar({route,go}){
 const items=[['dashboard','Overview','layout-grid'],['field','Fields','map'],['loan','Loans','landmark'],['report','Field reports','file-check'],['docs','Documents','folder']];
 return <aside style={{width:'var(--sidebar-width)',flexShrink:0,background:'var(--surface-nav)',color:'var(--artemisia-100)',display:'flex',flexDirection:'column',padding:'20px 12px'}}>
  <div style={{display:'flex',alignItems:'center',gap:10,padding:'4px 12px 24px'}}><span style={{font:'600 24px/1 var(--font-display)',letterSpacing:'.06em',color:'#fff'}}>AGT</span></div>
  <nav style={{display:'flex',flexDirection:'column',gap:2}}>{items.map(([k,l,ic])=>{const on=route===k;return <button key={k} onClick={()=>go(k)} style={{display:'flex',alignItems:'center',gap:12,height:38,padding:'0 12px',border:0,borderRadius:'var(--radius-m)',background:on?'var(--artemisia-700)':'transparent',color:on?'#fff':'var(--artemisia-200)',font:'500 14px/1 var(--font-sans)',cursor:'pointer',textAlign:'left'}}><Icon name={ic} size={18} color={on?'var(--byakuroku-300)':'currentColor'}/>{l}</button>})}</nav>
  <div style={{marginTop:'auto',padding:12,borderTop:'1px solid var(--artemisia-700)',display:'flex',flexDirection:'column',gap:4}}>
   <div style={{font:'600 13px/1.3 var(--font-sans)',color:'#fff'}}>{AGT_DATA.farmer.name}</div>
   <div style={{font:'12px/1.3 var(--font-sans)',color:'var(--artemisia-300)'}}>{AGT_DATA.farmer.farm}</div>
  </div>
 </aside>;
}
function Topbar({title,eyebrow,actions}){
 return <header style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:16,padding:'28px 40px 20px',borderBottom:'1px solid var(--border-hairline)',background:'var(--surface-page)'}}>
  <div style={{display:'flex',flexDirection:'column',gap:6}}>{eyebrow&&<div style={{font:'600 11px/1 var(--font-sans)',letterSpacing:'var(--tracking-overline)',textTransform:'uppercase',color:'var(--text-muted)'}}>{eyebrow}</div>}<h1 style={{margin:0,font:'500 32px/1.1 var(--font-display)',color:'var(--text-primary)'}}>{title}</h1></div>
  <div style={{display:'flex',gap:8,alignItems:'center'}}>{actions}<IconButton icon="bell" label="Notifications" variant="secondary"/></div>
 </header>;
}
function NdviGrid({cols=22,cell=14,gap=1}){
 const c=v=>v<.2?'var(--ndvi-0)':v<.35?'var(--ndvi-1)':v<.5?'var(--ndvi-2)':v<.62?'var(--ndvi-3)':v<.75?'var(--ndvi-4)':'var(--ndvi-5)';
 return <div style={{display:'grid',gridTemplateColumns:`repeat(${cols},1fr)`,gap,background:'var(--artemisia-900)',padding:gap,borderRadius:'var(--radius-m)'}}>{AGT_DATA.grid.map((v,i)=><div key={i} style={{aspectRatio:'1',background:c(v)}}/>)}</div>;
}
function NdviChart({data,height=160}){
 const w=600,h=height,p=24,max=1;const pts=data.map((v,i)=>[p+i*(w-2*p)/(data.length-1),h-p-v/max*(h-2*p)]);
 return <svg viewBox={`0 0 ${w} ${h}`} style={{width:'100%',height}} preserveAspectRatio="none">
  {[0,.25,.5,.75,1].map(g=><line key={g} x1={p} x2={w-p} y1={h-p-g*(h-2*p)} y2={h-p-g*(h-2*p)} stroke="var(--border-hairline)"/>)}
  <polyline points={pts.map(q=>q.join(',')).join(' ')} fill="none" stroke="var(--midori-500)" strokeWidth="2"/>
  {pts.map((q,i)=>i===pts.length-1&&<circle key={i} cx={q[0]} cy={q[1]} r="4" fill="var(--sienna-500)"/>)}
 </svg>;
}
const money=n=>'$'+n.toLocaleString('en-US');
Object.assign(window,{Sidebar,Topbar,NdviGrid,NdviChart,money});