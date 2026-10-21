function FieldView({go}){
 const { Card, Stat, Badge, Button, Tabs, Switch, Tooltip, IconButton } = window.AGTDesignSystem_48f3d6;
 const f=AGT_DATA.fields[0];const [layer,setLayer]=React.useState('NDVI');const [tab,setTab]=React.useState('Vigor');
 return <div style={{padding:'28px 40px 48px',display:'flex',flexDirection:'column',gap:24}}>
  <div style={{display:'flex',gap:8,alignItems:'center'}}>{AGT_DATA.fields.map((x,i)=><Badge key={x.id} tone={i===0?'positive':'neutral'} dot={i===0}>{x.id}</Badge>)}</div>
  <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.4fr) minmax(0,1fr)',gap:24}}>
   <Card padding={16} style={{gap:12}}>
    <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'space-between',alignItems:'center'}}><Tabs variant="segmented" items={['NDVI','True colour','Moisture']} value={layer} onChange={setLayer}/><div style={{display:'flex',gap:8,alignItems:'center'}}><Switch label="Cloud mask" defaultChecked/><IconButton icon="layers" label="Layers" variant="secondary" size="s"/><IconButton icon="maximize-2" label="Expand" variant="secondary" size="s"/></div></div>
    {layer==='NDVI'?<NdviGrid/>:<div style={{aspectRatio:'22/14',borderRadius:'var(--radius-m)',background:'repeating-linear-gradient(135deg,var(--stone-100) 0 10px,var(--stone-50) 10px 20px)',display:'flex',alignItems:'center',justifyContent:'center',font:'500 12px var(--font-mono)',color:'var(--text-muted)'}}>{layer} imagery · Sentinel-2 tile placeholder</div>}
    <div style={{display:'flex',flexWrap:'wrap',gap:'4px 16px',justifyContent:'space-between',font:'500 11px var(--font-mono)',color:'var(--text-muted)'}}><span style={{whiteSpace:'nowrap'}}>Sentinel-2 · 10 Oct 2026 · 4% cloud</span><span style={{whiteSpace:'nowrap'}}>−31.4135, −64.1811</span></div>
   </Card>
   <div style={{display:'flex',flexDirection:'column',gap:24}}>
    <Card eyebrow={f.crop+' · '+f.stage} title={f.name} action={<Badge tone="positive">{f.statusLabel}</Badge>}>
     <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
      <Stat label={<Tooltip content="Normalized Difference Vegetation Index"><span>NDVI</span></Tooltip>} value={f.ndvi.toFixed(2)} delta={f.delta} caption="14 days"/>
      <Stat label="Yield estimate" value={f.yield} unit="t/ha" delta="+4.8%" caption="vs. 5-yr avg"/>
      <Stat label="Area" value={f.ha} unit="ha" size="s"/>
      <Stat label="Collateral value" value="$64,200" size="s"/>
     </div>
    </Card>
    <Card title="Evidence on file" padding={20}>
     {[['Planting report','Verified 2 Sep','positive'],['Seed invoice','Verified 28 Aug','positive'],['Mid-season photos','Due 20 Oct','caution']].map(([a,b,t])=><div key={a} style={{display:'flex',justifyContent:'space-between',alignItems:'center',font:'14px var(--font-sans)'}}><span style={{color:'var(--text-primary)'}}>{a}</span><Badge tone={t}>{b}</Badge></div>)}
    </Card>
   </div>
  </div>
  <Card padding={20}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Tabs items={['Vigor','Rainfall','Temperature']} value={tab} onChange={setTab}/><Button size="s" variant="secondary" icon="download">Export CSV</Button></div>
   <NdviChart data={AGT_DATA.ndviSeries}/>
  </Card>
 </div>;
}
window.FieldView=FieldView;