import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { EMAIL } from '../seo'
import { trackButtonClick } from '../utils/analytics'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="hdr">
      <div className="hdr-inner container">
        <Link to="/" className="hdr-logo">Cristian Chica</Link>
        <nav className="hdr-nav">
          <Link to="/" className={`hdr-link${location.pathname === '/' ? ' hdr-link--active' : ''}`}>
            Home
          </Link>
          <Link to="/research" className={`hdr-link${location.pathname === '/research' ? ' hdr-link--active' : ''}`}>
            Research
          </Link>
          <Link to="/cv" className={`hdr-link${location.pathname === '/cv' ? ' hdr-link--active' : ''}`}>
            CV
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="btn btn--primary btn--m hdr-contact"
            onClick={() => trackButtonClick('Email Link', 'Header')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
