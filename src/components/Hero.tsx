"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const chars = "DUNAYA".split("");

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => { document.body.style.overflow = ""; }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax image — right half */}
      <motion.div
        style={{ y: imgY }}
        className="absolute top-0 right-0 w-[55%] h-full z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1400&q=85"
          alt="Dunaya Dulnetha Hotel"
          className="w-full h-full object-cover"
          style={{ height: "115%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #09080A 0%, rgba(9,8,10,0.5) 40%, transparent 70%), linear-gradient(to top, #09080A 0%, transparent 35%)",
          }}
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 z-10 flex flex-col justify-center"
        style={{ paddingLeft: "clamp(32px, 6vw, 96px)", y: textY, opacity }}
      >
        {/* DUNAYA — each letter in its own overflow clip */}
        <div className="flex leading-none" aria-label="DUNAYA">
          {chars.map((char, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block font-serif leading-none select-none"
                style={{
                  fontSize: "clamp(60px, 16vw, 200px)",
                  color: "#F2EDE4",
                  letterSpacing: "-0.01em",
                }}
              >
                {char}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Dulnetha — italic gold */}
        <div className="overflow-hidden" style={{ marginTop: "-0.06em" }}>
          <motion.p
            initial={{ y: "105%" }}
            animate={{ y: 0, x: "clamp(48px, 8vw, 120px)" }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic leading-none select-none"
            style={{
              fontSize: "clamp(32px, 7vw, 96px)",
              color: "#C9A876",
              letterSpacing: "0.02em",
            }}
          >
            Dulnetha
          </motion.p>
        </div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-14 flex flex-col gap-4"
          style={{ left: "clamp(32px, 6vw, 96px)" }}
        >
          <p
            className="font-light"
            style={{ fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A876" }}
          >
            Sri Lanka · Est. 2009
          </p>
          <p
            className="font-light leading-relaxed"
            style={{ fontSize: 13, color: "#F2EDE4", opacity: 0.48, maxWidth: 260 }}
          >
            A sanctuary where nature and luxury<br />exist in perfect harmony.
          </p>
          <motion.button
            whileHover={{ x: 6 }}
            onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer w-fit group"
            style={{ marginTop: 4 }}
            data-hover
          >
            <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A876" }}>
              Explore
            </span>
            <span
              className="block transition-all duration-300 group-hover:w-14"
              style={{ height: 1, width: 32, background: "#C9A876" }}
            />
          </motion.button>
        </motion.div>

        {/* Vertical tag — right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-14 right-8 hidden md:flex flex-col items-center gap-4"
        >
          <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, transparent, #C9A876)" }} />
          <p
            className="font-light"
            style={{
              writingMode: "vertical-rl",
              fontSize: 9,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#C9A876",
              opacity: 0.55,
            }}
          >
            Luxury Hotel &amp; Resort
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ height: 160, background: "linear-gradient(to bottom, transparent, #09080A)" }}
      />
    </section>
  );
}
