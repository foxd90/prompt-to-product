# Card Components

## property-card

The core marketplace card. Photo-first — the image is the dominant element.

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
rounded:         {rounded.md}            → 14px (applied to image + card)
```

**Structure (top to bottom):**
1. **Photo plate** — 1:1 aspect ratio, `{rounded.md}` corner clipping, image carousel dots overlay
2. **superhost-badge** — floating top-left over photo (see `superhost-badge` below)
3. **icon-button-circle** — heart icon, top-right over photo (Rausch fill `{colors.primary}` when saved)
4. **Meta block** — below image:
   - Title: `{typography.body-sm-bold}` (14px / 600) `{colors.ink}`
   - Room type / dates: `{typography.body-sm}` (14px / 400) `{colors.body}` (#5e5e5e)
   - Price: `{typography.body-sm}` ink, right-aligned, format: "$X night"
   - Star rating: `{typography.body-sm}` in `{colors.ink}` (ink, not gold — intentional)

Apply `{elevation.card}` on hover (not at rest). See `spacing-radii.md`.

**Grid spacing:** 16px (`{spacing.base}`) between cards.

---

## superhost-badge

Small rectangular badge that overlays the top-left of a property card photo. Indicates the host is a Superhost.

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}             → #222222
typography:      {typography.body-sm-bold} → 14px / 600
rounded:         {rounded.xs}             → 4px   ← not a pill
padding:         4px 8px
```

This is a distinct component from `guest-favorite-badge`. It uses a near-square corner radius (4px), not a pill shape.

---

## guest-favorite-badge

White floating pill badge that overlays the top-left of a property card photo. Signals high guest satisfaction (distinct from Superhost status).

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}
typography:      {typography.badge}       → 10px / 600
rounded:         {rounded.full}
padding:         4px 10px
shadow:          Apply {elevation.card} (it floats above the photo)
```

---

## property-card-photo

The photo plate only, without the meta block. Used in wishlists and some search result layouts.

```
rounded:     {rounded.md}   → 14px
aspectRatio: 1 / 1
```

---

## experience-card

Similar to property-card but taller aspect ratio.

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
typography:      {typography.title-md}   → 16px / 600
rounded:         {rounded.md}
aspectRatio:     4 / 5
```

Structure: Same photo + heart pattern as `property-card`, with a `new-tag` badge top-left and a single-line title beneath the image.

---

## callout-highlight

An inline card that surfaces a notable property fact or host distinction (e.g., "This is a rare find."). Used on listing detail pages.

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}
typography:      {typography.body-md}    → 16px / 400, with bold span for the lead sentence
rounded:         {rounded.callout}        → 12px
padding:         {spacing.lg}            → 24px
border:          1px solid {colors.hairline}  → #dddddd
gap:             {spacing.sm}            → 8px (between text and icon)
```

**Structure:** Text block (left) + 32×32px callout icon (right). The lead sentence uses `{typography.body-md}` Semibold; the body copy uses `{typography.body-md}` Regular. Both in `{colors.ink}`.

**Figma:** Component named "Callouts" / variant "Property Highlight" in the library.

---

## rating-display-card

The signature listing-detail element. The only place in the system where type carries hierarchy alone.

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.rating-display}  → 64px / 700 / -1px tracking
```

**Structure:**
- Large rating number ("4.81") flanked by SVG laurel-wreath ornaments
- "Guest favorite" tagline beneath
- Row of ink stat columns (total reviews, location rating, cleanliness, etc.)

Do not use `{typography.rating-display}` outside this component.

---

## amenity-row

A single row in the "What this place offers" list on listing detail pages.

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.body-md}    → 16px / 400
padding:         12px 0
```

Layout: Icon left, label right, no border between rows. A 1px `{colors.hairline}` divider closes the section above and below the entire list, not between rows.

---

## reviews-card

A 2-column grid of review excerpts.

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.body-sm}
```

Each column: author row (avatar, name, date) above a 3-line excerpt. Include a "Show more" `button-tertiary-text` link beneath the excerpt.

---

## host-card

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
typography:      {typography.body-sm}
rounded:         {rounded.md}
padding:         {spacing.lg}  → 24px
border:          1px solid {colors.hairline}
```

Contents: Host avatar, name, "Superhost" badge, response-rate stat, "Contact host" `button-outline`.

---

## reservation-card

The sticky right-rail card on listing detail pages. The conversion anchor for the entire listing.

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
typography:      {typography.body-md}
rounded:         {rounded.md}
padding:         {spacing.lg}  → 24px
border:          1px solid {colors.hairline}
shadow:          Apply {elevation.card}
```

Contents (top to bottom):
1. Nightly price — `{typography.display-md}` (21px / 700) ink
2. Date-range selector (uses `date-picker-day`)
3. Guest-count stepper
4. "Reserve" — full-width `button-primary`
5. Fee breakdown stack — `{typography.body-sm}` ink

**Responsive:** Switches from sticky right-rail to a **sticky bottom bar** on mobile (< 744px). Bottom bar shows only the price summary + "Reserve" CTA.

---

## city-link-block

A homepage grid cell linking to a destination category.

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.title-sm}   → 16px / 500 (city name)
```

Sub-label (e.g., "Cottage rentals") uses `{typography.body-sm}` in `{colors.muted}`.
