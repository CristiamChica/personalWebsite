import React, { useState, useEffect, useCallback } from 'react'
import { optOutOfAnalytics, optInToAnalytics } from '../utils/analytics'
import './Privacy.css'

function Privacy() {
  const [isOptedOut, setIsOptedOut] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user is already opted out
    try {
      const optedOut = localStorage.getItem('ga-opt-out') === 'true'
      setIsOptedOut(optedOut)
    } catch (error) {
      console.error('Error checking opt-out status:', error)
    }
  }, [])

  const handleOptOut = useCallback(async () => {
    if (isLoading) return
    
    setIsLoading(true)
    try {
      optOutOfAnalytics()
      setIsOptedOut(true)
      
      // Better user feedback with toast-style notification
      const notification = document.createElement('div')
      notification.textContent = '✅ Successfully opted out of analytics tracking'
      notification.className = 'privacy-notification success'
      document.body.appendChild(notification)
      
      setTimeout(() => {
        notification.remove()
      }, 3000)
    } catch (error) {
      console.error('Error opting out:', error)
      alert('Error opting out. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [isLoading])

  const handleOptIn = useCallback(async () => {
    if (isLoading) return
    
    setIsLoading(true)
    try {
      optInToAnalytics()
      setIsOptedOut(false)
      
      // Better user feedback
      const notification = document.createElement('div')
      notification.textContent = '📊 Successfully opted back into analytics tracking'
      notification.className = 'privacy-notification success'
      document.body.appendChild(notification)
      
      setTimeout(() => {
        notification.remove()
      }, 3000)
    } catch (error) {
      console.error('Error opting in:', error)
      alert('Error opting in. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [isLoading])
  return (
    <section id="privacy" className="privacy">
      <div className="privacy-container container">
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-last-updated">Last updated: July 2025</p>
          <p className="privacy-gdpr-notice">
            This policy complies with the EU General Data Protection Regulation (GDPR) 
            and other applicable privacy laws.
          </p>
        </div>
        
        <div className="privacy-content">
          <div className="privacy-section">
            <h2>Legal Basis for Processing (GDPR Article 6)</h2>
            <p>
              Under the EU General Data Protection Regulation (GDPR), we process your data based on:
            </p>
            <ul>
              <li><strong>Consent (Article 6(1)(a)):</strong> You have given explicit consent for analytics cookies through our consent banner</li>
              <li><strong>Legitimate Interest (Article 6(1)(f)):</strong> Improving website performance and user experience</li>
            </ul>
            <p>
              You have the right to withdraw your consent at any time using the opt-out button below or in your browser settings.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              This website uses Google Analytics to collect anonymous information about how visitors use the site. 
              This includes:
            </p>
            <ul>
              <li>Pages you visit and time spent on each page</li>
              <li>How you arrived at the site (search engine, direct link, etc.)</li>
              <li>Your approximate geographic location (country/city level)</li>
              <li>Device and browser information</li>
              <li>IP address (anonymized)</li>
            </ul>
            <p>
              <strong>We do not collect:</strong> Personal information, names, email addresses, 
              or any data that can identify you personally.
            </p>
          </div>

          <div className="privacy-section">
            <h2>How We Use Information</h2>
            <p>The analytics data is used solely to:</p>
            <ul>
              <li>Understand which content is most valuable to visitors</li>
              <li>Improve website performance and user experience</li>
              <li>Track general usage patterns and trends</li>
            </ul>
            <p>
              This is a personal academic website. Data is not sold, shared with third parties, 
              or used for commercial purposes.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Data Storage and Retention</h2>
            <p>
              Analytics data is processed by Google Analytics and stored on Google's servers 
              <strong> in the United States</strong>. Google is certified under the EU-US Data Privacy Framework, 
              ensuring adequate protection for EU personal data transfers to the US.
            </p>
            <p>
              Google automatically deletes this data after 26 months. You can learn more about 
              Google's data practices and their compliance with international data protection laws in their{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="privacy-link"
              >
                Privacy Policy
              </a> and{' '}
              <a 
                href="https://privacy.google.com/businesses/compliance/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="privacy-link"
              >
                GDPR Compliance Information
              </a>.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Your Rights Under GDPR</h2>
            <p>If you are located in the European Union, you have the following rights:</p>
            <ul>
              <li><strong>Right of Access:</strong> Request information about personal data we process</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to data processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for analytics at any time</li>
            </ul>
            <p>
              <strong>Note:</strong> Since we only collect anonymous analytics data through Google Analytics, 
              most of these rights are automatically satisfied (we cannot identify individual users). 
              However, you can always control or stop data collection using the options below.
            </p>
            
            <h3>How to Exercise Your Rights:</h3>
            <ul>
              <li>
                <strong>Browser Settings:</strong> Enable "Do Not Track" in your browser settings 
                (this website respects DNT signals)
              </li>
              <li>
                <strong>Google Analytics Opt-out:</strong> Install the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <strong>Ad Blockers:</strong> Most ad blockers automatically block analytics tracking
              </li>
            </ul>
            
            <div className="privacy-opt-out">
              <h3>Direct Opt-out for This Website</h3>
              <p>You can opt out of analytics tracking for this website specifically:</p>
              {isOptedOut ? (
                <div className="opt-out-container">
                  <p className="opt-out-status success">✅ You are currently opted out of analytics tracking</p>
                  <button 
                    onClick={handleOptIn} 
                    className="opt-in-button"
                    disabled={isLoading}
                    aria-label="Opt back into analytics tracking"
                  >
                    {isLoading ? 'Processing...' : 'Opt Back In to Analytics'}
                  </button>
                </div>
              ) : (
                <div className="opt-out-container">
                  <p className="opt-out-status active">📊 Analytics tracking is currently enabled</p>
                  <button 
                    onClick={handleOptOut} 
                    className="opt-out-button"
                    disabled={isLoading}
                    aria-label="Opt out of analytics tracking"
                  >
                    {isLoading ? 'Processing...' : 'Opt Out of Analytics'}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="privacy-section">
            <h2>Cookies and Consent</h2>
            <p>
              This website uses cookies only through Google Analytics for the purposes described above. 
              <strong> We will only place these cookies after you have given explicit consent</strong> 
              through our consent banner that appears on your first visit.
            </p>
            <p>
              Types of cookies used:
            </p>
            <ul>
              <li><strong>Analytics Cookies:</strong> Help us understand how the website is being used</li>
              <li><strong>Consent Cookies:</strong> Remember your privacy preferences</li>
            </ul>
            <p>
              You can withdraw your consent at any time using the opt-out button above or by 
              clearing your browser cookies.
            </p>
          </div>

          <div className="privacy-section">
            <h2>External Links</h2>
            <p>
              This website contains links to external sites (LinkedIn, Google Scholar, GitHub, research papers). 
              These sites have their own privacy policies, and we are not responsible for their practices.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              This privacy policy may be updated occasionally. Any changes will be posted on this page 
              with an updated "Last updated" date.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Data Protection Officer & Contact</h2>
            <p>
              For any questions about this privacy policy, how your data is handled, or to exercise your rights under GDPR, 
              you can contact me at: (Email in the homepage).
            </p>
            <p>
              <strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 days as required by GDPR.
            </p>
            <p>
              <strong>Supervisory Authority:</strong> If you believe your data protection rights have been violated, 
              you have the right to lodge a complaint with your local data protection authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Privacy
