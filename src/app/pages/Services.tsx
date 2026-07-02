import { motion } from "motion/react";
import { Link } from "react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { CREAM, ORANGE, BLACK, EASE, BOX_SHAPE, SERVICES_DATA } from "../constants";

export default function Services() {
  return (
    <div style={{ background: CREAM, paddingTop: "4.5rem" }}>

      {/* ── Hero SVG blob heading ── */}
      <section style={{ padding: "6rem 2rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ overflow: "visible" }}
        >
          <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
            <defs>
              <clipPath id="services-blobs-clip">
                <ellipse cx="300" cy="160" rx="240" ry="95" />
                <ellipse cx="170" cy="205" rx="120" ry="62" />
                <ellipse cx="460" cy="110" rx="150" ry="72" />
                <ellipse cx="690" cy="150" rx="115" ry="90" />
                <ellipse cx="760" cy="195" rx="70" ry="50" />
              </clipPath>
            </defs>

            <rect width="900" height="300" fill={CREAM} />

            {/* blobs */}
            <ellipse cx="300" cy="160" rx="240" ry="95" fill="#E86B9A" />
            <ellipse cx="170" cy="205" rx="120" ry="62" fill="#E86B9A" />
            <ellipse cx="460" cy="110" rx="150" ry="72" fill="#E86B9A" />
            <ellipse cx="690" cy="150" rx="115" ry="90" fill="#E86B9A" />
            <ellipse cx="760" cy="195" rx="70" ry="50" fill="#E86B9A" />

            {/* foreground rows clipped to blobs */}
            <text y="72"  fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill="#1C3A2A" clipPath="url(#services-blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text x="-170" y="162" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill="#1C3A2A" clipPath="url(#services-blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text y="252" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill="#1C3A2A" clipPath="url(#services-blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
          </svg>
        </motion.div>
      </section>

      {/* ── Intro copy ── */}
      <section style={{ padding: "1.5rem 2rem 2rem", maxWidth: "720px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: ORANGE,
            marginBottom: "1.5rem",
          }}>
            What we do
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: `${BLACK}99`,
            lineHeight: 1.85,
            margin: 0,
          }}>
            No retainer padding. No junior teams. Just focused, revenue-driven marketing built around your business.
          </p>
        </motion.div>
      </section>

      {/* ── Accordion ── */}
      <section style={{ padding: "2rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion.Root type="single" collapsible defaultValue="marketing">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                style={{ borderBottom: `1px solid ${BLACK}1A` }}
              >
                <Accordion.Item value={service.id}>
                  <Accordion.Header>
                    <Accordion.Trigger
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.4rem 0",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 600,
                          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                          color: BLACK,
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {service.title}
                      </span>
                      {/* Orange blob indicator */}
                      <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 3C15.2 2.4 20.5 5.1 21 10.5C21.5 15.5 18.2 21.2 12.8 21C7.5 20.8 2.8 17 2.5 11.5C2.2 6.2 6.8 3.8 12 3Z"
                          fill={ORANGE}
                        />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content
                    className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        color: `${BLACK}99`,
                        lineHeight: 1.8,
                        paddingBottom: "1.5rem",
                        margin: 0,
                        maxWidth: "38rem",
                      }}
                    >
                      {service.body}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "2rem 2rem 8rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            background: ORANGE,
            borderRadius: BOX_SHAPE,
            padding: "3rem 2.5rem",
            display: "flex",
            flexDirection: "column" as const,
            gap: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: CREAM,
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            Ready to
            <br />get started?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: `${CREAM}CC`,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "28rem",
            }}
          >
            Drop us a line. No pitch decks, no discovery calls that go nowhere — just a straight conversation about your business.
          </p>
          <a
            href="mailto:hello@workhorse.co"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: CREAM,
              textDecoration: "none",
              border: `1px solid ${CREAM}66`,
              padding: "0.65rem 1.4rem",
              alignSelf: "flex-start",
              transition: "background 0.2s, color 0.2s",
              borderRadius: "9999px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = CREAM;
              e.currentTarget.style.color = ORANGE;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = CREAM;
            }}
          >
            hello@workhorse.co →
          </a>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: CREAM,
          borderTop: `1px solid ${BLACK}14`,
          padding: "2.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap" as const,
          gap: "1rem",
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em" }}>
          © 2024 Workhorse Marketing.
        </span>
        <Link
          to="/"
          style={{ fontFamily: "'Anton', sans-serif", fontSize: "1rem", color: `${BLACK}1A`, letterSpacing: "0.06em", textDecoration: "none" }}
        >
          WORKHORSE
        </Link>
      </footer>
    </div>
  );
}
