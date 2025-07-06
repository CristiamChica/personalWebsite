import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-content container">
        <Link to="/" className="logo">Cristian Chica</Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/research" 
            className={`nav-link ${location.pathname === '/research' ? 'active' : ''}`}
          >
            Research
          </Link>
          <Link 
            to="/cv" 
            className={`nav-link ${location.pathname === '/cv' ? 'active' : ''}`}
          >
            CV
          </Link>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
