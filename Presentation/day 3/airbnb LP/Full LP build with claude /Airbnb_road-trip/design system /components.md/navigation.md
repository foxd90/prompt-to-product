# Navigation Components

## top-nav

The global site header. Always white, always 80px tall.

```
backgroundColor: {colors.canvas}        → #ffffff
textColor:       {colors.ink}
typography:      {typography.nav-link}   → 16px / 600
height:          80px
borderBottom:    1px solid {colors.hairline}
```

**Layout (3-column):**
- **Left:** Airbnb wordmark
- **Center:** Three product tabs (`product-tab-active` / `product-tab-inactive`)
- **Right:** "Become a host" link, globe icon (language), account menu circle

**Responsive:** Below 744px, collapses to logo + hamburger. Product tabs move into a bottom sheet.

---

## product-tab-active

The selected product tab (Homes, Experiences, or Services).

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.nav-link}   → 16px / 600
rounded:         {rounded.none}          → 0px
```

Visually: 32px hand-illustrated icon above the label, with a **2px ink underline rule** beneath the icon-label pair. No background fill.

---

## product-tab-inactive

```
backgroundColor: transparent
textColor:       {colors.muted}          → #6a6a6a
typography:      {typography.nav-link}
```

Same icon + label layout as active, but muted text and no underline. Becomes active on click.

---

## new-tag

A small pill badge anchored top-right of a product nav icon. Used on Experiences and Services to signal recency.

```
backgroundColor: {colors.canvas}
textColor:       {colors.ink}
typography:      {typography.uppercase-tag}  → 8px / 700 / uppercase / 0.32px tracking
rounded:         {rounded.full}
padding:         2px 6px
```

---

## category-strip

A horizontally scrolling strip of category filter tabs below the search bar on search results pages.

```
backgroundColor: {colors.canvas}
textColor:       {colors.muted}
typography:      {typography.button-sm}  → 14px / 500
```

**Active tab:**
```
textColor:   {colors.ink}
typography:  {typography.button-sm}
rounded:     {rounded.none}
indicator:   2px ink underline (same pattern as product-tab-active)
```

---

## Usage Rules

- The top-nav center section must always contain exactly three product tabs.
- Do not apply background color to `product-tab-active` or `category-tab-active` — the underline rule is the sole active indicator.
- `new-tag` must only appear on product tabs for genuinely new products, not as a general notification badge.
