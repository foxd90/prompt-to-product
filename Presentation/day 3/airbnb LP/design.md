# Airbnb Design System — Color Tokens

Source: Airbnb UI Kit (Community), Figma paint styles.

---

## Shades

| Token | Hex | Opacity | Usage |
|-------|-----|---------|-------|
| Shade 01 | `#ffffff` | 100% | White backgrounds, inverse text |
| Shade 02 | `#222222` | 100% | Primary text, dark fills |
| Shade 02 - 5% | `#222222` | 5% | Subtle overlays, hover states |
| Shade 02 - 30% | `#222222` | 30% | Dividers, disabled states |

---

## Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| Neutral 01 | `#f7f7f7` | Page background |
| Neutral 02 | `#ebebeb` | Card background, surface |
| Neutral 03 | `#dddddd` | Borders, separators |
| Neutral 04 | `#d3d3d3` | Input borders |
| Neutral 05 | `#c2c2c2` | Placeholder text |
| Neutral 06 | `#b0b0b0` | Disabled icons |
| Neutral 07 | `#717171` | Secondary text |
| Neutral 08 | `#5e5e5e` | Subdued body text |

---

## Primary (Airbnb Red)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary 01 | `#f6475f` | Hover / pressed state |
| Primary 02 | `#ff385c` | CTA buttons, links, brand accent |

---

## Accents

| Token | Hex | Usage |
|-------|-----|-------|
| Accent 01 | `#f6d7df` | Light pink tint, badges, highlights |
| Accent 02 | `#d03660` | Deep rose, active states |

---

## Semantic / Functional

| Token | Hex | Usage |
|-------|-----|-------|
| Error 01 | `#fef8f6` | Error background / toast surface |
| Error 02 | `#c13515` | Error text, destructive actions |
| Discounts | `#008a05` | Pricing discounts, success states |
| Link | `#004cc4` | Hyperlinks, inline actions |

---

## Gradients

| Token | Type | Usage |
|-------|------|-------|
| Gradient 01 | Radial (3-stop) | Hero backgrounds, brand moments |
| Gradient 02 | Radial (1-stop) | Subtle depth effects |
| Gradient 03 | Radial (2-stop) | Image overlays, fades |

---

## Notes

- Color tokens are implemented as **Figma paint styles**, not variables.
- Naming is flat (no `/` grouping).
- Primary 02 (`#ff385c`) is the canonical Airbnb brand red — use it for all primary CTAs.
- Shade 02 at reduced opacities (`5%`, `30%`) handles overlays rather than separate gray tokens.
