import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import profilePhoto from '../assets/images/personalphotonew.jpg'
import { papers } from '../data/papers.js'
import { channels } from '../data/channels.js'
import { trajectory } from '../data/trajectory.js'
import CollusionChart from './diagrams/CollusionChart.jsx'
import TwoSidedDiagram from './diagrams/TwoSidedDiagram.jsx'
import PaperRow from './PaperRow.jsx'
import { trackButtonClick, trackSocialClick } from '../utils/analytics'

function NetworkGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h8l4 4v14H6z" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="14.5" x2="15" y2="14.5" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  )
}

function BrandIcon({ brand }) {
  if (brand === 'youtube') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <polygon points="8,5.5 20,12 8,18.5" />
      </svg>
    )
  }
  if (brand === 'tiktok') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <circle cx="8" cy="17.5" r="3.2" />
        <rect x="10.4" y="4" width="2" height="13.5" />
        <polygon points="12.4,4 18,5.8 18,9 12.4,7.2" />
      </svg>
    )
  }
  if (brand === 'linkedin') {
    return (
      <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '17px', fontWeight: 700, color: 'white', lineHeight: 1 }}>in</span>
    )
  }
  return null
}

function Home() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('cristiam.chica@gmail.com')
    } catch {
      const ta = document.createElement('textarea')
      ta.value = 'cristiam.chica@gmail.com'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    trackButtonClick('Email Copy', 'Home')
  }

  const selectedPapers = papers.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="sc-hero">
        <div className="container sc-hero-inner">
          <div className="sc-hero-left">
            <h1 className="sc-hero-name">Cristian Camilo Chica Castaño</h1>
            <p className="sc-hero-position">
               PhD in Mathematics and <strong>Senior Data Scientist</strong>.
            </p>
            <p className="sc-hero-intro">
              Right now I am building the regulatory and public affairs data infrastructure for Latin America at Dapper. Before that, I was a Quantitative Strategist at Morgan
              Stanley.
            </p>
            <div className="sc-hero-btns">
              <button className="sc-btn-solid" onClick={copyEmail}>
                {copied ? 'Copied!' : 'Get in touch'}
              </button>
              <a className="sc-btn-outlined" href="https://www.linkedin.com/in/cccc24/" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('LinkedIn', 'redirect')}>LinkedIn</a>
              <a className="sc-btn-outlined" href="https://scholar.google.com/citations?user=7uZo3mQAAAAJ&hl=es&oi=ao" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('Google Scholar', 'redirect')}>Scholar</a>
              <a className="sc-btn-outlined" href="https://github.com/CristiamChica" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('GitHub', 'redirect')}>GitHub</a>
            </div>
          </div>
          <div className="sc-hero-right">
            <div className="sc-portrait">
              <img src={profilePhoto} alt="Cristian Chica" className="sc-portrait-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trajectory ── */}
      <section className="sc-trajectory">
        <div className="container">
          <p className="sc-eyebrow">Trajectory</p>
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
          <p className="sc-eyebrow">Explore</p>
          <p className="sc-explore-lead">My papers and CV, plus a bit of math out in the world.</p>

          {/* Feature cards */}
          <div className="sc-feature-row">
            <div className="sc-card">
              <div className="sc-card-top">
                <div className="sc-icon-badge"><NetworkGlyph /></div>
                <Link to="/research" className="sc-card-link">View research →</Link>
              </div>
              <h3 className="sc-card-title">Research</h3>
              <p className="sc-card-body">Papers on algorithmic collusion, two-sided markets, and dynamic pricing.</p>
              <div className="sc-chips">
                <span className="sc-chip">7 papers</span>
              </div>
            </div>

            <div className="sc-card">
              <div className="sc-card-top">
                <div className="sc-icon-badge"><DocGlyph /></div>
                <Link to="/cv" className="sc-card-link">View CV →</Link>
              </div>
              <h3 className="sc-card-title">CV</h3>
              <p className="sc-card-body">Full record: education, industry roles, publications, and talks.</p>
              <div className="sc-chips">
                <span className="sc-chip">PDF</span>
              </div>
            </div>
          </div>

          {/* Channel cards */}
          <div className="sc-channel-row">
            {channels.map(ch => (
              <div key={ch.name} className="sc-card sc-channel-card">
                <div className="sc-card-top">
                  <div className={`sc-brand-badge sc-brand-badge--${ch.brand}`}>
                    <BrandIcon brand={ch.brand} />
                  </div>
                  <a href={ch.href} className="sc-card-link" target="_blank" rel="noopener noreferrer">{ch.cta}</a>
                </div>
                <h3 className="sc-channel-title">{ch.name}</h3>
                <p className="sc-kicker">{ch.kicker}</p>
                <p className="sc-channel-body">{ch.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Papers ── */}
      <section className="sc-selected-papers">
        <div className="container">
          <div className="sc-sp-header">
            <p className="sc-eyebrow" style={{ marginBottom: 0 }}>Selected papers</p>
            <Link to="/research" className="sc-sp-all-link">All research →</Link>
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

      {/* ── Diagrams (hidden, pre-render for animation) ── */}
      <div style={{ display: 'none' }}>
        <CollusionChart animate={false} />
        <TwoSidedDiagram animate={false} />
      </div>

      {/* Toast */}
      {copied && (
        <div className="sc-toast">✓ Copied to clipboard</div>
      )}
    </>
  )
}

export default Home
