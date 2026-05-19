# Spacing, Radii & Elevation Tokens

---

## Spacing

**Base unit:** 4px (with a 2px micro-step for tight contexts).

| Token | Value | Usage |
|---|---|---|
| `{spacing.xxs}` | 2px | Micro gaps, icon padding adjustments. |
| `{spacing.xs}` | 4px | Dense category-strip dividers. |
| `{spacing.sm}` | 8px | Caption / date-row gutters inside cards. |
| `{spacing.md}` | 12px | Component-level internal padding (e.g., search segment padding). |
| `{spacing.base}` | 16px | Between cards in homepage grids; card meta block internal padding. |
| `{spacing.lg}` | 24px | Inside footer column gutters; host-card and reservation-card padding. |
| `{spacing.xl}` | 32px | Large UI structural gaps. |
| `{spacing.xxl}` | 48px | Footer vertical padding (top/bottom). |
| `{spacing.section}` | 64px | Major page band vertical padding. Tighter than typical SaaS (80–96px) — marketplace pages need card density. |

### Philosophy
Editorial bands get 64px of breathing room, but card grids sit just 16px apart. The contrast is intentional: "open hero, dense marketplace below."

---

## Border Radius (Rounded)

**Rule: There are no hard corners on interactive elements.** The only hard corners are body grid lines.

| Token | Value | Usage |
|---|---|---|
| `{rounded.none}` | 0px | Body grid only. Never on interactive elements. |
| `{rounded.xs}` | 4px | Micro UI elements; superhost badge on card photos. |
| `{rounded.sm}` | 8px | **Buttons** (primary, secondary, outline). Default interactive element radius. |
| `{rounded.callout}` | 12px | **Callout / highlight cards** (property highlight, rare-find notices). |
| `{rounded.md}` | 14px | **Cards** (property, experience, host, reservation). Feels friendly and human. |
| `{rounded.lg}` | 20px | Larger containers, promotional surfaces. |
| `{rounded.xl}` | 32px | Category strip active indicator, large pill CTAs. |
| `{rounded.full}` | 9999px | **Search bar, search orb, icon buttons, date-picker day cells, badges.** Use whenever the element should read as a "pill" or "circle." |

---

## Elevation

The system uses **two shadow tiers**. A surface has either `{elevation.float}`, `{elevation.card}`, or no shadow — never create additional tiers.

### Tier 1 — Float (Figma: `Elevation 02`)

Used for surfaces that hover just above the page: search bar at rest, dropdown menus, language picker, date picker.

```css
box-shadow: rgba(0, 0, 0, 0.19) 0px 1px 5px 0px;
```

Figma variable: `Elevation 02` — `DROP_SHADOW, #00000030, offset (0, 1), radius 5`

### Tier 2 — Card (Figma: `Elevation 03`)

Used for elevated card surfaces: property cards on pointer hover, guest favorite badge, reservation card in listing detail right rail.

```css
box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
```

Figma variable: `Elevation 03` — `DROP_SHADOW, #0000001F, offset (0, 6), radius 16`

### Where Each Tier Is Applied

| Surface | Tier |
|---|---|
| Search bar at rest | `{elevation.float}` |
| Dropdown menus (account menu, language picker, date picker) | `{elevation.float}` |
| Property cards — pointer hover only (not at rest) | `{elevation.card}` |
| Guest favorite badge floating over card photo | `{elevation.card}` |
| Reservation card in listing detail right rail | `{elevation.card}` |

### Where There Is No Shadow (Flat)
Everything else: page body, hero, footer, editorial bands, buttons, nav bar at rest. 95% of surfaces are flat.

### Modal Scrim
Use `{colors.scrim}` at **50% opacity** for modal backdrops. The token stores the base hex; apply opacity at render time.
