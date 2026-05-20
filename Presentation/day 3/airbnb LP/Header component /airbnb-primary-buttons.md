# Component: Primary Buttons

**Node:** `238:2153` — Airbnb UI Kit (testing)

---

## Props / Variants

| Prop | Values | Default |
|------|--------|---------|
| `size` | `Full Width`, `Small` | `Full Width` |
| `state` | `Default`, `Hover`, `Pressed`, `Focus`, `Disabled`, `Loading` | `Default` |
| `icon` | `Off` | `Off` |

---

## States

**Default**
- Radial gradient background: `#D33753` → `#D13660` → `#C72D65` (left-to-right warm pink/rose)
- White label text (`Shade 01`)

**Hover**
- Same radial gradient, reversed direction (gradient sweeps from right/top corner)

**Pressed**
- Linear gradient overlay `rgb(235, 76, 96)` composited on top of the hover-direction radial gradient
- Slightly reduced width on Full Width variant (488px vs 520px — implies inset/shrink effect)

**Focus**
- Outer wrapper: `#222222` (`Shade 02`) background, `4px` padding, `border-radius: 12px`
- Inner button: retains Default gradient fill with a `2px` solid border in `#D3D3D3` (`Neutral 04`), `border-radius: 8px`

**Disabled**
- Flat `#DDDDDD` (`Neutral 03`) fill — no gradient
- Label still renders in white (visually low contrast — no separate disabled text token documented)

**Loading**
- Label text hidden; replaced with an animated ellipsis asset (`ellipses` layer)
- Same disabled (`Neutral 03`) background fill

---

## Size Specifications

| Property | Full Width | Small |
|----------|------------|-------|
| Width | `520px` (pressed: `488px`) | Auto (content-driven) |
| Padding (Y) | `14px` | `16px` |
| Padding (X) | — | `24px` |
| Border radius | `8px` | `8px` |
| Label size | 16pt | 13pt |
| Label font style | `Body Copy/16pt Semibold` | `Body Copy/13pt Semibold` |

---

## Usage Notes

- The `icon` prop is defined but only `"Off"` is present in this node — icon-on variants may exist elsewhere in the file or are not yet built.
- Focus state adds a visible outer dark ring; this appears to be a keyboard/accessibility affordance.
- Pressed state on Full Width narrows by 32px, suggesting a shrink/inset animation is expected in implementation.
- Disabled and Loading share the same background token (`Neutral 03`); they are visually identical except for the label vs. ellipsis content.

---

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `Shade 01` | `#FFFFFF` | Label text (all active states) |
| `Shade 02` | `#222222` | Focus outer wrapper background |
| `Neutral 02` | `#EBEBEB` | (defined in scope, not directly applied here) |
| `Neutral 03` | `#DDDDDD` | Disabled & Loading background |
| `Neutral 04` | `#D3D3D3` | Focus inner border |
| `Gradient 01` | Radial pink/rose (Default direction) | Default & Focus fill |
| `Gradient 02` | Radial pink/rose (Hover/Pressed direction) | Hover & Pressed fill |
| `Gradient 03` | Radial pink/rose variant | Small Default fill |

### Typography

| Token | Spec |
|-------|------|
| `Body Copy/16pt Semibold` | SF Pro, Semibold, 16px, weight 590, lineHeight 100, letterSpacing 0 |
| `Body Copy/13pt Semibold` | SF Pro, Semibold, 13px, weight 590, lineHeight 100, letterSpacing 0 |
