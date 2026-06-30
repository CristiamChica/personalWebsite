import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('cristiam.chica@gmail.com')
    } catch {
      const ta = document.createElement('textarea')
      ta.value = 'cristiam.chica@gmail.com'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <button className="hdr-contact" onClick={copyEmail}>
            {copied ? 'Copied!' : 'Contact'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
