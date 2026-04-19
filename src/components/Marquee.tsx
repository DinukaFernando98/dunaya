"use client";

import { motion } from "framer-motion";

const items = ["Luxury", "·", "Serenity", "·", "Sri Lanka", "·", "Fine Dining", "·", "Infinity Pool", "·", "5 Stars", "·"];
const repeated = [...items, ...items, ...items, ...items];

export default function Marquee() {
  return (
    <div
      style={{
        overflow: "hidden",
        paddingTop: 20,
        paddingBottom: 20,
        borderTop: "1px solid rgba(201,168,118,0.1)",
        borderBottom: "1px solid rgba(201,168,118,0.1)",
        background: "rgba(201,168,118,0.02)",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 32, width: "max-content", willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 11,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontWeight: 300,
              color: item === "·" ? "#C9A876" : "#F2EDE4",
              opacity: item === "·" ? 0.7 : 0.3,
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
