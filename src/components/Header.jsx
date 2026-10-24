import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import EmailLink from './EmailLink'
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
          <EmailLink source="Header" className="btn btn--primary btn--m hdr-contact">
            Contact
          </EmailLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
