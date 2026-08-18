import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { CREAM, BLACK, EASE, HERO_BLOB, BOX_SHAPE } from "../constants";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";

const PINK = "#d01c61ff";
const SERVICES_TEXT_COLOR = "#FCE4EE";

const SERVICES_DATA = [
  {
    id: "strategy",
    tag: "Strategy",
    items: [
      "Market & competitor audit",
      "Positioning & messaging",
      "Customer & audience research",
      "Goals & KPI definition",
    ],
  },
  {
    id: "foundations",
    tag: "Foundations",
    items: [
      "Google Business Profile setup",
      "Local SEO",
      "Website audit",
      "Analytics & tracking setup",
    ],
  },
  {
    id: "convert",
    tag: "Convert",
    items: [
      "Conversion audit",
      "Landing page design & optimisation",
      "Lead capture forms",
      "Follow-up automation",
    ],
  },
  {
    id: "growth",
    tag: "Growth",
    items: [
      "Paid ads strategy",
      "Local Meta ad campaigns",
      "Ad creative direction",
      "Ad tracking and set up",
    ],
  },
];

const JOURNEY_STAGES = [
  {
    id: "word-of-mouth",
    tag: "Where you are",
    label: "Word of\nMouth",
    icon: "🗣",
    title: "Built on referrals",
    intro:
      "You've grown this far through word of mouth — and that's proof the product is good. But referrals are unpredictable. You're ready for something more consistent.",
    points: [
      "Growth relies on who your customers know",
      "Pipeline feels feast or famine",
      "Hard to plan when leads are unpredictable",
    ],
  },
  {
    id: "foundations",
    tag: "Step 01",
    label: "Foundations",
    icon: "🏗",
    title: "Get found first",
    intro:
      "Before paid ads, you need the basics locked in. Google Business Profile, local SEO, tracking — so when people search, you show up.",
    points: [
      "Google Business Profile setup",
      "Local SEO",
      "Analytics & tracking setup",
    ],
  },
  {
    id: "convert",
    tag: "Step 02",
    label: "Convert",
    icon: "⚡",
    title: "Turn visitors into customers",
    intro:
      "Traffic means nothing if people leave. We make sure your site and landing pages are built to actually convert visitors into real enquiries.",
    points: [
      "High-converting landing pages",
      "Conversion audits",
      "Website copywriting",
    ],
  },
  {
    id: "growth",
    tag: "Step 03",
    label: "Growth",
    icon: "🎯",
    title: "Paid ads that actually work",
    intro:
      "Targeted local ad campaigns on Meta, designed to bring in real customers — not just clicks. Every dollar tracked back to real actions.",
    points: [
      "Local Meta ad campaigns",
      "Audience analysis & ad strategy",
      "Ad creative direction & tracking",
    ],
  },
  {
    id: "results",
    tag: "Where you're headed",
    label: "Results",
    icon: "📈",
    title: "Consistent, measurable growth",
    intro:
      "A steady pipeline of new customers who found you through smart, targeted marketing — not luck. Monthly reports so you always know what's working.",
    points: [
      "Predictable lead flow",
      "Full ad spend accountability",
      "Monthly performance reports",
    ],
  },
];

function JourneyGraphic() {
  const [active, setActive] = useState(0);
  const current = JOURNEY_STAGES[active];
  const isResult = active === JOURNEY_STAGES.length - 1;

  return (
    <section style={{ padding: "4rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: PINK,
        marginBottom: "1rem",
      }}>
        The journey
      </p>

      <h2 style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        textTransform: "uppercase",
        color: BLACK,
        lineHeight: 1,
        margin: "0 0 2.5rem",
      }}>
        From word of mouth
        <br />
        <span style={{ color: PINK }}>to real results.</span>
      </h2>

      {/* Track */}
      <div style={{ position: "relative", marginBottom: "2.5rem" }}>

        {/* Connector line */}
        <div style={{
          position: "absolute",
          top: 32,
          left: "10%",
          right: "10%",
          height: 2,
          background: `${BLACK}14`,
          zIndex: 0,
        }}>
          <div style={{
            height: "100%",
            background: PINK,
            width: `${(active / (JOURNEY_STAGES.length - 1)) * 100}%`,
            transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
            borderRadius: 2,
          }} />
        </div>

        {/* Nodes */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}>
          {JOURNEY_STAGES.map((s, i) => {
            const isDone = i < active;
            const isActive = i === active;

            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  flex: 1,
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: isActive ? PINK : isDone ? `${PINK}33` : "#fff",
                  border: isActive || isDone ? `2px solid ${PINK}` : `2px solid ${BLACK}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  transform: isActive ? "scale(1.12)" : "scale(1)",
                  boxShadow: isActive ? `0 0 0 6px ${PINK}22` : "0 4px 12px rgba(0,0,0,0.08)",
                }}>
                  {s.icon}
                </div>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: isActive ? PINK : isDone ? `${PINK}88` : `${BLACK}44`,
                  textAlign: "center",
                  lineHeight: 1.3,
                  whiteSpace: "pre-line",
                  transition: "color 0.3s ease",
                }}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
          style={{
            background: isResult ? PINK : "#fff",
            borderRadius: BOX_SHAPE,
            padding: "2.5rem",
            boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
            border: isResult ? "none" : `1px solid ${BLACK}0D`,
          }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: isResult ? `${CREAM}CC` : PINK,
            marginBottom: "0.75rem",
          }}>
            {current.tag}
          </p>
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            color: isResult ? CREAM : BLACK,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            margin: "0 0 1rem",
          }}>
            {current.title}
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: isResult ? `${CREAM}CC` : `${BLACK}99`,
            lineHeight: 1.8,
            margin: "0 0 1.5rem",
          }}>
            {current.intro}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {current.points.map((pt) => (
              <p
                key={pt}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.93rem",
                  color: isResult ? CREAM : BLACK,
                  margin: 0,
                  padding: "0.5rem 0",
                  borderTop: `1px solid ${isResult ? `${CREAM}22` : `${BLACK}14`}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: isResult ? CREAM : PINK,
                  flexShrink: 0,
                  display: "inline-block",
                }} />
                {pt}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next + dots */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1.5rem",
        gap: "1rem",
      }}>
        <button
          onClick={() => setActive((p) => Math.max(0, p - 1))}
          disabled={active === 0}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: active === 0 ? `${BLACK}28` : PINK,
            background: "none",
            border: "none",
            cursor: active === 0 ? "default" : "pointer",
            padding: 0,
            transition: "color 0.2s",
          }}
        >
          ← Prev
        </button>

        <div style={{ display: "flex", gap: 6 }}>
          {JOURNEY_STAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 18 : 6,
                height: 6,
                borderRadius: 3,
                background: i === active ? PINK : `${BLACK}20`,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setActive((p) => Math.min(JOURNEY_STAGES.length - 1, p + 1))}
          disabled={active === JOURNEY_STAGES.length - 1}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: active === JOURNEY_STAGES.length - 1 ? `${BLACK}28` : PINK,
            background: "none",
            border: "none",
            cursor: active === JOURNEY_STAGES.length - 1 ? "default" : "pointer",
            padding: 0,
            transition: "color 0.2s",
          }}
        >
          Next →
        </button>
      </div>

    </section>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return;
      const heroH = heroRef.current.offsetHeight;
      const scrolled = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = heroH * 0.85;
      if (scrolled <= fadeStart) setScrollProgress(0);
      else if (scrolled >= fadeEnd) setScrollProgress(1);
      else setScrollProgress((scrolled - fadeStart) / (fadeEnd - fadeStart));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: CREAM }}>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, paddingTop: "4.5rem", opacity: 1 - scrollProgress, userSelect: "none", pointerEvents: "none" }}
        >
          {Array.from({ length: 24 }).map((_, row) => {
            const direction = row % 2 === 0 ? -1 : 1;
            const translateVw = direction * scrollProgress * 70;
            return (
              <div
                key={row}
                style={{
                  display: "flex",
                  marginLeft: row % 2 === 1 ? "-4vw" : "0",
                  whiteSpace: "nowrap",
                  lineHeight: 1.05,
                  transform: `translateX(${translateVw}vw)`,
                }}
              >
                {Array.from({ length: 5 }).map((_, col) => (
                  <span key={col} style={{ fontFamily: "'Anton', sans-serif", fontSize: "10vw", color: BLACK, letterSpacing: "0.02em", flexShrink: 0, paddingRight: "0.2em" }}>
                    WORKHORSE
                  </span>
                ))}
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1.8, delay: 0.15 }}
          style={{ position: "relative", zIndex: 10, padding: "0 1.5rem", width: "100%", maxWidth: "760px" }}
        >
          <div
            style={{
              background: PINK,
              borderRadius: HERO_BLOB,
              padding: "clamp(4rem,8vw,6rem) clamp(3rem,6vw,6rem)",
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.18em", color: `${CREAM}A6`, textTransform: "uppercase", margin: "0 0 1.2rem" }}>
              Marketing for Real Businesses
            </p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem,5.5vw,4.4rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 2rem" }}>
              Bold Campaigns.{" "}
              <span style={{ display: "block" }}>No Agency Run-Around.</span>
            </h1>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/services"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.14em", textTransform: "uppercase", color: CREAM, border: `1.5px solid ${CREAM}`, background: "transparent", padding: "0.65rem 1.8rem", textDecoration: "none", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
              >
                See Our Services →
              </Link>
              <Link
                to="/about"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.14em", textTransform: "uppercase", color: `${CREAM}CC`, border: "none", background: "transparent", textDecoration: "none", padding: "0.65rem 0.5rem" }}
              >
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Block 2: Who We Are ── */}
      <section
        style={{ minHeight: "100vh", background: CREAM, display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem" }}
      >
        <motion.div
          initial={{ x: 180, opacity: 0, scale: 0.92 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ background: PINK, borderRadius: HERO_BLOB, padding: "clamp(3rem,7vw,6rem) clamp(2.5rem,6vw,5.5rem)", maxWidth: "720px", width: "100%" }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.18em", color: `${CREAM}8C`, textTransform: "uppercase", margin: "0 0 1rem" }}>
            Who We Are
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.0, color: CREAM, textTransform: "uppercase", margin: "0 0 1.5rem" }}>
            Marketing that works harder.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.15rem", color: `${CREAM}B8`, lineHeight: 1.75, margin: "0 0 2rem" }}>
            Sometimes your marketing just needs a bright idea. Sometimes it needs a full campaign. Either way we're here to help!
          </p>
          <Link
            to="/about"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", color: CREAM, textDecoration: "none", border: `1px solid ${CREAM}55`, padding: "0.6rem 1.6rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BLACK; }}
          >
            About us →
          </Link>
        </motion.div>
      </section>

      {/* ── Services: four-category layout ── */}
      <section style={{ background: CREAM, padding: "6rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "900px", margin: "0 auto 3rem", overflow: "visible" }}
        >
          <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
            <defs>
              <clipPath id="blobs-clip">
                <ellipse cx="310" cy="155" rx="255" ry="100" />
                <ellipse cx="185" cy="200" rx="135" ry="68" />
                <ellipse cx="390" cy="105" rx="160" ry="70" />
                <ellipse cx="700" cy="145" rx="110" ry="88" />
                <ellipse cx="768" cy="188" rx="68" ry="48" />
              </clipPath>
            </defs>
            <rect width="900" height="280" fill={CREAM} />
            <rect width="900" height="280" fill={CREAM} />
            <ellipse cx="310" cy="155" rx="255" ry="100" fill="#d01c61ff" />
            <ellipse cx="185" cy="200" rx="135" ry="68" fill="#d01c61ff" />
            <ellipse cx="390" cy="105" rx="160" ry="70" fill="#d01c61ff" />
            <ellipse cx="700" cy="145" rx="110" ry="88" fill="#d01c61ff" />
            <ellipse cx="768" cy="188" rx="68" ry="48" fill="#d01c61ff" />
            <text y="78" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text x="-170" y="162" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text y="246" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "3rem" }}>
            {SERVICES_DATA.map((group) => (
              <div key={group.id}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.1rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: PINK, flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: BLACK, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1, margin: 0 }}>
                    {group.tag}
                  </p>
                </div>
                <div>
                  {group.items.map((item, i) => (
                    i === 0 ? (
                      <div key={item} style={{ borderLeft: `3px solid ${PINK}`, background: `linear-gradient(90deg, ${PINK}0F, transparent)`, paddingLeft: "0.9rem", marginBottom: "0.1rem" }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", fontWeight: 500, color: BLACK, margin: 0, padding: "0.8rem 0" }}>{item}</p>
                      </div>
                    ) : (
                      <p key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: `${BLACK}99`, margin: 0, padding: "0.8rem 0 0.8rem 1.05rem" }}>{item}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link
              to="/services"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BLACK, textDecoration: "none", border: `1px solid ${BLACK}33`, padding: "0.65rem 1.8rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = CREAM; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BLACK; }}
            >
              All services →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Journey Graphic ── */}
      <JourneyGraphic />

      {/* ── No Bullshit ── */}
      <section style={{ background: "#FFFFED", padding: "8rem 2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            maxWidth: "720px",
            width: "100%",
            textAlign: "center",
            background: PINK,
            borderRadius: "46% 54% 58% 42% / 44% 40% 60% 56%",
            padding: "clamp(3.5rem,8vw,6.5rem) clamp(2.5rem,6vw,5.5rem)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.16)",
          }}
        >
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem,5.5vw,4rem)", color: CREAM, textTransform: "uppercase", lineHeight: 1, margin: "0 0 2rem" }}>
            No Bullshit. Just Results.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.2rem", color: `${CREAM}D9`, lineHeight: 1.85, margin: 0 }}>
            The marketing industry loves to make itself sound complicated. I don't. You'll always know what I'm doing, why I'm doing it, and what it's delivering. That's the whole deal.
          </p>
        </motion.div>
      </section>

      {/* ── Image blobs ── */}
      <section style={{ background: CREAM, padding: "6rem 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", height: "clamp(480px, 62vw, 760px)" }}
        >
          <div style={{ position: "absolute", top: "0%", left: "0%", width: "56%", height: "62%", borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%", overflow: "hidden", transform: "rotate(-3deg)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
            <img src={image1} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: "rotate(3deg) scale(1.12)" }} />
          </div>
          <div style={{ position: "absolute", top: "6%", right: "2%", width: "42%", height: "46%", borderRadius: "38% 62% 40% 60% / 62% 45% 55% 38%", overflow: "hidden", transform: "rotate(5deg)", zIndex: 2, boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
            <img src={image2} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: "rotate(-5deg) scale(1.15)" }} />
          </div>
          <div style={{ position: "absolute", bottom: "0%", left: "30%", width: "38%", height: "42%", borderRadius: "63% 37% 46% 54% / 48% 40% 60% 52%", overflow: "hidden", transform: "rotate(-6deg)", zIndex: 3, boxShadow: "0 24px 60px rgba(0,0,0,0.14)" }}>
            <img src={image3} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: "rotate(6deg) scale(1.18)" }} />
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: CREAM, borderTop: `1px solid ${BLACK}14`, padding: "5rem 2rem 2.5rem" }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3.5rem,9vw,6rem)", color: BLACK, lineHeight: 1, letterSpacing: "0.04em", marginBottom: "0.4rem" }}>
          WORKHORSE
        </div>
        <div style={{ height: "3px", background: PINK, marginBottom: "3rem" }} />
        <div className="grid md:grid-cols-3" style={{ gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Services</p>
            {["Strategy", "Foundations", "Convert", "Growth", "Results"].map((item) => (
              <p key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}99`, margin: "0 0 0.5rem", cursor: "pointer" }}>{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Get in touch</p>
            <a href="mailto:Helloworkhorseco@gmail.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: PINK, textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>helloworkhorseco@gmail.com</a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", color: `${BLACK}59`, margin: 0 }}>Based in Australia.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Follow</p>
            {["Instagram", "LinkedIn", "TikTok"].map((p) => (
              <p key={p} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}99`, margin: "0 0 0.5rem", cursor: "pointer" }}>{p}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${BLACK}14`, paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>
            © 2024 Workhorse Marketing. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>
            Marketing for Real Businesses
          </p>
        </div>
      </footer>
    </div>
  );
}
