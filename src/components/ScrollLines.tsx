"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollLines() {
  const { scrollYProgress } = useScroll();
  // Smooth but responsive — follows scroll without feeling laggy
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.5 });

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* Left line */}
      <Line left="clamp(32px, 6vw, 96px)" progress={progress} delay={0} />
      {/* Right line */}
      <Line right="clamp(32px, 6vw, 96px)" progress={progress} delay={0} />
    </div>
  );
}

function Line({
  left,
  right,
  progress,
}: {
  left?: string;
  right?: string;
  progress: ReturnType<typeof useSpring>;
  delay?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left,
        right,
        width: 1,
        height: "100%",
      }}
    >
      {/* Faint static track */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(201,168,118,0.06) 10%, rgba(201,168,118,0.06) 90%, transparent 100%)",
        }}
      />

      {/* Revealing glow line — grows downward with scroll */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          scaleY: progress,
          transformOrigin: "top center",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(201,168,118,0.55) 8%, rgba(201,168,118,0.25) 60%, rgba(201,168,118,0.1) 100%)",
        }}
      />
    </div>
  );
}
