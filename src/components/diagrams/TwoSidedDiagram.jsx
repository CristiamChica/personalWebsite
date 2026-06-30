import React from 'react'

const NODE_YS = [46, 78, 110]

function TwoSidedDiagram({ animate = false }) {
  const nodeStyle = (i) =>
    animate
      ? { animation: `scPulse 2.6s ease-in-out ${i * 0.4}s infinite` }
      : {}

  return (
    <svg viewBox="0 0 252 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="tsd-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" />
        </marker>
      </defs>

      {/* Platform rectangle */}
      <rect x="104" y="58" width="44" height="36" rx="9" fill="var(--accent)" />
      <text x="126" y="82" fill="white" fontSize="13" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle" dominantBaseline="middle">P</text>

      {/* Left connector edges (users → platform) */}
      <line x1="36" y1="46" x2="104" y2="68" stroke="var(--net-line)" strokeWidth="1.4" />
      <line x1="36" y1="78" x2="104" y2="76" stroke="var(--net-line)" strokeWidth="1.4" />
      <line x1="36" y1="110" x2="104" y2="84" stroke="var(--net-line)" strokeWidth="1.4" />

      {/* Right connector edges (platform → providers) */}
      <line x1="148" y1="68" x2="216" y2="46" stroke="var(--net-line)" strokeWidth="1.4" />
      <line x1="148" y1="76" x2="216" y2="78" stroke="var(--net-line)" strokeWidth="1.4" />
      <line x1="148" y1="84" x2="216" y2="110" stroke="var(--net-line)" strokeWidth="1.4" />

      {/* Left nodes (users) */}
      {NODE_YS.map((y, i) => (
        <circle key={`l${i}`} cx="32" cy={y} r="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4" style={nodeStyle(i)} />
      ))}

      {/* Right nodes (providers) */}
      {NODE_YS.map((y, i) => (
        <circle key={`r${i}`} cx="220" cy={y} r="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4" style={nodeStyle(i + 3)} />
      ))}

      {/* Network effect arc */}
      <path d="M36,40 Q126,2 216,40" stroke="var(--accent)" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#tsd-arrow)" />
      <text x="126" y="14" fill="var(--faint-2)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">network effect</text>

      {/* Side labels */}
      <text x="32" y="138" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">users</text>
      <text x="220" y="138" fill="var(--faint)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">providers</text>
    </svg>
  )
}

export default TwoSidedDiagram
