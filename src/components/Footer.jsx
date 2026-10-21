import React from 'react'
import { Link } from 'react-router-dom'
import { EMAIL } from '../seo'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-text">
          <p suppressHydrationWarning>© {currentYear} Cristian Camilo Chica Castaño. All rights reserved.</p>
          <p>
            <a href={`mailto:${EMAIL}`} className="footer-link footer-email">{EMAIL}</a>
          </p>
          <p className="footer-privacy">
            This site uses Google Analytics for anonymous usage statistics.{' '}
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
