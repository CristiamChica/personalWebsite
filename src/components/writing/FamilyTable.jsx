import React, { useState } from 'react'
import { LEAN_STATUSES, TIERS, familiesByPriority } from '../../data/openaiMathAudit/figures.js'
import { n } from './format.js'

// Prerenders in priority order with the first rows shown; sorting and filters work after hydration.
export const INITIAL_ROWS = 25
const LEAN = Object.fromEntries(LEAN_STATUSES.map(s => [s.key, s]))

const COLUMNS = [
  { key: 'num', label: '#', sort: (a, b) => a.num.localeCompare(b.num) },
  { key: 'title', label: 'Family' },
  { key: 'lean', label: 'Lean' },
  { key: 'pages', label: 'Pages', numeric: true },
  { key: 'cited_by_families', label: 'Dependents', numeric: true },
  { key: 'hours_mid', label: 'Hours', numeric: true },
  { key: 'priority', label: 'Priority', numeric: true }
]

function FilterRow({ label, options, value, onChange }) {
  return (
    <div className="ft-filter" role="group" aria-label={label}>
      <span className="ft-filter-label">{label}</span>
      {['All', ...options].map(o => (
        <button key={o} type="button" className={`tag ft-tag${value === o ? ' ft-tag--on' : ''}`} aria-pressed={value === o} onClick={() => onChange(o)}>
          {o === 'All' ? o : (LEAN[o]?.short || o)}
        </button>
      ))}
    </div>
  )
}

function FamilyTable() {
  const [tier, setTier] = useState('All')
  const [lean, setLean] = useState('All')
  const [sort, setSort] = useState({ key: 'priority', dir: -1 })
  const [showAll, setShowAll] = useState(false)

  const col = COLUMNS.find(c => c.key === sort.key)
  const rows = familiesByPriority
    .filter(f => (tier === 'All' || f.tier === tier) && (lean === 'All' || f.lean === lean))
    .sort((a, b) => sort.dir * (col.sort ? col.sort(a, b) : a[sort.key] - b[sort.key]))
  const shown = showAll ? rows : rows.slice(0, INITIAL_ROWS)

  const toggleSort = key => setSort(s => ({ key, dir: s.key === key ? -s.dir : (key === 'num' ? 1 : -1) }))

  return (
    <div className="ft">
      <div className="ft-filters">
        <FilterRow label="Tier" options={TIERS} value={tier} onChange={setTier} />
        <FilterRow label="Lean" options={LEAN_STATUSES.map(s => s.key)} value={lean} onChange={setLean} />
      </div>

      <div className="ft-scroll">
        <table className="ft-table">
          <caption className="ft-caption">
            {rows.length} {rows.length === 1 ? 'family' : 'families'}, sorted by {col.label.toLowerCase()} ({sort.dir < 0 ? 'highest' : 'lowest'} first)
          </caption>
          <thead>
            <tr>
              {COLUMNS.map(c => {
                const sortable = c.numeric || c.sort
                const on = sort.key === c.key
                return (
                  <th key={c.key} scope="col" className={c.numeric ? 'num' : undefined}
                    aria-sort={on ? (sort.dir < 0 ? 'descending' : 'ascending') : undefined}>
                    {sortable
                      ? <button type="button" className={`ft-sort${on ? ' ft-sort--on' : ''}`} onClick={() => toggleSort(c.key)}>
                          {c.label}<span aria-hidden="true">{on ? (sort.dir < 0 ? ' ↓' : ' ↑') : ''}</span>
                        </button>
                      : c.label}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {shown.map(f => (
              <tr key={f.num}>
                <td className="ft-num">{f.num}</td>
                <td className="ft-title">
                  {f.title}
                  <span className="ft-field">{f.tier} · {f.field}</span>
                </td>
                <td>
                  <span className="ft-lean">
                    <span className="ft-swatch" style={{ background: LEAN[f.lean].color }} />
                    {LEAN[f.lean].short}
                  </span>
                </td>
                <td className="num">{n(f.pages)}</td>
                <td className="num">{f.cited_by_families}</td>
                <td className="num">{n(f.hours_mid)}</td>
                <td className="num">{f.priority.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rows.length > INITIAL_ROWS && (
        <button type="button" className="btn btn--secondary btn--m ft-more" onClick={() => setShowAll(v => !v)}>
          {showAll ? `Show the first ${INITIAL_ROWS}` : `Show all ${rows.length} families`}
        </button>
      )}
    </div>
  )
}

export default FamilyTable
