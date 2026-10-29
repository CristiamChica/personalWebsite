import React from 'react'
import { ChartFrame, Tip, useActiveMark } from './ChartFrame.jsx'
import { hoursByTier } from '../../../data/openaiMathAudit/figures.js'
import { n } from '../../writing/format.js'

function HoursByTierChart() {
  const [active, bind] = useActiveMark()
  const max = Math.max(...hoursByTier.map(r => r.high))
  const at = v => `${(v / max) * 100}%`

  return (
    <ChartFrame
      id="hours-by-tier"
      title="Expert-hours to review, by tier"
      note="The bar is the mid case (a base rate of 2 hours per page); the whisker runs from the low case (1 hour per page) to the high case (3)."
      source="families.json (tier, hours_low, hours_mid, hours_high)"
      table={{
        columns: [
          { key: 'tier', label: 'Tier' },
          { key: 'families', label: 'Families', numeric: true },
          { key: 'low', label: 'Low', numeric: true, format: n },
          { key: 'mid', label: 'Mid', numeric: true, format: n },
          { key: 'high', label: 'High', numeric: true, format: n }
        ],
        rows: hoursByTier
      }}
    >
      <div className="ht-rows">
        {hoursByTier.map(r => (
          <div key={r.tier} className={`ht-row${active === r.tier ? ' is-active' : ''}`} {...bind(r.tier)}
            aria-label={`${r.tier}: ${n(r.mid)} hours mid case, ${n(r.low)} to ${n(r.high)}`}>
            <div className="ht-label">
              <span className="ht-tier">{r.tier} <span className="ht-count">{r.families} families</span></span>
              <span className="ht-val"><strong>{n(r.mid)} h</strong> <span>{n(r.low)}–{n(r.high)}</span></span>
            </div>
            <div className="ht-track">
              <span className="ht-bar" style={{ width: at(r.mid) }} />
              <span className="ht-whisker" style={{ left: at(r.low), width: `calc(${at(r.high)} - ${at(r.low)})` }} />
            </div>
            {active === r.tier && (
              <Tip
                className="ch-tip--row"
                title={`${r.tier} · ${r.families} families`}
                rows={[
                  { label: 'high case', value: `${n(r.high)} h` },
                  { label: 'mid case', value: `${n(r.mid)} h`, color: 'var(--artemisia-400)' },
                  { label: 'low case', value: `${n(r.low)} h` }
                ]}
              />
            )}
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}

export default HoursByTierChart
