import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { motion } from "motion/react";
import { CREAM, BLACK, EASE } from "../constants";

const PINK = "#d01c61";
const LIME = "#D2F53C";
const EMAIL = "helloworkhorseco@gmail.com";

// Get a free access key at web3forms.com (enter the email you want enquiries sent to),
// then add it to .env.local AND to your Vercel project's Environment Variables:
//   VITE_WEB3FORMS_KEY=your-key-here
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const HELP_OPTIONS = [
  "A marketing plan",
  "Getting found (Google, local SEO, reviews)",
  "Ad campaigns (Meta & Google)",
  "Tracking & reporting",
  "Part-time marketing lead",
  "Not sure yet",
];

const SPEND_OPTIONS = [
  "Under $1,000 / month",
  "$1,000 to $3,000 / month",
  "$3,000 to $10,000 / month",
  "$10,000+ / month",
  "Not sure yet",
];

const FOOTER_SERVICES = [
  "A plan that fits",
  "Get found",
  "Campaigns, start to finish",
  "Know your numbers, spend less",
];

const fieldStyle: CSSProperties = {
  width: "100%",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "1rem",
  color: BLACK,
  background: "#FFFFFF",
  border: `1.5px solid ${BLACK}33`,
  borderRadius: "16px",
  padding: "0.85rem 1.1rem",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: BLACK,
  margin: "0 0 0.45rem",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    document.title = "Contact | Workhorse Marketing Consultant, Sydney";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Get in touch with Workhorse Marketing. Tell me about your Sydney small business and what you'd like help with."
      );
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${data.get("name")}`,
          from_name: "Workhorse website",
          name: data.get("name"),
          email: data.get("email"),
          business: data.get("business"),
          help_with: data.get("help_with"),
          ad_spend: data.get("ad_spend"),
          message: data.get("message"),
          botcheck: data.get("botcheck"), // spam trap: real people leave this empty
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ background: CREAM, paddingTop: "4.5rem", overflowX: "clip" }}>
      {/* ── Intro + form ── */}
      <section style={{ padding: "2rem 1.5rem 6rem" }}>
        <div className="grid md:grid-cols-2" style={{ maxWidth: "1100px", margin: "0 auto", gap: "2rem", alignItems: "start" }}>
          {/* Left: pink intro panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              position: "relative",
              overflow: "hidden",
              background: PINK,
              borderRadius: "clamp(2rem,5vw,4rem) clamp(1.25rem,3vw,2.5rem) clamp(2.5rem,7vw,5rem) clamp(1.25rem,4vw,3rem)",
              padding: "clamp(2.5rem,5vw,4rem)",
              boxShadow: "0 40px 90px rgba(208,28,97,0.25)",
            }}
          >
            <div
              aria-hidden="true"
              style={{ position: "absolute", right: "-4rem", bottom: "-4rem", width: "clamp(8rem,20vw,14rem)", height: "clamp(8rem,20vw,14rem)", background: LIME, borderRadius: "58% 42% 63% 37% / 41% 55% 45% 59%" }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.22em", color: `${CREAM}B3`, textTransform: "uppercase", margin: "0 0 1rem" }}>
                Contact
              </p>
              <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem,6vw,4.5rem)", lineHeight: 0.92, color: CREAM, textTransform: "uppercase", margin: "0 0 1.25rem" }}>
                Let's talk.
                <br />
                <span style={{ color: LIME }}>No pitch deck.</span>
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem,1.5vw,1.15rem)", color: `${CREAM}E6`, lineHeight: 1.6, margin: "0 0 1.5rem", maxWidth: "420px" }}>
                Tell me a bit about your business and what you'd like help with. I'll reply personally, and you'll deal with me, not an account manager.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: `${CREAM}E6`, margin: 0 }}>
                Prefer email?{" "}
                <a href={`mailto:${EMAIL}`} style={{ color: LIME, fontWeight: 700, textDecoration: "none" }}>
                  {EMAIL}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            style={{ background: "#FFFFED", border: `1.5px solid ${BLACK}14`, borderRadius: "16px 56px 16px 56px", padding: "clamp(1.75rem,4vw,3rem)" }}
          >
            {status === "sent" ? (
              <div role="status" style={{ textAlign: "center", padding: "2rem 0" }}>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,2.8rem)", textTransform: "uppercase", color: BLACK, lineHeight: 1, margin: "0 0 1rem" }}>
                  Thanks, <span style={{ color: PINK }}>got it.</span>
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}B3`, lineHeight: 1.7, margin: 0 }}>
                  Your message is in. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Your name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="business" style={labelStyle}>Business name</label>
                  <input id="business" name="business" type="text" autoComplete="organization" style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="help_with" style={labelStyle}>What do you need help with?</label>
                  <select id="help_with" name="help_with" defaultValue="" style={fieldStyle}>
                    <option value="" disabled>Choose one</option>
                    {HELP_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ad_spend" style={labelStyle}>Rough monthly ad budget (optional)</label>
                  <select id="ad_spend" name="ad_spend" defaultValue="" style={fieldStyle}>
                    <option value="">Choose one</option>
                    {SPEND_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Tell me about your business</label>
                  <textarea id="message" name="message" rows={5} required style={{ ...fieldStyle, resize: "vertical" }} />
                </div>

                {/* Spam trap: hidden from people, bots fill it in */}
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ alignSelf: "flex-start", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: BLACK, background: LIME, border: `1.5px solid ${BLACK}`, padding: "0.9rem 2.4rem", borderRadius: "9999px", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1, transition: "background 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.background = PINK; e.currentTarget.style.color = CREAM; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = LIME; e.currentTarget.style.color = BLACK; }}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>

                {status === "error" && (
                  <p role="alert" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: PINK, lineHeight: 1.6, margin: 0 }}>
                    Something went wrong sending that. Please try again, or email me directly at{" "}
                    <a href={`mailto:${EMAIL}`} style={{ color: PINK, fontWeight: 700 }}>{EMAIL}</a>.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
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
              <p key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}99`, margin: "0 0 0.5rem" }}>{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Get in touch</p>
            <a href={`mailto:${EMAIL}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: PINK, textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>{EMAIL}</a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", color: `${BLACK}59`, margin: 0 }}>Based in Sydney.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: `${BLACK}59`, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 1rem" }}>Follow</p>
            {["Instagram", "LinkedIn", "TikTok"].map((p) => (
              <p key={p} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: `${BLACK}99`, margin: "0 0 0.5rem" }}>{p}</p>
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
