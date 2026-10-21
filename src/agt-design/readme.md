# AGT Design System

## Company context
**AGT** is an agricultural fintech. It lends against produce: a farmer's expected harvest is the collateral. Loans are underwritten and monitored with technology — satellite imagery (NDVI / vigor, moisture, cloud-masked passes) and a platform where farmers track crop well-being and submit field data. Farmers are strongly incentivised to report accurately, because verified data is what unlocks disbursals.

Surfaces covered here:
- **AGT Platform** (farmer web app) — overview, field monitoring, field reports, loans. See `ui_kits/platform/`.

## Sources
- `uploads/colors.png` (copied to `assets/wada-293-source.png`) — plate **No. 293** from Sanzo Wada's *A Dictionary of Color Combinations*. Four colours: Raw Sienna, Turquoise Green, Artemisia Green, Green. Token names use short romanised stems (sienna, byakuroku, artemisia, midori); Japanese characters are not used anywhere in the brand. Hex values were sampled from the scan and lightly corrected for scan darkening.
- No codebase, Figma, logo, fonts, or product screenshots were provided. Components and the UI kit are **original proposals** built on these foundations, not recreations.

## Content fundamentals
- **Voice:** a knowledgeable agronomist who also understands credit. Plain, calm, specific. Never hype, never "revolutionary".
- **Person:** address the farmer as **you**; AGT speaks as **we** ("We compare your report with the satellite pass from 9 October").
- **Casing:** Sentence case everywhere — headings, buttons, tabs. Overlines are the only uppercase (tracked +0.14em).
- **Buttons:** verb first, concrete object: "Submit planting report", "Request disbursal", "Export CSV". Not "OK", "Go", "Learn more".
- **Numbers carry the message.** Always pair a figure with unit and context: "4.2 t/ha · +4.8% vs. 5-yr avg", "$11,000 after report". Units in mono, lowercase (ha, t/ha, seeds/ha).
- **Link data to money.** Every data request explains what it unlocks: "Due in 3 days — unlocks $11,000".
- **Honest status.** Name the condition, not a vague state: "Water stress", "Awaiting data", "4% cloud". Never colour alone.
- **Jargon** (NDVI, LTV, APR) is allowed but defined once via tooltip.
- **No emoji.** No exclamation marks except genuine celebrations (rare).
- **Local names are welcome:** field names, regions, Spanish/Portuguese place names stay as written (Córdoba, El Bajo).
- Examples: "Credit that grows with the crop." · "Matching reports usually verify within a day." · "Funds arrive once the Field 9 report verifies."

## Visual foundations
- **Colour:** four hues from plate 293, each with a 50–900 scale (`tokens/colors.css`).
  - Midori (green) = primary: actions, growth, positive. 
  - Hiwada (raw sienna) = accent: soil, money-moving actions (disbursal, sign), the one highlight per view. Never for errors.
  - Chigusa-nezumi (artemisia) = structure: sidebar (`artemisia-800`), inverse cards (`-900`), info, charts.
  - Byakuroku (turquoise green) = soft: tints, selection, calm callouts.
  - Stone neutrals — cool mineral greys tinted toward artemisia. Page is `stone-50` (#F2F5F5), cards pure white. **No warm cream / beige grounds** — the brand deliberately avoids them.
  - Support hues: ochre (caution), crimson (critical) — kept distinct from sienna.
  - NDVI ramp: sienna → ochre → byakuroku → midori for crop vigor maps.
- **Type:** Shippori Mincho for display numerals and headlines (a high-contrast serif with a print-dictionary feel); Instrument Sans for UI and body; IBM Plex Mono for figures, IDs, units, coordinates. Big KPI numbers are Mincho; table figures are mono.
- **Spacing:** 2/4/8/12/16/20/24/32/40/48/64/96 px. Page margin 40px, gutter 24px, sidebar 240px. Controls 28/36/44px.
- **Backgrounds:** flat colour only. No gradients, no textures, no full-bleed photos in-app. The only "imagery" is satellite tiles and the **plate device** (the four interlocking rectangles) used once per surface — login, cover, empty states.
- **Rules over boxes:** borrowed from the dictionary page — hairline rules (`stone-200`) separate rows; a 1px ink rule closes ledgers. Tables have no zebra striping.
- **Cards:** white (`stone-0`), 1px hairline border, 6px radius, no shadow. Variants: tint (byakuroku), inverse (artemisia-900), raised (shadow-2, floating only).
- **Corner radii:** nearly square — 2/3/4/6px; pill only for badges and switches.
- **Shadows:** minimal. shadow-1 for segmented selected state, shadow-2 for raised/popovers, shadow-3 for dialogs and toasts.
- **Transparency & blur:** only the dialog scrim (`--scrim`, artemisia-tinted 48%). No glass/blur.
- **Hover:** one step darker on filled buttons (500→600); neutrals step to `stone-100`. **Press:** a further step (700); no scale/shrink. **Focus:** 2px white gap + 2px midori-400 ring.
- **Motion:** 120/200/360ms, `cubic-bezier(.2,0,0,1)`, fades and slides only, no bounce. Map layers crossfade.
- **Imagery vibe:** satellite and field photos — natural, slightly desaturated, warm; no filters or duotones.
- **Layout:** fixed left sidebar (dark artemisia), page header with Mincho title + overline, content on a 12-col fluid grid, max 1280.

## Iconography
- **Lucide** (outline, 1.5px stroke, round caps), loaded from CDN (`unpkg.com/lucide@0.469.0`) by the `Icon` component. Substitution: no icon set was supplied — **flagged**.
- Sizes 14/16/18/20/24; colour inherits text. Domain glyphs: sprout, wheat, leaf, tractor, satellite, map, layers, cloud-rain, droplets, landmark, banknote, file-check.
- No emoji, no unicode-as-icon (except arrows in copy like →, and the × in numbers).
- **Logo:** none supplied. The name "AGT" is set in Shippori Mincho 600, tracked +0.06em, wherever a mark would go. Do not invent a mark.

## Index
- `styles.css` — entry; imports `tokens/*.css` (fonts, colors, typography, spacing, effects, base).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (see below), each with `.d.ts` + `.prompt.md` + a card per directory.
- `ui_kits/platform/` — farmer web app click-through.
- `assets/` — source colour plate.
- `SKILL.md` — agent-skill entry.

## Components
- core: **Icon**
- actions: **Button**, **IconButton**
- forms: **Field**, **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- display: **Card**, **Badge**, **Tag**, **Stat**, **Progress**, **Plate**
- navigation: **Tabs**
- feedback: **Dialog**, **Toast**, **Tooltip**

### Intentional additions
- **Icon** — wraps Lucide so every glyph has the brand stroke weight.
- **Field** — shared label/hint/error wrapper for form controls.
- **Stat** — KPI figure; dashboards are built from them.
- **Progress** — repayment, completeness, season progress.
- **Plate** — the No. 293 composition as a reusable brand device.

## Fonts
Google Fonts substitutes (no brand fonts supplied): Shippori Mincho, Instrument Sans, IBM Plex Mono — loaded via `tokens/fonts.css`.
