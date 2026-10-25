import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { CREAM, BLACK, EASE, HERO_BLOB } from "../constants";
import beccImage from "../../public/main.PNG";
import contentPhoto from "../../public/image1.jpg";
import photo2160 from "../../public/contentimage.jpg";
import photo566 from "../../public/Laptop1.jpg";
import image1 from "../../public/becc.png";
import image2 from "../../public/chair1.jpg";
import image3 from "../../public/Beccmaincrop.jpg";

const PINK = "#d01c61";
const LIME = "#D2F53C";
const MAILTO = "mailto:helloworkhorseco@gmail.com";

// Photos: About me block, "Need photos or video?" block, and the scrolling strip above the footer
const ABOUT_IMAGE: string | undefined = beccImage;
const CONTENT_IMAGE: string | undefined = contentPhoto;
const CAROUSEL_IMAGES: string[] = [photo566, photo2160, image1, image2, image3];

const SERVICES_DATA = [
  {
    id: "plan",
    number: "01",
    title: "A plan that fits",
    text: "Marketing strategy built around your business, so you grow and show up in the right places, not everywhere.",
    includes: "Strategy & planning · Audience & competitor research",
  },
  {
    id: "found",
    number: "02",
    title: "Get found",
    text: "When someone nearby searches for what you do, your business shows up. I set up your Google listing and local search so you're easy to find and easy to choose.",
    includes: "Google Business Profile · Local SEO",
  },
  {
    id: "campaigns",
    number: "03",
    title: "Campaigns, start to finish",
    text: "I plan, set up and run your campaigns from first idea to launch to results. Built to bring in calls and bookings, not just clicks.",
    includes: "Local Meta & Google ad campaigns · Ad creative direction · Lead capture & follow-up",
  },
  {
    id: "numbers",
    number: "04",
    title: "Know your numbers, spend less",
    text: "Every call, form and booking is traced back to the ad that caused it. Each month you get a plain-English report, and I cut what isn't working.",
    includes: "Tracking & analytics · Cost per lead · Ad spend optimisation · Monthly reporting",
  },
];

const CARD_THEMES = [
  { bg: PINK, fg: CREAM, muted: `${CREAM}D9`, line: `${CREAM}40`, badgeBg: LIME, badgeFg: BLACK, radius: "56px 16px 56px 16px" },
  { bg: LIME, fg: BLACK, muted: `${BLACK}B3`, line: `${BLACK}26`, badgeBg: BLACK, badgeFg: LIME, radius: "16px 56px 16px 56px" },
  { bg: CREAM, fg: BLACK, muted: `${BLACK}B3`, line: `${BLACK}1F`, badgeBg: PINK, badgeFg: CREAM, radius: "16px 56px 16px 56px" },
  { bg: PINK, fg: CREAM, muted: `${CREAM}D9`, line: `${CREAM}40`, badgeBg: LIME, badgeFg: BLACK, radius: "56px 16px 56px 16px" },
];

const FAQS = [
  {
    q: "How many leads will I get?",
    a: "It depends on your business, your area and your budget, so I won't promise a number before I've seen your data. I set a realistic target from your own results, then report against it every month.",
  },
  {
    q: "How much should I spend on ads?",
    a: "I work backwards from what a new customer is worth to you and what you can afford to pay for an enquiry. Usually that means starting with a test, keeping what works and scaling from there.",
  },
  {
    q: "How do I know the leads are any good?",
    a: "More leads isn't the goal; better ones are. Once you tell me which enquiries were good, I use that to find more people like them, instead of chasing the cheapest forms.",
  },
  {
    q: "How will I know where my money is going?",
    a: "Every call, form and booking is tracked back to the ad that produced it. Each month you get a plain-English report: what you spent, what came back and what I'm changing next.",
  },
  {
    q: "Do I need a new website?",
    a: "Usually not. I work with what you've got. If your site is holding results back I'll tell you straight, but I don't build or fix websites myself.",
  },
  {
    q: "Will I own my ad accounts?",
    a: "Yes. Your ad accounts, tracking and data stay yours, always.",
  },
];

function ImageSlot({
  src,
  alt,
  ratio,
  radius,
  label,
}: {
  src?: string;
  alt: string;
  ratio: string;
  radius: string;
  label: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: "hidden",
        background: src ? "transparent" : `${PINK}1F`,
        border: src ? "none" : `2px dashed ${PINK}`,
        boxShadow: src ? "0 24px 60px rgba(0,0,0,0.14)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      ) : (
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: PINK, textAlign: "center", padding: "1rem" }}>
          {label}
        </span>
      )}
    </div>
  );
}

function RotatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.5 }}
      style={{ position: "absolute", top: "-1.4rem", left: "clamp(-2.6rem, -3vw, -1rem)", zIndex: 5, width: "clamp(96px, 11vw, 132px)", height: "clamp(96px, 11vw, 132px)" }}
    >
      <a
        href={MAILTO}
        aria-label="Say hello"
        style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", borderRadius: "50%", background: LIME, border: `3px solid ${BLACK}`, boxShadow: "0 12px 30px rgba(0,0,0,0.2)", textDecoration: "none", transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <motion.svg
          viewBox="0 0 120 120"
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <defs>
            <path id="badge-circle" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
          </defs>
          <text fontFamily="'Oswald', sans-serif" fontWeight="700" fontSize="14" fill={BLACK} textLength="258" lengthAdjust="spacing">
            <textPath href="#badge-circle">SAY HELLO ✦ SAY HELLO ✦ SAY HELLO ✦</textPath>
          </text>
        </motion.svg>
        <span style={{ position: "relative", fontFamily: "'DM Sans', sans-serif", fontSize: "1.7rem", fontWeight: 700, color: BLACK, lineHeight: 1 }}>↗</span>
      </a>
    </motion.div>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: "5rem 2rem 6rem", maxWidth: "800px", margin: "0 auto" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: PINK, marginBottom: "1rem" }}>
        Straight answers
      </p>
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", textTransform: "uppercase", color: BLACK, lineHeight: 1, margin: "0 0 2.5rem" }}>
        Questions you're
        <br />
        <span style={{ color: PINK }}>probably asking.</span>
      </h2>

      <div style={{ borderBottom: `1px solid ${BLACK}14` }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} style={{ borderTop: `1px solid ${BLACK}14` }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", background: "none", border: "none", cursor: "pointer", padding: "1.4rem 0", textAlign: "left" }}
              >
                <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "clamp(1.05rem, 2vw, 1.3rem)", textTransform: "uppercase", letterSpacing: "0.02em", color: isOpen ? PINK : BLACK, transition: "color 0.2s" }}>
                  {f.q}
                </span>
                <span
                  style={{ width: 38, height: 38, borderRadius: "50%", background: isOpen ? PINK : LIME, color: isOpen ? CREAM : BLACK, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", lineHeight: 1, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.2s, color 0.2s" }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: `${BLACK}B3`, lineHeight: 1.8, margin: 0, padding: "0 3.5rem 1.6rem 0" }}>
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ImageCarousel() {
  const [paused, setPaused] = useState(false);

  // Build one "set" of at least 6 tiles (repeat real images if there are only a few)
  const base: (string | null)[] = CAROUSEL_IMAGES.length ? CAROUSEL_IMAGES : Array.from({ length: 6 }, () => null);
  const set: (string | null)[] = [];
  while (set.length < 6) set.push(...base);

  const radii = ["40px 12px 40px 12px", "12px 40px 12px 40px"];

  return (
    <section
      aria-label="Image gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ background: CREAM, overflow: "hidden", height: "max(25vh, 180px)" }}
    >
      <style>{`
        @keyframes wh-carousel { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .wh-carousel-track { animation: none !important; } }
      `}</style>
      <div
        className="wh-carousel-track"
        style={{ display: "flex", width: "max-content", height: "100%", animation: "wh-carousel 60s linear infinite", animationPlayState: paused ? "paused" : "running" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} style={{ display: "flex", flexShrink: 0, height: "100%", gap: "1rem", paddingRight: "1rem" }}>
            {set.map((src, i) => (
              <div
                key={`${copy}-${i}`}
                style={{
                  position: "relative",
                  height: "100%",
                  aspectRatio: "3 / 2",
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: radii[i % 2],
                  background: src ? "transparent" : `${PINK}1F`,
                  border: src ? "none" : `2px dashed ${PINK}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {src ? (
                  <img src={src} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: PINK }}>
                    Landscape image
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Page title + description (what shows in the browser tab and on Google)
  useEffect(() => {
    document.title = "Workhorse | Marketing Consultant for Small Business, Sydney";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Marketing consultant helping Sydney small businesses. Get found, get more enquiries and see where every ad dollar goes. No agency layers."
      );
  }, []);

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
    <div style={{ background: CREAM, overflowX: "clip" }}>

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
          style={{ position: "relative", zIndex: 10, padding: "0 1.5rem", width: "100%", maxWidth: "800px" }}
        >
          {/* Lime blob peeking out behind the pink one */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: [-7, -2, -7], y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.7, duration: 0.6 },
              rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ position: "absolute", top: "2.2rem", left: "3.2rem", right: "0.2rem", bottom: "-2.4rem", background: LIME, borderRadius: HERO_BLOB, zIndex: 0 }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: PINK,
              borderRadius: HERO_BLOB,
              padding: "clamp(4rem,8vw,6rem) clamp(3rem,6vw,6rem)",
              textAlign: "center",
              boxShadow: "0 40px 80px rgba(208,28,97,0.25)",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.18em", color: `${CREAM}CC`, textTransform: "uppercase", margin: "0 0 1.2rem" }}
            >
              Marketing Consultant for Small Business
            </motion.p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.8rem,6vw,4.8rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 2.2rem" }}>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8, ease: EASE }}
                style={{ display: "block" }}
              >
                Bold Campaigns.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
                style={{ display: "block", color: LIME }}
              >
                No Agency Run-Around.
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}
            >
              <a
                href={MAILTO}
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: BLACK, background: LIME, border: `1.5px solid ${LIME}`, padding: "0.8rem 2.1rem", textDecoration: "none", transition: "background 0.2s, border-color 0.2s, transform 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.borderColor = CREAM; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = LIME; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Let's talk →
              </a>
              <Link
                to="/services"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.14em", textTransform: "uppercase", color: CREAM, border: `1.5px solid ${CREAM}`, background: "transparent", padding: "0.8rem 1.8rem", textDecoration: "none", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
              >
                See how I help
              </Link>
            </motion.div>
          </div>

          {/* Sticker */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: [12, 18, 12] }}
            transition={{
              opacity: { delay: 1.3, duration: 0.4 },
              scale: { delay: 1.3, type: "spring", stiffness: 180, damping: 12 },
              rotate: { delay: 1.3, duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ position: "absolute", top: "-1.4rem", right: "0.6rem", zIndex: 20, width: "clamp(92px, 14vw, 132px)", height: "clamp(92px, 14vw, 132px)", borderRadius: "50%", background: LIME, color: BLACK, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(0.95rem, 1.8vw, 1.3rem)", lineHeight: 1, textTransform: "uppercase", boxShadow: "0 12px 30px rgba(0,0,0,0.18)", border: `3px solid ${BLACK}` }}
          >
            A consultant,
            <br />
            not an
            <br />
            agency
          </motion.div>
        </motion.div>
      </section>

      {/* ── Sound familiar? (big statement) ── */}
      <section style={{ background: CREAM, padding: "5rem 1rem 7rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: EASE }}
          viewport={{ once: true, amount: 0.15 }}
          style={{
            position: "relative",
            overflow: "hidden",
            background: PINK,
            borderRadius: "clamp(3rem,9vw,9rem) clamp(2rem,4vw,4rem) clamp(4rem,12vw,12rem) clamp(2rem,5vw,5rem)",
            maxWidth: "1400px",
            margin: "0 auto",
            minHeight: "92vh",
            display: "flex",
            alignItems: "center",
            padding: "clamp(4rem,9vw,9rem) clamp(2rem,8vw,8rem)",
            boxShadow: "0 40px 90px rgba(208,28,97,0.28)",
          }}
        >
          <div
            aria-hidden="true"
            style={{ position: "absolute", right: "-6rem", bottom: "-6rem", width: "clamp(12rem,30vw,26rem)", height: "clamp(12rem,30vw,26rem)", background: LIME, borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%" }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.22em", color: `${CREAM}B3`, textTransform: "uppercase", margin: "0 0 1.5rem" }}>
              Sound familiar?
            </p>
            <div style={{ position: "relative" }}>
            <RotatingBadge />
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.8rem,8.5vw,7.5rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 2.2rem" }}>
              Great at what you do.
              <br />
              <span style={{ color: LIME }}>Not enough people know it.</span>
            </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", margin: "0 0 2rem" }}>
              {["Quiet months", "Ad spend you can't trace", "Enquiries that go nowhere"].map((chip) => (
                <span
                  key={chip}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.9rem,1.4vw,1.05rem)", fontWeight: 500, color: CREAM, border: `1.5px solid ${CREAM}`, padding: "0.5rem 1.2rem", borderRadius: "9999px" }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.1rem,2vw,1.5rem)", color: `${CREAM}E6`, lineHeight: 1.6, margin: "0 0 2.5rem", maxWidth: "720px" }}>
              I help local businesses get found by people searching right now, and turn them into real customers, not just clicks.
            </p>
            <a
              href={MAILTO}
              style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: BLACK, background: LIME, border: `1.5px solid ${LIME}`, textDecoration: "none", padding: "0.95rem 2.4rem", transition: "background 0.2s, border-color 0.2s, transform 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.borderColor = CREAM; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = LIME; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Let's talk →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Services: plain-English cards on black ── */}
      <section style={{ background: BLACK, padding: "7rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, marginBottom: "1rem" }}>
            What I do
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", textTransform: "uppercase", color: CREAM, lineHeight: 0.95, margin: "0 0 1.2rem" }}>
            Here's what changes
            <br />
            <span style={{ color: LIME }}>for your business.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: `${CREAM}B3`, lineHeight: 1.7, margin: "0 0 3.5rem", maxWidth: "560px" }}>
            No messing around. A plan that fits, a business that gets found, campaigns that bring in enquiries, and full control of your ad spend.
          </p>

          <div className="grid sm:grid-cols-2" style={{ gap: "1.5rem" }}>
            {SERVICES_DATA.map((svc, i) => {
              const t = CARD_THEMES[i];
              return (
                <motion.div
                  key={svc.id}
                  whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  style={{ background: t.bg, color: t.fg, borderRadius: t.radius, padding: "2.2rem", display: "flex", flexDirection: "column" }}
                >
                  <span style={{ width: 44, height: 44, borderRadius: "50%", background: t.badgeBg, color: t.badgeFg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", marginBottom: "1.2rem" }}>
                    {svc.number}
                  </span>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.6vw, 1.95rem)", color: t.fg, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.05, margin: "0 0 1rem" }}>
                    {svc.title}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: t.muted, lineHeight: 1.7, margin: "0 0 1.5rem", flexGrow: 1 }}>
                    {svc.text}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: t.muted, lineHeight: 1.6, margin: 0, paddingTop: "1rem", borderTop: `1px solid ${t.line}` }}>
                    <span style={{ color: t.fg, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Includes </span>
                    {svc.includes}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Content & creative (image room) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2"
            style={{ marginTop: "1.5rem", gap: "2rem", alignItems: "center", border: `1.5px solid ${CREAM}33`, borderRadius: "56px 16px 56px 16px", padding: "clamp(1.8rem,4vw,3rem)" }}
          >
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, margin: "0 0 0.8rem" }}>
                Content & creative
              </p>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", textTransform: "uppercase", color: CREAM, lineHeight: 1, margin: "0 0 1rem" }}>
                Need photos or video?
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: `${CREAM}B3`, lineHeight: 1.7, margin: 0 }}>
                I'm not a graphic designer, and I'll tell you straight. I'll put you in touch with the right people for design, and help source photography and videography, writing the briefs and working directly with my contacts.
              </p>
            </div>
            <ImageSlot
              src={CONTENT_IMAGE}
              alt="Photography and video for small business"
              ratio="4 / 3"
              radius="38% 62% 40% 60% / 62% 45% 55% 38%"
              label="Image goes here"
            />
          </motion.div>

          <div style={{ marginTop: "3.5rem" }}>
            <Link
              to="/services"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", color: CREAM, textDecoration: "none", border: `1px solid ${CREAM}66`, padding: "0.7rem 1.9rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = LIME; e.currentTarget.style.color = BLACK; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
            >
              All services →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── About me ── */}
      <section style={{ background: CREAM, padding: "7rem 2rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2"
          style={{ maxWidth: "1000px", margin: "0 auto", gap: "3.5rem", alignItems: "center" }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "420px", margin: "0 auto" }}>
            <div
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, transform: "translate(18px, 18px) rotate(4deg)", background: LIME, borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%" }}
            />
            <div style={{ position: "relative" }}>
              <ImageSlot
                src={ABOUT_IMAGE}
                alt="Your marketing consultant"
                ratio="4 / 5"
                radius="58% 42% 63% 37% / 41% 55% 45% 59%"
                label="Your photo here"
              />
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: PINK, marginBottom: "1rem" }}>
              About me
            </p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", textTransform: "uppercase", color: BLACK, lineHeight: 1, margin: "0 0 1.2rem" }}>
              One consultant.
              <br />
              <span style={{ color: PINK }}>Zero agency layers.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}B3`, lineHeight: 1.75, margin: "0 0 1.8rem" }}>
              I'm a marketing consultant, not an agency. I work directly with small business owners to build a plan that fits, run the campaigns and keep a close eye on every dollar. No account managers, no hand-offs.
            </p>
            <Link
              to="/about"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BLACK, textDecoration: "none", border: `1px solid ${BLACK}33`, padding: "0.7rem 1.9rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = CREAM; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BLACK; }}
            >
              More about me →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── No Bullshit ── */}
      <section style={{ background: "#FFFFED", padding: "6rem 2rem 8rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            padding: "clamp(3.5rem,8vw,6.5rem) clamp(2.5rem,6vw,5.5rem)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.14)",
          }}
        >
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem,5.5vw,4rem)", color: BLACK, textTransform: "uppercase", lineHeight: 1, margin: "0 0 2rem" }}>
            No Bullshit. Just Results.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.2rem", color: `${BLACK}E6`, lineHeight: 1.85, margin: 0 }}>
            The marketing industry loves to make itself sound complicated. I don't. You'll work directly with me, and you'll always know what I'm doing, why I'm doing it, where your ad spend is going and what it's delivering. That's the whole deal.
          </p>
          <a
            href={MAILTO}
            style={{ display: "inline-block", marginTop: "2rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: CREAM, background: BLACK, border: `1.5px solid ${BLACK}`, textDecoration: "none", padding: "0.85rem 2.2rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = PINK; e.currentTarget.style.borderColor = PINK; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.borderColor = BLACK; }}
          >
            Get in touch →
          </a>
        </motion.div>
      </section>

      {/* ── Image carousel ── */}
      <ImageCarousel />

      {/* ── Footer ── */}
      <footer style={{ background: CREAM, borderTop: `1px solid ${BLACK}14`, padding: "5rem 2rem 2.5rem" }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3.5rem,9vw,6rem)", color: BLACK, lineHeight: 1, letterSpacing: "0.04em", marginBottom: "0.4rem" }}>
          WORKHORSE
        </div>
        <div style={{ height: "3px", background: PINK, marginBottom: "3rem" }} />
        <div className="grid md:grid-cols-3" style={{ gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Services</p>
            {SERVICES_DATA.map((group) => (
              <p key={group.id} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}99`, margin: "0 0 0.5rem", cursor: "pointer" }}>{group.title}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Get in touch</p>
            <a href="mailto:helloworkhorseco@gmail.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: PINK, textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>helloworkhorseco@gmail.com</a>
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
