# Alpine Signature Living — Design System

Consulting, planning & coordination for residential property projects in Switzerland.
Founder & single point of contact: **Corinne Dulles**.

> *From concept to completion.*

This design system encodes the Alpine Signature Living brand — a refined, calm, precise and discreetly Swiss identity — into tokens, components, foundation cards and a marketing UI kit that agents and designers can build from.

---

## Sources

- `uploads/Alpine Signature Living - Brand Guidelines.md` — the supplied brand guidelines (essence, logo, palette, type, voice). This is the single source of truth for everything here.
- No codebase, Figma file, or slide deck was provided. There is therefore no live product to recreate; the marketing UI kit below is an original construction that strictly applies the documented brand, not a copy of an existing site.

**Contact on file:** corinne@alpinesignature.ch · +41 78 865 30 37 · Impasse de la Chapelle 37, 1918 La Tzoumaz, Switzerland.

---

## Brand essence

| | |
|---|---|
| Name | Alpine Signature Living |
| Descriptor | Consulting · Planning · Coordination |
| Category line | Residential Property Projects · Switzerland |
| Primary slogan | *From concept to completion.* |
| Personality | Refined, calm, precise, discreet, Swiss, trustworthy |

**Slogan alternates:** Your single point of coordination · Swiss property, perfectly coordinated · Where every detail finds its place · The signature of considered living.

---

## Content fundamentals

How copy is written for this brand:

- **Tone:** measured, warm, and exact. "Swiss precision without coldness." Short, confident sentences. No hype, no exclamation marks, no jargon.
- **Person:** lead with the client's *project*, not the company. Speak as a single, accountable person (Corinne is the point of contact) — language is personal and reassuring, never corporate "we crush it" energy. "Your project, held in one place."
- **Casing:** sentence case for all body copy and headlines-as-sentences. Labels, descriptors and the wordmark are **UPPERCASE** with wide letter-spacing. Headlines set in Cormorant may read as a phrase ("From concept to completion").
- **Emoji:** never. Not part of the brand.
- **Punctuation:** the middot ` · ` separates descriptor items (Consulting · Planning · Coordination). Em dashes for asides. Italics (Cormorant) carry the slogan and gentle emphasis.
- **Numbers/stats:** avoid stat-slop. This is a discreet consultancy, not a SaaS dashboard — don't manufacture metrics. Phase numbering ("Phase 01") is acceptable where it aids coordination.

**Examples**

- Headline: *From concept to completion.*
- Lead: "A single, accountable point of coordination for your project."
- Body: "From first concept through planning, trades and final handover, every detail is held in one place."
- CTA: "Arrange a consultation" · "View services" (uppercase, tracked).

---

## Visual foundations

- **Colours.** Ink is **Alpine Green `#1E2A23`**; accent is **Signature Gold `#B89160`**; secondary text **Slate Sage `#6F7D74`**; surfaces **Stone `#F4F1EC`** (warm off-white) and **Paper `#FFFFFF`**. Usage ratio ≈ **70% Stone/Paper · 22% Alpine Green · 8% Gold**. Gold is a *jewel accent* — rings, rules, small marks; **never a large fill, never on a button**. Optional accent variants (pick one, stay consistent): Copper `#B07A52`, Sage `#6F8A6E`, Slate `#5F7384`.
- **Type.** Display/headlines/slogan in **Cormorant Garamond** (500; *italic* for the slogan and emphasis). Body/labels/UI in **Jost** (300–500). Labels are uppercase with `0.22–0.34em` tracking; body is sentence case with generous `1.6–1.9` line-height. See `tokens/typography.css`.
- **Backgrounds.** Calm and flat — warm Stone, white Paper, or solid Alpine Green panels. **No gradients** (explicitly forbidden on the mark, and avoided generally), no busy textures. Photography, where used, should be warm-toned, natural-light Alpine/architectural imagery — never cold or oversaturated; a quiet, editorial feel. (No photography ships with this system; use placeholders and request real imagery.)
- **The gold rule** is the signature graphic device: a short (~28–64px) thin gold line under an eyebrow label or between a headline and body. Used sparingly.
- **Borders.** Hairline `1px` in warm Stone tints (`--border-hairline #E7E2D8`). On dark, dividers are translucent gold at ~35%.
- **Corners.** Square-ish — `0–6px`. The brand reads printed/engraved, not bubbly. Pills only for small badges.
- **Shadows.** Whisper-soft, warm, low (`--shadow-sm`, `--shadow-card`, `--shadow-raised`). Never heavy or coloured. Cards = Paper + hairline border + soft shadow, optionally a short gold top rule for "signature" cards.
- **Motion.** Measured, no bounce. Standard ease `cubic-bezier(0.22,0.61,0.36,1)`, durations 160/260/480ms. Fades and gentle 2–3px lifts; never springy or playful.
- **Hover states.** Primary button darkens (Green → Green 700); secondary shows a faint gold wash; ghost reveals a gold underline; cards lift ~3px and deepen shadow.
- **Press states.** A 0.5px downward nudge — subtle, not a big shrink.
- **Transparency / blur.** Sparingly. Faint gold washes (`rgba(184,145,96,0.07–0.08)`) on secondary surfaces; translucent dividers on dark. No glassmorphism.
- **Layout.** Generous editorial whitespace, `--section-y: 96px` rhythm, `--container-max: 1200px`, narrow measure `760px` for prose. Centred, calm compositions.

---

## Iconography

- **No icon set was supplied** with the brand. The aesthetic calls for **fine-line, thin-stroke** icons that echo the logo's hairline ridge — so the recommended set is **Lucide** (≈1.5–2px stroke, rounded line caps), linked from CDN. *This is a substitution and is flagged for your confirmation* (see Caveats). If you prefer Phosphor (Light/Thin) or Feather, swap consistently and keep stroke weight ~1.5px.
- Usage: keep icons sparse and small, Alpine Green or Slate Sage stroke, never gold-filled. Pair with uppercase labels. Match the logo's calm precision — no duotone, no filled/solid icons, no playful rounded blobs.
- **Emoji / unicode glyphs as icons:** never. The middot ` · ` and em dash are the only "glyphs" used decoratively (as separators), not as icons.
- The brand mark, reversed mark and monogram live in `assets/` as SVG and are also available as the `Logo` component (rendered inline so colour follows `tone`).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import list only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper for downloadable use.

**`tokens/`** — `fonts.css` (Google Fonts: Cormorant Garamond + Jost), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, borders, shadows, motion).

**`assets/`** — `logo-mark.svg`, `logo-mark-reversed.svg`, `monogram.svg`.

**`components/`**
- `brand/` — `Logo` (mark / stacked / horizontal / monogram), `SectionLabel` (gold-rule eyebrow), `GoldRule`.
- `core/` — `Button` (primary / secondary / ghost), `Card`, `Badge`, `Input`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/`**
- `website/` — marketing site recreation (`index.html` + screen JSX): hero, services, founder/about, contact.

**Namespace:** components are exposed as `window.AlpineSignatureLivingDesignSystem_90a666.<Name>` in card/kit HTML.
