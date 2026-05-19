# Color Design Tokens

## Philosophy

The palette is nearly monochromatic. Pages are 90% white canvas + ink with a single Rausch moment. Do not use color for decoration — use it to signal action, brand, or status.

---

## Figma Library → Token Mapping

The Figma library (Airbnb UI Kit) uses positional style names. The table below maps them to the semantic tokens used in this system. Use this when inspecting components in the Figma file.

| Figma variable name | Token | Value |
|---|---|---|
| `Shade 01` | `{colors.canvas}` / `{colors.on-primary}` | #ffffff |
| `Shade 02` | `{colors.ink}` | #222222 |
| `Primary 01` | `{colors.primary-dark}` | #f6475f |
| `Primary 02` | `{colors.primary}` | #ff385c |
| `Accent 01` | `{colors.primary-subtle}` | #f6d7df |
| `Accent 02` | `{colors.primary-active}` | #d03660 |
| `Neutral 01` | `{colors.surface-soft}` | #f7f7f7 |
| `Neutral 02` | `{colors.hairline-soft}` | #ebebeb |
| `Neutral 03` | `{colors.hairline}` | #dddddd |
| `Neutral 04` | `{colors.border-medium}` | #d3d3d3 |
| `Neutral 05` | `{colors.border-strong}` | #c2c2c2 |
| `Neutral 06` | `{colors.body-light}` | #b0b0b0 |
| `Neutral 07` | `{colors.muted}` | #717171 |
| `Neutral 08` | `{colors.body}` | #5e5e5e |
| `Discounts` | `{colors.success}` | #008a05 |
| `Gradient 01/02/03` | `{colors.primary-gradient}` | see Gradient section below |

---

## Token Reference

### Brand & Accent

| Token | Value | Usage |
|---|---|---|
| `{colors.primary}` | #ff385c | **Rausch** — The single brand color. Primary CTAs, search orb, heart save state, inline brand links. The most recognizable color in the system. |
| `{colors.primary-dark}` | #f6475f | Darker Rausch variant. Used as the gradient start stop on primary buttons (Figma: `Primary 01`). |
| `{colors.primary-active}` | #d03660 | Press / pointer-down state on primary buttons. Also the gradient mid/end stop (Figma: `Accent 02`). |
| `{colors.primary-subtle}` | #f6d7df | Very light Rausch tint. Use for selected range fills in date pickers, soft highlight surfaces (Figma: `Accent 01`). |
| `{colors.primary-disabled}` | #ffd1da | Disabled primary CTA background. |
| `{colors.primary-error-text}` | #c13515 | Inline form validation error text. **Not** the same as Rausch — slightly darker. |
| `{colors.primary-error-text-hover}` | #b32505 | Error link hover state. |
| `{colors.success}` | #008a05 | Discount and savings labels (Figma: `Discounts`). Never use for decoration. |
| `{colors.luxe}` | #460479 | Sub-brand accent for Airbnb Luxe only. Never use in mainline UI. |
| `{colors.plus}` | #92174d | Sub-brand accent for Airbnb Plus only. Never use in mainline UI. |

### Primary Button Gradient

The primary button uses a radial gradient fill in the Figma library, not a flat Rausch fill. For web implementations, a flat `{colors.primary}` is acceptable. For Figma Make, use the gradient.

```
background: radial-gradient(
  rgba(211, 55, 83, 1) 0%,
  rgba(209, 54, 96, 1) 53%,
  rgba(199, 45, 101, 1) 100%
)
```

The three named gradient styles in the Figma library (`Gradient 01`, `Gradient 02`, `Gradient 03`) are variations of this fill applied to different button states and promotional surfaces.

### Surface

| Token | Value | Usage |
|---|---|---|
| `{colors.canvas}` | #ffffff | Default page floor for every public page. |
| `{colors.surface-soft}` | #f7f7f7 | Disabled fields, sub-nav hover backgrounds, inline filter band (Figma: `Neutral 01`). |
| `{colors.surface-card}` | #ffffff | Card surfaces — same as canvas. |
| `{colors.surface-strong}` | #f2f2f2 | Circular icon-button surfaces (breadcrumb back-arrow, toolbar buttons). |

### Text

| Token | Value | Usage |
|---|---|---|
| `{colors.ink}` | #222222 | **Primary text.** Display headlines, body, nav links, most inline links. Never use pure black (Figma: `Shade 02`). |
| `{colors.body}` | #5e5e5e | Secondary running text in card meta, dates, distances, amenity sub-labels (Figma: `Neutral 08`). |
| `{colors.muted}` | #717171 | Sub-titles, inactive tab labels, footer sub-labels, search bar placeholder text (Figma: `Neutral 07`). |
| `{colors.body-light}` | #b0b0b0 | Decorative separators, disabled icon fills (Figma: `Neutral 06`). |
| `{colors.muted-soft}` | #929292 | Disabled link text only. Use very sparingly. |
| `{colors.on-primary}` | #ffffff | White text on Rausch CTA backgrounds. |
| `{colors.on-dark}` | #ffffff | White text on any dark surface. |
| `{colors.star-rating}` | #222222 | Star icons and rating numbers render in ink, not gold. This is intentional. |
| `{colors.legal-link}` | #428bff | Inline links inside legal copy only (Privacy, Terms). Never use in product UI. |

### Borders & Hairlines

| Token | Value | Usage |
|---|---|---|
| `{colors.hairline}` | #dddddd | Default 1px border — card borders, table separators, footer columns (Figma: `Neutral 03`). |
| `{colors.hairline-soft}` | #ebebeb | Lighter dividers on long-scrolling editorial separators (Figma: `Neutral 02`). |
| `{colors.border-medium}` | #d3d3d3 | Search bar border, callout card border (Figma: `Neutral 04`). |
| `{colors.border-strong}` | #c2c2c2 | Disabled outline buttons, form input outlines after focus (Figma: `Neutral 05`). |

### Overlays

| Token | Value | Usage |
|---|---|---|
| `{colors.scrim}` | #000000 | Modal backdrop base. Apply at 50% opacity at render time — the token stores the hex only. Used on date picker, login dialog, language picker. |

---

## Correct Usage Patterns

```
✅ Primary CTA: background {colors.primary-gradient} (Make) or {colors.primary} (web), text {colors.on-primary}
✅ Dark-fill secondary CTA: background {colors.ink}, text {colors.on-dark}
✅ Outline button: background {colors.canvas}, border {colors.ink}, text {colors.ink}
✅ Body text on white: {colors.ink} or {colors.body}
✅ Placeholder / muted text: {colors.muted}
✅ Disabled text: {colors.muted-soft}
✅ Form error: {colors.primary-error-text}
✅ Legal links only: {colors.legal-link}
✅ Discount / savings labels: {colors.success}

❌ Never use {colors.luxe} or {colors.plus} outside their sub-brand contexts
❌ Never use pure #000000 for text — use {colors.ink}
❌ Never use {colors.primary} for decoration — only for interactive brand moments
❌ Never use {colors.success} for anything other than price savings / discounts
```
