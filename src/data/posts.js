// Posts under /writing. seo.js builds a route for each entry; App.jsx maps the slug to its component.
import { F } from './openaiMathAudit/figures.js'

export const posts = [
  {
    slug: 'openai-math-release',
    title: "What's in OpenAI's math release, and what checking it would take",
    shortTitle: "What's in OpenAI's math release",
    description: `A structural analysis of OpenAI’s October 2026 math release: ${F.families.value} result families, ${F.manuscripts.value} manuscripts and a ${Math.round(F.leanLines.value / 1e6)}-million-line Lean library. How much is machine-checked, how the results depend on each other, and what expert review would cost. It does not check whether any proof is correct.`,
    published: '2026-10-29',
    topic: 'Analysis'
  }
]

export const postPath = post => `/writing/${post.slug}`
