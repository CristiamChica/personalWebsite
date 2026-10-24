import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import photo520Webp from '../assets/images/personalphoto-520.webp'
import photo800Webp from '../assets/images/personalphoto-800.webp'
import photo520Jpg from '../assets/images/personalphoto-520.jpg'
import { papers, prePhDPublications } from '../data/papers.js'
import { channels } from '../data/channels.js'
import { trajectory } from '../data/trajectory.js'
import { projects } from '../data/projects.js'
import PaperRow from './PaperRow.jsx'
import CopyEmailButton from './CopyEmailButton.jsx'
import EmailLink from './EmailLink.jsx'
import { Plate } from '../agt-design/components/display/Plate.jsx'
import { trackSocialClick } from '../utils/analytics'

const PUBLICATION_COUNT = papers.length + prePhDPublications.filter(p => p.type !== 'thesis').length

const ADVISING_TOPICS = [
  'Algorithmic pricing and collusion risk',
  'Game-theoretic and IO modeling',
  'Data and LLM infrastructure for regulatory data',
  'Math tutoring (PhD level)'
]

function NetworkGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--sienna-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <line x1="6.7" y1="7.2" x2="10.6" y2="16.2" />
      <line x1="17.3" y1="7.2" x2="13.4" y2="16.2" />
      <line x1="7" y1="6" x2="17" y2="6" />
    </svg>
  )
}

function DocGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--sienna-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h8l4 4v14H6z" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="14.5" x2="15" y2="14.5" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  )
}

function CodeGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--sienna-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  )
}

function LockGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--artemisia-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function BrandIcon({ brand }) {
  if (brand === 'youtube') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <polygon points="8,5.5 20,12 8,18.5" />
      </svg>
    )
  }
  if (brand === 'tiktok') {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <circle cx="8" cy="17.5" r="3.2" />
        <rect x="10.4" y="4" width="2" height="13.5" />
        <polygon points="12.4,4 18,5.8 18,9 12.4,7.2" />
      </svg>
    )
  }
  return null
}

function Home() {
  const selectedPapers = papers.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="sc-hero">
        <div className="container sc-hero-inner">
          <div className="sc-hero-left">
            <Plate size={64} style={{ marginBottom: 'var(--space-7)' }} />
            <h1 className="sc-hero-name">Cristian Camilo Chica Castaño</h1>
            <p className="sc-hero-position">
              PhD in Mathematics and <strong>Head of Data at Dapper</strong>.
            </p>
            <p className="sc-hero-intro">
              I lead a 9-person data and AI engineering team at Dapper, building regulatory-intelligence
              infrastructure across 10+ markets in Latin America and the Middle East. My research touches
              multiple fields: algorithmic pricing, reinforcement learning and two-sided markets.
            </p>
            <div className="sc-hero-btns">
              <EmailLink source="Home" className="btn btn--primary">Email me</EmailLink>
              <a className="btn btn--secondary" href="https://www.linkedin.com/in/cccc24/" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('LinkedIn', 'redirect')}>LinkedIn</a>
              <a className="btn btn--secondary" href="https://scholar.google.com/citations?user=7uZo3mQAAAAJ&hl=es&oi=ao" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('Google Scholar', 'redirect')}>Scholar</a>
              <a className="btn btn--secondary" href="https://github.com/CristiamChica" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('GitHub', 'redirect')}>GitHub</a>
              <a className="btn btn--secondary" href="https://x.com/ccchicac" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('X', 'redirect')}>X</a>
            </div>
            <div className="sc-email">
              <EmailLink source="Home" className="sc-email-link" />
              <CopyEmailButton source="Home" />
            </div>
          </div>
          <div className="sc-hero-right">
            <div className="sc-portrait">
              <picture>
                <source type="image/webp" srcSet={`${photo520Webp} 520w, ${photo800Webp} 800w`} sizes="(max-width: 860px) 200px, 260px" />
                <img src={photo520Jpg} alt="Cristian Chica" className="sc-portrait-img" width="520" height="650" fetchpriority="high" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trajectory ── */}
      <section className="sc-trajectory">
        <div className="container">
          <p className="overline sc-eyebrow">Trajectory</p>
          <div className="sc-traj-grid">
            {trajectory.map(stop => (
              <div key={stop.id} className="sc-traj-stop">
                <div className={`sc-traj-dot sc-traj-dot--${stop.dotStyle}`} />
                <p className={`sc-traj-kicker sc-traj-kicker--${stop.id}`}>{stop.kicker}</p>
                <p className="sc-traj-title">{stop.title}</p>
                <p className="sc-traj-body">{stop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore ── */}
      <section className="sc-explore">
        <div className="container">
          <p className="overline sc-eyebrow">Explore</p>
          <p className="sc-explore-lead">My papers, CV and code.</p>

          <div className="sc-feature-row">
            <div className="sc-card">
              <div className="sc-card-top">
                <div className="sc-icon-badge"><NetworkGlyph /></div>
                <Link to="/research" className="link-action sc-card-link">View research →</Link>
              </div>
              <h3 className="sc-card-title">Research</h3>
              <p className="sc-card-body">Papers on algorithmic collusion, two-sided markets, and dynamic pricing.</p>
              <div className="sc-chips">
                <span className="tag">{PUBLICATION_COUNT} papers</span>
              </div>
            </div>

            <div className="sc-card">
              <div className="sc-card-top">
                <div className="sc-icon-badge"><DocGlyph /></div>
                <Link to="/cv" className="link-action sc-card-link">View CV →</Link>
              </div>
              <h3 className="sc-card-title">CV</h3>
              <p className="sc-card-body">Full record: education, industry roles, publications, and talks.</p>
              <div className="sc-chips">
                <span className="tag">PDF</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <h3 className="overline sc-subhead">Projects</h3>
          <div className="sc-feature-row">
            {projects.map(project => (
              <div key={project.id} className={`sc-card${project.href ? '' : ' sc-card--static'}`}>
                <div className="sc-card-top">
                  <div className={`sc-icon-badge${project.href ? '' : ' sc-icon-badge--muted'}`}>
                    {project.href ? <CodeGlyph /> : <LockGlyph />}
                  </div>
                  {project.href
                    ? <a href={project.href} className="link-action sc-card-link" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('GitHub', 'project')}>{project.cta}</a>
                    : <span className="sc-card-note">{project.note}</span>}
                </div>
                <h3 className="sc-card-title sc-card-title--sm">{project.title}</h3>
                <p className="sc-card-body">{project.blurb}</p>
                <div className="sc-chips">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Papers ── */}
      <section className="sc-selected-papers">
        <div className="container">
          <div className="sc-sp-header">
            <p className="overline sc-eyebrow" style={{ marginBottom: 0 }}>Selected papers</p>
            <Link to="/research" className="link-action">All research →</Link>
          </div>
          <div className="sc-sp-list">
            {selectedPapers.map((paper, i) => (
              <PaperRow
                key={paper.id}
                index={i + 1}
                title={paper.title}
                meta={`${paper.authors} · ${paper.year}`}
                status={paper.statusShort}
                href={paper.paperUrl}
                size="lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Advising & collaborations ── */}
      <section className="sc-advising">
        <div className="container">
          <div className="sc-advising-card">
            <div className="sc-advising-text">
              <p className="overline sc-eyebrow">Work with me</p>
              <h2 className="sc-advising-title">Advising & collaborations</h2>
              <p className="sc-advising-lead">Open to advisory work, research collaborations and tutoring on:</p>
            </div>
            <ul className="sc-advising-list">
              {ADVISING_TOPICS.map(topic => <li key={topic}>{topic}</li>)}
            </ul>
            <div className="sc-advising-cta">
              <EmailLink source="Advising" className="btn btn--primary btn--m">Email me</EmailLink>
              <EmailLink source="Advising" className="sc-email-link" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Outreach ── */}
      <section className="sc-outreach">
        <div className="container">
          <p className="overline sc-eyebrow">Outreach</p>
          <div className="sc-outreach-row">
            {channels.map(ch => (
              <div key={ch.name} className="sc-card sc-outreach-card">
                <div className={`sc-brand-badge sc-brand-badge--${ch.brand}`}>
                  <BrandIcon brand={ch.brand} />
                </div>
                <div className="sc-outreach-text">
                  <h3 className="sc-channel-title">{ch.name}</h3>
                  <p className="sc-kicker">{ch.kicker}</p>
                  <p className="sc-channel-body">{ch.blurb}</p>
                </div>
                <a href={ch.href} className="link-action sc-card-link" target="_blank" rel="noopener noreferrer" aria-label={`${ch.cta.replace(' →', '')} on ${ch.name}`} onClick={() => trackSocialClick(ch.name, 'redirect')}>{ch.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
