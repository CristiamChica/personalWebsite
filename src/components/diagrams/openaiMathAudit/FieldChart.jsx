import React, { useState } from 'react'
import { Tabs } from '../../../agt-design/components/navigation/Tabs.jsx'
import { ChartFrame, Tip, useActiveMark } from './ChartFrame.jsx'
import { byField } from '../../../data/openaiMathAudit/figures.js'
import { n } from '../../writing/format.js'

const METRICS = [
  { value: 'pages', label: 'Pages', unit: 'pages' },
  { value: 'families', label: 'Families', unit: 'families' },
  { value: 'hours', label: 'Review hours', unit: 'expert-hours, mid case' }
]

function FieldChart() {
  const [metric, setMetric] = useState('pages')
  const [active, bind] = useActiveMark()
  const m = METRICS.find(x => x.value === metric)
  const rows = [...byField].sort((a, b) => b[metric] - a[metric])
  const max = rows[0][metric]

  return (
    <ChartFrame
      id="by-field"
      title="Size of the release by field"
      note="OpenAI's subject labels. Switch between pages, number of families and the review-hour estimate."
      source="families.json (field, pages, hours_mid)"
      controls={<Tabs variant="segmented" items={METRICS} value={metric} onChange={setMetric} />}
      table={{
        columns: [
          { key: 'field', label: 'Field' },
          { key: 'families', label: 'Families', numeric: true },
          { key: 'pages', label: 'Pages', numeric: true, format: n },
          { key: 'hours', label: 'Hours (mid)', numeric: true, format: n }
        ],
        rows: [...byField].sort((a, b) => b.pages - a.pages)
      }}
    >
      <div className="fb-rows" role="img" aria-label={`${m.label} by field, largest first`}>
        {rows.map(r => (
          <div key={r.field} className={`fb-row${active === r.field ? ' is-active' : ''}`} {...bind(r.field)}>
            <span className="fb-label">{r.field}</span>
            <span className="fb-track">
              <span className="fb-bar" style={{ width: `${(r[metric] / max) * 82}%` }} />
              <span className="fb-val">{n(r[metric])}</span>
            </span>
            {active === r.field && (
              <Tip
                className="ch-tip--row"
                title={r.field}
                rows={[
                  { label: 'pages', value: n(r.pages) },
                  { label: 'families', value: r.families },
                  { label: 'expert-hours, mid', value: n(r.hours) }
                ]}
              />
            )}
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}

export default FieldChart
