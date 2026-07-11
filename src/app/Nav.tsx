import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { CREAM, BLACK } from "./constants";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu automatically if the viewport is resized back to desktop width
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 720) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{`
        .nav-desktop-links, .nav-desktop-cta {
          display: flex;
        }
        .nav-mobile-toggle {
          display: none;
        }
        @media (max-width: 720px) {
          .nav-desktop-links, .nav-desktop-cta {
            display: none;
          }
          .nav-mobile-toggle {
            display: flex;
          }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: CREAM,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 2rem",
          height: "4.5rem",
        }}
      >
        {/* Logo — left */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "1.35rem",
            color: BLACK,
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          WORKHORSE
        </Link>

        {/* Links — centre (desktop only) */}
        <div className="nav-desktop-links" style={{ alignItems: "center", gap: "2.5rem" }}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              style={({ isActive }) => ({
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: BLACK,
                textDecoration: "none",
                opacity: isActive ? 1 : 0.5,
                transition: "opacity 0.2s",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA — right (desktop only) */}
        <div className="nav-desktop-cta" style={{ justifyContent: "flex-end" }}>
          <a
            href="mailto:hello@workhorse.co"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLACK,
              textDecoration: "none",
              border: `1.5px solid ${BLACK}`,
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = BLACK;
              e.currentTarget.style.color = CREAM;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = BLACK;
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger toggle — mobile only */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            justifySelf: "end",
            alignItems: "center",
            justifyContent: "center",
            width: "2.4rem",
            height: "2.4rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "22px" }}>
            <span
              style={{
                display: "block",
                height: "2px",
                background: BLACK,
                borderRadius: "2px",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: BLACK,
                borderRadius: "2px",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: BLACK,
                borderRadius: "2px",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "4.5rem",
            left: 0,
            right: 0,
            zIndex: 49,
            background: CREAM,
            borderTop: `1px solid ${BLACK}1A`,
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem 2rem 2rem",
            gap: "1.5rem",
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: BLACK,
                textDecoration: "none",
                opacity: isActive ? 1 : 0.6,
              })}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="mailto:hello@workhorse.co"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: CREAM,
              textDecoration: "none",
              background: BLACK,
              borderRadius: "999px",
              padding: "0.8rem 1.5rem",
              textAlign: "center",
            }}
          >
            Get in touch
          </a>
        </div>
      )}
    </>
  );
}
