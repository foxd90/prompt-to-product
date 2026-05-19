# Airbnb Design System

This project uses the Airbnb UI Kit package. Read ALL files below before writing any code.

---

## MUST READ IN FULL

- [Component catalog](./overview-components.md) — every available component
- [Color tokens](./colors.md) — token names, values, and Figma variable mapping
- [Typography](./typography.md) — font family (web vs. Figma Make), full scale
- [Spacing & Radii](./spacing-radii.md) — spacing, border radii, elevation tiers

---

## Before Building UI

Before writing a custom button, input, card, or any component, check the catalog in `overview-components.md`. Only hand-roll a custom replacement when the kit component genuinely cannot meet the requirement — leave a code comment explaining why.

---

## Before Applying Styles

Never hardcode a color, spacing, radius, or font-size value. Always check `colors.md` first for the correct token. Use `var(--token-name)` rather than raw hex or px values. Hardcoded values break theming.

---

## Step-by-Step Reading Order

**Step 1:** Read `overview-components.md` — understand what's available  
**Step 2:** Read all token files (`colors.md`, `typography.md`, `spacing-radii.md`)  
**Step 3:** Before using any component, read its file:

| Component | File |
|---|---|
| Buttons | `buttons.md` |
| Navigation, tabs | `navigation.md` |
| Search bar | `search.md` |
| Cards, listing detail, callouts | `cards.md` |
| Inputs, textarea, toggle, date picker | `forms.md` |
| Footer | `footer.md` |

---

## Design Principles

- Single accent: Rausch `#ff385c` — CTAs and brand moments only
- No hard corners on interactive elements (minimum `{rounded.xs}` = 4px)
- Two shadow tiers only (`{elevation.float}` and `{elevation.card}`) — see `spacing-radii.md`
- Never use pure `#000000` — use `{colors.ink}` (#222222)
- Never use pure `#000000` for body text — use `{colors.body}` (#5e5e5e) for secondary copy

---

## Figma Make Notes

- The Figma library uses **SF Pro** as its display font (weight 590 = Semibold, 400 = Regular). Web implementations should use Airbnb Cereal VF or Inter.
- The primary button renders as a **radial gradient** in Figma, not a flat color. See `buttons.md` and `colors.md` for the gradient definition.
- The "Secondary Buttons" component in the Figma library is a **dark-fill** (`{colors.ink}` background, white text) — it is documented here as `button-secondary`. The outlined white variant is `button-outline`.
- The search bar in the Figma library has **4 segments** (Where / Check-in / Check-out / Who). Segment labels are 12px Semibold, not 14px.
- Token values in `colors.md` and `typography.md` reflect the Figma library exactly. Use the "Figma variable name → Token" mapping tables in those files when inspecting components in Figma.
