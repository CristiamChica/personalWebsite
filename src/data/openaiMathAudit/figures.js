// Every figure on /writing/openai-math-release is derived here from the JSON in this folder.
// The JSON files are verbatim copies of openai-math-audit/data/site; to update the post,
// rerun that pipeline, recopy the four files and rebuild. Nothing in the page is typed by hand.
import families from './families.json'
import leanRows from './lean.json'
import history from './history.json'
import summary from './papers_summary.json'

const lean = leanRows[0]
const t = summary.totals

export const COMMIT = '7ef5c0cc5'
export const REPO_URL = 'https://github.com/openai/math'
export const COMMIT_URL = `${REPO_URL}/tree/${COMMIT}`
export const fileUrl = path => `${REPO_URL}/blob/${COMMIT}/${path}`

export const LEAN_STATUSES = [
  { key: 'Headline formalized', short: 'Headline formalized', color: 'var(--midori-700)', ink: 'light' },
  { key: 'Headline, side results excluded', short: 'Side results excluded', color: 'var(--midori-500)', ink: 'light' },
  { key: 'Partial or supporting only', short: 'Partial or supporting', color: 'var(--midori-300)', ink: 'dark' },
  { key: 'No Lean', short: 'No Lean', color: 'var(--artemisia-100)', ink: 'dark' }
]
export const TIERS = ['Landmark', 'Named', 'Technical']

const count = (rows, pred) => rows.filter(pred).length
const sum = (rows, key) => rows.reduce((s, r) => s + r[key], 0)
const byNum = num => families.find(f => f.num === num)
const median = values => {
  const s = [...values].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

// Review model constants, as stated on the page (pipeline/analyze.py)
export const HOURS_PER_EXPERT_YEAR = 1600
const STATEMENT_LINES_PER_HOUR = 25
const REVIEWERS = { Landmark: 3, Named: 2, Technical: 1.5 }

const withStatements = families.filter(f => f.stmt_lines > 0)
const landmarks = families.filter(f => f.tier === 'Landmark')
const hodge = byNum('032')
const lastRelease = history[history.length - 1]

// A figure is a value plus where it comes from; the page's source table lists all of them.
const fig = (label, value, source) => ({ label, value, source })

export const F = {
  families: fig('Result families', families.length, 'families.json: number of rows'),
  manuscripts: fig('Current manuscripts', t.manuscripts, 'papers_summary.json: totals.manuscripts'),
  singleManuscript: fig('Families with one manuscript', count(families, f => f.papers === 1), 'families.json: papers = 1'),
  maxManuscripts: fig('Most manuscripts in one family', Math.max(...families.map(f => f.papers)), 'families.json: max of papers'),
  fields: fig('Subject fields', new Set(families.map(f => f.field)).size, 'families.json: distinct field'),
  pages: fig('Total pages', t.pages, 'papers_summary.json: totals.pages'),
  words: fig('Total words', t.words, 'papers_summary.json: totals.words'),
  wordsPerPage: fig('Median words per page', t.median_words_per_page, 'papers_summary.json: totals.median_words_per_page'),
  pages10to49: fig('Manuscripts of 10–49 pages', summary.page_bands.filter(b => b.lo >= 10 && b.lo < 50).reduce((s, b) => s + b.n, 0), 'papers_summary.json: page_bands 10–19 through 40–49'),
  pages150: fig('Manuscripts of 150+ pages', summary.page_bands.find(b => b.lo === 150).n, 'papers_summary.json: page_bands 150+'),
  dateFirst: fig('Earliest manuscript date', t.date_first, 'papers_summary.json: totals.date_first'),
  dateLast: fig('Latest manuscript date', t.date_last, 'papers_summary.json: totals.date_last'),
  spanDays: fig('Days between earliest and latest date', t.span_days, 'papers_summary.json: totals.span_days'),
  datedSep23to25: fig('Manuscripts dated Sep 23–25', t.dated_sep_23_25, 'papers_summary.json: totals.dated_sep_23_25'),
  disproofs: fig('Disproof or counterexample families', count(families, f => f.disproof), 'families.json: disproof = true'),
  revised: fig('Current manuscripts with version notes', sum(families, 'revised'), 'families.json: sum of revised'),

  leanAny: fig('Families with a Lean scope note', count(families, f => f.lean !== 'No Lean'), 'families.json: lean ≠ No Lean'),
  leanHeadline: fig('Headline formalized', count(families, f => f.lean === 'Headline formalized'), "families.json: lean = 'Headline formalized'"),
  leanSide: fig('Headline, side results excluded', count(families, f => f.lean === 'Headline, side results excluded'), "families.json: lean = 'Headline, side results excluded'"),
  leanCoversHeadline: fig('Families whose Lean covers the headline', count(families, f => f.lean === 'Headline formalized' || f.lean === 'Headline, side results excluded'), 'families.json: lean is one of the two headline statuses'),
  leanPartial: fig('Partial or supporting only', count(families, f => f.lean === 'Partial or supporting only'), "families.json: lean = 'Partial or supporting only'"),
  leanNone: fig('No Lean', count(families, f => f.lean === 'No Lean'), "families.json: lean = 'No Lean'"),
  landmarks: fig('Landmark families', landmarks.length, "families.json: tier = 'Landmark'"),
  landmarkNone: fig('Landmark families with no Lean', count(landmarks, f => f.lean === 'No Lean'), "families.json: tier = 'Landmark' and lean = 'No Lean'"),

  leanLines: fig('Lean lines (non-comment)', lean.lean_lines, 'lean.json: lean_lines'),
  leanFiles: fig('Lean files', lean.lean_files, 'lean.json: lean_files'),
  comparators: fig('Comparator challenges', lean.comparators, 'lean.json: comparators'),
  sorryFiles: fig('Files with sorry or admit outside comments', lean.sorry_files, 'lean.json: sorry_files'),
  sorryFilesRaw: fig('Files a raw grep flags for sorry or admit', lean.sorry_files_raw, 'lean.json: sorry_files_raw'),
  axioms: fig('New axiom declarations', lean.axiom_decls, 'lean.json: axiom_decls'),
  unsafe: fig('Unsafe escapes', lean.unsafe_escapes, 'lean.json: unsafe_escapes'),
  nonstandardAxioms: fig('Comparator configs allowing non-standard axioms', lean.nonstandard_axiom_configs, 'lean.json: nonstandard_axiom_configs'),
  medianStatement: fig('Median statement lines (Lean-backed families)', median(withStatements.map(f => f.stmt_lines)), 'families.json: median of stmt_lines where stmt_lines > 0'),
  catalanStatement: fig('Family 005 statement lines', byNum('005').stmt_lines, "families.json: num = '005', stmt_lines"),
  catalanProof: fig('Family 005 proof lines', byNum('005').proof_lines, "families.json: num = '005', proof_lines"),
  ethStatement: fig('Family 378 statement lines', byNum('378').stmt_lines, "families.json: num = '378', stmt_lines"),
  ethProof: fig('Family 378 proof lines', byNum('378').proof_lines, "families.json: num = '378', proof_lines"),
  hodgeStatement: fig('Family 032 statement lines', hodge.stmt_lines, "families.json: num = '032', stmt_lines"),
  hodgeProof: fig('Family 032 proof lines', hodge.proof_lines, "families.json: num = '032', proof_lines"),
  medianProofRatio: fig('Median proof-to-statement ratio', Math.round(median(withStatements.map(f => f.proof_lines / f.stmt_lines))), 'families.json: median of proof_lines ÷ stmt_lines where stmt_lines > 0, rounded'),
  proof100x: fig('Families whose proof is ≥100× the statement', count(withStatements, f => f.proof_lines >= 100 * f.stmt_lines), 'families.json: proof_lines ≥ 100 × stmt_lines'),
  withStatements: fig('Families with Comparator statements', withStatements.length, 'families.json: stmt_lines > 0'),
  nextLargestStatement: fig('Next-largest statement (lines)', [...withStatements].sort((a, b) => b.stmt_lines - a.stmt_lines)[1].stmt_lines, 'families.json: second-largest stmt_lines'),

  citations: fig('In-release citations', t.internal_citations, 'papers_summary.json: totals.internal_citations'),
  citing: fig('Manuscripts citing another in the release', t.manuscripts_citing_internal, 'papers_summary.json: totals.manuscripts_citing_internal'),
  maxDepth: fig('Longest citation chain (manuscripts)', t.max_depth, 'papers_summary.json: totals.max_depth'),
  depth5plus: fig('Manuscripts on chains of 5 or more', t.manuscripts_depth_5_plus, 'papers_summary.json: totals.manuscripts_depth_5_plus'),
  topHubDependents: fig('Dependents of the most-cited manuscript', summary.top_hubs[0].dependents, 'papers_summary.json: top_hubs[0].dependents'),
  topSixNotLean: fig('Top-six hubs without Lean backing', count(summary.top_hubs.slice(0, 6), h => !h.manuscript_lean_backed), 'papers_summary.json: top_hubs[0..5], manuscript_lean_backed = false'),

  hoursLow: fig('Expert-hours to review, low', sum(families, 'hours_low'), 'families.json: sum of hours_low'),
  hoursMid: fig('Expert-hours to review, mid', sum(families, 'hours_mid'), 'families.json: sum of hours_mid'),
  hoursHigh: fig('Expert-hours to review, high', sum(families, 'hours_high'), 'families.json: sum of hours_high'),
  expertYears: fig('Expert-years to review, mid', Math.round(sum(families, 'hours_mid') / HOURS_PER_EXPERT_YEAR), `families.json: sum of hours_mid ÷ ${HOURS_PER_EXPERT_YEAR}`),
  hodgeHours: fig('Family 032 mid-case hours', hodge.hours_mid, "families.json: num = '032', hours_mid"),
  hodgeStatementHours: fig('Family 032 statement-audit hours', Math.round(hodge.stmt_lines / STATEMENT_LINES_PER_HOUR * REVIEWERS[hodge.tier]), `families.json: num = '032', stmt_lines ÷ ${STATEMENT_LINES_PER_HOUR} × ${REVIEWERS[hodge.tier]} reviewers`),

  withdrawn: fig('Manuscripts withdrawn', lastRelease.withdrawn, 'history.json: last row, withdrawn')
}

// ---------- chart and table data ----------

export const leanByTier = [
  { label: 'All families', rows: families },
  ...TIERS.map(tier => ({ label: tier, rows: families.filter(f => f.tier === tier) }))
].map(({ label, rows }) => ({
  label,
  total: rows.length,
  counts: LEAN_STATUSES.map(s => ({ ...s, n: count(rows, f => f.lean === s.key) }))
}))

export const byField = [...new Set(families.map(f => f.field))].map(field => {
  const rows = families.filter(f => f.field === field)
  return { field, families: rows.length, pages: sum(rows, 'pages'), hours: sum(rows, 'hours_mid') }
})

export const hoursByTier = TIERS.map(tier => {
  const rows = families.filter(f => f.tier === tier)
  return { tier, families: rows.length, low: sum(rows, 'hours_low'), mid: sum(rows, 'hours_mid'), high: sum(rows, 'hours_high') }
})

export const statementVsProof = withStatements.map(f => ({
  num: f.num, title: f.title, lean: f.lean, stmt: f.stmt_lines, proof: f.proof_lines
}))

export const depthCounts = summary.depth_counts
export const pageBands = summary.page_bands
export const datesCounts = summary.dates
export const topHubs = summary.top_hubs.slice(0, 6)
export const releases = history

export const familiesByPriority = [...families].sort((a, b) => b.priority - a.priority)
export const familyTitle = num => byNum(num).title
