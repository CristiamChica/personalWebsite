import React, { useState } from 'react'
import './CV.css'
import { trackDownload, trackButtonClick } from '../utils/analytics'

function CV() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const cvUrl = "https://drive.google.com/file/d/13-7gKQ0Cy0NMU48ggvG3wL3eAP9cyDFo/view?usp=drive_link"
  // Convert the Google Drive link to an embeddable format
  const embedUrl = "https://drive.google.com/file/d/13-7gKQ0Cy0NMU48ggvG3wL3eAP9cyDFo/preview"

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
                <p>Click to view fullscreen</p>
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
                  className="cv-modal-btn cv-drive-btn"
                  title="Open in Google Drive"
                >
                  📄 Google Drive
                </button>
                <button 
                  onClick={handleCloseFullscreen}
                  className="cv-modal-btn cv-close-btn"
                  title="Close fullscreen"
                >
                  ✕
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
