Switch between sibling views; underline for page sections, segmented for compact toggles (NDVI / RGB).
```jsx
<Tabs items={['Overview','Fields','Loans']} value={tab} onChange={setTab} />
<Tabs variant="segmented" items={['NDVI','True colour']} value={v} onChange={setV} />
```