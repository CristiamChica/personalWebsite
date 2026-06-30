import React from 'react'
import './Research.css'
import { papers, prePhDPublications } from '../data/papers.js'
import CollusionChart from './diagrams/CollusionChart.jsx'
import TwoSidedDiagram from './diagrams/TwoSidedDiagram.jsx'
import MembershipDiagram from './diagrams/MembershipDiagram.jsx'
import PaperRow from './PaperRow.jsx'

const THREADS = [
  {
    number: '01',
    kicker: 'Algorithmic collusion',
    title: 'When learning agents stop competing',
    blurb: 'Conditions under which Q-learning algorithms drift from competitive pricing into a tacit, supracompetitive equilibrium, and which equilibrium concepts support that behavior.',
    threadId: 'algorithmic-collusion',
    Diagram: CollusionChart,
    reverse: false
  },
  {
    number: '02',
    kicker: 'Two-sided markets',
    title: 'Two-sided markets with network externalities',
    blurb: 'How to model multi-homing and collusion in two-sided markets, and how network externalities affect pricing and consumer welfare.',
    threadId: 'two-sided-markets',
    Diagram: TwoSidedDiagram,
    reverse: true
  },
  {
    number: '03',
    kicker: 'Dynamic Pricing',
    title: 'The strategy underneath',
    blurb: 'When do firms offer long-term memberships versus short-term memberships, and how these tariffs affect consumer welfare and firm profits.',
    threadId: 'game-theory',
    Diagram: MembershipDiagram,
    reverse: false
  }
]

function ThreadBlock({ thread }) {
  const threadPapers = papers.filter(p => p.thread === thread.threadId)
  const { Diagram } = thread

  return (
    <div className={`rs-thread${thread.reverse ? ' rs-thread--rev' : ''}`}>
      <div className="rs-diagram-card">
        <Diagram animate={false} />
      </div>
      <div className="rs-thread-text">
        <p className="rs-thread-num">{thread.number}</p>
        <p className="rs-kicker">{thread.kicker}</p>
        <h3 className="rs-thread-title">{thread.title}</h3>
        <p className="rs-thread-blurb">{thread.blurb}</p>
        <div className="rs-thread-papers">
          {threadPapers.map((paper, i) => (
            <PaperRow
              key={paper.id}
              index={i + 1}
              title={paper.title}
              meta={`${paper.authors} · ${paper.year} · ${paper.statusShort}`}
              href={paper.paperUrl}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Research() {
  return (
    <>
      {/* Page header */}
      <section className="rs-page-header">
        <div className="container">
          <h2 className="rs-h2">Research</h2>
          <p className="rs-intro">
            Three recurring threads in my work: algorithmic collusion, competition in two-sided markets with network externalities, and dynamic pricing.
          </p>
        </div>
      </section>

      {/* Thread blocks */}
      {THREADS.map(thread => (
        <section key={thread.number} className="rs-thread-section">
          <div className="container">
            <ThreadBlock thread={thread} />
          </div>
        </section>
      ))}

      {/* Earlier work */}
      <section className="rs-earlier">
        <div className="container">
          <p className="rs-eyebrow">Earlier work</p>
          {prePhDPublications.map(pub => (
            <a key={pub.id} href={pub.url} className="rs-earlier-row" target="_blank" rel="noopener noreferrer">
              <div className="rs-earlier-content">
                <span className="rs-earlier-title">{pub.title}</span>
                <span className="rs-earlier-meta">{pub.authors} · {pub.year} · {pub.journal}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default Research
