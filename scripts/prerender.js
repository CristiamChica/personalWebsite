// Pre-renders every route in src/seo.js to static HTML with per-route <head> tags.
// Runs after `vite build` (client) and `vite build --ssr` (server entry into .ssr/).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, '.ssr')

const { render, ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, PERSON_JSON_LD } =
  await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head--> or <!--app-html--> placeholder')
}

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  .replace(/</g, '&lt;').replace(/>/g, '&gt;')

function jsonLd(url, meta) {
  if (!meta.article) return PERSON_JSON_LD
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.article.headline,
    description: meta.description,
    datePublished: meta.article.datePublished,
    url,
    mainEntityOfPage: url,
    image: OG_IMAGE,
    author: { '@type': 'Person', name: PERSON_JSON_LD.name, url: SITE_URL }
  }
}

function head(pathname, meta) {
  const url = SITE_URL + (pathname === '/' ? '/' : pathname)
  const ogType = meta.article ? 'article' : pathname === '/' ? 'profile' : 'website'
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    ...(meta.article ? [`<meta property="article:published_time" content="${meta.article.datePublished}" />`] : []),
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Cristian Chica — PhD in Mathematics and Head of Data at Dapper" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@ccchicac" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd(url, meta)).replace(/</g, '\\u003c')}</script>`
  ].join('\n    ')
}

for (const [pathname, meta] of Object.entries(ROUTES)) {
  const html = template
    .replace(/<title>[^<]*<\/title>\s*/, '')
    .replace('<!--app-head-->', head(pathname, meta))
    .replace('<!--app-html-->', render(pathname))

  // /research -> research.html, /writing/x -> writing/x.html; served without .html via `cleanUrls` in vercel.json
  const outFile = pathname === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, `${pathname.slice(1)}.html`)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  console.log(`prerendered ${pathname} -> ${path.relative(root, outFile)}`)
}

// sitemap.xml generated from the same route list
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(ROUTES).map(p => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log('wrote sitemap.xml')

fs.rmSync(ssrDir, { recursive: true, force: true })
