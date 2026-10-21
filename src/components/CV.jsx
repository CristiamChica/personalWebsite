import React from 'react'
import { Link } from 'react-router-dom'
import './CV.css'
import { papers } from '../data/papers.js'
import PaperRow from './PaperRow.jsx'
import { trackDownload, trackButtonClick } from '../utils/analytics'

// Place the PDF at public/cv.pdf; it is served from the site root
const CV_PDF = '/cv.pdf'

const EXPERIENCE = [
  {
    org: 'Dapper',
    role: 'Data and AI engineering',
    body: 'Leading a 9-person team building RAG, agentic ETL and data-quality systems for regulatory data in 10+ markets across Latin America and the Middle East.',
    when: 'Now'
  },
  {
    org: 'Morgan Stanley',
    role: 'Quantitative Strategist',
    body: 'Entity resolution, LLM-driven automation and firm strategy.'
  },
  {
    org: 'Harvard Business School',
    role: 'Research Assistant',
    body: 'Research assistance to Jorge Tamayo and coauthors on industrial organization and development economics projects.',
    when: '2018–2021'
  }
]

const EDUCATION = [
  { degree: 'PhD, Mathematics', school: 'University of Minnesota', body: 'Multi-agent reinforcement learning and algorithmic collusion.' },
  { degree: 'MSc, Mathematics', school: 'Universidad Nacional de Colombia, Sede Medellín', body: 'Thesis: Some Aspects of the Obstacle Problem.', when: '2020' }
]

function CV() {
  const handleDownload = () => {
    trackDownload('CV_Cristian_Chica', 'pdf')
    trackButtonClick('CV Download', 'CV Page')
  }

  return (
    <section id="cv" className="cv">
      <div className="cv-container container">
        <div className="cv-header">
          <div>
            <h1 className="cv-title">Curriculum Vitae</h1>
            <p className="cv-lead">A short summary. The PDF has the full record, including talks.</p>
          </div>
          <div className="cv-actions">
            <a href={CV_PDF} download="Cristian_Chica_CV.pdf" className="btn btn--primary btn--m" onClick={handleDownload}>
              Download CV (PDF)
            </a>
            <a href={CV_PDF} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--m" onClick={handleDownload}>
              View PDF
            </a>
          </div>
        </div>

        <div className="cv-block">
          <h2 className="overline cv-block-title">Experience</h2>
          <ol className="cv-list">
            {EXPERIENCE.map(item => (
              <li key={item.org} className="cv-item">
                <div className="cv-item-head">
                  <span className="cv-item-title">{item.org}</span>
                  {item.when && <span className="cv-item-when">{item.when}</span>}
                </div>
                <span className="cv-item-sub">{item.role}</span>
                <p className="cv-item-body">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="cv-block">
          <h2 className="overline cv-block-title">Education</h2>
          <ol className="cv-list">
            {EDUCATION.map(item => (
              <li key={item.degree} className="cv-item">
                <div className="cv-item-head">
                  <span className="cv-item-title">{item.degree}</span>
                  {item.when && <span className="cv-item-when">{item.when}</span>}
                </div>
                <span className="cv-item-sub">{item.school}</span>
                <p className="cv-item-body">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="cv-block">
          <div className="cv-block-head">
            <h2 className="overline cv-block-title">Selected papers</h2>
            <Link to="/research" className="link-action">All research →</Link>
          </div>
          <div>
            {papers.slice(0, 3).map((paper, i) => (
              <PaperRow
                key={paper.id}
                index={i + 1}
                title={paper.title}
                meta={`${paper.authors} · ${paper.year}`}
                status={paper.statusShort}
                href={paper.paperUrl}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
