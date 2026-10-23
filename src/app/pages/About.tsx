import { motion } from "motion/react";
import { Link } from "react-router";
import { CREAM, BLACK, EASE, HERO_BLOB } from "../constants";
import founderImage from "../../public/Beccmaincrop.jpg";

const PINK = "#d01c61";
// Third brand colour (same as Home). Tip: move PINK and LIME into ../constants so both pages share them.
const LIME = "#D2F53C";

const PRINCIPLES = [
  {
    number: "01",
    title: "Direct",
    text: "You work with me, not an account manager. One person who knows your business and your numbers.",
    bg: PINK, fg: CREAM, muted: `${CREAM}D9`, badgeBg: LIME, badgeFg: BLACK, radius: "56px 16px 56px 16px",
  },
  {
    number: "02",
    title: "Plain English",
    text: "No jargon, no smoke and mirrors. You'll always know what I'm doing, why I'm doing it and what it's delivering.",
    bg: LIME, fg: BLACK, muted: `${BLACK}B3`, badgeBg: BLACK, badgeFg: LIME, radius: "16px 56px 16px 56px",
  },
  {
    number: "03",
    title: "Every dollar tracked",
    text: "Every call, form and booking is traced back to the ad that caused it, and I cut what isn't working.",
    bg: CREAM, fg: BLACK, muted: `${BLACK}B3`, badgeBg: PINK, badgeFg: CREAM, radius: "56px 16px 56px 16px",
  },
];

const FOOTER_SERVICES = [
  "A plan that fits",
  "Get found",
  "Campaigns, start to finish",
  "Know your numbers, spend less",
];

export default function About() {
  return (
    <div style={{ background: CREAM, paddingTop: "4.5rem", overflowX: "clip" }}>

      {/* ── Hero panel ── */}
      <section style={{ padding: "3rem 1rem 4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            position: "relative",
            overflow: "hidden",
            background: PINK,
            borderRadius: "clamp(3rem,9vw,9rem) clamp(2rem,4vw,4rem) clamp(4rem,12vw,12rem) clamp(2rem,5vw,5rem)",
            maxWidth: "1300px",
            margin: "0 auto",
            minHeight: "72vh",
            display: "flex",
            alignItems: "center",
            padding: "clamp(4rem,9vw,8rem) clamp(2rem,8vw,8rem)",
            boxShadow: "0 40px 90px rgba(208,28,97,0.28)",
          }}
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: [0, 8, 0], y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", right: "-6rem", bottom: "-6rem", width: "clamp(12rem,30vw,26rem)", height: "clamp(12rem,30vw,26rem)", background: LIME, borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%" }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.22em", color: `${CREAM}B3`, textTransform: "uppercase", margin: "0 0 1.5rem" }}>
              About me
            </p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(3rem,9vw,7.5rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 2rem" }}>
              Hi, I'm Becc.
              <br />
              <span style={{ color: LIME }}>Your marketing consultant.</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.1rem,2vw,1.4rem)", color: `${CREAM}E6`, lineHeight: 1.6, margin: "0 0 2.5rem", maxWidth: "640px" }}>
              I help small businesses in Sydney get found, get more enquiries and see exactly where every ad dollar goes. I'm a consultant, not an agency, so you work directly with me.
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
                to="/services"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.16em", textTransform: "uppercase", color: CREAM, border: `1.5px solid ${CREAM}`, background: "transparent", padding: "0.85rem 1.9rem", textDecoration: "none", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
              >
                See what I do
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Meet Becc ── */}
      <section style={{ padding: "5rem 2rem 7rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2"
          style={{ maxWidth: "1000px", margin: "0 auto", gap: "clamp(2.5rem,6vw,4.5rem)", alignItems: "center" }}
        >
          {/* Image with lime offset blob */}
          <div style={{ position: "relative", width: "100%", maxWidth: "420px", margin: "0 auto" }}>
            <div
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, transform: "translate(18px, 18px) rotate(4deg)", background: LIME, borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%" }}
            />
            <div
              style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%", overflow: "hidden", background: `${PINK}1F`, boxShadow: "0 24px 60px rgba(0,0,0,0.14)" }}
            >
              <img
                src={founderImage}
                alt="Becc, founder and marketing consultant at Workhorse"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: PINK, marginBottom: "1rem" }}>
              The person behind Workhorse
            </p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: BLACK, textTransform: "uppercase", lineHeight: 0.95, margin: "0 0 1.75rem" }}>
              Meet Becc.
              <br />
              <span style={{ color: PINK }}>No agency. Just me.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.1rem)", color: `${BLACK}B3`, lineHeight: 1.8, margin: "0 0 1.2rem" }}>
              Small business owners deserve real marketing support, no matter where they are in their journey. Not every business is ready for a full agency, and that's completely okay.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.1rem)", color: `${BLACK}B3`, lineHeight: 1.8, margin: "0 0 1.2rem" }}>
              Workhorse exists to fill that gap. I'm not here to scale an empire. I'm here to be a genuine, affordable partner for businesses who need clarity, direction, and someone who actually gives a damn.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.1rem)", color: `${BLACK}B3`, lineHeight: 1.8, margin: "0 0 2rem" }}>
              This isn't about flashy awards or big retainers. It's about helping you build something sustainable, one smart decision at a time. If you win, I win. Simple as that.
            </p>
            <div style={{ borderTop: `1px solid ${BLACK}1A`, paddingTop: "1.5rem" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: PINK, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 0.25rem" }}>
                Becc
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: `${BLACK}73`, margin: 0 }}>
                Founder & Marketing Consultant
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── How I work ── */}
      <section style={{ background: BLACK, padding: "7rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, marginBottom: "1rem" }}>
            How I work
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", textTransform: "uppercase", color: CREAM, lineHeight: 0.95, margin: "0 0 3rem" }}>
            Simple, honest
            <br />
            <span style={{ color: LIME }}>and out in the open.</span>
          </h2>

          <div className="grid md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.number}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                style={{ background: p.bg, color: p.fg, borderRadius: p.radius, padding: "2rem", display: "flex", flexDirection: "column" }}
              >
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: p.badgeBg, color: p.badgeFg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", marginBottom: "1.2rem" }}>
                  {p.number}
                </span>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.4vw, 1.8rem)", color: p.fg, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.05, margin: "0 0 1rem" }}>
                  {p.title}
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: p.muted, lineHeight: 1.7, margin: 0 }}>
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Honest note */}
          <div style={{ marginTop: "1.5rem", border: `1.5px solid ${CREAM}33`, borderRadius: "16px 56px 16px 56px", padding: "clamp(1.6rem,3vw,2.2rem)" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, margin: "0 0 0.7rem" }}>
              Good to know
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: `${CREAM}B3`, lineHeight: 1.7, margin: 0 }}>
              I'm not a graphic designer, and I don't build or fix websites. When you need design, photography or video, I'll put you in touch with the right people and help write the briefs.
            </p>
          </div>
        </motion.div>
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
            Ready for a plan
            <br />that fits?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: `${BLACK}E6`, lineHeight: 1.7, margin: "0 0 2rem" }}>
            Have a chat with me about your business. No pressure, no jargon.
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
            <Link
              to="/services"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.16em", textTransform: "uppercase", color: BLACK, background: "transparent", border: `1.5px solid ${BLACK}`, textDecoration: "none", padding: "0.8rem 1.8rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = LIME; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BLACK; }}
            >
              See what I do
            </Link>
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
