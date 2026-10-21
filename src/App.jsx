import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Research from './components/Research'
import CV from './components/CV'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import { trackPageView } from './utils/analytics'
import { ROUTES } from './seo'
import './App.css'

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const route = ROUTES[location.pathname];
    document.title = route ? route.title : 'Cristian Chica';
    trackPageView(document.title, window.location.href);
  }, [location]);

  return null;
}

// The router is supplied by the entry point: BrowserRouter in main.jsx, StaticRouter in entry-server.jsx
function App() {
  // Remove automatic GA initialization - now handled by consent banner

  return (
    <div className="App">
      <AnalyticsTracker />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
