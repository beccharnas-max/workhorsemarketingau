import { motion } from "motion/react";
import { Link } from "react-router";
import { CREAM, BLACK, EASE, BOX_SHAPE, HERO_BLOB } from "../constants";
import founderImage from "../../public/becc.png";

const PINK = "#d01c61ff";
const SERVICES_TEXT_COLOR = "#FCE4EE";

export default function About() {
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
              <clipPath id="about-blobs-clip">
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
            <text y="72"  fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#about-blobs-clip)">ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US</text>
            <text x="-170" y="162" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#about-blobs-clip)">ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US</text>
            <text y="252" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill={SERVICES_TEXT_COLOR} clipPath="url(#about-blobs-clip)">ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US</text>
          </svg>
        </motion.div>
      </section>

      {/* ── About copy block ── */}
      <section style={{ padding: "1.5rem 2rem 6rem", maxWidth: "720px", margin: "0 auto" }}>
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
            color: PINK,
            marginBottom: "1.5rem",
          }}>
            About Workhorse
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: `${BLACK}99`,
            lineHeight: 1.85,
            margin: 0,
          }}>
            We help small businesses in Sydney get more customers. Good visibility, a website that converts, and ads that bring people in — done properly, without the agency run-around.
          </p>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ borderTop: `1px solid ${BLACK}1A` }} />
      </div>

      {/* ── Meet Your Founder ── */}
      <section style={{ padding: "6rem 2rem 8rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section label */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: PINK,
            marginBottom: "1rem",
          }}>
            Founder
          </p>

          <div style={{
            display: "flex",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}>

            {/* Image blob */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{
                flex: "0 0 clamp(220px, 35%, 320px)",
                aspectRatio: "4 / 5",
                borderRadius: HERO_BLOB,
                overflow: "hidden",
                background: `${BLACK}0D`,
                position: "relative",
              }}
            >
              <img
                src={founderImage}
                alt="Becc — Founder & Strategist"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ flex: "1 1 280px", paddingTop: "0.5rem" }}
            >
              <h2 style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                color: BLACK,
                textTransform: "uppercase",
                lineHeight: 0.92,
                letterSpacing: "0.01em",
                margin: "0 0 1.75rem",
              }}>
                Meet Becc.
              </h2>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                color: `${BLACK}99`,
                lineHeight: 1.85,
                margin: "0 0 1.25rem",
              }}>
                Small business owners deserve real marketing support, no matter where they are in their journey. Not every business is ready for a full agency — and that's completely okay.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                color: `${BLACK}99`,
                lineHeight: 1.85,
                margin: "0 0 1.25rem",
              }}>
                Workhorse exists to fill that gap. I'm not here to scale an empire. I'm here to be a genuine, affordable partner for businesses who need clarity, direction, and someone who actually gives a damn.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                color: `${BLACK}99`,
                lineHeight: 1.85,
                margin: "0 0 2.5rem",
              }}>
                This isn't about flashy awards or big retainers. It's about helping you build something sustainable — one smart decision at a time. If you win, I win. Simple as that.
              </p>

              {/* Signature */}
              <div style={{ borderTop: `1px solid ${BLACK}1A`, paddingTop: "1.5rem" }}>
                <p style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: PINK,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  margin: "0 0 0.25rem",
                }}>
                  Becc
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: `${BLACK}55`,
                  margin: 0,
                }}>
                  Founder & Strategist
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 2rem 8rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
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
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: CREAM,
            textTransform: "uppercase",
            lineHeight: 0.95,
            margin: 0,
          }}>
            See what
            <br />we offer.
          </h2>
          <Link
            to="/services"
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
            onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
          >
            View services →
          </Link>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: CREAM,
        borderTop: `1px solid ${BLACK}14`,
        padding: "2.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap" as const,
        gap: "1rem",
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em" }}>
          © 2024 Workhorse Marketing.
        </span>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: "1rem", color: `${BLACK}1A`, letterSpacing: "0.06em" }}>
          WORKHORSE
        </span>
      </footer>
    </div>
  );
}
