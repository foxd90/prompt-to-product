# Form Components

## text-input

Standard text form field used in account flows and booking forms.

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}
typography:      {typography.body-md}    → 16px / 400
rounded:         {rounded.sm}            → 8px
padding:         14px 12px
height:          56px
border:          1px solid {colors.hairline}
```

**Structure:**
- Stacked label above the input field: `{typography.caption}` in `{colors.muted}`
- Placeholder text: `{typography.body-md}` in `{colors.muted}`

**Focus state:**
- Border thickens to 2px
- Border color switches to `{colors.ink}` (#222222)
- No glow, no box-shadow ring — clean, firm ink outline only

**Error state:**
- Error text below field: `{colors.primary-error-text}` (#c13515), `{typography.body-sm}`
- Border color: `{colors.primary-error-text}`

**Disabled state:**
- Background: `{colors.surface-soft}` (#f7f7f7)
- Text and border: `{colors.muted-soft}`

---

## textarea

Multi-line text input. Same visual language as `text-input` but taller and vertically resizable.

```
backgroundColor: {colors.canvas}         → #ffffff
textColor:       {colors.ink}
typography:      {typography.body-md}    → 16px / 400
rounded:         {rounded.sm}            → 8px
padding:         14px 12px
minHeight:       120px
border:          1px solid {colors.hairline}
resize:          vertical
```

**Structure:**
- Stacked label above: `{typography.caption}` in `{colors.muted}`
- Placeholder: `{typography.body-md}` in `{colors.muted}`

**States:** Identical to `text-input` (focus: 2px ink border; error: error-text color; disabled: surface-soft background).

**Figma:** Component named "Textarea" in the library cover page.

---

## toggle

Binary on/off control. Used for filter preferences, notification settings, and accessibility options.

```
trackColor (off): {colors.border-strong}   → #c2c2c2
trackColor (on):  {colors.ink}             → #222222
thumbColor:       {colors.canvas}          → #ffffff
height:           ~28px
width:            ~50px
rounded:          {rounded.full}
```

The thumb is a white circle that slides inside the track. No label is baked into the component — always pair with an external `{typography.body-md}` label.

**States:**
- Off: grey track, thumb left
- On: ink track, thumb right
- Disabled: `{colors.surface-soft}` track, `{colors.muted-soft}` thumb

**Figma:** Component named "Toggle" in the library cover page (6 variants visible).

---

## date-picker-day

A single day cell in the calendar date picker.

```
backgroundColor: transparent          (default)
textColor:       {colors.ink}
typography:      {typography.body-sm}  → 14px / 400
rounded:         {rounded.full}        → circle
height:          40px
width:           40px
```

**States:**

| State | Background | Text |
|---|---|---|
| Default | transparent | `{colors.ink}` |
| Hover | `{colors.surface-soft}` | `{colors.ink}` |
| Selected (start/end) | `{colors.ink}` (#222222) | `{colors.on-dark}` (#ffffff) |
| In-range | `{colors.primary-subtle}` (#f6d7df) lozenge connecting start/end | `{colors.ink}` |
| Disabled (past dates) | transparent | `{colors.muted-soft}` |

The in-range lozenge is a rectangular fill (`{colors.primary-subtle}`) that spans the horizontal space between the start and end circle cells — it breaks the circular shape intentionally to show the selected range.

---

## Usage Rules

- Always show a stacked label above `text-input` and `textarea` — do not use placeholder text as a substitute for a label (accessibility).
- Date picker min touch target is 40×40px per cell — do not reduce below this.
- Never use `{colors.primary}` (Rausch) for the selected date state — the system deliberately uses ink (#222222) to keep color usage focused on CTAs.
- The in-range fill uses `{colors.primary-subtle}` (#f6d7df), not `{colors.surface-soft}` — this makes the selected range distinguishable from hover states.
