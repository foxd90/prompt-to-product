# Search Components

## search-bar-pill

The signature global search bar. The most visually distinctive element in the Airbnb system.

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}
typography:      {typography.body-sm}     → 14px / 400
rounded:         {rounded.full}           → 9999px
padding:         14px 6px                (outer: tight horizontal to accommodate orb)
height:          64px
border:          1px solid {colors.border-medium}  → #d3d3d3, with single shadow tier
```

**Internal structure:** Divided by 1px vertical `{colors.border-medium}` rules into four `search-field-segment` cells:

| Segment | Label | Placeholder |
|---|---|---|
| 1 | "Where" | "Search destinations" |
| 2 | "Check-in" | "Add dates" |
| 3 | "Check-out" | "Add dates" |
| 4 | "Who" | "Add guests" |

Each segment label sits above the placeholder line. Labels use `{typography.caption}` (12px / 600 Semibold). Placeholders use `{typography.body-sm}` (14px / 400) in `{colors.muted}` (#717171).

The search bar terminates on the right with the `search-orb`.

**Responsive:** On mobile (< 744px), collapses to a single tappable pill that opens a full-screen search overlay. Do not show the 4-segment layout on mobile.

---

## search-field-segment

Individual segment inside the search bar.

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
labelTypography: {typography.caption}   → 12px / 600 Semibold
padding:         14px 24px
gap:             4px (between label and placeholder)
```

Placeholder text: `{typography.body-sm}` (14px / 400) in `{colors.muted}`.

---

## search-orb

The circular Rausch button at the right end of the search bar. The single hottest color moment on the homepage.

```
backgroundColor: {colors.primary}        → #ff385c
textColor:       {colors.on-primary}     → #ffffff (for magnifying-glass icon)
rounded:         {rounded.full}           → 9999px
height:          48px
width:           48px
```

Always contains a white magnifying-glass icon centered inside. Never use text inside the orb.

---

## Usage Rules

- The search bar must always include all four segments at desktop width — do not omit any segment.
- Do not collapse Check-in and Check-out into a single "When" field at desktop or tablet widths.
- Do not use the `search-orb` outside of the search bar context.
- The search bar sits at the bottom of the `top-nav` on the homepage and at the top of the search results page.
- Apply the single shadow tier (`{elevation.float}`) to the search bar at rest — see `spacing-radii.md`.
- Segment label font is 12px Semibold (`{typography.caption}`), not 14px.
