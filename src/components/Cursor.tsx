"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Dot — instant (no spring)
  const dotX = useTransform(mx, v => v - 3);
  const dotY = useTransform(my, v => v - 3);

  // Ring — tight spring, offset by half its size (18px)
  const sx = useSpring(mx, { stiffness: 700, damping: 42, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 700, damping: 42, mass: 0.3 });
  const ringX = useTransform(sx, v => v - 18);
  const ringY = useTransform(sy, v => v - 18);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <>
      {/* Gold dot — follows instantly */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          background: "#C9A876",
        }}
      />

      {/* Ring — spring follow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          x: ringX,
          y: ringY,
          border: "1px solid rgba(201,168,118,0.45)",
        }}
      />
    </>
  );
}
