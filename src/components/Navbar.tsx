"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Story", href: "#about" },
  { label: "Reserve", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 400);
  };

  return (
    <>
      {/* Corner logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="fixed z-50 cursor-pointer"
        style={{ top: 16, left: "clamp(40px, 6vw, 100px)" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        data-hover
      >
        <Logo size={52} color="#C9A876" />
      </motion.div>

      {/* Hamburger */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => setOpen(!open)}
        className="fixed top-7 right-8 z-50 flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label="Menu"
        data-hover
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block h-px w-7 origin-center transition-all"
          style={{ background: "#C9A876" }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="block h-px w-5 transition-all"
          style={{ background: "#F2EDE4" }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block h-px w-7 origin-center transition-all"
          style={{ background: "#C9A876" }}
        />
      </motion.button>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 64px) 48px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 64px) 48px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 64px) 48px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between p-12"
            style={{ background: "#09080A" }}
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-2 mt-24">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => go(link.href)}
                    className="group flex items-baseline gap-4 cursor-pointer py-2"
                    data-hover
                  >
                    <span className="text-xs tracking-widest font-light" style={{ color: "#C9A876" }}>0{i + 1}</span>
                    <span
                      className="font-serif text-6xl md:text-8xl leading-none transition-all duration-300 group-hover:italic"
                      style={{ color: "#F2EDE4" }}
                    >
                      {link.label}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}
              className="flex items-end justify-between"
            >
              <p className="text-xs tracking-widest text-[#4A4040] uppercase">Sri Lanka Luxury Resort</p>
              <p className="text-xs tracking-widest" style={{ color: "#C9A876" }}>@dunaya_dulnetha</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
