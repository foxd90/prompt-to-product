import { useState } from "react";

/* ─── Design tokens (Airbnb UI Kit) ─── */
const tokens = {
  accent: "#FF385C",
  accentHover: "#E31C5F",
  text: "#222222",
  textSecondary: "#5E5E5E",
  divider: "#EBEBEB",
  bg: "#FAFAFA",
  white: "#FFFFFF",
  cardBg: "#F7F7F7",
  stepBg: "#F7F7F7",
  footerBg: "#222222",
};

/* ─── Shared styles ─── */
const css = {
  // Layout
  page: {
    fontFamily: "'SF Pro Display', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    background: tokens.bg,
    minHeight: "100vh",
    color: tokens.text,
  },
  container: {
    maxWidth: 1440,
    margin: "0 auto",
    paddingLeft: 80,
    paddingRight: 80,
  },
  section: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  // Type scale
  displayXXL: { fontSize: 56, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 },
  displayXL:  { fontSize: 40, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1 },
  displayLG:  { fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 },
  headingMD:  { fontSize: 20, fontWeight: 600, lineHeight: 1.4 },
  bodyLG:     { fontSize: 16, fontWeight: 400, lineHeight: 1.6 },
  bodyMD:     { fontSize: 15, fontWeight: 400, lineHeight: 1.6 },
  bodySM:     { fontSize: 13, fontWeight: 400, lineHeight: 1.4 },
  caption:    { fontSize: 12, fontWeight: 400, lineHeight: 1.4 },
};

/* ─── Primary Button (Airbnb UI Kit) ─── */
function PrimaryButton({ children, onClick, style = {}, size = "default" }) {
  const [hovered, setHovered] = useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: hovered ? tokens.accentHover : tokens.accent,
    color: tokens.white,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
    transition: "background 0.15s ease",
    whiteSpace: "nowrap",
    minHeight: 44,
    ...(size === "small"
      ? { fontSize: 14, padding: "10px 20px" }
      : { fontSize: 16, padding: "14px 24px" }),
    ...style,
  };
  return (
    <button
      style={base}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

/* ─── Navigation ─── */
function Nav({ activePage, setPage }) {
  const links = [
    { label: "Home", key: "home" },
    { label: "Find Stay", key: "findStay" },
    { label: "Route Planner", key: "routePlanner" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: tokens.white,
        borderBottom: `1px solid ${tokens.divider}`,
        height: 80,
      }}
    >
      <div
        style={{
          ...css.container,
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setPage("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <AirbnbLogo />
          <span
            style={{
              color: tokens.accent,
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: -0.5,
            }}
          >
            airbnb
          </span>
        </button>

        {/* Center pill nav */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: `1px solid ${tokens.divider}`,
              borderRadius: 9999,
              overflow: "hidden",
            }}
          >
            {links.map((link, idx) => (
              <span key={link.key} style={{ display: "flex", alignItems: "center" }}>
                {idx > 0 && (
                  <span
                    style={{ width: 1, height: 24, background: tokens.divider, flexShrink: 0 }}
                  />
                )}
                <NavLink
                  label={link.label}
                  active={activePage === link.key}
                  onClick={() => setPage(link.key)}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 14,
              color: tokens.text,
              padding: "8px 12px",
              borderRadius: 9999,
              whiteSpace: "nowrap",
            }}
          >
            Become a Host
          </button>
          <button
            style={{
              width: 42,
              height: 42,
              border: `1px solid ${tokens.divider}`,
              borderRadius: "50%",
              background: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            🌐
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 6px 6px 14px",
              border: `1px solid ${tokens.divider}`,
              borderRadius: 9999,
              background: tokens.white,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 18 }}>≡</span>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#717171",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: tokens.white,
                fontSize: 14,
              }}
            >
              👤
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? tokens.cardBg : "none",
        border: "none",
        cursor: "pointer",
        padding: "14px 24px",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        color: active ? tokens.text : tokens.textSecondary,
        textDecoration: active ? "underline" : "none",
        textUnderlineOffset: 3,
        transition: "background 0.1s",
      }}
    >
      {label}
    </button>
  );
}

/* ─── Airbnb logo SVG ─── */
function AirbnbLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M15 3C15 3 7 10.5 7 17C7 21.418 10.582 25 15 25C19.418 25 23 21.418 23 17C23 10.5 15 3 15 3Z"
        fill={tokens.accent}
      />
      <path
        d="M9 20C9 20 6 22 6 24C6 25.657 7.343 27 9 27C10.657 27 12 25.657 12 24C12 22 9 20 9 20Z"
        fill={tokens.accent}
      />
      <path
        d="M21 20C21 20 24 22 24 24C24 25.657 22.657 27 21 27C19.343 27 18 25.657 18 24C18 22 21 20 21 20Z"
        fill={tokens.accent}
      />
    </svg>
  );
}

/* ─── Hero section ─── */
function Hero({ headline, sub, cta, onCta, bgColor = "#1E2330" }) {
  return (
    <section
      style={{
        background: bgColor,
        paddingTop: 120,
        paddingBottom: 80,
        minHeight: 420,
      }}
    >
      <div style={{ ...css.container, display: "flex", flexDirection: "column", gap: 24, maxWidth: 760 }}>
        <h1
          style={{
            ...css.displayXXL,
            color: tokens.white,
            margin: 0,
          }}
        >
          {headline}
        </h1>
        <p
          style={{
            ...css.bodyLG,
            color: "rgba(255,255,255,0.85)",
            margin: 0,
            maxWidth: 520,
          }}
        >
          {sub}
        </p>
        <PrimaryButton onClick={onCta} size="default">
          {cta}
        </PrimaryButton>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks({ steps }) {
  return (
    <section style={{ ...css.section, background: tokens.white }}>
      <div style={css.container}>
        <h2
          style={{
            ...css.displayLG,
            textAlign: "center",
            marginBottom: 48,
            marginTop: 0,
          }}
        >
          How It Works
        </h2>

        {/* ⚠️ Annotation: No Airbnb UI Kit component exists for this step-layout section —
            built with custom frames using Airbnb type scale and spacing tokens. */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {steps.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, title, desc }) {
  return (
    <div
      style={{
        background: tokens.stepBg,
        borderRadius: 16,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          background: tokens.accent,
          color: tokens.white,
          borderRadius: 9999,
          fontSize: 12,
          fontWeight: 600,
          padding: "4px 12px",
        }}
      >
        {num}
      </span>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: tokens.white,
          border: `1px solid ${tokens.divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        {step_icons[num]}
      </div>
      <h3 style={{ ...css.headingMD, margin: 0 }}>{title}</h3>
      <p style={{ ...css.bodyMD, color: tokens.textSecondary, margin: 0 }}>{desc}</p>
    </div>
  );
}

const step_icons = {
  "01": "📍",
  "02": "🤝",
  "03": "🚗",
};

/* ─── Featured Cards (Airbnb UI Kit: Card component) ─── */
function FeaturedCards({ title, subtitle, cards }) {
  return (
    <section style={{ ...css.section, background: tokens.cardBg }}>
      <div style={css.container}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ ...css.displayLG, margin: "0 0 8px" }}>{title}</h2>
          <p style={{ ...css.bodyLG, color: tokens.textSecondary, margin: 0 }}>{subtitle}</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {cards.map((card, i) => (
            <TripCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TripCard({ image, title, detail, price, rating, host }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: tokens.white,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s ease",
        cursor: "pointer",
      }}
    >
      {/* Image area */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          background: `linear-gradient(135deg, #c9c9c9 0%, #a8a8a8 100%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 40, opacity: 0.5 }}>🖼</span>
        {/* Wishlist button (Airbnb UI Kit pattern) */}
        <button
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          🤍
        </button>
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div>
            <p style={{ ...css.bodyMD, fontWeight: 600, margin: "0 0 2px", color: tokens.text }}>
              {title}
            </p>
            {host && (
              <p style={{ ...css.bodySM, color: tokens.textSecondary, margin: "0 0 4px" }}>
                Host: {host}
              </p>
            )}
            <p style={{ ...css.bodySM, color: tokens.textSecondary, margin: 0 }}>{detail}</p>
          </div>
          {rating && (
            <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
              <span style={{ fontSize: 12 }}>★</span>
              <span style={{ ...css.bodySM, fontWeight: 600 }}>{rating}</span>
            </div>
          )}
        </div>
        {price && (
          <p style={{ ...css.bodyMD, fontWeight: 600, margin: "8px 0 0" }}>
            <span style={{ color: tokens.text }}>{price}</span>
            <span style={{ fontWeight: 400, color: tokens.textSecondary }}> / person</span>
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Trust & Safety ─── */
function TrustSafety({ heading, body, features, illustrationLabel }) {
  return (
    <section style={{ ...css.section, background: tokens.white }}>
      <div
        style={{
          ...css.container,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Text column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ ...css.displayLG, margin: 0 }}>{heading}</h2>
          <p style={{ ...css.bodyLG, color: tokens.textSecondary, margin: 0, lineHeight: 1.7 }}>
            {body}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {features.map((feat) => (
              <li key={feat} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: tokens.accent,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    color: tokens.white,
                  }}
                >
                  ✓
                </span>
                <span style={{ ...css.bodyMD }}>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration placeholder */}
        <div
          style={{
            background: tokens.cardBg,
            border: `2px solid ${tokens.divider}`,
            borderRadius: 24,
            aspectRatio: "4/3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 48 }}>{illustrationLabel.split(" ")[0]}</span>
          <span style={{ ...css.headingMD, color: "#999" }}>
            {illustrationLabel.split(" ").slice(1).join(" ")}
          </span>
          <span style={{ ...css.bodySM, color: "#bbb" }}>Illustration placeholder</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer CTA ─── */
function FooterCTA({ headline, cta, onCta }) {
  return (
    <>
      <section
        style={{
          background: tokens.accent,
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <div
          style={{
            ...css.container,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
          }}
        >
          <h2
            style={{
              ...css.displayXL,
              color: tokens.white,
              textAlign: "center",
              margin: 0,
            }}
          >
            {headline}
          </h2>
          <button
            onClick={onCta}
            style={{
              background: tokens.white,
              color: tokens.accent,
              border: "none",
              borderRadius: 8,
              padding: "14px 28px",
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "inherit",
              cursor: "pointer",
              minHeight: 44,
            }}
          >
            {cta}
          </button>
        </div>
      </section>

      {/* Footer bar */}
      <footer
        style={{
          background: tokens.footerBg,
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <div
          style={{
            ...css.container,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {["About", "Community", "Hosting", "Careers", "Privacy", "Terms", "Sitemap"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                ...css.bodySM,
                color: "#aaa",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
          <span style={{ flex: 1 }} />
          <span style={{ ...css.caption, color: "#666" }}>
            © 2024 Airbnb Road Trip · All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}

/* ─── Page definitions ─── */
const pages = {
  home: {
    hero: {
      headline: "The open road, shared.",
      sub: "Join a host on a real road trip and travel like a local.",
      cta: "Explore trips",
      bgColor: "#1E222E",
    },
    howItWorks: {
      steps: [
        { num: "01", title: "Post a route", desc: "Share your planned journey and available seats with the community." },
        { num: "02", title: "Match with guests", desc: "Review traveler profiles and accept the best co-travelers." },
        { num: "03", title: "Hit the road together", desc: "Embark on a shared adventure and split costs along the way." },
      ],
    },
    featured: {
      title: "Featured Trips",
      subtitle: "Popular shared journeys from real Road Trip hosts",
      cards: [
        { title: "Berlin → Prague", host: "Maria S.", detail: "5 hrs · 2 seats available", price: "€25", rating: "4.97" },
        { title: "Paris → Lyon", host: "Thomas K.", detail: "2 hrs · 3 seats available", price: "€18", rating: "4.89" },
        { title: "Amsterdam → Brussels", host: "Lars V.", detail: "2.5 hrs · 1 seat available", price: "€22", rating: "4.95" },
      ],
    },
    trust: {
      heading: "Your safety, our priority",
      body: "Every Road Trip host is identity-verified, reviews are from real travelers, and our 24/7 support team is always reachable. Trip tracking lets your loved ones follow along in real time.",
      features: ["Verified hosts & profiles", "24/7 customer support", "Real-time trip tracking", "Secure in-app payments"],
      illustrationLabel: "🛡️ Trust & Safety",
    },
    footerCta: { headline: "Ready to share the road?", cta: "Start your Road Trip" },
  },

  findStay: {
    hero: {
      headline: "Sleep where the road takes you.",
      sub: "Find handpicked stays along your route.",
      cta: "Browse stays",
      bgColor: "#1A2028",
    },
    howItWorks: {
      steps: [
        { num: "01", title: "Enter your route", desc: "Tell us your start point, destination, and travel dates." },
        { num: "02", title: "See stays along the way", desc: "Browse curated accommodations matched to your exact route." },
        { num: "03", title: "Book instantly", desc: "Reserve with one tap and get confirmed within minutes." },
      ],
    },
    featured: {
      title: "Stays Along Your Route",
      subtitle: "Handpicked accommodations from Superhosts",
      cards: [
        { title: "The Loft, Prague", detail: "Free cancellation", price: "€89/night", rating: "4.98" },
        { title: "Vineyard Cottage, Burgundy", detail: "Flexible dates", price: "€112/night", rating: "4.93" },
        { title: "Canal Suite, Brussels", detail: "Secure payment", price: "€95/night", rating: "4.96" },
      ],
    },
    trust: {
      heading: "Book with confidence",
      body: "Every property is listed by a verified Superhost. Flexible cancellation means you're never locked in. All payments are encrypted and processed securely through Airbnb.",
      features: ["Superhost status badges", "Flexible cancellation", "Secure encrypted payments", "Guest protection guarantee"],
      illustrationLabel: "🏅 Superhost Promise",
    },
    footerCta: { headline: "Find your perfect stop for the night.", cta: "Browse stays" },
  },

  routePlanner: {
    hero: {
      headline: "Plan the perfect road trip.",
      sub: "Build your route, discover stops, share the journey.",
      cta: "Start planning",
      bgColor: "#14181F",
    },
    howItWorks: {
      steps: [
        { num: "01", title: "Set your start + end", desc: "Enter your origin and final destination to get started." },
        { num: "02", title: "Add waypoints", desc: "Drop pins on hidden gems, fuel stops, and scenic detours." },
        { num: "03", title: "Invite travel partners", desc: "Share your route and bring friends along for the journey." },
      ],
    },
    featured: {
      title: "Featured Routes",
      subtitle: "Curated road trip templates loved by the community",
      cards: [
        { title: "Alpine Adventure", detail: "1,200 km · 7 days · Mountain passes", price: "Free", rating: "4.99" },
        { title: "Coastal Portugal", detail: "650 km · 4 days · Beaches & villages", price: "Free", rating: "4.97" },
        { title: "Scottish Highlands", detail: "850 km · 5 days · Castles & lochs", price: "Free", rating: "4.95" },
      ],
    },
    trust: {
      heading: "Your route, always reliable",
      body: "Download maps for offline use, get real-time traffic and weather alerts, and coordinate effortlessly with your travel group. We've got every mile covered.",
      features: ["Offline maps & navigation", "Real-time traffic alerts", "Group coordination tools", "Weather & road condition updates"],
      illustrationLabel: "🗺️ Route Intelligence",
    },
    footerCta: { headline: "Your next road trip starts here.", cta: "Start planning" },
  },
};

/* ─── Page renderer ─── */
function PageContent({ pageKey, setPage }) {
  const p = pages[pageKey];
  return (
    <>
      <Hero {...p.hero} onCta={() => {}} />
      <HowItWorks steps={p.howItWorks.steps} />
      <FeaturedCards {...p.featured} />
      <TrustSafety {...p.trust} />
      <FooterCTA {...p.footerCta} onCta={() => {}} />
    </>
  );
}

/* ─── Root App ─── */
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={css.page}>
      <Nav activePage={page} setPage={setPage} />
      <main>
        <PageContent pageKey={page} setPage={setPage} />
      </main>

      {/* Responsive styles injected globally */}
      <style>{`
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .page-container { padding-left: 40px !important; padding-right: 40px !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding-top: 60px !important; padding-bottom: 48px !important; }
          .hero-headline { font-size: 36px !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .page-container { padding-left: 20px !important; padding-right: 20px !important; }
          .nav-pill { display: none !important; }
          .mobile-nav-links {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 0;
            border-top: 1px solid #ebebeb;
          }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
        a { color: inherit; }
      `}</style>
    </div>
  );
}
