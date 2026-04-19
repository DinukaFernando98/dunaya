"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Logo from "./Logo";

// Scroll lines sit at clamp(32px,6vw,96px) from each edge.
// Add generous extra padding so footer text never overlaps them.
const PX = "clamp(80px, 10vw, 160px)";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#09080A",
        borderTop: "1px solid rgba(201,168,118,0.08)",
        paddingLeft: PX,
        paddingRight: PX,
        paddingTop: 40,
        paddingBottom: 40,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      }}
    >
      {/* Logo + brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Logo size={36} color="#C9A876" />
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 300, color: "rgba(242,237,228,0.22)" }}>
          © {new Date().getFullYear()} Dunaya Dulnetha · All rights reserved
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <motion.a
          href="https://www.instagram.com/dunaya_dulnetha/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none" }}
          data-hover
        >
          <ExternalLink size={12} style={{ color: "#C9A876", opacity: 0.65 }} />
          <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 300, color: "rgba(242,237,228,0.32)" }}>
            Instagram
          </span>
        </motion.a>
        <span style={{ fontSize: 10, color: "rgba(242,237,228,0.15)" }}>·</span>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 300, color: "rgba(242,237,228,0.18)" }}>
          Sri Lanka Luxury
        </p>
      </div>
    </footer>
  );
}
