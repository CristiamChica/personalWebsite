import React from 'react'
import { Tip, useActiveMark } from './ChartFrame.jsx'

// Vertical columns from one baseline. Heights are percentages, so it prerenders and needs no measuring.
// bars: [{ key, n, highlight, tipTitle, tipLabel }]; ticks: [{ index, label }]
function ColumnChart({ bars, ticks, height = 180, showValues = true, label }) {
  const [active, bind] = useActiveMark()
  const max = Math.max(...bars.map(b => b.n))

  return (
    <div className="cc" role="img" aria-label={label}>
      <div className="cc-plot" style={{ height }}>
        {bars.map((b, i) => (
          <div key={b.key} className={`cc-slot${active === b.key ? ' is-active' : ''}`} {...(b.n ? bind(b.key) : {})} aria-label={b.n ? `${b.tipTitle}: ${b.tipLabel}` : undefined}>
            {b.n > 0 && (
              <div className={`cc-col${b.highlight ? ' cc-col--hi' : ''}`} style={{ height: `${(b.n / max) * 100}%` }}>
                {showValues && <span className="cc-val">{b.n}</span>}
              </div>
            )}
            {active === b.key && (
              <Tip
                className={i > bars.length * 0.6 ? 'ch-tip--left' : ''}
                style={{ bottom: `calc(${(b.n / max) * 100}% + 22px)` }}
                title={b.tipTitle}
                rows={[{ value: b.n, label: b.tipLabel, color: b.highlight ? 'var(--sienna-500)' : 'var(--artemisia-400)' }]}
              />
            )}
          </div>
        ))}
      </div>
      <div className="cc-axis">
        {ticks.map(t => (
          <span key={t.index} className="cc-tick" style={{ left: `${((t.index + 0.5) / bars.length) * 100}%` }}>{t.label}</span>
        ))}
      </div>
    </div>
  )
}

export default ColumnChart
