Blocking confirmation — use for commitments (accepting loan terms, submitting declarations).
```jsx
<Dialog open={o} title="Accept loan terms?" onClose={close} footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="accent">Accept and sign</Button></>}>…</Dialog>
```