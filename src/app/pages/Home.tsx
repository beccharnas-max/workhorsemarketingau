import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { CREAM, BLACK, EASE, HERO_BLOB, BOX_SHAPE, SERVICES_DATA } from "../constants";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";

const PINK = "#E86B9A";


export default function Home() {
  const [wallpaperOpacity, setWallpaperOpacity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return;
      const heroH = heroRef.current.offsetHeight;
      const scrolled = window.scrollY;
      const fadeStart = heroH * 0.7;
      const fadeEnd = heroH;
      if (scrolled <= fadeStart) setWallpaperOpacity(1);
      else if (scrolled >= fadeEnd) setWallpaperOpacity(0);
      else setWallpaperOpacity(1 - (scrolled - fadeStart) / (fadeEnd - fadeStart));
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
        {/* WORKHORSE wallpaper */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, paddingTop: "4.5rem", opacity: wallpaperOpacity, userSelect: "none", pointerEvents: "none" }}
        >
          {Array.from({ length: 12 }).map((_, row) => (
            <div key={row} style={{ display: "flex", marginLeft: row % 2 === 1 ? "-4vw" : "0", whiteSpace: "nowrap", lineHeight: 1.05 }}>
              {Array.from({ length: 5 }).map((_, col) => (
                <span key={col} style={{ fontFamily: "'Anton', sans-serif", fontSize: "10vw", color: BLACK, letterSpacing: "0.02em", flexShrink: 0, paddingRight: "0.2em" }}>
                  WORKHORSE
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Orange blob */}
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
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", color: `${CREAM}A6`, textTransform: "uppercase", margin: "0 0 1.2rem" }}>
              Marketing for Real Businesses
            </p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem,5.5vw,4.4rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 2rem" }}>
              Bold Campaigns.{" "}
              <span style={{ display: "block" }}>No Agency Run-Around.</span>
            </h1>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/services"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: CREAM, border: `1.5px solid ${CREAM}`, background: "transparent", padding: "0.65rem 1.8rem", textDecoration: "none", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
              >
                See Our Services →
              </Link>
              <Link
                to="/about"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: `${CREAM}CC`, border: "none", background: "transparent", textDecoration: "none", padding: "0.65rem 0.5rem" }}
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
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", color: `${CREAM}8C`, textTransform: "uppercase", margin: "0 0 1rem" }}>
            Who We Are
          </p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.0, color: CREAM, textTransform: "uppercase", margin: "0 0 1.5rem" }}>
            Marketing that works harder.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: `${CREAM}B8`, lineHeight: 1.75, margin: "0 0 2rem" }}>
            Sometimes your marketing just needs a bright idea. Sometimes it needs a full campaign. Either way we're here to help!
          </p>
          <Link
            to="/about"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: CREAM, textDecoration: "none", border: `1px solid ${CREAM}55`, padding: "0.6rem 1.6rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = CREAM; e.currentTarget.style.color = PINK; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = CREAM; }}
          >
            About us →
          </Link>
        </motion.div>
      </section>

      {/* ── Services accordion ── */}
      <section style={{ background: CREAM, padding: "6rem 2rem" }}>

        {/* SVG cutout heading */}
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

            {/* cream bg */}
            <rect width="900" height="280" fill={CREAM} />

            {/* cream covers everything outside blobs */}
            <rect width="900" height="280" fill={CREAM} />

            {/* blobs */}
            <ellipse cx="310" cy="155" rx="255" ry="100" fill="#E86B9A" />
            <ellipse cx="185" cy="200" rx="135" ry="68" fill="#E86B9A" />
            <ellipse cx="390" cy="105" rx="160" ry="70" fill="#E86B9A" />
            <ellipse cx="700" cy="145" rx="110" ry="88" fill="#E86B9A" />
            <ellipse cx="768" cy="188" rx="68" ry="48" fill="#E86B9A" />

            {/* foreground rows clipped to blobs */}
            <text y="78"  fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill="#1C3A2A" clipPath="url(#blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text x="-170" y="162" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill="#1C3A2A" clipPath="url(#blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
            <text y="246" fontFamily="'Anton','Impact',sans-serif" fontSize="78" fill="#1C3A2A" clipPath="url(#blobs-clip)">SERVICES SERVICES SERVICES SERVICES SERVICES</text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "720px", margin: "0 auto" }}
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
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 0.75rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                    >
                      <span
                        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "2.4rem", color: BLACK, textTransform: "uppercase", letterSpacing: "0.03em", transition: "color 0.2s", lineHeight: 1 }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = PINK; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = BLACK; }}
                      >
                        {service.title}
                      </span>
                      {/* Orange blob indicator */}
                      <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 3C15.2 2.4 20.5 5.1 21 10.5C21.5 15.5 18.2 21.2 12.8 21C7.5 20.8 2.8 17 2.5 11.5C2.2 6.2 6.8 3.8 12 3Z"
                          fill={PINK}
                        />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content
                    className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: `${BLACK}99`, lineHeight: 1.8, paddingBottom: "1.5rem", margin: 0, maxWidth: "36rem", paddingLeft: "0.75rem" }}>
                      {service.body}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
          <div style={{ marginTop: "2.5rem" }}>
            <Link
              to="/services"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BLACK, textDecoration: "none", border: `1px solid ${BLACK}33`, padding: "0.65rem 1.8rem", transition: "background 0.2s, color 0.2s", borderRadius: "9999px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = CREAM; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BLACK; }}
            >
              All services →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── No Bullshit ── */}
      <section style={{ background: "#FFFFED", padding: "8rem 2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ maxWidth: "640px", textAlign: "center" }}
        >
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem,5.5vw,4rem)", color: BLACK, textTransform: "uppercase", lineHeight: 1, margin: "0 0 2rem" }}>
            No Bullshit. Just Results.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: `${BLACK}99`, lineHeight: 1.85, margin: 0 }}>
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
          style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "3rem", justifyContent: "center", alignItems: "center" }}
        >
          {/* Blob 1 */}
          <div style={{
            flex: "1 1 0",
            minWidth: 0,
            height: "clamp(240px, 35vw, 480px)",
            borderRadius: HERO_BLOB,
            overflow: "hidden",
            position: "relative",
          }}>
            <img src={image1} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>

          {/* Blob 2 */}
          <div style={{
            flex: "1 1 0",
            minWidth: 0,
            height: "clamp(240px, 35vw, 480px)",
            borderRadius: HERO_BLOB,
            overflow: "hidden",
            position: "relative",
          }}>
            <img src={image2} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>

          {/* Blob 3 */}
          <div style={{
            flex: "1 1 0",
            minWidth: 0,
            height: "clamp(240px, 35vw, 480px)",
            borderRadius: HERO_BLOB,
            overflow: "hidden",
            position: "relative",
          }}>
            <img src={image3} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
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
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Services</p>
            {["Marketing & Campaigns", "Paid Social Advertising", "Brand Strategy", "Content Creation"].map((item) => (
              <p key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: `${BLACK}99`, margin: "0 0 0.5rem", cursor: "pointer" }}>{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Get in touch</p>
            <a href="mailto:hello@workhorse.co" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: PINK, textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>hello@workhorse.co</a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: `${BLACK}59`, margin: 0 }}>Based in Australia.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Follow</p>
            {["Instagram", "LinkedIn", "TikTok"].map((p) => (
              <p key={p} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: `${BLACK}99`, margin: "0 0 0.5rem", cursor: "pointer" }}>{p}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${BLACK}14`, paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>
            © 2024 Workhorse Marketing. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: `${BLACK}40`, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>
            Marketing for Real Businesses
          </p>
        </div>
      </footer>
    </div>
  );
}
