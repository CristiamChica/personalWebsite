import React from 'react'
import './Research.css'
import { papers, prePhDPublications, masterThesis } from '../data/papers.js'
import { trackDownload } from '../utils/analytics'

function Research() {
  return (
    <section id="research" className="research">
      <div className="research-container container">
        <div className="research-header">
          <h1 className="research-title">Research Papers</h1>
        </div>
        
        <div className="papers-list">
          {papers.map((paper, index) => (
            <div key={paper.id} className="paper-card">
              <div className="paper-content">
                <h3 className="paper-title">
                  {paper.title}
                </h3>
                <p className="paper-authors">{paper.authors}, {paper.year}</p>
                <div className="paper-description">
                  <ul>
                    {paper.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="paper-links">
                  <a className="paper-status">{paper.status}</a>
                  <a href={paper.pdfUrl} 
                     className="pdf-link" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     onClick={() => trackDownload(paper.title, 'pdf')}>
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pre-PhD Publications Section */}
        <div className="section-divider">
          <h2 className="section-title">Publications (Pre-Ph.D.)</h2>
        </div>
        
        <div className="publications-list">
          {prePhDPublications.map((publication) => (
            <div key={publication.id} className="paper-card">
              <div className="paper-content">
                <h3 className="paper-title">
                  {publication.title}
                </h3>
                <p className="paper-authors">{publication.authors}, {publication.year}</p>
                <div className="paper-links">
                  <a className="paper-status">{publication.journal}</a>
                  <a href={publication.url} 
                     className="pdf-link" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     onClick={() => trackDownload(publication.title, 'publication')}>
                    View Publication
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Master Thesis Section */}
        <div className="section-divider">
          <h2 className="section-title">Master Thesis in Mathematics</h2>
        </div>
        
        <div className="thesis-card">
          <div className="thesis-content">
            <h3 className="thesis-title">
              {masterThesis.title}
            </h3>
            <p className="thesis-university">{masterThesis.university}, {masterThesis.year}</p>
              <p className="advisor">Advisor: {masterThesis.advisor}, Co-Advisor: {masterThesis.coAdvisor}</p>
            <div className="thesis-links">
              <a href={masterThesis.url} 
                 className="thesis-link" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 onClick={() => trackDownload(masterThesis.title, 'thesis')}>
                View Thesis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
