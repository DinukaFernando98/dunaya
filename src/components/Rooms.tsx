"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rooms = [
  {
    num: "01",
    name: "Deluxe Room",
    sub: "Garden View · 42m²",
    price: "18,500",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85",
    tags: ["King Bed", "Garden View", "Free WiFi", "Mini Bar"],
  },
  {
    num: "02",
    name: "Premier Suite",
    sub: "Pool View · 68m²",
    price: "35,000",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85",
    tags: ["King Bed", "Private Balcony", "Jacuzzi", "Butler"],
    featured: true,
  },
  {
    num: "03",
    name: "Royal Villa",
    sub: "Private Pool · 120m²",
    price: "75,000",
    img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=900&q=85",
    tags: ["Private Pool", "Full Kitchen", "Concierge", "Dining"],
  },
];

const PX = "clamp(32px, 6vw, 96px)";

export default function Rooms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rooms" style={{ background: "#09080A", paddingTop: 128, paddingBottom: 128 }}>
      {/* Header */}
      <div
        ref={ref}
        style={{
          paddingLeft: PX,
          paddingRight: PX,
          marginBottom: 64,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A876", marginBottom: 12 }}>
            01 / Accommodations
          </p>
          <h2 className="font-serif" style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1, color: "#F2EDE4" }}>
            Rooms &amp;<br />
            <span className="italic" style={{ color: "#C9A876" }}>Suites</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: 13,
            fontWeight: 300,
            maxWidth: 200,
            textAlign: "right",
            lineHeight: 1.7,
            color: "#F2EDE4",
            opacity: 0.4,
            display: "none",
          }}
          className="md:block"
        >
          Every room is a sanctuary crafted for your perfect escape.
        </motion.p>
      </div>

      {/* Cards */}
      <div style={{ paddingLeft: PX, paddingRight: PX, display: "flex", flexDirection: "column", gap: 20 }}>
        {rooms.map((room, i) => (
          <motion.div
            key={room.num}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hover"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              cursor: "pointer",
              marginLeft: i === 1 ? "clamp(0px, 8vw, 100px)" : 0,
            }}
            data-hover
          >
            <div style={{ position: "relative", height: "clamp(280px, 35vw, 420px)", overflow: "hidden" }}>
              <motion.img
                src={room.img}
                alt={room.name}
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.7 }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(9,8,10,0.88) 0%, rgba(9,8,10,0.25) 55%, transparent 80%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "clamp(24px, 4vw, 56px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%" }}>
                  {/* Left */}
                  <div>
                    <p
                      className="font-serif select-none"
                      style={{ fontSize: 96, lineHeight: 1, color: "rgba(201,168,118,0.12)", marginBottom: 4 }}
                    >
                      {room.num}
                    </p>
                    <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A876", marginBottom: 4 }}>
                      {room.sub}
                    </p>
                    <h3 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#F2EDE4", marginBottom: 12 }}>
                      {room.name}
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {room.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 10,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "4px 12px",
                            borderRadius: 100,
                            border: "1px solid rgba(201,168,118,0.25)",
                            color: "rgba(242,237,228,0.55)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — price */}
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 24 }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(242,237,228,0.4)", marginBottom: 4 }}>
                      from / night
                    </p>
                    <p className="font-serif" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "#C9A876" }}>
                      LKR {room.price}
                    </p>
                    <motion.div
                      variants={{ hover: { opacity: 1, y: 0 } }}
                      initial={{ opacity: 0, y: 6 }}
                      style={{
                        marginTop: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        justifyContent: "flex-end",
                        fontSize: 10,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#C9A876",
                      }}
                    >
                      Book <span style={{ display: "block", height: 1, width: 24, background: "#C9A876" }} />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Featured badge */}
              {room.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    padding: "6px 16px",
                    borderRadius: 100,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    background: "#C9A876",
                    color: "#09080A",
                  }}
                >
                  Most Loved
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
