# Component Overview

Read the specific component file in `components/` BEFORE using any component.

---

## Available Components

| Component | Guidelines File | Description |
|---|---|---|
| button-primary | `components/buttons.md` | Rausch gradient fill CTA — Reserve, Continue, Search |
| button-secondary | `components/buttons.md` | Dark ink fill CTA — high-emphasis secondary action |
| button-outline | `components/buttons.md` | White fill, ink border — Save, Cancel, lighter secondary |
| button-tertiary-text | `components/buttons.md` | Plain ink text, no surface |
| button-pill-rausch | `components/buttons.md` | Pill-shaped Rausch CTA |
| search-bar-pill | `components/search.md` | Signature global search bar (4 segments) |
| search-orb | `components/search.md` | Circular Rausch search button |
| top-nav | `components/navigation.md` | 80px white nav bar |
| product-tab-active | `components/navigation.md` | Active Homes/Experiences/Services tab |
| product-tab-inactive | `components/navigation.md` | Inactive tab |
| category-strip | `components/navigation.md` | Horizontal scrolling category filter |
| new-tag | `components/navigation.md` | "NEW" pill badge on nav icons |
| property-card | `components/cards.md` | Photo-first listing card |
| superhost-badge | `components/cards.md` | 4px-radius "Superhost" overlay badge on card photos |
| guest-favorite-badge | `components/cards.md` | Floating white pill badge — "Guest favourite" |
| experience-card | `components/cards.md` | 4:5 experience listing card |
| callout-highlight | `components/cards.md` | Inline property highlight callout (12px radius) |
| rating-display-card | `components/cards.md` | 64px rating number ("4.81") |
| amenity-row | `components/cards.md` | Icon + label row in listing detail |
| reviews-card | `components/cards.md` | 2-column review excerpt grid |
| host-card | `components/cards.md` | Host info card |
| reservation-card | `components/cards.md` | Sticky right-rail booking card |
| text-input | `components/forms.md` | Standard form text input |
| textarea | `components/forms.md` | Multi-line text input |
| toggle | `components/forms.md` | Binary on/off switch control |
| date-picker-day | `components/forms.md` | Day cell in date picker |
| map-chip | *(see note below)* | Pill chips overlaid on the map view for price / category |
| footer-light | `components/footer.md` | 3-column white footer |
| legal-band | `components/footer.md` | Copyright and legal strip |

### map-chip (stub)

Map chips appear on the map search view as tappable price or category pills. Observed in the Figma library cover ("Map Chips" section, 6 variants). Full spec pending — use the following baseline until a dedicated file is added:

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
typography:      {typography.button-sm}  → 14px / 500
rounded:         {rounded.full}
padding:         8px 12px
border:          1px solid {colors.hairline}
shadow:          {elevation.float}       (chips float above the map)
```

Active/selected chip: background `{colors.ink}`, text `{colors.on-dark}`.

---

## Responsive Behavior

| Breakpoint | Width | Key Behavior |
|---|---|---|
| Mobile | < 744px | Nav collapses to logo + hamburger; product tabs behind sheet; search bar collapses to a single tappable pill; property cards 1-up; city grid 1-column; reservation card becomes a sticky bottom bar. |
| Tablet | 744–1128px | Product tabs visible; search bar narrows; property cards 2-up; city grid 2–3 column; reservation card stays in right rail at narrower width. |
| Desktop | 1128–1440px | Full nav with three tabs centered; search bar at full width with all 4 segments; property cards 4-up; city grid 6-column; listing detail 2-column. |
| Wide | > 1440px | Content caps at 1440px on listing/search pages, ~1280px editorial. Gutters absorb the rest. |

### Grid Behavior
- Grids always **reduce column count** at breakpoints — never reflow rows.
- Property card count: Wide/Desktop 4-up → Tablet 2-up → Mobile 1-up.
- City link grid: Desktop 6-column → Tablet 2–3 column → Mobile 1-column.

### Minimum Touch Targets
- Primary CTAs: 48×48px minimum (WCAG AAA)
- Search orb: 48×48px circular
- Heart save button: 32×32px (compensated by 12px padding inside the photo card)
- Date-picker day cells: 40×40px circular
- Toggle: 28×50px track; thumb moves within track bounds
