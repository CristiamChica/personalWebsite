import React, { useRef, useState } from 'react'
import { ChartFrame, Tip } from './ChartFrame.jsx'
import { statementVsProof } from '../../../data/openaiMathAudit/figures.js'
import { n, compact } from '../../writing/format.js'

// Log-log axes as powers of ten. Points are HTML dots placed by percentage, so they stay round at any width.
const X = [0, 5] // 1 to 100K statement lines
const Y = [2, 7] // 100 to 10M proof lines
const px = v => ((Math.log10(v) - X[0]) / (X[1] - X[0])) * 100
const py = v => 100 - ((Math.log10(v) - Y[0]) / (Y[1] - Y[0])) * 100
const range = ([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => 10 ** (a + i))

// Narrow screens keep only the family number; the paragraph after the chart names all three
const CALLOUTS = {
  '005': { name: "Catalan's constant", place: 'above' },
  '378': { name: 'ETH disproof', place: 'below' },
  '032': { name: 'Hodge for CM abelian varieties', place: 'left' }
}

function StatementProofChart() {
  const plot = useRef(null)
  const [active, setActive] = useState(null)

  // Nearest point to the pointer, so readers never have to land on an 8px dot
  const onMove = e => {
    const box = plot.current.getBoundingClientRect()
    let best = null
    let bestD = Infinity
    for (const p of statementVsProof) {
      const dx = (px(p.stmt) / 100) * box.width - (e.clientX - box.left)
      const dy = (py(p.proof) / 100) * box.height - (e.clientY - box.top)
      const d = dx * dx + dy * dy
      if (d < bestD) { bestD = d; best = p }
    }
    setActive(bestD < 40 * 40 ? best : null)
  }

  return (
    <ChartFrame
      id="statement-proof"
      title="What a reader must trust, against what the machine checked"
      note={`Each dot is one of the ${statementVsProof.length} families with Comparator challenges. Horizontal: lines in the challenge statements, which a person has to read. Vertical: lines of Lean proof, which Comparator checks. Both axes are logarithmic; the diagonal marks a proof as long as its statement.`}
      source="families.json (stmt_lines, proof_lines)"
      table={{
        caption: `Show all ${statementVsProof.length} families`,
        columns: [
          { key: 'num', label: '#' },
          { key: 'title', label: 'Family' },
          { key: 'stmt', label: 'Statement lines', numeric: true, format: n },
          { key: 'proof', label: 'Proof lines', numeric: true, format: n }
        ],
        rows: [...statementVsProof].sort((a, b) => b.stmt - a.stmt)
      }}
    >
      <div className="sp">
        <div className="sp-ylabel">Proof lines</div>
        <div className="sp-frame">
          <div className="sp-plot" ref={plot} onPointerMove={onMove} onPointerLeave={() => setActive(null)}
            role="img" aria-label={`Scatter of statement lines against proof lines for ${statementVsProof.length} families; the full list is in the table below`}>
            {range(Y).map(v => (
              <span key={`y${v}`} className="sp-grid sp-grid--y" style={{ top: `${py(v)}%` }}>
                <span className="sp-tick sp-tick--y">{compact(v)}</span>
              </span>
            ))}
            {range(X).map(v => (
              <span key={`x${v}`} className="sp-grid sp-grid--x" style={{ left: `${px(v)}%` }}>
                <span className="sp-tick sp-tick--x">{compact(v)}</span>
              </span>
            ))}
            <svg className="sp-ref" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <line x1={px(100)} y1={py(100)} x2={px(1e5)} y2={py(1e5)} vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="sp-ref-label" style={{ left: `${px(2500)}%`, top: `${py(2500)}%` }}>proof as long as statement</span>
            {statementVsProof.map(p => (
              <span key={p.num}
                className={`sp-dot${CALLOUTS[p.num] ? ' sp-dot--hi' : ''}${active === p ? ' is-active' : ''}`}
                style={{ left: `${px(p.stmt)}%`, top: `${py(p.proof)}%` }} />
            ))}
            {statementVsProof.filter(p => CALLOUTS[p.num]).map(p => (
              <span key={`c${p.num}`} className={`sp-callout sp-callout--${CALLOUTS[p.num].place}`}
                style={{ left: `${px(p.stmt)}%`, top: `${py(p.proof)}%` }}>
                {p.num}<span className="sp-callout-name"> · {CALLOUTS[p.num].name}</span>
              </span>
            ))}
            {active && (
              <Tip
                className={`sp-tip${px(active.stmt) > 55 ? ' ch-tip--left' : ''}`}
                style={{ left: `${px(active.stmt)}%`, top: `${py(active.proof)}%` }}
                title={`${active.num} · ${active.title}`}
                rows={[
                  { label: 'statement lines', value: n(active.stmt) },
                  { label: 'proof lines', value: n(active.proof) },
                  { label: 'Lean status', value: active.lean }
                ]}
              />
            )}
          </div>
          <div className="sp-xlabel">Statement lines</div>
        </div>
      </div>
    </ChartFrame>
  )
}

export default StatementProofChart
