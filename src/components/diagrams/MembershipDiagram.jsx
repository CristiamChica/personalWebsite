import React from 'react'

function MembershipDiagram({ animate = false }) {
  const longStyle = animate
    ? { strokeDasharray: 226, strokeDashoffset: 226, animation: 'scDash 2s ease-out forwards' }
    : {}
  const short1Style = animate
    ? { strokeDasharray: 114, strokeDashoffset: 114, animation: 'scDash 1.4s ease-out 0.4s forwards' }
    : {}
  const short2Style = animate
    ? { strokeDasharray: 114, strokeDashoffset: 114, animation: 'scDash 1.4s ease-out 1s forwards' }
    : {}

  return (
    <svg viewBox="0 0 252 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Axes */}
      <line x1="22" y1="14" x2="22" y2="126" stroke="var(--border-strong)" strokeWidth="1" />
      <line x1="22" y1="126" x2="246" y2="126" stroke="var(--border-strong)" strokeWidth="1" />

      {/* Axis labels */}
      <text x="14" y="22" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace">p</text>
      <text x="234" y="140" fill="var(--faint-2)" fontSize="9" fontFamily="'JetBrains Mono', monospace">t →</text>

      {/* t₀ / t₁ / T labels */}
      <text x="22" y="140" textAnchor="middle" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace">t₀</text>
      <text x="134" y="140" textAnchor="middle" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace">t₁</text>
      <text x="246" y="140" textAnchor="middle" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace">T</text>

      {/* Renewal dashed vertical */}
      <line x1="134" y1="16" x2="134" y2="126" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
      <text x="138" y="26" fill="var(--faint)" fontSize="8" fontFamily="'JetBrains Mono', monospace">renewal</text>

      {/* ── Long-term price: flat at y=72 ── */}
      <line x1="22" y1="72" x2="246" y2="72"
        stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round"
        style={longStyle} />
      <text x="26" y="62" fill="var(--accent)" fontSize="9"
        fontFamily="'JetBrains Mono', monospace" fontWeight="500">long-term</text>

      {/* ── Short-term: low intro → jump at renewal ── */}
      {/* Period 1: intro price below long-term */}
      <line x1="22" y1="100" x2="134" y2="100"
        stroke="var(--curve-2)" strokeWidth="2.2" strokeLinecap="round"
        style={short1Style} />
      {/* Jump connector */}
      <line x1="134" y1="100" x2="134" y2="46"
        stroke="var(--curve-2)" strokeWidth="1.4" strokeDasharray="3 3" />
      {/* Period 2: lock-in price above long-term */}
      <line x1="134" y1="46" x2="246" y2="46"
        stroke="var(--curve-2)" strokeWidth="2.2" strokeLinecap="round"
        style={short2Style} />

      {/* Open circle — price before renewal */}
      <circle cx="134" cy="100" r="3.5"
        fill="var(--surface)" stroke="var(--curve-2)" strokeWidth="1.5" />
      {/* Filled circle — new price after renewal */}
      <circle cx="134" cy="46" r="3.5" fill="var(--curve-2)" />

      <text x="26" y="115" fill="var(--faint-2)" fontSize="9"
        fontFamily="'JetBrains Mono', monospace" fontWeight="500">short-term</text>
    </svg>
  )
}

export default MembershipDiagram
