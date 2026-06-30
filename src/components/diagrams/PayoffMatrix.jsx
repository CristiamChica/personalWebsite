import React from 'react'
import './PayoffMatrix.css'

function PayoffMatrix() {
  return (
    <div className="pm">
      {/* Header row */}
      <div className="pm-cell" />
      <div className="pm-cell pm-col-hdr">Cooperate</div>
      <div className="pm-cell pm-col-hdr">Defect</div>

      {/* Cooperate row */}
      <div className="pm-cell pm-row-hdr"><span>Coop.</span></div>
      <div className="pm-cell pm-payoff">
        <span className="pm-val pm-val--ink">3, 3</span>
      </div>
      <div className="pm-cell pm-payoff">
        <span className="pm-val pm-val--faint">0, 5</span>
      </div>

      {/* Defect row */}
      <div className="pm-cell pm-row-hdr"><span>Def.</span></div>
      <div className="pm-cell pm-payoff">
        <span className="pm-val pm-val--faint">5, 0</span>
      </div>
      <div className="pm-cell pm-payoff pm-payoff--nash">
        <span className="pm-val pm-val--nash">1, 1</span>
        <span className="pm-nash-lbl">NASH</span>
      </div>
    </div>
  )
}

export default PayoffMatrix
