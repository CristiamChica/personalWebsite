import React from 'react'
import { ChartFrame, Legend, Tip, useActiveMark } from './ChartFrame.jsx'
import { LEAN_STATUSES, leanByTier } from '../../../data/openaiMathAudit/figures.js'
import { pct } from '../../writing/format.js'

// Segments narrower than this share skip their inline count; the tooltip and table carry it.
const MIN_LABEL_SHARE = 0.08

function LeanByTierChart() {
  const [active, bind] = useActiveMark()

  return (
    <ChartFrame
      id="lean-by-tier"
      title="Lean coverage by significance tier"
      note="Share of families in each Lean status, from OpenAI's own scope notes as triaged here. Bars are 100% of each row."
      source="families.json (tier, lean)"
      table={{
        columns: [
          { key: 'label', label: 'Tier' },
          ...LEAN_STATUSES.map((s, i) => ({ key: `s${i}`, label: s.short, numeric: true })),
          { key: 'total', label: 'Families', numeric: true }
        ],
        rows: leanByTier.map(r => ({ label: r.label, total: r.total, ...Object.fromEntries(r.counts.map((c, i) => [`s${i}`, c.n])) }))
      }}
    >
      <Legend items={LEAN_STATUSES.map(s => ({ label: s.short, color: s.color }))} />
      <div className="lt-rows">
        {leanByTier.map((row, ri) => (
          <div key={row.label} className={`lt-row${ri === 0 ? ' lt-row--all' : ''}${active === row.label ? ' is-active' : ''}`} {...bind(row.label)}
            aria-label={`${row.label}: ${row.counts.map(c => `${c.n} ${c.short}`).join(', ')}`}>
            <div className="lt-label">
              <span>{row.label}</span>
              <span className="lt-total">{row.total} families</span>
            </div>
            <div className="lt-bar">
              {row.counts.filter(c => c.n > 0).map(c => (
                <span key={c.key} className="lt-seg" style={{ flexGrow: c.n, background: c.color }}>
                  {c.n / row.total >= MIN_LABEL_SHARE && <span className={`lt-seg-label lt-seg-label--${c.ink}`}>{c.n}</span>}
                </span>
              ))}
            </div>
            {active === row.label && (
              <Tip
                className="ch-tip--row"
                title={`${row.label} · ${row.total} families`}
                rows={row.counts.map(c => ({ label: c.short, value: `${c.n} · ${pct(c.n, row.total)}`, color: c.color }))}
              />
            )}
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}

export default LeanByTierChart
