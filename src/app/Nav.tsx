import { Link, NavLink } from "react-router";
import { CREAM, BLACK } from "./constants";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

export default function Nav() {
  return (
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

      {/* Links — centre */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
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

      {/* CTA — right */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
    </nav>
  );
}
