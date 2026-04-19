"use client";

import { motion } from "framer-motion";

// Long diagonal lines that drift slowly — subtle, luxurious
const lines = [
  { x1: "0%", x2: "100%", delay: 0,    dur: 18, opacity: 0.06 },
  { x1: "0%", x2: "100%", delay: -4,   dur: 22, opacity: 0.04 },
  { x1: "0%", x2: "100%", delay: -8,   dur: 26, opacity: 0.07 },
  { x1: "0%", x2: "100%", delay: -2,   dur: 20, opacity: 0.035 },
  { x1: "0%", x2: "100%", delay: -11,  dur: 30, opacity: 0.05 },
  { x1: "0%", x2: "100%", delay: -6,   dur: 24, opacity: 0.045 },
  { x1: "0%", x2: "100%", delay: -14,  dur: 28, opacity: 0.03 },
  { x1: "0%", x2: "100%", delay: -9,   dur: 32, opacity: 0.055 },
];

// Vertical positions (% of viewport height) for each line
const yPositions = [8, 18, 30, 42, 55, 66, 78, 90];

export default function ParallaxLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C9A876" stopOpacity="0" />
            <stop offset="20%"  stopColor="#C9A876" stopOpacity="1" />
            <stop offset="80%"  stopColor="#C9A876" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A876" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C9A876" stopOpacity="0" />
            <stop offset="35%"  stopColor="#C9A876" stopOpacity="1" />
            <stop offset="65%"  stopColor="#C9A876" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A876" stopOpacity="0" />
          </linearGradient>
        </defs>

        {lines.map((line, i) => {
          const y = (yPositions[i] / 100) * 900;
          return (
            <motion.line
              key={i}
              x1={-200}
              x2={1640}
              y1={y}
              y2={y + (i % 2 === 0 ? -60 : 60)}
              stroke={`url(#${i % 2 === 0 ? "lineGrad" : "lineGrad2"})`}
              strokeWidth={0.6}
              opacity={line.opacity}
              initial={{ x: i % 2 === 0 ? -300 : 300 }}
              animate={{ x: i % 2 === 0 ? 300 : -300 }}
              transition={{
                duration: line.dur,
                delay: line.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Vertical slow-drifting lines on the sides */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "clamp(32px, 6vw, 96px)",
          width: 1,
          height: "100%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(201,168,118,0.08) 20%, rgba(201,168,118,0.12) 50%, rgba(201,168,118,0.08) 80%, transparent 100%)",
        }}
        animate={{ scaleY: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          right: "clamp(32px, 6vw, 96px)",
          width: 1,
          height: "100%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(201,168,118,0.06) 20%, rgba(201,168,118,0.1) 50%, rgba(201,168,118,0.06) 80%, transparent 100%)",
        }}
        animate={{ scaleY: [1, 1.04, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
