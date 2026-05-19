# Typography Design Tokens

## Philosophy

Display weights stay modest — the system trusts photography for visual hierarchy, not typographic weight. The homepage h1 is just 28px/700, which works because the layout leans on photography. The **only** loud typographic moment is the 64px rating display on listing pages.

Use the complete token (family + size + weight + line-height + letter-spacing) — never mix-and-match individual properties from different tokens.

---

## Font Family

### Web / Production
**Primary:** `'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif`

One variable font carries the entire scale — display, body, navigation, and captions. There is no separate display family.

**Substitute:** If Airbnb Cereal VF and Circular are unavailable, use **Inter**. Adjust display headline line-height down ~2% to match Cereal's tighter cap height.

### Figma Make
The Figma library was built with **SF Pro** (`SF Pro: Semibold` at weight 590, `SF Pro: Regular` at weight 400). Figma Make will render SF Pro. This is the royalty-free stand-in for Airbnb Cereal in the design tool context.

| Context | Font | Semibold weight | Regular weight |
|---|---|---|---|
| Figma Make / design tool | `SF Pro` | 590 | 400 |
| Web / production | `Airbnb Cereal VF`, Inter | 600–700 | 400 |

When a token below lists a weight as `600` or `700`, this maps to SF Pro weight `590` inside Figma Make.

---

## Line Heights

The Figma library renders all type at `lineHeight: auto` (effectively 1.0). The line-height values in the token table below are **web rendering targets** and will not match what you see in the Figma file. Do not adjust Figma frames to match — let web CSS apply these values at render time.

---

## Token Reference

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `{typography.rating-display}` | 64px | 700 | 1.1 | -1px | Listing detail rating number ("4.81"). The loudest type in the system. |
| `{typography.display-xl}` | 28px | 700 | 1.43 | 0 | Homepage h1 ("Inspiration for future getaways"). |
| `{typography.display-lg}` | 22px | 600 | 1.18 | -0.44px | Listing detail h1. Quiet — the photo does the work above it. (Figma: `Header/22pt Semibold`) |
| `{typography.display-md}` | 21px | 700 | 1.43 | 0 | Section heads inside listing detail ("What this place offers"). |
| `{typography.display-sm}` | 20px | 600 | 1.20 | -0.18px | Sub-section titles ("Things to know"). |
| `{typography.body-lg-bold}` | 18px | 600 | 1.22 | 0 | Prominent inline callout text, highlighted amenities. (Figma: `Body Copy/18pt Semibold`) |
| `{typography.title-md}` | 16px | 600 | 1.25 | 0 | City link block titles, card primary titles. |
| `{typography.title-sm}` | 16px | 500 | 1.25 | 0 | Footer column heads. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running text in listing copy, amenity rows. (Figma: `Body Copy/16pt Regular`) |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Card meta lines, dates, prices, distance text. (Figma: `Body Copy/14pt Regular`) |
| `{typography.body-sm-bold}` | 14px | 600 | 1.43 | 0 | Card titles inside meta block, inline emphasis. (Figma: `Body Copy/14pt Semibold`) |
| `{typography.caption}` | 12px | 600 | 1.25 | 0 | Search field segment labels ("Where", "Check-in", "Check-out", "Who"). (Figma: `Body Copy/12pt Semibold`) |
| `{typography.caption-body}` | 12px | 400 | 1.25 | 0 | Secondary labels at 12px. (Figma: `Body Copy/12pt Regular`) |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal line ("© 2026 Airbnb, Inc."). |
| `{typography.badge}` | 10px | 600 | 1.18 | 0 | "Guest favorite" floating badge text. (Figma: `Mirco Text/10pt Semibold`) |
| `{typography.micro-label}` | 12px | 700 | 1.33 | 0 | Card amenity micro-labels. |
| `{typography.uppercase-tag}` | 8px | 700 | 1.25 | 0.32px + uppercase | "NEW" badge on product nav tabs. |
| `{typography.button-md}` | 16px | 600 | 1.25 | 0 | Primary and secondary CTA button labels. (Figma: `Body Copy/16pt Semibold`) |
| `{typography.button-sm}` | 14px | 500 | 1.29 | 0 | Pill button labels, category strip labels. |
| `{typography.link}` | 14px | 400 | 1.43 | 0 | Inline body links. |
| `{typography.nav-link}` | 16px | 600 | 1.25 | 0 | Top product-nav labels (Homes, Experiences, Services). |

---

## Figma Style Name → Token Mapping

| Figma style name | Token | Notes |
|---|---|---|
| `Body Copy/10pt Semibold` | `{typography.badge}` | Figma: 10px; token: 10px |
| `Body Copy/12pt Regular` | `{typography.caption-body}` | New token |
| `Body Copy/12pt Semibold` | `{typography.caption}` | Figma: 12px; replaces old 14px value |
| `Body Copy/14pt Regular` | `{typography.body-sm}` | ✓ |
| `Body Copy/14pt Semibold` | `{typography.body-sm-bold}` | New token |
| `Body Copy/16pt Regular` | `{typography.body-md}` | ✓ |
| `Body Copy/16pt Semibold` | `{typography.button-md}` / `{typography.title-md}` | 590 in Make = 600 in CSS |
| `Body Copy/18pt Semibold` | `{typography.body-lg-bold}` | New token |
| `Header/22pt Semibold` | `{typography.display-lg}` | Weight: 590 in Make = 600 in CSS |

---

## Selection Guidelines

```
Page / section titles    → {typography.display-xl} to {typography.display-sm}
Card titles              → {typography.title-md}
Body / listing copy      → {typography.body-md}
Card meta / prices       → {typography.body-sm}
Card title emphasis      → {typography.body-sm-bold}
Search bar labels        → {typography.caption}  (12px Semibold — not 14px)
Button labels            → {typography.button-md} or {typography.button-sm}
Nav items                → {typography.nav-link}
Badges                   → {typography.badge}  (10px — not 11px)
Legal / footer fine text → {typography.caption-sm}
Rating numbers           → {typography.rating-display} — never use outside the listing detail rating context
Callout / highlight body → {typography.body-md} or {typography.body-lg-bold}
```
