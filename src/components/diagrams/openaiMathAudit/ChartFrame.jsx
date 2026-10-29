import React, { useState } from 'react'
import './charts.css'

// Figure wrapper: title, note, the chart, its source, and a table view of the same numbers.
export function ChartFrame({ id, title, note, source, table, controls, children }) {
  return (
    <figure className="ch" aria-labelledby={`${id}-title`}>
      <figcaption className="ch-head">
        <h3 id={`${id}-title`} className="ch-title">{title}</h3>
        {note && <p className="ch-note">{note}</p>}
      </figcaption>
      {controls && <div className="ch-controls">{controls}</div>}
      <div className="ch-body">{children}</div>
      <p className="ch-source">Source: {source}</p>
      {table && <DataTable {...table} />}
    </figure>
  )
}

export function DataTable({ caption = 'Show the numbers', columns, rows }) {
  return (
    <details className="ch-table">
      <summary>{caption}</summary>
      <div className="ch-table-scroll">
        <table>
          <thead>
            <tr>{columns.map(c => <th key={c.key} className={c.numeric ? 'num' : undefined} scope="col">{c.label}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {columns.map(c => <td key={c.key} className={c.numeric ? 'num' : undefined}>{c.format ? c.format(r[c.key], r) : r[c.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  )
}

// One active mark per chart; hover and keyboard focus behave the same.
export function useActiveMark() {
  const [active, setActive] = useState(null)
  const clear = key => setActive(a => (a === key ? null : a))
  const bind = key => ({
    tabIndex: 0,
    onPointerEnter: () => setActive(key),
    onPointerLeave: () => clear(key),
    onFocus: () => setActive(key),
    onBlur: () => clear(key)
  })
  return [active, bind, setActive]
}

// Values lead, labels follow; each row is keyed by a short stroke of the mark's colour.
export function Tip({ title, rows, style, className = '' }) {
  return (
    <div className={`ch-tip ${className}`} role="tooltip" style={style}>
      {title && <div className="ch-tip-title">{title}</div>}
      {rows.map(r => (
        <div key={r.label} className="ch-tip-row">
          {r.color && <span className="ch-tip-key" style={{ background: r.color }} />}
          <strong>{r.value}</strong>
          <span>{r.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Legend({ items }) {
  return (
    <ul className="ch-legend">
      {items.map(it => (
        <li key={it.label}>
          <span className="ch-legend-swatch" style={{ background: it.color }} />
          {it.label}
        </li>
      ))}
    </ul>
  )
}
