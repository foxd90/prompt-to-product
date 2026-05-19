# Footer Components

## footer-light

The site-wide footer. Uses the same white canvas as the page — no contrast footer in the Airbnb system.

```
backgroundColor: {colors.canvas}        → #ffffff  (matches page — no visual separation)
textColor:       {colors.ink}
typography:      {typography.body-sm}    → 14px / 400
padding:         48px 80px              (top/bottom × left/right)
```

**Structure (3-column at desktop):**

| Column | Head token | Link token |
|---|---|---|
| Support | `{typography.title-sm}` ink | `{typography.body-sm}` ink |
| Hosting | `{typography.title-sm}` ink | `{typography.body-sm}` ink |
| Airbnb | `{typography.title-sm}` ink | `{typography.body-sm}` ink |

Column gutters: 24px (`{spacing.lg}`).

Column heads are `{typography.title-sm}` (16px / 500). Link rows are `{typography.body-sm}` (14px / 400), ink color. No underline at rest; underline on hover.

**Responsive:** Collapses to 1-column on mobile. Each column becomes an accordion-style expandable section.

---

## footer-link

Individual footer link row.

```
backgroundColor: transparent
textColor:       {colors.ink}
typography:      {typography.body-sm}   → 14px / 400
```

No underline at rest. Underline on hover. Padding between rows: `{spacing.xs}` (4px).

---

## legal-band

The sub-footer strip beneath the footer columns.

```
backgroundColor: {colors.canvas}
textColor:       {colors.muted}         → #6a6a6a
typography:      {typography.caption-sm} → 13px / 400
```

**Contents (left to right):**
1. Copyright line: "© 2026 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details"
2. Language picker: globe icon + "English (US)" link
3. Currency picker: "$" + currency label
4. Social icons: Facebook, X (Twitter), Instagram

All legal-band text uses `{colors.muted}`. Inline links within legal copy (Privacy, Terms) use `{colors.legal-link}` (#428bff) — this blue is only used here and nowhere else in the product.

---

## Usage Rules

- Do not give the footer a contrasting background color — it must match `{colors.canvas}` (#ffffff).
- Dropdown menus in the legal band (language picker, currency picker) use the single shadow tier (see `design-tokens/spacing-radii.md`).
- `{colors.legal-link}` (#428bff) must not appear outside the legal-band context.
