import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Research from './components/Research'
import CV from './components/CV'
import { initGA, trackPageView } from './utils/analytics'
import './App.css'

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(document.title, window.location.href);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics when app loads
    initGA();
  }, []);

  return (
    <div className="App">
      <Router>
        <AnalyticsTracker />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
