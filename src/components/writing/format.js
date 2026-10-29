// Formatting shared by the writing pages. Fixed locale and UTC so the prerendered HTML matches hydration.
const nf = new Intl.NumberFormat('en-US')

export const n = x => nf.format(typeof x === 'object' && x !== null ? x.value : x)

export const pct = (part, whole) => `${Math.round((part / whole) * 100)}%`

export const formatDate = (iso, opts = { year: 'numeric', month: 'long', day: 'numeric' }) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { ...opts, timeZone: 'UTC' })

// Compact axis ticks: 1K, 10K, 1M
export const compact = x => {
  if (x >= 1e6) return `${+(x / 1e6).toFixed(1)}M`
  if (x >= 1e3) return `${+(x / 1e3).toFixed(1)}K`
  return String(x)
}
