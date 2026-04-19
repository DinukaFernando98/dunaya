"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85", label: "Exterior", col: 5, row: 2 },
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=85", label: "Pool", col: 3, row: 1 },
  { src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=700&q=85", label: "Dining", col: 4, row: 1 },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=85", label: "Suite", col: 4, row: 2 },
  { src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&q=85", label: "Spa", col: 4, row: 1 },
  { src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=700&q=85", label: "Lobby", col: 4, row: 1 },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<{ src: string; label: string } | null>(null);

  return (
    <section id="gallery" style={{ background: "#09080A", paddingTop: 128, paddingBottom: 128 }}>
      <div style={{ paddingLeft: "clamp(32px, 6vw, 96px)", paddingRight: "clamp(32px, 6vw, 96px)" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: 56, display: "flex", alignItems: "flex-end", gap: 32 }}
        >
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A876", marginBottom: 12 }}>
              03 / Visual
            </p>
            <h2 className="font-serif" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1, color: "#F2EDE4" }}>
              Gallery
            </h2>
          </div>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "rgba(201,168,118,0.15)", marginBottom: 8 }} className="hidden md:block" />
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "180px",
            gap: 12,
          }}
        >
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                gridColumn: `span ${p.col}`,
                gridRow: `span ${p.row}`,
                borderRadius: 12,
              }}
              data-hover
            >
              <img
                src={p.src}
                alt={p.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                className="group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                style={{ background: "rgba(9,8,10,0.5)", padding: 16 }}
              >
                <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A876" }}>
                  {p.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(9,8,10,0.95)", padding: 24 }}
          >
            <button
              className="absolute top-6 right-6 flex items-center justify-center cursor-pointer rounded-full"
              style={{
                width: 40,
                height: 40,
                border: "1px solid rgba(201,168,118,0.35)",
              }}
              onClick={() => setActive(null)}
              aria-label="Close lightbox"
              data-hover
            >
              <X size={16} style={{ color: "#C9A876" }} />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={active.src}
              alt={active.label}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "85vh", maxWidth: 1024, width: "100%", objectFit: "contain", borderRadius: 16 }}
            />
            <p
              className="absolute bottom-8"
              style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A876", opacity: 0.65 }}
            >
              {active.label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
