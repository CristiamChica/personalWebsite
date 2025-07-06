import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { initGA } from '../utils/analytics'
import './CookieConsent.css'

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false) // For animation

  // Memoized DNT check to avoid repeated calculations
  const checkDNTStatus = useCallback(() => {
    try {
      return navigator.doNotTrack === '1' || 
             navigator.doNotTrack === 'yes' || 
             navigator.msDoNotTrack === '1' ||
             window.doNotTrack === '1';
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    const determineBannerVisibility = () => {
      try {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        const hasOptedOut = localStorage.getItem('ga-opt-out') === 'true';
        const hasDNT = checkDNTStatus();
        
        // Show banner only if no previous choice and no DNT
        if (!consent && !hasOptedOut && !hasDNT) {
          setShowBanner(true);
          // Slight delay for smooth animation
          requestAnimationFrame(() => setIsVisible(true));
        } else if (consent === 'accepted') {
          // Initialize analytics if previously accepted
          initGA();
        }
      } catch (error) {
        console.error('Error checking cookie consent status:', error);
      }
    };

    determineBannerVisibility();
  }, [checkDNTStatus]);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem('cookie-consent', 'accepted');
      localStorage.removeItem('ga-opt-out');
      setIsVisible(false);
      // Wait for animation before hiding
      setTimeout(() => {
        setShowBanner(false);
        initGA();
      }, 300);
    } catch (error) {
      console.error('Error accepting cookies:', error);
    }
  }, []);

  const handleDecline = useCallback(() => {
    try {
      localStorage.setItem('cookie-consent', 'declined');
      localStorage.setItem('ga-opt-out', 'true');
      setIsVisible(false);
      // Wait for animation before hiding
      setTimeout(() => setShowBanner(false), 300);
    } catch (error) {
      console.error('Error declining cookies:', error);
    }
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      handleDecline();
    }
  }, [handleDecline]);

  useEffect(() => {
    if (showBanner) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [showBanner, handleKeyDown]);

  if (!showBanner) {
    return null;
  }

  return (
    <div 
      className={`cookie-consent-banner ${isVisible ? 'visible' : ''}`}
      role="banner"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <p>
            This website uses Google Analytics cookies to understand how visitors interact with the site. 
            All data is anonymized and used solely for improving user experience.{' '}
            <Link 
              to="/privacy" 
              className="cookie-consent-link"
              aria-label="Learn more about our privacy policy"
            >
              Learn more in our Privacy Policy
            </Link>
          </p>
        </div>
        <div className="cookie-consent-buttons">
          <button 
            onClick={handleDecline}
            className="cookie-btn cookie-btn-decline"
            aria-label="Decline analytics cookies"
            type="button"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="cookie-btn cookie-btn-accept"
            aria-label="Accept analytics cookies"
            type="button"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
