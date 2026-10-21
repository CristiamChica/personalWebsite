function Dashboard({go}){
 const { Card, Stat, Badge, Button, Progress, Icon } = window.AGTDesignSystem_48f3d6;
 const D=AGT_DATA;
 return <div style={{padding:'28px 40px 48px',display:'flex',flexDirection:'column',gap:24}}>
  <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,background:'var(--surface-card)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-l)'}}>
   {[['Credit available','$31,000',null,'+$11,000 after report'],['Outstanding','$61,400',null,'2 active loans'],['Area monitored','421.3','ha','4 fields'],['Avg. NDVI','0.63',null,'+0.02 · 14 days']].map(([l,v,u,c],i)=><div key={l} style={{padding:24,borderLeft:i?'1px solid var(--border-hairline)':0}}><Stat label={l} value={v} unit={u} caption={c}/></div>)}
  </div>
  <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.6fr) minmax(0,1fr)',gap:24}}>
   <Card title="Fields" eyebrow="2026/27 season" action={<Button size="s" variant="ghost" iconRight="arrow-right" onClick={()=>go('field')}>All fields</Button>} padding={0} style={{gap:0}}>
    <div style={{padding:'0 24px'}}>{D.fields.map((f,i)=><div key={f.id} onClick={()=>go('field')} style={{display:'grid',gridTemplateColumns:'1.6fr .8fr .6fr .6fr auto',alignItems:'center',gap:12,padding:'14px 0',borderTop:i?'1px solid var(--border-hairline)':'0',cursor:'pointer'}}>
     <div><div style={{font:'600 14px/1.3 var(--font-sans)',color:'var(--text-primary)'}}>{f.name}</div><div style={{font:'12px/1.3 var(--font-sans)',color:'var(--text-muted)'}}>{f.crop} · {f.stage}</div></div>
     <div style={{font:'500 13px var(--font-mono)',color:'var(--text-secondary)'}}>{f.ha} ha</div>
     <div style={{font:'500 14px var(--font-mono)',color:'var(--text-primary)'}}>{f.ndvi.toFixed(2)}</div>
     <div style={{font:'500 12px var(--font-mono)',color:f.delta.startsWith('-')?'var(--crimson-500)':'var(--midori-600)'}}>{f.delta}</div>
     <Badge tone={f.status}>{f.statusLabel}</Badge></div>)}</div>
    <div style={{height:16}}/>
   </Card>
   <div style={{display:'flex',flexDirection:'column',gap:24}}>
    <Card variant="tint" eyebrow="To do" title="Unlock your next disbursal">
     {D.tasks.map(t=><div key={t.t} style={{display:'flex',gap:12,alignItems:'flex-start'}}><Icon name={t.tone==='caution'?'clock':'file-up'} size={18} color={t.tone==='caution'?'var(--ochre-700)':'var(--artemisia-600)'} style={{marginTop:2}}/><div style={{flex:1}}><div style={{font:'600 14px/1.3 var(--font-sans)',color:'var(--text-primary)'}}>{t.t}</div><div style={{font:'13px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>{t.d}</div></div></div>)}
     <Button icon="upload" onClick={()=>go('report')}>Submit planting report</Button>
    </Card>
    <Card title="Loans" action={<Button size="s" variant="ghost" iconRight="arrow-right" onClick={()=>go('loan')}>Details</Button>}>
     {D.loans.map(l=><div key={l.id} style={{display:'flex',flexDirection:'column',gap:10}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{font:'500 13px var(--font-mono)',color:'var(--text-secondary)'}}>{l.id}</span><Badge tone={l.status}>{l.statusLabel}</Badge></div><Progress value={l.repaid} label={money(l.amount)+' · '+l.rate+'% APR'} valueLabel={l.repaid+'% repaid'} tone="accent"/></div>)}
    </Card>
   </div>
  </div>
 </div>;
}
window.Dashboard=Dashboard;