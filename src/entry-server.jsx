// Server entry used only at build time by scripts/prerender.js
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export { ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, PERSON_JSON_LD } from './seo.js'

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}
