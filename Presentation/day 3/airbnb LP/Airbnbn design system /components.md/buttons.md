# Buttons

## button-primary

The most common CTA. Use for: Reserve, Continue, Search, account-flow primaries.

```
background:  {colors.primary-gradient}   → radial gradient (see colors.md)
textColor:   {colors.on-primary}          → #ffffff
typography:  {typography.button-md}       → 16px / 600
rounded:     {rounded.sm}                 → 8px
padding:     14px 24px
height:      48px
```

**Figma Make:** The library applies a radial gradient fill (crimson to dark rose) rather than flat Rausch. The gradient draws from `{colors.primary-dark}` (#f6475f) through `{colors.primary-active}` (#d03660). Use the gradient style named `Gradient 02` in the Figma file.

**Web:** A flat `{colors.primary}` (#ff385c) background is acceptable where gradient rendering is not supported.

**States:**
- Active/pressed: `{colors.primary-active}` (#d03660). No transform, no shadow change.
- Disabled: background `{colors.primary-disabled}` (#ffd1da), white text, cursor `not-allowed`.

---

## button-secondary

Dark-fill CTA. Use for: the second-most-important action on a screen where the primary CTA is already present (e.g., "Log in" alongside "Sign up"). Renders as an inverse button — ink surface, white text.

```
backgroundColor: {colors.ink}            → #222222
textColor:       {colors.on-dark}         → #ffffff
typography:      {typography.button-md}   → 16px / 600
rounded:         {rounded.sm}             → 8px
padding:         14px 24px
height:          48px
```

**States:**
- Hover: background lightens slightly (use `rgba(34,34,34,0.85)`).
- Disabled: background `{colors.surface-soft}`, text `{colors.muted-soft}`, cursor `not-allowed`.

---

## button-outline

White-surface button with an ink border. Use for: Save, Cancel, secondary actions on white backgrounds where the dark-fill secondary would be too heavy.

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}             → #222222
typography:      {typography.button-md}   → 16px / 600
rounded:         {rounded.sm}             → 8px
padding:         13px 23px               (1px less each side to account for the 1px border)
height:          48px
border:          1px solid {colors.ink}
```

---

## button-tertiary-text

Use for: "Show more" links, modal close labels, secondary navigation actions.

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.button-md}
border:          none
```

Underline on hover. No surface, no border.

---

## button-pill-rausch

Use for: Featured sub-CTAs (e.g., "Become a host"). Not for primary conversion CTAs.

```
backgroundColor: {colors.primary}
textColor:       {colors.on-primary}
typography:      {typography.button-sm}  → 14px / 500
rounded:         {rounded.full}          → 9999px
padding:         10px 20px
```

---

## icon-button-circle

Use for: Wishlist heart, close buttons, breadcrumb back-arrow.

```
backgroundColor: {colors.surface-strong}  → #f2f2f2
textColor:       {colors.ink}
rounded:         {rounded.full}
height:          32px
width:           32px
```

The heart icon variant fills with `{colors.primary}` when in the saved state.

---

## icon-button-outline

Use for: Share button, toolbar icon actions.

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
rounded:         {rounded.full}
height:          40px
border:          1px solid {colors.hairline}
```

---

## Usage Rules

- Do not place two `button-primary` elements side by side — only one primary CTA per view context.
- `button-secondary` (dark-fill) is for high-emphasis secondary actions. Use `button-outline` when a lighter visual weight is needed.
- `button-pill-rausch` is for secondary promotional CTAs only, not for primary conversion flows.
- Minimum height for all tappable buttons: 48px (per touch target requirements in `overview-components.md`).
