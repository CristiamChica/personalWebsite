function Loan({go,toast}){
 const { Card, Stat, Badge, Button, Dialog, Progress } = window.AGTDesignSystem_48f3d6;
 const [open,setOpen]=React.useState(false);
 const sched=[['Disbursal 1','12 Sep 2026','$24,000','positive','Paid out'],['Disbursal 2','On report','$11,000','caution','Awaiting data'],['Disbursal 3','15 Dec 2026','$13,000','neutral','Scheduled'],['Repayment','Mar 2027','$52,420','info','At harvest']];
 return <div style={{padding:'28px 40px 48px',display:'flex',flexDirection:'column',gap:24}}>
  <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.4fr)',gap:24}}>
   <Card variant="inverse" eyebrow="AGT-2291 · Soybean" title="Harvest-backed loan" padding={28}>
    <div style={{font:'500 48px/1 var(--font-display)',color:'#fff'}}>$48,000</div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,font:'13px/1.4 var(--font-sans)',color:'var(--artemisia-200)'}}><div>APR<div style={{font:'500 16px var(--font-mono)',color:'#fff'}}>9.2%</div></div><div>LTV<div style={{font:'500 16px var(--font-mono)',color:'#fff'}}>58%</div></div><div>Term<div style={{font:'500 16px var(--font-mono)',color:'#fff'}}>6 mo</div></div></div>
    <Progress inverse value={50} tone="accent" label="Disbursed" valueLabel="$24,000 of $48,000" />
    <Button variant="accent" iconRight="arrow-right" onClick={()=>setOpen(true)}>Request next disbursal</Button>
   </Card>
   <Card title="Schedule" padding={0} style={{gap:0}}>
    <div style={{padding:'0 24px 8px'}}>{sched.map(([a,b,c,t,l],i)=><div key={a} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto auto',gap:16,alignItems:'center',padding:'14px 0',borderTop:i?'1px solid var(--border-hairline)':0}}><div style={{minWidth:0}}><div style={{font:'600 14px/1.3 var(--font-sans)',color:'var(--text-primary)'}}>{a}</div><div style={{font:'13px/1.3 var(--font-sans)',color:'var(--text-secondary)',whiteSpace:'nowrap'}}>{b}</div></div><span style={{font:'500 14px var(--font-mono)',color:'var(--text-primary)',whiteSpace:'nowrap'}}>{c}</span><Badge tone={t}>{l}</Badge></div>)}</div>
   </Card>
  </div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
   <Card padding={20}><Stat label="Collateral" value="270.1" unit="ha" caption="F-14, F-21 · Soybean"/></Card>
   <Card padding={20}><Stat label="Projected harvest value" value="$214k" delta="+3.2%" caption="CBOT Nov-27"/></Card>
   <Card padding={20}><Stat label="Data score" value="94" unit="/100" delta="+6" caption="Reports match imagery"/></Card>
  </div>
  <Dialog open={open} onClose={()=>setOpen(false)} eyebrow="AGT-2291" title="Request $11,000 disbursal?" footer={<><Button variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button><Button variant="accent" onClick={()=>{setOpen(false);toast('Disbursal requested','Funds arrive once the Field 9 report verifies.')}}>Request disbursal</Button></>}>This needs a verified planting report for Field 9. Funds go to your account ending 4471 within one business day of verification.</Dialog>
 </div>;
}
window.Loan=Loan;