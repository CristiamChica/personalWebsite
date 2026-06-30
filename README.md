# cristianchica.com

Personal academic website for Cristian Camilo Chica Castaño. Built with React + Vite, styled with plain CSS using a warm editorial ("Manuscript") design system.

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | React 18 |
| Build | Vite 5 |
| Routing | React Router DOM 7 |
| Styling | Plain CSS (component-scoped files) |
| Fonts | Google Fonts — Sora, Newsreader, JetBrains Mono |
| Analytics | Google Analytics 4 (privacy-first wrapper) |

---

## Running locally

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

---

## Project structure

```
src/
├── main.jsx                  # React entry point, mounts App
├── App.jsx                   # Router, page-title tracking, analytics initialisation
├── App.css                   # Minimal shell: .App flex column, main flex:1
├── index.css                 # Design tokens (:root CSS variables) + global resets
│
├── shared/
│   └── utilities.css         # .container (max-width 1040px, 48px side padding)
│
├── assets/
│   └── images/
│       └── personalphotonew.jpg   # Hero portrait photo
│
├── data/                     # Content arrays — edit here to update site copy
│   ├── papers.js             # Research papers (5 main + 2 earlier)
│   ├── channels.js           # YouTube / TikTok / LinkedIn channel cards
│   └── trajectory.js         # Career timeline stops (Dapper / Morgan Stanley / PhD)
│
├── components/
│   ├── Header.jsx / .css     # Sticky nav bar
│   ├── Home.jsx / .css       # Home page (composes all home sections)
│   ├── Research.jsx / .css   # Research page (thread blocks + earlier work)
│   ├── CV.jsx / .css         # Embedded Google Drive PDF + fullscreen modal
│   ├── Privacy.jsx / .css    # GDPR privacy policy page
│   ├── Footer.jsx / .css     # Site footer
│   ├── CookieConsent.jsx / .css  # Cookie consent banner (localStorage-based)
│   ├── PaperRow.jsx / .css   # Shared paper row used on Home + Research
│   └── diagrams/
│       ├── CollusionChart.jsx        # SVG: price-convergence curves
│       ├── TwoSidedDiagram.jsx       # SVG: two-sided platform network
│       └── PayoffMatrix.jsx / .css   # CSS grid: prisoner's-dilemma payoff matrix
│
└── utils/
    └── analytics.js          # GA4 wrapper (consent-gated, anonymised IP)
```

---

## Design system

### Fonts

Three families loaded from Google Fonts (declared in `index.html`):

| Family | Use |
|---|---|
| **Sora** | Everything — headlines, body, UI, buttons |
| **Newsreader** (serif) | Paper index numerals only (`01 02 03`) |
| **JetBrains Mono** | Diagram captions and micro-labels |

### CSS custom properties

All design tokens live in `src/index.css :root`. The key groups:

```
Surfaces:   --bg  --surface  --surface-sunk  --chip  --chip-warm
Ink/text:   --ink  --text-strong  --text  --muted  --faint  --faint-2
Accent:     --accent (#B23A1E terracotta)  --accent-soft  --accent-on-dark
Borders:    --border  --border-strong  --border-input
Dark band:  --band-bg  --band-text  --band-body  --band-line  --band-line-2
Status:     --ok-bg  --ok-border  --ok-dot  --ok-text
Diagrams:   --net-line  --curve-2
Brands:     --youtube  --tiktok  --linkedin
Radii:      --r-card  --r-badge  --r-icon  --r-btn  --r-pill
            --r-drop (9999px 9999px 9999px 16px — asymmetric portrait droplet)
```

### Animations

Two keyframes defined globally in `index.css`:

- `scDash` — SVG stroke draw-in (used on CollusionChart when `animate={true}`)
- `scPulse` — node opacity pulse (used on TwoSidedDiagram when `animate={true}`)

Both are suppressed under `prefers-reduced-motion`.

---

## Routes

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | Main landing page |
| `/research` | `Research` | Papers organised by thread |
| `/cv` | `CV` | Embedded Google Drive PDF |
| `/privacy` | `Privacy` | GDPR privacy policy |

---

## Pages

### Header (`Header.jsx`)

Sticky top bar (`z-index: 100`). Wordmark "Cristian Chica" links to `/`. Nav links: Home · Research · CV. **Contact** button copies the email address (`cristiam.chica@gmail.com`) to clipboard and shows a brief "Copied!" label.

Active route link gets `--accent` colour + 2px underline via `.hdr-link--active`.

### Home (`Home.jsx`)

Composed of five sections, separated by 1px `--border` hairlines:

**a) Hero** — flex row (portrait right). Left column: availability pill, H1 name, positioning tagline (bold phrase in `--accent`), intro paragraph, button row. Right column: portrait photo in asymmetric droplet frame (`--r-drop`).

**b) Trajectory** — 3-column CSS grid on a `--border-strong` top line. Each stop has a dot pulled up onto the line (`margin-top: -7px`), a kicker, title, and body. Dot styles: filled accent (Now) / filled ink (Previously) / hollow ring (Foundation).

**c) Explore** — eyebrow + lead line, then two sub-rows:
  - *Feature row* (2 cols): Research card and CV card, each with a 44×44px icon badge, a "View →" link, title, body, and chip pills.
  - *Channel row* (3 cols): YouTube / TikTok / LinkedIn cards with 40×40px brand-coloured badges.

**d) Work Together** — full-bleed dark band (`--band-bg`). Header row with eyebrow, lead sentence, and two buttons (Email me / LinkedIn). Below a `--band-line` divider: 3-column grid of consulting service descriptions.

**e) Selected Papers** — eyebrow + "All research →" link, followed by three `<PaperRow>` instances (papers 1–3 from `papers.js`) with `size="lg"` and status pills.

### Research (`Research.jsx`)

Page header (H2 + intro), then three `ThreadBlock` sections, then an Earlier Work section.

Each **ThreadBlock** is a flex row (alternating left/right):
- Diagram card: 300px wide, white card, 1px border, contains one of the three diagram components.
- Text side: Newsreader thread number, accent kicker, H3 title, blurb, then `<PaperRow size="sm">` entries.

Thread → paper mapping (via `papers.js` `thread` field):

| Thread | `thread` value | Papers |
|---|---|---|
| 01 · Algorithmic collusion | `algorithmic-collusion` | IDs 1, 4 |
| 02 · Two-sided markets | `two-sided-markets` | IDs 2, 5 |
| 03 · Game theory | `game-theory` | ID 3 |

**Earlier Work** section shows `prePhDPublications` from `papers.js` as plain hairline rows (no index numeral).

### CV (`CV.jsx`)

Embeds the CV PDF via a Google Drive `preview` iframe. Clicking the embed opens a fullscreen modal with a "Google Drive" button and a close button. Minimal restyling — inherits the warm `--bg` page background from the global CSS.

---

## Data layer (`src/data/`)

### `papers.js`

Exports three arrays:

**`papers`** — 5 research papers. Each entry:
```js
{
  id, title, authors, year,
  status,      // full journal/status string
  statusShort, // pill label: "Submitted" | "R&R IJIO" | "JEMS 2025"
  thread,      // "algorithmic-collusion" | "two-sided-markets" | "game-theory"
  paperUrl,    // link target
  pdfUrl,      // same as paperUrl currently
  description  // array of bullet-point strings (used on old Research page, kept for reference)
}
```

**`prePhDPublications`** — 2 earlier publications (`id, title, authors, journal, year, url`).

**`masterThesis`** — single object (kept for reference, not displayed in current UI).

### `channels.js`

Array of 3 channel objects (`name, kicker, blurb, cta, href, brand`). The `brand` field (`youtube | tiktok | linkedin`) drives badge colour via `.sc-brand-badge--{brand}` and which `BrandIcon` SVG renders.

> **TODO:** Replace the YouTube and TikTok `href` values with real channel URLs.

### `trajectory.js`

Array of 3 career stops (`id, kicker, dotStyle, title, body`). `dotStyle` maps to a CSS modifier class (`--accent | --ink | --ring`) that controls the timeline dot appearance.

---

## Reusable components

### `PaperRow`

```jsx
<PaperRow
  index={1}          // Newsreader numeral (omit for Earlier Work rows)
  title="..."
  meta="Authors · Year · Status"   // shown as faint sub-line
  status="Submitted" // optional pill on the right
  href="https://..."
  size="lg"          // "lg" (Home) or "sm" (Research)
/>
```

Renders as an `<a>` tag with a top `--border` hairline. Title turns `--accent` on hover.

### Diagrams

All three accept an `animate` boolean prop:
- `CollusionChart` — SVG with axes, two reference lines, and two price-convergence curves. `animate={true}` draws the curves in via `scDash`.
- `TwoSidedDiagram` — SVG with platform rect, user/provider nodes, connectors, network-effect arc. `animate={true}` pulses node opacity via `scPulse`.
- `PayoffMatrix` — CSS grid (3×3 cells). Nash equilibrium cell has `--accent` border and `--accent-soft` background.

Currently `animate={false}` on both Home and Research. The spec intends `animate={true}` on Home when diagrams scroll into view (hook not yet wired).

---

## Analytics

`src/utils/analytics.js` wraps GA4 with:
- Consent-gated initialisation (reads `analyticsConsent` from `localStorage`)
- Anonymised IP, no ad-personalisation signals
- DNT (Do Not Track) detection
- Exports: `trackPageView`, `trackButtonClick`, `trackSocialClick`, `trackDownload`

`CookieConsent.jsx` manages the Accept/Decline banner and writes the consent flag.

---

## Responsive breakpoints

| Breakpoint | Behaviour |
|---|---|
| ≤ 860px | Hero stacks (portrait above text); trajectory, feature, channel, and work-together grids collapse to single column; thread blocks stack (diagram above text) |
| ≤ 720px | Side padding drops from 48px → 20px; heading sizes reduce |
| ≤ 480px | Side padding → 16px; hero buttons stack vertically; channel row → 1 col |

---

## Outstanding TODOs

1. **Channel URLs** — update `href` in `src/data/channels.js` for YouTube and TikTok.
2. **Scroll-triggered diagram animation** — wire an `IntersectionObserver` (or `useInView` hook) on the Home diagram containers and pass `animate={true}` once they enter the viewport.
3. **Self-host fonts** — optionally move Google Fonts to local files for privacy and performance.
