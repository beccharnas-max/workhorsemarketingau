import { motion } from "motion/react";
import { Link } from "react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { CREAM, BLACK, EASE, BOX_SHAPE, SERVICES_DETAIL_DATA, TRUST_POINTS } from "../constants";

const PINK = "#d01c61ff";
const SERVICES_TEXT_COLOR = "#FCE4EE";

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
            <ellipse cx="300" cy="160" rx="240" ry="95" fill={PINK} />
            <ellipse cx="170" cy="205" rx="120" ry="62" fill={PINK} />
            <ellipse cx="460" cy="110" rx="150" ry="72" fill={PINK} />
            <ellipse cx="690" cy="150" rx="115" ry="90" fill={PINK} />
            <ellipse cx="760" cy="195" rx="70" ry="50" fill={PINK} />

            {/* foreground rows clipped to blobs */}
            <text y="72"  fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#services-blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text x="-170" y="162" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#services-blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text y="252" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#services-blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
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
            fontSize: "0.8rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: PINK,
            marginBottom: "1.5rem",
          }}>
            What we do
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.2rem, 2vw, 1.35rem)",
            color: `${BLACK}99`,
            lineHeight: 1.85,
            margin: 0,
          }}>
            We help local businesses get found, grow, and convert more customers online. Our services are designed to be practical, actionable, and results-driven.
          </p>
        </motion.div>
      </section>

      {/* ── Accordion: Foundations / Growth / Convert / Results ── */}
      <section style={{ padding: "2rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion.Root type="single" collapsible defaultValue="foundations">
            {SERVICES_DETAIL_DATA.map((category) => (
              <div key={category.id}>
                <Accordion.Item value={category.id}>
                  <Accordion.Header>
                    <Accordion.Trigger
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1.5rem 1.75rem",
                        background: PINK,
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        margin: "1rem 0",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
                          color: CREAM,
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {category.title}
                      </span>
                      {/* Cream blob indicator */}
                      <svg width="30" height="30" viewBox="0 0 24 24" style={{ flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 3C15.2 2.4 20.5 5.1 21 10.5C21.5 15.5 18.2 21.2 12.8 21C7.5 20.8 2.8 17 2.5 11.5C2.2 6.2 6.8 3.8 12 3Z"
                          fill={CREAM}
                        />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content
                    className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "1.75rem 1.75rem 2rem", maxWidth: "38rem" }}>
                      {category.intro && (
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.05rem",
                            color: `${BLACK}99`,
                            lineHeight: 1.8,
                            margin: "0 0 1.75rem",
                          }}
                        >
                          {category.intro}
                        </p>
                      )}

                      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {category.groups.map((group) => (
                          <div key={group.label ?? "default"}>
                            {group.label && (
                              <p
                                style={{
                                  fontFamily: "'DM Sans', sans-serif",
                                  fontSize: "0.75rem",
                                  letterSpacing: "0.14em",
                                  textTransform: "uppercase",
                                  color: `${BLACK}66`,
                                  margin: "0 0 0.6rem",
                                }}
                              >
                                {group.label}
                              </p>
                            )}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              {group.items.map((item) => (
                                <p
                                  key={item}
                                  style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.95rem",
                                    color: BLACK,
                                    margin: 0,
                                    padding: "0.5rem 0",
                                    borderTop: `1px solid ${BLACK}14`,
                                  }}
                                >
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
              </div>
            ))}
          </Accordion.Root>
        </motion.div>
      </section>

      {/* ── Trust badges: pop-up content boxes ── */}
      <section style={{ padding: "1rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3"
          style={{ gap: "1.5rem" }}
        >
          {TRUST_POINTS.map((point) => (
            <motion.div
              key={point.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: EASE }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "2rem 1.75rem",
                boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                border: `1px solid ${BLACK}0D`,
              }}
            >
              <div style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: PINK,
                marginBottom: "1.25rem",
              }} />
              <p style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: "1.15rem",
                color: BLACK,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                margin: "0 0 0.75rem",
              }}>
                {point.title}
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: `${BLACK}99`,
                lineHeight: 1.75,
                margin: 0,
              }}>
                {point.body}
              </p>
            </motion.div>
          ))}
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
            background: PINK,
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
              fontSize: "1.15rem",
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
              fontSize: "0.85rem",
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
              e.currentTarget.style.color = PINK;
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
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em" }}>
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
