"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const stats = [
  { n: "15", unit: "+", label: "Years" },
  { n: "200", unit: "+", label: "Rooms" },
  { n: "5", unit: "★", label: "Stars" },
  { n: "12", unit: "", label: "Awards" },
];

const PX = "clamp(32px, 6vw, 96px)";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="about" style={{ background: "#0D0C0E", paddingTop: 128, paddingBottom: 128, overflow: "hidden" }}>
      <div style={{ paddingLeft: PX, paddingRight: PX }}>

        {/* Label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A876", marginBottom: 64 }}
        >
          04 / Our Story
        </motion.p>

        {/* 3-column editorial layout */}
        <div
          style={{ display: "grid", gap: 48 }}
          className="grid-cols-1 md:grid-cols-12"
        >
          {/* Col 1 — headline + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <h2 className="font-serif" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05, color: "#F2EDE4", marginBottom: 40 }}>
              A Legacy<br />
              <span className="italic" style={{ color: "#C9A876" }}>of Luxury</span>
            </h2>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 40 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
                  style={{ textAlign: "center" }}
                >
                  <p className="font-serif" style={{ fontSize: 28, lineHeight: 1, color: "#C9A876", marginBottom: 6 }}>
                    {s.n}<span style={{ fontSize: 18 }}>{s.unit}</span>
                  </p>
                  <p style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(242,237,228,0.38)" }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — parallax image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="md:col-span-4"
            style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: 420 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=85"
              alt="Hotel lobby"
              style={{ x: imgX, width: "110%", height: "100%", objectFit: "cover", marginLeft: "-5%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(13,12,14,0.85) 100%)" }} />
          </motion.div>

          {/* Col 3 — body text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "rgba(242,237,228,0.5)" }}>
                Dunaya Dulnetha was born from a vision to create a sanctuary where the rich cultural heritage of Sri Lanka meets world-class luxury hospitality.
              </p>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "rgba(242,237,228,0.5)" }}>
                Every corner tells a story — hand-crafted local artworks, curated culinary experiences, and spaces where time slows and beauty surrounds you.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", width: "fit-content" }}
              className="group"
              data-hover
            >
              <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A876" }}>
                Our Philosophy
              </span>
              <span
                className="transition-all duration-300 group-hover:w-14"
                style={{ display: "block", height: 1, width: 32, background: "#C9A876" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
