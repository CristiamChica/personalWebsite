import React from 'react'

function CollusionChart({ animate = false }) {
  const curve1Style = animate
    ? { strokeDasharray: 320, strokeDashoffset: 320, animation: 'scDash 2.2s ease-out forwards' }
    : {}
  const curve2Style = animate
    ? { strokeDasharray: 320, strokeDashoffset: 320, animation: 'scDash 2.2s ease-out 0.3s forwards' }
    : {}

  return (
    <svg viewBox="0 0 252 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Axes */}
      <line x1="22" y1="14" x2="22" y2="126" stroke="var(--border-strong)" strokeWidth="1" />
      <line x1="22" y1="126" x2="246" y2="126" stroke="var(--border-strong)" strokeWidth="1" />

      {/* Collusive reference line */}
      <line x1="22" y1="34" x2="246" y2="34" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 5" opacity="0.85" />
      <text x="26" y="28" fill="var(--accent)" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500">collusive</text>

      {/* Competitive reference line */}
      <line x1="22" y1="112" x2="246" y2="112" stroke="var(--faint-2)" strokeWidth="1" strokeDasharray="4 5" />
      <text x="26" y="106" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500">competitive</text>

      {/* Curve A */}
      <path
        d="M22,110 C70,108 96,66 134,50 S226,38 246,37"
        stroke="var(--accent)"
        strokeWidth="2.6"
        strokeLinecap="round"
        style={curve1Style}
      />

      {/* Curve B */}
      <path
        d="M22,116 C76,114 104,82 144,64 S230,42 246,40"
        stroke="var(--curve-2)"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={curve2Style}
      />

      {/* x-axis caption */}
      <text x="150" y="146" fill="var(--faint-2)" fontSize="9" fontFamily="'JetBrains Mono', monospace">episodes →</text>
    </svg>
  )
}

export default CollusionChart
