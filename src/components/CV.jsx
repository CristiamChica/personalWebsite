import React, { useState } from 'react'
import './CV.css'
import { trackDownload, trackButtonClick } from '../utils/analytics'

function CV() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const cvUrl = "https://drive.google.com/file/d/1pU-yaIPKt3YGU_Io5w8Xh5jL7YlulSgI/view?usp=sharing"
  // Convert the Google Drive link to an embeddable format
  const embedUrl = "https://drive.google.com/file/d/1pU-yaIPKt3YGU_Io5w8Xh5jL7YlulSgI/preview"

  const handleCVClick = () => {
    setIsFullscreen(true)
  }

  const handleCloseFullscreen = () => {
    setIsFullscreen(false)
  }

  const handleOpenGoogleDrive = () => {
    trackDownload('CV_Cristian_Chica', 'pdf');
    trackButtonClick('CV Google Drive', 'CV Page');
    window.open(cvUrl, '_blank')
  }

  return (
    <section id="cv" className="cv">
      <div className="cv-container container">
        <div className="cv-header">
          <h1 className="cv-title">Curriculum Vitae</h1>
          <button onClick={handleOpenGoogleDrive} className="btn btn--secondary btn--m">
            Open PDF in Google Drive
          </button>
        </div>
        
        <div className="cv-content">
          <div className="cv-embed-container" onClick={handleCVClick}>
            <iframe
              src={embedUrl}
              className="cv-iframe"
              title="Cristian Chica CV"
              frameBorder="0"
              allowFullScreen
            />
            <div className="cv-overlay">
              <div className="cv-overlay-content">
                <h3>Expand CV</h3>
                <p>Click to view full screen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="cv-modal" onClick={handleCloseFullscreen}>
          <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <h2>Curriculum Vitae</h2>
              <div className="cv-modal-actions">
                <button 
                  onClick={handleOpenGoogleDrive}
                  className="btn btn--primary btn--m"
                  title="Open in Google Drive"
                >
                  Open in Google Drive
                </button>
                <button 
                  onClick={handleCloseFullscreen}
                  className="btn btn--ghost btn--m cv-close-btn"
                  title="Close full screen"
                  aria-label="Close full screen"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="cv-modal-body">
              <iframe
                src={embedUrl}
                className="cv-modal-iframe"
                title="Cristian Chica CV - Fullscreen"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CV
