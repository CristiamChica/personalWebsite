import React, { useState } from 'react'
import './Home.css'
import profilePhoto from '../assets/images/personalphoto.JPEG'
import { papers } from '../data/papers.js'
import { trackButtonClick, trackSocialClick } from '../utils/analytics'

function Home() {
  // Use shared papers data as preprints
  const preprints = papers;

  const [currentPreprintIndex, setCurrentPreprintIndex] = useState(0);
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);

  const nextPreprint = () => {
    setCurrentPreprintIndex((prev) => (prev + 1) % preprints.length);
  };

  const prevPreprint = () => {
    setCurrentPreprintIndex((prev) => (prev - 1 + preprints.length) % preprints.length);
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('cristiam.chica@gmail.com');
      setShowCopiedNotification(true);
      setTimeout(() => setShowCopiedNotification(false), 2000);
      trackButtonClick('Email Copy', 'Home Contact');
      console.log('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'cristiam.chica@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopiedNotification(true);
      setTimeout(() => setShowCopiedNotification(false), 2000);
      trackButtonClick('Email Copy (Fallback)', 'Home Contact');
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="intro">
          <h1 className="greeting">Cristian Camilo Chica Castaño</h1>
          <p className="description">
            Quantitative Strategist at Morgan Stanley with a Ph.D. in Mathematics from the University of Minnesota. 
            My research is on multi-agent reinforcement learning, algorithmic pricing, and game theory.
          </p>
        </div>
        <div className="hero-image">
          <div className="profile-photo">
            <img 
              src={profilePhoto} 
              alt="Cristian Chica - Quantitative Strategist at Morgan Stanley" 
              className="profile-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Research Widgets Section */}
      <div className="research-widgets">
        <div className="widget preprints-carousel">
          <div className="carousel-header">
            <h3 className="widget-title">Papers</h3>
            <div className="carousel-controls">
              <button 
                className="carousel-btn prev" 
                onClick={prevPreprint}
                disabled={preprints.length <= 1}
                aria-label="Previous preprint"
              >
                ←
              </button>
              <span className="carousel-counter">
                {currentPreprintIndex + 1} / {preprints.length}
              </span>
              <button 
                className="carousel-btn next" 
                onClick={nextPreprint}
                disabled={preprints.length <= 1}
                aria-label="Next preprint"
              >
                →
              </button>
            </div>
          </div>
          
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentPreprintIndex * 100}%)`,
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {preprints.map((preprint, index) => (
                <div key={preprint.id} className="carousel-slide">
                  <div className="paper-item">
                    <h4 className="paper-title">
                      {preprint.title}
                    </h4>
                    <p className="paper-authors">{preprint.authors}, {preprint.year}</p>
                    <p className="paper-status">{preprint.status}</p>
                    <div className="paper-links">
                      <a href={preprint.pdfUrl} className="pdf-link" target="_blank" rel="noopener noreferrer">
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Buttons Section */}
      <div className="contact-section">
        <div className="contact-buttons">
          <button 
            onClick={copyEmailToClipboard}
            className="contact-btn email-btn tooltip-container"
            aria-label="Copy email address"
            title="Click to copy email"
            data-tooltip="Click to copy: cristiam.chica@gmail.com"
          >
            <span className="contact-text">Email</span>
          </button>
          <a 
            href="https://www.linkedin.com/in/cccc24/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn linkedin-btn tooltip-container"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
            data-tooltip="Click to redirect to LinkedIn"
            onClick={() => trackSocialClick('LinkedIn', 'redirect')}
          >
            <span className="contact-text">LinkedIn</span>
          </a>
          <a 
            href="https://scholar.google.com/citations?user=7uZo3mQAAAAJ&hl=es&oi=ao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn scholar-btn tooltip-container"
            aria-label="Google Scholar profile"
            title="Google Scholar profile"
            data-tooltip="Click to redirect to Google Scholar"
            onClick={() => trackSocialClick('Google Scholar', 'redirect')}
          >
            <span className="contact-text">Scholar</span>
          </a>
          <a 
            href="https://github.com/CristiamChica" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn github-btn tooltip-container"
            aria-label="GitHub profile"
            title="GitHub profile"
            data-tooltip="Click to redirect to GitHub"
            onClick={() => trackSocialClick('GitHub', 'redirect')}
          >
            <span className="contact-text">GitHub</span>
          </a>
        </div>
      </div>
      
      {/* Copied to Clipboard Notification */}
      {showCopiedNotification && (
        <div className="copied-notification">
          ✓ Copied to clipboard
        </div>
      )}
    </section>
  )
}

export default Home
