import React from 'react'
import { ChartFrame } from './ChartFrame.jsx'
import ColumnChart from './ColumnChart.jsx'
import { F, depthCounts, datesCounts } from '../../../data/openaiMathAudit/figures.js'
import { n, formatDate } from '../../writing/format.js'

const DEEP = 5

export function DepthChart() {
  return (
    <ChartFrame
      id="depth"
      title="Longest chain of in-release citations below each manuscript"
      note={`Counted in manuscripts, including itself; mutual citations between companion papers are cut, so these are lower bounds. ${n(F.depth5plus)} manuscripts sit on chains of ${DEEP} or more (highlighted).`}
      source="papers_summary.json (depth_counts)"
      table={{
        columns: [{ key: 'depth', label: 'Chain length' }, { key: 'n', label: 'Manuscripts', numeric: true }],
        rows: depthCounts
      }}
    >
      <ColumnChart
        label={`Manuscripts by citation chain length, 1 to ${n(F.maxDepth)}`}
        bars={depthCounts.map(d => ({
          key: d.depth, n: d.n, highlight: d.depth >= DEEP,
          tipTitle: `Chain of ${d.depth}`, tipLabel: d.n === 1 ? 'manuscript' : 'manuscripts'
        }))}
        ticks={depthCounts.map((d, i) => ({ index: i, label: d.depth }))}
      />
    </ChartFrame>
  )
}

const DAY = 86400000
const isClusterDay = iso => iso >= '2026-09-23' && iso <= '2026-09-25'

export function DatesChart() {
  const byDate = Object.fromEntries(datesCounts.map(d => [d.date, d.n]))
  const start = Date.parse(`${F.dateFirst.value}T00:00:00Z`)
  const days = Array.from({ length: F.spanDays.value + 1 }, (_, i) => new Date(start + i * DAY).toISOString().slice(0, 10))
  const short = iso => formatDate(iso, { month: 'short', day: 'numeric' })
  const tickDays = new Set([F.dateFirst.value, '2026-09-23', '2026-10-05', F.dateLast.value])

  return (
    <ChartFrame
      id="dates"
      title="Manuscripts by the date on the paper"
      note={`${n(F.datedSep23to25)} of ${n(F.manuscripts)} manuscripts are dated September 23–25 (highlighted). Dates come from directory names, so they are write-up or release dates.`}
      source="papers_summary.json (dates)"
      table={{
        columns: [{ key: 'date', label: 'Date', format: v => formatDate(v) }, { key: 'n', label: 'Manuscripts', numeric: true }],
        rows: datesCounts
      }}
    >
      <ColumnChart
        label={`Manuscripts per day, ${short(F.dateFirst.value)} to ${short(F.dateLast.value)} 2026`}
        showValues={false}
        bars={days.map(d => ({
          key: d, n: byDate[d] || 0, highlight: isClusterDay(d),
          tipTitle: formatDate(d), tipLabel: byDate[d] === 1 ? 'manuscript' : 'manuscripts'
        }))}
        ticks={days.map((d, i) => ({ d, i })).filter(x => tickDays.has(x.d)).map(x => ({ index: x.i, label: short(x.d) }))}
      />
    </ChartFrame>
  )
}
