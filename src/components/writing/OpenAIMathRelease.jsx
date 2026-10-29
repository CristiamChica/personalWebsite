import React from 'react'
import { Link } from 'react-router-dom'
import { Stat } from '../../agt-design/components/display/Stat.jsx'
import { Card } from '../../agt-design/components/display/Card.jsx'
import { Badge } from '../../agt-design/components/display/Badge.jsx'
import { Tooltip } from '../../agt-design/components/feedback/Tooltip.jsx'
import EmailLink from '../EmailLink.jsx'
import LeanByTierChart from '../diagrams/openaiMathAudit/LeanByTierChart.jsx'
import FieldChart from '../diagrams/openaiMathAudit/FieldChart.jsx'
import HoursByTierChart from '../diagrams/openaiMathAudit/HoursByTierChart.jsx'
import StatementProofChart from '../diagrams/openaiMathAudit/StatementProofChart.jsx'
import { DepthChart, DatesChart } from '../diagrams/openaiMathAudit/DepthAndDatesCharts.jsx'
import FamilyTable, { INITIAL_ROWS } from './FamilyTable.jsx'
import {
  F, COMMIT, COMMIT_URL, REPO_URL, fileUrl, byField, topHubs, releases, familyTitle, HOURS_PER_EXPERT_YEAR
} from '../../data/openaiMathAudit/figures.js'
import { posts } from '../../data/posts.js'
import { n, formatDate } from './format.js'
import './Post.css'

const post = posts.find(p => p.slug === 'openai-math-release')
const mostPages = [...byField].sort((a, b) => b.pages - a.pages)[0]
const mostFamilies = [...byField].sort((a, b) => b.families - a.families)[0]

const SECTIONS = [
  ['in-short', 'In short'],
  ['released', 'What was released'],
  ['checked', 'How much a machine has checked'],
  ['errors', 'Why to expect errors'],
  ['dependence', 'How the results depend on each other'],
  ['cost', 'What review would cost'],
  ['where-to-look', 'Where to look first'],
  ['method', 'Method, judgment calls and limits']
]

// OpenAI's own scope notes, quoted verbatim from lean/docs/<num>.md at the commit
const SCOPE_GAPS = [
  {
    num: '195',
    claims: 'A complete local domain with no small Cohen–Macaulay module.',
    checks: 'Only that the candidate ring has the required ring-theoretic properties.',
    quote: 'it does not assert the absence of small Cohen–Macaulay modules.'
  },
  {
    num: '266',
    claims: 'At most three mutually unbiased bases exist in dimension six.',
    checks: 'Every family of such bases has at most five members.',
    quote: "The selected statement does not establish the paper's upper bound of three or its computer-assisted exclusion of four arbitrary bases."
  },
  {
    num: '312',
    claims: 'Algebraic ∞-groupoids recover the homotopy theory of spaces.',
    checks: 'The elementary-expansion theorem used along the way.',
    quote: 'The later semi-model structure and full comparison with the homotopy theory of spaces are not included.'
  },
  {
    num: '229',
    claims: 'Exact reconstruction thresholds for three- and four-state channels.',
    checks: 'Only the supercritical direction, above the Kesten–Stigum threshold.',
    quote: 'Non-reconstruction at or below the threshold and the stochastic-block-model consequences in the paper are outside them.'
  },
  {
    num: '152',
    claims: 'A zero-entropy system with no smooth positive-volume model.',
    checks: 'The same construction with finite entropy.',
    quote: "The linked statement gives finite entropy; the paper's stronger zero-entropy conclusion is outside this statement."
  }
]

const LANDMARK_TITLES = ['378', '103', '102', '288', '287', '304', '004']

function Term({ children, definition }) {
  return (
    <Tooltip content={definition}>
      <span className="pt-term" tabIndex={0}>{children}</span>
    </Tooltip>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="pt-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="pt-h2">{title}</h2>
      {children}
    </section>
  )
}

function OpenAIMathRelease() {
  return (
    <article className="pt container">
      <header className="pt-header">
        <p className="overline pt-eyebrow">
          <Link to="/writing" className="pt-crumb">Writing</Link> · {post.topic}
        </p>
        <h1 className="pt-title">{post.title}</h1>
        <p className="pt-dek">
          OpenAI&rsquo;s math repository now holds {n(F.families)} result families and a Lean library
          of {n(F.leanLines)} lines. This post measures what is in it: how big it is, how much of it a
          machine has checked, how the results lean on each other, and roughly what expert review would cost.
        </p>
        <p className="pt-byline">
          By Cristian Chica · <time dateTime={post.published}>{formatDate(post.published)}</time>
        </p>
      </header>

      <Card variant="tint" padding={20} className="pt-notice">
        <p>
          <strong>This is a structural analysis. It does not check whether any proof is correct.</strong>{' '}
          Figures are as of commit <a href={COMMIT_URL}><code>{COMMIT}</code></a>, the October 26, 2026
          update of <a href={REPO_URL}>openai/math</a>. Every number on this page is computed from the data
          files listed in the <a href="#method">method section</a>, where the judgment calls are spelled out.
        </p>
      </Card>

      <div className="pt-stats">
        <Stat label="Result families" value={n(F.families)} caption={`${n(F.manuscripts)} manuscripts`} />
        <Stat label="Pages" value={n(F.pages)} caption={`${n(F.words)} words`} />
        <Stat label="Headline in Lean" value={n(F.leanCoversHeadline)} unit={`of ${n(F.families)}`} caption="families" />
        <Stat label="Expert review, mid case" value={n(F.expertYears)} unit="expert-years" caption={`${n(F.hoursMid)} hours`} />
      </div>

      <nav className="pt-toc" aria-label="On this page">
        <p className="overline">On this page</p>
        <ol>
          {SECTIONS.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        </ol>
      </nav>

      <Section id="in-short" title="In short">
        <ol className="pt-findings">
          <li>
            <strong>Where Lean applies, trust moves from the proof to the statement.</strong> Comparator
            checks each Lean proof against a challenge statement using only the standard axioms. What is
            left for a person is whether that statement says what the paper claims.
          </li>
          <li>
            <strong>&ldquo;Has Lean&rdquo; does not mean the headline is checked.</strong> {n(F.leanAny)} families
            have a Lean scope note, but only {n(F.leanCoversHeadline)} cover the headline result. OpenAI&rsquo;s
            own notes say so for the rest.
          </li>
          <li>
            <strong>Expect errors.</strong> The titles include results that would each be among the most
            important of the decade, in manuscripts dated across {n(F.spanDays)} days. {n(F.withdrawn)} manuscripts
            were withdrawn the day after the first release.
          </li>
          <li>
            <strong>Risk is concentrated.</strong> {n(F.citing)} of {n(F.manuscripts)} manuscripts build on
            other manuscripts in the release. The six that the most others depend on sit in one cluster,
            and {n(F.topSixNotLean)} of those six have no Lean backing.
          </li>
          <li>
            <strong>Review is expensive.</strong> A conventional expert read comes to roughly {n(F.expertYears)} expert-years
            in the mid case of a deliberately simple model.
          </li>
        </ol>
      </Section>

      <Section id="released" title="What was released">
        <p>
          The release groups {n(F.manuscripts)} current manuscripts into {n(F.families)} result families
          across {n(F.fields)} fields. {n(F.singleManuscript)} families are a single manuscript; the largest
          has {n(F.maxManuscripts)}. Together they run to {n(F.pages)} pages and {n(F.words)} words, a median
          of {n(F.wordsPerPage)} words per page. Most manuscripts are 10–49 pages long
          ({n(F.pages10to49)} of {n(F.manuscripts)}), and {n(F.pages150)} run past 150.
        </p>
        <p>
          {mostFamilies.field} has the most families ({mostFamilies.families}). {mostPages.field} has the most
          pages: {n(mostPages.pages)} across {mostPages.families} families.
        </p>
        <FieldChart />
        <p>
          The manuscripts are dated between {formatDate(F.dateFirst.value, { month: 'long', day: 'numeric' })} and{' '}
          {formatDate(F.dateLast.value)}. {n(F.datedSep23to25)} of them carry a date in the three days from
          September 23 to 25.
        </p>
        <DatesChart />
        <h3 className="pt-h3">Releases so far</h3>
        <div className="pt-table-scroll">
          <table className="pt-table">
            <thead>
              <tr>
                <th scope="col">Release</th>
                <th scope="col">Commit</th>
                <th scope="col" className="num">Families</th>
                <th scope="col" className="num">Manuscripts</th>
                <th scope="col" className="num">Withdrawn</th>
              </tr>
            </thead>
            <tbody>
              {releases.map(r => (
                <tr key={r.commit}>
                  <td>{r.release} <span className="pt-muted">· {formatDate(r.date, { month: 'short', day: 'numeric' })}</span></td>
                  <td><a href={`${REPO_URL}/tree/${r.commit}`}><code>{r.commit}</code></a></td>
                  <td className="num">{r.families}</td>
                  <td className="num">{r.manuscripts}</td>
                  <td className="num">{r.withdrawn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pt-source">Source: history.json. Withdrawn counts are cumulative.</p>
      </Section>

      <Section id="checked" title="How much a machine has checked">
        <p>
          For a Lean-backed family, OpenAI ships a challenge statement and a proof.{' '}
          <Term definition="A Lean tool that checks a proof proves exactly a given statement, using only allowed axioms">Comparator</Term>{' '}
          then checks that the proof proves exactly that statement, using only the axioms its
          configuration allows. A static scan of the library finds nothing that would undercut this:
        </p>
        <Card padding={0} className="pt-ledger-card">
          <dl className="pt-ledger">
            <div><dt>Lean library</dt><dd>{n(F.leanLines)} non-comment lines in {n(F.leanFiles)} files</dd></div>
            <div><dt>Comparator challenges</dt><dd>{n(F.comparators)}</dd></div>
            <div><dt><code>sorry</code> or <code>admit</code> outside comments</dt><dd>{n(F.sorryFiles)} files <span className="pt-muted">(a raw grep flags {n(F.sorryFilesRaw)}, all in comments)</span></dd></div>
            <div><dt>New <code>axiom</code> declarations</dt><dd>{n(F.axioms)}</dd></div>
            <div><dt>Unsafe escapes</dt><dd>{n(F.unsafe)}</dd></div>
            <div><dt>Comparator configs allowing non-standard axioms</dt><dd>{n(F.nonstandardAxioms)} <span className="pt-muted">(only propext, Quot.sound, Classical.choice)</span></dd></div>
            <div><dt>The catalogue&rsquo;s own review status</dt><dd><a href={`${fileUrl('lean/formalization.yaml')}#L1827-L1828`}><code>review: status: unchecked</code></a></dd></div>
          </dl>
        </Card>
        <p className="pt-source">Source: lean.json. These are static scans; nothing was compiled and Comparator was not run.</p>

        <p>
          Coverage is the harder question. OpenAI publishes a scope note for each formalization, and those notes
          sort the families into four groups: {n(F.leanHeadline)} with the headline result formalized,{' '}
          {n(F.leanSide)} with the headline formalized but side results excluded, {n(F.leanPartial)} where
          only a partial or supporting result is formalized, and {n(F.leanNone)} with no Lean at all.
          Among the {n(F.landmarks)} landmark families, {n(F.landmarkNone)} have no Lean.
        </p>
        <LeanByTierChart />

        <h3 className="pt-h3">The statement is now the thing to check</h3>
        <p>
          Once Comparator accepts a proof, trust comes down to whether the challenge statement means what the
          paper claims. Statements vary enormously. Irrationality of Catalan&rsquo;s constant (family 005) is
          a {n(F.catalanStatement)}-line statement over Mathlib, backed by {n(F.catalanProof)} lines of proof.
          The disproof of the Exponential Time Hypothesis (378) needs {n(F.ethStatement)} lines because it
          defines its own machine model and CNF encoding, and that model is what a reviewer has to audit.
          The median Lean-backed family has a {n(F.medianStatement)}-line statement.
        </p>
        <p>
          The proof is almost always far longer. In the median family it is about {n(F.medianProofRatio)} times
          the length of the statement, and in {n(F.proof100x)} of {n(F.withStatements)} families it is at least 100 times.
        </p>
        <StatementProofChart />
        <p>
          The outlier on the right is the Hodge conjecture for CM abelian varieties (032), formalized in the
          October 26 update. Its <a href={fileUrl('lean/ComparatorChallenges/HodgeConjectureCMAbelianVarieties/Challenge.lean')}>challenge theorem</a> is
          short, but it imports a statement library{' '}
          <a href={fileUrl('lean/docs/032.md')}>adapted from the community HodgeConjecture project</a>, so the
          statement a reader must trust is {n(F.hodgeStatement)} lines, the largest in the catalogue (the next
          is {n(F.nextLargestStatement)}). The proof is {n(F.hodgeProof)} lines.
        </p>

        <h3 className="pt-h3">Formalized does not always mean the headline</h3>
        <p>
          OpenAI&rsquo;s scope notes are candid about this. Five of the {n(F.leanPartial)} partial families were
          read in full; in each, the note itself says the Lean statement is weaker than the paper&rsquo;s claim.
        </p>
        <div className="pt-gaps">
          {SCOPE_GAPS.map(g => (
            <Card key={g.num} padding={20} eyebrow={`Family ${g.num} · Partial or supporting only`} title={familyTitle(g.num)}>
              <dl className="pt-gap">
                <div><dt>Paper claims</dt><dd>{g.claims}</dd></div>
                <div><dt>Lean checks</dt><dd>{g.checks}</dd></div>
              </dl>
              <blockquote className="pt-quote">
                <p>&ldquo;{g.quote}&rdquo;</p>
                <footer><a href={fileUrl(`lean/docs/${g.num}.md`)}>Scope note, lean/docs/{g.num}.md</a></footer>
              </blockquote>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="errors" title="Why to expect errors">
        <p>The landmark titles include:</p>
        <ul className="pt-titles">
          {LANDMARK_TITLES.map(num => <li key={num}><span className="pt-num">{num}</span> {familyTitle(num)}</li>)}
        </ul>
        <p>
          Any one of these would be a major result. Together they amount to decades of ordinary progress, written
          up in manuscripts dated across {n(F.spanDays)} days. Long unrefereed manuscripts usually contain errors,
          and this release has already had some. On{' '}
          <a href={fileUrl('history.md')}>October 7</a>, the day after the first release, OpenAI withdrew{' '}
          {n(F.withdrawn)} manuscripts after a sign error in &ldquo;Algebraicity of Weil classes on split abelian
          eightfolds&rdquo; broke two papers that depended on it. One of them was &ldquo;The rational Hodge conjecture
          for products of K3 surfaces&rdquo;; family 032 now covers CM abelian varieties only.{' '}
          {n(F.revised)} current manuscripts carry version notes, and {n(F.disproofs)} families are disproofs or
          counterexamples by their titles.
        </p>
        <p>
          Some of this is already being handled in the open. For the ETH disproof,{' '}
          <a href={fileUrl('history.md')}>OpenAI says</a> an independent group led by Russell Impagliazzo,
          Ramamohan Paturi and Ryan Williams will examine the proof.
        </p>
        <p>
          Prior work matters too. Family 074 includes &ldquo;The Kakeya maximal conjecture in three dimensions&rdquo;.
          Hong Wang and Joshua Zahl <a href="https://arxiv.org/abs/2502.17655">proved the Kakeya set conjecture in
          three dimensions</a> in 2025, so the manuscript&rsquo;s new content is the stronger maximal-function
          statement, and a reviewer&rsquo;s first job is to separate what is new from what is known.
        </p>
      </Section>

      <Section id="dependence" title="How the results depend on each other">
        <p>
          Counting citations between current manuscripts, through <code>OAI:</code> keys and repository URLs,
          gives {n(F.citations)} links. {n(F.citing)} of {n(F.manuscripts)} manuscripts cite at least one other
          manuscript in the release, none of them refereed. The longest chain runs through {n(F.maxDepth)} manuscripts.
        </p>
        <DepthChart />
        <p>
          The most depended-on manuscripts all sit in one cluster: Iitaka subadditivity, abundance and minimal
          models (families 033, 034 and 036). Each has {topHubs[topHubs.length - 1].dependents}–{n(F.topHubDependents)} manuscripts
          building on it, directly or through others, and {n(F.topSixNotLean)} of the six have no Lean backing of
          their own. Family 033 does have headline Lean, through a different manuscript.
        </p>
        <ol className="pt-hubs">
          {topHubs.map(h => (
            <li key={h.dir}>
              <span className="pt-hub-count">{h.dependents}</span>
              <span className="pt-hub-body">
                <span className="pt-hub-title">{h.title}</span>
                <span className="pt-hub-meta">
                  Family {h.family} · cited directly by {h.cited_by}
                  {h.manuscript_lean_backed
                    ? <Badge tone="positive">Lean-backed</Badge>
                    : <Badge tone="neutral">No Lean for this manuscript</Badge>}
                </span>
              </span>
            </li>
          ))}
        </ol>
        <p className="pt-source">Source: papers_summary.json (top_hubs). The count is transitive dependents.</p>
      </Section>

      <Section id="cost" title="What review would cost">
        <p>
          A simple model puts the expert time for a conventional read at {n(F.hoursLow)} hours in the low case,{' '}
          {n(F.hoursMid)} in the mid case and {n(F.hoursHigh)} in the high case. At {n(HOURS_PER_EXPERT_YEAR)} hours
          per expert-year, the mid case is about {n(F.expertYears)} expert-years. These are planning numbers, not
          measurements; the model is in the <a href="#method">method section</a>.
        </p>
        <HoursByTierChart />
        <p>
          One family distorts the per-family figures. The model charges statement lines linearly, so Hodge for
          CM abelian varieties (032) becomes the most expensive family at {n(F.hodgeHours)} mid-case hours,
          about {n(F.hodgeStatementHours)} of them for its statement audit. That probably overstates it: most of
          those lines are human-written definitions adapted from an existing project, not model output.
        </p>
      </Section>

      <Section id="where-to-look" title="Where to look first">
        <p>
          The priority score rewards significant results, results other families build on, and results Lean does
          not already cover, and divides by the hours a review would take. A high score means a cheap check that
          settles a lot. The table starts with the {INITIAL_ROWS} highest; filter or sort it to explore the rest.
        </p>
        <FamilyTable />
        <p className="pt-source">Source: families.json. Dependents counts the families that build on it, directly or through others. Hours are the mid case.</p>
      </Section>

      <Section id="method" title="Method, judgment calls and limits">
        <p>
          The analysis reads the repository at commit <a href={COMMIT_URL}><code>{COMMIT}</code></a>: each
          family&rsquo;s linked main PDF, the manuscripts&rsquo; TeX and bibliography files, the Lean library and
          its scope notes. It measures size, field mix, Lean coverage, citation structure and estimated review
          cost. It does not check whether any proof is correct.
        </p>

        <h3 className="pt-h3">Judgment calls</h3>
        <ul className="pt-list">
          <li>
            <strong>Landmark tier.</strong> A hand-picked list of {n(F.landmarks)} families whose problems are widely
            known outside their subfield. This is subjective. <strong>Named</strong> means the title mentions a
            conjecture, problem, hypothesis, question, a person&rsquo;s name or a counterexample.{' '}
            <strong>Technical</strong> is everything else.
          </li>
          <li>
            <strong>Lean status.</strong> A phrase match on OpenAI&rsquo;s scope notes, corrected by hand: families
            107, 125 and 325 were false positives, and 229 and 290 were added as gaps. Expect a few families to be
            misfiled.
          </li>
          <li>
            <strong>Review hours.</strong> Pages × 1, 2 or 3 hours per page (low, mid, high) × a density factor
            (words per page over the median, clipped to 0.7–1.5) × reviewers (3 for landmark, 2 for named, 1.5 for
            technical) × a discount for Lean-backed papers (0.5 headline, 0.7 side results excluded, 0.9 partial).
            Add statement-audit time of statement lines ÷ 25 × reviewers. One expert-year is{' '}
            {n(HOURS_PER_EXPERT_YEAR)} hours.
          </li>
          <li>
            <strong>Priority.</strong> 1000 × tier weight (10, 3 or 1) × (1 + 0.5 × families built on it) ×
            unverified share (1 for no Lean or partial, 0.5 for side results excluded, 0.25 for headline) ÷ mid-case hours.
          </li>
          <li>
            <strong>Disproofs</strong> are identified by title, so the count of {n(F.disproofs)} is approximate.
          </li>
        </ul>

        <h3 className="pt-h3">Limits</h3>
        <ul className="pt-list">
          <li>Comparator was not run and nothing was compiled. The zero counts for <code>sorry</code>, axioms and unsafe code come from static scans with comments stripped.</li>
          <li>Reference counts come from .bib files, which can include unused entries. Citations inside the release count only <code>OAI:</code> keys and repository URLs.</li>
          <li>Chain lengths are lower bounds. Companion papers often cite each other, and the analysis cuts each such cycle where it finds it.</li>
          <li>Page counts use each family&rsquo;s linked main PDF.</li>
          <li>Dates come from directory names, which are write-up or release dates, not dates of discovery.</li>
        </ul>

        <h3 className="pt-h3">Sources and attribution</h3>
        <p>
          The source repository, <a href={REPO_URL}>openai/math</a>, is published under the Apache-2.0 licence.
          This page links to it at a fixed commit and does not rehost any manuscript. Quotations from scope notes
          are verbatim and link to the file they come from. The figures are as of the October 26, 2026 release
          and will drift as OpenAI updates the repository.
        </p>

        <details className="pt-sources">
          <summary>Where each number comes from</summary>
          <div className="pt-table-scroll">
            <table className="pt-table">
              <thead>
                <tr><th scope="col">Figure</th><th scope="col" className="num">Value</th><th scope="col">Computed from</th></tr>
              </thead>
              <tbody>
                {Object.entries(F).map(([key, f]) => (
                  <tr key={key}>
                    <td>{f.label}</td>
                    <td className="num">{typeof f.value === 'number' ? n(f.value) : f.value}</td>
                    <td><code>{f.source}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <p className="pt-contact">
          Corrections are welcome: <EmailLink source="OpenAI math release post">email me</EmailLink>.
        </p>
      </Section>
    </article>
  )
}

export default OpenAIMathRelease
