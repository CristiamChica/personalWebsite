function Login({onLogin}){
 const { Button, Input, Plate } = window.AGTDesignSystem_48f3d6;
 return <div style={{minHeight:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
  <div style={{background:'var(--surface-inverse)',color:'var(--text-inverse)',padding:56,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
   <span style={{font:'600 28px/1 var(--font-display)',letterSpacing:'.06em'}}>AGT</span>
   <Plate size={320}/>
   <div style={{display:'flex',flexDirection:'column',gap:12,maxWidth:420}}><div style={{font:'500 36px/1.15 var(--font-display)'}}>Credit that grows with the crop.</div><div style={{font:'15px/1.55 var(--font-sans)',color:'var(--artemisia-200)'}}>Your field data and our satellite passes, together, decide what you can borrow.</div></div>
  </div>
  <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:56}}>
   <form onSubmit={e=>{e.preventDefault();onLogin()}} style={{width:360,display:'flex',flexDirection:'column',gap:20}}>
    <h2 style={{margin:0,font:'500 28px/1.2 var(--font-display)',color:'var(--text-primary)'}}>Sign in</h2>
    <Input label="Email" type="email" defaultValue="lucia@laferreyra.com.ar"/>
    <Input label="Password" type="password" defaultValue="••••••••••"/>
    <Button type="submit" size="l" fullWidth>Sign in</Button>
    <div style={{font:'13px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>New to AGT? <a href="#">Register your farm</a></div>
   </form>
  </div>
 </div>;
}
window.Login=Login;