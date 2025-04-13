import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import illustration from "../assets/illustration.png";

export default function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Left Panel - Form */}
      <div
        style={{
          backgroundColor: "#f3f5f7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
            width: "100%",
            maxWidth: "450px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
              {subtitle}
            </p>
          )}

          <div>{children}</div>

          <div style={{ marginTop: "1.5rem", fontSize: "1rem" }}>
            {footerText}{" "}
            <Link to={footerLink} style={{ color: "#1a73e8", textDecoration: "none" }}>
              {footerLinkText}
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Logo & Illustration */}
      <div
        style={{
          backgroundColor: "#f9fafb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src={logo} alt="Vita Health Logo" style={{ width: 100, marginBottom: "1rem" }} />
          <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem", color: "#1a202c" }}>
            Vita Health
          </h1>
          <p style={{ fontStyle: "italic", fontSize: "1.2rem", color: "#4a5568" }}>
            Streamlining patient care.
          </p>
        </div>

        <img
          src={illustration}
          alt="Doctor Illustration"
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
