function Report({go,toast}){
 const { Card, Input, Select, Checkbox, Radio, Button, Progress, Tag } = window.AGTDesignSystem_48f3d6;
 const [m,setM]=React.useState('drill');const [ok,setOk]=React.useState(true);
 return <div style={{padding:'28px 40px 48px',display:'grid',gridTemplateColumns:'minmax(0,1.5fr) minmax(0,1fr)',gap:24,alignItems:'start'}}>
  <Card title="Planting report" eyebrow="Field 9 · El Bajo · Maize">
   <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:16}}>
    <Select label="Hybrid" options={['DK 72-10','AX 7784','NK 897']}/>
    <Input label="Planting date" defaultValue="18 Sep 2026" mono/>
    <Input label="Seeding rate" defaultValue="78,000" suffix="seeds/ha" mono/>
    <Input label="Planted area" defaultValue="86.0" suffix="ha" mono hint="Satellite estimate: 85.6 ha"/>
   </div>
   <div style={{display:'flex',flexDirection:'column',gap:10}}><div style={{font:'600 12px var(--font-sans)',letterSpacing:'var(--tracking-wide)',color:'var(--text-secondary)'}}>Method</div><div style={{display:'flex',gap:24}}><Radio name="m" value="drill" label="No-till drill" checked={m==='drill'} onChange={()=>setM('drill')}/><Radio name="m" value="conv" label="Conventional" checked={m==='conv'} onChange={()=>setM('conv')}/></div></div>
   <div style={{display:'flex',flexDirection:'column',gap:10}}><div style={{font:'600 12px var(--font-sans)',letterSpacing:'var(--tracking-wide)',color:'var(--text-secondary)'}}>Attachments</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}><Tag icon="file" onRemove={()=>{}}>seed-invoice.pdf</Tag><Tag icon="image" onRemove={()=>{}}>planter-01.jpg</Tag><Tag icon="plus" onClick={()=>{}}>Add file</Tag></div></div>
   <Checkbox label="I confirm this report reflects what was planted on this field." checked={ok} onChange={e=>setOk(e.target.checked)}/>
   <div style={{display:'flex',gap:8,justifyContent:'flex-end',borderTop:'1px solid var(--border-hairline)',paddingTop:16}}><Button variant="ghost" onClick={()=>go('dashboard')}>Save draft</Button><Button icon="upload" disabled={!ok} onClick={()=>{toast();go('dashboard')}}>Submit report</Button></div>
  </Card>
  <div style={{display:'flex',flexDirection:'column',gap:24}}>
   <Card variant="tint" eyebrow="What this unlocks" title="$11,000 second disbursal"><div style={{font:'14px/1.55 var(--font-sans)',color:'var(--text-body)'}}>We check your report against the satellite pass from 9 October. Matching reports usually verify within a day.</div><Progress label="Report completeness" value={ok?92:78}/></Card>
   <Card title="Satellite check" padding={20}><NdviGrid/></Card>
  </div>
 </div>;
}
window.Report=Report;