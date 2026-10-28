import { motion } from "motion/react";
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
      "Before I touch anything, I work out what matters for your business, so you grow and show up in the right places, not everywhere. It also means you only pay for work you actually need.",
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
    ],
  },
  {
    id: "found",
    number: "02",
    title: "Get found",
    bg: LIME, fg: BLACK, badgeBg: BLACK, badgeFg: LIME, radius: "14px 40px 14px 40px",
    intro:
      "When someone nearby searches for what you do, your business shows up and looks like the obvious choice.",
    groups: [
      {
        label: undefined as string | undefined,
        items: ["Google Business Profile setup", "Local SEO"],
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

const FOOTER_SERVICES = [
  "A plan that fits",
  "Get found",
  "Campaigns, start to finish",
  "Know your numbers, spend less",
];

export default function Services() {
  return (
    <div style={{ background: CREAM, paddingTop: "4.5rem", overflowX: "clip" }}>
      <style>{`
        .wh-acc-icon { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
        [data-state="open"] > .wh-acc-icon, [data-state="open"] .wh-acc-icon { transform: rotate(45deg); }
      `}</style>

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
              Services
            </p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(3rem,9vw,7.5rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 2rem" }}>
              Here's what I do.
              <br />
              <span style={{ color: LIME }}>Easy to Digest</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.1rem,2vw,1.4rem)", color: `${CREAM}E6`, lineHeight: 1.6, margin: "0 0 2.5rem", maxWidth: "640px" }}>
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

      {/* ── How it works + content note ── */}
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

          {/* Content & creative */}
          <div style={{ marginTop: "1.5rem", border: `1.5px solid ${CREAM}33`, borderRadius: "16px 56px 16px 56px", padding: "clamp(1.6rem,3vw,2.2rem)" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: LIME, margin: "0 0 0.7rem" }}>
              Need photos, video or design?
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: `${CREAM}B3`, lineHeight: 1.7, margin: 0 }}>
              I'm not a graphic designer, and I don't build or fix websites. I'll put you in touch with the right people, and help source photography and videography, writing the briefs and working directly with my contacts.
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
