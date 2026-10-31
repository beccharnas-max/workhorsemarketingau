import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { CREAM, BLACK, EASE } from "../constants";

const PINK = "#d01c61";
// Third brand colour (same as Home and About). Tip: move PINK and LIME into ../constants so every page shares them.
const LIME = "#D2F53C";

/** Four services, same as the home page, with a little more detail. */
const SERVICES_DETAIL_DATA = [
  {
    id: "plan",
    number: "01",
    title: "A plan that fits",
    bg: PINK, fg: CREAM, badgeBg: LIME, badgeFg: BLACK, radius: "40px 14px 40px 14px",
    intro:
      "Before I touch anything, I work out what matters for your business, so you grow and show up in the right places, not everywhere. I also work out what to spend and what to expect back, so you only pay for work you actually need.",
    groups: [
      {
        label: undefined as string | undefined,
        items: [
          "Marketing strategy & plan",
          "Market & competitor research",
          "Audience & customer research",
          "Positioning & messaging",
          "Channel priorities",
          "Goals & KPIs",
        ],
      },
      {
        label: "Budget" as string | undefined,
        items: [
          "Marketing budget: what to spend and where",
          "Forecasting: what to expect back",
        ],
      },
      {
        label: "Ongoing" as string | undefined,
        items: [
          "Part-time marketing lead: I act as your marketing manager",
          "Brief, guide and review your junior, VA or freelancers",
          "Monthly priorities and check-ins",
        ],
      },
    ],
  },
  {
    id: "found",
    number: "02",
    title: "Get found",
    bg: LIME, fg: BLACK, badgeBg: BLACK, badgeFg: LIME, radius: "14px 40px 14px 40px",
    intro:
      "When someone nearby searches for what you do, your business shows up and looks like the obvious choice. Reviews are a big part of that: they help you rank, and they decide who gets the call.",
    groups: [
      {
        label: "Be visible" as string | undefined,
        items: ["Google Business Profile setup", "Local SEO"],
      },
      {
        label: "Be the obvious choice" as string | undefined,
        items: [
          "Review generation: simple ways to get more 5-star reviews",
          "Review replies and reputation monitoring",
        ],
      },
    ],
  },
  {
    id: "campaigns",
    number: "03",
    title: "Campaigns, start to finish",
    bg: BLACK, fg: LIME, badgeBg: LIME, badgeFg: BLACK, radius: "40px 14px 40px 14px",
    intro:
      "I plan, set up and run your campaigns from first idea to launch to results. Built to bring in calls and bookings, not just clicks.",
    groups: [
      {
        label: "Plan" as string | undefined,
        items: ["Paid ads strategy", "Audience analysis", "Competitor landscape"],
      },
      {
        label: "Run" as string | undefined,
        items: [
          "Local Meta & Google ad campaigns",
          "Ad creative direction",
          "Lead capture & follow-up automation",
        ],
      },
      {
        label: "Convert" as string | undefined,
        items: [
          "Landing page briefs: what the page needs to say and do",
          "Conversion audits of your existing pages",
        ],
      },
    ],
  },
  {
    id: "numbers",
    number: "04",
    title: "Know your numbers, spend less",
    bg: PINK, fg: CREAM, badgeBg: LIME, badgeFg: BLACK, radius: "14px 40px 14px 40px",
    intro:
      "Every call, form and booking is traced back to the ad that caused it, so you know exactly what your money is earning. Then I cut what isn't working.",
    groups: [
      {
        label: undefined as string | undefined,
        items: [
          "Analytics & tracking setup",
          "Ad tracking & attribution",
          "Cost-per-lead reporting",
          "Ad spend optimisation",
          "Monthly plain-English report",
        ],
      },
    ],
  },
];

const STEPS = [
  {
    number: "01",
    title: "A chat",
    text: "We talk about your business, your customers and what isn't working. No pressure, no pitch deck.",
    bg: PINK, fg: CREAM, muted: `${CREAM}D9`, badgeBg: LIME, badgeFg: BLACK, radius: "56px 16px 56px 16px",
  },
  {
    number: "02",
    title: "A plan",
    text: "I put together a plan that fits your goals and budget, and tell you straight what's worth doing.",
    bg: LIME, fg: BLACK, muted: `${BLACK}B3`, badgeBg: BLACK, badgeFg: LIME, radius: "16px 56px 16px 56px",
  },
  {
    number: "03",
    title: "Launch & report",
    text: "I set up and run the campaigns, and you get a plain-English report every month.",
    bg: CREAM, fg: BLACK, muted: `${BLACK}B3`, badgeBg: PINK, badgeFg: CREAM, radius: "56px 16px 56px 16px",
  },
];

/**
 * Results. Client details stay anonymous: tags describe the TYPE of result, not the business.
 * Check each "how" line matches what actually happened before publishing.
 */
const RESULTS = [
  {
    id: "traffic",
    prefix: "+",
    value: 43,
    suffix: "%",
    label: "website users, year on year",
    tag: "Website traffic",
    fromNum: 9252,
    toNum: 13230,
    unit: "website users",
    extra: undefined as string | undefined,
    how: [
      "Built email sign-up and automation foundations: website form, sign-up block and pop-up, connected to the email platform.",
      "Launched Meta Ads alongside it, shifting budget toward what was working.",
    ],
    bg: BLACK, fg: LIME, muted: `${CREAM}B3`, line: `${CREAM}33`, badgeBg: LIME, badgeFg: BLACK, radius: "56px 16px 56px 16px",
  },
  {
    id: "enquiries",
    prefix: "+",
    value: 37,
    suffix: "%",
    label: "enquiries, year on year",
    tag: "Lead generation",
    fromNum: 189,
    toNum: 258,
    unit: "enquiries",
    extra: "Up around 50% across the June to August peak." as string | undefined,
    how: [
      "Google and Meta lead-generation campaigns paired with email capture.",
      "Tested pricing and messaging against real demand to lift conversion.",
      "Planned campaigns around the peak season.",
    ],
    bg: LIME, fg: BLACK, muted: `${BLACK}B3`, line: `${BLACK}26`, badgeBg: BLACK, badgeFg: LIME, radius: "16px 56px 16px 56px",
  },
  {
    id: "cost",
    prefix: "−",
    value: 38,
    suffix: "%",
    label: "cost per conversion, vs previous period",
    tag: "Google Ads",
    fromNum: 109.65,
    toNum: 67.93,
    unit: "per conversion",
    numPrefix: "A$" as string | undefined,
    extra: "Conversions up 23% over the same period." as string | undefined,
    how: [
      "Reviewed and optimised search terms and keywords.",
      "Cut wasted spend so the same budget brought in more conversions.",
    ],
    bg: CREAM, fg: BLACK, muted: `${BLACK}B3`, line: `${BLACK}1F`, badgeBg: PINK, badgeFg: CREAM, radius: "16px 56px 16px 56px",
  },
  {
    id: "spend",
    prefix: "−",
    value: 24,
    suffix: "%",
    label: "paid social spend",
    tag: "Ad efficiency",
    fromNum: 1506,
    toNum: 27054,
    unit: "link clicks",
    extra: "Spend went down while link clicks went up." as string | undefined,
    how: [
      "Used live dashboards to test and move budget toward what drove results.",
      "Cut what wasn't working instead of spreading spend thin.",
    ],
    bg: BLACK, fg: LIME, muted: `${CREAM}B3`, line: `${CREAM}33`, badgeBg: LIME, badgeFg: BLACK, radius: "56px 16px 56px 16px",
  },
];

type Result = (typeof RESULTS)[number];

const FOOTER_SERVICES = [
  "A plan that fits",
  "Get found",
  "Campaigns, start to finish",
  "Know your numbers, spend less",
];

/** Number that counts up once it scrolls into view (respects reduced motion). */
function CountUp({ to, prefix, suffix, active }: { to: number; prefix: string; suffix: string; active: boolean }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, reduce]);

  return (
    <>
      {prefix}
      {n}
      {suffix}
    </>
  );
}

/** Pop-up with the detail behind a result. Esc, backdrop click or the X closes it. */
function ResultModal({ r, onClose }: { r: Result; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const maxNum = Math.max(r.fromNum, r.toNum);
  const beforePct = Math.max((r.fromNum / maxNum) * 100, 4);
  const afterPct = Math.max((r.toNum / maxNum) * 100, 4);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.72)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.25rem", overflowY: "auto" }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`result-title-${r.id}`}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: "620px", background: r.bg, color: r.fg, borderRadius: r.radius, padding: "clamp(2rem,5vw,3rem)", boxShadow: "0 40px 90px rgba(0,0,0,0.4)" }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          style={{ position: "absolute", top: "1.2rem", right: "1.2rem", width: 40, height: 40, borderRadius: "50%", background: r.fg, color: r.bg, border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", lineHeight: 1, transform: "rotate(45deg)" }}
        >
          +
        </button>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: r.muted, margin: "0 0 0.6rem" }}>
          {r.tag}
        </p>
        <h3 id={`result-title-${r.id}`} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(3.5rem,10vw,5.5rem)", lineHeight: 0.9, textTransform: "uppercase", margin: "0 0 0.4rem" }}>
          {r.prefix}
          {r.value}
          {r.suffix}
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: r.muted, margin: "0 0 1.8rem" }}>{r.label}</p>

        {/* Before / after bars */}
        <div style={{ margin: "0 0 1.8rem" }}>
          {[
            { name: "Before", num: r.fromNum, pct: beforePct, bar: r.line },
            { name: "After", num: r.toNum, pct: afterPct, bar: r.badgeBg },
          ].map((row, i) => (
            <div key={row.name} style={{ marginBottom: "0.7rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", color: r.muted, marginBottom: "0.3rem" }}>
                <span>{row.name}</span>
                <span>
                  {r.numPrefix ?? ""}{row.num.toLocaleString("en-AU", { minimumFractionDigits: r.numPrefix ? 2 : 0 })} {r.unit}
                </span>
              </div>
              <div style={{ height: 14, borderRadius: 9999, background: r.line, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.pct}%` }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.25, ease: EASE }}
                  style={{ height: "100%", borderRadius: 9999, background: row.bar }}
                />
              </div>
            </div>
          ))}
          {r.extra && (
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700, margin: "0.9rem 0 0" }}>{r.extra}</p>
          )}
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 0.6rem" }}>
          What I did
        </p>
        <div style={{ display: "flex", flexDirection: "column", margin: "0 0 2rem" }}>
          {r.how.map((line) => (
            <p key={line} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", color: r.muted, lineHeight: 1.6, margin: 0, padding: "0.6rem 0", borderTop: `1px solid ${r.line}`, display: "flex", gap: "0.7rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: r.fg, flexShrink: 0, marginTop: "0.55rem" }} />
              {line}
            </p>
          ))}
        </div>

        <Link
          to="/contact"
          style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: r.bg, background: r.fg, textDecoration: "none", padding: "0.85rem 2.1rem", borderRadius: "9999px" }}
        >
          Want this for your business? →
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.3 });
  const openResult = RESULTS.find((r) => r.id === openId) ?? null;

  // Page title + description (what shows in the browser tab and on Google)
  useEffect(() => {
    document.title = "Services | Workhorse Marketing Consultant, Sydney";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Marketing strategy, local SEO, Google reviews, Meta & Google ad campaigns and monthly reporting for Sydney small businesses. One consultant, no agency layers."
      );
  }, []);

  return (
    <div style={{ background: CREAM, paddingTop: "4.5rem", overflowX: "clip" }}>
      <style>{`
        .wh-acc-icon { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
        [data-state="open"] > .wh-acc-icon, [data-state="open"] .wh-acc-icon { transform: rotate(45deg); }
      `}</style>

      {/* ── Hero panel ── */}
      <section style={{ padding: "1.5rem 1rem 2.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            position: "relative",
            overflow: "hidden",
            background: PINK,
            borderRadius: "clamp(2rem,6vw,5rem) clamp(1.5rem,3vw,3rem) clamp(2.5rem,7vw,6rem) clamp(1.5rem,4vw,3rem)",
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            padding: "clamp(2rem,4.5vw,3.5rem) clamp(1.75rem,6vw,4.5rem)",
            boxShadow: "0 40px 90px rgba(208,28,97,0.28)",
          }}
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: [0, 8, 0], y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", right: "-4rem", bottom: "-4rem", width: "clamp(8rem,18vw,16rem)", height: "clamp(8rem,18vw,16rem)", background: LIME, borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%" }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.22em", color: `${CREAM}B3`, textTransform: "uppercase", margin: "0 0 1rem" }}>
              Services
            </p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.4rem,6vw,4.5rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 1.25rem" }}>
              Here's what I do.
              <br />
              <span style={{ color: LIME }}>Easy to Digest</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", color: `${CREAM}E6`, lineHeight: 1.6, margin: "0 0 1.5rem", maxWidth: "640px" }}>
              I help small businesses get found, get more enquiries and see exactly where every ad dollar goes. Four things, no jargon.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                to="/contact"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: BLACK, background: LIME, border: `1.5px solid ${LIME}`, textDecoration: "none", padding: "0.85rem 2.2rem", transition: "background 0.2s, border-color 0.2s, transform 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.borderColor = CREAM; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = LIME; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Let's talk →
              </Link>
              <Link
                to="/about"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.16em", textTransform: "uppercase", color: CREAM, border: `1.5px solid ${CREAM}`, background: "transparent", padding: "0.85rem 1.9rem", textDecoration: "none", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
              >
                About me
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Accordion: the four services ── */}
      <section style={{ padding: "3rem 2rem 6rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: PINK, marginBottom: "1rem" }}>
            What's included
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", textTransform: "uppercase", color: BLACK, lineHeight: 1, margin: "0 0 2.5rem" }}>
            Tap a service
            <br />
            <span style={{ color: PINK }}>to see the detail.</span>
          </h2>

          <Accordion.Root type="single" collapsible defaultValue="plan">
            {SERVICES_DETAIL_DATA.map((svc) => (
              <Accordion.Item key={svc.id} value={svc.id}>
                <Accordion.Header style={{ margin: 0 }}>
                  <Accordion.Trigger
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.4rem 1.75rem",
                      background: svc.bg,
                      borderRadius: svc.radius,
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      margin: "0.6rem 0",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ width: 44, height: 44, borderRadius: "50%", background: svc.badgeBg, color: svc.badgeFg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", flexShrink: 0 }}>
                        {svc.number}
                      </span>
                      <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3.6vw, 2.3rem)", color: svc.fg, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1 }}>
                        {svc.title}
                      </span>
                    </span>
                    <span
                      className="wh-acc-icon"
                      style={{ width: 38, height: 38, borderRadius: "50%", background: svc.fg, color: svc.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", lineHeight: 1 }}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "1.5rem 1.75rem 2rem", maxWidth: "38rem" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}B3`, lineHeight: 1.8, margin: "0 0 1.75rem" }}>
                      {svc.intro}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                      {svc.groups.map((group) => (
                        <div key={group.label ?? "default"}>
                          {group.label && (
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PINK, margin: "0 0 0.6rem" }}>
                              {group.label}
                            </p>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {group.items.map((item) => (
                              <p
                                key={item}
                                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", color: BLACK, margin: 0, padding: "0.55rem 0", borderTop: `1px solid ${BLACK}14`, display: "flex", alignItems: "center", gap: "0.7rem" }}
                              >
                                <span style={{ width: 7, height: 7, borderRadius: "50%", background: PINK, flexShrink: 0 }} />
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </section>

      {/* ── How it works + not-for-me note ── */}
      <section style={{ background: BLACK, padding: "7rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, marginBottom: "1rem" }}>
            How it works
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", textTransform: "uppercase", color: CREAM, lineHeight: 0.95, margin: "0 0 3rem" }}>
            Three steps.
            <br />
            <span style={{ color: LIME }}>No surprises.</span>
          </h2>

          <div className="grid md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {STEPS.map((s, i) => (
              <motion.div
                key={s.number}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                style={{ background: s.bg, color: s.fg, borderRadius: s.radius, padding: "2rem", display: "flex", flexDirection: "column" }}
              >
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: s.badgeBg, color: s.badgeFg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", marginBottom: "1.2rem" }}>
                  {s.number}
                </span>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.4vw, 1.8rem)", color: s.fg, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.05, margin: "0 0 1rem" }}>
                  {s.title}
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: s.muted, lineHeight: 1.7, margin: 0 }}>
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Not for me: design, websites, day-to-day social */}
          <div style={{ marginTop: "1.5rem", border: `1.5px solid ${CREAM}33`, borderRadius: "16px 56px 16px 56px", padding: "clamp(1.6rem,3vw,2.2rem)" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, margin: "0 0 0.7rem" }}>
              Need design, a website or social posting?
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: `${CREAM}B3`, lineHeight: 1.7, margin: 0 }}>
              I'm not a graphic designer, I don't build or fix websites, and I don't do day-to-day social posting. I'll tell you straight when you need one of those, and I'll put you in touch with the right people, help source photography and videography, and write the briefs so it's done properly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Results: count-up cards with pop-up detail ── */}
      <section style={{ background: PINK, padding: "7rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: `${CREAM}CC`, marginBottom: "1rem" }}>
            Results
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", textTransform: "uppercase", color: CREAM, lineHeight: 0.95, margin: "0 0 1.2rem" }}>
            Numbers,
            <br />
            <span style={{ color: LIME }}>not promises.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: `${CREAM}E6`, lineHeight: 1.7, margin: "0 0 3.5rem", maxWidth: "560px" }}>
            Real results from my work leading marketing for a multi-site business. Tap a number to see what changed.
          </p>

          <div ref={resultsRef} className="grid sm:grid-cols-2" style={{ gap: "1.5rem" }}>
            {RESULTS.map((r, i) => (
              <motion.button
                key={r.id}
                onClick={() => setOpenId(r.id)}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                aria-label={`${r.prefix}${r.value}${r.suffix} ${r.label}. Open details`}
                style={{ background: r.bg, color: r.fg, borderRadius: r.radius, padding: "2.2rem", display: "flex", flexDirection: "column", textAlign: "left", border: "none", cursor: "pointer", gridColumn: i === RESULTS.length - 1 && RESULTS.length % 2 === 1 ? "1 / -1" : undefined }}
              >
                <span style={{ alignSelf: "flex-start", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", background: r.badgeBg, color: r.badgeFg, padding: "0.4rem 0.9rem", borderRadius: "9999px", marginBottom: "1.2rem" }}>
                  {r.tag}
                </span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(3.6rem, 8vw, 5.5rem)", lineHeight: 0.9, textTransform: "uppercase" }}>
                  <CountUp to={r.value} prefix={r.prefix} suffix={r.suffix} active={resultsInView} />
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: r.muted, margin: "0.6rem 0 1.5rem", flexGrow: 1 }}>{r.label}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", paddingTop: "1rem", borderTop: `1px solid ${r.line}` }}>
                  See what changed →
                </span>
              </motion.button>
            ))}
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${CREAM}CC`, lineHeight: 1.6, margin: "2rem 0 0" }}>
            Results from my contracted work leading marketing for a multi-site business. Client details withheld.
          </p>
        </motion.div>

        <AnimatePresence>
          {openResult && <ResultModal key={openResult.id} r={openResult} onClose={() => setOpenId(null)} />}
        </AnimatePresence>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#FFFFED", padding: "7rem 2rem 8rem", display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            maxWidth: "760px",
            width: "100%",
            textAlign: "center",
            background: LIME,
            borderRadius: "46% 54% 58% 42% / 44% 40% 60% 56%",
            padding: "clamp(3.5rem,8vw,6rem) clamp(2.5rem,6vw,5rem)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.14)",
          }}
        >
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.4rem,5.5vw,3.8rem)", color: BLACK, textTransform: "uppercase", lineHeight: 1, margin: "0 0 1rem" }}>
            Ready to
            <br />get started?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: `${BLACK}E6`, lineHeight: 1.7, margin: "0 0 2rem" }}>
            Drop me a line. No pitch decks, no discovery calls that go nowhere, just a straight conversation about your business.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: CREAM, background: BLACK, border: `1.5px solid ${BLACK}`, textDecoration: "none", padding: "0.8rem 2rem", transition: "background 0.2s, border-color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = PINK; e.currentTarget.style.borderColor = PINK; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.borderColor = BLACK; }}
            >
              Let's talk →
            </Link>
            <a
              href="mailto:helloworkhorseco@gmail.com"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.16em", textTransform: "uppercase", color: BLACK, background: "transparent", border: `1.5px solid ${BLACK}`, textDecoration: "none", padding: "0.8rem 1.8rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = LIME; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BLACK; }}
            >
              Email me
            </a>
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
            {FOOTER_SERVICES.map((item) => (
              <p key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}99`, margin: "0 0 0.5rem", cursor: "pointer" }}>{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Get in touch</p>
            <a href="mailto:helloworkhorseco@gmail.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: PINK, textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>helloworkhorseco@gmail.com</a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", color: `${BLACK}59`, margin: 0 }}>Based in Sydney.</p>
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
            © {new Date().getFullYear()} Workhorse Marketing. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>
            Marketing Consultant for Small Business
          </p>
        </div>
      </footer>
    </div>
  );
}
