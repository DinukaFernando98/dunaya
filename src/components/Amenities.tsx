"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Waves, Utensils, Dumbbell, Coffee, Car, Clock, Star, Wind } from "lucide-react";

const items = [
  { icon: Waves,    label: "Infinity Pool",   desc: "Heated, year-round"      },
  { icon: Utensils, label: "Fine Dining",      desc: "Local & world flavours"  },
  { icon: Dumbbell, label: "Fitness Centre",   desc: "State-of-the-art"        },
  { icon: Wind,     label: "Spa & Wellness",   desc: "Holistic therapies"      },
  { icon: Car,      label: "Valet Parking",    desc: "Complimentary"           },
  { icon: Clock,    label: "24/7 Concierge",   desc: "Always at hand"          },
  { icon: Star,     label: "Premium Bar",      desc: "Curated cocktails"       },
  { icon: Coffee,   label: "In-Room Dining",   desc: "Anytime you wish"        },
];

const PX = "clamp(32px, 6vw, 96px)";

export default function Amenities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="amenities"
      ref={ref}
      style={{ background: "#0D0C0E", paddingTop: 128, paddingBottom: 128 }}
    >
      <div style={{ paddingLeft: PX, paddingRight: PX }}>

        {/* Two-column layout: left = heading + grid, right = image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "start",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Section label + heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              style={{ marginBottom: 56 }}
            >
              <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A876", marginBottom: 14 }}>
                02 / Facilities
              </p>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1, color: "#F2EDE4" }}
              >
                World-Class<br />
                <span className="italic" style={{ color: "#C9A876" }}>Amenities</span>
              </h2>
            </motion.div>

            {/* 2×4 amenity grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 12,
              }}
            >
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.07 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    style={{
                      position: "relative",
                      borderRadius: 14,
                      padding: "clamp(18px, 2vw, 28px)",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(201,168,118,0.1)",
                    }}
                  >
                    {/* Ghost number */}
                    <p
                      className="font-serif select-none pointer-events-none"
                      style={{
                        position: "absolute",
                        bottom: -12,
                        right: 4,
                        fontSize: "5rem",
                        lineHeight: 1,
                        color: "rgba(201,168,118,0.05)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "rgba(201,168,118,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <Icon size={17} style={{ color: "#C9A876" }} />
                    </div>
                    <p className="font-serif" style={{ fontSize: "clamp(14px, 1.3vw, 18px)", color: "#F2EDE4", marginBottom: 4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(242,237,228,0.36)" }}>
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN — image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "clamp(260px, 28vw, 400px)",
              position: "sticky",
              top: 120,
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                height: "clamp(380px, 48vw, 580px)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85"
                alt="Hotel pool"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13,12,14,0.85) 0%, transparent 50%)",
                }}
              />

              {/* Stat */}
              <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                <p className="font-serif" style={{ fontSize: 44, color: "#C9A876", lineHeight: 1 }}>5★</p>
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#F2EDE4",
                    opacity: 0.65,
                    marginTop: 6,
                  }}
                >
                  Luxury Rating
                </p>
              </div>
            </div>

            {/* Small caption */}
            <p
              style={{
                marginTop: 20,
                fontSize: 12,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(242,237,228,0.38)",
                paddingLeft: 2,
              }}
            >
              Every facility designed to make your stay truly unforgettable — from sunrise dips to late-night cocktails.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
