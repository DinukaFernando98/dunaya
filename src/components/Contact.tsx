"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";

const PX = "clamp(32px, 6vw, 96px)";

const contactInfo = [
  { icon: MapPin, text: "Sri Lanka" },
  { icon: Phone, text: "+94 77 123 4567" },
  { icon: Mail, text: "reservations@dunayadulnetha.lk" },
  { icon: ExternalLink, text: "@dunaya_dulnetha" },
];

const fields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Jane Doe", required: true },
  { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com", required: true },
  { id: "checkin", label: "Check-In", type: "date", placeholder: "", required: false },
  { id: "checkout", label: "Check-Out", type: "date", placeholder: "", required: false },
] as const;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", checkin: "", checkout: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(242,237,228,0.15)",
    paddingBottom: 12,
    paddingTop: 0,
    fontSize: 13,
    fontWeight: 300,
    color: "#F2EDE4",
    outline: "none",
    colorScheme: "dark",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" style={{ background: "#09080A", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Top block */}
      <div
        ref={ref}
        style={{
          paddingLeft: PX,
          paddingRight: PX,
          paddingTop: 96,
          paddingBottom: 64,
          borderBottom: "1px solid rgba(201,168,118,0.1)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A876", marginBottom: 16 }}>
            05 / Reserve
          </p>
          <h2 className="font-serif" style={{ fontSize: "clamp(40px, 7vw, 100px)", lineHeight: 1, color: "#F2EDE4" }}>
            Begin Your<br />
            <span className="italic" style={{ color: "#C9A876" }}>Journey</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {contactInfo.map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Icon size={13} style={{ color: "#C9A876", opacity: 0.75, flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(242,237,228,0.5)" }}>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Form */}
      <div style={{ flex: 1, paddingLeft: PX, paddingRight: PX, paddingTop: 80, paddingBottom: 80 }}>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 96, textAlign: "center" }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,118,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                <ArrowRight size={26} style={{ color: "#C9A876" }} />
              </div>
              <h3 className="font-serif" style={{ fontSize: 40, color: "#F2EDE4", marginBottom: 12 }}>Thank you.</h3>
              <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(242,237,228,0.45)" }}>
                We will be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ maxWidth: 720 }}
            >
              {/* Field grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 48px", marginBottom: 40 }}>
                {fields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      style={{ display: "block", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A876", opacity: 0.85, marginBottom: 12, fontFamily: "inherit" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              {/* Textarea */}
              <div style={{ marginBottom: 48 }}>
                <label
                  htmlFor="message"
                  style={{ display: "block", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A876", opacity: 0.85, marginBottom: 12, fontFamily: "inherit" }}
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Any special requirements…"
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: "flex", alignItems: "center", gap: 20, cursor: "pointer", background: "none", border: "none" }}
                className="group"
                data-hover
              >
                <span
                  style={{
                    padding: "14px 32px",
                    borderRadius: 100,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    fontWeight: 400,
                    background: loading ? "rgba(201,168,118,0.4)" : "#C9A876",
                    color: "#09080A",
                    transition: "background 0.3s",
                    fontFamily: "inherit",
                  }}
                >
                  {loading ? "Sending…" : "Send Request"}
                </span>
                <span
                  className="transition-all duration-300 group-hover:w-12"
                  style={{ display: "block", height: 1, width: 24, background: "#C9A876" }}
                />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
