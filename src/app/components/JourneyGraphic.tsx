import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CREAM, BLACK, EASE } from "../constants";

const PINK = "#d01c61ff";

const stages = [
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

export default function JourneyGraphic() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <section style={{ padding: "4rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>

      {/* Eyebrow */}
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

      {/* Heading */}
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

      {/* Stage nodes — horizontal track */}
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
            width: `${(active / (stages.length - 1)) * 100}%`,
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
          {stages.map((s, i) => {
            const isDone = i < active;
            const isActive = i === active;
            const isResult = i === stages.length - 1;

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
                {/* Circle */}
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: isActive
                    ? PINK
                    : isDone
                    ? `${PINK}33`
                    : isResult && i === active
                    ? CREAM
                    : "#fff",
                  border: isActive || isDone
                    ? `2px solid ${PINK}`
                    : `2px solid ${BLACK}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  transform: isActive ? "scale(1.12)" : "scale(1)",
                  boxShadow: isActive
                    ? `0 0 0 6px ${PINK}22`
                    : "0 4px 12px rgba(0,0,0,0.08)",
                }}>
                  {s.icon}
                </div>

                {/* Label */}
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
            background: active === stages.length - 1 ? PINK : "#fff",
            borderRadius: "42px 120px 60px 90px / 90px 60px 120px 42px",
            padding: "2.5rem",
            boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
            border: active === stages.length - 1 ? "none" : `1px solid ${BLACK}0D`,
          }}
        >
          {/* Tag */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: active === stages.length - 1 ? `${CREAM}CC` : PINK,
            marginBottom: "0.75rem",
          }}>
            {current.tag}
          </p>

          {/* Title */}
          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            color: active === stages.length - 1 ? CREAM : BLACK,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            margin: "0 0 1rem",
          }}>
            {current.title}
          </p>

          {/* Intro */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: active === stages.length - 1 ? `${CREAM}CC` : `${BLACK}99`,
            lineHeight: 1.8,
            margin: "0 0 1.5rem",
          }}>
            {current.intro}
          </p>

          {/* Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {current.points.map((pt) => (
              <p
                key={pt}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.93rem",
                  color: active === stages.length - 1 ? CREAM : BLACK,
                  margin: 0,
                  padding: "0.5rem 0",
                  borderTop: `1px solid ${active === stages.length - 1 ? `${CREAM}22` : `${BLACK}14`}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: active === stages.length - 1 ? CREAM : PINK,
                  flexShrink: 0,
                  display: "inline-block",
                }} />
                {pt}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next nav */}
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

        {/* Dots */}
        <div style={{ display: "flex", gap: 6 }}>
          {stages.map((_, i) => (
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
          onClick={() => setActive((p) => Math.min(stages.length - 1, p + 1))}
          disabled={active === stages.length - 1}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: active === stages.length - 1 ? `${BLACK}28` : PINK,
            background: "none",
            border: "none",
            cursor: active === stages.length - 1 ? "default" : "pointer",
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
